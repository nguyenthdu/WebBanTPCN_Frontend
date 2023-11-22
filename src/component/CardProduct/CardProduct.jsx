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

  const priceDiscout = (item.price * (100 - item.discount)) / 100;

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
        <Meta
          title={item.nameFood}
          description={
            item.price ? (
              <div className="price p-3">
                <h4 className="txt-price">
                  {priceDiscout.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                  / {item.packingWay}
                </h4>
                {item.discount ? (
                  <h5 className="txt-discount">
                    {item.price.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h5>
                ) : null}
              </div>
            ) : null
          }
        />
      </Card>
    </Link>
  );
};

export default CardProduct;
