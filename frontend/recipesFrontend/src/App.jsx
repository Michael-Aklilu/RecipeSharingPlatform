import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserHomePage from './components/userHomePage'
import AdminHomePage from './components/AdminHomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AdminLogin from './components/AdminLogin'
import AdminSignUp from './components/AdminSignUp'
import { useState } from 'react'

function App() {
  const [loggedInUser,setLoggedInUser] = useState(null)
  const[loggedInAdmin,setLoggedInAdmin] = useState(null)

  return (
   <Router>
     <Routes>
      <Route path='/AdminHome' element={<AdminHomePage/>}></Route>
      <Route path='/UserHome'element={<UserHomePage/>} ></Route>
       <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser}/>}/>
       <Route path='/SignUp' element={<SignUp setLoggedInUser={setLoggedInUser}/>}/>
       <Route path='/AdminLogin'element={<AdminLogin setLoggedInAdmin={setLoggedInAdmin}/>} ></Route>
       <Route path='/AdminSignUp'element={<AdminSignUp setLoggedInAdmin={setLoggedInAdmin}/>}  ></Route>
       <Route/>
     </Routes>
   </Router>
  )
}

export default App
