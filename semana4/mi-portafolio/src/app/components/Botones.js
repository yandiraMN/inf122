"use client"
import React from 'react';
import style from './Botones.module.css'; 
import BotonD from '../assets/icons/BotonD.svg';
import Image from 'next/image';
import { download } from '.';
function Botones() {
  const handleDownload = () => {
    download();
  };
  return (
    <div className={style.buttons}>
      <button className={style.btnprimary} onClick={handleDownload}>
        <div className={style.btncontent}>
          <p>Download CV</p>
          <Image src={BotonD} alt='b' width={0} height={0}/>
        </div>
      </button>
      <a className={style.btnsecondary} href="mailto:yandiramorales3118@gmail.com">
        <div className={style.btncontent}>
          <p>Contact me</p>
        </div>
      </a>
    </div>
  );
}

export default Botones;