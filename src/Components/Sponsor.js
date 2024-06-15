
import sponsor1 from "../img/sponsor1.jpg"
import sponsor2 from "../img/sponsor2.jpg"
export default function Sponsor() {
    return (
        <>
            <div className="max-h-screen text-center bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-full ">
                <div className="p-10">
                    <div className="h-1/4 flex w-full text-5xl text-white text-l p-4 font-bold content-center">
                      <div className="content-center">SPONSOR</div>
                    </div>
                    <div className="w-full flex text-xl text-orange-500 text-s p-5">
                        <div id="default-carousel" className="relative w-full" data-carousel="slide">
                            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <div>sgrf
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}