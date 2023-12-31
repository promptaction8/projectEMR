import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { createPostsService } from '@/services/createPost'
export const createPostsController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { userIdx, title, content } = req.body
    console.log('🚀 ~ file: posts.ts:10 ~ req.body:', req.body)
    console.log('🚀 ~ file: posts.ts:10 ~ req.body:', typeof req.body)
    console.log('🚀 ~ file: posts.ts:16 ~ userIdx:', userIdx)
    console.log('🚀 ~ file: posts.ts:16 ~ userIdx:', typeof userIdx)
    if (userIdx === '' || title === '' || content === '') {
        return res.status(404).json({ error: '빈 칸으로 제출 할 수 없습니다' })
    } else if (
        userIdx === undefined ||
        title === undefined ||
        content === undefined
    ) {
        return res
            .status(404)
            .json({ error: ' 값이 undefined로 전달되었습니다' })
    }
    await createPostsService(req, res, connection)
}
