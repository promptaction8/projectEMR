import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface NowLocation {
    latitude: number
    longitude: number
}
function Location() {
    const router = useRouter()
    const { query } = useRouter()
    const [nowLocation, setLocation] = useState<NowLocation | null>(null)

    // useEffect 두번째 매개변수 [] => 첫번째 렌더링에만 실행하고싶을 때 씀
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
    }, [])
    const { data } = useQuery({
        queryKey: ['authKey'],
        queryFn: () =>
            axios.get(
                `/api/location/?nx=${nowLocation?.latitude}&ny=${nowLocation?.longitude}`
            ),

        refetchInterval: false,
        enabled: nowLocation !== null,
    })

    const weathers = data?.data.temp.response.body.items.item
    console.log('🚀 ~ Location ~ data?.data:', data?.data)
    console.log(
        '🚀 ~ Location ~ data?.data.temp.response.body:',
        data?.data.temp.response.body
    )

    return (
        <>
            <div>
                {/* {weathers?.map((weather: any) => (
                        <p key={weather.baseTime}>
                            {JSON.stringify(weather, undefined, 2)}
                        </p>
                    )
                )} */}
                {weathers?.map((weather: any) => {
                    return (
                        <p key={weather.baseTime}>
                            <div>{JSON.stringify(weather, undefined, 2)}</div>
                        </p>
                    )
                })}
            </div>
        </>
    )
}
export default Location
