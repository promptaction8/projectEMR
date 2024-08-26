import React from 'react'
import UpperBar from '@/components/upperBar'
import LoginSuccessAndLink from '@/components/loginpagecomponents/loginSuccessAndLink'

function EmployeeLoginSuccess() {
    return (
        <div className="flex flex-col h-screen w-screen bg-white font-sans">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col border-2 rounded-md border-blue-600  w-120 shadow-7xl bg-white p-10">
                    <LoginSuccessAndLink />
                </div>
            </div>
        </div>
    )
}
export default EmployeeLoginSuccess
