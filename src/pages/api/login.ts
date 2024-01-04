import { createConnection } from '@/utils/mysql'
import type { NextApiRequest, NextApiResponse } from 'next'
import { loginController } from '@/controllers/login'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // 데이터베이스 연결 생성
    const connection = await createConnection()

    // 메서드 분기
    if (req.method === 'POST') {
        await loginController(req, res, connection)
    } else {
        // 지원하지 않는 메서드에 대한 에러 응답
        res.status(400).json({
            error: {
                message: '해당 메서드는 지원하지 않습니다.',
            },
        })
    }
}
