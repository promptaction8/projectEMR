import UpperBar from '@/components/upperBar'
import React from 'react'
import EmployeeLoginPage from '@/components/employeeLoginPage'

function ELoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-white font-sans">
                {/* 상단 바 */}
                <UpperBar />

                {/* 중앙 박스 컨테이너 */}
                <EmployeeLoginPage />
            </div>
        </>
    )
}
export default ELoginPage
