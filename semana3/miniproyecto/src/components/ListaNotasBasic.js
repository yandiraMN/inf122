import React, { useState } from 'react';
import NotaBasica from './NotaBasica';
import '../styles/ListaNotas.css';

function ListaNotasBasic() {
    const[notas,setNotas]=useState([])
    const [texto, setTexto] =useState("")
    const addNota = () => {
        setNotas([...notas,texto])
        console.log(notas);
    };

    const onDelete = () => {
        console.log("Eliminar");
    };

    const onEdit = () => {
        console.log("Editar");
    };

    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value = {texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button className='boton' onClick={addNota}>Agregar Nota</button>
            {notas.map((nota) => (
                <NotaBasica
                    nota={nota}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
            ))
        </div>
    );
}

export default ListaNotasBasic;