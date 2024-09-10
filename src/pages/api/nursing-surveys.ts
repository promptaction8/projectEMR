// 환자 조회 + 간호정보기록지 조회 api
import { NextApiRequest, NextApiResponse } from 'next'
import { getPatient } from '@/dao/patient'
import z from 'zod'
import { PrismaClient } from '@prisma/client'
// zod의 optional을 사용하면 해당 필드가 없어도 되는 것을 의미합니다.
const schema = z.object({
    name: z.string(),
    chartNumber: z.string(),
})
const prisma = new PrismaClient()
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const response = schema.safeParse(req.body)
        if (!response.success) {
            const error = response.error.errors[0]
            console.log('🚀 ~ error:', error)
            return res.status(400).json({
                message: error.message,
            })
        }
        const { name, chartNumber } = req.body
        //req.body.name 과 req.body.chartNumber를 사용해 환자 조회
        const patientInfo = await getPatient(name, chartNumber)
        if (patientInfo === null || patientInfo === undefined) {
            return res.status(404).json({
                message: '환자를 찾을 수 없습니다.',
            })
        }
        // 환자가 존재하면 간호정보기록지 조회
        const nursingInfo = await prisma.nursingSurvey.findMany({
            where: {
                patientIdx: patientInfo.idx,
            },
        })
        // nursingInfo 와 patientInfo를 합쳐서 응답
        return res.status(200).json({
            patientInfo,
            nursingInfo,
        })
    }
    return res.status(405).end() // Method Not Allowed
}
