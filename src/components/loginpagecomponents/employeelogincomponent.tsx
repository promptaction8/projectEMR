import { useState } from 'react'
import Modal from './loginpageemployeemodal'
import Modal2 from './loginpagepatiendmodal'
import Modal3 from './createemployeeaccountmodal'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import { tokenAtom } from '@/constants/token'
import { useSetAtom, useAtom } from 'jotai/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import LoginSuccessAndLink from './loginsuccessandlink'
import PatientLogin from './patientlogin'
import WardExtraBar from '../warddashboardcomponent/wardextrabar'

interface IEmployeeLoginData {
    id: string
    Password: string
}

function EmployeeLoginComponent() {
    const [isModalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const [isModalOpen2, setModalOpen2] = useState(false)
    const handleOpenModal2 = () => {
        setModalOpen2(true)
    }
    const handleCloseModal2 = () => {
        setModalOpen2(false)
    }

    const [isModalOpen3, setModalOpen3] = useState(false)
    const handleOpenModal3 = () => {
        setModalOpen3(true)
    }
    const handleCloseModal3 = () => {
        setModalOpen3(false)
    }
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IEmployeeLoginData>()

    const [token, setToken] = useAtom(tokenAtom)

    const [isLogin, setIsLogin] = useState(false)

    const employeeLogin = useMutation({
        mutationFn: async (data: IEmployeeLoginData) => {
            const tokenData = await axios.post(
                '/api/loginlogout/employeelogin',
                data
            )

            return setToken(tokenData.data.token)
        },
        onSuccess: () => {
            toast.success('로그인 성공')
            setIsLogin(true)
            // 로그인 성공 시 상태 변경
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        },
    })

    const Login: SubmitHandler<IEmployeeLoginData> = async (data) => {
        await employeeLogin.mutate(data)
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col border-4 rounded-t-xl border-[#0EA5E9] w-120 shadow-7xl bg-white">
                    <div className="flex h-20 w-full bg-[#0EA5E9] items-center justify-center rounded-t-lg">
                        <div className="text-4xl text-white font-semibold">
                            LOGIN
                        </div>
                    </div>
                    <div className="flex flex-grow flex-col p-6 items-center justify-center">
                        {isLogin ? (
                            <LoginSuccessAndLink />
                        ) : (
                            <>
                                <div className="flex flex-col w-full mt-30">
                                    <form onSubmit={handleSubmit(Login)}>
                                        <div className="mb-4">
                                            <p className="mb-10 font-noto text-2xl">
                                                직원 로그인
                                            </p>
                                            <label className="text-lg font-medium">
                                                ID
                                            </label>
                                            <input
                                                {...register('id', {
                                                    required:
                                                        '아이디를 입력하세요',
                                                })}
                                                type="text"
                                                placeholder="아이디를 입력하세요"
                                                className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                            />
                                            {errors.id && (
                                                <p className="text-red-500">
                                                    {errors.id.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="text-lg font-medium">
                                                PASSWORD
                                            </label>
                                            <input
                                                {...register('Password', {
                                                    required:
                                                        '비밀번호를 입력하세요',
                                                })}
                                                type="password"
                                                placeholder="비밀번호를 입력하세요"
                                                className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                            />
                                            {errors.Password && (
                                                <p className="text-red-500">
                                                    {errors.Password.message}
                                                </p>
                                            )}
                                        </div>
                                        <button className="bg-[#0EA5E9] text-white rounded-md h-12 p-3 mt-6 hover:bg-[#0A74B9] transition duration-300 w-full">
                                            로그인
                                        </button>
                                    </form>
                                    <p
                                        className="text-sm mt-10 cursor-pointer"
                                        onClick={handleOpenModal}
                                    >
                                        비밀번호 찾기
                                    </p>
                                    <p
                                        onClick={handleOpenModal3}
                                        className="text-sm mt-10 cursor-pointer"
                                    >
                                        직원 계정 생성
                                    </p>
                                </div>
                                <div className="flex-grow"></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            <Modal2 isOpen2={isModalOpen2} onClose2={handleCloseModal2} />
            <Modal3 isOpen3={isModalOpen3} onClose3={handleCloseModal3} />
        </>
    )
}

export default EmployeeLoginComponent
