import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";
import MemeCards from "./sections/MemeCards";
import Footer from "./sections/Footer";
import RoadMap from "./sections/RoadMap";
import Tokens from "./sections/Tokens";
import HowToBuy from "./sections/HowToBuy";

function AppLayout() {
  return (
    <>
      <main className="  bg-main bg-[#42e1e7]">
        <Navbar />

        <Hero />
      </main>
      <div className=" h-[100px]  py-4   bg-[#0f7fb6] ">
        <MemeMark />
      </div>

      <div className="bg-main">
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />
        <div className=" bg-[#0f7fb6]">
        <MemeCards />
        </div>
       
      
      
       
      </div>

      <div className="bg-main pb-4">
          <Tokens/>

          <HowToBuy/>
        </div>
    
      <Footer />
    </>
  );
}

export default AppLayout;
