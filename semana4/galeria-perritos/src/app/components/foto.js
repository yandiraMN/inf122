"use client"
import style from './foto.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Foto() {
    const [perrito, setPerrito]=useState ("/vercel.svg");   {/*estado en react*/}
    const [estado, setEstado]=useState ("esperando");
    const url = "https://dog.ceo/api/breeds/image/random";
    useEffect(() => {          {/*el useefect espera que algo se modifique*/ }
        fetch(url)
            .then(res => res.json())
            .then(data => {setPerrito(data.message), setEstado(data.status)
            });
    }, [])
    return (
        <div className={style.galeria}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perrito" width={250} height={250}  />
        </div>
    );
  }
  