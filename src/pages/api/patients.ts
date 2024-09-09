// 환자 조회 api
import { NextApiRequest, NextApiResponse } from 'next'
import { getPatient } from '@/dao/patient'
import z from 'zod'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const schema = z.object({
            name: z.string(),
            chartNumber: z.string(),
        })
        const response = schema.safeParse(req.body)
        if (!response.success) {
            const error = response.error.errors[0]
            return res.status(400).json({
                message: error.message,
            })
        }
        try {
            const result = await getPatient(req.body.name, req.body.chartNumber)

            if (result === null || result === undefined) {
                return res.status(404).json({
                    message: '환자를 찾을 수 없습니다.',
                })
            }
            return res.status(200).json(result)
        } catch (e: any) {
            console.error(e)
            return res.status(500).json({
                message: '서버 에러',
            })
        }
    }
    return res.status(405).end() // Method Not Allowed
}
