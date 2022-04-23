import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://free.currconv.com/'
})

export default api;