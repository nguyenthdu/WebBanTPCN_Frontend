import React from "react";
import { useToggleContext } from "../../context/SidebarContext/SidebarContext";
import "./SidebarStyles.scss";

const Sidebar = () => {
  const { isSidebarOpen } = useToggleContext();
  return isSidebarOpen ? (
    <div className="wrapper">
      <nav className="sidebar">
        <ul>
          <li>
            <a href="/admin/product">Sản phẩm</a>
          </li>
          <li>
            <a href="/admin/user">Người dùng</a>
          </li>
          <li>
            <a href="/admin/user">Thống kê</a>
          </li>
        </ul>
      </nav>
    </div>
  ) : null;
};

export default Sidebar;
