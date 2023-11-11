import React, { memo, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Bill from "../../../component/bill/bill";
import CartProductCard from "../../../component/cartProductCard/cartProductCard";
import useShoppingCart from "../../../hook/shoppingCart/useShoppingCart";
import "./style.scss";

function Cart() {
  const [listProducts, setListProducts] = useState([]);
  const { cartItems } = useShoppingCart();
  useEffect(() => {
    setListProducts(cartItems);
  }, [cartItems]);

  const renderProductsCart = () => {
    if (!listProducts) {
      return <p>khong co san pham trong gio hang</p>;
    }
    return (
      <Col className="g-4 col-12">
        {listProducts.map((product, index) => (
          <CartProductCard key={index} product={product} index={index} />
        ))}
      </Col>
    );
  };

  return (
    <div className="container custom-container" style={{ maxWidth: "100%" }}>
      <div className="custom-cart-container">
        {/* 2 cột */}
        <Col className="list-product-bill col-12 d-none d-md-flex">
          <div className="list-product-left col-md-9 col-12 me-2">
            {renderProductsCart()}
          </div>
          <div className="total-price col-12 col-md-3 ms-2">
            <Bill />
          </div>
        </Col>
        {/* 1 cột */}
        <Col className="list-product-bill col-12 d-md-none">
          <div className="list-product-left col-md-9 col-12">
            {renderProductsCart()}
          </div>
          <div className="total-price col-12 col-md-3 ps-2">
            <Bill />
          </div>
        </Col>
      </div>
    </div>
  );
}

export default memo(Cart);
