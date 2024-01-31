import React from 'react';
import "../style/Botones.css"; 
import BotonD from '../assets/icons/BotonD.svg';
function Botones() {
  const download = () => {
    console.log('Descargando');
  };
  return (
    <div className="buttons">
      <button className="btn-primary" onClick={download}>
        <div className="btn-content">
          <p>Download CV</p>
          <img src={BotonD} alt='b'/>
        </div>
      </button>
      <a className="btn-secondary" href="mailto:yandiramorales3118@gmail.com">
        <div className="btn-content">
          <p>Contact me</p>
        </div>
      </a>
    </div>
  );
}
export default Botones;