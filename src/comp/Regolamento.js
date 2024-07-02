export default function Regolamento() {
    return (
        <>
            <div className="max-h-screen bg-gradient-to-l from-zinc-900 to-zinc-600 h-full ">
                <div className="p-10">
                    <div className="h-1/4 flex w-full text-5xl text-white text-l p-4 font-bold content-center">
                      <div className="content-center">REGOLE</div>
                    </div>
                    <div className="w-full text-xs text-orange-500 text-m p-5">
                        <div className="w-full p-2">
                            <ul className="list-disc list-outside ">
                                <li className="p-1">Giocatori in campo nr.3 con massimo 2 riserve</li>
                                <li className="p-1">Gli incontri terminano al raggiungimento dei 21 punti o al termine di 10 minuti di cronometraggio effettivo</li>
                                <li className="p-1">La vincitrice di una parlita riceverà 3 punti per la classifica generale e chi perde 1, in caso di parità arrivati al termine dei 10 minuti entrambe le squadre riceveranno 2 punti</li>
                                <li className="p-1">Il primo possesso verrà deciso con un lancio di una moneta</li>
                                <li className="p-1">Non saranno concessi time-out</li>
                                <li className="p-1">Sono concesse sostituzioni dalla panchina illimitate</li>
                                <li className="p-1">Non ci sarà il classico "chi segna regna" e ad ogni rimbalzo difensivo o un canestro subito ci sarà la libera uscita dall'area da 3.</li>
                                <li className="p-1">Nelle partite finali, qual’ora le due squadre sono pari a fine dei 10 minuti di gioco e non avendo raggiunto i 21 punti si andrà in oltranza aggiungendo altri 2 minuti</li>
                                <li className="p-1">Per tutte le altre regole si farà riferimento al regolamento ufficiale FlP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}