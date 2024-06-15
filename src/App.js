import Home from './Components/Home';
import Regolamento from './Components/Regolamento';
import Contatti from './Components/Contatti';
import Footer from './Components/Footer';
import VideoPage from './Components/VideoPage';
import VideoPage2 from './Components/VideoPage2';

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-start h-full w-screen border-black">
          <Home />
        </div>
        <div className="snap-start h-full w-screen border-black">
          <VideoPage />
        </div>
        <div className="snap-start h-screen w-screen border-black">
          <Regolamento />
        </div>
        <div className="snap-start h-full w-screen border-black">
          <VideoPage2 />
        </div>
        <div className="snap-start h-screen w-screen border-black">
          <Contatti />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
