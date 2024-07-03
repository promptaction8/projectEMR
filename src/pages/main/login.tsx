import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSetAtom } from 'jotai'
import { tokenAtom } from '@/constants/token'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

interface IFormField {
    name: string
    email: string
    password: string
}

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<IFormField>()
    const router = useRouter()
    const setToken = useSetAtom(tokenAtom)
    const loginMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            const tokenData = await axios.post('/api/login', data)
            setToken(tokenData.data.token)
            return tokenData
        },
        onSuccess: () => {
            router.push('/main/location')
            toast.success('로그인에 성공했습니다')
        },
        onError: (error: any) => {
            console.error(
                'Login error:',
                error.response?.data?.message || error.message
            )
            toast.error(
                error.response?.data?.message || '로그인에 실패했습니다.'
            )
        },
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePassword = (password: string) => {
        return password.length >= 6
    }

    const onSubmitError = (errors: any) => {
        if (errors.email) {
            toast.error('유효한 이메일을 입력해 주세요.')
        }
        if (errors.name) {
            toast.error('유효한 사용자 이름을 입력해 주세요.')
        }
        if (errors.password) {
            toast.error('비밀번호를 입력해 주세요.')
        }
    }

    const login: SubmitHandler<IFormField> = (data) => {
        clearErrors()

        let hasError = false

        if (!validateEmail(data.email)) {
            setError('email', {
                type: 'manual',
                message: '유효한 이메일 형식이 아닙니다',
            })
            toast.error('유효한 이메일 형식이 아닙니다')
            hasError = true
        }

        if (!validatePassword(data.password)) {
            setError('password', {
                type: 'manual',
                message: '비밀번호는 최소 6자 이상이어야 합니다',
            })
            toast.error('비밀번호는 최소 6자 이상이어야 합니다')
            hasError = true
        }

        if (!hasError) {
            loginMutation.mutate(data)
        }
    }

    return (
        <>
            <div className="font-mono bg-cover shrink-0 bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden justify-center w-screen h-screen">
                <div className="flex relative shrink-0 flex-row min-w-full h-20"></div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200 items-center flex-col">
                    <div className="flex flex-col items-center w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className="flex flex-col w-130 h-150 my-20">
                            <div className="text-center text-7xl text-white">
                                LOGIN
                            </div>
                            <div className="flex flex-row w-full h-full items-center">
                                <form
                                    onSubmit={handleSubmit(
                                        login,
                                        onSubmitError
                                    )}
                                >
                                    <label>
                                        <p className="my-4 text-white">EMAIL</p>
                                        <input
                                            {...register('email', {
                                                required:
                                                    '이메일을 입력해 주세요',
                                            })}
                                            type="text"
                                            placeholder="EMAIL"
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                        ></input>
                                        {errors.email && (
                                            <p className="text-red-500">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </label>

                                    <label>
                                        <p className="my-4 text-white">
                                            PASSWORD
                                        </p>
                                        <input
                                            {...register('password', {
                                                required:
                                                    '비밀번호를 입력해 주세요',
                                            })}
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                            type="password"
                                            placeholder="PASSWORD"
                                        ></input>
                                        {errors.password && (
                                            <p className="text-red-500">
                                                {errors.password.message}
                                            </p>
                                        )}
                                        <button className="my-10 w-128 rounded-xl bg-white px-4 py-2 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400">
                                            <a className="text-lg text-black">
                                                LOGIN
                                            </a>
                                        </button>
                                        <div className="flex justify-between mx-4">
                                            <div>
                                                <Link
                                                    href="/main/signup"
                                                    className="text-white text-sm flex"
                                                >
                                                    회원가입
                                                </Link>
                                            </div>
                                            <div>
                                                <Link
                                                    href="/main/passwordreset"
                                                    className="text-white text-sm flex"
                                                >
                                                    비밀번호 변경
                                                </Link>
                                            </div>
                                        </div>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
