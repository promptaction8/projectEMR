import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { employeeLoginService } from '@/services/employeeLoginService'

export const employeeLoginController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await employeeLoginService(req, res, connection)
}
