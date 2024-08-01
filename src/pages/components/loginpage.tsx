import React from 'react'
import { useState } from 'react'
import Modal from './loginpagecomponent/loginpageemploymodal'
import Modal2 from './loginpagecomponent/loginpagepatiendmodal'
import DropdownMenu from './loginpagecomponent/dropdown'
import Link from 'next/link'
import Modal3 from './loginpagecomponent/createaccountmodal'
import UpperBar from './loginpagecomponent/upperbar'
import MainComponent from './loginpagecomponent/maincomponent'
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
