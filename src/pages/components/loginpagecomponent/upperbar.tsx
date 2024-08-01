import DropdownMenu from './dropdown'

function UpperBar() {
    return (
        <>
            <div className="flex w-full h-16 bg-[#0EA5E9] shadow-md ">
                <div className="flex flex-row items-center justify-center h-full w-40 text-3xl text-white font-bold">
                    <div>EMR</div>
                </div>
                <div className="flex ml-auto  items-center justify-center text-xl w-40 h-full text-white">
                    <DropdownMenu />
                </div>
            </div>
        </>
    )
}
export default UpperBar
