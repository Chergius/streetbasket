import Home from './Components/Home';
import Regolamento from './Components/Regolamento';
import Contatti from './Components/Contatti';
import Footer from './Components/Footer';
import VideoPage from './Components/VideoPage';
import VideoPage2 from './Components/VideoPage2';
import Sponsor from './Components/Sponsor';
import Info from './Components/Info';

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-start h-full border-black">
          <Home />
        </div>
        <div className="snap-start h-full border-black">
          <VideoPage2 />
        </div>
        <div className="snap-start h-screen border-black">
          <Info />
        </div>
        <div className="snap-start h-screen border-black">
          <Regolamento />
        </div>
        <div className="snap-start h-full border-black">
          <VideoPage />
        </div>
        <div className="snap-start h-screen border-black">
          <Contatti />
        </div>
        <div className="snap-start h-screen border-black">
          <Sponsor />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
