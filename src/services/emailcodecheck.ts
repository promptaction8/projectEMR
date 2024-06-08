import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { compare } from 'bcrypt'
import { getCertificate } from '@/dao/certificate'
import sha256 from 'crypto-js/sha256'
import { passwordChange } from '@/dao/users'
import { hash } from 'bcrypt'
import { passwordChangeByCertificate } from '@/dao/certificate'

export const emailCodeCheckService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { emailcode } = req.query
    const emailCodeCheck = await getCertificate(emailcode as any, connection)
    if (emailCodeCheck[0].emailcode !== emailcode) {
        res.status(400).json({ error: '이메일 코드가 일치하지 않습니다' })
    }
    return res
        .status(200)
        .json({ message: '이메일 코드가 일치합니다. 인증되었습니다.' })
}
