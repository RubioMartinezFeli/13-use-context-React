import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routers/AppRouter';

/* Para compartir ionformación entre los componentes, hay que envolver a AppRouter con
     <PruebaContext.Provider> el value es la prop que se desea compartir con los
     componentes*/

function App() {

  const [usuario, setUsuario] = useState({})

  // Se ejecuta al cargar el componente
  useEffect(()=>{
    let usuario_local = JSON.parse(localStorage.getItem('usuario'));
    setUsuario(usuario_local);
  }, []);

  // Se ejecuta cuando cambie la dependencia usuario
  useEffect(()=>{
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);


  /*const curso = {
    id: 1,
    titulo: 'Master en React',
    contenido: 'Muchas horas de contenido'
  }*/

  return (
    <div className="App">

      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter/>
      </PruebaContext.Provider>
        

    </div>
  );
}

export default App;
