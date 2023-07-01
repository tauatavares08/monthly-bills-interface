import axios from 'axios'

 const apiCubo = axios.create({
    baseURL:'https://project-monthly-bills-production.up.railway.app/'
})
export default apiCubo