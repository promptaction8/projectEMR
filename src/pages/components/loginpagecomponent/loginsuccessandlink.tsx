import React from 'react'
import { useRouter } from 'next/router'
import { FiFolder } from 'react-icons/fi' // 파일 아이콘을 위한 react-icons 패키지

function LoginSuccessAndLink() {
    const router = useRouter()

    const navigateTo = (path: any) => {
        router.push(path) // 경로로 이동
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="bg-white rounded-lg p-6 w-full">
                <h1 className="text-2xl font-bold text-center mb-4">
                    환영합니다!
                </h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    성공적으로 로그인했습니다.
                </p>

                <div className="relative mt-4">
                    <div className="flex items-center mb-2">
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
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                4병동
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                5병동(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                6병동(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                8병동(미구현)
                            </li>
                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                11병동(미구현)
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

            <div className="flex justify-between bg-gray-50 mt-6 shadow-md border-2 border-gray-300 rounded-lg w-full">
                <div className="flex-1 border-r-2 border-gray-300 h-40 flex items-center justify-center">
                    <span className="text-lg font-semibold">Section 1</span>
                </div>
                <div className="flex-1 h-40 flex items-center justify-center">
                    <span className="text-lg font-semibold">Section 2</span>
                </div>
            </div>
        </div>
    )
}

export default LoginSuccessAndLink
