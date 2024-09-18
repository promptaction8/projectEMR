import React, { useState } from 'react'
import { LoginState } from './loginState'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import EmployeeAccount from '../loginpagecomponents/modal/employeeAccount'
import FindEmployeePassword from '../loginpagecomponents/modal/employeePassword'
import Footer from '../footer'
import { FooterCustom } from '../footerCustom'

const LoginF: React.FC = () => {
    const [isEmployeeLogin, setIsEmployeeLogin] = useState(true)

    const handleTabClick = (isEmployee: boolean) => {
        setIsEmployeeLogin(isEmployee)
    }
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    const [open2, setOpen2] = useState(false)
    const onOpenModal2 = () => setOpen2(true)
    const onCloseModal2 = () => setOpen2(false)

    const [isModalOpen3, setModalOpen3] = useState(false)
    const handleOpenModal3 = () => {
        setModalOpen3(true)
    }
    const handleCloseModal3 = () => {
        setModalOpen3(false)
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center dark:text-white ">
            <div className="p-40 rounded-lg ">
                <div className="w-120 flex flex-col justify-center items-center">
                    <span className="text-5xl font-bold text-[#0EA5E9] mb-20">
                        EMR MEDICAL
                    </span>
                    {/* 그라데이션 밑줄 추가 */}
                    <div className="left-0 right-0 bottom-0 mb-40">
                        <div className="h-1 w-140  bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                    </div>
                    <div className="p-20 ">
                        <div className="flex flex-row justify-between w-full">
                            <button
                                className={`flex flex-1 justify-center items-center relative  border border-gray-400 bg-gray-700  p-8 rounded-t-md
                            ${
                                isEmployeeLogin
                                    ? 'text-md font-extrabold border-b-0'
                                    : 'text-md font-normal'
                            }
                            text-white`}
                                onClick={() => handleTabClick(true)}
                            >
                                직원 로그인
                            </button>
                            <button
                                className={`flex flex-1 relative justify-center items-center  border-gray-400 border bg-gray-700 p-8 rounded-t-md
                            ${
                                !isEmployeeLogin
                                    ? 'text-md font-extrabold border-b-0'
                                    : 'text-md font-normal'
                            }
                            text-whites`}
                                onClick={() => handleTabClick(false)}
                            >
                                환자 로그인
                            </button>
                        </div>
                        <LoginState isEmployeeLogin={isEmployeeLogin} />
                    </div>
                    <div>
                        <div className="flex flex-row justify-center items-center gap-16 m-4 ">
                            <p
                                className="text-sm cursor-pointer text-gray-900 dark:text-white hover:text-[#0A74B9] transition duration-300"
                                onClick={handleOpenModal3}
                            >
                                비밀번호 찾기
                            </p>
                            <Modal
                                open={isModalOpen3}
                                onClose={handleCloseModal3}
                                center
                            >
                                <FindEmployeePassword />
                            </Modal>
                            {/* 세로 구분선 */}
                            <div className="border-r-2 border-solid border-black dark:border-white h-4 mt-10"></div>
                            <p
                                className="text-sm cursor-pointer text-gray-900 dark:text-white hover:text-[#0A74B9] transition duration-300"
                                onClick={onOpenModal2}
                            >
                                직원 계정 생성
                            </p>
                            <Modal
                                open={open2}
                                onClose={onCloseModal2}
                                center
                                closeOnOverlayClick={false}
                            >
                                <EmployeeAccount />
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <FooterCustom />
        </div>
    )
}

export default LoginF
