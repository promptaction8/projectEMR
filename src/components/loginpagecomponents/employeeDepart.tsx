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
    // 첫 번째 코드: axios.post에 null을 보냅니다. 서버가 null을 받는 것이 의도된 동작이라면 괜찮지만, 일반적으로 로그아웃 요청에는 빈 객체 {}가 사용됩니다.
    // const logout = useMutation({
    //     mutationFn: async () => {
    //         await axios.post('/api/logout', null, {
    //             withCredentials: true,
    //         })
    //         return null
    //     },
    //     onSuccess: () => {
    //         toast.success('로그아웃 성공')
    //         router.push('/')
    //     },
    //     onError: (error: any) => {
    //         toast.error(error.response.data.message)
    //     },
    // })
    // const logoutMutate = async () => {
    //     await logout.mutate()
    // }

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
    // 진료부 map
    const doctor = [
        '진료부(미구현)',
        '외래 진료(미구현)',
        '병동 진료(미구현)',
        '수술 관리(미구현)',
    ]
    // 간호부 ward map
    const wardDashboard = [
        'ER(미구현)',
        'ICU(미구현)',
        '4병동',
        '5병동',
        '6병동',
        '8병동',
        '11병동',
    ]
    // 약제부 map
    const pharmacy = ['약품 목록(미구현)', '처방전 관리(미구현)']
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="bg-white rounded-lg p-6 w-full">
                <p className="text-md font-semibold text-gray-600 text-center my-10 ">
                    성공적으로 로그인했습니다.
                </p>
                <p className="text-md font-semibold text-gray-600 text-center my-10 ">
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
                                진료부
                            </li>
                            {doctor.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => navigateTo('/temp')}
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}

                            <li className="font-bold text-gray-800 px-4 py-2 border-b">
                                간호부
                            </li>

                            <li
                                onClick={() => navigateTo('/temp')}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                            >
                                OR(미구현)
                            </li>

                            {wardDashboard.map((item) => (
                                <li
                                    key={item}
                                    onClick={() =>
                                        navigateTo('/ward-dashboard')
                                    }
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}

                            <li className="font-bold text-gray-800 px-4 py-2 border-b">
                                약제부
                            </li>

                            {pharmacy.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => navigateTo('/temp')}
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}
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
                <button onClick={logoutMutate} disabled={logout.isPending}>
                    <div className=" bg-gray-50 rounded-lg shadow-md p-4 border-2 border-blue-600 border-solid">
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
