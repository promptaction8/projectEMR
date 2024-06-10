import { createConnection } from '@/utils/mysql'
import type { NextApiRequest, NextApiResponse } from 'next'
import { passwordCompareAndChangeController } from './../../controllers/passwordcompareandchange'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const connection = await createConnection()

    if (req.method === 'PUT') {
        await passwordCompareAndChangeController(req, res, connection)
    } else {
        res.status(404).json({ error: ' 엔드포인트 에러' })
    }
}
