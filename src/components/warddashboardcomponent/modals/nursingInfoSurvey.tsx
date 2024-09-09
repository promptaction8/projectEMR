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
    sex: string
    age: string
    address: string
    occupation: string
    bloodType: string
    marriageStatus: boolean
    nationality: string
    guardianName: string
    guardianRelation: string
    guardianPhone: string
    insuranceStatus: boolean
    insuranceType: string
    insuranceCompany: string
    insuranceCode: string
    religion: string
    primaryDoctor: string
    primaryNurse: string
    vitalSign: string
    painLevel: string
    smokingStatus: string
    drinkingStatus: string
    allergicHistory: string
    roomNumber: string
    admissionDate: Date
    dischargeDate: Date
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
    const { refetch } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const response = await axios.get('/api/patients')
            return response.data
        },
    })
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
            refetch()
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
            const response = await axios.post('/api/temp', data)
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

    return (
        <div className="bg-white rounded-lg p-10 w-160">
            {/* 환자 조회하기 */}
            <h1 className="text-lg font-semibold">간호정보조사지</h1>
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
                        <div className="flex items-center">
                            <label className="text-md font-medium w-52">
                                이름:
                            </label>
                            <input
                                type="text"
                                value={name ? name : ''}
                                readOnly
                                className="ml-2 border rounded p-2 w-full bg-gray-100"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-md font-medium w-52">
                                차트 번호:
                            </label>
                            <input
                                type="text"
                                value={chartNumber ? chartNumber : ''}
                                readOnly
                                className="ml-2 border rounded p-2 w-full bg-gray-100"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-md font-medium w-52">
                                주민번호:
                            </label>
                            <input
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
                        <form onSubmit={handleSubmit2(nursingSurveySubmit)}>
                            {/* 성별  */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    성별
                                </label>
                                <input
                                    {...register2('sex', { required: true })}
                                    type="text"
                                    placeholder="성별을 입력해주세요"
                                    readOnly
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
                                    type="text"
                                    placeholder="나이를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 주소 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    주소
                                </label>
                                <input
                                    type="text"
                                    placeholder="주소를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 직업 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    직업
                                </label>
                                <input
                                    type="text"
                                    placeholder="직업을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 혈액형 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    혈액형
                                </label>
                                <input
                                    type="text"
                                    placeholder="혈액형을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 결혼 상태*/}
                            {/* 기혼, 미혼 선택 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    결혼 상태
                                </label>
                                <select className="ml-2 border rounded p-2 w-full bg-gray-100">
                                    <option value="">선택</option>
                                    <option value="기혼">기혼</option>
                                    <option value="미혼">미혼</option>
                                </select>
                            </div>
                            {/* 보호자 성함*/}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보호자 성함
                                </label>
                                <input
                                    type="text"
                                    placeholder="보호자 성함을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 보호자 관계 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보호자 관계
                                </label>
                                <input
                                    type="text"
                                    placeholder="보호자 관계를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 보호자 전화번호 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보호자 전화번호
                                </label>
                                <input
                                    type="text"
                                    placeholder="보호자 전화번호를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 보험 상태 */}
                            {/* 가입, 미가입 선택 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험 상태
                                </label>
                                <select className="ml-2 border rounded p-2 w-full bg-gray-100">
                                    <option value="">선택</option>
                                    <option value="가입">가입</option>
                                    <option value="미가입">미가입</option>
                                </select>
                            </div>
                            {/* 보험 유형 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험 유형
                                </label>
                                <input
                                    type="text"
                                    placeholder="보험 유형을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 보험사 이름 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험사 이름
                                </label>
                                <input
                                    type="text"
                                    placeholder="보험사 이름을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 보험 번호 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    보험 번호
                                </label>
                                <input
                                    type="text"
                                    placeholder="보험 번호를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 종교 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    종교
                                </label>
                                <input
                                    type="text"
                                    placeholder="종교를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 주치의 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    주치의
                                </label>
                                <input
                                    type="text"
                                    placeholder="주치의를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 담당 간호사 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    담당 간호사
                                </label>
                                <input
                                    type="text"
                                    placeholder="담당 간호사를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>

                            {/* 현재 vital sign */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    현재 vital sign
                                </label>
                                <input
                                    type="text"
                                    placeholder="현재 vital sign을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 현재 pain level */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    현재 pain level
                                </label>
                                <input
                                    type="text"
                                    placeholder="현재 pain level을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 흡연 유무와 주기 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    흡연 유무와 주기
                                </label>
                                <input
                                    type="text"
                                    placeholder="흡연 유무와 주기를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 음주 유무와 주기 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    음주 유무와 주기
                                </label>
                                <input
                                    type="text"
                                    placeholder="음주 유무와 주기를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 알레르기 유무*/}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    알레르기 유무
                                </label>
                                <input
                                    type="text"
                                    placeholder="알레르기 유무를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 병실 배정 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    병실 배정
                                </label>
                                <input
                                    type="text"
                                    placeholder="병실 배정을 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
                            </div>
                            {/* 입원 일자 */}
                            <div className="flex items-center mb-4">
                                <label className="text-md font-medium w-52">
                                    입원 일자
                                </label>
                                <input
                                    type="date"
                                    placeholder="입원 일자를 입력해주세요"
                                    className="ml-2 border rounded p-2 w-full bg-gray-100"
                                />
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
                            </div>
                            {/* 제출 */}
                            <button
                                disabled={nursingSurvey.isPending}
                                type="submit"
                                className="bg-white text-blue-600 border-blue-600 border-solid border-2 rounded-md p-3 mt-2 w-full focus:outline-none transition duration-300"
                            >
                                {nursingSurvey.isPending ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                                    </div>
                                ) : (
                                    '제출하기'
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
