import type { NextApiRequest, NextApiResponse } from 'next'
import { destroyCookie } from 'nookies'

export default async function logout(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // 쿠키에서 토큰을 가져옴
    const token = req.cookies.token

    // 토큰이 존재하지 않을 경우
    if (!token) {
        return res
            .status(401)
            .json({ message: '로그아웃 실패: 토큰이 존재하지 않습니다.' })
    }

    // 쿠키 삭제
    destroyCookie({ res }, 'token', {
        path: '/',
    })

    // 로그아웃 성공 응답
    return res.status(200).json({ message: '로그아웃 되었습니다.' })
}
