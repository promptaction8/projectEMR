import type { NextApiRequest, NextApiResponse } from 'next'
import { getEmployeeId } from '@/dao/employeeAccounts'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { setCookie } from 'nookies'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        //직원 로그인
        //req.body에서 id와 password를 가져온다.
        const { id, password } = req.body
        //직원 아이디로 DB 조회
        const checkAccount: any = await getEmployeeId(id)
        // 아이디와 비밀번호 입력 확인
        if (!id || !password) {
            return res
                .status(400)
                .json({ message: '아이디와 비밀번호를 입력해주세요' })
        }
        // 계정 존재 여부 확인
        if (
            !checkAccount ||
            checkAccount.length === 0 ||
            checkAccount.id === undefined
        ) {
            return res
                .status(401)
                .json({ message: '아이디가 존재하지 않습니다' })
        }
        // 비밀번호 비교
        const matchPassword = await compare(password, checkAccount.password)

        if (!matchPassword) {
            return res
                .status(401)
                .json({ message: '비밀번호가 일치하지 않습니다' })
        }
        // 토큰 발급
        const issuedAt = Math.floor(Date.now() / 1000)
        const expirationTime = issuedAt + 5400 // 90분
        const token = sign(
            {
                id: checkAccount.id,
                email: checkAccount.email,
                department: checkAccount.depart,
                position: checkAccount.position,
                iat: issuedAt,
                exp: expirationTime,
            },
            process.env.SECRET_KEY
        )
        //쿠기에 토큰 저장
        setCookie({ res }, 'token', token, {
            maxAge: 60 * 60, // 1시간
            path: '/', // 쿠키의 경로
            httpOnly: true,
            secure: false,
        })
        return res.status(200).json({ message: '로그인 성공' })
    } else {
        res.status(405).json({ message: '허용되지 않는 메소드입니다' })
    }
}
