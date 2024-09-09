import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface IPatientRegister {
    name: string
    ssn: string
}

function PatientRegister() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPatientRegister>()
    //router
    const router = useRouter()
    // useMutation hook
    const patientRegister = useMutation({
        mutationFn: async (data: IPatientRegister) => {
            const response = await axios.post('/api/patient-register', data)
        },
        onSuccess: async () => {
            toast.success('환자 등록이 완료되었습니다.')
        },
        onError: async (error: any) => {
            toast.error(error.response.data.message)
        },
    })

    const onSubmit: SubmitHandler<IPatientRegister> = async (data) => {
        await patientRegister.mutate(data)
    }

    return (
        <div className="bg-white rounded-lg p-10 w-160">
            <h2 className="text-lg font-semibold">환자 등록</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* 환자 이름 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        환자 이름
                        <input
                            {...register('name', {
                                required: '환자 이름을 입력하세요',
                            })}
                            type="text"
                            placeholder="홍길동"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </label>
                </div>

                {/* 주민등록번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주민등록번호
                        <input
                            {...register('ssn', {
                                required: '주민등록번호를 입력하세요',
                            })}
                            type="text"
                            placeholder="xxxxxx-xxxxxxx"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.ssn && <p>{errors.ssn.message}</p>}
                    </label>
                </div>

                {/* 등록하기 버튼 */}
                <button
                    //등록
                    disabled={patientRegister.isPending}
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    className="mt-6 bg-white text-blue-600 border-blue-600 border-2 rounded-lg py-2 px-4 hover:bg-[#0284C7] transition duration-300"
                >
                    {patientRegister.isPending ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                        </div>
                    ) : (
                        '환자 등록'
                    )}
                </button>
            </form>
        </div>
    )
}

export default PatientRegister
