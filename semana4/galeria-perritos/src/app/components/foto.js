"use client"
import style from './foto.module.css'
import Image from 'next/image';
import { useState } from 'react';
export default function foto() {
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
        <div>
            <Image src={perrito} alt="perrito" width={500} height={500}  />
        </div>
    );
  }
  