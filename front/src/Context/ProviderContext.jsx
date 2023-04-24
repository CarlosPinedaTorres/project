import { Contexto } from "./Contexto";
import React, { useEffect, useState } from 'react'
import { getGames } from '../Services/Apiservices'
export const ProviderContext = ({children}) => {
    const [games, setgames] = useState([])
    useEffect(() => {
      let mount=true
      getGames()
      .then(res=>{
          console.log('res',res)
          setgames(res)
          return ()=>mount=false
      })
    
      
    }, [])
  return (
    <Contexto.Provider value={{games}}>
        {children}
    </Contexto.Provider>
   
  )
}
