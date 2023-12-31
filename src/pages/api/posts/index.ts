import { NextApiRequest, NextApiResponse } from 'next'
import { createConnection } from '../../../utils/mysql'
import { createPostsController } from '@/controllers/createPost'
import { readPostsController } from '@/controllers/readPosts'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const connection = await createConnection()
    if (req.method === 'POST') {
        await createPostsController(req, res, connection)
    } else if (req.method === 'GET') {
        await readPostsController(req, res, connection)
    }
    res.status(400).json({ error: '지원하지 않는 메서드입니다' })
}
