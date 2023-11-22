import React from "react";
import "./SidebarStyles.scss";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
