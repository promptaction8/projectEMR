import React from 'react'
import HeaderBar from '@/components/headerBar'
import Login from '@/components/loginpagecomponents/login'
import Head from 'next/head'
import LoginF from '@/components/login'

function LoginPage() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Login</title>
                <meta name="author" content="양진우" />
                <meta name="title" content="Login" />
                <meta name="application-name" content="Login" />
                <meta name="Date" content="2021-09-01" />
                <meta name="description" content="User Login Page" />
                <meta name="keywords" content="Login, User, Authentication" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph */}
                <meta property="og:title" content="Login" />
                <meta property="og:url" content="/temp" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Login" />
                <meta
                    property="og:description"
                    content="User Authentication Page"
                />
            </Head>
            <LoginF />
        </>
    )
}

export default LoginPage
