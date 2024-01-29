import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { createPost } from './../dao/posts'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { tokenAtom } from '@/atoms/token'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

interface IFormField {
    title: string
    content: string
}

function CreatePost() {
    const { register, handleSubmit } = useForm<IFormField>()
    const router = useRouter()
    const [token] = useAtom(tokenAtom)
    const createPostMutation = useMutation({
        mutationFn: (data: IFormField) => {
            return axios.post('/api/posts', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        },
        onSuccess: () => router.push('/readPosts'),
        onError: (error) => {
            console.error('게시물 생성 에러', error)
        },
    })
    const { isError } = useQuery({
        queryKey: ['auth-test'],
        queryFn: () =>
            axios.get('/api/auth-test', {
                headers: { Authorization: `Bearer ${token}` },
            }),
        refetchInterval: false,
        enabled: router.isReady,
    })
    useEffect(() => {
        if (isError === true) {
            toast.error('로그인이 필요합니다')
            router.push('/login')
        }
    }, [isError, router])
    const createPost = (data: IFormField) => {
        createPostMutation.mutate(data)
    return (
        <>
            <p>게시글 작성</p>
            <form onSubmit={handleSubmit((data) => createPost(data))}>
                <div>
                    <input
                        {...register('title', { required: true })}
                        placeholder="title"
                    ></input>
                </div>
                <div>
                    <textarea
                        {...register('content', { required: true })}
                        placeholder="content"
                    ></textarea>
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default CreatePost
