import React from 'react'
import { useRouter } from 'next/router'
import { CiLogin } from 'react-icons/ci'
import Link from 'next/link'

function LoginBox() {
    const router = useRouter()
    const onClickEmployeeLogin = () => {
        router.push('/loginpage')
    }
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex-col flex w-350 h-200">
                <div className="w-full h-32 flex items-center justify-center relative">
                    <span className="text-6xl font-bold text-[#0EA5E9] relative mb-4">
                        Login
                    </span>
                    <div className="absolute left-0 right-0 bottom-0 h-1">
                        <div className="h-full bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
                    </div>
                </div>
                <div className="w-full flex-1 flex flex-col md:flex-row gap-4 md:gap-64 items-center justify-center">
                    {/* 직원 로그인 박스 */}
                    <div className="w-full md:w-140 h-auto flex flex-col items-center p-4 ">
                        <CiLogin className="text-9xl mb-10 text-[#0ea5e9]" />
                        <h2 className="text-xl font-bold mb-30">직원 로그인</h2>
                        <p className="text-center mb-30">
                            의료진, 원내 관계자 및 시스템 사용자는 이곳으로
                            로그인 해주세요.
                        </p>
                        <Link
                            href="/loginpage"
                            className="bg-gray-100 border-2 border-[#0EA5E9] text-[#0EA5E9] py-3 px-8  rounded-lg text-3xl font-mono shadow-xl transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-opacity-50"
                        >
                            Employee Login
                        </Link>
                        {/* 그라데이션 밑줄 추가 */}
                        <div className="relative w-full mt-40">
                            <div className="absolute left-0 right-0 bottom-0 h-1">
                                <div className="h-full bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* 환자 로그인 박스 */}
                    <div className="w-full md:w-140 h-auto flex flex-col items-center p-4">
                        <CiLogin className="text-9xl mb-10 text-[#0ea5e9]" />
                        <h2 className="text-xl font-bold mb-30">환자 로그인</h2>
                        <p className="text-center mb-30">
                            의료기록 열람을 원하시는 환자분들은 이곳으로 로그인
                            해주세요.
                        </p>
                        <button className="bg-gray-100 border-2 border-[#0EA5E9] text-[#0EA5E9] py-3 px-8 rounded-lg text-3xl font-mono shadow-xl transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-opacity-50">
                            Patient Login
                        </button>
                        <div className="relative w-full mt-40">
                            <div className="absolute left-0 right-0 bottom-0 h-1">
                                <div className="h-full bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBox
