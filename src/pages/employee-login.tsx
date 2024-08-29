import React from 'react'
import EmployeeLoginPage from '@/components/employeeLoginPage'
import Head from 'next/head'

function EmployeePage() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Employee Login</title>
                <meta name="author" content="양진우" />
                <meta name="title" content="Employee Login" />
                <meta name="application-name" content="Employee Login" />
                <meta name="Date" content="2021-09-01" />
                <meta name="description" content="Employee Login" />
                <meta
                    name="keywords"
                    content="Employee, Login, Authentication"
                />
                <meta name="robots" content="index, follow" />
                {/* Open Graph */}
                <meta property="og:title" content="Employee Login" />
                <meta property="og:url" content="/temp" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Employee Login" />
                <meta property="og:title" content="Employee Login" />
                <meta
                    property="og:description"
                    content="Employee Authentication Page"
                />
            </Head>
            <EmployeeLoginPage />
        </>
    )
}
export default EmployeePage
