import { Connection } from 'mysql2/promise'
interface ICreateEmployeeUser {
    id: string // 사용자 ID
    Password: string // 비밀번호
    Email: string // 이메일
    Phone: string // 휴대폰 번호
    Address: string // 주소
    Department: string // 부서명
    Position: string // 직위
    DateOfJoining: string
    connection: Connection // 입사일
}
// 직원 계정 생성
export const createEmployeeAccount = async ({
    id,
    Password,
    Email,
    Phone,
    Address,
    Department,
    Position,
    DateOfJoining,
    connection,
}: ICreateEmployeeUser) => {
    const [rows, fields] = await connection.query(
        `INSERT INTO employeeAccount (id, password, email, phonenumber, address, depart, position, dateofjoining) VALUES ("${id}", "${Password}", "${Email}", "${Phone}", "${Address}", "${Department}", "${Position}", "${DateOfJoining}")`
    )
    return rows
}

//직원 계정 조회
export const getEmployeeAccount = async (connection: Connection) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM employeeAccount`
    )
    return rows
}
//중복된 계정 조회
export const isDuplicated = async (
    id: string,
    connection: Connection
): Promise<any> => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM employeeAccount WHERE id = "${id}"`
    )
    if (rows.length > 0) {
        return rows
    } else {
        return []
    }
}
