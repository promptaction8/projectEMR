// 임시 비밀번호를 적고 일치하는지 확인한 후, 새로운 비밀번호를 설정한 후 DB에 저장.
import { useRouter } from 'next/router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface IFormField {
    email: string
    tempPassword: string
    newPassword: string
}
function PasswordChange() {
    const router = useRouter()
    const { register, handleSubmit, watch } = useForm<IFormField>()
    const passwordChangeMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            return await axios.put('/api/passwordcompardandchange')
        },
        onSuccess: () => {
            router.push('/temp/login')
        },
    })
    const passwordChangeMutate = (data: IFormField) => {
        passwordChangeMutation.mutate(data)
    }
    return (
        <>
            <div className="font-mono bg-cover shrink-0  bg-center bg-[url('/images/background2.jpg')] bg-no-repeat overflow-hidden  justify-center w-screen h-screen">
                <div className="flex relative shrink-0 flex-row  min-w-full h-20 border-2 border-solid border-pink-400"></div>
                <div className="flex relative shrink-0 min-w-full my-40 h-200  items-center flex-col">
                    <div className="flex flex-col items-center w-400 h-full rounded-lg relative border-solid border-1 border-transparent bg-opacity-25 backdrop-blur-xl shadow-2xl border-gray-200">
                        <div className=" flex flex-col w-130 h-150 my-20">
                            <div className="text-center text-4xl  text-white">
                                비밀번호 재설정
                            </div>
                            <div className="flex flex-row w-full h-full items-center">
                                <form
                                    onSubmit={handleSubmit((data) =>
                                        passwordChangeMutate(data)
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
                                            임시 비밀번호
                                        </p>
                                        <input
                                            {...register('tempPassword', {
                                                required: true,
                                            })}
                                            type="password"
                                            placeholder="임시비밀번호"
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                        ></input>
                                    </label>

                                    <label>
                                        <p className="my-4 text-white">
                                            새로운 비밀번호
                                        </p>
                                        <input
                                            {...register('newPassword', {
                                                required: true,
                                            })}
                                            className="h-10 w-128 rounded-lg border-2 border-solid border-white bg-transparent pl-2 text-white placeholder:text-white"
                                            type="password"
                                            placeholder="새로운 비밀번호"
                                        ></input>
                                        <button className="font-sans my-10 w-128 rounded-xl bg-white px-4 py-2 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400">
                                            <a className="text-lg text-black">
                                                확인
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
export default PasswordChange
