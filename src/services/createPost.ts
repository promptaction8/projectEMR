import { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { createPost } from '@/dao/posts'

export const createPostsService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { userIdx, title, content } = req.body
    const result: any = await createPost({
        userIdx,
        title,
        content,
        connection,
    })
    if (result.affectedRows !== 1) {
        return res
            .status(404)
            .json({ error: '데이터에 영향을 주지 못했습니다' })
    }
    res.status(200).json({ message: ' 게시글이 생성되었습니다' })
}
