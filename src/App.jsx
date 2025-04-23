import { useState } from "react";
import NavBar from "./components/NavBar";
import Overlay from "./components/Overlay";

function App() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <div className="lg:px-20">
      <Overlay nav={nav} />
      <NavBar handleNav={handleNav} nav={nav} />
    </div>
  );
}

export default App;
