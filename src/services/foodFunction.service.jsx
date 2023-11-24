// Sử dụng apiUtils để định nghĩa các phương thức cụ thể liên quan đến "foodFunction".
// Service Object này cung cấp một cách tách biệt để quản lý các yêu cầu liên quan đến chức năng thức ăn.
import { apiUtils } from "../apiUtils/apiUtils";

const foodFunctionService = {
  getFoodList: () => apiUtils.request("foodFunctions", "GET"),
  getFood: (id) => apiUtils.request(`foodFunctions/${id}`, "GET"),
  getFoodByName: (name) => {
    // Specific logic for searching by name, using apiUtils.request for generic API calls
    return apiUtils.request(`foodFunction?name=${name}`, "GET");
  },
  addFoodFunction: (foodFunction) =>
    apiUtils.request("foodFunctions", "POST", foodFunction),
  updateFoodFunction: (foodFunction) =>
    apiUtils.request(`foodFunctions`, "PUT", foodFunction),
  deleteFoodFunction: (id) => apiUtils.request(`foodFunctions/${id}`, "DELETE"),
};

export default foodFunctionService;

//use axios
// import { callApi } from "../apiUtils/apiUtils";

// const foodFunctionService = {
//   getFoodList: () => callApi("foodFunction"),
//   getFood: (id) => callApi(`foodFunction/${id}`),
//   getFoodByName: (name) => {
//     // Specific logic for searching by name, using callApi for generic API calls
//     return callApi(`foodFunction?name=${name}`, 'GET', null);
//   },
// };

// export default foodFunctionService;
