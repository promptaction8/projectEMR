import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { updatePost, readPost } from '@/dao/posts'

export const updatePostService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection
) => {
    const { idx } = req.query
    const { title, content } = req.body
    const post = readPost({ idx, connection })
    const result: any = await updatePost(idx, title, content, connection)
    if (result.affectedRows !== 1) {
        return res
            .status(404)
            .json({ error: '데이터에 영향을 주지 못했습니다' })
    }
    res.status(200).json({ message: '게시물을 수정하였습니다' })
}
