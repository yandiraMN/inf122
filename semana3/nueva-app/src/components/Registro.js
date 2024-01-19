import React from "react";
import Boton from "./Boton";
import "../style/Registro.css";
function Login(funClick, text){
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
                        <input placeholder="contraseña"></input>
                        <Boton funClick={()=>click("Registrar")} text={"Registrar"}/>
                </form>
            </div>    
        </div>
    );
}
export default Login;