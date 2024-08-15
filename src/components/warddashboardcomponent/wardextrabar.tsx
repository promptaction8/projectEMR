import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAtom } from 'jotai/react'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import { tokenAtom } from '@/constants/token'
import PatientRegisterModal from './modals/patientregistermodal'

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

    const [token, setToken] = useAtom(tokenAtom)
    const [timeRemaining, setTimeRemaining] = useState<string>('')
    const router = useRouter()

    // 리액트 쿼리
    // 쿠키에 저장된 토큰을 서버로 보내서 디코딩
    const {
        data: jwtInfo,
        error,
        isLoading,
    } = useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            const response = await axios.get('/api/tokendecoding', {
                withCredentials: true,
            })
            return response.data
        },
        refetchInterval: 500,
        enabled: !!token,
    })
    // 로그인 만료시간 계산
    useEffect(() => {
        if (jwtInfo?.verifyToken?.exp) {
            const calculateTimeRemaining = () => {
                const now = new Date()
                const expDate = new Date(jwtInfo.verifyToken.exp * 1000)
                const timeDiff = expDate.getTime() - now.getTime()

                if (timeDiff <= 0) {
                    setTimeRemaining('만료됨')
                } else {
                    const hours = Math.floor(timeDiff / (1000 * 60 * 60))
                    const minutes = Math.floor(
                        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
                    )
                    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
                    setTimeRemaining(
                        `${hours}시간 ${minutes}분 ${seconds}초 남음`
                    )
                }
            }

            calculateTimeRemaining() // 초기 렌더링 시 계산
            const intervalId = setInterval(calculateTimeRemaining, 1000) // 1초마다 업데이트

            return () => clearInterval(intervalId) // 컴포넌트 언마운트 시 인터벌 클리어
        }
    }, [jwtInfo])

    // 로그아웃
    const handleLogout = async () => {
        const response = await axios.post('/api/loginlogout/logout', {
            withCredentials: true,
        })
        if (response.status === 200) {
            toast.success('로그아웃 되었습니다.')
            router.push('/loginpage')
        }
    }

    // 로그인 시간 연장
    const extendLoginTIme = async () => {
        await axios.post('/api/loginlogout/extendlogintime', {
            withCredentials: true,
        })
    }

    // 모달 연결
    const patientRegisterModal = () => setIsPatientRegisterModal(true)
    const handleClosePatientRegisterModal = () =>
        setIsPatientRegisterModal(false)

    const nurseRecordModal = () => setIsNurseRecordModal(true)
    const handleCloseNurseRecordModal = () => setIsNurseRecordModal(false)

    const nurseInfoModal = () => setIsNurseInfoModal(true)
    const handleCloseNurseInfoModal = () => setIsNurseInfoModal(false)

    const surgeryRegisterModal = () => setIsSurgeryRegisterModal(true)
    const handleCloseSurgeryRegisterModal = () =>
        setIsSurgeryRegisterModal(false)

    const consultationModal = () => setIsConsultationModal(true)
    const handleCloseConsultationModal = () => setIsConsultationModal(false)

    const prnOrderModal = () => setIsPrnOrderModal(true)
    const handleClosePrnOrderModal = () => setIsPrnOrderModal(false)

    const assessmentToolModal = () => setIsAssessmentToolModal(true)
    const handleCloseAssessmentToolModal = () => setIsAssessmentToolModal(false)

    const medicationRecordModal = () => setIsMedicationRecordModal(true)
    const handleCloseMedicationRecordModal = () =>
        setIsMedicationRecordModal(false)

    const tokenData = jwtInfo?.verifyToken
    const tokenId = tokenData?.id

    return (
        <>
            <div className="bg-gray-100 p-6 mb-10 mt-10 text-white items-center text-sm font-bold">
                <div className="flex flex-wrap justify-between mt-2 ml-40">
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
                            {tokenId}님 환영합니다
                        </div>
                        <div className="text-[#0ea5e9] m-6 mr-80 text-sm">
                            로그인 만료시간: {timeRemaining}
                        </div>
                        <button
                            onClick={extendLoginTIme}
                            className="bg-white text-[#0EA5E9] border border-[#0EA5E9] px-10 py-5 mr-40 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            로그인 시간 연장
                        </button>
                        <button
                            onClick={handleLogout}
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
