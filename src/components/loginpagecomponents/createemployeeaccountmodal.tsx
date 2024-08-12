import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { error } from 'console'

interface ModalProps {
    isOpen3: boolean
    onClose3: () => void // 인자를 받지 않고 아무것도 반환하지 않는 함수
}

interface AccountCreationModalProps {
    onClose3: () => void // 여기에 onClose3의 타입을 명시
}
interface IFormField {
    id: string // 사용자 ID
    Password: string // 비밀번호
    Email: string // 이메일
    Phone: string // 휴대폰 번호
    Address: string // 주소
    Department: string // 부서명
    Position: string // 직위
    DateOfJoining: string // 입사일
}
const AccountCreationModal = ({ onClose3 }: AccountCreationModalProps) => {
    const [selectedRole, setSelectedRole] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IFormField>()
    const createEmployeeAccountMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            return await axios.post(
                '/api/createaccount/createemployeeaccount',
                data
            )
        },

        onSuccess: () => {
            onClose3()
            router.push('/MainPage')
            toast.success('회원가입이 성공했습니다')
        },
        onError: (error: any) => {
            const errorMessage = error.response.data
            toast.error(errorMessage)
        },
    })

    const handleRoleSelect = (role: string) => {
        setSelectedRole(role)
    }
    const createEmployeeAccountMutate: SubmitHandler<IFormField> = (data) =>
        createEmployeeAccountMutation.mutate(data)

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-10 w-120">
                <h2 className="text-lg font-semibold">
                    CREATE EMPLOYEE ACCOUNT
                </h2>
                <form onSubmit={handleSubmit(createEmployeeAccountMutate)}>
                    <div className="mb-4">
                        <label className="text-lg font-medium">ID</label>
                        <input
                            {...register('id', {
                                required: 'ID를 입력하세요',
                            })}
                            type="text"
                            placeholder="아이디를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />{' '}
                        {errors.id && (
                            <span className="text-red-500">
                                {errors.id.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">PASSWORD</label>
                        <input
                            {...register('Password', {
                                required: 'PASSWORD를 입력하세요',
                            })}
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.Password && (
                            <span className="text-red-500">
                                {errors.Password.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">EMAIL</label>
                        <input
                            {...register('Email', {
                                required: 'EMAIL을 입력하세요',
                            })}
                            type="email"
                            placeholder="이메일을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.Email && (
                            <span className="text-red-500">
                                {errors.Email.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">
                            PHONE-NUMBER
                        </label>
                        <input
                            {...register('Phone', {
                                required: 'PHONE-NUMBER를 입력하세요',
                            })}
                            type="tel"
                            placeholder="휴대폰 번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.Phone && (
                            <span className="text-red-500">
                                {errors.Phone.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">ADDRESS</label>
                        <input
                            {...register('Address', {
                                required: 'ADDRESS를 입력하세요',
                            })}
                            type="text"
                            placeholder="주소를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.Address && (
                            <span className="text-red-500">
                                {errors.Address.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">
                            DEPARTMENT
                        </label>
                        <input
                            {...register('Department', {
                                required: 'DEPARTMENT 를 입력하세요',
                            })}
                            type="text"
                            placeholder="정확한 부서명을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.Department && (
                            <span className="text-red-500">
                                {errors.Department.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="text-lg font-medium">POSITION</label>
                        <div className="flex flex-wrap mt-2">
                            {[
                                '의사',
                                '약사',
                                '간호사',
                                '간호 조무사',
                                '물리치료사',
                                '직원',
                            ].map((role) => (
                                <button
                                    key={role}
                                    className={`border border-gray-300 rounded-md p-2 mx-1 my-1 transition duration-300 focus:outline-none ${
                                        selectedRole === role
                                            ? 'bg-[#0EA5E9] text-white'
                                            : 'hover:bg-[#0EA5E9] hover:text-white'
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleRoleSelect(role)
                                        setValue('Position', role)
                                    }}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                        {errors.Position && (
                            <span className="text-red-500">
                                {errors.Position.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">
                            DATE OF JOINING
                        </label>
                        <input
                            type="date"
                            {...register('DateOfJoining', {
                                required: '가입 날짜를 입력해주세요',
                            })}
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.DateOfJoining && (
                            <span className="text-red-500">
                                {errors.DateOfJoining.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-6 bg-[#0EA5E9] text-white rounded-md h-10 w-full hover:bg-[#0A74B9] transition duration-300"
                    >
                        CREATION
                    </button>

                    <div className="mb-4">
                        <label className="text-lg font-medium">CODE KEY</label>
                        <input
                            type="text"
                            placeholder="키를 발급받은 사람만 계정 생성이 가능합니다"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </div>

                    <button
                        className="mt-2 text-sm text-gray-600 cursor-pointer"
                        onClick={onClose3}
                    >
                        CLOSE
                    </button>
                </form>
            </div>
        </div>
    )
}

const Modal3 = ({ isOpen3, onClose3 }: ModalProps) => {
    if (!isOpen3) return null

    return <AccountCreationModal onClose3={onClose3} />
}

export default Modal3
