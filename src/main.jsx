import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { co2 } from '@tgwf/co2';


// Crear una instancia de CO2
const swd = new co2();
// O puedes declarar explícitamente el modelo
const declaredSwd = new co2({ model: "swd" });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
