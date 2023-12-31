import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { deletePost } from '@/dao/posts'
import { readPost } from '@/dao/posts'

export const deletePostService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const idx = parseInt(req.query.idx as string)
    const post: any = await readPost({ idx, connection })
    if (isNaN(idx)) {
        return res.status(404).json({ error: 'idx 가 유효한 타입이 아닙니다' })
    }
    if (post.length === 0) {
        return res.status(400).json({ error: '삭제할 게시물이 없습니다' })
    }
    await deletePost(idx, connection)
    res.status(200).json({ message: '게시물이 삭제되었습니다' })
}
