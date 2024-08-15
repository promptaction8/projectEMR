import type { NextApiRequest, NextApiResponse } from 'next'
import { verify, sign } from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants'
import { setCookie } from 'nookies'

export default async function employeeLoginService(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const cookies = req.cookies.token
    if (!cookies) {
        return res.status(401).json({ message: '토큰이 존재하지 않습니다' })
    }
    const verifyCookies: any = verify(cookies, SECRET_KEY)
    // 재발급
    const reissue = sign(
        {
            id: verifyCookies.id,
            email: verifyCookies.email,
            department: verifyCookies.department,
            position: verifyCookies.position,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 5400,
        },
        SECRET_KEY
    )

    setCookie({ res }, 'token', reissue, {
        maxAge: 5400,
        path: '/',
        httpOnly: true,
        secure: false,
    })
    res.status(200).json({ token: reissue })
}
