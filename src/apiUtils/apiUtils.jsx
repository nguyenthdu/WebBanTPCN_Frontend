// Chứa các hàm và logic xử lý cho các yêu cầu API.
// apiUtils cung cấp các phương thức chung cho việc gửi các yêu cầu API (get, post, put, delete, v.v.).
// Xử lý lỗi chung và kiểm tra tính hợp lệ của phản hồi từ API.

const API_URL = "http://localhost:8080/api/v1/";

const API_URL_SLIDER = "https://65457cf3fe036a2fa95459a0.mockapi.io/api/v1/";

const API_URL_CART = "https://654ef714358230d8f0ccec5b.mockapi.io/api/v1/";

// Common error handling logic
const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Common request options
const requestOptions = {
  redirect: "follow",
};

// Common API utility using Fetch
export const apiUtils = {
  request: async (endpoint, method = "GET", data, customConfig = {}) => {
    const options = {
      ...requestOptions,
      method,
      headers: {
        "Content-Type": "application/json",
        ...customConfig.headers, // tùy chỉnh
      },
      ...customConfig,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${API_URL}${endpoint}`, options);
      return handleResponse(response);
    } catch (error) {
      console.error(error);
      throw new Error("Error making API request");
    }
  },
};

// -------------------------------------------------------------------------

// Common API utility using Fetch
export const apiUtilsSLIDER = {
  request: async (endpoint, method = "GET", data, customConfig = {}) => {
    const options = {
      ...requestOptions,
      method,
      headers: {
        "Content-Type": "application/json",
        ...customConfig.headers, // tùy chỉnh
      },
      ...customConfig,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${API_URL_SLIDER}${endpoint}`, options);
      return handleResponse(response);
    } catch (error) {
      console.error(error);
      throw new Error("Error making API request");
    }
  },
};

// Common API utility using Fetch (cart) vì url api khác nhau nên mới cần tới nó
export const apiUtilsCart = {
  request: async (endpoint, method = "GET", data, customConfig = {}) => {
    const options = {
      ...requestOptions,
      method,
      headers: {
        "Content-Type": "application/json",
        ...customConfig.headers, // tùy chỉnh
      },
      ...customConfig,
    };

    console.log("trong apiUtils: " + JSON.stringify(data));

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${API_URL_CART}${endpoint}`, options);
      return handleResponse(response);
    } catch (error) {
      console.error(error);
      throw new Error("Error making API request");
    }
  },
};

// Đối với Fetch API
// apiUtils.request('/products', 'GET', null, { headers: { 'Authorization': 'Bearer YOUR_TOKEN' } });

// Function to call the API using Axios
// export const callApi = async (endpoint, method = 'GET', body) => {
//     try {
//       const response = await axios({
//         method,
//         url: `${MOCK_API_URL}/${endpoint}`, // You can switch this to REAL_API_URL for the real API
//         data: body,
//       });
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       throw new Error("Error making API request");
//     }
//   };
