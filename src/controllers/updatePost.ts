import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { updatePostService } from '@/services/updatePost'
import { JwtPayload } from 'jsonwebtoken'
import { SECRETE_KEY } from '@/constants'
import { verify } from 'jsonwebtoken'

export const updatePostController = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { authorization } = req.headers
    if (authorization === undefined) {
        return res
            .status(400)
            .json({ error: { message: '토큰이 들어오지 않았습니다' } })
    }
    const { title, content } = req.body
    let payload
    try {
        payload = (await verify(
            authorization.replace('Bearer ', ''),
            SECRETE_KEY
        )) as JwtPayload
    } catch (error) {
        return res.status(400).json({ error: '비정상적인 토큰입니다' })
    }
    if (title === undefined || content === undefined) {
        return res.status(404).json({ error: ' 값이 정의되지 않았습니다' })
    }
    if (title === '' || content === '') {
        return res
            .status(404)
            .json({ error: '값을 빈칸으로 제출할 수 없습니다' })
    }
    await updatePostService(req, res, connection, payload)
}
