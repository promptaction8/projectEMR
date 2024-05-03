import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUser } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { SECRET_KEY } from '@/constants'
import axios from 'axios'

export const locationService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const nx = parseInt(req.query.nx as string)
    const ny = parseInt(req.query.ny as string)
    const baseDate = new Date()
    const year = baseDate.getFullYear()
    const month = String(baseDate.getMonth() + 1).padStart(2, '0')
    const day = String(baseDate.getDate()).padStart(2, '0')
    const hours = String(baseDate.getHours()).padStart(2, '0')
    const formattedDate = `${year}${month}${day}`
    const formattedTime = `${hours}00`
    const kmaRequest = await axios.get(
        `https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstInfoService_2.0/getUltraSrtNcst?pageNo=1&numOfRows=1000&dataType=JSON&base_date=${formattedDate}&base_time=${formattedTime}&nx=${nx}&ny=${ny}&authKey=nUHHgazWQUKBx4Gs1oFCaQ`
    )
    res.status(200).json({ temp: kmaRequest.data })
    console.log('🚀 ~ kmaRequest.data:', kmaRequest.data)
}
