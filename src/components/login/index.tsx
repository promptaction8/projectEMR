import React, { useState } from 'react';
import { LoginState } from './loginState';

const LoginF: React.FC = () => {
    const [isEmployeeLogin, setIsEmployeeLogin] = useState(true);

    const handleTabClick = (isEmployee: boolean) => {
        setIsEmployeeLogin(isEmployee);
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center dark:text-white'>
            <div className='flex flex-col justify-center items-center w-120 '>
                <span className='mb-20 text-7xl font-bold text-[#0EA5E9]'>Login</span>
                {/* 그라데이션 밑줄 추가 */}
                <div className='left-0 right-0 bottom-0 mb-60'>
                    <div className='h-1 w-120  bg-gradient-to-r from-transparent via-blue-600 to-transparent'></div>
                </div>
                <div className='flex flex-row gap-36'>

                <button
                className='text-2xl font-bold text-[#0EA5E9] relative mb-4 mt-10 border-4 border-double border-[#0EA5E9] p-5 rounded-md'
                onClick={() => handleTabClick(true)} style={{ fontWeight: isEmployeeLogin ? 'bold'  : 'normal' }}>
                    직원 로그인
                </button>
                <button
                className='mt-10 text-2xl font-bold text-[#0EA5E9] relative mb-4 border-4 border-double border-[#0EA5E9] p-5 rounded-md'
                onClick={() => handleTabClick(false)} style={{ fontWeight: !isEmployeeLogin ? 'bold' : 'normal' }}>
                    환자 로그인
                </button>
                </div>

            </div>
            <LoginState isEmployeeLogin={isEmployeeLogin}/>
        </div>
    );
};

export default LoginF;