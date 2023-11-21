import { Card } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const { Meta } = Card;

const CardProduct = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/product/${item.id}`} className="product__link">
      <Card
        hoverable
        className="custom-card"
        cover={
          <img
            alt={item.nameFood}
            className="custom-image"
            src={isHovered ? item.imageBase64[1] : item.imageBase64[0]}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        }
      >
        <Meta title={item.nameFood} description="This is the description" />
      </Card>
    </Link>
  );
};

export default CardProduct;
