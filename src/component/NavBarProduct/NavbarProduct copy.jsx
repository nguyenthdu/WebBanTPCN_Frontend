import React, { useState } from "react";
import { BsJustify } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useToggleContext } from "../../context/SidebarContext/SidebarContext";
import "./NavbarProductStyles.scss";

const NavbarProduct = () => {
  const { toggleSidebar } = useToggleContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const items = [
    { id: 1, title: "Danh sách sản phẩm", url: "/admin/product" },
    { id: 2, title: "Nhà sản xuất", url: "/admin/manufacturer" },
    { id: 3, title: "Thương hiệu", url: "/admin/brand" },
    { id: 4, title: "Loại sản phẩm", url: "/admin/category" },
  ];

  const handleItemClick = (itemId, url) => {
    setSelectedItem(itemId);
    // Sử dụng navigate để chuyển hướng không làm tải lại trang
    navigate(url);
  };

  const renderItem = (element) => {
    return element.map((item) => {
      const isSelected = selectedItem === item.id;

      return (
        <h5
          className={`custom-title ${isSelected ? "selected" : ""}`}
          key={item.id}
        >
          <div
            className="custom-nav-a"
            onClick={() => handleItemClick(item.id, item.url)}
          >
            {item.title}
          </div>
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
      {renderItem(items)}
    </div>
  );
};

export default NavbarProduct;
