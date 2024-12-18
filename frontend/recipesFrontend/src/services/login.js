import axios from 'axios'
const url = 'http://localhost:3000/api/login'

const login = async (credentials) =>{
    const response = await axios.post(url,credentials)  
    return response.data
}


export default { login } 
