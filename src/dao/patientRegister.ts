import { PrismaClient } from '@prisma/client'

interface IPatientRegister {
    name: string
    dateOfBirth: string // YYYY-MM-DD 형식
    gender?: boolean // 선택적 속성
    phone: string
    ssn: string
    address: string
    occupation: string
    bloodType: string
    marriageStatus: boolean
    nationality: string
    guardianName: string
    guardianRelation: string
    guardianPhone: string
    insuranceStatus: boolean // 선택적 속성
    type: string
    company: string
    code: string
    mainSymptoms: string
    pastMedicalHistory: string
    allergicHistory: string
    usingDrugs: string
    familyMedicalHistory: string
    mentalHealthStatus: string
    physicalHealthStatus: string
    previousTreatmentHistory: string
    religion: string
    primaryPhysician: string
    livingEnvironment: string
    roomNumber: string
}

const prisma = new PrismaClient()

//환자 등록
export const patientRegister = async (data: IPatientRegister) => {
    const {
        name,
        dateOfBirth,
        gender,
        phone,
        ssn,
        address,
        occupation,
        bloodType,
        marriageStatus,
        nationality,
        guardianName,
        guardianRelation,
        guardianPhone,
        insuranceStatus,
        type,
        company,
        code,
        mainSymptoms,
        pastMedicalHistory,
        allergicHistory,
        usingDrugs,
        familyMedicalHistory,
        mentalHealthStatus,
        physicalHealthStatus,
        previousTreatmentHistory,
        religion,
        primaryPhysician,
        livingEnvironment,
        roomNumber,
    } = data

    // 환자 등록
    const patient = await prisma.patient.create({
        data: {
            name,
            dateOfBirth,
            gender,
            phone,
            ssn,
            address,
            occupation,
            bloodType,
            marriageStatus,
            nationality,
            guardianName,
            guardianRelation,
            guardianPhone,
            insuranceStatus,
            religion,
            primaryPhysician,
            roomNumber,
        },
    })
    const insurance = await prisma.insurance.create({
        data: {
            type,
            company,
            code,
            patientIdx: patient.idx,
        },
    })
    const medicalHistory = await prisma.medicalHistory.create({
        data: {
            mainSymptoms,
            pastMedicalHistory,
            allergicHistory,
            usingDrugs,
            familyMedicalHistory,
            mentalHealthStatus,
            physicalHealthStatus,
            previousTreatmentHistory,
            livingEnvironment,
            patientIdx: patient.idx,
        },
    })
    // 두번 넣는거 안됨?
    return { patient, insurance, medicalHistory }
}
