import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import PatientRegister from './modals/patientRegister'
import TemplateDropDown from './templateDropDown'

function WardSubBar() {
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
    const tokenData = jwtInfo?.verifyToken
    const tokenId = tokenData?.id

    // 모달 연결
    // PatientRegister 모달
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    // NurseRecord 모달
    const [open2, setOpen2] = useState(false)
    const onOpenModal2 = () => setOpen2(true)
    const onCloseModal2 = () => setOpen2(false)

    // NursingInfoSurvey 모달
    const [open3, setOpen3] = useState(false)
    const onOpenModal3 = () => setOpen3(true)
    const onCloseModal3 = () => setOpen3(false)

    // SurgeryRegister 모달
    const [open4, setOpen4] = useState(false)
    const onOpenModal4 = () => setOpen4(true)
    const onCloseModal4 = () => setOpen4(false)

    // Consultation 모달
    const [open5, setOpen5] = useState(false)
    const onOpenModal5 = () => setOpen5(true)
    const onCloseModal5 = () => setOpen5(false)

    // PRNOrder 모달
    const [open6, setOpen6] = useState(false)
    const onOpenModal6 = () => setOpen6(true)
    const onCloseModal6 = () => setOpen6(false)

    // AssessmentToolTemplate 모달
    const [open7, setOpen7] = useState(false)
    const onOpenModal7 = () => setOpen7(true)
    const onCloseModal7 = () => setOpen7(false)

    // MedicationRecordList 모달
    const [open8, setOpen8] = useState(false)
    const onOpenModal8 = () => setOpen8(true)
    const onCloseModal8 = () => setOpen8(false)

    // Nursing Plan 모달
    const [open9, setOpen9] = useState(false)
    const onOpenModal9 = () => setOpen9(true)
    const onCloseModal9 = () => setOpen9(false)

    return (
        <>
            <div className="bg-gray-100 p-6 mb-10 mt-10 text-white items-center text-sm font-bold">
                <div className="flex flex-wrap justify-between mt-2 ml-40">
                    <div className="flex space-x-7">
                        <button
                            onClick={onOpenModal}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            환자 등록
                        </button>
                        <Modal
                            open={open}
                            onClose={onCloseModal}
                            center
                            closeOnOverlayClick={false}
                        >
                            <PatientRegister />
                        </Modal>

                        <button
                            onClick={onOpenModal2}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            간호 기록
                        </button>
                        <Modal
                            open={open2}
                            onClose={onCloseModal2}
                            center
                        ></Modal>

                        <button className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105">
                            간호 계획
                        </button>
                        <Modal
                            open={open9}
                            onClose={onCloseModal9}
                            center
                        ></Modal>

                        <button
                            onClick={onOpenModal3}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            간호정보조사지
                        </button>
                        <Modal
                            open={open3}
                            onClose={onCloseModal3}
                            center
                        ></Modal>

                        <button
                            onClick={onOpenModal4}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            수술 등록
                        </button>
                        <Modal
                            open={open4}
                            onClose={onCloseModal4}
                            center
                        ></Modal>

                        <button
                            onClick={onOpenModal5}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            협진
                        </button>
                        <Modal
                            open={open5}
                            onClose={onCloseModal5}
                            center
                        ></Modal>

                        <button
                            onClick={onOpenModal6}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            PRN 오더
                        </button>
                        <Modal
                            open={open6}
                            onClose={onCloseModal6}
                            center
                        ></Modal>

                        <div className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105">
                            <TemplateDropDown />
                        </div>

                        <button
                            onClick={onOpenModal8}
                            className="bg-white text-blue-600  border-blue-600 border-2 px-10 py-5 rounded-md hover:bg-[#0EA5E9] hover:text-white transition duration-300 transform hover:scale-105"
                        >
                            투약 기록 목록
                        </button>
                        <Modal
                            open={open8}
                            onClose={onCloseModal8}
                            center
                        ></Modal>
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
        </>
    )
}

export default WardSubBar
