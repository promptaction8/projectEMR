import type { NextApiRequest, NextApiResponse } from 'next'
import { createConnection } from '@/utils/mysql'
import { readPostController } from '@/controllers/readPost'
import { deletePostController } from '@/controllers/deletePost'
import { updatePostController } from '@/controllers/updatePost'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // 데이터베이스 연결 생성
    const connection = await createConnection()
    if (req.method === 'GET') {
        await readPostController(req, res, connection)
    } else if (req.method === 'DELETE') {
        await deletePostController
    } else if (req.method === 'PUT') {
        await updatePostController
    } else {
        res.status(400).json({ error: '해당 메서드는 지원하지 않습니다' })
    }
}
