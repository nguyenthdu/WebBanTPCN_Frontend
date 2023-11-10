import React from "react";
import { Col, Image } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Count from "../count/count";
import "./style.scss";

function CartProductCard({ product, index }) {
  const hidden = { hidden: "1" };
  return (
    <Col key={index} className="mb-3 col-12">
      <div className="custom-card">
        <div className="custom-row">
          <Link to={`/product/${product.id}`} className="product__link col-6">
            <Image
              className="custom-image me-2"
              variant="top"
              src={product.images[0]}
            />
            <div className="custom-food">
              <p style={{ marginBottom: 0 }} className="name-food">
                {product.nameFood}
              </p>
            </div>
          </Link>
          <Col lg={5}>
            <div className="custom-counter d-flex">
              <p className="price col-7" style={{ marginBottom: 0 }}>
                Giá:{" "}
                {product.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <Count className="col-3" hidden={hidden} />
              <div className="custom-trash col-2">
                <Trash className="icon-trash" />
              </div>
            </div>
          </Col>
        </div>
      </div>
    </Col>
  );
}

export default CartProductCard;
