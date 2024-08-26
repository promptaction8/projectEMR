import React from 'react'
import PatientLoginComponent from './loginpagecomponents/patientLoginComponent'

function PatientLogin() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 메인 컴포넌트 */}
                <PatientLoginComponent />
            </div>
        </>
    )
}

export default PatientLogin
