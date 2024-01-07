import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface IFormField {
    name: string
    email: string
    password: string
}

function SignUp() {
    const { register, handleSubmit } = useForm<IFormField>()
    const signUpMutation = useMutation({
        mutationFn: (data: IFormField) => {
            return axios.post('/api/signup', data)
        },
    })
    const signUp = (data: IFormField) => {
        signUpMutation.mutate(data)
    }
    return (
        <>
            <p>회원가입</p>
            <form onSubmit={handleSubmit((data) => signUp(data))}>
                <div>
                    <input
                        {...register('name', { required: true })}
                        placeholder="name"
                    ></input>
                </div>
                <div>
                    <input
                        {...register('email', { required: true })}
                        placeholder="email"
                    ></input>
                </div>
                <div>
                    <input
                        {...register('password', { required: true })}
                        placeholder="password"
                    ></input>
                </div>
                <button type="submit">sign up</button>
            </form>
        </>
    )
}
export default SignUp
