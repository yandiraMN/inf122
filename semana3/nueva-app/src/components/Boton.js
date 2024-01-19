import React from "react";
import '../style/Boton.css'
function Boton(props) {
    const { funClick, text } = props;
    return (
        <button onClick={funClick}>{text}</button>
    );
}
export default Boton;
