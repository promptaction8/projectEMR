import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { jwtDecode } from 'jwt-decode'
import { updateNewPasswordByToken } from '@/dao/users'
import { hash } from 'bcrypt'

export const PasswordChangeByTokenService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    // auth 값인 bearer token 값을
    const auth = await req.headers.authorization
    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(400).json({ error: '토큰 값이 확인되지 않았습니다' })
    }
    const token = await auth.split(' ')[1]
    const decode: any = await jwtDecode(token)
    const { newPassword, checkPassword } = await req.body
    if (newPassword.length < 6 || newPassword === null) {
        res.status(400).json({ error: ' 비밀번호를 6자 이상 입력해주세요' })
    }
    if (newPassword !== checkPassword) {
        res.status(400).json({ error: '비밀번호 확인이 동일하지 않습니다.' })
    }
    const email = await decode.email
    const hashedCheckPassword = await hash(newPassword, 10)
    updateNewPasswordByToken(hashedCheckPassword, email, connection)

    return res.status(200).json({ message: '비밀번호를 변경하였습니다' })
}
