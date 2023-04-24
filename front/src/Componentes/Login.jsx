import React from 'react'
import { Navbar } from './Navbar'
export const Login = () => {
  return (
  <>
  <Navbar/>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white border-radius: 1rem">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">¡Por favor introduce tu nombre y tu contraseña!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Correo electronico</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Contraseña</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">¿Has olvidado tu contraseña?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>


            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="/registrar" class="text-white-50 fw-bold">Registrate</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}
