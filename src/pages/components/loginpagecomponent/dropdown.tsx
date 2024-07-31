import { useState } from 'react'

const DropdownMenu = () => {
    const [isDropOpen, setDropOpen] = useState(false)

    const toggleDropdown = () => {
        setDropOpen(!isDropOpen)
    }

    return (
        <div className="relative ml-auto">
            <button
                onClick={toggleDropdown}
                className="text-white px-4 py-2 focus:outline-none mr-40"
            >
                MENU ▼
            </button>
            <div
                className={`absolute right-0 mt-2 w-48 z-10 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-500 ease-in-out transform ${
                    isDropOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
                style={{ transformOrigin: 'top right' }} // 애니메이션의 시작점 설정
            >
                <ul
                    className={`transition-opacity duration-500 ${
                        isDropOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        PACS
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        CPOE
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        RIS
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        CDS
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        HIS
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropdownMenu
