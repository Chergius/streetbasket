import volume from "../img/volume.png"
import background from "../img/logo.png"
// aws s3 sync build/ s3://street-basket per caricare la build
function Home() {
    return (
        <>
        <div className="max-h-screen text-center bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-full ">
            <div className="p-10">
              <div className="flex w-full text-5xl text-white text-l p-4 font-bold content-center">
                <div className="content-center">STREET BASKET</div>
                <div><img className="-z-10 justify-content-center" src={volume} /></div>
              </div>
              <div><img className="-z-10 max-h-full " src={background} /></div>
              <div className="w-full text-5xl text-orange-500 text-s">
                <div><div className="font-bold">LUGLIO</div><div>22-24-26</div></div>
              </div>
            </div>
        </div>
        </>
    )
}

export default Home;