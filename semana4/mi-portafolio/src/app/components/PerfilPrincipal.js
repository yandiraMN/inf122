"use client"
import React from 'react';
import perfil from '../assets/images/perfil.jpg';
import youtube from '../assets/icons/youtube.svg';
import github from '../assets/icons/github.svg';
import styles from "./PerfilPrincipal.module.css";
import Image from 'next/image';

const PerfilPrincipal = () => {
  return (
    <div className={styles.profileinfo}>
      <div className={styles.profileimg}>
        <Image src={perfil} alt="foto" />
      </div>
      <div className={styles.info}>
        <h1>Yandira Enilse Morales Nina</h1>
        <br></br>
        <p>Estudiante de Informática</p>
        <div className={styles.profilesocial}>
          <a href="https://www.youtube.com/@yandiraenilsemoralesnina212" target="_blank" rel="noopener noreferrer">
            <Image src={youtube} alt="Logo de YouTube" className={styles.profilesocialimg} width={0} height={0}/>
          </a>
          <a href="https://github.com/yandiraMN" target="_blank" rel="noopener noreferrer">
            <Image src={github} alt="Logo de GitHub" className={styles.profilesocialimg} width={0} height={0} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default PerfilPrincipal;