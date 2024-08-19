import UpperBar from '@/components/upperbar'
import React from 'react'
import EmployeeLoginPage from '@/components/employeeloginpage'
import WardExtraBar from '@/components/warddashboardcomponent/wardextrabar'
import PatientLoginPage from '@/components/patientloginpage'

function PLoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 상단 바 */}
                <UpperBar />

                {/* 중앙 박스 컨테이너 */}
                <PatientLoginPage />
            </div>
        </>
    )
}
export default PLoginPage
