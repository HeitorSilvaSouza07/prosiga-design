
export default function LandingPage(){

    return(
        <div>
            <div className="flex flex-row justify-between items-center p-4">
                <div>
                    <img src=""></img>
                </div>
                <div className="p-2 gap-2 ">
                    <button className="bg-[#052659] p-2 w-40 mr-5 hover:bg-white transition all hover:border hover:border-[#052659]">
                        <a href="/dashboard/register" className="text-white hover:text-[#052659]">Criar Conta</a>
                    </button>
                    <button className="bg-white border border-[#052659] p-2 w-40 hover:bg-[#052659] transition all">
                        <a href="/dashboard/login" className="text-[#052659] hover:text-white">Entrar</a>
                    </button>
                </div>
            </div>
        </div>
    )
}