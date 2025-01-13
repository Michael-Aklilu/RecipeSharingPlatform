import axios from "axios";
const baseUrl = "http://localhost:3000/api/recipes";

let token = null;

const setToken = (userToken) => {
  token = `Bearer ${userToken}`;
  return `Bearer ${userToken}`;
};

const addRecipe = async (recipe) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, recipe, config);

  return response.data;
};

const showAllRecipes = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const showRecipe = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `http://localhost:3000/api/recipes/${id}`;
  const response = await axios.get(url, config);
  return response.data;
};

const deleteRecipe = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `http://localhost:3000/api/recipes/${id}`;
  const response = await axios.delete(url, config);
  return response.data;
};

const editRecipe = async (id, newRecipe) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `http://localhost:3000/api/recipes/${id}`;
  const response = await axios.put(newRecipe, url, config);
};

export default {
  addRecipe,
  showAllRecipes,
  showRecipe,
  deleteRecipe,
  editRecipe,
  setToken,
};
