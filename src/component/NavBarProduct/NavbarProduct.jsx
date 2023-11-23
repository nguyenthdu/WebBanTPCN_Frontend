import React, { useState } from "react";
import { BsJustify } from "react-icons/bs";
import { useToggleContext } from "../../context/SidebarContext/SidebarContext";
import "./NavbarProductStyles.scss";

const NavbarProduct = () => {
  const { toggleSidebar } = useToggleContext();
  const [item, setItem] = useState([
    { id: 1, title: "Danh sách sản phẩm", url: "/admin/product" },
    { id: 2, title: "Nhà sản xuất", url: "/admin/manufacturer" },
    { id: 3, title: "Thương hiệu", url: "/admin/brand" },
    { id: 4, title: "Loại sản phẩm", url: "/admin/category" },
  ]);

  const renderItem = (element) => {
    return element.map((item) => {
      return (
        <h5 className="custom-title" key={item.id}>
          <a className="custom-nav-a" href={item.url}>
            {item.title}
          </a>
        </h5>
      );
    });
  };

  return (
    <div className="navbar" style={{ justifyContent: "flex-start" }}>
      <BsJustify
        className="custom-toggleSidebar toggleSidebar-icon"
        onClick={toggleSidebar}
      />
      {renderItem(item)}
    </div>
  );
};

export default NavbarProduct;
