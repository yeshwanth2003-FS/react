
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Help" element={<Help/>} />
      </Routes>
    </>
  );
};

export default App;