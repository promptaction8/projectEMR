
import PatientLogin from '../patientLogin'

function PatientLoginPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col border-2 rounded-md border-blue-600  w-120 shadow-7xl bg-white p-10">
                    <div className="flex h-16 w-full items-center justify-center">
                        <div className="text-4xl text-blue-600 font-semibold">
                            LOGIN
                        </div>
                    </div>
                    <div className="flex flex-grow flex-col p-6 items-center justify-center">
                        <PatientLogin />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientLoginPage
