import React from 'react'
import { Navbar } from './Navbar'
export const Registrar = () => {
  return (
    <>
    <Navbar/>
   <div class="container mt-5 bg-dark ">
        <div class="row">
            <div class="col-md-6 offset-md-3 ">
                <h2 class="text-light">Registro</h2>
                <form>
                    <div class="mb-3">
                        <label for="nombre" class="form-label text-light">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required/>
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label text-light">Apellido</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" required/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label text-light">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" name="email" required/>
                    </div>
                    <div class="mb-3">
                        <label for="confirm-password" class="form-label text-light">Numero de teléfono</label>
                        <input type="password" class="form-control" id="confirm-password" name="confirm-password" required/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label text-light">Contraseña</label>
                        <input type="password" class="form-control" id="password" name="password" required/>
                    </div>
                    <div class="mb-3">
                        <label for="confirm-password" class="form-label text-light">Confirmar contraseña</label>
                        <input type="password" class="form-control" id="confirm-password" name="confirm-password" required/>
                    </div>
                    <button type="button" class="btn btn-outline-light text-light">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
  </>


  )
}
