import Border from "./components/Border";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import Navbar from "./components/Navbar";
import React, { useState } from "react";


function App() {
  const [toogle, setToogle] = useState(false);

  return (
    <div className="w-full h-auto bg-[#ffffff]">
      <div className="max-w-screen-xl mx-auto " >
        <div className="w-full px-[8px] sm:px-[38px] m:px-[88px]" onClick={()=> toogle ? setToogle(false) : ""}>
          <Navbar toogle={toogle} setToogle={setToogle}/>
          <Hero />
          <Hire />
          <Contact />
          <Border />
          <Footer />
          
        </div>
      </div>
    </div>
  );
}

export default App;
