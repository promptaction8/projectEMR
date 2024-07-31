import mysql from 'mysql2/promise'

export const createConnection = async () => {
    return await mysql.createConnection(process.env.DATABASE_URL as string)
}
