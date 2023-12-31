import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { updatePostService } from '@/services/updatePost'

export const updatePostController = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { title, content } = req.body
    if (title === undefined || content === undefined) {
        return res.status(404).json({ error: ' 값이 정의되지 않았습니다' })
    }
    if (title === '' || content === '') {
        return res
            .status(404)
            .json({ error: '값을 빈칸으로 제출할 수 없습니다' })
    }
    await updatePostService(req, res, connection)
}
