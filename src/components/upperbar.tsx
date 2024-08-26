import axios from 'axios'
import DropdownMenu from './loginpagecomponents/dropdown'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menus = ['PACS', 'CPOE', 'RIS', 'CDS', 'HIS']

function UpperBar() {
    const router = useRouter()
    const handleHome = () => router.push('/')

    return (
        <>
            <div className="flex w-full h-16 bg-[#0EA5E9] shadow-md">
                <div className="flex flex-row items-center justify-center h-full w-40 text-3xl text-white font-bold">
                    <div className="flex items-center ml-40">
                        <button onClick={handleHome}>
                            <Image
                                src="/images/EMR LOGO BG-REMOVE.png"
                                alt="EMR Logo"
                                width={140}
                                height={100}
                                priority
                            />
                        </button>
                    </div>
                </div>
                <div className="flex ml-auto items-center h-full w-260 ">
                    <div className="flex items-center justify-between w-full h-full text-xl text-white p-2">
                        <div className="hidden md:flex ml-auto">
                            <ul className="flex gap-x-4 pr-40">
                                {menus.map((menu) => (
                                    <li
                                        key={menu}
                                        className="text-lg text-white border-2 border-transparent hover:border-blue-600 rounded-md p-2 transition duration-300 ease-in-out"
                                    >
                                        <button>
                                            <a>{menu}</a>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex md:hidden ml-auto">
                            <DropdownMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperBar
