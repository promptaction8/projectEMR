import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { deletePostService } from '@/services/deletePost'
import { JwtPayload } from 'jsonwebtoken'
import { verify } from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants'
import { getUser } from '@/dao/users'

export const deletePostController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { authorization } = req.headers
    const { password } = req.body
    console.log('🚀 ~ file: deletePost.ts:16 ~ password:', password)
    if (authorization === undefined) {
        return res
            .status(400)
            .json({ error: { message: '토큰이 들어오지 않았습니다' } })
    }
    let payload
    try {
        payload = (await verify(
            authorization.replace('Bearer ', ''),
            SECRET_KEY
        )) as JwtPayload
    } catch (error) {
        return res.status(400).json({ error: '비정상적인 토큰입니다' })
    }
    await deletePostService(req, res, connection, payload)
}
