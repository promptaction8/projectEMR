import type { Connection } from 'mysql2/promise'

export const getUser = async (email: string, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM user WHERE email="${email}"`
    )

    return rows
}

interface ICreateUser {
    name: string
    email: string
    password: string
    connection: Connection
}

export const createUser = async ({
    name,
    email,
    password,
    connection,
}: ICreateUser) => {
    const [rows, fields] = await connection.query(
        `INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${password}")`
    )
    return rows
}

export const isDuplicatedUserEmailOrName = async (
    name: string,
    email: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM user WHERE email="${email}" OR name="${name}"`
    )
    if (rows.length >= 1) {
        return true
    }
    return false
}
