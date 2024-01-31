import React from 'react';
import perfil from '../assets/images/perfil.jpg';
import youtube from '../assets/icons/youtube.svg';
import github from '../assets/icons/github.svg';
import "../style/PerfilPrincipal.css";

const PerfilPrincipal = () => {
  return (
    <div className='profile-info'>
      <div className='profile-img'>
        <img src={perfil} alt="foto" />
      </div>
      <div className='info'>
        <h1>Yandira Enilse Morales Nina</h1>
        <p>Estudiante de Informática</p>
        <div className='profile-social'>
          <a href="https://www.youtube.com/@yandiraenilsemoralesnina212" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="Logo de YouTube" className='profile-social-img' />
          </a>
          <a href="https://github.com/yandiraMN" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Logo de GitHub" className='profile-social-img' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PerfilPrincipal;
