import { NextApiRequest, NextApiResponse } from 'next'
import z from 'zod'
import { getPatient } from '@/dao/patient'
import { PrismaClient } from '@prisma/client'
// zod의 optional을 사용하면 해당 필드가 없어도 되는 것을 의미합니다.
const schema = z.object({
    name: z.string(),
    chartNumber: z.string(),
    ssn: z.string().optional(),
    sex: z.string(),
    age: z.string(),
    address: z.string().optional(),
    occupation: z.string().optional(),
    bloodType: z.string().optional(),
    marriageStatus: z.string().optional(),
    nationality: z.string(),
    guardianName: z.string().optional(),
    guardianRelation: z.string().optional(),
    guardianPhone: z.string().optional(),
    insuranceStatus: z.string().optional(),
    insuranceType: z.string().optional(),
    insuranceCompany: z.string().optional(),
    insuranceCode: z.string().optional(),
    religion: z.string().optional(),
    primaryDoctor: z.string().optional(),
    primaryNurse: z.string(),
    vitalSigns: z.string(),
    heightAndWeight: z.string(),
    familyHistory: z.string().optional(),
    painLevel: z.string(),
    smokingStatus: z.string().optional(),
    drinkingStatus: z.string().optional(),
    allergicHistory: z.string().optional(),
    roomNumber: z.string(),
    admissionDate: z.string(),
    dispatchEvent: z.string().optional(),
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
        const { name, chartNumber, ssn, ...rest } = req.body
        //req.body.name 과 req.body.chartNumber를 사용해 환자 조회
        const patientInfo = await getPatient(name, chartNumber)
        if (!patientInfo) {
            return res.status(404).json({
                message: '환자를 찾을 수 없습니다.',
            })
        }

        //patientInfo 에서 idx 추출
        const idx = patientInfo.idx
        //Patient 존재 여부 prisma의 patient 모델에서 idx를 사용해 조회
        const patientExist = await prisma.patient.findFirst({
            where: {
                idx,
            },
        })
        if (!patientExist) {
            return res.status(404).json({
                message: '환자를 찾을 수 없습니다.',
            })
        }

        //환자의 idx를 사용해 nursingSurvey 생성
        const nursingSurvey = await prisma.nursingSurvey.create({
            data: {
                ...rest,
                patientIdx: idx,
            },
        })
        return res.status(200).json(nursingSurvey)
    }
    return res.status(405).end() // Method Not Allowed
}
