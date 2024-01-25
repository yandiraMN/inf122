import React from 'react';
import youtube from './images/youtube.svg';
import github from './images/github.svg';
import perfil from './images/perfil.jpg';
import Image from 'next/image';
import style from "../components/PerfilPrincipal.module.css"

const PerfilPrincipal = () => {
  return (
    <div className={style['profile-info']}>
      <div className={style.imagenM}>
        <Image src={perfil} alt="foto" />
      </div>
      <div className={style.info}>
        <h2>Yandira Enilse Morales Nina</h2>
        <h3>Estudiante de Informatica</h3>
        <div className={style.imagen}>
          <a href="https://www.youtube.com/@yandiraenilsemoralesnina212" target="_blank" rel="noopener noreferrer">
            <Image src={youtube} alt="Logo de YouTube" />
          </a>
          <a href="https://github.com/yandiraMN" target="_blank" rel="noopener noreferrer">
            <Image src={github} alt="Logo de GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default PerfilPrincipal;