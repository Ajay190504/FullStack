import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const registerUser = async (user) => {
    return await axios.post(`${API_URL}/register`, user);
};

export const loginUser = async (user) => {
    return await axios.post(`${API_URL}/login`, user);
};