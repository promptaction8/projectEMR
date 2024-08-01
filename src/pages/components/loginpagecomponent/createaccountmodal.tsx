import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

interface ModalProps {
    isOpen3: boolean
    onClose3: () => void // 인자를 받지 않고 아무것도 반환하지 않는 함수
}

interface AccountCreationModalProps {
    onClose3: () => void // 여기에 onClose3의 타입을 명시
}
interface IFormField {
    Id: string // 사용자 ID
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

    const handleRoleSelect = (role: string) => {
        setSelectedRole(role)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-10 w-120">
                <h2 className="text-lg font-semibold">
                    CREATE EMPLOYEE ACCOUNT
                </h2>

                <div className="mb-4">
                    <label className="text-lg font-medium">ID</label>
                    <input
                        type="text"
                        placeholder="아이디를 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium">PASSWORD</label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium">EMAIL</label>
                    <input
                        type="email"
                        placeholder="이메일을 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium">PHONE-NUMBER</label>
                    <input
                        type="tel"
                        placeholder="휴대폰 번호를 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium">ADDRESS</label>
                    <input
                        type="text"
                        placeholder="주소를 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium">DEPARTMENT</label>
                    <input
                        type="text"
                        placeholder="정확한 부서명을 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                    />
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
                                onClick={() => handleRoleSelect(role)}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium">
                        DATE OF JOINING
                    </label>
                    <input
                        type="date"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                    />
                </div>

                <button
                    className="mt-6 bg-[#0EA5E9] text-white rounded-md h-10 w-full hover:bg-[#0A74B9] transition duration-300"
                    onClick={onClose3}
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
            </div>
        </div>
    )
}

const Modal3 = ({ isOpen3, onClose3 }: ModalProps) => {
    if (!isOpen3) return null

    return <AccountCreationModal onClose3={onClose3} />
}

export default Modal3
