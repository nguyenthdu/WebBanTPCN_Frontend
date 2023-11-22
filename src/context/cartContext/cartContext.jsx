import { createContext, useContext, useState } from "react";
import CartService from "../../services/cart.service";

// Tạo một Context với giá trị mặc định là một mảng rỗng
const CartContext = createContext([]);

// Tạo một Provider để cung cấp dữ liệu cho các thành phần con
const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
  const isExistProduct = (product) => {
    const index = carts.findIndex((item) => item.id === product.id);
    return index !== -1;
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = async (newProduct) => {
    if (isExistProduct(newProduct)) {
      // Nếu sản phẩm đã tồn tại, chỉ cập nhật số lượng
      console.log("trong cart context: " + JSON.stringify(newProduct));
      updateQuantity(newProduct, newProduct.quantity);
    } else {
      await CartService.addCart(newProduct);
      setCarts([newProduct, ...carts]);
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeToCart = (product) => {
    const newCarts = carts.filter((item) => item.id !== product.id);
    setCarts(newCarts);
  };

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = async (product, newQuantity) => {
    const newCarts = carts.map((item) => {
      if (item.id === product.id) {
        const quantity = item.quantity + newQuantity;
        CartService.updateCart(product.id, quantity);
        return { ...item, quantity: quantity };
      }
      return item;
    });

    setCarts(newCarts);
  };

  // Thêm hàm cần thiết ở đây

  const value = { carts, addToCart, removeToCart, updateQuantity };
  // Trả về Provider với giá trị được cung cấp cho Context
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Tạo một hook để dễ dàng sử dụng giá trị từ Context
const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// Xuất Provider và hook để sử dụng trong các thành phần khác
export { CartProvider, useCartContext };
