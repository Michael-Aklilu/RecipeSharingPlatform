import axios from "axios";
const baseUrl = "http://localhost:3000/api/comments";

let token = null;

const setToken = (userToken) => {
  token = `Bearer ${userToken}`;
  return `Bearer ${userToken}`;
};

const fetchAllComments = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return await response.data;
};

const addComment = async (commentDetails) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, commentDetails, config);
  return response.data;
};

const removeComment = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const commentUrl = `${baseUrl}/id`;
  const response = await axios.delete(commentUrl, config);
  return response.data;
};

const editComment = async (id, newComment) => {
  const config = {
    headers: { Authorization: token },
  };

  const commentUrl = `${baseUrl}/id`;
  const response = await axios.put(commentUrl, newComment, config);
  return response.data;
};
