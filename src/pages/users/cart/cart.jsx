import React, { memo, useState } from "react";
import { Col } from "react-bootstrap";
import Bill from "../../../component/bill/bill";
import CartProductCard from "../../../component/cartProductCard/cartProductCard";
import "./style.scss";

function Cart() {
  const products = [
    {
      nameFood: "Viên uống Calcium Premium JpanWell",
      description:
        "Bổ sung canxi, vitamin và khoáng chất. Dành cho sức khỏe xương và răng.",
      price: 120,
      images: [
        "https://source.unsplash.com/random/200x200?sig=1",
        "https://source.unsplash.com/random/200x200?sig=2",
      ],
      brand: {
        name: "JpanWell",
      },
      category: {
        name: "Thực phẩm chức năng cho xương và răng",
      },
      useObject: ["children", "men", "women"],
      id: "1",
    },
    {
      nameFood: "Viên uống Rama Bổ Phổi",
      description: "Hỗ trợ bổ phổi, giảm ho. Sản phẩm chức năng cho hệ hô hấp.",
      price: 30,
      images: [
        "https://source.unsplash.com/random/200x200?sig=3",
        "https://source.unsplash.com/random/200x200?sig=4",
      ],
      brand: {
        name: "Rama",
      },
      category: {
        name: "Thực phẩm chức năng cho hô hấp",
      },
      useObject: ["children", "men"],
      id: "2",
    },
    {
      nameFood: "Viên uống proMUM DHA Alg",
      description:
        "Bổ sung DHA cho phụ nữ có thai và cho con bú. Gói 3 vỉ x 10 viên.",
      price: 45,
      images: [
        "https://source.unsplash.com/random/200x200?sig=5",
        "https://source.unsplash.com/random/200x200?sig=6",
      ],
      brand: {
        name: "proMUM",
      },
      category: {
        name: "Thực phẩm chức năng cho phụ nữ mang thai và cho con bú",
      },
      useObject: ["men", "women"],
      id: "3",
    },
  ];

  const [listProducts, setListProducts] = useState(products);

  const renderProductsCart = () => {
    if (!products) {
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
