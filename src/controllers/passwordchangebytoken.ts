import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { PasswordChangeByTokenService } from '@/services/passworddchangebytoken'

export const passwordChangeByTokenController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await PasswordChangeByTokenService(req, res, connection)
}
