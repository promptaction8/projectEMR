import React from 'react'
import UpperBar from './upperBar'
import WardExtraBar from './warddashboardcomponent/wardExtraBar'

function DashboardComponents() {
    return (
        <div className="flex flex-col h-full w-full bg-gray-100 font-sans dark:bg-gray-100">
            {/* 추가 바 */}
            <WardExtraBar />
            {/* 대시보드 컴포넌트 */}
            <div className="flex flex-grow p-4 ">
                <div className="flex flex-col w-1/5 pr-8  ml-50">
                    {/* 왼쪽 상단 작은 박스 */}
                    <div className="bg-white shadow-lg p-10 mb-20 h-80 rounded-xl ">
                        작은 박스
                    </div>
                    {/* 긴 박스 */}
                    <div className="bg-white shadow-lg p-10 flex-grow mb-8 rounded-xl">
                        긴 박스
                    </div>
                </div>
                <div className="flex flex-col w-3/4  px-40">
                    {/* 오른쪽 박스 3개 */}
                    <div className="bg-white shadow-lg p-10 mb-8 flex-1 rounded-xl">
                        박스 1
                    </div>
                    <div className="bg-white shadow-lg p-10 mb-8 flex-1 rounded-xl">
                        박스 2
                    </div>
                    <div className="bg-white shadow-lg p-10 mb-8 flex-1 rounded-xl">
                        박스 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponents
