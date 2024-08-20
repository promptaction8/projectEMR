import { Connection } from 'mysql2/promise'
import { createEmployeeAccount, isDuplicated } from '@/dao/employeeAccounts'
import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'

export const createEmployeeAccountService = async (
    req: NextApiRequest,
    res: NextApiResponse,
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailRegex.test(Email) === false) {
        return res.status(400).json('이메일 형식이 올바르지 않습니다')
    }
    const isDuplicatedId: any = await isDuplicated(id)
    if (isDuplicatedId.length > 0) {
        return res.status(400).json('이미 존재하는 아이디입니다')
    }
    const hashedPassword = await hash(Password, 10)
    const phoneCheck = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/
    if (phoneCheck.test(Phone) === false) {
        return res.status(400).json('휴대폰 번호 형식이 올바르지 않습니다')
    }
    if (Address.length > 100) {
        return res.status(400).json('주소는 100자 이하로 입력해주세요')
    }
    if (Department.length > 20) {
        return res.status(400).json('부서명은 20자 이하로 입력해주세요')
    }
    if (Position.length > 20) {
        return res.status(400).json('직위는 20자 이하로 입력해주세요')
    }
    if (DateOfJoining.length > 10) {
        return res.status(400).json('입사일은 10자 이하로 입력해주세요')
    }
    await createEmployeeAccount({
        id,
        password: hashedPassword,
        email: Email,
        phonenumber: Phone,
        address: Address,
        depart: Department,
        position: Position,
        dateofjoining: DateOfJoining,
        connection,
    })
    res.status(200).json('직원 계정 생성 완료')
}
