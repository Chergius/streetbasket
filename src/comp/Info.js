import background from "../img/logo2.png"
export default function Info() {
    return (
        <>
            <div className="max-h-screen  bg-gradient-to-l from-zinc-900 to-zinc-600 h-full ">
                <div className="p-10">
                    <div className="h-1/4 flex w-full text-5xl text-white text-l p-4 font-bold content-center text-center">
                      <div className="content-center">INFO</div>
                    </div>
                    <div className="w-full p-2 text-xl text-orange-500">
                        <ul className="list-disc list-outside m-4 text-xl">
                            <li>Squadre composte da 5 persone</li>
                            <li>A ogni squadra viene fornita la nostra maglietta</li>
                            <li>Quota di iscrizione di €50 a squadra </li>
                            <li>Quota di iscrizione di €5 a giocatore per la gara a tre</li>
                        </ul>
                        <div className="w-1/2 p-2 h-full content-center">
                            <img className="-z-10 max-h-full" src={background} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}