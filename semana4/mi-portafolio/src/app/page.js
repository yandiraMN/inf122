import styles from "./page.module.css";
import React from 'react';
import Botones from './components/Botones';
import Datos from './components/Datos';
import Tabs from './components/Tabs';
import PerfilPrincipal from './components/PerfilPrincipal';
import Imagenes from './components/Imagenes';

export default function Home() {
  return (
    <main className={styles.main}>
      <PerfilPrincipal />
        <Datos />
        <Botones/>
        <Tabs/>
        <Imagenes/>
    </main>
  );
}
