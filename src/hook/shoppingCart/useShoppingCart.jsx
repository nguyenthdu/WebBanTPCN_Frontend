import { useEffect, useState } from "react";

const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("use shopping cart: " + JSON.stringify(cartItems));
  }, [cartItems]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product, quantity) => {
    // kiểm tra sản phẩm đã tồn tại trong giỏ hàng?
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    if (!isProductInCart) {
      // nếu chưa
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    } else {
      // nếu đã có, tăng sl
      const updateCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updateCart);
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  // Cập nhật số lượng của 1 sản phẩm trong giỏ hàng
  const updateQuantity = (product, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const countItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return {
    cartItems, // Danh sách sản phẩm trong giỏ hàng
    addToCart, // Thêm sản phẩm vào giỏ hàng
    removeFromCart, // Xóa sản phẩm khỏi giỏ hàng
    updateQuantity, // Cập nhật số lượng của 1 sản phẩm trong giỏ hàng
    countItems, // Tính tổng số lượng sản phẩm trong giỏ hàng
  };
};

export default useShoppingCart;
