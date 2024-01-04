import { Connection } from 'mysql2/promise'

interface ICreatePost {
    userIdx: number
    title: string
    content: string
    connection: Connection
}
export const createPost = async ({
    userIdx,
    title,
    content,
    connection,
}: ICreatePost) => {
    const [rows, fields] = await connection.query(
        `INSERT INTO post_connect (userIdx, title, content) VALUES (${userIdx}, "${title}", "${content}")`
    )
    return rows
}

interface IReadPost {
    idx: number
    connection: Connection
}
export const readPost = async ({ idx, connection }: IReadPost) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM post_connect WHERE idx=${idx}`
    )
    return rows
}

export const readPosts = async (connection: Connection) => {
    const [rows, fields] = await connection.query(`SELECT * FROM post_connect`)
    return rows
}

export const updatePost = async (
    idx: number,
    title: string,
    content: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `UPDATE post_connect SET title="${title}", content="${content}" WHERE idx=${idx}`
    )
    return rows
}

export const deletePost = async (idx: number, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM post_connect WHERE idx=${idx}`
    )
    return rows
}
