import { Connection } from 'mysql2/promise'
import { signUp } from '@/dao/users'
import { isDuplicatedUserEmailOrName } from '@/dao/users'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'

export const signUpService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { name, email, password } = req.body
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res
            .status(400)
            .json({ message: '유효하지 않은 이메일 형식입니다.' })
    }
    const hashedPassword = await hash(password, 10)
    const isDuplicatedUser = await isDuplicatedUserEmailOrName(
        name,
        email,
        connection
    )

    if (isDuplicatedUser === true) {
        return res
            .status(400)
            .json({ message: '이미 존재하는 닉네임 또는 이메일입니다' })
    }
    const result: any = await signUp({
        name,
        email,
        password: hashedPassword,
        connection,
    })
    if (result.affectedRows !== 1) {
        return res
            .status(400)
            .json({ error: { message: '데이터에 영향을 주지 못하였습니다' } })
    }
    res.status(200).json({ message: '회원가입이 성공적으로 진행되었습니다' })
}
