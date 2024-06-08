import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { loginService } from '@/services/login'
import { passwordChangeService } from '../services/passwordchange'
import { passwordCompareAndChangeService } from './../services/passwordcompareandchange'

export const passwordCompareAndChangeController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await passwordCompareAndChangeService(req, res, connection)
}
