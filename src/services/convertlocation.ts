import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import axios from 'axios'
import { API_KEY } from '@/constants'

export const convertLocationService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const convertLocationResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.query.nx},${req.query.ny}&key=${API_KEY}`
    )
    res.status(200).json(convertLocationResponse.data)
}
