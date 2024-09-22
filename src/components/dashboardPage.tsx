import React from 'react'
import HeaderBar from './headerBar'
import WardSubBar from './warddashboardcomponent/wardSubBar'

function DashboardPage() {
    return (
        <div className="flex flex-col h-full w-full bg-gray-100 font-sans  text-gray-900 dark:bg-gray-700 dark:text-white">
            {/* 추가 바 */}
            <WardSubBar />
            {/* 대시보드 컴포넌트 */}
            <div className="flex flex-grow p-4 font-bold dark:text-gray-900">
                <div className="flex flex-col w-1/5 pr-8  ml-50">
                    {/* 왼쪽 상단 작은 박스 */}
                    <div className="bg-white shadow-lg p-10 mb-20 h-80 rounded-xl  dark:bg-gray-400 dark:text-white">
                        병상 수
                    </div>
                    {/* 긴 박스 */}
                    <div className="bg-white shadow-lg p-10 flex-grow mb-8 rounded-xl  dark:bg-gray-400 dark:text-white">
                        환자 목록
                    </div>
                </div>
                <div className="flex flex-col w-3/4  px-40">
                    {/* 오른쪽 박스 3개 */}
                    <div className="bg-white shadow-lg p-10 mb-8 flex-1 rounded-xl  dark:bg-gray-400 dark:text-white">
                        VITAL
                    </div>
                    <div className="bg-white shadow-lg p-10 mb-8 flex-1 rounded-xl  dark:bg-gray-400 dark:text-white">
                        DIET
                    </div>
                    <div className="bg-white shadow-lg p-10 mb-8 flex-1 rounded-xl  dark:bg-gray-400 dark:text-white">
                        CALL BOX
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
