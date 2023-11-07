// user.service.js (Data service)

// method (resources) of user and admin can use

import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

const getHello = () => {
  return axios.get(API_URL + "hello");
};

const getHelloUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + user.token,
    },
    redirect: "follow",
  };

  return fetch(API_URL + "user/helloUser", requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  });
};

const getHelloAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + user.token,
    },
    redirect: "follow",
  };

  return fetch(API_URL + "admin/helloAdmin", requestOptions).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Kiểm tra nếu phản hồi có chứa dữ liệu JSON
      if (response.headers.get("content-type").includes("application/json")) {
        // Trả về dữ liệu JSON thay vì chuỗi văn bản
        return response.json();
      }
      // else {
      //   return response.text();
      // }
    }
  );
};

const UserService = {
  getHello,
  getHelloUser,
  getHelloAdmin,
};

export default UserService;
