import React from "react";
import Boton from "./Boton";
import '../style/Perfil.css'
function Perfil(funClick, text){
    const click=(x)=>{
        console.log(x);
      }
    return(
        <div className="main">
            <div className="padre">
                <form>
                        <label>Nombre</label>
                        <input placeholder="nombre"></input>
                        <label>Apellido</label>
                        <input placeholder="apellido"></input>
                        <label>Contraseña</label>
                        <input type="password"placeholder="*******"></input>
                        <Boton funClick={()=>click("Editar")} text={"Editar"}/>
                </form>
            </div>
        </div>
    );
}
export default Perfil;