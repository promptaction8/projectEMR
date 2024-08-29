import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useState } from 'react'

interface ICreateEmployeeAccountData {
    id: string
    password: string
    email: string
    phone: string
    address: string
    depart: string
    position: string
    dateofjoining: string
}

function EmployeeAccount() {
    const router = useRouter()
    const [selectedRole, setSelectedRole] = useState('')
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ICreateEmployeeAccountData>()
    const mutation = useMutation({
        mutationKey: ['createEmployeeAccounts'],
        mutationFn: async (data: ICreateEmployeeAccountData) => {
            console.log('🚀 ~ mutationFn: ~ data:', data) // 여기서 로그 출력
            await axios.post('/api/employees', data)
        },
        onSuccess: () => {
            toast.success('직원 계정 생성 성공')
            router.push('/employee-login')
        },
        onError: (error: any) => {
            console.log('🚨 ~ Error:', error) // 에러 로그 출력
            const errorMessage =
                error.response?.data?.message || '직원 계정 생성 실패'
            toast.error(errorMessage)
        },
    })

    const handleRoleSelect = (role: string) => {
        setSelectedRole(role)
        setValue('position', role)
    }

    const onsubmit: SubmitHandler<ICreateEmployeeAccountData> = (data) => {
        mutation.mutate(data)
    }

    return (
        <div className="p-10 w-120 bg-white rounded-lg">
            <h2 className="text-lg font-semibold">직원 계정 생성</h2>
            <form className="">
                {/* 직원 ID */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>ID</p>
                    <input
                        {...register('id', { required: 'ID를 입력하세요' })}
                        type="text"
                        placeholder="ID를 입력하세요"
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md "
                    ></input>
                    {errors.id && (
                        <p className="text-red-800">{errors.id.message}</p>
                    )}
                </label>
                {/* 직원 비밀번호 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>비밀번호</p>
                    <input
                        {...register('password', {
                            required: '비밀번호를 입력하세요',
                        })}
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md "
                    ></input>
                    {errors.password && (
                        <p className="text-red-800">
                            {errors.password.message}
                        </p>
                    )}
                </label>
                {/* 직원 이메일 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>이메일</p>
                    <input
                        {...register('email', {
                            required: '이메일을 입력하세요',
                        })}
                        type="text"
                        placeholder="이메일을 입력하세요"
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md "
                    ></input>
                    {errors.email && (
                        <p className="text-red-800">{errors.email.message}</p>
                    )}
                </label>
                {/* 직원 전화번호 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>전화번호</p>
                    <input
                        {...register('phone', {
                            required: '전화번호를 입력하세요',
                        })}
                        type="text"
                        placeholder="전화번호를 입력하세요"
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md "
                    ></input>
                    {errors.phone && (
                        <p className="text-red-800">{errors.phone.message}</p>
                    )}
                </label>
                {/* 직원 주소 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>주소</p>
                    <input
                        {...register('address', {
                            required: '주소를 입력하세요',
                        })}
                        type="text"
                        placeholder="주소를 입력하세요"
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md "
                    ></input>
                    {errors.address && (
                        <p className="text-red-800">{errors.address.message}</p>
                    )}
                </label>
                {/* 직원 직무 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>직무</p>
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
                                className={`border rounded-md p-2 mx-1 my-1 transition duration-300 focus:outline-none
        ${
            selectedRole === role
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-black border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500'
        }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleRoleSelect(role)
                                }}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                    {errors.position && (
                        <span className="text-red-500">
                            {errors.position.message}
                        </span>
                    )}
                </label>

                {/* 직원 부서 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>부서</p>
                    <select
                        {...register('depart', {
                            required: '부서를 선택하세요',
                        })}
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md"
                    >
                        <option value="">부서를 선택해주세요</option>
                        <option value="ER">ER</option>
                        <option value="OR">OR</option>
                        <option value="ICU">ICU</option>
                        <option value="4병동">4병동</option>
                        <option value="5병동">5병동</option>
                        <option value="6병동">6병동</option>
                        <option value="8병동">8병동</option>
                        <option value="11병동">11병동</option>
                        <option value="약제과">약제과</option>
                        <option value="심사과">심사과</option>
                        <option value="행정과">행정과</option>
                        <option value="미화과">미화과</option>
                        <option value="물리치료실">물리치료실</option>
                        <option value="기타사무직">기타사무직</option>
                    </select>
                    {errors.depart && (
                        <p className="text-red-800">{errors.depart.message}</p>
                    )}
                </label>
                {/* 직원 입사일 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>입사일</p>
                    <input
                        {...register('dateofjoining', {
                            required: '입사일을 입력하세요',
                        })}
                        type="date"
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md"
                    ></input>
                    {errors.dateofjoining && (
                        <p className="text-red-800">
                            {errors.dateofjoining.message}
                        </p>
                    )}
                </label>

                {/* 코드 키 입력 */}
                {/* 코드키는 직원 계정 생성을 위한 특별한 키로, 해당 키를 가진 사람만 계정 생성이 가능합니다. */}
                {/* 코드키는 관리자에게 문의하세요. */}
                {/* 현재 개발중인 기능 */}
                <label className="block text-lg font-medium text-black my-8">
                    <p>코드키</p>
                    <input
                        type="text"
                        placeholder="코드키 입력. 발급받은 사람만 계정 생성이 가능합니다."
                        className="block w-full h-8 border-2 border-blue-600 border-solid rounded-md "
                    ></input>
                </label>

                {/* 직원 계정 생성 버튼 */}
                <button
                    type="submit"
                    onClick={handleSubmit(onsubmit)}
                    className="mt-6 bg-white text-blue-600 rounded-md border-blue-600 border-2 border-solid h-10 w-full hover:bg-[#0A74B9] hover:text-white transition duration-300"
                >
                    계정 생성
                </button>
            </form>
        </div>
    )
}

export default EmployeeAccount
