// 환자 등록 api

import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const {
            name,
            dateOfBirth,
            gender,
            phone,
            ssn,
            insuranceStatus,
            occupation,
            address,
            emergencyContactName,
            emergencyContactPhone,
            religion,
            primaryPhysician,
            bloodType,
            marriageStatus,
            patientCountry,
            patientGuardianName,
            patientGuardianRelationship,
            patientGuardianPhone,
            insuranceType,
            insuranceNumber,
            mainSymptoms,
            pastMedicalHistory,
            usingDrugs,
            familyMedicalHistory,
            mentalHealthStatus,
            physicalHealthStatus,
            previousTreatmentHistory,
            livingEnvironment,
        } = req.body
        console.log('🚀 ~ req.body:', req.body)

        // 필수 데이터 확인
        if (
            !name ||
            !dateOfBirth ||
            gender === undefined ||
            !phone ||
            !ssn ||
            insuranceStatus === undefined ||
            !occupation ||
            !address ||
            !emergencyContactName ||
            !emergencyContactPhone ||
            !religion ||
            !primaryPhysician ||
            !bloodType ||
            marriageStatus === undefined ||
            !patientCountry ||
            !patientGuardianName ||
            !patientGuardianRelationship ||
            !patientGuardianPhone ||
            !insuranceType ||
            !insuranceNumber ||
            !mainSymptoms ||
            !pastMedicalHistory ||
            !usingDrugs ||
            !familyMedicalHistory ||
            !mentalHealthStatus ||
            !physicalHealthStatus ||
            !previousTreatmentHistory ||
            !livingEnvironment
        ) {
            return res.status(400).json('필수 데이터가 없습니다')
        }

        return res.status(200).json('환자 등록 성공')
    }
    return res.status(405).end() // Method Not Allowed
}
