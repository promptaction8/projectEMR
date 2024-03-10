import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { loginService } from '@/services/login'
import { passwordResetService } from './../services/passwordreset'

export const passwordResetController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await passwordResetService(req, res, connection)
}
