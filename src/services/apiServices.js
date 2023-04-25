import axios from "axios";

function login(body) {
  return axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);
}

function signUp(body) {
  return axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
}

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function getTransaction(token) {
  const config = createConfig(token);
  return axios.get(`${process.env.REACT_APP_API_URL}/transactions`, config);
}

function newTransaction(body, token) {
  const config = createConfig(token);
  return axios.post(`${process.env.REACT_APP_API_URL}/transactions`, body, config);
}

function editTransaction(body, token, id) {
  const config = createConfig(token);
  return axios.put(`${process.env.REACT_APP_API_URL}/transactions/${id}`, body, config);
}

function deleteTransaction(token, id) {
  const config = createConfig(token);
  return axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${id}`, config);
}

const api = { login, signUp, getTransaction, newTransaction, editTransaction, deleteTransaction };

export default api;