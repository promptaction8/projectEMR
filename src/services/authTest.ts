import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { JwtPayload } from 'jsonwebtoken'

export const authTestService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection,
    payload: JwtPayload
) => {
    return res.status(200).json({
        payload,
    })
}
