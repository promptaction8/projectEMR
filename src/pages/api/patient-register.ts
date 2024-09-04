import { NextApiRequest, NextApiResponse } from 'next'
import PatientRegister from '@/components/warddashboardcomponent/modals/patientRegister'
import z from 'zod'
import { patientRegister } from '@/dao/patientRegister'

const schema = z.object({
    name: z.string(),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: '날짜 형식이 올바르지 않습니다',
    }), // YYYY-MM-DD
    gender: z.boolean().optional(),
    phone: z.string(),
    ssn: z.string(),
    address: z.string(),
    occupation: z.string(),
    bloodType: z.string(),
    marriageStatus: z.boolean(),
    nationality: z.string(),
    guardianName: z.string(),
    guardianRelation: z.string(),
    guardianPhone: z.string(),
    insuranceStatus: z.boolean().optional(),
    type: z.string(),
    company: z.string(),
    code: z.string(),
    mainSymptoms: z.string(),
    pastMedicalHistory: z.string(),
    allergicHistory: z.string(),
    usingDrugs: z.string(),
    familyMedicalHistory: z.string(),
    mentalHealthStatus: z.string(),
    physicalHealthStatus: z.string(),
    previousTreatmentHistory: z.string(),
    religion: z.string(),
    primaryPhysician: z.string(),
    livingEnvironment: z.string(),
    roomNumber: z.string(),
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
            return res.status(400).json({
                message: error.message,
            })
        }
        try {
            //환자 등록
            await patientRegister(req.body)
        } catch (e) {
            console.error(e)
            return res.status(500).json('환자 등록에 실패했습니다') // Internal Server Error
        }
        console.log('🚀 ~ req.body:', req.body)
        return res.status(200).json('환자 등록 성공')
    }
    return res.status(405).end() // Method Not Allowed
}
