import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import {
    getUserEmail,
    passwordCompareWithTempPassword,
    updateTheNewPassword,
} from '@/dao/users'
import { compare, hash } from 'bcrypt'

export const passwordCompareAndChangeService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { tempPassword, newPassword, email } = await req.body

    const findUserInfo: any = await getUserEmail(email, connection)

    if (tempPassword !== findUserInfo[0].password) {
        return res
            .status(400)
            .json({ message: '임시 비밀번호가 일치하지 않습니다' })
    }

    const hashedNewPassword = await hash(newPassword, 12)

    await updateTheNewPassword(email, hashedNewPassword, connection)

    res.status(200).json({ message: '비밀번호가 변경되었습니다' })
}
