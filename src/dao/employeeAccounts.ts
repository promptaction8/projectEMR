import { Connection } from 'mysql2/promise'
import { PrismaClient } from '@prisma/client'
import EmployeeAccount from './../components/loginpagecomponents/modal/employeeAccount'
interface ICreateEmployeeUser {
    id: string // 사용자 ID
    password: string // 비밀번호
    email: string // 이메일
    phonenumber: string // 휴대폰 번호
    address: string // 주소
    depart: string // 부서명
    position: string // 직위
    dateofjoining: string
}
const prisma = new PrismaClient()

//직원 계정 생성
export const createEmployeeAccount = async (data: ICreateEmployeeUser) => {
    const result = await prisma.employeeaccount.create({
        data,
    })
    return result
}

//직원 아이디로 DB 조회
export const getEmployeeId = async (id: string) => {
    return await prisma.employeeaccount.findUnique({
        where: {
            id,
        },
    })
}

//중복된 계정 조회
export const isDuplicated = async (id: string) => {
    const duplicates = await prisma.employeeaccount.findMany({
        where: {
            id: id,
        },
    })
    return duplicates.length > 0
}
