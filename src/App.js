import Home from './comp/Home';
import Regolamento from './comp/Regolamento';
import Contatti from './comp/Contatti';
import Footer from './comp/Footer';
import VideoPage from './comp/VideoPage';
import VideoPage2 from './comp/VideoPage2';
import Sponsor from './comp/Sponsor';
import Info from './comp/Info';

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
