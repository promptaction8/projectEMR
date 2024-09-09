import { NextApiRequest, NextApiResponse } from 'next'
import z from 'zod'
import { patientRegister } from '@/dao/patient'

const schema = z.object({
    name: z.string(),
    // 주민등록번호 형식 검증
    ssn: z.string().regex(/^\d{6}-\d{7}$/),
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        // 요청 데이터 검증
        const response = schema.safeParse(req.body)
        if (!response.success) {
            const error = response.error.errors[0]
            // 주민번호 형식이 잘못되었을 때
            if (error.path[0] === 'ssn') {
                return res.status(400).json({
                    message: '주민등록번호 형식이 잘못되었습니다.',
                })
            }
            return res.status(400).json({
                message: error.message,
            })
        }
        // 8자리 00000000부터 시작하는 차트 번호 생성
        const charNum = Math.floor(Math.random() * 100000000)
            .toString()
            .padStart(8, '0')
        // req.body 에 charNum 추가
        req.body.chartNumber = charNum

        try {
            //환자 등록
            await patientRegister(req.body)
        } catch (e: any) {
            console.error(e)
            // 에러처리
            // 이름은 중복일 수 있지만 주민등록번호는 중복이 되면 안됨
            if (e.code === 'P2002') {
                return res.status(409).json({
                    message: '이미 등록된 환자입니다.',
                })
            }
        }
        return res.status(200).json(req.body)
    }
    return res.status(405).end() // Method Not Allowed
}
