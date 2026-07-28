import axios from "axios";

const BASE_URL = "http://localhost:8080/users";

const userApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getUsers = () => userApi.get("");

export const getUser = (id) => userApi.get(`/${id}`);

export const addUser = (user) => userApi.post("", user);

export const updateUser = (id, user) => userApi.put(`/${id}`, user);

export const deleteUser = (id) => userApi.delete(`/${id}`);

export default userApi;