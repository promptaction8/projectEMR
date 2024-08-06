import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { createEmployeeAccountService } from '@/services/createemployeeaccountservice'

// 직원 계정 생성
export const createEmployeeAccountController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const {
        id,
        Password,
        Email,
        Phone,
        Address,
        Department,
        Position,
        DateOfJoining,
    } = req.body
    if (
        !id ||
        !Password ||
        !Email ||
        !Phone ||
        !Address ||
        !Department ||
        !Position ||
        !DateOfJoining
    ) {
        return res.status(400).json('필수 데이터가 없습니다')
    }
    await createEmployeeAccountService(req, res, connection)
}
