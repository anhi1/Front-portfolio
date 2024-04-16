import "./styles/tailwind.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ProjectProvider } from "./context/ProjectsContext";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProjectFormPage from "./pages/ProjectFormPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <AuthProvider>
    <ProjectProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
    
        
        <Route path="/add-project" element={<ProjectFormPage />} />
        <Route path="/projects/:id" element={<ProjectFormPage />} />
        
      </Routes>
    </BrowserRouter>
    </ProjectProvider>
    </AuthProvider>
  );
}

export default App;
