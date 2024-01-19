import React from "react";
import Boton from "./Boton";
import "../style/Login.css";
function Login(funClick, text){
    const click=(x)=>{
        console.log(x);
      }

    return(
        <div className="main">
            <div className="padre">
                <form>
                        <label>Usuario</label>
                        <input placeholder="usuario"></input>
                        <label>Contraseña</label>
                        <input placeholder="contraseña"></input>
                        <Boton funClick={()=>click("Registrar")} text={"Registrar"}/>
                        <Boton funClick={()=>click("Ingresar")} text={"Ingresar"}/>
                </form>
            </div>
        </div>
    );
}
export default Login;