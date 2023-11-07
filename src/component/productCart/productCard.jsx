import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

function ProductCard({ product, index }) {
  return (
    <Col key={index} className="product__card_container mb-3">
      <Link to={`/product/${product.id}`} className="product__link">
        <Card className="product__card">
          <Card.Img
            className="product__card_img"
            variant="top"
            src={product.images[0]}
          />
          <Card.Body>
            <div className="product__card_body">
              <Card.Title className="product__card_title">
                {product.nameFood}
              </Card.Title>
              <Card.Text className="product__card_description">
                {product.description}
              </Card.Text>
              <p className="product__card_price">Giá: ${product.price}</p>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default ProductCard;
