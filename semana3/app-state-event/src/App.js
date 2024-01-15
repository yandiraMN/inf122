import { useState } from 'react';
import './App.css';
import Boton from './components/Boton.js'
import Contador from './components/Contador.js';
function App() {
  const [nroClicks, setNumClicks]=useState(0);
  const click =()=>{
    setNumClicks(nroClicks+1);
  }
  const reiniciar=()=>{
    setNumClicks(0)
  }
  /* ceunta los clicks en consola
  const click = () =>{
    console.log("click")
    }
  const reiniciar =()=>{
    console.log("reiniciar")
  }*/
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks}/>
        <div className='contenedor-botones'>
        <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>

      </div>
    </div>
  );
}
export default App;
