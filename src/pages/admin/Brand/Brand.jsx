import React from "react";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
// import "./BrandStyles.scss";

const Brand = () => {
  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <h1>Main Content brand</h1>
        </div>
      </div>
    </div>
  );
};

export default Brand;
