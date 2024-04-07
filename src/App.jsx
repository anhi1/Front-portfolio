
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/tailwind.css';
import { Link, Route, Routes } from 'react-router-dom';
import Prueba from './Prueba';

function App() {
  return (
    <>
    <Link to="/prueba">Pruebaa</Link>
      <Routes>
        <Route path="/prueba" element={<Prueba/>}/>
      </Routes>
    </>
  )
}

export default App
