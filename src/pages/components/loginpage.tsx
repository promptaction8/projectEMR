import React from 'react'
import { useState } from 'react'
import Modal from './loginpagecomponent/loginpageemploymodal'
import Modal2 from './loginpagecomponent/loginpagepatiendmodal'
import DropdownMenu from './loginpagecomponent/dropdown'

function LoginPage() {
    const [isModalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    const handleCloseModal = () => {
        setModalOpen(false)
    }
    const [isModalOpen2, setModalOpen2] = useState(false)
    const handleOpenModal2 = () => {
        setModalOpen2(true)
    }
    const handleCloseModal2 = () => {
        setModalOpen2(false)
    }

    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 상단 바 */}
                <div className="flex w-full h-16 bg-[#0EA5E9] shadow-md ">
                    <div className="flex flex-row items-center justify-center h-full w-40 text-3xl text-white font-bold">
                        <div>EMR</div>
                    </div>
                    <div className="flex ml-auto  items-center justify-center text-xl w-40 h-full text-white">
                        <DropdownMenu />
                    </div>
                </div>
                {/* 메인 컴포넌트 */}
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col border-4 rounded-t-xl border-[#0EA5E9] h-200 w-120 shadow-7xl bg-white">
                        <div className="flex h-20 w-full bg-[#0EA5E9] items-center justify-center rounded-t-lg">
                            <div className="text-4xl text-white font-semibold">
                                LOGIN
                            </div>
                        </div>
                        <div className="flex flex-grow flex-col p-6 items-center justify-center ">
                            <div className="flex flex-col w-full  mt-30">
                                <div className="mb-4">
                                    <p className="mb-10 font-noto text-2xl">
                                        직원 로그인
                                    </p>
                                    <label className="text-lg font-medium">
                                        ID
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="아이디를 입력하세요"
                                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-lg font-medium">
                                        PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                    />
                                </div>
                                <button className="bg-[#0EA5E9] text-white rounded-md h-12 p-3 mt-6 hover:bg-[#0A74B9] transition duration-300 w-full">
                                    로그인
                                </button>
                                <p
                                    className="text-sm mt-10 cursor-pointer"
                                    onClick={handleOpenModal}
                                >
                                    비밀번호 찾기
                                </p>
                            </div>
                            {/* flex-grow를 사용하여 공간을 분리 */}
                            <div className="flex-grow"></div>
                            <div className="flex flex-col w-full mb-20">
                                <div className="mb-4">
                                    <p className="mb-10 font-noto text-2xl">
                                        환자 로그인
                                    </p>
                                    <label className="text-lg font-medium">
                                        환자 번호
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="환자 고유 번호를 입력하세요"
                                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-lg font-medium">
                                        PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                                    />
                                </div>
                                <button className="bg-[#0EA5E9] text-white rounded-md h-12 p-3 mt-6 hover:bg-[#0A74B9] transition duration-300 w-full">
                                    로그인
                                </button>
                                <p
                                    className="text-sm mt-10 cursor-pointer"
                                    onClick={handleOpenModal2}
                                >
                                    비밀번호 찾기
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            <Modal2 isOpen2={isModalOpen2} onClose2={handleCloseModal2} />
        </>
    )
}

export default LoginPage
