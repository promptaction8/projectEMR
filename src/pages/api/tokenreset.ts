import { NextApiRequest, NextApiResponse } from 'next'
import { SECRET_KEY } from '@/constants'
import { sign } from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode'

export default async function tokenReset(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const token = await req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: '토큰이 존재하지 않습니다' })
    }
    const tokenInfo: any = await jwtDecode(token as any)
    const newToken = await sign(
        {
            id: tokenInfo.id,
            email: tokenInfo.email,
            department: tokenInfo.department,
            position: tokenInfo.position,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 5400,
        },
        SECRET_KEY
    )
    await res.status(200).json({ message: '토큰 재발급 성공', newToken })
}
