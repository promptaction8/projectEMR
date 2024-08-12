import React from 'react'
import { useState } from 'react'
import Modal from './loginpagecomponents/loginpageemployeemodal'
import Modal2 from './loginpagecomponents/loginpagepatiendmodal'
import DropdownMenu from './loginpagecomponents/dropdown'
import Link from 'next/link'
import Modal3 from './loginpagecomponents/createemployeeaccountmodal'
import UpperBar from './upperbar'
import MainComponent from './loginpagecomponents/maincomponent'
function LoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 상단 바 */}
                <UpperBar />
                {/* 메인 컴포넌트 */}
                <MainComponent />
            </div>
        </>
    )
}

export default LoginPage
