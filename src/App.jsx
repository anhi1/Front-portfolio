import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/tailwind.css";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Link to="/contact">Contacto</Link>
      <Link to="/register">Registro</Link>
      <Link to="/login">Login</Link>

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
