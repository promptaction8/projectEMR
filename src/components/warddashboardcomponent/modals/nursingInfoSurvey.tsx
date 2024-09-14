import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

interface IGetPatient {
    name: string
    chartNumber: string
}
interface INursingSurvey {
    name: string
    chartNumber: string
    ssn: string
    sex: string
    age: string
    address: string
    occupation: string
    bloodType: string
    marriageStatus: string
    nationality: string
    guardianName: string
    guardianRelation: string
    guardianPhone: string
    insuranceStatus: string
    insuranceType: string
    insuranceCompany: string
    insuranceCode: string
    religion: string
    primaryDoctor: string
    primaryNurse: string
    vitalSigns: string
    heightAndWeight: string
    familyHistory: string
    painLevel: string
    smokingStatus: string
    drinkingStatus: string
    allergicHistory: string
    roomNumber: string
    admissionDate: string
    dischargeDate: string
}

function NursingInfoSurvey() {
    const {
        register: register1,
        handleSubmit: handleSubmit1,
        formState: { errors: errors1 },
    } = useForm<IGetPatient>()
    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
    } = useForm<INursingSurvey>()
    const router = useRouter()
    // refetch로 데이터 다시 불러오기

    // 환자 정보 조회
    //useMutation
    const patientInfo = useMutation({
        mutationFn: async (data: IGetPatient) => {
            const response = await axios.post('/api/patients', data)
            console.log('🚀 ~ mutationFn: ~ response:', response)
            return response.data
        },
        onSuccess: () => {
            toast.success('환자 정보 조회가 완료되었습니다.')
        },
        onError: async (error: any) => {
            toast.error(error.response.data.message)
        },
    })
    //mutate
    const onSubmit: SubmitHandler<IGetPatient> = async (data) => {
        await patientInfo.mutate(data)
    }

    // useMutation return 받은거 가져다 쓰기
    const name = patientInfo.data?.name
    const chartNumber = patientInfo.data?.chartNumber
    const ssn = patientInfo.data?.ssn

    // 간호정보조사지 작성
    const nursingSurvey = useMutation({
        mutationFn: async (data: INursingSurvey) => {
            const response = await axios.post('/api/nursing-survey', data)
            return response.data
        },
        onSuccess: async () => {
            toast.success('간호정보조사지 작성이 완료되었습니다.')
        },
        onError: async (error: any) => {
            toast.error(error.response.data.message)
        },
    })
    const nursingSurveySubmit: SubmitHandler<INursingSurvey> = async (data) => {
        await nursingSurvey.mutate(data)
    }
    // nursingSurvey return 받은거 가져다 쓰기
    const sex = nursingSurvey.data?.sex
    return (
        <div className="bg-white rounded-lg p-10 w-160 dark:text-black">
            {/* 환자 조회하기 */}
            <h1 className="text-lg font-semibold">간호정보조사지 등록</h1>
            <p className="text-sm text-black mt-2">
                환자 이름과 차트 번호를 입력하여 환자 조회 후 작성해주세요.
            </p>

            <form onSubmit={handleSubmit1(onSubmit)}>
                {/* 환자 이름 */}
                <div className="mb-4">
                    <label className="text-md font-medium">
                        환자 이름
                        <input
                            type="text"
                            placeholder="홍길동"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                            {...register1('name', { required: true })}
                        />
                        {errors1.name && (
                            <span className="text-red-500">
                                환자 이름을 입력해주세요
                            </span>
                        )}
                    </label>
                </div>

                {/* 환자 차트 번호 */}
                <div className="mb-4">
                    <label className="text-md font-medium">
                        환자 차트 번호
                        <input
                            type="text"
                            placeholder="xxxxxxxx"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                            {...register1('chartNumber', { required: true })}
                        />
                        {errors1.chartNumber && (
                            <span className="text-red-500">
                                환자 차트 번호를 입력해주세요
                            </span>
                        )}
                    </label>
                </div>

                <button
                    disabled={patientInfo.isPending}
                    type="submit"
                    className="bg-white text-blue-600 border-blue-600 border-solid border-2 rounded-md p-3 mt-2 w-full focus:outline-none transition duration-300"
                >
                    {patientInfo.isPending ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                        </div>
                    ) : (
                        '조회하기'
                    )}
                </button>
            </form>

            {/* 환자 조회 결과 보여주기 */}
            <div>
                <h2 className="text-lg font-semibold mt-4">환자 정보</h2>
                {patientInfo.isPending ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div className="mt-2 space-y-4">
                        <form onSubmit={handleSubmit2(nursingSurveySubmit)}>
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    이름:
                                </label>
                                <input
                                    {...register2('name', { required: true })}
                                    type="text"
                                    value={name ? name : ''}
                                    readOnly
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    차트 번호:
                                </label>
                                <input
                                    {...register2('chartNumber', {
                                        required: true,
                                    })}
                                    type="text"
                                    value={chartNumber ? chartNumber : ''}
                                    readOnly
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    주민번호:
                                </label>
                                <input
                                    {...register2('ssn', { required: true })}
                                    type="text"
                                    value={ssn ? ssn : ''}
                                    readOnly
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 구분선 */}
                            <div className="border-t border-gray-300 mt-4"></div>
                            {/* 간호정보조사지 작성 */}
                            <h2 className="text-lg font-semibold mt-4">
                                간호정보조사지 작성
                            </h2>
                            <p className="text-sm text-black mt-2">
                                환자의 상태에 대한 간호정보조사를 작성해주세요.
                            </p>

                            {/* 성별  */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    성별
                                </label>
                                <input
                                    {...register2('sex', { required: true })}
                                    type="text"
                                    placeholder="성별을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.sex && (
                                    <span className="text-red-500">
                                        성별을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 나이 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    나이
                                </label>
                                <input
                                    {...register2('age', { required: true })}
                                    type="text"
                                    placeholder="나이를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.age && (
                                    <span className="text-red-500">
                                        나이를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 주소 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    주소
                                </label>
                                <input
                                    {...register2('address', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="주소를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.address && (
                                    <span className="text-red-500">
                                        주소를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 직업 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    직업
                                </label>
                                <input
                                    {...register2('occupation', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="직업을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.occupation && (
                                    <span className="text-red-500">
                                        직업을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 혈액형 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    혈액형
                                </label>
                                <input
                                    {...register2('bloodType', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="혈액형을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.bloodType && (
                                    <span className="text-red-500">
                                        혈액형을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 결혼 상태*/}
                            {/* 기혼, 미혼 선택 */}
                            {/* boolean */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    결혼 상태
                                </label>
                                <select
                                    {...register2('marriageStatus', {
                                        required: true,
                                    })}
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                >
                                    <option value="">선택</option>
                                    <option value="true">기혼</option>
                                    <option value="false">미혼</option>
                                </select>
                                {errors2.marriageStatus && (
                                    <span className="text-red-500">
                                        결혼 상태를 선택해주세요
                                    </span>
                                )}
                            </div>
                            {/* 국적 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    국적
                                </label>
                                <input
                                    {...register2('nationality', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="국적을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 보호자 성함*/}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보호자 성함
                                </label>
                                <input
                                    {...register2('guardianName', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="보호자 성함을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.guardianName && (
                                    <span className="text-red-500">
                                        보호자 성함을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 보호자 관계 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보호자 관계
                                </label>
                                <input
                                    {...register2('guardianRelation', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="보호자 관계를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.guardianRelation && (
                                    <span className="text-red-500">
                                        보호자 관계를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 보호자 전화번호 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보호자 전화번호
                                </label>
                                <input
                                    {...register2('guardianPhone', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="보호자 전화번호를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.guardianPhone && (
                                    <span className="text-red-500">
                                        보호자 전화번호를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 보험 상태 */}
                            {/* 가입, 미가입 선택 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험 상태
                                </label>
                                <select
                                    {...register2('insuranceStatus', {
                                        required: true,
                                    })}
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                >
                                    <option value="">선택</option>
                                    <option value="true">가입</option>
                                    <option value="false">미가입</option>
                                </select>
                                {errors2.insuranceStatus && (
                                    <span className="text-red-500">
                                        보험 상태를 선택해주세요
                                    </span>
                                )}
                            </div>
                            {/* 보험 유형 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험 유형
                                </label>
                                <input
                                    {...register2('insuranceType', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="보험 유형을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.insuranceType && (
                                    <span className="text-red-500">
                                        보험 유형을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 보험사 이름 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험사 이름
                                </label>
                                <input
                                    {...register2('insuranceCompany', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="보험사 이름을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.insuranceCompany && (
                                    <span className="text-red-500">
                                        보험사 이름을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 보험 번호 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험 번호
                                </label>
                                <input
                                    {...register2('insuranceCode', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="보험 번호를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.insuranceCode && (
                                    <span className="text-red-500">
                                        보험 번호를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 종교 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    종교
                                </label>
                                <input
                                    {...register2('religion', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="종교를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.religion && (
                                    <span className="text-red-500">
                                        종교를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 주치의 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    주치의
                                </label>
                                <input
                                    {...register2('primaryDoctor', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="주치의를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.primaryDoctor && (
                                    <span className="text-red-500">
                                        주치의를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 담당 간호사 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    담당 간호사
                                </label>
                                <input
                                    {...register2('primaryNurse', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="담당 간호사를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.primaryNurse && (
                                    <span className="text-red-500">
                                        담당 간호사를 입력해주세요
                                    </span>
                                )}
                            </div>

                            {/* 현재 vital sign */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    현재 vital sign
                                </label>
                                <input
                                    {...register2('vitalSigns', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="현재 vital sign을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.vitalSigns && (
                                    <span className="text-red-500">
                                        현재 vital sign을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 현재 height and weight */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    현재 height and weight
                                </label>
                                <input
                                    {...register2('heightAndWeight', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="현재 height and weight를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.heightAndWeight && (
                                    <span className="text-red-500">
                                        현재 height and weight를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 가족력 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    가족력
                                </label>
                                <input
                                    {...register2('familyHistory', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="가족력을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.familyHistory && (
                                    <span className="text-red-500">
                                        가족력을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 현재 pain level */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    현재 pain level
                                </label>
                                <input
                                    {...register2('painLevel', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="현재 pain level을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.painLevel && (
                                    <span className="text-red-500">
                                        현재 pain level을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 흡연 유무와 주기 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    흡연 유무와 주기
                                </label>
                                <input
                                    {...register2('smokingStatus', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="흡연 유무와 주기를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.smokingStatus && (
                                    <span className="text-red-500">
                                        흡연 유무와 주기를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 음주 유무와 주기 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    음주 유무와 주기
                                </label>
                                <input
                                    {...register2('drinkingStatus', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="음주 유무와 주기를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.drinkingStatus && (
                                    <span className="text-red-500">
                                        음주 유무와 주기를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 알레르기 유무*/}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    알레르기 유무
                                </label>
                                <input
                                    {...register2('allergicHistory', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="알레르기 유무를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.allergicHistory && (
                                    <span className="text-red-500">
                                        알레르기 유무를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 병실 배정 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    병실 배정
                                </label>
                                <input
                                    {...register2('roomNumber', {
                                        required: true,
                                    })}
                                    type="text"
                                    placeholder="병실 배정을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.roomNumber && (
                                    <span className="text-red-500">
                                        병실 배정을 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 입원 일자 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    입원 일자
                                </label>
                                <input
                                    {...register2('admissionDate', {
                                        required: true,
                                    })}
                                    type="date"
                                    placeholder="입원 일자를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.admissionDate && (
                                    <span className="text-red-500">
                                        입원 일자를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 퇴원 일자 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    퇴원 일자
                                </label>
                                <input
                                    type="date"
                                    placeholder="퇴원 일자를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                                {errors2.dischargeDate && (
                                    <span className="text-red-500">
                                        퇴원 일자를 입력해주세요
                                    </span>
                                )}
                            </div>
                            {/* 제출 */}
                            <button
                                onClick={handleSubmit2(nursingSurveySubmit)}
                                disabled={nursingSurvey.isPending}
                                type="submit"
                                className="bg-white mb-6 text-blue-600 border-blue-600 border-solid border-2 rounded-md p-3 mt-2 w-full focus:outline-none transition duration-300"
                            >
                                {nursingSurvey.isPending ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                                    </div>
                                ) : (
                                    '등록하기'
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NursingInfoSurvey
