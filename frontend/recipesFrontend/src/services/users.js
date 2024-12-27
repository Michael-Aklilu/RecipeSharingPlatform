import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/users'

let token = null

const setToken = (adminToken) => {
    return `Bearer ${adminToken}`
}

const getUser = async (id) => {
    const config = {
        headers : { Authorization : token }
    }
    const url = `http://localhost:3000/api/users/${id}`

    const response = await axios.get(url,config)
    return response.data

}

const getAllUsers = async () => {
    const config = {
        headers : { Authorization : token }
    }
    const response = await axios.get(baseUrl,config)
    return response.data
}

const addUser = async (user) => {
    const response = await axios.post(user,url,config)
}

const removeUser = async (id) => {
    const config = {
        headers : { Authorization : token }
    }
    const url = `http://localhost:3000/api/users/${id}`
    const response = await axios.delete(url,config)
}

const editUser = async (id,newUser) => {
    const config = {
        headers : { Authorization : token }
    }
    const url = `http://localhost:3000/api/users/${id}`

    const response = await axios.put(newUser,url,config)
}

export default {addUser,editUser,removeUser,getAllUsers,getUser,setToken}

