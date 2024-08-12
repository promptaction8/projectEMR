import React from 'react'
import { useForm } from 'react-hook-form'

interface PatientRegisterModalProps {
    isOpen: boolean
    onClose: () => void
}

function PatientRegisterModal({ isOpen, onClose }: PatientRegisterModalProps) {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-10 w-120">
                <h2 className="text-lg font-semibold">환자 등록</h2>
                <form>
                    <div className="mb-4">
                        <label className="text-lg font-medium">환자 이름</label>
                        <input
                            type="text"
                            placeholder="환자 이름을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">생년월일</label>
                        <input
                            type="date"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">성별</label>
                        <select className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300">
                            <option value="">성별을 선택하세요</option>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                            <option value="other">기타</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">전화번호</label>
                        <input
                            type="tel"
                            placeholder="전화번호를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">주소</label>
                        <input
                            type="text"
                            placeholder="주소를 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-medium">주요 증상</label>
                        <textarea
                            placeholder="환자의 주요 증상을 입력하세요"
                            className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-6 bg-[#0EA5E9] text-white rounded-md h-10 w-full hover:bg-[#0A74B9] transition duration-300"
                    >
                        등록
                    </button>

                    <button
                        className="mt-2 text-sm text-gray-600 cursor-pointer"
                        onClick={onClose}
                    >
                        닫기
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PatientRegisterModal
