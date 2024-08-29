import React, { useState } from 'react'

function PatientLoginModal() {
    return (
        <div className="bg-white rounded-lg p-10 w-120">
            <h2 className="text-lg font-semibold">환자 비밀번호 분실 안내</h2>
            <p className="mt-15">
                비밀번호를 잊어버렸을 경우, 병원 의무부 의무기록팀에게
                문의해주세요.
            </p>
            <p className="mt-15">의무부 의무기록팀 : xxx-xxxx-xxxx</p>
        </div>
    )
}

export default PatientLoginModal
