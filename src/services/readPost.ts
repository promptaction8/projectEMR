import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { readPost } from '@/dao/posts'

export const readPostService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const idx = parseInt(req.query.idx as string)
    const post = await readPost({ idx, connection })
    if (isNaN(idx)) {
        return res
            .status(404)
            .json({ error: ' idx가 INT로 들어오지 않았습니다' })
    }
    if (Array.isArray(post) && post.length === 0) {
        return res.status(404).json({ error: '게시물이 없습니다' })
    }
    res.status(200).json({ post })
}
