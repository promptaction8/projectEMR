import type { NextApiRequest, NextApiResponse } from 'next'
import { verify, sign } from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants'
import { setCookie, destroyCookie } from 'nookies'
import { tokenAtom } from '@/constants/token'
import path from 'path'

export default async function logout(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const cookies = req.cookies.token
    if (!cookies) {
        return res.status(401).json({ message: '토큰이 존재하지 않습니다' })
    }
    destroyCookie({ res }, 'token', {
        path: '/',
    })
    res.status(200).json({ message: '로그아웃 되었습니다.', token: '' })
}
