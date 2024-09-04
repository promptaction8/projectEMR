import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

interface IPatientRegister {
    name: string
    dateOfBirth: string
    gender: string
    phone: string
    ssn: string
    insuranceStatus: boolean
    occupation: string
    address: string
    religion: string
    primaryPhysician: string
    bloodType: string
    marriageStatus: string
    nationality: string
    guardianName: string
    guardianRelation: string
    guardianPhone: string
    type: string
    company: string
    code: string
    mainSymptoms: string
    pastMedicalHistory: string
    allergicHistory: string
    usingDrugs: string
    familyMedicalHistory: string
    mentalHealthStatus: string
    physicalHealthStatus: string
    previousTreatmentHistory: string
    livingEnvironment: string
    roomNumber: string
}

function PatientRegister() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPatientRegister>()

    // useMutation hook
    const patientRegister = useMutation({
        mutationFn: async (data: IPatientRegister) => {
            // 여기에서 API 호출을 진행합니다.
            // 예시: axios.post('/api/patient-register', data)
        },
        onSuccess: async () => {
            // 등록 성공 시 처리할 로직
            // 예시: toast.success('환자 등록이 완료되었습니다.')
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
                            placeholder="환자 이름을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </label>
                </div>

                {/* 환자 생년월일 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        생년월일
                        <input
                            {...register('dateOfBirth', {
                                required: '생년월일을 입력하세요',
                            })}
                            type="date"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.dateOfBirth && (
                            <p>{errors.dateOfBirth.message}</p>
                        )}
                    </label>
                </div>

                {/* 환자 성별 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        성별
                        <select
                            {...register('gender', {
                                required: '성별을 선택하세요',
                            })}
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        >
                            <option value="">성별을 선택하세요</option>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                            <option value="other">기타</option>
                        </select>
                        {errors.gender && <p>{errors.gender.message}</p>}
                    </label>
                </div>

                {/* 환자 전화번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        전화번호
                        <input
                            {...register('phone', {
                                required: '전화번호를 입력하세요',
                            })}
                            type="tel"
                            placeholder="전화번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
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
                            placeholder="주민등록번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.ssn && <p>{errors.ssn.message}</p>}
                    </label>
                </div>

                {/* 환자 주소 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주소
                        <input
                            {...register('address', {
                                required: '주소를 입력하세요',
                            })}
                            type="text"
                            placeholder="주소를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.address && <p>{errors.address.message}</p>}
                    </label>
                </div>

                {/* 환자 직업 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        직업
                        <input
                            {...register('occupation', {
                                required: '환자의 직업을 입력하세요',
                            })}
                            type="text"
                            placeholder="환자의 직업을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.occupation && (
                            <p>{errors.occupation.message}</p>
                        )}
                    </label>
                </div>

                {/* 환자 혈액형 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        혈액형
                        <select
                            {...register('bloodType', {
                                required: '혈액형을 선택하세요',
                            })}
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        >
                            <option value="">혈액형을 선택하세요</option>
                            <option value="A">A형</option>
                            <option value="B">B형</option>
                            <option value="AB">AB형</option>
                            <option value="O">O형</option>
                        </select>
                        {errors.bloodType && <p>{errors.bloodType.message}</p>}
                    </label>
                </div>

                {/* 결혼 여부 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        결혼 여부
                        <select
                            {...register('marriageStatus', {
                                required: '결혼 여부를 선택하세요',
                            })}
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        >
                            <option value="">결혼 여부를 선택하세요</option>
                            <option value="married">기혼</option>
                            <option value="single">미혼</option>
                        </select>
                        {errors.marriageStatus && (
                            <p>{errors.marriageStatus.message}</p>
                        )}
                    </label>
                </div>

                {/* 환자 국적 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        국적
                        <input
                            {...register('nationality', {
                                required: '환자의 국적을 입력하세요',
                            })}
                            type="text"
                            placeholder="환자의 국적을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.nationality && (
                            <p>{errors.nationality.message}</p>
                        )}
                    </label>
                </div>

                {/* 보호자 성함 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보호자 성함
                        <input
                            {...register('guardianName', {
                                required: '보호자 성함을 입력하세요',
                            })}
                            type="text"
                            placeholder="보호자 성함을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.guardianName && (
                            <p>{errors.guardianName.message}</p>
                        )}
                    </label>
                </div>

                {/* 보호자와의 관계 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보호자와의 관계
                        <input
                            {...register('guardianRelation', {
                                required: '보호자와의 관계를 입력하세요',
                            })}
                            type="text"
                            placeholder="보호자와의 관계를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.guardianRelation && (
                            <p>{errors.guardianRelation.message}</p>
                        )}
                    </label>
                </div>

                {/* 보호자 전화번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보호자 전화번호
                        <input
                            {...register('guardianPhone', {
                                required: '보호자 전화번호를 입력하세요',
                            })}
                            type="tel"
                            placeholder="보호자 전화번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.guardianPhone && (
                            <p>{errors.guardianPhone.message}</p>
                        )}
                    </label>
                </div>

                {/* 보험 가입 여부 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보험 가입 여부
                        <select
                            {...register('insuranceStatus', {
                                required: '보험 가입 여부를 선택하세요',
                            })}
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        >
                            <option value="">
                                보험 가입 여부를 선택하세요
                            </option>
                            <option value="true">가입</option>
                            <option value="false">미가입</option>
                        </select>
                        {errors.insuranceStatus && (
                            <p>{errors.insuranceStatus.message}</p>
                        )}
                    </label>
                </div>
                {/* 보험 종류 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보험 종류
                        <input
                            {...register('type', {
                                required: '보험 종류를 입력하세요',
                            })}
                            type="text"
                            placeholder="보험 종류를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.type && <p>{errors.type.message}</p>}
                    </label>
                </div>

                {/* 보험 회사 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보험 회사
                        <input
                            {...register('company', {
                                required: '보험 회사를 입력하세요',
                            })}
                            type="text"
                            placeholder="보험 회사를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.company && <p>{errors.company.message}</p>}
                    </label>
                </div>

                {/* 보험 번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보험 번호
                        <input
                            {...register('code', {
                                required: '보험 번호를 입력하세요',
                            })}
                            type="text"
                            placeholder="보험 번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.code && <p>{errors.code.message}</p>}
                    </label>
                </div>

                {/* 주요 증상 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주요 증상
                        <input
                            {...register('mainSymptoms', {
                                required: '주요 증상을 입력하세요',
                            })}
                            type="text"
                            placeholder="주요 증상을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.mainSymptoms && (
                            <p>{errors.mainSymptoms.message}</p>
                        )}
                    </label>
                </div>

                {/* 과거 병력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        과거 병력
                        <input
                            {...register('pastMedicalHistory', {
                                required: '과거 병력을 입력하세요',
                            })}
                            type="text"
                            placeholder="과거 병력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.pastMedicalHistory && (
                            <p>{errors.pastMedicalHistory.message}</p>
                        )}
                    </label>
                </div>

                {/* 알레르기 이력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        알레르기 이력
                        <input
                            {...register('allergicHistory', {
                                required: '알레르기 이력을 입력하세요',
                            })}
                            type="text"
                            placeholder="알레르기 이력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.allergicHistory && (
                            <p>{errors.allergicHistory.message}</p>
                        )}
                    </label>
                </div>

                {/* 약물 복용 여부 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        약물 복용 여부
                        <input
                            {...register('usingDrugs', {
                                required: '약물 복용 여부를 입력하세요',
                            })}
                            type="text"
                            placeholder="약물 복용 여부를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.usingDrugs && (
                            <p>{errors.usingDrugs.message}</p>
                        )}
                    </label>
                </div>

                {/* 가족 병력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        가족 병력
                        <input
                            {...register('familyMedicalHistory', {
                                required: '가족 병력을 입력하세요',
                            })}
                            type="text"
                            placeholder="가족 병력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.familyMedicalHistory && (
                            <p>{errors.familyMedicalHistory.message}</p>
                        )}
                    </label>
                </div>

                {/* 정신 건강 상태 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        정신 건강 상태
                        <input
                            {...register('mentalHealthStatus', {
                                required: '정신 건강 상태를 입력하세요',
                            })}
                            type="text"
                            placeholder="정신 건강 상태를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.mentalHealthStatus && (
                            <p>{errors.mentalHealthStatus.message}</p>
                        )}
                    </label>
                </div>

                {/* 신체 건강 상태 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        신체 건강 상태
                        <input
                            {...register('physicalHealthStatus', {
                                required: '신체 건강 상태를 입력하세요',
                            })}
                            type="text"
                            placeholder="신체 건강 상태를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.physicalHealthStatus && (
                            <p>{errors.physicalHealthStatus.message}</p>
                        )}
                    </label>
                </div>

                {/* 이전 치료 이력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        이전 치료 이력
                        <input
                            {...register('previousTreatmentHistory', {
                                required: '이전 치료 이력을 입력하세요',
                            })}
                            type="text"
                            placeholder="이전 치료 이력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.previousTreatmentHistory && (
                            <p>{errors.previousTreatmentHistory.message}</p>
                        )}
                    </label>
                </div>

                {/* 종교 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        종교
                        <input
                            {...register('religion', {
                                required: '종교를 입력하세요',
                            })}
                            type="text"
                            placeholder="종교를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.religion && <p>{errors.religion.message}</p>}
                    </label>
                </div>

                {/* 주치의 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주치의
                        <input
                            {...register('primaryPhysician', {
                                required: '주치의를 입력하세요',
                            })}
                            type="text"
                            placeholder="주치의를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.primaryPhysician && (
                            <p>{errors.primaryPhysician.message}</p>
                        )}
                    </label>
                </div>

                {/* 생활 환경 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        생활 환경
                        <input
                            {...register('livingEnvironment', {
                                required: '생활 환경을 입력하세요',
                            })}
                            type="text"
                            placeholder="생활 환경을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.livingEnvironment && (
                            <p>{errors.livingEnvironment.message}</p>
                        )}
                    </label>
                </div>
                {/* 병실  */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        병실
                        <input
                            {...register('roomNumber', {
                                required: '병실을 입력하세요',
                            })}
                            type="text"
                            placeholder="병실을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        {errors.roomNumber && (
                            <p>{errors.roomNumber.message}</p>
                        )}
                    </label>
                </div>
                {/* 등록하기 버튼 */}
                <button
                    type="submit"
                    className="mt-6 bg-white text-blue-600 border-blue-600 border-2 rounded-lg py-2 px-4 hover:bg-[#0284C7] transition duration-300"
                >
                    등록하기
                </button>
            </form>
        </div>
    )
}

export default PatientRegister
