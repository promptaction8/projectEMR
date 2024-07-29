import React from 'react'

function LoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen">
                {/* 상단 바 */}
                <div className=" flex  w-full h-14 border-b-2 border-solid border-black">
                    <div className="flex flex-row items-center justify-center h-full w-40 font-mono text-4xl">
                        EMR
                    </div>
                </div>
                {/* 메인 컴포넌트 */}
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col border-2 rounded-lg border-solid border-black h-200 w-140">
                        <div className="flex  border-2 border-solid border-black h-32 w-full items-center justify-center">
                            <div className="text-5xl">LOGIN</div>
                        </div>
                        <div className="flex border-2 border-solid border-black h-100 w-full"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
