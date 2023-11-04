// auth.service.js (Authentication service)
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/"; // This is the URL of the Spring Boot application

const register = (username, password) => {
  return axios.post(API_URL + "rigister", { username, password });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", { username, password })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data)); // Store the user object in local storage (json format)
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  // chua co phuong thuc logout server
  // return axios.post(API_URL + "logout").then((response) => {
  //   return response.data;
  // });
};

// getCurrentUser() returns the current user object from local storage (exemple: check login status, get user details, ...)
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
