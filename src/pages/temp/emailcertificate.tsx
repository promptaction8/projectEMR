// 이메일 인증 페이지
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAtom, useSetAtom } from 'jotai'
import { tokenAtom } from '@/constants/token'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

function EmailCertificate() {
    const router = useRouter()
    const { code } = router.query
    const [emailCode, setCode] = useState(null)
    useEffect(() => {
        if (code) {
            setCode(emailCode)
        }
    }, [])
    const { data, error, isLoading } = useQuery({
        queryKey: ['emailcodecheck'],
        queryFn: () => axios.get(`/api/emailcodecheck/?emailcode=${code}`),
        enabled: !!code,
    })
    useEffect(() => {
        if (data) {
            setTimeout(() => {
                toast.success('이메일 인증이 완료되었습니다')
                router.push('/temp/passwordchange')
            }, 3000)
            if (error) {
                toast.error('이메일 인증이 실패하였습니다')
            }
        }
    })
    return (
        <>
            <div className="font-mono bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                <div className="flex relative shrink-0 flex-row  min-w-full h-20 border-2 border-solid border-pink-400"></div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200  items-center flex-col">
                    <div className="flex flex-col items-center w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className=" flex flex-col w-130 h-150 my-20">
                            <div className="text-center text-5xl  text-white">
                                EMAIL 인증
                            </div>
                            <div className=" flex flex-row w-full h-full items-center">
                                <div className="mx-40">인증중입니다</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailCertificate
