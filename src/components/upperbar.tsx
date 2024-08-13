import DropdownMenu from './loginpagecomponents/dropdown'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'
import Image from 'next/image'

function UpperBar() {
    const router = useRouter()
    const [id, setId] = useState('')
    const [token, setToken] = useState('')
    const [expirationTime, setExpirationTime] = useState<Date | null>(null)
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null)

    // 로컬 스토리지에서 토큰 가져오기 및 디코딩
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            const decodedToken = jwtDecode(storedToken) as any
            setId(decodedToken.id)
            setToken(storedToken)

            // 토큰에서 만료 시간 추출 (exp가 초 단위로 저장되어 있다고 가정)
            const expTime = new Date(decodedToken.exp * 1000)
            setExpirationTime(expTime)
        } else {
            router.push('/mainpage')
        }
    }, [])

    // 로그인 시간 연장 기능
    const extendSession = () => {
        if (expirationTime) {
            const newExpirationTime = new Date(
                expirationTime.getTime() + 30 * 60 * 1000
            ) // 30분 추가
            setExpirationTime(newExpirationTime)
        }
    }

    // expirationTime이 변경될 때마다 남은 시간 업데이트 및 타이머 설정
    useEffect(() => {
        if (expirationTime) {
            const updateRemainingTime = () => {
                const newTimeRemaining = expirationTime.getTime() - Date.now()
                setTimeRemaining(newTimeRemaining)

                if (newTimeRemaining <= 0) {
                    handleLogout()
                }
            }

            updateRemainingTime()
            const interval = setInterval(updateRemainingTime, 1000)

            // 컴포넌트 언마운트 시 타이머 정리
            return () => clearInterval(interval)
        }
    }, [expirationTime])

    // 로그아웃 처리
    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken('')
        router.push('/mainpage')
    }

    // 남은 시간을 시, 분, 초로 변환하는 함수
    const formatTimeRemaining = (time: number) => {
        const hours = Math.floor(time / (1000 * 60 * 60))
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((time % (1000 * 60)) / 1000)
        return `${hours}시간 ${minutes}분 ${seconds}초`
    }

    return (
        <>
            <div className="flex w-full h-16 bg-[#0EA5E9] shadow-md">
                <div className="flex flex-row items-center justify-center h-full w-40 text-3xl text-white font-bold">
                    <div className="flex items-center ml-40">
                        <Image
                            src="/images/EMR.png"
                            alt="EMR Logo"
                            width={50}
                            height={50}
                        />
                        <span className="ml-10">EMR</span>
                    </div>
                </div>
                <div className="flex ml-auto items-center h-full w-220 ">
                    <div className="flex items-center justify-between w-full h-full text-xl text-white p-2">
                        {id && (
                            <div className="flex items-center p-1 mr-4">
                                <span className="mr-8">{id} 님</span>

                                <div className="ml-4">
                                    로그인 만료시간 :{' '}
                                    {timeRemaining !== null
                                        ? formatTimeRemaining(timeRemaining)
                                        : ''}
                                </div>

                                <button
                                    className="bg-white text-[#0EA5E9] mx-20 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition duration-300"
                                    onClick={extendSession}
                                >
                                    로그인 시간 연장
                                </button>

                                <button
                                    className="bg-white text-[#0EA5E9] mx-4 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition duration-300"
                                    onClick={handleLogout}
                                >
                                    로그아웃
                                </button>
                            </div>
                        )}
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperBar
