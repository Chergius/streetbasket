import video from "../video/campoascend.mp4"
import logo from "../img/logo.jpg"
import { useRef } from "react";

function Home() {
    const videoRef = useRef();
    return (
        <>
        <div className="relative bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <video className="max-h-screen w-screen -z-10" autoPlay loop muted>
              <source
                src={video} 
                type="video/mp4"
                ref={videoRef}
              />
            </video>
            <div className="absolute bottom-1/2 bg-teal-500/70 m:w-screen">
                <div className="w-auto text-white font-bold sm:text-5xl text-l p-4">Street basket Vol.3</div>
                <div className="w-auto text-white sm:text-3xl text-s">Lorem Ipsum è un testo segnaposto</div>
            </div>
        </div>
        </>
    )
}

export default Home;