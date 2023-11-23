import React from "react";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
// import "./CategoryStyles.scss";

const Category = () => {
  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <h1>Main Content category</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
