import { apiUtils } from "../apiUtils/apiUtils";
import AuthService from "./auth.service";

const userService = {
  getAllUser: () => {
    // lấy thông tin user
    const currentUser = AuthService.getCurrentUser();

    // tạo 1 đối tượng customConfig để chưa header và cấu hình tùy chỉnh khác
    const customConfig = {};

    // nếu có thông tin người dùng thì và token thì thêm vào headers
    if (currentUser && currentUser.token) {
      customConfig.headers = { Authorization: `Bearer ${currentUser.token}` };
    }

    // Gọi apiUtils.request với endpoint và customConfig
    return apiUtils.request("admin/getAllUsers", "GET", null, customConfig);
  },
  deleteUser: (id) => {
    const currentUser = AuthService.getCurrentUser();

    const customConfig = {};

    if (currentUser && currentUser.token) {
      customConfig.headers = { Authorization: `Bearer ${currentUser.token}` };
    }

    return apiUtils.request(
      `admin/deleteUser/${id}`,
      "DELETE",
      null,
      customConfig
    );
  },
};

export default userService;
