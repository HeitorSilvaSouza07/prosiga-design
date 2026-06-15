export default function LandingPage(){
    return(
        <header>
            <div>
                <img src=""></img>
                <div className="p-2 gap-2">
                    <button className="bg-[#052659] p-2 w-30">
                        <a href="/dashboard/register" className="text-white">Criar Conta</a>
                    </button>
                    <button className="bg-white border border-[#052659] p-2 w-30 ">
                        <a href="/dashboard/login" className="text-[#052659]">Entrar</a>
                    </button>
                </div>
            </div>
        </header>
    )
}