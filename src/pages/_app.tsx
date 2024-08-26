/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head' // Head 컴포넌트 가져오기
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PUBLIC_PAGES } from '@/constants'
import UpperBar from '@/components/upperBar'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchInterval: false,
            refetchIntervalInBackground: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
})

function Template({ children }: any) {
    const router = useRouter()

    const { data, isError, isFetched } = useQuery({
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
        if (
            router.isReady === true &&
            isFetched === true &&
            isError === true &&
            PUBLIC_PAGES.includes(router.pathname) === false
        ) {
            router.push('/login')
        }
    }, [isError, isFetched, router])

    return (
        <div className="flex flex-col h-screen w-screen bg-white font-sans dark:bg-gray-700">
            <UpperBar />
            {children}
        </div>
    )
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/EMR FAVICON.ico" sizes="48x48" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>EMR</title>
            </Head>
            <QueryClientProvider client={queryClient}>
                <Template>
                    <Component {...pageProps} />
                </Template>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </QueryClientProvider>
        </>
    )
}
