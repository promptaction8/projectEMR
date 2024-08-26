import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import UpperBar from '@/components/upperBar'
import LoginSuccessAndLink from '@/components/loginpagecomponents/loginSuccessAndLink'
import { useQuery } from '@tanstack/react-query'

function Index() {
    const router = useRouter()

    const { data, isError, isLoading } = useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            const response = await axios.get('/api/token-verify', {
                withCredentials: true,
            })
            return response.data
        },
        refetchInterval: 10000,
    })

    useEffect(() => {
        console.log(isError)
    }, [isError])

    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans dark:bg-gray-800">
                <UpperBar />
                {/* 로그인 성공 및 링크 */}
                <div className="flex flex-col h-screen w-screen bg-white font-sans">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex flex-col border-2 rounded-md border-blue-600  w-120 shadow-7xl bg-white p-10">
                            <LoginSuccessAndLink />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
