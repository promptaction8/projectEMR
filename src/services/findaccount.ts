import { Connection } from 'mysql2/promise'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { isDuplicatedUserEmailOrName } from '@/dao/users'
import { getUser } from '@/dao/users'

export const findAccountService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { name, email, password } = req.body
    const result = getUser(req.body.email, connection)
    if (Array.isArray(result) && result.length === 0) {
        res.status(400).json({
            error: {
                message: '해당하는 유저가 없습니다.',
            },
        })
    }
    const findAccount = getUser(req.body.name, connection)
    if ( )

}