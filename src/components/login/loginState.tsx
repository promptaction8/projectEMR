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
import FindEmployeePassword from '../loginpagecomponents/modal/employeePassword';
import { FiLogIn } from 'react-icons/fi'



interface IEmployeeLoginData {
    id: string
    password: string
}


export function LoginState({isEmployeeLogin}: {isEmployeeLogin: boolean}) {

    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    const [open2, setOpen2] = useState(false)
    const onOpenModal2 = () => setOpen2(true)
    const onCloseModal2 = () => setOpen2(false)

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

            return setToken(tokenData.data.token)
        },
        onSuccess: async () => {
            await refetch()
            toast.success('로그인 성공')
            router.push('/')
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        },
    })

    const login: SubmitHandler<IEmployeeLoginData> = async (data) => {
        await employeeLogin.mutate(data)
    }
    return(
        <div className='w-120 p-20 border-2 border-[#0ea7e9] border-solid'>
                    <h2 className='font-bold text-xl text-[#0ea5e9]'>{isEmployeeLogin === true ? "직원": "환자"} 로그인</h2>
                    <form onSubmit={handleSubmit(login)}>
                        <div className='my-10 relative w-full'>
                            <label>
                            <input
                            {...register('id', { required: true })}
                            maxLength={20}
                            placeholder='아이디'
                            className='border-2 border-solid border-[#0EA5E9] rounded-t-lg p-10 w-full text-black font-mono'
                            type="text" name="patientId" />
                            </label>
                            <FiLogIn className='absolute right-0 top-0 mt-10 mr-10 text-[#0EA5E9]'/>
                            {errors.id && <span>아이디를 입력해주세요</span>}
                        </div>
                        <div className='my-10'>
                            <label>
                            <input
                            {...register('password', { required: true })}
                            placeholder='비밀번호'
                            className='border-2 border-solid border-[#0EA5E9] rounded-b-lg p-10 w-full text-black font-mono'
                            type="password" name="patientPassword" />
                            </label>
                            {errors.password && <span>비밀번호를 입력해주세요</span>}
                        </div>

                        <div className='flex flex-row justify-center items-center gap-16 mt-8'>
                                    <p className="text-sm mt-10 cursor-pointer" onClick={handleOpenModal3}>비밀번호 찾기</p>
                                    <Modal open={isModalOpen3} onClose={handleCloseModal3} center>
                                        <FindEmployeePassword />
                                    </Modal>
                                    {/* 세로 구분선 */}
                                    <div className="border-r-2 border-solid border-[#0ea7e9] h-4 mt-10"></div>
                                    <p className="text-sm mt-10 cursor-pointer" onClick={onOpenModal2}>
                                        직원 계정 생성
                                    </p >
                                    <Modal open={open2} onClose={onCloseModal2} center closeOnOverlayClick={false}>
                                        <EmployeeAccount />

                                    </Modal>
                                </div>

                        <button
                                    disabled={employeeLogin.isPending}
                                    className="bg-white text-[#0ea7e9] border-[#0ea7e9] border-2 border-solid rounded-md h-12 p-3 mt-20 hover:bg-[#0A74B9] hover:text-white transition duration-300 w-full"
                                >
                                    {employeeLogin.isPending ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:animate-spin dark:border-b-2 dark:border-white"></div>
                                        </div>
                                    ) : (
                                        '로그인'
                                    )}
                                </button>



                    </form>
                </div>
    )

}