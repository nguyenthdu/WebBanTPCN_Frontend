import React from "react";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
import "./ManufacturerStyles.scss";

const Manufacturer = () => {
  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <h1>Main Content nhà sản xuất</h1>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
