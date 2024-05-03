import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { loginService } from '@/services/login'
import { certificateService } from '@/services/certificate'
import { locationService } from '@/services/location'

export const locationController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await locationService(req, res, connection)
}
