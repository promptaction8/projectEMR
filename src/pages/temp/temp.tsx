import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from 'react-query'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Temp = () => {
    const { query } = useRouter()
    const certificateMutation = useMutation({
        mutationFn: () => {
            return axios.post('http://localhost:3000/api/certificate', query)
        },
    })

    useEffect(() => {
        if (Object.keys(query).length > 0) {
            console.log('🚀 ~ useEffect ~ query:', query)
            console.log('🚀 ~ useEffect ~ Object:', Object)
            // query 객체가 비어 있지 않은 경우에만 실행
            certificateMutation.mutate()
        }
    }, [query])

    return (
        <>
            <p>인증중입니다</p>
            <div></div>
        </>
    )
}

export default Temp
