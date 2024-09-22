import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

// 간호정보기록지 조회 모달

interface IGetPatient {
    name: string
    chartNumber: string
}

// useMutation이 아니라 useQuery로 조회(get) 해야함.
export function NursingInfoSurveys() {
    const {
        register: register1,
        handleSubmit: handleSubmit1,
        formState: { errors: errors1 },
    } = useForm<IGetPatient>()
    const patientInfo = useMutation({
        mutationFn: async (data: IGetPatient) => {
            const response = await axios.post('/api/nursing-surveys', data)
            return response.data
        },
        onSuccess: () => {
            toast.success('환자 정보 조회가 완료되었습니다.')
            // 조회 한번 성공하면 다시 조회하지 않도록
        },
        onError: async (error: any) => {
            toast.error(error.response.data.message)
        },
    })
    //mutate
    const onSubmit: SubmitHandler<IGetPatient> = async (data) => {
        await patientInfo.mutate(data)
    }
    // useMutation으로 받은 데이터 추출
    const name = patientInfo.data?.patientInfo?.name
    const chartNumber = patientInfo.data?.patientInfo?.chartNumber
    const ssn = patientInfo.data?.patientInfo?.ssn
    const nursingSurveys = patientInfo.data?.nursingInfo
    console.log('🚀 ~ NursingInfoSurveys ~ nursingSurveys:', nursingSurveys)
    // 배열 안에 배열, 그 안에 오브젝트
    const nursingSurveysLength = nursingSurveys?.length

    // react-responsive-modal 사용
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    return (
        <div className="w-180 dark:text-black">
            <h1 className="text-lg font-semibold">간호정보조사지 조회</h1>
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
            {/* 구분선 */}
            <div className="border-t-4 mt-6 border-gray-300 "></div>
            {/* 조회 결과 보여주기 */}
            {name && chartNumber && ssn && (
                <div className="mt-4">
                    <h1 className="text-lg font-semibold">환자 정보</h1>
                    <p className="text-sm text-black mt-2">
                        조회된 환자 정보입니다.
                    </p>
                    <div className="mt-4">
                        <p className="text-md font-medium">환자 이름: {name}</p>
                        <p className="text-md font-medium">
                            환자 차트 번호: {chartNumber}
                        </p>
                        <p className="text-md font-medium">
                            환자 주민등록번호: {ssn}
                        </p>
                    </div>
                </div>
            )}

            {/* 조회 결과가 없을 때 */}
            {patientInfo.isError ||
                (null && (
                    <div className="mt-4">
                        <p className="text-md font-medium text-red-500">
                            조회된 환자 정보가 없습니다.
                        </p>
                    </div>
                ))}
            {/* 구분선 */}
            <div className="border-t-4 mt-6 border-gray-300 "></div>
            {/* 간호정보조사지 조회된 결과 */}
            <div className="mt-6">
                <h1 className="text-lg font-semibold">
                    간호정보조사지 조회 결과
                </h1>
                <p className="text-sm text-black mt-2">
                    조회된 간호정보조사지 결과입니다 : {nursingSurveysLength} 건
                </p>
                {/* 조회 된 간호정보조사지를 작성 날짜, 담당 의사, 담당간호사 정보 보여주기  */}
                {/* 각 버튼마다 클릭 시 해당 버튼의 모달 open. 모달 안에는 해당 간호정보기록지의 모든 정보 포함 */}

                {nursingSurveys &&
                    nursingSurveys.map((nursingSurvey: any) => (
                        <button
                            onClick={() => {
                                onOpenModal()
                            }}
                            key={nursingSurvey.id}
                            className="mt-4 mb-10 flex border-2 border-black border-solid p-4 rounded-md"
                        >
                            <p className="text-md font-medium mr-12">
                                작성 날짜:{' '}
                                {nursingSurvey.createdAt.slice(0, 10)}
                            </p>
                            <p className="text-md font-medium mr-12">
                                전담의: {nursingSurvey.primaryDoctor}
                            </p>
                            <p className="text-md font-medium">
                                전담간호사: {nursingSurvey.primaryNurse}
                            </p>
                            {/* 구분선 */}
                            <div className="border-t-4 mt-6 border-gray-300">
                                {' '}
                            </div>
                        </button>
                    ))}
                {/* 조회된 간호정보조사지가 없을 때 */}
                {nursingSurveysLength === 0 ||
                    (null && (
                        <div className="mt-4">
                            <p className="text-md font-medium text-red-500">
                                조회된 간호정보조사지가 없습니다.
                            </p>
                        </div>
                    ))}
            </div>
            {/* 간호정보조사지 모달 */}
            <Modal open={open} onClose={onCloseModal} center>
                <div className="bg-white p-10 rounded-lg">
                    <h1 className="text-lg font-semibold">
                        간호정보조사지 상세보기
                    </h1>
                    <div className="mt-4">
                        <p className="text-md font-medium">작성 날짜:</p>
                        <p className="text-md font-medium">전담의:</p>
                        <p className="text-md font-medium">전담간호사:</p>
                        <p className="text-md font-medium">환자 이름:</p>
                        <p className="text-md font-medium">환자 차트 번호:</p>
                        <p className="text-md font-medium">
                            환자 주민등록번호:
                        </p>
                        <p className="text-md font-medium">간호정보조사지:</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}


