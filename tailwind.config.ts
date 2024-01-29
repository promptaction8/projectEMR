import type { Config } from 'tailwindcss'

interface HeightClasses {
    [key: string]: string
}

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            // 너비 커스텀 클래스 추가
            width: (() => {
                const widthClasses: HeightClasses = {}
                for (let i = 96; i <= 1000; i++) {
                    widthClasses[`${i}`] = `${i / 4}rem` // 각 클래스는 1/4 단위로 증가
                }
                return widthClasses
            })(),

            // 높이 커스텀 클래스 추가
            height: (() => {
                const heightClasses: HeightClasses = {}
                for (let i = 96; i <= 1000; i++) {
                    heightClasses[`${i}`] = `${i / 4}rem` // 각 클래스는 1/4 단위로 증가
                }
                return heightClasses
            })(),
        },
    },
    plugins: [],
}

export default config
