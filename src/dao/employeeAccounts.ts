import { Connection } from 'mysql2/promise'
import { PrismaClient } from '@prisma/client'
interface ICreateEmployeeUser {
    id: string // 사용자 ID
    password: string // 비밀번호
    email: string // 이메일
    phonenumber: string // 휴대폰 번호
    address: string // 주소
    depart: string // 부서명
    position: string // 직위
    dateofjoining: string
    connection: Connection // 입사일
}
const prisma = new PrismaClient()

export const createEmployeeAccount = async (data: ICreateEmployeeUser) => {
    const result = await prisma.employeeAccount.create({
        data,
    })
    return result
}

//직원 아이디로 DB 조회
export const getEmployeeId = async (id: string) => {
    return await prisma.employeeAccount.findUnique({
        where: {
            id,
        },
    })
}

//중복된 계정 조회
export const isDuplicated = async (id: string) => {
    const duplicates = await prisma.employeeAccount.findMany({
        where: {
            id: id,
        },
    })
    return duplicates.length > 0
}
