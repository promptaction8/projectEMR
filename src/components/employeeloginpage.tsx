import React from 'react'
import EmployeeLogin from './loginpagecomponents/employeeLoginComponent'
function EmployeeLoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-white font-sans">
                {/* 메인 컴포넌트 */}
                <EmployeeLogin />
            </div>
        </>
    )
}

export default EmployeeLoginPage
