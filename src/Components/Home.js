import video from "../video/campoascend.mp4"
import background from "../img/home.png"
import { useRef } from "react";

function Home() {
    const videoRef = useRef();
    return (
        <>
        <div className="bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-full grid grid-cols-1 gap-4 content-center ">
          <div>
            <img className="object-cover" src={background} />
          </div>
          <div className="w-full sm:text-5xl text-orange-600 text-l p-4">Luglio 22-24-26</div>
          <div className="w-full sm:text-3xl text-orange-500 text-s">Oratorio San Sebastiano, Lumezzane</div>
        </div>
        </>
    )
}

export default Home;