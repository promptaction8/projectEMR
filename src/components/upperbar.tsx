import axios from 'axios'
import DropdownMenu from './loginpagecomponents/dropdown'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function UpperBar() {
    const router = useRouter()
    const handleHome = async () => {
        try {
            const response = await axios.post(
                'api/token-verify',
                {},
                { withCredentials: true }
            )

            if (response.status === 200) {
                return router.push('/')
            }
            if (response.status === 400 || response.status === 401) {
                return router.push('/login')
            }
        } catch (error) {
            console.error('Error during token verification:', error)
            // 요청 실패 시에도 /login로 리다이렉트
            return router.push('/login')
        }
    }

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
                            <ul className="flex space-x-12 pr-40">
                                <li className="text-lg text-white border-2 border-transparent hover:border-blue-600 rounded-md p-2 transition duration-300 ease-in-out">
                                    <button>
                                        <a>PACS</a>
                                    </button>
                                </li>

                                <li className="text-lg text-white border-2 border-transparent hover:border-blue-600 rounded-md p-2 transition duration-300 ease-in-out">
                                    <button>
                                        <a>CPOE</a>
                                    </button>
                                </li>
                                <li className="text-lg text-white border-2 border-transparent hover:border-blue-600 rounded-md p-2 transition duration-300 ease-in-out">
                                    <button>
                                        <a>RIS</a>
                                    </button>
                                </li>
                                <li className="text-lg text-white border-2 border-transparent hover:border-blue-600 rounded-md p-2 transition duration-300 ease-in-out">
                                    <button>
                                        <a>CDS</a>
                                    </button>
                                </li>
                                <li className="text-lg text-white border-2 border-transparent hover:border-blue-600 rounded-md p-2 transition duration-300 ease-in-out">
                                    <button>
                                        <a>HIS</a>
                                    </button>
                                </li>
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
