import { useState } from 'react'
import PatientLoginModal from './modal/patientLogin'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import { tokenAtom } from '@/constants/token'
import { useAtom } from 'jotai/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Modal } from 'react-responsive-modal'
import FindEmployeePassword from './modal/employeePassword'
import 'react-responsive-modal/styles.css'
import { useQuery } from '@tanstack/react-query'
import EmployeeAccount from './modal/employeeAccount'

interface IEmployeeLoginData {
    id: string
    password: string
}

function EmployeeLogin() {
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
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col border-2 rounded-md border-blue-600  w-120 shadow-7xl bg-white p-10">
                    <div className="flex h-16 w-full items-center justify-center">
                        <div className="text-4xl text-blue-600 font-semibold">
                            LOGIN
                        </div>
                    </div>
                    <div className="flex flex-grow flex-col p-6 items-center justify-center">
                        <div className="flex flex-col w-full mt-10">
                            <form onSubmit={handleSubmit(login)}>
                                <div className="mb-4">
                                    <p className="mb-10 font-noto text-2xl">
                                        직원 로그인
                                    </p>
                                    <label className="text-lg font-medium">
                                        ID
                                        <input
                                            {...register('id', {
                                                required: '아이디를 입력하세요',
                                            })}
                                            type="text"
                                            placeholder="아이디를 입력하세요"
                                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                        />
                                    </label>
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
                                        {...register('password', {
                                            required: '비밀번호를 입력하세요',
                                        })}
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                                <button
                                    disabled={employeeLogin.isPending}
                                    className="bg-white text-blue-600 border-blue-600 border-2 border-solid rounded-md h-12 p-3 mt-6 hover:bg-[#0A74B9] hover:text-white transition duration-300 w-full"
                                >
                                    {employeeLogin.isPending ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        </div>
                                    ) : (
                                        '로그인'
                                    )}
                                </button>
                            </form>
                            <p
                                className="text-sm mt-10 cursor-pointer"
                                onClick={onOpenModal}
                            >
                                비밀번호 찾기
                            </p>
                            <Modal open={open} onClose={onCloseModal} center>
                                <FindEmployeePassword />
                            </Modal>
                            <p
                                onClick={onOpenModal2}
                                className="text-sm mt-10 cursor-pointer"
                            >
                                직원 계정 생성
                            </p>
                            <Modal
                                open={open2}
                                onClose={onCloseModal2}
                                center
                                closeOnOverlayClick={false}
                            >
                                <EmployeeAccount />
                            </Modal>
                        </div>
                        <div className="flex-grow"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeLogin
