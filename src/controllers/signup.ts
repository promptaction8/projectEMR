import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { signUpService } from '@/services/signup'

export const signUpController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { name, email, password } = req.body
    if (name === undefined || email === undefined || password === undefined) {
        return res
            .status(404)
            .json({ message: 'name, email, password가 정의되지 않았습니다' })
    } else if (name === '' || email === '' || password === '') {
        return res
            .status(404)
            .json({ message: '빈 칸으로 제출 할 수 없습니다' })
    }
    await signUpService(req, res, connection)
}
