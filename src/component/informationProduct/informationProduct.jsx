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
            / {productData.packingWay}
          </h2>
        </div>
      ) : null}
      {productData.packingWay ? (
        <div className="custom-row d-flex c-brand p-3">
          <h5 className="title">Đơn vị tính: </h5>
          <h5 className="txt-brand">{productData.packingWay}</h5>
        </div>
      ) : null}
      {productData.placeOfManufacture ? (
        <div className="custom-row d-flex c-brand p-3">
          <h5 className="title">Sản xuất tại: </h5>
          <h5 className="txt-brand">{productData.placeOfManufacture}</h5>
        </div>
      ) : null}
      {productData.ingredients ? (
        <div className="custom-row d-flex c-brand p-3">
          <h5 className="title">Thành phần: </h5>
          <h5 className="txt-brand">{productData.ingredients}</h5>
        </div>
      ) : null}
      {productData.dosageForm ? (
        <div className="custom-row d-flex c-brand p-3">
          <h5 className="title">Dạng thuốc: </h5>
          <h5 className="txt-brand">{productData.dosageForm}</h5>
        </div>
      ) : null}
      {/* {productData.description ? (
        <div className="custom-row d-flex description p-3">
          <h5 className="title">Mô tả sản phẩm: </h5>
          <h5 className="txt-description">{productData.description}</h5>
        </div>
      ) : null} */}
    </div>
  );
}

export default InformationProduct;
