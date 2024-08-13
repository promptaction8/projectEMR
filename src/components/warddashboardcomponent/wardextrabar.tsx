import React, { use, useEffect } from 'react'
import { useState } from 'react'
import PatientRegisterModal from './modals/patientregistermodal'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { tokenAtom } from '@/constants/token'
import { useAtom } from 'jotai/react'

function WardExtraBar() {
    const [isPatientRegisterModal, setIsPatientRegisterModal] = useState(false)
    const [isNurseRecordModal, setIsNurseRecordModal] = useState(false)
    const [isNurseInfoModal, setIsNurseInfoModal] = useState(false)
    const [isSurgeryRegisterModal, setIsSurgeryRegisterModal] = useState(false)
    const [isConsultationModal, setIsConsultationModal] = useState(false)
    const [isPrnOrderModal, setIsPrnOrderModal] = useState(false)
    const [isAssessmentToolModal, setIsAssessmentToolModal] = useState(false)
    const [isMedicationRecordModal, setIsMedicationRecordModal] =
        useState(false)

    const patientRegisterModal = () => {
        setIsPatientRegisterModal(true)
    }
    const handleClosePatientRegisterModal = () => {
        setIsPatientRegisterModal(false)
    }

    const nurseRecordModal = () => {
        setIsNurseRecordModal(true)
    }
    const handleCloseNurseRecordModal = () => {
        setIsNurseRecordModal(false)
    }

    const nurseInfoModal = () => {
        setIsNurseInfoModal(true)
    }
    const handleCloseNurseInfoModal = () => {
        setIsNurseInfoModal(false)
    }

    const surgeryRegisterModal = () => {
        setIsSurgeryRegisterModal(true)
    }
    const handleCloseSurgeryRegisterModal = () => {
        setIsSurgeryRegisterModal(false)
    }

    const consultationModal = () => {
        setIsConsultationModal(true)
    }
    const handleCloseConsultationModal = () => {
        setIsConsultationModal(false)
    }

    const prnOrderModal = () => {
        setIsPrnOrderModal(true)
    }
    const handleClosePrnOrderModal = () => {
        setIsPrnOrderModal(false)
    }

    const assessmentToolModal = () => {
        setIsAssessmentToolModal(true)
    }
    const handleCloseAssessmentToolModal = () => {
        setIsAssessmentToolModal(false)
    }

    const medicationRecordModal = () => {
        setIsMedicationRecordModal(true)
    }
    const handleCloseMedicationRecordModal = () => {
        setIsMedicationRecordModal(false)
    }

    const router = useRouter()

    const [token, setToken] = useAtom(tokenAtom)
    //로그아웃
    const logout = () => {
        setToken(null)
        router.push('/loginpage')
    }
    interface TokenInfo {
        id: string
        iat: number
        exp: number
        email: string
        department: string
        position: string
    }
    //토큰 가져오기
    console.log('🚀 ~ WardExtraBar ~ token:', token)
    if (!token) {
        router.push('/loginpage')
    }
    const tokenInfo = jwtDecode<TokenInfo>(token as string)
    const expirationTime = new Date(tokenInfo.exp * 1000)
    // const tokenReset = async () => {
    //     const response = await axios.post(
    //         '/api/tokenreset',
    //         {},
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         }
    //     )
    //     console.log('🚀 ~ tokenReset ~ response:', response)
    //     const newToken = response.data.newToken
    //     localStorage.setItem('token', newToken)
    //     console.log('🚀 ~ tokenReset ~ newToken:', newToken)
    // }

    return (
        <>
            <div className="bg-gray-100 p-6 mb-10 mt-10 text-white items-center text-sm font-bold ">
                <div className="flex flex-wrap justify-between mt-2 ml-40 ">
                    <div className="flex space-x-7">
                        <button
                            onClick={patientRegisterModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            환자 등록
                        </button>
                        <button
                            onClick={nurseRecordModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            간호 기록
                        </button>
                        <button
                            onClick={nurseInfoModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            간호정보조사지
                        </button>
                        <button
                            onClick={surgeryRegisterModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            수술 등록
                        </button>
                        <button
                            onClick={consultationModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            협진
                        </button>
                        <button
                            onClick={prnOrderModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            PRN 오더
                        </button>
                        <button
                            onClick={assessmentToolModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            사정 도구 템플릿
                        </button>
                        <button
                            onClick={medicationRecordModal}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            투약 기록 목록
                        </button>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="text-[#0ea5e9] mr-40 text-sm">
                            {tokenInfo.id}님 환영합니다
                        </div>
                        <div className="text-[#0ea5e9] m-6 mr-80 text-sm">
                            로그아웃 만료시간 :{' '}
                            {expirationTime.toLocaleString()}까지
                        </div>
                        <button className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 mr-40 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105">
                            로그인 시간 연장
                        </button>
                        <button
                            onClick={logout}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 mr-40 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            로그아웃
                        </button>
                    </div>
                </div>
            </div>

            <PatientRegisterModal
                isOpen={isPatientRegisterModal}
                onClose={handleClosePatientRegisterModal}
            />
        </>
    )
}

export default WardExtraBar
