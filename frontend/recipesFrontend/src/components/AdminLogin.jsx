import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import adminLoginService from '../services/adminLogin'
import recipeService from '../services/recipes'


const AdminLogin = ({setLoggedInAdmin}) => {
     const navigate = useNavigate()
      const [username,setUsername] = useState('')
      const [password,setPassword] = useState('')
      
      const handleSubmit = async (event) => {
        event.preventDefault()
        try{
          const admin = await adminLoginService.login({username,password})
          recipeService.setToken(admin.token)
          setLoggedInAdmin(admin)  
          setUsername('')
          setPassword('')

          window.localStorage.setItem('LoggedInAdmin', JSON.stringify(admin))

          if(admin) navigate('/AdminHome')
        }catch{
          console.log('Wrong credentials');
        }
        event.target.username.value = ''
        event.target.password.value = ''
      }
      
      const handleUsername = (event) => {
        setUsername(event.target.value)  
      }
    
      const handlePassword = (event) => {
        setPassword(event.target.value)
      }
    
        return (
         <div className="flex justify-center items-center h-screen bg-login-bg bg-cover bg-center">
            <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
              <form onSubmit={handleSubmit}>
              <h1 className="text-3xl block text-center font-semibold text-white "><i className="fa-solid fa-user-tie text-white"></i> Admin</h1>
              <hr className="mt-3" />
              <div className="mt-3">
                <label htmlFor="username" className="block text-base mb-2 text-white">Username</label>
                <input type="text" name='username' id="username" onChange={handleUsername} className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="block text-base mb-2 text-white">Password</label>
                <input type="password" name='password' onChange={handlePassword}  id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
              </div>
    
              <div className="mt-5 flex justify-center">
                <button type="submit"className="border-2 border-white-600  bg-white text-gray-700 py-1 px-4 rounded-md">Login</button>
              </div>
              <div className='mt-3 flex ' >
                <a className='text-white'href="">Forgot Password?</a>
              </div>
             
              <div className='mt-1 flex '>
                <Link className='text-white' to="/AdminSignUp">Create Administrator account?</Link>
              </div>
              </form>
              
            </div>  
         </div>
      )
      
}
export default AdminLogin