import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { updatePost, readPost } from '@/dao/posts'
import { JwtPayload } from 'jsonwebtoken'
import { SECRETE_KEY } from '@/constants'
import { verify } from 'jsonwebtoken'

export const updatePostService = async (
    req: NextApiRequest,
    res: NextApiResponse,
    connection: Connection,
    payload: JwtPayload
) => {
    const idx = parseInt(req.query.idx as string)
    const { title, content } = req.body
    const post: any = await readPost({ idx, connection })
    console.log('🚀 ~ file: updatePost.ts:19 ~ post:', post)
    console.log('🚀 ~ file: updatePost.ts:20 ~ payload.idx:', payload.idx)
    if (!post || post.length === 0) {
        // post 배열이 비어 있거나 undefined일 경우 에러 처리
        return res.status(404).json({ error: '게시물을 찾을 수 없습니다' })
    }

    // 글 쓴 유저 !== 지금 API를 요청하는 유저
    if (post[0].userIdx !== payload.idx) {
        res.status(404).json({ error: '자신의 글만 수정할 수 있습니다' })
    }
    const result: any = await updatePost(idx, title, content, connection)
    if (result.affectedRows !== 1) {
        return res
            .status(404)
            .json({ error: '데이터에 영향을 주지 못했습니다' })
    }
    res.status(200).json({ message: '게시물을 수정하였습니다' })
}
