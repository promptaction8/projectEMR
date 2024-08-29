import React from 'react'
import PatientLoginPage from './loginpagecomponents/patientLoginPage'

function PatientLogin() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 메인 컴포넌트 */}
                <PatientLoginPage />
            </div>
        </>
    )
}

export default PatientLogin
