import { apiUtils } from "../apiUtils/apiUtils";

const categoryService = {
  getAllCategory: () => apiUtils.request("categories", "GET"),
  getCategoryById: (id) => apiUtils.request(`categories/${id}`, "GET"),
  addCategory: (brand) => apiUtils.request("categories", "POST", brand),
  updateCategory: (brand) => apiUtils.request(`categories`, "PUT", brand),
  deleteCategory: (id) => apiUtils.request(`categories/${id}`, "DELETE"),
};

export default categoryService;
