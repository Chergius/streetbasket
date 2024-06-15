import background from "../img/logo2.png"
export default function Info() {
    return (
        <>
            <div className="max-h-screen text-center bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-full ">
                <div className="p-10">
                    <div className="h-1/4 flex w-full text-5xl text-white text-l p-4 font-bold content-center">
                      <div className="content-center">INFO</div>
                    </div>
                    <div className="w-full flex text-xl text-orange-500 text-s p-5">
                        <div className="w-1/4 p-2">
                            <img className="-z-10 max-h-full" src={background} />
                        </div>
                        <div className="w-3/4 p-2">
                            <ul className="list-disc list-outside ">
                                <li>Squadre composte da 5 persone</li>
                                <li>A ogni squadra viene fornita la nostra maglietta</li>
                                <li>Quota di iscrizione di €50 a squadra </li>
                                <li>Quota di iscrizione di €5 a giocatore per la gara a tre</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}