import { apiUtils } from "../apiUtils/apiUtils";

const brandService = {
  getAllBrand: () => apiUtils.request("brands", "GET"),
  getBrandById: (id) => apiUtils.request(`brands/${id}`, "GET"),
  addBrand: (brand) => apiUtils.request("brands", "POST", brand),
  updateBrand: (brand) => apiUtils.request(`brands`, "PUT", brand),
  deleteBrand: (id) => apiUtils.request(`brands/${id}`, "DELETE"),
};

export default brandService;
