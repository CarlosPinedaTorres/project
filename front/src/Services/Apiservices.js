import axios from 'axios';
export function getGames(){
    return axios.get('http://127.0.0.1:8000/')
    .then (res=>{
       return res.data
    })
}