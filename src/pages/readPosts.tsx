import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { tokenAtom } from '@/atoms/token'
import { useRouter } from 'next/router'
import { deletePost } from './../dao/posts'
import { toast } from 'react-toastify'

interface IFormData {
    idx: number
    userIdx: number
    title: string
    content: string
    createdAt: string
    updatedAt: string
}

function ReadPosts() {
    toast('🦄 Wow so easy!')
    const router = useRouter()
    const queryClient = useQueryClient()
    const [token] = useAtom(tokenAtom)
    const { data } = useQuery({
        queryKey: ['readPosts'],
        queryFn: () => axios.get('/api/posts'),
        refetchInterval: false,
    })

    const deletePostMutation = useMutation({
        mutationFn: async (post: IFormData) => {
            return await axios.delete(`/api/posts/${post.idx}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['readPost'] })
        },
    })

    if (!data) {
        return <p>로딩중입니다..</p>
    }
    const deletePost = async (post: IFormData) => {
        await deletePostMutation.mutate(post)
    }
    const handleUpdatePage = (post: IFormData) => {
        router.push(`/updatePost/${post.idx}`)
    }
    const posts = data.data.posts.map((post: IFormData) => {
        return (
            <div key={post.idx}>
                <div>{post.title}</div>
                <div>{post.content}</div>
                <div>{post.createdAt}</div>
                <button onClick={() => handleUpdatePage(post)}>
                    게시글 수정
                </button>
                <button onClick={() => deletePost(post)}>게시글 삭제</button>
            </div>
        )
    })

    return (
        <>
            <p>전체 게시글</p>
            <div className="w-125 h-300 border-2 border-solid border-pink-400">
                {posts}
            </div>
        </>
    )
}

export default ReadPosts
