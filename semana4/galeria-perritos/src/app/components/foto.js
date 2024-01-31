"use client"
import style from './foto.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Foto() {
    const [perrito, setPerrito]=useState ("/vercel.svg");  
    const [estado, setEstado]=useState ("pokemon");
    const [habilidad, setHabilidad]=useState("habilidad")
    const url = "https://pokeapi.co/api/v2/pokemon/charmander";
    useEffect(() => {         
        fetch(url)
            .then(res => res.json())
            .then(data => {setPerrito(data.sprites.front_default), 
                        setEstado(data.species.name), 
                        setHabilidad(data.abilities[1].ability.name)
            });
    }, [])
    return (
        <div className={style.galeria}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perrito" width={250} height={250}  />
            <h1>{habilidad}</h1>
        </div>
    );
  }