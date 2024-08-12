import React from 'react'
import { useState } from 'react'
import PatientRegisterModal from './modals/patientregistermodal'

function ExtraBar() {
    const [isPatientRegisterModal, setIsPatientRegisterModal] = useState(false)
    const [isNurseRecordModal, setIsNurseRecordModal] = useState(false)
    const [isNurseInfoModal, setIsNurseInfoModal] = useState(false)
    const [isSurgeryRegisterModal, setIsSurgeryRegisterModal] = useState(false)
    const [isConsultationModal, setIsConsultationModal] = useState(false)
    const [isPrnOrderModal, setIsPrnOrderModal] = useState(false)
    const [isAssessmentToolModal, setIsAssessmentToolModal] = useState(false)
    const [isMedicationRecordModal, setIsMedicationRecordModal] =
        useState(false)

    const patientRegisterModal = () => {
        setIsPatientRegisterModal(true)
    }
    const handleClosePatientRegisterModal = () => {
        setIsPatientRegisterModal(false)
    }

    const nurseRecordModal = () => {
        setIsNurseRecordModal(true)
    }
    const handleCloseNurseRecordModal = () => {
        setIsNurseRecordModal(false)
    }

    const nurseInfoModal = () => {
        setIsNurseInfoModal(true)
    }
    const handleCloseNurseInfoModal = () => {
        setIsNurseInfoModal(false)
    }

    const surgeryRegisterModal = () => {
        setIsSurgeryRegisterModal(true)
    }
    const handleCloseSurgeryRegisterModal = () => {
        setIsSurgeryRegisterModal(false)
    }

    const consultationModal = () => {
        setIsConsultationModal(true)
    }
    const handleCloseConsultationModal = () => {
        setIsConsultationModal(false)
    }

    const prnOrderModal = () => {
        setIsPrnOrderModal(true)
    }
    const handleClosePrnOrderModal = () => {
        setIsPrnOrderModal(false)
    }

    const assessmentToolModal = () => {
        setIsAssessmentToolModal(true)
    }
    const handleCloseAssessmentToolModal = () => {
        setIsAssessmentToolModal(false)
    }

    const medicationRecordModal = () => {
        setIsMedicationRecordModal(true)
    }
    const handleCloseMedicationRecordModal = () => {
        setIsMedicationRecordModal(false)
    }

    return (
        <>
            <div className="bg-blue-600 p-6 mb-10 mt-10 text-white shadow-md text-lg font-bold ">
                <div className="flex flex-wrap justify-start space-x-12 mt-2 ml-40">
                    <button
                        onClick={patientRegisterModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        환자 등록
                    </button>
                    <button
                        onClick={nurseRecordModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        간호 기록
                    </button>
                    <button
                        onClick={nurseInfoModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        간호정보조사지
                    </button>
                    <button
                        onClick={surgeryRegisterModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        수술 등록
                    </button>
                    <button
                        onClick={consultationModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        협진
                    </button>
                    <button
                        onClick={prnOrderModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        PRN 오더
                    </button>
                    <button
                        onClick={assessmentToolModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        사정 도구 템플릿
                    </button>
                    <button
                        onClick={medicationRecordModal}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        투약 기록 목록
                    </button>
                </div>
            </div>
            <PatientRegisterModal
                isOpen={isPatientRegisterModal}
                onClose={handleClosePatientRegisterModal}
            />
        </>
    )
}

export default ExtraBar
