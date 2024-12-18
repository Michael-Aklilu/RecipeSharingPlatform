import axios from "axios"
const url = 'http://localhost:3000/api/AdminSignUp'

const signUp = async (credentials) => {
  const response = await axios.post(url,credentials)
  return response.data
}
export default { signUp }