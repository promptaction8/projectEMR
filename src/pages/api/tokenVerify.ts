import { NextApiRequest, NextApiResponse } from 'next'
import { SECRET_KEY } from '@/constants'
import { verify } from 'jsonwebtoken'

export default async function tokenDecoding(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // 쿠키에서 토큰 가져오기
    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({ message: '쿠키에 토큰이 없습니다.' })
    }
    // 토큰 검증
    const verifyToken: any = await verify(token, SECRET_KEY)
    res.status(200).json({ verifyToken })

    //try-catch로 감싸기
}
