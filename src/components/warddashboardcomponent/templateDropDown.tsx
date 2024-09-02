import { useState, useEffect, useRef } from 'react'

const TemplateDropDown = () => {
    const [isDropOpen, setDropOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setDropOpen(!isDropOpen)
    }
    const handleClickOutside = (e: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target as Node)
        ) {
            setDropOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <div className="relative ml-auto" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="text-blue-600 hover:text-white px-4 py-2 focus:outline-none "
            >
                낙상사정도구 ▼
            </button>
            <div
                className={`absolute right-0 mt-2 w-60 z-10 bg-white hover:text-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-500 ease-in-out transform ${
                    isDropOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
                style={{ transformOrigin: 'top right' }}
            >
                <ul
                    className={`transition-opacity duration-500 ${
                        isDropOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        낙상 사정 도구(MFS)
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        욕창 사정 도구(Braden Scale)
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        통증 사정 도구(NRS)
                    </li>
                    <li className="text-sm px-10 py-10 text-gray-800 hover:bg-gray-200 hover:rounded-md transition duration-300 ease-in-out">
                        인지기능 사정 도구(MMSE)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TemplateDropDown
