import { apiUtils } from "../apiUtils/apiUtils";

const manufacturerService = {
  getAllManufacturer: () => apiUtils.request("manufacturers", "GET"),
  getManufacturerById: (id) => apiUtils.request(`manufacturers/${id}`, "GET"),
  addManufacturer: (manufacturer) =>
    apiUtils.request("manufacturers", "POST", manufacturer),
  updateManufacturer: (manufacturer) =>
    apiUtils.request(`manufacturers`, "PUT", manufacturer),
  deleteManufacturer: (id) => apiUtils.request(`manufacturers/${id}`, "DELETE"),
};

export default manufacturerService;
