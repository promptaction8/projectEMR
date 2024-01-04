import { Connection } from 'mysql2/promise'
import { createUser } from '@/dao/users'
import { NextApiRequest, NextApiResponse } from 'next'
import { isDuplicatedUserEmailOrName } from '@/dao/users'
import { hash } from 'bcrypt'
// pnpm i bcrypt
// pnpm add -D @types/bcrypt

export const createUserService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { name, email, password } = req.body
    const hashedPassword = await hash(password, 10)
    const isDuplicatedUser = await isDuplicatedUserEmailOrName(
        name,
        email,
        connection
    )

    if (isDuplicatedUser === true) {
        return res
            .status(404)
            .json({ message: '이미 존재하는 이메일 또는 닉네임입니다' })
    }
    const result: any = await createUser({
        name,
        email,
        password: hashedPassword,
        connection,
    })
    if (result.affectedRows !== 1) {
        return res
            .status(400)
            .json({ error: { message: '데이터에 영향을 주지 못함' } })
    }

    // 솔트 라운드 : 해시 함수에 적용되는 추가보안계층 (4~31까지  쓸 수 있고 4는 상대적으로 빠르고 보안이 낮음.31은 보안이 강하지만
    // 계산 비용이 높아짐. 10이 권장 기본값)

    res.status(201).json({ message: '회원가입을 성공적으로 진행하였습니다' })
}
