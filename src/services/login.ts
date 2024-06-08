import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUserEmail } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { SECRET_KEY } from '@/constants'
import { getUserName } from '@/dao/users'
export const loginService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const result: any = await getUserEmail(req.body.email, connection)

    if (Array.isArray(result) && result.length === 0) {
        return res.status(400).json({
            error: {
                message: '해당하는 유저가 없습니다.',
            },
        })
    }

    const userName: any = await getUserName(req.body.name, connection)
    if (Array.isArray(userName) && userName.length === 0) {
        return res.status(400).json({ error: '해당하는 유저가 없습니다.' })
    }

    const user = result[0]
    if (!user || !user.password) {
        return res
            .status(400)
            .json({ error: '유효한 사용자 또는 비밀번호가 없습니다.' })
    }

    const match = await compare(req.body.password, user.password)

    if (!match) {
        return res.status(400).json({ message: '비밀번호가 틀립니다.' })
    }
    // 토큰 발급 시간과 만료 시간 설정 (예: 만료 시간을 현재 시간에서 1시간 뒤로 설정)
    const issuedAt = Math.floor(Date.now() / 1000) // 현재 시간 (초 단위)
    const expirationTime = issuedAt + 28800 // 8시간 뒤 (초 단위)

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
