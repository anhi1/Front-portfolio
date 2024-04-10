import "./styles/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Proyect from "./pages/Proyect";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProyectFormPage from "./pages/ProyectFormPage";
import ProyectsPage from "./pages/ProyectsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyect" element={<Proyect />} />

        <Route path="/proyects" element={<ProyectsPage />} />
        <Route path="/add-proyect" element={<ProyectFormPage />} />
        <Route path="/proyects/:id" element={<ProyectFormPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
