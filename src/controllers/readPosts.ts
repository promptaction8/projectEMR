import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { readPostsService } from '@/services/readPosts'

export const readPostsController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await readPostsService(req, res, connection)
}
