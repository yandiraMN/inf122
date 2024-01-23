import React from "react";
import style from './Boton.module.css';
function Boton({texto, esBotonClick, funcionClick}){
    return(
        <button className={esBotonClick ? style["boton-click"] : style["boton-reiniciar"]}
        onClick={funcionClick}>
            {texto}
            </button>
    )
    }
export default Boton;