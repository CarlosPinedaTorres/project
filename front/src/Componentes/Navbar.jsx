import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div class="w-100">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GameMasters</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre Nostros</a>
          </li>
        
        
    
      
    
        </ul>
        
      </div>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <NavLink className="nav-link" to='/login'>Login</NavLink>
      </li>
      <li class="nav-item">
       
      <NavLink className="nav-link" to='/registrar'>Registrar</NavLink>
      </li>
    </ul>
    </div>
  </nav>
  </div>
  )
}
