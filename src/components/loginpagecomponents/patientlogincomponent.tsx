import PatientLogin from '../loginpagecomponents/patientlogin'

function PatiendLoginComponent() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col border-4 rounded-t-xl border-[#0EA5E9]  w-120 shadow-7xl bg-white">
                    <div className="flex h-20 w-full bg-[#0EA5E9] items-center justify-center rounded-t-lg">
                        <div className="text-4xl text-white font-semibold">
                            LOGIN
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-20">
                        <PatientLogin />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatiendLoginComponent
