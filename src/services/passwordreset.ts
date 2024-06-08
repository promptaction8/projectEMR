import { Connection } from 'mysql2/promise'
import { getUserEmail, getUserName } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare, hash } from 'bcrypt'
import { SECRET_KEY } from '@/constants'
import type { NextApiRequest, NextApiResponse } from 'next'
import sha256 from 'crypto-js/sha256'
import { passwordReset } from '@/dao/users'
import nodemailer from 'nodemailer'
import randomstring from 'randomstring'
import { passwordChangeByCertificate } from '@/dao/certificate'

// 로직
// 비밀번호 초기화를 요청하는 api 엔드포인트를 만듬
// 사용자의 이메일을과 이름을 받음
// DB에서 해당 사용자의 이메일이 일치하는지 확인
// 존재하지 않으면 에러처리, 존재하면 해당 사용자의 이메일로 이메일을 보내고(백엔드가 보낼 때 인증코드를 난수로 만들고 이거를 DB에 넣어야함. dao 따로 제작 필요)
// DB에는 이메일인증코드 테이블이 필요함. DB에 데이터까지 넣었으면 똑같이 인증코드를 이메일로 보낼거임.
// 사용자는 이메일을 받음.
// 프론트에서는 이메일 인증 페이지라고 따로 하나 더 만들어줘야함. 그 페이지 주소의 쿼리스트링으로 인증코드를 담는거.
// 링크를 타게 하거나 인증코드를 쓰라고 하거나. 링크가 더 깔끔함.
// 링크는 인증코드를 담고 있는 링크여야함. querystring으로 url(링크) 안에 넣어야함.
// 사용자의 이메일 내부 내용에 임의로 생성된 임시 비밀번호를 받음.
// 임시 비밀번호를 생성할 때 해시화가 되서 디비에 업데이트 되고 사용자에게는 해시화 되지 않는 비밀번호 전송
// 사용자는 임시 비밀번호로 로그인 후 새로운 비밀번호를 설정함.
// ex : 현재 시간 + 이메일 + a 를 가지고 데이터를 만들고 그 전체를 해시화 시킴.
// crypto-js
// const hashDigest = sha256(nonce + message) ( 현재 날짜 new Date + 재료 )
// idx, 인증코드, 이메일, 생성날짜(createdAt).
export const passwordResetService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { email, name } = req.body
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    const user: any = await getUserEmail(email, connection)
    if (!email || !isValidEmail(email)) {
        return res
            .status(400)
            .json({ error: '이메일이 유효한 형식이 아닙니다.' })
    }
    if (!user || user.length === 0 || user[0].email !== email) {
        return res.status(400).json({ error: '해당 이메일이 없습니다.' })
    }
    const userInfo: any = await getUserEmail(email, connection)
    const generateTempPassword = await randomstring.generate(10)
    const hashedNewPassword = await hash(generateTempPassword, 10)
    await passwordChangeByCertificate(hashedNewPassword, email, connection)
    const emailCode = await sha256(userInfo[2] + new Date() + userInfo[3])
    await passwordReset(email, emailCode.toString(), connection)
    // ↑여기까지 하면 생성된 인증코드가 DB로 들어감.
    // 이 다음에 바로 DB에 들어간 인증코드가 해당 이메일로 발송되어야 함.
    const transporter = nodemailer.createTransport(
        // 'smtps://jinwoo30754:eunah30754@smtp.naver.com:587'
        {
            host: 'smtp.naver.com',
            port: 587,
            secure: false,
            auth: {
                user: 'jinwoo30754',
                pass: 'DHSCHY5QGG28',
            },
        }
    )
    const mailOptions = {
        from: 'jinwoo30754@naver.com',
        // to 부분 클라이언트 이메일로 바꿔야함
        to: 'jinwoo30754@naver.com',
        subject: '이메일 인증코드입니다',
        html: `
        <p>안녕하세요</p>
        <p>이메일 인증코드를 받으셨습니다.</p>
        <p>아래의 '인증완료하기' 버튼을 눌러 이메일 인증을 완료해주세요:</p>
        <p>임시 비밀번호 입니다 ${generateTempPassword}</p>
        <a href = 'http://localhost:3000/temp/emailcertificate?code=${emailCode}'><button>인증완료하기</button></a>
        <p>감사합니다.</p>
    `,
    }
    await transporter.sendMail(mailOptions)
    res.status(200).json({
        message: '인증 메일을 발송했습니다',
        generateTempPassword,
    })
}
