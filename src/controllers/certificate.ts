import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { loginService } from '@/services/login'
import { certificateService } from '@/services/certificate'

export const certificateController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await certificateService(req, res, connection)
}
