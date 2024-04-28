import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function Location() {
    const router = useRouter()
    const { query } = useRouter()
    const { data } = useQuery({
        queryKey: ['authKey'],
        queryFn: () => axios.get(`api/location`, query),
        refetchInterval: false,
        enabled: router.isReady,
    })
    return <></>
}
export default Location
