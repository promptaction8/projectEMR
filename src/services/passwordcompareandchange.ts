import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { findEmailFromCode, updateNewPassword } from '@/dao/users'
import { hash } from 'bcrypt'
import { error } from 'console'

export const passwordCompareAndChangeService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { newPassword, checkNewPassword, code } = await req.body
    console.log('🚀 ~ code:', code)

    const findEmail: any = await findEmailFromCode(code as string, connection)

    if (!findEmail || findEmail.length === 0) {
        return res.status(400).json({ error: '유효하지 않은 코드입니다' })
    }

    const email = findEmail[0].email

    if (!email) {
        return res.status(400).json({ error: '유효하지 않은 이메일입니다' })
    }

    if (!code || code === undefined) {
        return res.status(400).json({ error: '코드값이 들어오지 않았습니다' })
    }

    if (!newPassword || !checkNewPassword) {
        return res.status(400).json({ error: '비밀번호를 입력해 주세요' })
    }

    if (newPassword !== checkNewPassword) {
        return res.status(404).json({ error: '비밀번호가 동일하지 않습니다.' })
    }

    const hashedCheckPassword: any = await hash(checkNewPassword, 10)

    await updateNewPassword(hashedCheckPassword, email, connection)

    res.status(200).json({ message: '비밀번호가 변경되었습니다' })
}
