import type { Connection } from 'mysql2/promise'

//인증코드 조회

export const getCertificate = async (
    emailcode: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM certification WHERE emailcode="${emailcode}"`
    )
    return rows as any
}

// 인증 후 랜덤생성된 비밀번호를 기존 비밀번호 DB에 업데이트
export const passwordChangeByCertificate = async (
    hashedNewPassword: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `UPDATE user SET password = "${hashedNewPassword}"`
    )
    return rows
}
