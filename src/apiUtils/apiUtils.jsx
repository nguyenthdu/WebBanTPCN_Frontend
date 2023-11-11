// Chứa các hàm và logic xử lý cho các yêu cầu API.
// apiUtils cung cấp các phương thức chung cho việc gửi các yêu cầu API (get, post, put, delete, v.v.).
// Xử lý lỗi chung và kiểm tra tính hợp lệ của phản hồi từ API.

const API_URL = "https://65457cf3fe036a2fa95459a0.mockapi.io/api/v1/";

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
  request: async (endpoint, method = "GET", data) => {
    const options = {
      ...requestOptions,
      method,
      headers: {
        "Content-Type": "application/json",
      },
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