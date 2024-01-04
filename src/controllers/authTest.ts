import { SECRETE_KEY } from '@/constants'
import { authTestService } from '@/services/authTest'
import { verify } from 'jsonwebtoken'
import type { JwtPayload } from 'jsonwebtoken'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const authTestController = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    // 정의
    const { authorization } = req.headers

    if (authorization === undefined) {
        return res.status(400).json({
            error: {
                message: '토큰이 들어오지 않았습니다.',
            },
        })
    }
    try {
        const payload = (await verify(
            authorization.replace('Bearer ', ''),
            SECRETE_KEY
        )) as JwtPayload
        await authTestService(req, res, connection, payload)
    } catch (e) {
        return res.status(400).json({
            error: {
                message: '비정상적인 토큰입니다.',
            },
        })
    }
}
