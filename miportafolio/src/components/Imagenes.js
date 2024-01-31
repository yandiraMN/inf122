import React from 'react';
import '../style/Imagenes.css';
import bussiness_man from '../assets/images/bussiness_man.png';
import issima_page from '../assets/images/issima_page.png';
import kitchen from '../assets/images/kitchen.jpeg';
import pictures_wall from '../assets/images/pictures_wall.jpeg';
import mobile_app from '../assets/images/mobile_app.png';

const Imagenes = () => {
  return (
    <div className="project-container">
      <div className="content-card-img">
        <img className="image" src={bussiness_man} alt="SmarterTrading411" />
        <div className="content-card-img-overlay"></div>
        <div className="content-card-img-detail">
          <p className="title">SmarterTrading411</p>
          <p className="detail">Landing page of SmarterTrading411 created using WordPress</p>
          <button className="btn">
            <img src="./assets/icons/link.svg" alt="link" />
          </button>
        </div>
      </div>
      <div className="content-card-img">
        <img className="image" src={bussiness_man} alt="Business Man" />
        <div className="content-card-img-overlay"></div>
      </div>
      <div className="content-card-img">
        <img className="image grayscale" src={pictures_wall} alt="Pictures Wall" />
        <div className="content-card-img-overlay"></div>
      </div>
      <div className="content-card-img">
        <img className="image" src={kitchen} alt="Kitchen" />
        <div className="content-card-img-overlay"></div>
      </div>
      <div className="content-card-img">
        <img className="image" src={mobile_app} alt="Mobile App" />
        <div className="content-card-img-overlay"></div>
      </div>
      <div className="content-card-img">
        <img className="image grayscale" src={issima_page} alt="Issima Page" />
        <div className="content-card-img-overlay"></div>
      </div>
    </div>
  );
};

export default Imagenes;
