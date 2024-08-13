import DropdownMenu from './loginpagecomponents/dropdown'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode' // jwtDecode를 디폴트로 임포트해야 합니다.
import Image from 'next/image'
import { SECRET_KEY } from '@/constants'
import jwt from 'jsonwebtoken'
import axios from 'axios'

function UpperBar() {
    const router = useRouter()
    const [id, setId] = useState('')
    const [token, setToken] = useState('')
    const [expirationTime, setExpirationTime] = useState<Date | null>(null)
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null)

    // 로그아웃 처리

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
                        <span className="ml-10 text-4xl">EMR</span>
                    </div>
                </div>
                <div className="flex ml-auto items-center h-full w-260 ">
                    <div className="flex items-center justify-between w-full h-full text-xl text-white p-2">
                        {token && (
                            <div className="flex items-center p-1 mr-4">
                                <button className="bg-white text-[#0EA5E9] mx-4 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition duration-300">
                                    로그아웃
                                </button>
                            </div>
                        )}
                        <div className="hidden md:flex ml-auto">
                            <ul className="flex space-x-4 pr-40">
                                <li className="text-lg text-white hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                                    PACS
                                </li>
                                <li className="text-lg text-white hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                                    CPOE
                                </li>
                                <li className="text-lg text-white hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                                    RIS
                                </li>
                                <li className="text-lg text-white hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                                    CDS
                                </li>
                                <li className="text-lg text-white hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                                    HIS
                                </li>
                            </ul>
                        </div>
                        <div className="flex md:hidden ml-auto">
                            <DropdownMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperBar
