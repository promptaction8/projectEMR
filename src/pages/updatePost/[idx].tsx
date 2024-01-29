import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { createPost } from '../../dao/posts'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { tokenAtom } from '@/atoms/token'
import { updatePost } from '@/dao/posts'
import { error } from 'console'
import { useEffect } from 'react'
import { title } from 'process'

interface IFormField {
    title: string
    content: string
}
// useQuery : get method는 use query만 씀 (데이터를 가져오는거)
// useMutation : 그 외의 method에 쓰임 (데이터를 보내는거)

function UpdatePost() {
    const { register, handleSubmit, setValue } = useForm<IFormField>()
    const router = useRouter()
    const queryClient = useQueryClient()
    const [token] = useAtom(tokenAtom)
    const { data } = useQuery({
        queryKey: ['readPost'],
        queryFn: () => axios.get(`/api/posts/${router.query.idx}`),
        refetchInterval: false,
        enabled: router.isReady,
    })
    const updatePostMutation = useMutation({
        mutationFn: async (data: IFormField) => {
            return await axios.put(`/api/posts/${router.query.idx}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        },
        onSuccess: () => {
            router.push('/readPosts'),
                queryClient.invalidateQueries({ queryKey: ['readPost'] })
        },
        onError: (error) => {
            console.error('게시물 업데이트 오류', error)
        },
    })
    useEffect(() => {
        if (data === undefined) return
        setValue('title', data.data.post.title)
        setValue('content', data.data.post.content)
    }, [data, setValue])

    const updatePost = async (data: IFormField) => {
        await updatePostMutation.mutate(data)
    }
    return (
        <>
            <p>게시물 수정</p>
            <form onSubmit={handleSubmit((data) => updatePost(data))}>
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
                <button type="submit">update</button>
            </form>
        </>
    )
}

export default UpdatePost
