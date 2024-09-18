import React from 'react'
import EmployeeDepart from '@/components/loginpagecomponents/employeeDepart'
import Head from 'next/head'

function Index() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Employee Depart</title>
                <meta name="author" content="양진우" />
                <meta name="title" content="Employee Depart" />
                <meta name="application-name" content="Employee Depart" />
                <meta name="Date" content="2021-09-01" />
                <meta name="description" content="Employee Depart" />
                <meta name="keywords" content="Employee, Depart, Management" />
                <meta name="robots" content="index, follow" />
                {/* Open Graph */}
                <meta property="og:title" content="Employee Depart" />
                <meta property="og:url" content="/temp" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Employee Depart" />
                <meta property="og:title" content="Employee Depart" />
                <meta
                    property="og:description"
                    content="Employee Department Management"
                />
            </Head>
            <div className="flex flex-col h-screen w-screen dark:bg-gray-900  bg-gray-100 font-sans">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col border-2 rounded-md border-blue-600 w-120 shadow-7xl bg-white dark:bg-gray-900 p-10">
                        <EmployeeDepart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
