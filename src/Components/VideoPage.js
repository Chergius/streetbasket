import video from "../video/campoascend.mp4"
export default function VideoPage() {
    return (
        <>
            <div className="max-h-screen flex text-center bg-gradient-to-l from-zinc-900 to-zinc-600 justify-center h-screen ">
                <div className="content-center p-10">
                    <video src={video} autoPlay={true} loop={true} muted></video>
                </div>
            </div>
        </>
    )
}