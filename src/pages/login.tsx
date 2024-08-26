import React from 'react'
import UpperBar from '@/components/upperBar'
import LoginBox from '@/components/loginpagecomponents/loginBox'

function Login() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-white font-sans dark:bg-gray-800">
                {/* 상단 바 */}
                <UpperBar />

                {/* 중앙 박스 컨테이너 */}
                <LoginBox />
            </div>
        </>
    )
}

export default Login
