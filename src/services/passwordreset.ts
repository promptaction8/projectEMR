import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUser } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare, hash } from 'bcrypt'
import { SECRET_KEY } from '@/constants'
import { passwordReset } from '@/dao/users'

export const passwordResetService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { password, email } = req.body
    console.log('🚀 ~ req.body:', req.body)
    const result = await getUser(email, connection)
    console.log('🚀 ~ result:', result)
    if (Array.isArray(result) && result.length === 0) {
        res.status(400).json({ error: { message: '해당하는 유저가 없습니다' } })
    }
    const userPassword = (result as any)[0]
    const match = await compare(password, userPassword.password)
    if (match === false) {
        return res.status(400).json({ message: '비밀번호가 틀립니다' })
    }
    const newPassword = req.body.newPassword
    if (!newPassword) {
        return res.status(400).json({ message: '새로운 비밀번호를 적어주세요' })
    }

    const hashedPassword = await hash(newPassword, 10)
    console.log('🚀 ~ newPassword:', newPassword)
    // 비밀번호를 변경한 후 응답을 반환
    await passwordReset(email, hashedPassword, connection)

    return res.status(200).json({ message: '비밀번호를 변경하였습니다' })
}
