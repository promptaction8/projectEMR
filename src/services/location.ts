import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUser } from '@/dao/users'
import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { SECRET_KEY } from '@/constants'

export const locationService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {}
