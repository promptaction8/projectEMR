
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import {PatientRegister} from './modals/patientRegister'
import {NursingInfoSurveys} from './modals/nursingInfoSurveys'
import { NursingInfoSurvey } from './modals/nursingInfoSurvey'
import {FaRegRegistered} from 'react-icons/fa'
import { IoIosPaper } from "react-icons/io";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiRecordCircleLine } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import { PiFaceMaskFill } from "react-icons/pi";
import { MdOpenWith } from "react-icons/md";
import { SiTransmission } from "react-icons/si";
import { FaPersonFalling } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { IoBed } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";
import { Tooltip } from 'react-tooltip'



function SubBarButtons() {


    // Select Option으로 투약기록 버튼 클릭 시 모달 창 띄우기
    const medicationRecordOptions = [
        { value: 'medicationrecord', label: '투약 기록 목록' },
    ]
    const [selectedMedicationRecordOption, setSelectedMedicationRecordOption] =
        useState<any>(null)
    const handleMedicationRecordChange = (
        selectedMedicationRecordOption: any
    ) => {
        setSelectedMedicationRecordOption(selectedMedicationRecordOption)
        if (selectedMedicationRecordOption.value === 'medicationrecord') {
            onOpenModal8()
        }
    }

    // 모달 연결
    // PatientRegister 모달
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    // NurseRecord 모달
    const [open2, setOpen2] = useState(false)
    const onOpenModal2 = () => setOpen2(true)
    const onCloseModal2 = () => setOpen2(false)

    // NursingInfoSurvey 모달
    const [open3, setOpen3] = useState(false)
    const onOpenModal3 = () => setOpen3(true)
    const onCloseModal3 = () => setOpen3(false)

    // SurgeryRegister 모달
    const [open4, setOpen4] = useState(false)
    const onOpenModal4 = () => setOpen4(true)
    const onCloseModal4 = () => setOpen4(false)

    // Consultation 모달
    const [open5, setOpen5] = useState(false)
    const onOpenModal5 = () => setOpen5(true)
    const onCloseModal5 = () => setOpen5(false)

    // PRNOrder 모달
    const [open6, setOpen6] = useState(false)
    const onOpenModal6 = () => setOpen6(true)
    const onCloseModal6 = () => setOpen6(false)

    // AssessmentToolTemplate 모달
    const [open7, setOpen7] = useState(false)
    const onOpenModal7 = () => setOpen7(true)
    const onCloseModal7 = () => setOpen7(false)

    // MedicationRecordList 모달
    const [open8, setOpen8] = useState(false)
    const onOpenModal8 = () => setOpen8(true)
    const onCloseModal8 = () => setOpen8(false)

    // Nursing Plan 모달
    const [open9, setOpen9] = useState(false)
    const onOpenModal9 = () => setOpen9(true)
    const onCloseModal9 = () => setOpen9(false)

    // 간호정보기록지 조회 모달
    const [open10, setOpen10] = useState(false)
    const onOpenModal10 = () => setOpen10(true)
    const onCloseModal10 = () => setOpen10(false)
    return (
        <div className="flex space-x-7 h-8 ">
            {/* 환자 등록 버튼 */}
            {/* 터치영역 생성 */}
            <a
            data-tooltip-id='register'
            data-tooltip-content={'환자 등록'}
            data-tooltip-color='white'
            data-tooltip-place='bottom-start'
            >
            <button onClick={() => onOpenModal()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'>

            <div>
            <div><FaRegRegistered /></div>
            </div>
            </button></a>

            <Modal
                open={open}
                onClose={onCloseModal}
                center
                closeOnOverlayClick={false}
            >
                <PatientRegister />
            </Modal>
            <Tooltip id='register' />

            { /* 간호정보기록지 등록 */ }
            <button onClick={() => onOpenModal3()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'>
            <div>
            <div><IoIosPaper /></div>
            </div>
            </button>
            { /* 간호정보기록지 조회 */ }
            <button onClick={() => onOpenModal10()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'>
            <div>
            <div><CiBookmarkCheck /></div>
            </div>
            </button>
            <Modal
                open={open3}
                onClose={onCloseModal3}
                center
                closeOnOverlayClick={false}
            >
                <NursingInfoSurvey />
            </Modal>
            {/* 간호정보기록지 조회 모달 */}
            <Modal
                open={open10}
                onClose={onCloseModal10}
                center
                closeOnOverlayClick={false}
            >
                <NursingInfoSurveys />
            </Modal>
            {/* Select option으로 간호 기록, 계획 버튼 클릭 시 모달창 띄우기 */}
            { /* 간호 기록 */}
            <button
                onClick={() => onOpenModal2()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><RiRecordCircleLine /></div>
                </div>
            </button>
            { /* 간호 계획 */}
            <button
                onClick={() => onOpenModal9()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><RiSendPlaneLine /></div>
                </div>
            </button>
            {/* 간호 기록 모달 */}
            <Modal
                open={open2}
                onClose={onCloseModal2}
                center
                closeOnOverlayClick={false}
            ></Modal>
            <Modal
                open={open9}
                onClose={onCloseModal9}
                center
                closeOnOverlayClick={false}
            ></Modal>
            {/* 수술 등록 */}
            <button
                onClick={() => onOpenModal4()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><PiFaceMaskFill /></div>
                </div>
            </button>
            {/* 수술 등록 모달 */}
            <Modal
                open={open4}
                onClose={onCloseModal4}
                center
                closeOnOverlayClick={false}
            ></Modal>
            {/* Select option으로 협진 버튼 클릭 시 모달창 띄우기 */}
            <button
                onClick={() => onOpenModal5()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><MdOpenWith /></div>
                </div>
            </button>
            {/* 협진 모달 */}
            <Modal
                open={open5}
                onClose={onCloseModal5}
                center
                closeOnOverlayClick={false}
            ></Modal>
            {/* Select option으로 PRNOrder 버튼 클릭 시 모달창 띄우기 */}
            <button
                onClick={() => onOpenModal6()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><SiTransmission /></div>
                </div>
            </button>
            {/* PRNOrder 모달 */}
            <Modal
                open={open6}
                onClose={onCloseModal6}
                center
                closeOnOverlayClick={false}
            ></Modal>

            {/* Select option으로 이루어진 TemplateDropdown 낙상, 통증, 인지기능, 욕창*/}
            <button

                onClick={() => onOpenModal7()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><FaPersonFalling /></div>
                </div>
            </button>
            <button
                onClick={() => onOpenModal7()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><FaBed /></div>
                </div>
            </button>
            <button
                onClick={() => onOpenModal7()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><RiCharacterRecognitionFill /></div>
                </div>
            </button>
            <button
                onClick={() => onOpenModal7()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><IoBed /></div>
                </div>
            </button>
            {/* 투약 기록 목록 Select Option */}
            <button
                onClick={() => onOpenModal8()}
                className='dark:border-white border-gray-400 dark:border border flex justify-center items-center w-8 rounded-lg shadow-lg hover:scale-105'
            >
                <div>
                    <div><CiMedicalCross /></div>
                </div>
            </button>
            {/* 투약 기록 목록 모달 */}
            <Modal
                open={open8}
                onClose={onCloseModal8}
                center
                closeOnOverlayClick={false}
            ></Modal>
        </div>
    )
}

export default SubBarButtons
