
import { Navbar } from './Navbar'
import { NavLink,Link } from 'react-router-dom'
import '../Estilos/Juegos.css'
import { useContext } from 'react'
import { Contexto } from '../Context/Contexto'
import { FormPost } from './FormPost'
export const PaginaPrincipal = () => {
const {games}=useContext(Contexto)
  
    return (
    <>
 
    <Navbar/>
  
   {/* <div className='mx-5 my-5mx-5 my-5 text-center'> */}
    <h2>Añadidos recientemente</h2>
    {
      games.map((game)=>{
      return <div class="container my-5 mx-auto bg-secondary " key={game.id}>
      <div class="row product-container">
        <div class="col-3">
          <img src={game.url_portada} class="mx-2 my-5 img-fluid" alt="Descripción de la imagen"/>
        </div>
        <div class="col-9 text-center ">
          <h3 class="product-title my-4">{game.nombre}</h3>
          <p class="product-description my-2">{game.descripcion}</p>
          <p class="product-price">Numero de llaves: {game.num_llaves} precio: {game.precio}</p>
          <Link className="nav-link my-4" to={`/infogame/${game.id}`}>Comprar</Link>
        </div>
      </div>
    </div>
        //   return <div class="mx-5 my-5mx-5 my-5">
        
        // <img src={game.url_portada} class="card-img-top" className="imagen" alt="imagen" />
        
        // <div class="card-body bg-secondary">
        //   <h5 class="card-title">{game.nombre}</h5>
        //   <p class="card-text">{game.descripcion}</p>
        //   <p class="card-text"><big>Numero de llaves disponibles: {game.num_llaves}</big></p>
        //   <Link className="nav-link" to={`/infogame/${game.id}`}>Ver mas</Link>
        // </div>
        // </div>
    
        
      })
    }
   
   <FormPost/>
   {/* </div> */}
   
    </>
   
  )
}
