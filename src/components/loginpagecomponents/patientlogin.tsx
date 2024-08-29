import React from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { useState } from 'react'
import PatientLoginModal from './modal/patientLogin'

function PatientLogin() {
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)
    return (
        <>
            <div className="flex flex-col w-full mt-10">
                <form>
                    <div className="mb-4">
                        <p className="mb-10 font-noto text-2xl">환자 로그인</p>
                        <label className="text-lg font-medium">
                            환자 번호
                            <input
                                type="text"
                                placeholder="환자 고유 번호를 입력하세요"
                                className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="text-lg font-medium">
                            PASSWORD
                            <input
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                            />
                        </label>
                    </div>
                    <button className="bg-[#0EA5E9] text-white rounded-md h-12 p-3 mt-6 hover:bg-[#0A74B9] transition duration-300 w-full">
                        로그인
                    </button>
                </form>
                <p
                    className="text-sm mt-10 cursor-pointer"
                    onClick={onOpenModal}
                >
                    비밀번호 찾기
                </p>
                <Modal open={open} onClose={onCloseModal} center>
                    <PatientLoginModal />
                </Modal>
            </div>
        </>
    )
}
export default PatientLogin
