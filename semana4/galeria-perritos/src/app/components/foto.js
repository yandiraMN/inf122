"use client"
import style from './foto.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Foto() {
    const [perrito, setPerrito]=useState ("/vercel.svg");   {/*estado*/}
    const url = "https://dog.ceo/api/breeds/image/random";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPerrito(data.message)
            })
    }, [])
    return (
        <div className={style.galeria}>
            <Image src={perrito} alt="perrito" width={250} height={250}  />
        </div>
    );
  }
  