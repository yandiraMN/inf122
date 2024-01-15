import { useState } from 'react';
import './App.css';
import Boton from './components/Boton.js'
import Contador from './components/Contador.js';
function App() {
  const [nroClicks, setNumClicks]=useState(0);
  /*const click =()=>{
    setNumClicks(nroClicks+1);
  }*/
  const reiniciar=()=>{
    setNumClicks(0)
  }
  const clikmas3=()=>{
    setNumClicks(nroClicks+3)
  }
  const clikmenos3=()=>{
    setNumClicks(nroClicks-3)
  }
  const clikmenos1=()=>{
    setNumClicks(nroClicks-1)
  }
  const clikmas1=()=>{
    setNumClicks(nroClicks+1)
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
        <div className='contenedor-botones-numeros'>
        <div className='contenedor-botones'>
        <Boton texto="-3" esBotonClick={true}
            funcionClick={clikmenos3} />
        <Boton texto="+3" esBotonClick={true}
            funcionClick={clikmas3} />
            <Boton texto="-1" esBotonClick={true}
            funcionClick={clikmenos1} />
        <Boton texto="+1" esBotonClick={true}
            funcionClick={clikmas1} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
        </div>

      </div>
    </div>
  );
}
export default App;
