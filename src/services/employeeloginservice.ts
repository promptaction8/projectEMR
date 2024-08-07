import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { Jwt, sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { createConnection } from './../../public/utils/mysql'
import {
    getEmployeeAccount,
    getEmployeeId,
    isDuplicated,
} from '@/dao/employeeaccount'
import { SECRET_KEY } from '@/constants'

export const employeeLoginService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    Connection: Connection
) => {
    const { id, Password } = req.body
    const checkAccount: any = await getEmployeeId(id, Connection)

    // 아이디와 비밀번호 입력 확인
    if (!id || !Password) {
        return res
            .status(401)
            .json({ message: '아이디와 비밀번호를 입력해주세요' })
    }

    // 계정 존재 여부 확인
    if (
        !checkAccount ||
        checkAccount.length === 0 ||
        checkAccount[0].id === undefined
    ) {
        return res.status(401).json({ message: '아이디가 존재하지 않습니다' })
    }

    // 비밀번호 비교
    const matchPassword = await compare(Password, checkAccount[0].password)

    if (!matchPassword) {
        return res.status(401).json({ message: '비밀번호가 일치하지 않습니다' })
    }

    // 토큰 발급
    const issuedAt = Math.floor(Date.now() / 1000)
    const expirationTime = issuedAt + 5400 // 90분
    const token = sign(
        {
            id: checkAccount[0].id,
            email: checkAccount[0].email,
            department: checkAccount[0].depart,
            position: checkAccount[0].position,
            iat: issuedAt,
            exp: expirationTime,
        },
        SECRET_KEY
    )

    // 로그인 성공
    res.status(200).json({ message: '로그인 성공', token })
}
