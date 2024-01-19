import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const click=(x)=>{
        console.log(x);
      }
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Registro</li>
                <li>Perfil</li>
            </ul>
        </div>
    );
}
export default Navbar;