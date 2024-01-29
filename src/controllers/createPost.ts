import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { createPostsService } from '@/services/createPost'
import { verify, JwtPayload } from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants'
export const createPostsController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { authorization } = req.headers
    console.log('🚀 ~ req.headers:', req.headers)
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

    const { title, content } = req.body
    if (title === '' || content === '') {
        return res.status(404).json({ error: '빈 칸으로 제출 할 수 없습니다' })
    } else if (title === undefined || content === undefined) {
        return res
            .status(404)
            .json({ error: ' 값이 undefined로 전달되었습니다' })
    }
    await createPostsService(req, res, connection, payload)
}
