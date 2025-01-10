import axios from "axios";
const baseUrl = "http://localhost:3000/api/admins";

let token = null

const setToken = (userToken) => {
  token = `Bearer ${userToken}`;
  return `Bearer ${userToken}`;
};

const getAdmins = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

export default {setToken,getAdmins};
