import React from "react";
import { BsJustify } from "react-icons/bs";
import { useToggleContext } from "../../../context/SidebarContext/SidebarContext";
// import "./CrudUserStyles.scss";

const CrudUser = () => {
  const { toggleSidebar } = useToggleContext();

  return (
    <div className="d-flex flex-row">
      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <div className="navbar">
          <div>
            <BsJustify
              className="custom-toggleSidebar"
              onClick={toggleSidebar}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">
          {/* Your main content goes here */}
          <h1>Main Content User</h1>
        </div>
      </div>
    </div>
  );
};

export default CrudUser;
