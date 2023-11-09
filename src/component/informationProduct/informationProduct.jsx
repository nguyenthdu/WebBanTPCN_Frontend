import React from "react";
import "./style.scss";

function InformationProduct({ productData }) {
  return (
    <div className="container-information">
      {productData.nameFood ? (
        <div className="name-food p-3">
          <h1>{productData.nameFood}</h1>
        </div>
      ) : null}
      {productData.price ? (
        <div className="price p-3">
          <h2 className="txt-price">
            {productData.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </h2>
        </div>
      ) : null}
      {productData.useObject ? (
        <div className="custom-row d-flex use-object p-3">
          <h5 className="title">Đối tượng sử dụng: </h5>
          <h5 className="txt-use-object">
            {productData.useObject.map((item, index) => (
              <span key={index}>
                {item}
                {index < productData.useObject.length - 1 ? ", " : ""}
              </span>
            ))}
          </h5>
        </div>
      ) : null}
      {productData.brand.name ? (
        <div className="custom-row d-flex c-brand p-3">
          <h5 className="title">Thuơng hiệu: </h5>
          <h5 className="txt-brand">{productData.brand.name}</h5>
        </div>
      ) : null}
      {productData.category.name ? (
        <div className="custom-row d-flex category p-3">
          <h5 className="title">Loại sản phẩm: </h5>
          <h5 className="txt-category">{productData.category.name}</h5>
        </div>
      ) : null}
      {productData.description ? (
        <div className="custom-row d-flex description p-3">
          <h5 className="title">Mô tả sản phẩm: </h5>
          <h5 className="txt-description">{productData.description}</h5>
        </div>
      ) : null}
    </div>
  );
}

export default InformationProduct;
