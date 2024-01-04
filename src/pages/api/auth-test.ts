import type { NextApiRequest, NextApiResponse } from 'next'
import { createConnection } from '@/utils/mysql'
import { authTestController } from '@/controllers/authTest'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // 데이터베이스 연결 생성
    const connection = await createConnection()

    if (req.method === 'GET') {
        await authTestController(req, res, connection)
    } else {
        return res.status(400).json({
            error: {
                message: '지원하지 않는 메서드입니다.',
            },
        })
    }
}
