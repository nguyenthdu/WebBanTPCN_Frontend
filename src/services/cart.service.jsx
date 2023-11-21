import { apiUtilsCart } from "../apiUtils/apiUtils";

const CartService = {
  getAllCart: () => apiUtilsCart.request("cart", "GET"),
  addCart: (data) => apiUtilsCart.request("cart", "POST", data),
  updateCart: (id, data) => apiUtilsCart.request(`cart/${id}`, "PUT", data),
  deleteCart: (id) => apiUtilsCart.request(`cart/${id}`, "DELETE"),
  increaseQuantity: (id) => apiUtilsCart.request(`cart/${id}/increase`, "PUT"),
  decreaseQuantity: (id) => apiUtilsCart.request(`cart/${id}/decrease`, "PUT"),
};

export default CartService;
