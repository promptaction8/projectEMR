import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import axios from 'axios'
import dfs_xy_conv from '@/utils/coordinateconversion'

export const locationService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { nx, ny }: any = req.query
    const result = dfs_xy_conv('toXY', nx, ny)
    console.log('🚀 ~ result:', result)
    const baseDate = new Date()
    const year = baseDate.getFullYear()
    const month = String(baseDate.getMonth() + 1).padStart(2, '0')
    const day = String(baseDate.getDate()).padStart(2, '0')
    const hours = String(baseDate.getHours()).padStart(2, '0')
    const formattedDate = `${year}${month}${day}`
    const formattedTime = `${hours}00`
    const kmaRequest = await axios.get(
        `https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstInfoService_2.0/getUltraSrtNcst?pageNo=1&numOfRows=1000&dataType=JSON&base_date=${formattedDate}&base_time=${formattedTime}&nx=${result.x}&ny=${result.y}&authKey=nUHHgazWQUKBx4Gs1oFCaQ`
    )
    res.status(200).json({ temp: kmaRequest.data })
}
