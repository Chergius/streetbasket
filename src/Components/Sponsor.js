
import sponsor1 from "../img/sponsors/sponsor1.jpg"
import sponsor2 from "../img/sponsors/sponsor2.jpg"
import sponsor3 from "../img/sponsors/sponsor3.png"
import sponsor4 from "../img/sponsors/sponsor4.png"
import sponsor5 from "../img/sponsors/sponsor5.jpg"
import sponsor6 from "../img/sponsors/sponsor6.jpg"
import sponsor7 from "../img/sponsors/sponsor7.jpg"
import sponsor8 from "../img/sponsors/sponsor8.png"
import sponsor9 from "../img/sponsors/sponsor9.png"

export default function Sponsor() {
    return (
        <>
            <div className="max-h-screen text-center bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-full ">
                <div className="p-10">
                    <div className="h-1/4 flex w-full text-5xl text-white text-l p-4 font-bold content-center">
                      <div className="content-center">SPONSOR</div>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={sponsor1} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={sponsor2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={sponsor3} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={sponsor4} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg mb-5" src={sponsor5} alt="" />
                        <img class="h-auto max-w-full rounded-lg" src={sponsor7} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-1/2 rounded-lg" src={sponsor6} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-1/2 rounded-lg" src={sponsor8} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={sponsor9} alt="" />
                    </div>
                </div>
                <div>
                    <div className="text-orange-500 h-1/4 flex w-full text-xl text-l p-4 font-bold content-center">
                      <div className="content-center">Grazie a tutti gli sponsor per aver reso possibile la realizzazione dell'evento!</div>
                    </div>
                </div>
            </div>
        </>
    )
}