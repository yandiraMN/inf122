import React from 'react';
import './App.css';
import Botones from './components/Botones';
import Datos from './components/Datos';
import Tabs from './components/Tabs';
import PerfilPrincipal from './components/PerfilPrincipal';
import Imagenes from './components/Imagenes';
function App() {
  return (
      <div className="App">
        <PerfilPrincipal />
        <Datos />
        <Botones/>
        <Tabs/>
        <Imagenes/>
      </div>
  );
}
export default App;