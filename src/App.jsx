import { useState } from "react";
import NavBar from "./components/NavBar";
import Overlay from "./components/Overlay";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => {
      const newNav = !prevNav;
      document.body.style.overflow = newNav ? "hidden" : "auto";
      return newNav;
    });
  };

  return (
    <div className="2xl:mx-auto 2xl:max-w-[1540px] 2xl:overflow-hidden">
      <Overlay nav={nav} />
      <NavBar handleNav={handleNav} nav={nav} />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
