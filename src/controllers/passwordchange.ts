import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { loginService } from '@/services/login'
import { passwordChangeService } from '../services/passwordchange'

export const passwordChangeController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await passwordChangeService(req, res, connection)
}
