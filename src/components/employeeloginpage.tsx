import React from 'react'
import UpperBar from './upperbar'
import MainComponent from './loginpagecomponents/employeelogincomponent'
import EmployeeLoginComponent from './loginpagecomponents/employeelogincomponent'
function EmployeeLoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 메인 컴포넌트 */}
                <EmployeeLoginComponent />
            </div>
        </>
    )
}

export default EmployeeLoginPage
