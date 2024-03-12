import { Connection } from 'mysql2/promise'
import { getUser } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare, hash } from 'bcrypt'
import { SECRET_KEY } from '@/constants'
import { passwordChange } from '@/dao/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import sha256 from 'crypto-js/sha256'
import { passwordReset } from '@/dao/users'

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

export const passwordResetService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { email, password } = req.body
    const user = await getUser(email, connection)
    if (!user) {
        res.status(400).json({ error: '해당 이메일이 없습니다' })
    }
    const userInfo: any = await getUser(email, connection)
    const emailCode = await sha256(userInfo[2] + new Date() + userInfo[3])
    await passwordReset(email, emailCode, connection)
    // ex : 현재 시간 + 이메일 + a 를 가지고 데이터를 만들고 그 전체를 해시화 시킴.
    // crypto-js
    // const hashDigest = sha256(nonce + message) ( 현재 날짜 new Date + 재료 )
    // idx, 인증코드, 이메일, 생성날짜(createdAt).
}
