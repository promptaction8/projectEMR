import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { deletePostService } from '@/services/deletePost'

export const deletePostController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await deletePostService(req, res, connection)
}
