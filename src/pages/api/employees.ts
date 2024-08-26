import type { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'
import { createEmployeeAccount } from '@/dao/employeeAccounts'
import { getEmployeeId } from '@/dao/employeeAccounts'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const {
            id,
            password,
            email,
            phone,
            address,
            depart,
            position,
            dateofjoining,
        } = req.body
        console.log('🚀 ~ req.body:', req.body)

        // 필수 데이터 확인
        if (
            !id ||
            !password ||
            !email ||
            !phone ||
            !address ||
            !depart ||
            !position ||
            !dateofjoining
        ) {
            return res.status(400).json('필수 데이터가 없습니다')
        }
        // 아이디 중복 확인
        const isDuplicated = await getEmployeeId(id)
        if (isDuplicated) {
            return res.status(400).json('중복된 아이디입니다')
        }

        // 비밀번호 정규식
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/
        if (passwordRegex.test(password) === false) {
            return res.status(400).json('비밀번호는 8~16자리로 입력해주세요')
        }

        // 이메일 정규식
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailRegex.test(email) === false) {
            return res.status(400).json('이메일 형식이 올바르지 않습니다')
        }

        // 휴대폰 번호 정규식
        const phoneCheck = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/
        if (phoneCheck.test(phone) === false) {
            return res.status(400).json('휴대폰 번호 형식이 올바르지 않습니다')
        }

        // 주소 길이 확인
        if (address.length > 100) {
            return res.status(400).json('주소는 100자 이하로 입력해주세요')
        }

        // 부서명 길이 확인
        if (depart.length > 20) {
            return res.status(400).json('부서명은 20자 이하로 입력해주세요')
        }

        // 직위 길이 확인
        if (position.length > 20) {
            return res.status(400).json('직위는 20자 이하로 입력해주세요')
        }

        // 입사일 길이 확인
        if (dateofjoining.length > 10) {
            return res.status(400).json('입사일은 10자 이하로 입력해주세요')
        }

        // 비밀번호 암호화
        const hashedPassword = await hash(password, 10)

        // 직원 계정 생성
        try {
            await createEmployeeAccount({
                id,
                password: hashedPassword,
                email: email,
                phonenumber: phone,
                address: address,
                depart: depart,
                position: position,
                dateofjoining: dateofjoining,
            })

            return res.status(200).json('직원 계정 생성 성공')
        } catch (error) {
            console.error('직원 계정 생성 오류:', error)
            return res.status(500).json('직원 계정 생성 실패')
        }
    }
    return res.status(405).end() // Method Not Allowed
}
