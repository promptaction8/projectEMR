import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FiFolder } from 'react-icons/fi'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'

function LoginSuccessAndLink() {
    const router = useRouter()
    const [username, setUsername] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const decodedToken = jwtDecode(token) as any
            setUsername(decodedToken.id)
        } else {
            router.push('/mainpage')
        }
    }, [])

    const navigateTo = (path: any) => {
        router.push(path) // 경로로 이동
    }

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="bg-white rounded-lg p-6 w-full ">
                <h1 className="text-2xl font-bold text-center mb-4">
                    {username}님 어서오세요
                </h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    성공적으로 로그인했습니다.
                </p>

                <div className="relative mt-4">
                    <div className="flex items-center mb-2">
                        <FiFolder className="text-2xl mr-2 text-blue-600" />
                        <span className="text-xl font-semibold">부서 목록</span>
                    </div>
                    {/* 기존 gray-50 박스 제거하고 아래로 이동 */}
                    <div className="bg-gray-50 border rounded-lg shadow-md mt-2">
                        <ul className="py-2">
                            <li className="font-bold text-gray-800 px-4 py-2 border-b">
                                진료부(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                외래 진료(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                병동 진료(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                수술 관리(미구현)
                            </li>

                            <li className="font-bold text-gray-800 px-4 py-2 border-b">
                                간호부
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                ER(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                ICU(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                OR(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/warddashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                4병동
                            </li>
                            <li
                                onClick={() => navigateTo('/warddashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                5병동
                            </li>
                            <li
                                onClick={() => navigateTo('/warddashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                6병동
                            </li>
                            <li
                                onClick={() => navigateTo('/warddashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                8병동
                            </li>
                            <li
                                onClick={() => navigateTo('/warddashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                11병동
                            </li>

                            <li className="font-bold text-gray-800 px-4 py-2 border-b">
                                약제부
                            </li>
                            <li
                                onClick={() => navigateTo('/pharmacy')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                약품 목록(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/prescriptions')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                처방전 관리(미구현)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 아래 박스 추가 */}
            <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-6 w-full mt-4">
                <div className="bg-gray-50 border rounded-lg shadow-md p-4">
                    개발중
                </div>
                <div className="bg-gray-50 border rounded-lg shadow-md p-4">
                    개발중
                </div>
                <div className="bg-gray-50 border rounded-lg shadow-md p-4">
                    개발중
                </div>
                <div className="bg-gray-50 border rounded-lg shadow-md p-4">
                    개발중
                </div>
            </div>
        </div>
    )
}

export default LoginSuccessAndLink
