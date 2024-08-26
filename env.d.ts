declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SECRET_KEY: string
            DATABASE_URL: string
        }
    }
}

export {}
