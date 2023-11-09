import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./style.scss";

function ImagesDetail({ images }) {
  return (
    <Carousel className="carousel__container">
      {images
        ? images.map((item, i) => (
            <Carousel.Item className="carousel__item" key={i}>
              <Image
                className="d-block carousel__image"
                src={item}
                alt={`Slide ${i + 1}`}
              />
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  );
}

export default ImagesDetail;
