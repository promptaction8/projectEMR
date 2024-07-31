import type { Config } from 'tailwindcss'

interface CustomClasses {
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
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                '4xl': '0 40px 70px -20px rgba(0, 0, 0, 0.3)',
                '5xl': '0 45px 80px -25px rgba(0, 0, 0, 0.3)',
                '6xl': '0 50px 90px -30px rgba(0, 0, 0, 0.3)',
                '7xl': '0 60px 100px -35px rgba(0, 0, 0, 0.5)', // 더 진한 그림자
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            // 너비 커스텀 클래스 추가
            width: (() => {
                const widthClasses: CustomClasses = {}
                for (let i = 96; i <= 1000; i++) {
                    widthClasses[`${i}`] = `${i / 4}rem` // 1/4 단위로 증가
                }
                return widthClasses
            })(),

            // 높이 커스텀 클래스 추가
            height: (() => {
                const heightClasses: CustomClasses = {}
                for (let i = 96; i <= 1000; i++) {
                    heightClasses[`${i}`] = `${i / 4}rem` // 1/4 단위로 증가
                }
                return heightClasses
            })(),

            // 폰트 패밀리 추가
            fontFamily: {
                noto: ['Noto Sans KR', 'sans-serif'],
                nanum: ['Nanum Gothic', 'sans-serif'],
            },

            // 색상 추가
            colors: {
                primary: '#1DA1F2',
                secondary: '#14171A',
                accent: '#F45D22',
            },

            // 여백(margin) 커스텀 클래스 추가
            margin: (() => {
                const marginClasses: CustomClasses = {}
                for (let i = 0; i <= 100; i++) {
                    marginClasses[`${i}`] = `${i}px`
                }
                return marginClasses
            })(),

            // 패딩(padding) 커스텀 클래스 추가
            padding: (() => {
                const paddingClasses: CustomClasses = {}
                for (let i = 0; i <= 100; i++) {
                    paddingClasses[`${i}`] = `${i}px`
                }
                return paddingClasses
            })(),
        },
    },
    plugins: [],
}

export default config
