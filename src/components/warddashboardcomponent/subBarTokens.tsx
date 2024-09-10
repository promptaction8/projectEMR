import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import PatientRegister from './modals/patientRegister'
import NursingInfoSurvey from './modals/nursingInfoSurvey'
import Select from 'react-select'
import NursingInfoSurveys from './modals/nursingInfoSurveys'
import SubBarButtons from './subBarButtons'

function SubBarTokens() {
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

    return (
        <div className="flex flex-row justify-center items-center border-2 border-solid border-black">
            <div className="text-blue-600 mr-40 text-sm">
                {tokenId}님 환영합니다
            </div>
            <div className="text-blue-600 m-6 mr-80 text-sm">
                로그인 만료시간: {timeRemaining}
            </div>
            <button
                onClick={extendLoginTimeMutate}
                disabled={extendLoginTime.isPending}
                className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 mr-40 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
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
                className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 mr-40 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
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
    )
}

export default SubBarTokens
