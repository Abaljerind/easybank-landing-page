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
    setNav((prevNav) => !prevNav);
  };

  return (
    <>
      <Overlay nav={nav} />
      <NavBar handleNav={handleNav} nav={nav} />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
