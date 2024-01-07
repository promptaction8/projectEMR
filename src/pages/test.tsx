import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'

interface IFormField {
    email: string
    password: string
}
function Test() {
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

            <form
                onSubmit={handleSubmit((data) => login(data))}
                className="flex flex-col gap-4"
            >
                <div>
                    <input {...register('email', { required: true })} />
                </div>
                <div>
                    <input {...register('password', { required: true })} />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default Test
