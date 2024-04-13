import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4001/api',// enviar solicitudes HTTP al servidor
    withCredentials: true // Habilita el intercambio de cookies entre el frontend y el backend.
})

export default instance

