import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUser } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { SECRET_KEY } from '@/constants'

export const loginService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const result = await getUser(req.body.email, connection)

    if (Array.isArray(result) && result.length === 0) {
        res.status(400).json({
            error: {
                message: '해당하는 유저가 없습니다.',
            },
        })
    }

    const user = (result as any)[0]
    const match = await compare(req.body.password, user.password)
    if (match === false) {
        return res.status(400).json({ message: '비밀번호가 틀립니다' })
    }
    // 토큰 발급 시간과 만료 시간 설정 (예: 만료 시간을 현재 시간에서 1시간 뒤로 설정)
    const issuedAt = Math.floor(Date.now() / 1000) // 현재 시간 (초 단위)
    const expirationTime = issuedAt + 3600 // 1시간 뒤 (초 단위)

    const token = jwt.sign(
        {
            idx: user.idx,
            name: user.name,
            email: user.email,
            iat: issuedAt,
            exp: expirationTime,
        },
        SECRET_KEY
    )

    res.status(200).json({ token: token })
}
