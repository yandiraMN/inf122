import React from 'react';
import styles from './Imagenes.module.css';
import bussiness_man from '../assets/images/bussiness_man.png';
import issima_page from '../assets/images/issima_page.png';
import kitchen from '../assets/images/kitchen.jpeg';
import pictures_wall from '../assets/images/pictures_wall.jpeg';
import mobile_app from '../assets/images/mobile_app.png';
import BotonD from '../assets/icons/BotonD.svg';
import Image from 'next/image';

const Imagenes = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.contentCardImg}>
        <Image className={styles.image} src={bussiness_man} alt="SmarterTrading411" />
        <div className={styles.contentCardImgOverlay}></div>
        <div className={styles.contentCardImgDetail}>
          <p className={styles.title}>SmarterTrading411</p>
          <p className={styles.detail}>Landing page of SmarterTrading411 created using WordPress</p>
          <button className={styles.btn}>
            <Image src={BotonD} alt="link" width={38} height={38} />
          </button>
        </div>
      </div>
      <div className={styles.contentCardImg}>
        <Image className={styles.image} src={bussiness_man} alt="Business Man" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <Image className={`${styles.image} ${styles.grayscale}`} src={pictures_wall} alt="Pictures Wall" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <Image className={styles.image} src={kitchen} alt="Kitchen" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <Image className={styles.image} src={mobile_app} alt="Mobile App" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <Image className={`${styles.image} ${styles.grayscale}`} src={issima_page} alt="Issima Page" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
    </div>
  );
};export default Imagenes;
