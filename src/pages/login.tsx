import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAtom, useSetAtom } from 'jotai'
import { tokenAtom } from '@/atoms/token'

interface IFormField {
    email: string
    password: string
}
function Login() {
    const { register, handleSubmit } = useForm<IFormField>()
    const router = useRouter()
    const setToken = useSetAtom(tokenAtom)
    const loginMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            const tokenData = await axios.post('/api/login', data)
            setToken(tokenData.data.token)

            return axios.post('/api/login', data)
        },
        onSuccess: () => router.push('/createPost'),
    })
    const login = (data: IFormField) => {
        loginMutation.mutate(data)
    }
    return (
        <>
            <p>로그인</p>
            <form onSubmit={handleSubmit((data) => login(data))}>
                <div>
                    <input
                        {...register('email', { required: true })}
                        placeholder="ID(email type)"
                    ></input>
                </div>
                <div>
                    <input
                        {...register('password', { required: true })}
                        placeholder="PW"
                    ></input>
                </div>
                <button type="submit">login</button>
                <div>
                    <Link href="/signup">sign up</Link>
                </div>
            </form>
        </>
    )
}
export default Login
