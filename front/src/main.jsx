import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './Componentes/Rutas'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rutas/>
  </BrowserRouter>
)
