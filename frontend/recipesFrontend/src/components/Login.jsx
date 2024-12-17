
const Login = () => {
    return (
     <div className="flex justify-center items-center h-screen bg-login-bg bg-cover bg-center">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <h1 className="text-3xl block text-center font-semibold text-white "><i className="fa-solid fa-user text-white"></i> Login</h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2 text-white">Username</label>
            <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2 text-white">Password</label>
            <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
          </div>
          <div className="mt-5 flex justify-center">
            <button type="submit"className="border-2 border-white-600  bg-white text-gray-700 py-1 px-4 rounded-md">Login</button>
          </div>
        </div>  
     </div>
  )
  
}  

export default Login