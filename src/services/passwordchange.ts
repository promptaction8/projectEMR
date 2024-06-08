import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUserEmail, getUserName } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare, hash } from 'bcrypt'
import { SECRET_KEY } from '@/constants'
import { passwordChange } from '@/dao/users'
import sha256 from 'crypto-js/sha256'

export const passwordChangeService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { password, email, newPassword } = req.body
    const result: any = await getUserEmail(email, connection)
    if (Array.isArray(result) && result.length === 0) {
        res.status(400).json({ error: { message: '해당하는 유저가 없습니다' } })
    }
    const userPassword = (result as any)[0]
    const match = await compare(password, userPassword.password)
    if (match === false) {
        return res.status(400).json({ message: '비밀번호가 일치하지 않습니다' })
    }
    // 유져의 입력 만 검사하는건 컨트롤러로 감.
    // DB랑 통신하는건 service가 맞음.
    if (!newPassword) {
        return res.status(400).json({ message: '새로운 비밀번호를 적어주세요' })
    }

    const hashedPassword = await hash(newPassword, 10)
    // 비밀번호를 변경한 후 응답을 반환
    await passwordChange(email, hashedPassword, connection)

    return res.status(200).json({ message: '비밀번호를 변경하였습니다' })
}
