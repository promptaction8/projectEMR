import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUpWideShort,
    faCloud,
    faCloudRain,
    faLocationDot,
    faSnowflake,
    faSun,
    faTemperatureQuarter,
    faWater,
    faWind,
} from '@fortawesome/free-solid-svg-icons'
import { jwtDecode } from 'jwt-decode'
import { tokenAtom } from '@/constants/token'
import { toast } from 'react-toastify'
import { useAtom } from 'jotai'

interface NowLocation {
    latitude: number
    longitude: number
}
function Location() {
    const router = useRouter()
    const { query } = useRouter()
    const [nowLocation, setLocation] = useState<NowLocation | null>(null)
    const [token, setToken] = useAtom(tokenAtom)
    const [expirationTime, setExpirationTime] = useState<Date | null>(null)

    // useEffect 두번째 매개변수 [] => 첫번째 렌더링에만 실행하고싶을 때 씀
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
    }, [])

    useEffect(() => {
        if (token) {
            const decodedToken: any = jwtDecode(token)
            setExpirationTime(
                new Date(decodedToken.exp * 1000 + 3600 * 8 * 1000)
            )
        }
    }, [token])
    useEffect(() => {
        if (expirationTime) {
            const timeout = setTimeout(() => {
                setToken(null)
                router.push('/temp/login')
                toast.success('로그아웃 되었습니다')
            }, expirationTime.getTime() - new Date().getTime())

            return () => clearTimeout(timeout)
        }
    }, [expirationTime, setToken, router])

    const handleLogout = () => {
        setToken(null)
        router.push('/temp/login')
    }
    const {
        data: data1,
        isLoading: isLoading1,
        error: error1,
    } = useQuery({
        queryKey: ['kmaResult'],
        queryFn: () =>
            axios.get(
                `/api/location/?nx=${nowLocation?.latitude}&ny=${nowLocation?.longitude}`
            ),

        refetchInterval: false,
        enabled: nowLocation !== null,
    })
    const {
        data: data2,
        isLoading: isLoading2,
        error: error2,
    } = useQuery({
        queryKey: ['convertLocation'],
        queryFn: () =>
            axios.get(
                `/api/convertlocation/?nx=${nowLocation?.latitude}&ny=${nowLocation?.longitude}`
            ),
        refetchInterval: false,
        enabled: nowLocation !== null,
    })
    if (isLoading1 || isLoading2) {
        return <div>...Loading</div>
    }
    if (error1 || error2) {
        return <div>Error : ERROR</div>
    }
    const weathers = data1?.data.temp.response.body.items.item
    const convertLocation = data2?.data.results[2].formatted_address

    const t1h = weathers?.find(
        (item: any) => item.category === 'T1H'
    )?.obsrValue
    const rn1 = weathers?.find(
        (item: any) => item.category === 'RN1'
    )?.obsrValue
    const uuu = weathers?.find(
        (item: any) => item.category === 'UUU'
    )?.obsrValue
    const reh = weathers?.find(
        (item: any) => item.category === 'REH'
    )?.obsrValue
    const vvv = weathers?.find(
        (item: any) => item.category === 'VVV'
    )?.obsrValue
    const vec = weathers?.find(
        (item: any) => item.category === 'VEC'
    )?.obsrValue
    const wsd = weathers?.find(
        (item: any) => item.category === 'WSD'
    )?.obsrValue
    const pty = weathers?.find(
        (item: any) => item.category === 'PTY'
    )?.obsrValue
    // 강수 형태
    const weatherCategory = {
        PTY: {
            '0': '없음',
            '1': '비',
            '2': '비와 눈',
            '3': '눈',
            '5': '빗방울',
            '6': '눈날림과 빗방울',
            '7': '눈날림',
        },
    }

    return (
        <>
            <div className="font-mono bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                <div className="font-sans flex flex-row-reverse relative shrink-0  min-w-full h-12 ">
                    <div className="flex flex-row h-full w-100 ">
                        <div className=" flex h-full w-1/2 text-center">
                            로그인 만료시간 : {expirationTime?.toLocaleString()}
                        </div>
                        <div className=" flex h-full w-1/2">
                            <button
                                className="mx-4 rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-3xl shadow-2xl border-gray-200 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400"
                                onClick={handleLogout}
                            >
                                로그아웃
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200  items-center flex-col">
                    <div className="flex flex-col w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className=" flex flex-col w-full h-1/2 items-center">
                            <div className="flex flex-row  w-200 h-full">
                                <div className="flex flex-row items-center  w-3/5 h-full">
                                    {pty === '0' && (
                                        <FontAwesomeIcon
                                            icon={faSun}
                                            size="10x"
                                        />
                                    )}
                                    {pty === '1' && (
                                        <FontAwesomeIcon
                                            icon={faCloudRain}
                                            size="10x"
                                        />
                                    )}
                                    {pty === '2' && (
                                        <FontAwesomeIcon
                                            icon={faCloudRain}
                                            size="10x"
                                        />
                                    )}
                                    {pty === '3' && (
                                        <FontAwesomeIcon
                                            icon={faSnowflake}
                                            size="10x"
                                        />
                                    )}
                                    {pty === '5' && (
                                        <FontAwesomeIcon
                                            icon={faCloudRain}
                                            size="10x"
                                        />
                                    )}
                                    {pty === '6' && (
                                        <FontAwesomeIcon
                                            icon={faCloudRain}
                                            size="10x"
                                        />
                                    )}
                                    {pty === '7' && (
                                        <FontAwesomeIcon
                                            icon={faSnowflake}
                                            size="10x"
                                        />
                                    )}
                                </div>
                                <div className=" flex flex-row items-center w-full h-full">
                                    <div className="flex flex-col  w-full h-2/3 ">
                                        <div className="flex flex-col my-10 w-full h-2/3 text-5xl">
                                            <div className="h-1/2 w-full">
                                                {t1h}℃
                                            </div>
                                            <div className=" h-1/2 w-full text-4xl">
                                                <FontAwesomeIcon
                                                    icon={faLocationDot}
                                                />
                                                {convertLocation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex items-center w-full h-1/2 ">
                            <div className="mx-20  flex items-center w-11/12 h-4/5">
                                <div className=" flex flex-row items-center w-full h-36">
                                    <div className="flex-col flex items-center text-4xl  h-full w-1/6">
                                        <FontAwesomeIcon icon={faWater} />
                                        {rn1}
                                    </div>
                                    <div className="flex-col flex items-center text-4xl  h-full w-1/6">
                                        <FontAwesomeIcon icon={faWater} />
                                        {pty}
                                    </div>
                                    <div className="flex-col flex items-center text-4xl  h-full w-1/6">
                                        <FontAwesomeIcon
                                            icon={faTemperatureQuarter}
                                        />
                                        {reh}%
                                    </div>
                                    <div className="flex-col flex items-center text-4xl  h-full w-1/6">
                                        <FontAwesomeIcon icon={faWind} />
                                        {vec}def
                                    </div>
                                    <div className="flex-col flex items-center text-4xl  h-full w-1/6">
                                        <FontAwesomeIcon icon={faWind} />
                                        {wsd}m/s
                                    </div>
                                    <div className="flex-col flex items-center text-4xl  h-full w-1/6">
                                        <FontAwesomeIcon
                                            icon={faArrowUpWideShort}
                                        />
                                        {vvv}m/s
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Location
