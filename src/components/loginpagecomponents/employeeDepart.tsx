import React from 'react'
import { useRouter } from 'next/router'
import { FiFolder } from 'react-icons/fi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'


function EmployeeDepart() {
    const router = useRouter()

    const navigateTo = (path: string) => {
        router.push(path)
    }
    // 미구현 toast 띄우기
    const navigateToTemp = () => {
        toast.error('미구현 페이지입니다.')
    }
    // queryString으로 부서 구분

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
                        router.push('/LoginF')
                        toast.success('로그아웃 되었습니다.')
                    } else {
                        router.push('/LoginF')
                        toast.success('로그아웃 되었습니다.')
                    }
                } else {
                    router.push('/LoginF')
                    toast.success('로그아웃 되었습니다.')
                }
            } else {
                router.push('/LoginF')
                toast.success('로그아웃 되었습니다.')
            }
        },
    })
    const logoutMutate = async () => {
        await logout.mutate()
    }
    // 진료부 map
    const doctor = [
        '외래 진료(미구현)',
        '병동 진료(미구현)',
        '수술 관리(미구현)',
    ]
    // 간호부 ward map
    const wardDashboard = [
        'ER',
        'ICU',
        '4병동',
        '5병동',
        '6병동',
        '8병동',
        '11병동',
    ]
    // 약제부 map
    const pharmacy = ['약품 목록(미구현)', '처방전 관리(미구현)']
    return (
        <div className="flex flex-col items-center w-full h-full dark:text-black dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-900 dark:text-white rounded-lg p-6 w-full">
                <p className="text-md font-semibold text-gray-600 dark:text-white text-center my-10 ">
                    성공적으로 로그인했습니다.
                </p>
                <p className="text-md font-semibold text-gray-600 dark:text-white text-center my-10 ">
                    접근 가능한 부서 목록을 로딩합니다.
                </p>
                <div className="relative dark:bg-gray-900 dark:text-white">
                    <div className="flex items-center mb-6 gap-1">
                        <FiFolder className="text-md mr-2 text-[#0ea7e9]" />
                        <span className="text-md font-semibold">부서 목록</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-600 dark:text-white border text-md border-gray-400 rounded-lg shadow-md mt-2">
                        <ul className="py-2">
                            <li className="font-bold px-4 py-2 border-b text-md">
                                진료부
                            </li>
                            {doctor.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => navigateToTemp()}
                                    className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-400 cursor-pointer text-sm transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}

                            <li className="font-bold px-4 py-2 text-md border-b">
                                간호부
                            </li>

                            <li
                                onClick={() => navigateToTemp()}
                                className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-400 cursor-pointer transition text-sm duration-200"
                            >
                                OR(미구현)
                            </li>

                            {wardDashboard.map((item) => (
                                <li
                                    key={item}
                                    onClick={() =>
                                        navigateTo('/ward-dashboard?ward=' + item)
                                    }
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer dark:hover:bg-gray-400 text-sm transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}

                            <li className="font-bold px-4 py-2 border-b text-md">
                                약제부
                            </li>

                            {pharmacy.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => navigateToTemp()}
                                    className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-400 text-sm cursor-pointer transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* 아래 박스 추가 */}
            <div className="grid grid-cols-2 gap-4 bg-white  border-gray-400 dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg p-6 w-full mt-4">
                <button>
                    <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md p-4 ">
                        개발중
                    </div>
                </button>
                <button>
                    <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md p-4 ">
                        개발중
                    </div>
                </button>
                <button>
                    <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md p-4 ">
                        개발중
                    </div>
                </button>
                <button onClick={logoutMutate} disabled={logout.isPending}>
                    <div className=" bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md p-4 ">
                        {logout.isPending ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                            </div>
                        ) : (
                            '로그아웃'
                        )}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default EmployeeDepart
