import type { NextApiRequest, NextApiResponse } from 'next'
import { createConnection } from './../../../../public/utils/mysql'
import { createEmployeeAccountController } from './../../../controllers/createemployeeaccountcontroller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const connection = await createConnection()

    if (req.method === 'POST') {
        await createEmployeeAccountController(req, res, connection)
    } else {
        res.status(404).json({ error: ' 해당 메서드는 지원하지 않습니다' })
    }
}
