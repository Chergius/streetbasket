
export default function Contatti() {
    return (
        <>
        <div className="max-h-screen text-center bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-full ">
            <div className="p-10">
                <div className="h-1/2">
                    <div className="h-1/4 flex w-full text-white text-l p-4 font-bold">
                      <div className="content-center text-5xl">CONTATTI</div>
                    </div>
                    <div className="w-full text-left text-xl text-orange-500 text-s p-5">
                        <div className="flex w-full mb-2"><div className="w-1/2 mr-2 text-2xl font-bold">PELL</div><div className="w-1/2 text-white text-xl">328-101-9923</div></div>
                        <div className="flex w-full"><div className="w-1/2 mr-2 text-2xl font-bold">BORDO</div><div className="w-1/2 text-white text-xl">334-805-9942</div></div>
                    </div>
                </div>
                <div className="content-center">
                    <div className="h-1/2 flex w-full text-5xl text-white text-l p-4 font-bold">
                      <div className="content-center">LUOGO</div>
                    </div>
                    <div className="w-full text-left flex text-xl text-orange-500 text-s p-5 font-bold">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.975885308937!2d10.264079975186123!3d45.65130602093678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478178be27625a6f%3A0x3c9b0f7992d7f15d!2sOratorio%20Centro%20Giovanile%20San%20Sebastiano!5e0!3m2!1sit!2sit!4v1718458241198!5m2!1sit!2sit"></iframe>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}