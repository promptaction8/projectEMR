import React from 'react'
import { useRouter } from 'next/router'
import { FiFolder } from 'react-icons/fi'
import axios from 'axios'
import { toast } from 'react-toastify'

function LoginSuccessAndLink() {
    const router = useRouter()

    const navigateTo = (path: string) => {
        router.push(path)
    }
    const handleLogout = async () => {
        try {
            const response = await axios.post(
                '/api/logout', //요청할 URL
                {}, // 요청의 페이로드(빈 객체)
                {
                    withCredentials: true,
                } // 쿠키를 포함하도록 설정하는 withCredentials(자격증명- 쿠키, HTTP 인증 정보) 옵션.
            )

            if (response.status === 200) {
                toast.success('로그아웃 되었습니다.')
                router.push('/login')
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                // Axios 에러일 경우
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
                // 다른 유형의 에러 처리
                router.push('/login')
                toast.success('로그아웃 되었습니다.')
            }
        }
    }
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="bg-white rounded-lg p-6 w-full">
                <p className="text-md text-gray-600 text-center my-10 ">
                    성공적으로 로그인했습니다.
                </p>
                <p className="text-md text-gray-600 text-center my-10 ">
                    접근 가능한 부서 목록을 로딩합니다.
                </p>
                <div className="relative">
                    <div className="flex items-center mb-6">
                        <FiFolder className="text-2xl mr-2 text-blue-600" />
                        <span className="text-xl font-semibold">부서 목록</span>
                    </div>
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
                                onClick={() => navigateTo('/ward-dashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                4병동
                            </li>
                            <li
                                onClick={() => navigateTo('/ward-dashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                5병동
                            </li>
                            <li
                                onClick={() => navigateTo('/ward-dashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                6병동
                            </li>
                            <li
                                onClick={() => navigateTo('/ward-dashboard')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                8병동
                            </li>
                            <li
                                onClick={() => navigateTo('/ward-dashboard')}
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
                <button>
                    <div className="bg-gray-50 rounded-lg shadow-md p-4 border-2 border-blue-600 border-solid ">
                        개발중
                    </div>
                </button>
                <button>
                    <div className="bg-gray-50  rounded-lg shadow-md p-4 border-2 border-blue-600 border-solid ">
                        개발중
                    </div>
                </button>
                <button>
                    <div className="bg-gray-50 rounded-lg shadow-md p-4 border-2 border-blue-600 border-solid">
                        개발중
                    </div>
                </button>
                <button onClick={handleLogout}>
                    <div className=" bg-gray-50 rounded-lg shadow-md p-4 border-2 border-blue-600 border-solid">
                        <span>로그아웃</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default LoginSuccessAndLink
