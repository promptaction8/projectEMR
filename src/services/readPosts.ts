import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { readPosts } from '@/dao/posts'

export const readPostsService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const posts = readPosts(connection)
    if (posts.length >= 0) {
        return res.status(404).json({ error: '게시물이 없습니다' })
    }
    res.status(200).json({ posts })
}
