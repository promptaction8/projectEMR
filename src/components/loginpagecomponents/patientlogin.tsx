function PatientLogin() {
    return (
        <>
            <form>
                <div className="mb-4">
                    <p className="mb-10 font-noto text-2xl">환자 로그인</p>
                    <label className="text-lg font-medium">환자 번호</label>
                    <input
                        type="text"
                        placeholder="환자 고유 번호를 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-lg font-medium">PASSWORD</label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition duration-300"
                    />
                </div>
                <button className="bg-[#0EA5E9] text-white rounded-md h-12 p-3 mt-6 hover:bg-[#0A74B9] transition duration-300 w-full">
                    로그인
                </button>
            </form>
        </>
    )
}
export default PatientLogin
