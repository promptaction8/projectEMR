import { NextApiRequest, NextApiResponse } from 'next'
import { SECRET_KEY } from '@/constants'
import { sign, verify } from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode'

export default async function tokenDecoding(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    interface DecodedToken {
        id: string
        email: string
        position: string
        department: string
        iat: number
        exp: number
    }
    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({ message: '쿠키에 토큰이 없습니다.' })
    }
    // 토큰 검증
    const verifyToken: any = await verify(token, SECRET_KEY)
    res.status(200).json({ verifyToken })
}
