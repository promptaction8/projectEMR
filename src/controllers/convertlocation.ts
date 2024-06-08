import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { convertLocationService } from '@/services/convertlocation'

export const convertLocationController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await convertLocationService(req, res, connection)
}
