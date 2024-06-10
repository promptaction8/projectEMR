import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

interface IFormField {
    email: string
    name: string
    password: string
}

function SignUp() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<IFormField>()
    const signUpMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            return await axios.post('/api/signup', data)
        },
        onSuccess: () => {
            router.push('/main/login')
            toast.success('회원가입이 성공하였습니다')
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || '회원가입 실패')
        },
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePassword = (password: string) => {
        return password.length >= 6
    }

    const signUpMutate: SubmitHandler<IFormField> = (data) => {
        clearErrors()

        let hasError = false

        if (!validateEmail(data.email) || data.email.length === 0) {
            setError('email', {
                type: 'manual',
                message: '유효한 이메일 형식이 아닙니다',
            })
            toast.error('유효한 이메일 형식이 아닙니다')
            hasError = true
        }

        if (data.name.trim().length === 0) {
            setError('name', { type: 'manual', message: '이름을 입력해주세요' })
            toast.error('이름을 입력해주세요')
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
            signUpMutation.mutate(data)
        }
    }

    return (
        <>
            <div className="font-mono bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                <div className="flex relative shrink-0 flex-row-reverse  min-w-full h-12">
                    <div className="flex flex-row-reverse text-center h-full w-80 ">
                        <div className=" flex h-full my-2 ">
                            <Link
                                href="/main/login"
                                className="text-white mx-4 rounded-lg relative  "
                            >
                                로그인 페이지로 이동
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200  items-center flex-col">
                    <div className="flex flex-col items-center w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className=" flex flex-col w-130 h-150 my-20">
                            <div className="text-center text-4xl  text-white">
                                회원가입
                            </div>
                            <div className="flex flex-row w-full h-full items-center">
                                <form onSubmit={handleSubmit(signUpMutate)}>
                                    <label>
                                        <p className="my-4 text-white">EMAIL</p>
                                        <input
                                            {...register('email', {
                                                required:
                                                    '이메일을 입력해주세요',
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
                                        <p className="my-4 text-white">NAME</p>
                                        <input
                                            {...register('name', {
                                                required: '이름을 입력해주세요',
                                            })}
                                            type="text"
                                            placeholder="NAME"
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                        ></input>
                                        {errors.name && (
                                            <p className="text-red-500">
                                                {errors.name.message}
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
                                                    '비밀번호를 입력해주세요',
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
                                    </label>
                                    <button className="font-sans my-10 w-128 rounded-xl bg-white px-4 py-2 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400">
                                        <a className="text-lg text-black">
                                            확인
                                        </a>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
