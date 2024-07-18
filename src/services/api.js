import axios from 'axios';

const API_URL = 'http://localhost/wordpress/wp-json/wp/v2';

const api = axios.create({
  baseURL: API_URL,
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPost = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
    username,
    password,
  });
  return response.data;
};

export default api;
