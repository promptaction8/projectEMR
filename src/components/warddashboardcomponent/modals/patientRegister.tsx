import React from 'react'
import { useForm } from 'react-hook-form'
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
    emergencyContactName: string
    emergencyContactPhone: string
    religion: string
    primaryPhysician: string
    bloodType: string
    marriageStatus: string
    patientCountry: string
    patientGuardianName: string
    patientGuardianRelationship: string
    patientGuardianPhone: string
    insuranceType: string
    insuranceCompany: string
    insuranceNumber: string
    mainSymptoms: string
    pastMedicalHistory: string
    allergicHistory: string
    usingDrugs: string
    familyMedicalHistory: string
    mentalHealthStatus: string
    physicalHealthStatus: string
    previousTreatmentHistory: string
    livingEnvironment: string
}

function PatientRegister() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <div className="bg-white rounded-lg p-10 w-160">
            <h2 className="text-lg font-semibold">환자 등록</h2>
            <form>
                {/* 환자 이름 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        환자 이름
                        <input
                            type="text"
                            placeholder="환자 이름을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 생년월일 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        생년월일
                        <input
                            type="date"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 성별 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        성별
                        <select className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300">
                            <option value="">성별을 선택하세요</option>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                            <option value="other">기타</option>
                        </select>
                    </label>
                </div>
                {/* 환자 전화번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        전화번호
                        <input
                            type="tel"
                            placeholder="전화번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 주민등록번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주민등록번호
                        <input
                            type="text"
                            placeholder="주민등록번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 환자 주소 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주소
                        <input
                            type="text"
                            placeholder="주소를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 환자 직업 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        직업
                        <input
                            type="text"
                            placeholder="환자의 직업을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 혈액형 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        혈액형
                        <select className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300">
                            <option value="">혈액형을 선택하세요</option>
                            <option value="A">A형</option>
                            <option value="B">B형</option>
                            <option value="AB">AB형</option>
                            <option value="O">O형</option>
                        </select>
                    </label>
                </div>
                {/* 결혼 여부 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        결혼 여부
                        <select className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300">
                            <option value="">결혼 여부를 선택하세요</option>
                            <option value="married">기혼</option>
                            <option value="single">미혼</option>
                        </select>
                    </label>
                </div>
                {/* 환자 국적 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        국적
                        <input
                            type="text"
                            placeholder="환자의 국적을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 보호자 성함, 관계 및 연락처 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보호자 성함, 관계 및 연락처
                        <input
                            type="text"
                            placeholder="보호자 성함을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        <input
                            type="text"
                            placeholder="보호자와의 관계를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        <input
                            type="tel"
                            placeholder="보호자 연락처를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 건강보험 가입 여부 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        건강보험 가입 여부
                        <select className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300">
                            <option value="">
                                건강보험 가입 여부를 선택하세요
                            </option>
                            <option value="yes">가입</option>
                            <option value="no">미가입</option>
                        </select>
                    </label>
                </div>
                {/* 보험 종류 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보험 종류
                        <select className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300">
                            <option value="">보험 종류를 선택하세요</option>
                            <option value="health">건강보험</option>
                            <option value="life">생명보험</option>
                            <option value="car">자동차보험</option>
                        </select>
                    </label>
                </div>
                {/* 보험사 명 및 보험 번호 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        보험 번호
                        <input
                            type="text"
                            placeholder="보험사를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        <input
                            type="text"
                            placeholder="보험 번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 비상 연락처 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        비상 연락처
                        <input
                            type="tel"
                            placeholder="관계를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                        <input
                            type="tel"
                            placeholder="비상 연락처를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 종교 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        종교
                        <input
                            type="text"
                            placeholder="환자의 종교를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 환자 주치의 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주치의
                        <input
                            type="text"
                            placeholder="환자의 주치의를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 주요 증상 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        주요 증상
                        <textarea
                            placeholder="환자의 주요 증상 및 진단명을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 과거 병력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        과거 병력
                        <textarea
                            placeholder="환자의 과거 병력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 알러지 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        알러지
                        <textarea
                            placeholder="환자의 알러지 정보를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 현재 복용중인 약물 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        복용중인 약물
                        <textarea
                            placeholder="환자가 현재 복용중인 약물을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 가족력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        가족력
                        <textarea
                            placeholder="환자의 가족력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 환자 가족 구성 및 생활 환경 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        가족 구성 및 생활 환경
                        <textarea
                            placeholder="환자의 가족 구성 및 생활 환경을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 환자 정신 건강 상태 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        정신 건강 상태
                        <textarea
                            placeholder="환자의 정신 건강 상태를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>
                {/* 환자 신체 건강 상태 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        신체 건강 상태
                        <textarea
                            placeholder="환자의 신체 건강 상태를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                {/* 환자 이전 치료 경력/ 다른 병원에서의 치료 경력 */}
                <div className="mb-4">
                    <label className="text-lg font-medium">
                        이전 치료 경력
                        <textarea
                            placeholder="환자의 이전 치료 경력을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    className="mt-6 bg-[#0EA5E9] text-white rounded-md h-10 w-full hover:bg-[#0A74B9] transition duration-300"
                >
                    등록
                </button>
            </form>
        </div>
    )
}

export default PatientRegister
