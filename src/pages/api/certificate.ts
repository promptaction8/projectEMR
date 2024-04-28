import { createConnection } from '@/utils/mysql'
import type { NextApiRequest, NextApiResponse } from 'next'
import { certificateController } from '@/controllers/certificate'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const connection = await createConnection()
    if (req.method === 'POST') {
        await certificateController(req, res, connection)
    } else {
        // 지원하지 않는 메서드에 대한 에러 응답
        res.status(400).json({
            error: {
                message: '해당 메서드는 지원하지 않습니다.',
            },
        })
    }
    // 청소
    connection.end()
}
