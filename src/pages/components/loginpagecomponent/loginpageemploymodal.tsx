import React, { useState } from 'react'

interface ModalProps {
    isOpen: boolean
    // onCloe : () 호출될 때 함수는 인자를 받지 않음. => void; 인자를 받지 않고 아무것도 반환하지 않는 함수
    onClose: () => void
}

function Modal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-10 w-120">
                <h2 className="text-lg font-semibold">
                    직원 비밀번호 분실 안내
                </h2>
                <p className="mt-15">
                    비밀번호를 잊어버렸을 경우, IT 지원팀에 문의해 주세요.
                </p>
                <p className="mt-15">IT 지원팀 내선번호 : xxxx</p>
                <button
                    className="mt-15 bg-[#0EA5E9] text-white rounded-md h-10 w-full hover:bg-[#0A74B9] transition duration-300"
                    onClick={onClose}
                >
                    닫기
                </button>
            </div>
        </div>
    )
}

export default Modal
