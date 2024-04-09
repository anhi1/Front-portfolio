import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/tailwind.css";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Proyect from "./pages/Proyect";
import About from "./pages/About";

function App() {
  return (
    <>
      <Link to="/proyect">Proyectos</Link>
      <Link to="/about">Sobre mí</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/login">Admin</Link>

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/proyect" element={<Proyect />}/>

      </Routes>
    </>
  );
}

export default App;
