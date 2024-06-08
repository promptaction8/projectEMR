import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { emailCodeCheckService } from '@/services/emailcodecheck'

export const emailCodeCheckController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await emailCodeCheckService(req, res, connection)
}
