import React, { memo, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Bill from "../../../component/bill/bill";
import CartProductCard from "../../../component/zzz/cartProductCard copy";
import { useCartContext } from "../../../context/cartContext/cartContext";
import "./style.scss";

function Cart() {
  const [listProducts, setListProducts] = useState([]);
  const { carts } = useCartContext();
  useEffect(() => {
    console.log("carts: " + JSON.stringify(carts));
    // setListProducts(carts);
  }, [carts]);

  const renderProductsCart = () => {
    return (
      <Col className="g-4 col-12">
        {listProducts.map((product, index) => (
          <CartProductCard key={index} product={product} index={index} />
        ))}
      </Col>
    );
  };

  if (listProducts.length > 0) {
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
  } else {
    return (
      <div>
        <h1>Giỏ hàng trống!</h1>
      </div>
    );
  }
}

export default memo(Cart);
