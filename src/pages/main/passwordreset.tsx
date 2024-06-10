import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Link from 'next/link'

// 리셋 페이지
interface IFormField {
    name: string
    email: string
}
function PasswordReset() {
    const { register, handleSubmit } = useForm<IFormField>()
    const router = useRouter()
    const resetMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            return axios.put('/api/passwordreset', data)
        },
        onSuccess: () => {
            router.push('/main/login')
            toast.success('이메일 전송을 완료했습니다')
        },
        onError: (error: any) => {
            console.error(
                'Login error:',
                error.response?.data?.message || error.message
            )
            toast.error(
                error.response?.data?.message || '이메일 전송에 실패했습니다.'
            )
        },
    })
    const onSubmitError = (errors: any) => {
        if (errors.email) {
            toast.error('유효한 이메일을 입력해 주세요.')
        }
        if (errors.name) {
            toast.error('유효한 사용자 이름을 입력해 주세요.')
        }
    }
    const passwordReset = (data: IFormField) => {
        resetMutation.mutate(data)
    }
    return (
        <>
            <div className="font-mono bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                <div className="flex relative shrink-0 flex-row-reverse  min-w-full h-12 ">
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
                            <div className="text-center text-7xl  text-white">
                                EMAIL 인증
                            </div>
                            <div className="flex flex-row w-full h-full items-center">
                                <form
                                    onSubmit={handleSubmit(
                                        (data) => passwordReset(data),
                                        onSubmitError
                                    )}
                                >
                                    <label>
                                        <p className="my-4 text-white">EMAIL</p>
                                        <input
                                            {...register('email', {
                                                required: true,
                                            })}
                                            type="text"
                                            placeholder="EMAIL"
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                        ></input>
                                    </label>
                                    <label>
                                        <p className="my-4 text-white">
                                            USER NAME
                                        </p>
                                        <input
                                            {...register('name', {
                                                required: true,
                                            })}
                                            type="text"
                                            placeholder="USERNAME"
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                        ></input>
                                    </label>
                                    <label>
                                        <button className="my-10 w-128 rounded-xl bg-white px-4 py-2 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400">
                                            <a className="text-lg text-black">
                                                EMAIL 전송
                                            </a>
                                        </button>
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
export default PasswordReset
