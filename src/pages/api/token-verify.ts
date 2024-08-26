import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'

export default async function tokenVerify(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // 쿠키에서 토큰 가져오기
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: '쿠키에 토큰이 없습니다.' })
    }
    // 토큰 검증
    //try-catch로 감싸기
    try {
        const verifyToken: any = await verify(token, process.env.SECRET_KEY)
        res.status(200).json({ verifyToken })
    } catch (error) {
        res.status(400).json({ message: '토큰이 유효하지 않습니다.' })
    }
}
