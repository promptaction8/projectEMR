import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface IFormField {
    email: string
    password: string
}
function Login() {
    const { register, handleSubmit } = useForm<IFormField>()

    const loginMutation = useMutation({
        mutationFn: (data: IFormField) => {
            return axios.post('/api/login', data)
        },
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
