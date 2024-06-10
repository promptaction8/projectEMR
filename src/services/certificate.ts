import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { compare } from 'bcrypt'
import { getCertificate } from '@/dao/certificate'
import sha256 from 'crypto-js/sha256'
import { passwordChange } from '@/dao/users'
import { hash } from 'bcrypt'
import { passwordChangeByCertificate } from '@/dao/certificate'

export const certificateService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const emailCode = await getCertificate(req.body.emailcode, connection)
    if (emailCode[0].emailcode !== req.body.emailcode) {
        res.status(400).json({
            error: { message: '인증 코드가 존재하지 않습니다' },
        })
    }
    const generateRandomPassword = () => {
        return Math.random().toString(36).substring(2, 10)
    }
    const newPassword = await generateRandomPassword()
    const hashedNewPassword = await hash(newPassword, 10)
    await passwordChangeByCertificate(hashedNewPassword, email, connection)
    res.status(200).json({
        message: ' 새로 변경된 비밀번호 입니다',
        newPassword,
    })
}
