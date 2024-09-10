import react from 'react'
import axios from 'axios'
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { useMutation } from '@tanstack/react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import Select from 'react-select'
import PatientRegister from './modals/patientRegister'
import NursingInfoSurveys from './modals/nursingInfoSurveys'
import NursingInfoSurvey from './modals/nursingInfoSurvey'

function SubBarButtons() {
    const patientRegisterOptions = [
        { value: 'register-patient', label: '환자 등록' },
    ]
    const [selectedPatientOption, setSelectedPatientOption] =
        useState<any>(null)
    const handlePatientChange = (selectedPatientOption: any) => {
        setSelectedPatientOption(selectedPatientOption)
        if (selectedPatientOption.value === 'register-patient') {
            onOpenModal()
        }
    }
    // Select option으로 간호정보기록지 등록, 조회 드롭다운 만들기
    const nursingSurveyOptions = [
        { value: 'register-nursingSurvey', label: '간호정보기록지 등록' },
        { value: 'list-nursingSurvey', label: '간호정보기록지 조회' },
    ]
    const placeHolder = '간호정보기록지'
    const [selectedOption, setSelectedOption] = useState<any>(null)
    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        if (selectedOption.value === 'register-nursingSurvey') {
            onOpenModal3()
        } else if (selectedOption.value === 'list-nursingSurvey') {
            onOpenModal10()
        }
    }
    // Select option으로 낙상사정도구, 통증평가도구, 간호계획서 등록, 조회 드롭다운 만들기
    const TemplateDropDownOptions = [
        { value: 'fall', label: '낙상 사정 도구(MFS)' },
        { value: 'pain', label: '통증 사정 도구(NRS)' },
        { value: 'cognitive', label: '인지기능 사정 도구(MMSE)' },
        { value: 'braden', label: '욕창 사정 도구(Braden Scale)' },
    ]
    const [selectedTemplateOption, setSelectedTemplateOption] =
        useState<any>(null)
    const handleTemplateChange = (selectedTemplateOption: any) => {
        setSelectedTemplateOption(selectedTemplateOption)
        if (selectedTemplateOption.value === 'fall') {
            console.log('낙상 사정 도구(MFS)')
        } else if (selectedTemplateOption.value === 'pain') {
            console.log('통증 사정 도구(NRS)')
        } else if (selectedTemplateOption.value === 'cognitive') {
            console.log('인지기능 사정 도구(MMSE)')
        } else if (selectedTemplateOption.value === 'braden') {
            console.log('욕창 사정 도구(Braden Scale)')
        }
    }

    // Select Option으로 간호 기록 버튼 클릭 시 모달창 띄우기
    const nursingRecordOptions = [
        { value: 'record', label: '간호 기록' },
        { value: 'plan', label: '간호 계획' },
    ]
    const [selectedNursingRecordOption, setSelectedNursingRecordOption] =
        useState<any>(null)
    const handleNursingRecordChange = (selectedNursingRecordOption: any) => {
        setSelectedNursingRecordOption(selectedNursingRecordOption)
        if (selectedNursingRecordOption.value === 'record') {
            onOpenModal2()
        }
        if (selectedNursingRecordOption.value === 'plan') {
            onOpenModal9()
        }
    }
    // Select Option으로 수술 버튼 클릭 시 모달 창 띄우기
    const surgeryRegisterOptions = [
        { value: 'register-operation', label: '수술 등록' },
    ]
    const [selectedSurgeryOption, setSelectedSurgeryOption] =
        useState<any>(null)
    const handleSurgeryChange = (selectedSurgeryOption: any) => {
        setSelectedSurgeryOption(selectedSurgeryOption)
        if (selectedSurgeryOption.value === 'register-operation') {
            onOpenModal4()
        }
    }
    // Select Option으로 협진 버튼 클릭 시 모달 창 띄우기
    const consultationOptions = [{ value: 'consultation', label: '협진' }]
    const [selectedConsultationOption, setSelectedConsultationOption] =
        useState<any>(null)
    const handleConsultationChange = (selectedConsultationOption: any) => {
        setSelectedConsultationOption(selectedConsultationOption)
        if (selectedConsultationOption.value === 'consultation') {
            onOpenModal5()
        }
    }
    // Select Option으로 PRNOrder 버튼 클릭 시 모달 창 띄우기
    const PRNOrderOptions = [{ value: 'prnorder', label: 'PRN 오더' }]
    const [selectedPRNOrderOption, setSelectedPRNOrderOption] =
        useState<any>(null)
    const handlePRNOrderChange = (selectedPRNOrderOption: any) => {
        setSelectedPRNOrderOption(selectedPRNOrderOption)
        if (selectedPRNOrderOption.value === 'prnorder') {
            onOpenModal6()
        }
    }
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
        <div className="flex space-x-7">
            <Select
                value={selectedPatientOption}
                onChange={handlePatientChange}
                options={patientRegisterOptions}
                placeholder={'환자 등록'}
                className=" text-black "
            />
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                closeOnOverlayClick={false}
            >
                <PatientRegister />
            </Modal>
            {/* Select option으로 간호정보기록지 등록, 조회 드롭다운 */}

            <Select
                value={selectedOption}
                onChange={handleChange}
                options={nursingSurveyOptions}
                placeholder={' 간호정보기록지'}
                className=" text-black  "
            />
            {/*간호정보기록지 등록 모달 */}
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
            <Select
                value={selectedNursingRecordOption}
                onChange={handleNursingRecordChange}
                options={nursingRecordOptions}
                placeholder={'간호'}
                className=" text-black "
            />
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
            {/* Select option으로 수술 등록 버튼 클릭 시 모달창 띄우기 */}
            <Select
                value={selectedSurgeryOption}
                onChange={handleSurgeryChange}
                options={surgeryRegisterOptions}
                placeholder={'수술'}
                className=" text-black "
            />
            {/* 수술 등록 모달 */}
            <Modal
                open={open4}
                onClose={onCloseModal4}
                center
                closeOnOverlayClick={false}
            ></Modal>
            {/* Select option으로 협진 버튼 클릭 시 모달창 띄우기 */}
            <Select
                value={selectedConsultationOption}
                onChange={handleConsultationChange}
                options={consultationOptions}
                placeholder={'협진'}
                className=" text-black "
            />
            {/* 협진 모달 */}
            <Modal
                open={open5}
                onClose={onCloseModal5}
                center
                closeOnOverlayClick={false}
            ></Modal>
            {/* Select option으로 PRNOrder 버튼 클릭 시 모달창 띄우기 */}
            <Select
                value={selectedPRNOrderOption}
                onChange={handlePRNOrderChange}
                options={PRNOrderOptions}
                placeholder={'PRNOrder'}
                className=" text-black "
            />
            {/* PRNOrder 모달 */}
            <Modal
                open={open6}
                onClose={onCloseModal6}
                center
                closeOnOverlayClick={false}
            ></Modal>

            {/* Select option으로 이루어진 TemplateDropdown */}
            <Select
                value={selectedTemplateOption}
                onChange={handleTemplateChange}
                options={TemplateDropDownOptions}
                placeholder="사정 도구 Template"
                className=" text-black "
            />
            {/* 투약 기록 목록 Select Option */}
            <Select
                value={selectedMedicationRecordOption}
                onChange={handleMedicationRecordChange}
                options={medicationRecordOptions}
                placeholder="투약 기록"
                className=" text-black "
            />
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
