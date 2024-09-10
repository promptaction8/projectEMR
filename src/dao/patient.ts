import { PrismaClient } from '@prisma/client'
import { number } from 'zod'

interface IPatientRegister {
    name: string
    ssn: string
    chartNumber: string
}

const prisma = new PrismaClient()

//환자 등록
export const patientRegister = async (data: IPatientRegister) => {
    const result = await prisma.patient.create({
        data,
    })
    return result
}

//이름과 차트 번호로 환자 조회
export const getPatient = async (name: string, chartNumber: string) => {
    try {
        const result = await prisma.patient.findFirst({
            where: {
                name,
                chartNumber,
            },
        })

        if (!result) {
            console.log('환자를 찾지 못했습니다. 입력한 값:', {
                name,
                chartNumber,
            })
        }

        return result
    } catch (error) {
        console.error('환자 조회 중 오류 발생:', error)
        throw new Error('환자 조회에 실패했습니다.') // 필요에 따라 에러를 던질 수 있습니다.
    }
}

interface INursingSurvey {
    name: string
    chartNumber: string
    ssn: string
    sex: string
    age: string
    address?: string
    occupation?: string
    bloodType?: string
    marriageStatus: boolean
    nationality: string
    guardianName?: string
    guardianRelation?: string
    guardianPhone?: string
    insuranceStatus: boolean
    insuranceType?: string
    insuranceCompany?: string
    insuranceCode?: string
    religion?: string
    primaryDoctor?: string
    primaryNurse: string
    vitalSigns: string
    heightAndWeight: string
    familyHistory?: string
    painLevel: string
    smokingStatus?: string
    drinkingStatus?: string
    allergicHistory?: string
    roomNumber: string
    admissionDate: string
    dispatchEvent?: string
}
