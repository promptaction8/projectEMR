import React, { useState } from 'react';
import { LoginState } from './loginState';

const LoginF: React.FC = () => {
    const [isEmployeeLogin, setIsEmployeeLogin] = useState(true);

    const handleTabClick = (isEmployee: boolean) => {
        setIsEmployeeLogin(isEmployee);
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center dark:text-white '>
<div className='border-2 border-[#0ea7e9] border-solid p-40 rounded-lg'>
<div className='w-120 flex flex-col justify-center items-center '>
                <span className='text-5xl font-bold text-[#0EA5E9] mb-20'>Login</span>
                {/* 그라데이션 밑줄 추가 */}
                <div className='left-0 right-0 bottom-0 mb-20'>
                    <div className='h-1 w-120  bg-gradient-to-r from-transparent via-blue-600 to-transparent'></div>
                </div>

                <div className='flex flex-row justify-between w-full'>
                    <button
                className=' text-2xl font-bold text-[#0EA5E9] relative  mt-10 border-t-2 border-l-2 border-r-2 border-[#0EA5E9] p-8 rounded-t-md'
                onClick={() => handleTabClick(true)} style={{ fontWeight: isEmployeeLogin ? 'bold'  : 'normal' }}>
                    직원 로그인
                    </button>
                    <button
                className='mt-10 text-2xl font-bold text-[#0EA5E9] relative  border-t-2 border-l-2 border-r-2 border-[#0EA5E9] p-8 rounded-t-md'
                onClick={() => handleTabClick(false)} style={{ fontWeight: !isEmployeeLogin ? 'bold' : 'normal' }}>
                    환자 로그인
                    </button>
                </div>

            </div>
            <LoginState isEmployeeLogin={isEmployeeLogin}/>
        </div>
</div>

    );
}


export default LoginF;