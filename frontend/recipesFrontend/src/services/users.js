import axios from "axios";
const baseUrl = "http://localhost:3000/api/users";

let token = null;

export const setToken = (adminToken) => {
  token = `Bearer ${adminToken}`;
  return `Bearer ${adminToken}`;
};

const getUser = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `http://localhost:3000/api/users/${id}`;
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllUsers = async () => {
  const config = {
    headers: { Authorization: token },
  };
  try {
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addUser = async (user) => {
  const config = {
    headers: { Authorization: token },
  };
  try {
    const response = await axios.post(baseUrl, user, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeUser = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `http://localhost:3000/api/users/${id}`;
  try {
    const response = await axios.delete(url, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const editUser = async (id, newUser) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `http://localhost:3000/api/users/${id}`;
  try {
    const response = await axios.put(url, newUser, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  addUser,
  editUser,
  removeUser,
  getAllUsers,
  getUser,
  setToken,
};
