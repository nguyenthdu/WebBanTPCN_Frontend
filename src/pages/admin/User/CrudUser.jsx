import React from "react";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
// import "./CrudUserStyles.scss";

const CrudUser = () => {
  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <h1>Main Content User</h1>
        </div>
      </div>
    </div>
  );
};

export default CrudUser;
