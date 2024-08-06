import { atomWithStorage } from 'jotai/utils'

export const tokenAtom = atomWithStorage<string | null>('token', null)
