import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import PatientRegister from './modals/patientRegister'
import NursingInfoSurvey from './modals/nursingInfoSurvey'
import Select from 'react-select'
import NursingInfoSurveys from './modals/nursingInfoSurveys'
import SubBarButtons from './subBarButtons'
import SubBarTokens from './subBarTokens'

function WardSubBar() {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-700 dark:text-white p-6 mb-10 mt-10 text-black items-center text-sm font-semibold ">
                <div className="flex  mr-56 mt-2 ml-52 pr-18 md:flex md:flex-col gap-2">
                    <SubBarButtons />
                    <SubBarTokens />
                </div>
            </div>
        </>
    )
}

export default WardSubBar
