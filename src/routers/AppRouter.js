import React, { useContext } from 'react'
import { Route, BrowserRouter, NavLink, Routes } from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'

export const AppRouter = () => {

    const {usuario, setUsuario} = useContext(PruebaContext);

    return (
        <BrowserRouter>

            <header className='header'>

                <nav>

                    <div className='logo'>
                        <h2>Aprendiendo Reat Context</h2>
                    </div>

                    <ul>
                        <li>
                            <NavLink to='/inicio'>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/articulos'>Articulos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/acerca-de'>Acerca de</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto'>Contacto</NavLink>
                        </li>
                        
                            {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                                <>
                                    <li>
                                        <NavLink to='/inicio'>{usuario.nick}</NavLink>
                                    </li>

                                    <li>
                                        <a href='#' onClick={e => {
                                            e.preventDefault();
                                            setUsuario({
                                                nick: null,
                                                nombre: 'Feli',
                                                web: 'Feli Rubio WEB'
                                            });
                                        }}>Cerrar Sesion</a>
                                    </li>
                                </>
                                
                            ):(
                                <li><NavLink to='/login'>Identificate</NavLink></li>
                            )}

                    </ul>
                </nav>
                    
            </header>


            <section className='content'>

                <Routes>
                    <Route path='/use-context' element={<Inicio />} />
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/acerca-de' element={<Acerca />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={
                        <div>
                            <h1>Error esta pagina no existe</h1>
                        </div>
                    } />
                </Routes>

            </section>


            

        </BrowserRouter>
    )
}
