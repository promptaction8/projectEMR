import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { deletePost } from '@/dao/posts'
import { readPost } from '@/dao/posts'
import { JwtPayload } from 'jsonwebtoken'
import { getUser } from '@/dao/users'

export const deletePostService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection,
    payload: JwtPayload
) => {
    const idx = await parseInt(req.query.idx as string)
    const post: any = await readPost({ idx, connection })
    const result: any = await getUser(req.body.password, connection)
    const { password } = req.body
    if (isNaN(idx)) {
        return res.status(404).json({ error: 'idx 가 유효한 타입이 아닙니다' })
    }
    if (post.length === 0) {
        return res.status(400).json({ error: '삭제할 게시물이 없습니다' })
    }
    if (password !== result.password) {
        return res.status(404).json({ message: '비밀번호가 일치하지 않습니다' })
    }
    await deletePost(idx, connection)
    res.status(200).json({ message: '게시물이 삭제되었습니다' })
}
