import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Mutation, useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import PatientRegister from './modals/patientregister'
import { resolve } from 'path'

function WardSubBar() {
    const [isPatientRegister, setIsPatientRegister] = useState(false)
    const [isNurseRecordModal, setIsNurseRecordModal] = useState(false)
    const [isNurseInfoModal, setIsNurseInfoModal] = useState(false)
    const [isSurgeryRegisterModal, setIsSurgeryRegisterModal] = useState(false)
    const [isConsultationModal, setIsConsultationModal] = useState(false)
    const [isPrnOrderModal, setIsPrnOrderModal] = useState(false)
    const [isAssessmentToolModal, setIsAssessmentToolModal] = useState(false)
    const [isMedicationRecordModal, setIsMedicationRecordModal] =
        useState(false)

    const [timeRemaining, setTimeRemaining] = useState<string>('')
    const router = useRouter()

    // 리액트 쿼리
    // 쿠키에 저장된 토큰을 서버로 보내서 디코딩
    const {
        data: jwtInfo,
        error,
        isLoading: extendTimeIsLoading,
        isRefetching: extendTimeIsRefetching,
        refetch,
    } = useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            const response = await axios.get('/api/token-verify', {
                withCredentials: true,
            })
            return response.data
        },
        refetchInterval: 10000,
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
    const logout = useMutation({
        mutationFn: async () => {
            const response = await axios.post(
                '/api/logout',
                {},
                {
                    withCredentials: true,
                }
            )
            return response.data
        },
        onSuccess: () => {
            toast.success('로그아웃 되었습니다.')
            router.push('/login')
        },
        onError: (error: any) => {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 401) {
                        router.push('/login')
                        toast.success('로그아웃 되었습니다.')
                    } else {
                        router.push('/login')
                        toast.success('로그아웃 되었습니다.')
                    }
                } else {
                    router.push('/login')
                    toast.success('로그아웃 되었습니다.')
                }
            } else {
                router.push('/login')
                toast.success('로그아웃 되었습니다.')
            }
        },
    })
    const logoutMutate = async () => {
        await logout.mutate()
    }

    // 로그인 시간 연장 useMutation
    const extendLoginTime = useMutation({
        mutationFn: async () => {
            // 시간 연장
            await new Promise((resolve) => setTimeout(resolve, 4000))
            await axios.post(
                '/api/token-reset',
                {},
                {
                    withCredentials: true,
                }
            )
        },
        onSuccess: () => {
            toast.success('로그인 시간이 연장되었습니다.')
            refetch()
        },
        onError: (error: any) => {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 401) {
                        router.push('/login')
                    } else {
                        router.push('/login')
                    }
                } else {
                    router.push('/login')
                }
            } else {
                router.push('/login')
            }
        },
    })
    const extendLoginTimeMutate = async () => {
        await extendLoginTime.mutate()
    }

    // 모달 연결
    const patientRegister = () => setIsPatientRegister(true)
    const handleClosePatientRegister = () => setIsPatientRegister(false)

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
                            onClick={patientRegister}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            환자 등록
                        </button>
                        <button
                            onClick={nurseRecordModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            간호 기록
                        </button>
                        <button
                            onClick={nurseInfoModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            간호정보조사지
                        </button>
                        <button
                            onClick={surgeryRegisterModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            수술 등록
                        </button>
                        <button
                            onClick={consultationModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            협진
                        </button>
                        <button
                            onClick={prnOrderModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            PRN 오더
                        </button>
                        <button
                            onClick={assessmentToolModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            사정 도구 템플릿
                        </button>
                        <button
                            onClick={medicationRecordModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            투약 기록 목록
                        </button>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="text-blue-600 mr-40 text-sm">
                            {tokenId}님 환영합니다
                        </div>
                        <div className="text-blue-600 m-6 mr-80 text-sm">
                            로그인 만료시간: {timeRemaining}
                        </div>
                        <button
                            onClick={extendLoginTimeMutate}
                            disabled={extendLoginTime.isPending}
                            className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 mr-40 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            {extendLoginTime.isPending ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                '로그인 시간 연장'
                            )}
                        </button>
                        <button
                            disabled={logout.isPending}
                            onClick={logoutMutate}
                            className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 mr-40 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            {logout.isPending ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                '로그아웃'
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <PatientRegister
                isOpen={isPatientRegister}
                onClose={handleClosePatientRegister}
            />
        </>
    )
}

export default WardSubBar
