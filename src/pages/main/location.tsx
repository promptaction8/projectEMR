import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUpWideShort,
    faCloud,
    faCloudRain,
    faDroplet,
    faGauge,
    faGlassWater,
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
    console.log('🚀 ~ Location ~ token:', token)
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
                router.push('/main/login')
            }, expirationTime.getTime() - new Date().getTime())

            return () => clearTimeout(timeout)
        }
    }, [expirationTime, setToken, router])

    const handleLogout = () => {
        setToken(null)
        toast.success('로그아웃 되었습니다')
        router.push('/main/login')
    }

    const handleChangePassword = () => {
        if (token) {
            toast.success('비밀번호를 변경하러 갑니다')
            router.push('/main/passwordchangebytoken')
        } else {
            toast.error(
                '토큰 유효기간이 만료되었습니다. 다시 로그인이 필요합니다'
            )
            router.push('/main/login')
        }
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
        return (
            <>
                <div className="font-mono bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                    <div className="flex relative shrink-0 flex-row  min-w-full h-20"></div>
                    <div className="flex relative shrink-0 min-w-full my-40 h-200  items-center flex-col">
                        <div className="flex flex-col items-center w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                            <div className=" flex flex-col w-130 h-150 my-20">
                                <div className="text-center text-5xl  text-white"></div>
                                <div className=" flex flex-row w-full h-full items-center text-white text-3xl">
                                    <div className="mx-40">Loading...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (error1 || error2) {
        return <div>Error : ERROR</div>
    }
    const weathers = data1?.data.temp.response.body.items.item
    const convertLocation = data2?.data.results[5].formatted_address

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

    return (
        <>
            <div className="font-sans bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                <div className="flex flex-row-reverse relative shrink-0  min-w-full h-12 ">
                    <div className="flex flex-row-reverse h-full w-88 ">
                        <div className=" flex flex-col justify-center h-full ">
                            <div>
                                로그인 만료시간 :{' '}
                                {expirationTime?.toLocaleString()}
                            </div>
                        </div>
                        <div className=" flex h-full">
                            <button
                                className="mx-1 rounded-md  border-solid border-2  border-white duration-300 ease-in hover:-translate-x-1 hover:scale-100 hover:bg-slate-400"
                                onClick={handleLogout}
                            >
                                로그아웃
                            </button>
                        </div>
                        <div className=" flex h-full">
                            <button
                                className="mx-1 rounded-md  border-solid border-2  border-white duration-300 ease-in hover:-translate-x-1 hover:scale-100 hover:bg-slate-400"
                                onClick={handleChangePassword}
                            >
                                비밀번호 변경
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200  items-center flex-col">
                    <div className="flex flex-col w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className=" flex flex-col w-full h-1/2 items-center">
                            <div className="flex flex-row  w-200 h-full">
                                <div className="flex flex-row items-center w-3/5 h-full">
                                    {pty === '0' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faSun}
                                                size="10x"
                                            />
                                            <p className="text-2xl">맑음</p>
                                        </div>
                                    )}
                                    {pty === '1' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                size="10x"
                                            />
                                            <p>비</p>
                                        </div>
                                    )}
                                    {pty === '2' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                size="10x"
                                            />
                                            <p>비/눈</p>
                                        </div>
                                    )}
                                    {pty === '3' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faSnowflake}
                                                size="10x"
                                            />
                                            <p>눈</p>
                                        </div>
                                    )}
                                    {pty === '5' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                size="10x"
                                            />
                                            <p>빗방울</p>
                                        </div>
                                    )}
                                    {pty === '6' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faCloudRain}
                                                size="10x"
                                            />
                                            <p>빗방울/눈날림</p>
                                        </div>
                                    )}
                                    {pty === '7' && (
                                        <div className="flex flex-col items-center">
                                            <FontAwesomeIcon
                                                icon={faSnowflake}
                                                size="10x"
                                            />
                                            <p>눈</p>
                                        </div>
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
                                <div className="font-sans flex flex-row items-center w-full h-36 gap-2">
                                    <div className=" flex-col flex items-center text-2xl  h-full w-1/6">
                                        강수량
                                        {/* 1시간 강수량 */}
                                        <FontAwesomeIcon icon={faGlassWater} />
                                        {rn1}
                                    </div>
                                    <div className="flex-col flex items-center text-2xl  h-full w-1/6">
                                        강수 형태
                                        {/* 강수형태 */}
                                        <FontAwesomeIcon icon={faWater} />
                                        {pty}
                                    </div>
                                    <div className="flex-col flex items-center text-2xl  h-full w-1/6">
                                        습도
                                        {/* 습도 */}
                                        <FontAwesomeIcon icon={faDroplet} />
                                        {reh}%
                                    </div>
                                    <div className="flex-col flex items-center text-2xl  h-full w-1/6">
                                        풍향
                                        {/* 풍향 */}
                                        <FontAwesomeIcon icon={faWind} />
                                        {vec}def
                                    </div>
                                    <div className="flex-col flex items-center text-2xl  h-full w-1/6">
                                        풍속
                                        {/* 풍속 */}
                                        <FontAwesomeIcon icon={faGauge} />
                                        {wsd}m/s
                                    </div>
                                    <div className="flex-col flex items-center text-2xl  h-full w-1/6">
                                        바람성분
                                        {/* 남북바람성분 */}
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
