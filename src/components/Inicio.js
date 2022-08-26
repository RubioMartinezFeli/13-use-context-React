import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

  /* Vamos a acceder a la informacion compartida, haciendo una desetructuración
  para acceder mas facil*/

  const { usuario, setUsuario } = useContext(PruebaContext);

  console.log(usuario);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>Nombre: {usuario.nombre}</p>
      {/*<p>Valor compartido: <strong>{compartida.titulo}</strong></p>*/}
    </div>
  )
}
