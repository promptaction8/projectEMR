import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { tokenAtom } from '@/constants/token'
import { jwtDecode } from 'jwt-decode'

interface IFormField {
    newPassword: string
    checkPassword: string
}
function PasswordChangeByToken() {
    const router = useRouter()
    const [token, setToken] = useAtom(tokenAtom)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormField>()
    const passwordChangeMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            return axios.put('/api/passwordchangebytoken', data, {
                headers: { Authorization: `Bearer ${token}` },
            })
        },
        onSuccess: () => {
            toast.success(
                '비밀번호가 변경되었습니다. 로그인 페이지로 돌아갑니다'
            )
            router.push('/main/login')
        },
        onError: (error: any) => {
            toast.error(
                `비밀번호 변경 실패: ${
                    error.response?.data?.message || error.message
                }`
            )
        },
    })
    const handleLogout = () => {
        setToken(null)
        router.push('/main/login')
    }
    const passwordChangeByTokenMutation = (data: IFormField) => {
        if (!token || token === null) {
            toast.error('다시 로그인 해주세요')
            router.push('/main/login')
        }
        passwordChangeMutation.mutate(data)
    }
    return (
        <>
            <div className="font-mono bg-cover shrink-0 bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden justify-center w-screen h-screen">
                <div className="flex relative shrink-0 flex-row-reverse min-w-full h-12">
                    <div className="flex flex-row-reverse text-center h-full w-80">
                        <div className="flex h-full my-2">
                            <Link
                                href="/main/login"
                                className="text-white mx-4 rounded-lg relative"
                                onClick={handleLogout}
                            >
                                로그인 페이지로 이동
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200 items-center flex-col">
                    <div className="flex flex-col items-center w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className="flex flex-col w-130 h-150 my-20">
                            <div className="text-center text-4xl text-white">
                                비밀번호 재설정
                            </div>
                            <div className="flex flex-row w-full h-full items-center">
                                <form
                                    onSubmit={handleSubmit(
                                        passwordChangeByTokenMutation
                                    )}
                                >
                                    <label>
                                        <p className="my-4 text-white">
                                            새로운 비밀번호(6자 이상의 영문,
                                            숫자 조합이여야 합니다)
                                        </p>
                                        <input
                                            {...register('newPassword', {
                                                required:
                                                    '비밀번호를 6자 이상 정확히 입력해주세요.',
                                            })}
                                            type="password"
                                            placeholder="새로운 비밀번호를 입력해주세요"
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                        ></input>
                                    </label>
                                    {errors.newPassword && (
                                        <p className="text-red-500">
                                            {errors.newPassword.message}
                                        </p>
                                    )}
                                    <label>
                                        <p className="my-4 text-white">
                                            새로운 비밀번호 확인
                                        </p>
                                        <input
                                            {...register('checkPassword', {
                                                required:
                                                    '새로운 비밀번호와 동일하게 입력해 주세요',
                                            })}
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                            type="password"
                                            placeholder="새 비밀번호를 한번 더 입력해주세요"
                                        ></input>
                                    </label>
                                    {errors.checkPassword && (
                                        <p className="text-red-500">
                                            {errors.checkPassword.message}
                                        </p>
                                    )}
                                    <button className="font-sans my-10 w-128 rounded-xl bg-white px-4 py-2 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400">
                                        <span className="text-lg text-black">
                                            확인
                                        </span>
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
export default PasswordChangeByToken
