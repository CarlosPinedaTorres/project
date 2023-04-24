import React from 'react'
import { Routes ,Route,Navigate} from 'react-router-dom'
import { Registrar } from './Registrar'
import { Login } from './Login'
import { PaginaPrincipal } from './PaginaPrincipal'
import { InfoGame } from './InfoGame'
import { ProviderContext } from '../Context/ProviderContext'
export const Rutas = () => {
  return (
    <>
  <ProviderContext>
    <Routes>  

    <Route path="/registrar" element={<Registrar/>} /> 
    <Route path="/home" element={<PaginaPrincipal/>} /> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/infogame/:id" element={<InfoGame/>} /> 

    <Route path="/*" element={<Navigate to="/home" />} />  
   
  </Routes>
  </ProviderContext>
  </>

  )
}
