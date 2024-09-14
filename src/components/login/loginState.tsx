import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import { useAtom } from 'jotai/react'
import { tokenAtom } from '@/constants/token'
import { toast } from 'react-toastify'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import EmployeeAccount from '../loginpagecomponents/modal/employeeAccount'
import { useQuery } from '@tanstack/react-query'
import FindEmployeePassword from '../loginpagecomponents/modal/employeePassword'
import { FiLogIn } from 'react-icons/fi'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'

interface IEmployeeLoginData {
    id: string
    password: string
}

export function LoginState({ isEmployeeLogin }: { isEmployeeLogin: boolean }) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IEmployeeLoginData>()

    const [token, setToken] = useAtom(tokenAtom)

    const { refetch } = useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            const response = await axios.get('/api/token-verify', {
                withCredentials: true,
            })
            return response.data
        },
    })

    const router = useRouter()
    const employeeLogin = useMutation({
        mutationFn: async (data: IEmployeeLoginData) => {
            const tokenData = await axios.post('/api/employee-login', data)
            console.log('🚀 ~ mutationFn: ~ data:', data)

            return setToken(tokenData.data.token)
        },
        onSuccess: async () => {
            await refetch()
            toast.success('로그인 성공')
            router.push('/')
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
            console.log(
                '🚀 ~ LoginState ~ error.response.data.message:',
                error.response.data.message
            )
        },
    })
    const login: SubmitHandler<IEmployeeLoginData> = async (data) => {
        await employeeLogin.mutate(data)
    }
    // 클릭 시 비밀번호 보기 아이콘
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)

    return (
        <div className="w-120 h-100 p-40 border-2 border-[#0ea7e9] border-solid rounded-b-md">
            <h2 className="font-bold text-xl text-[#0ea5e9] mb-30">
                {isEmployeeLogin === true ? '직원' : '환자'} 로그인
            </h2>

            {isEmployeeLogin === true && (
                <>
                    <form onSubmit={handleSubmit(login)}>
                        <div className="relative flex items-center my-10">
                            <label className="w-full">
                                <input
                                    {...register('id', { required: true })}
                                    maxLength={20}
                                    className=" bg-transparent  flex border-2 border-solid border-[#0EA5E9] rounded p-10 pr-10 w-full dark:text-white text-black font-mono"
                                    type="text"
                                    name="id"
                                />
                                <span className="absolute left-0 top-2 ml-10 px-8 text-lg uppercase -translate-y-6 dark:bg-gray-900 bg-white text-[#0ea5e9]">
                                    id
                                </span>
                            </label>
                            <FiLogIn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0EA5E9] text-2xl" />
                        </div>

                        <div className="relative flex items-center mt-30">
                            <label className="w-full">
                                <input
                                    {...register('password', {
                                        required: true,
                                    })}
                                    className=" bg-transparent  flex border-2 border-solid border-[#0EA5E9] rounded p-10 pr-10 w-full dark:text-white text-black font-mono"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                />
                                <span className="absolute left-0 top-2 ml-10 px-8 text-lg uppercase -translate-y-6  dark:bg-gray-900 bg-white text-[#0ea5e9]">
                                    password
                                </span>
                            </label>
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0EA5E9] text-2xl"
                                onClick={togglePassword}
                            >
                                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={employeeLogin.isPending}
                            className="bg-transparent dark:text-white text-black border-[#0ea7e9] border-2 border-solid rounded-md h-12 p-3 mt-60 hover:bg-[#0A74B9] hover:text-white transition duration-300 w-full"
                        >
                            {employeeLogin.isPending ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:animate-spin dark:border-b-2 dark:border-white"></div>
                                </div>
                            ) : (
                                '로그인'
                            )}
                        </button>
                        <div className="flex flex-col mt-20">
                            {errors.id || errors.password ? (
                                <p className="text-red-500 text-sm">
                                    아이디와 비밀번호를 확인해주세요
                                </p>
                            ) : null}
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}
