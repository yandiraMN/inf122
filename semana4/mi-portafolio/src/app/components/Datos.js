"use client"
import React from 'react';
import styles from './Datos.module.css';
import { useState } from 'react';

const Datos = () => {
  return (
    <div className={styles.facts}>
      <div className={styles.factItem}>
        <h2>7</h2>
        <p>Years of work experience</p>
      </div>
      <div className={styles.factItem}>
        <h2>50+</h2>
        <p>Completed projects</p>
      </div>
      <div className={styles.factItem}>
        <h2>20+</h2>
        <p>Satisfied customers</p>
      </div>
    </div>
  );
}

export default Datos;
