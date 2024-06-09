import { useState } from "react";
import Header from "./Components/Header";
import Home from './Components/Home';
import Regolamento from './Components/Regolamento';
import Contatti from './Components/Contatti';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <Header/>
        <div className="snap-start h-screen w-screen border-black">
          <Home />
        </div>
        <div className="snap-start h-screen w-screen border-black">
          <Regolamento />
        </div>
        <div className="snap-start h-screen w-screen border-black">
          <Contatti />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
