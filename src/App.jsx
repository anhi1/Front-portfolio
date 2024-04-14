import "./styles/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { ProjectProvider } from "./context/ProjectsContext";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProjectFormPage from "./pages/ProjectFormPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <ProjectProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
       

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/add-project" element={<ProjectFormPage />} />
        <Route path="/projects/:id" element={<ProjectFormPage />} />
        
      </Routes>
    </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
