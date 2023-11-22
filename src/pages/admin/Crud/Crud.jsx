import React, { useState } from "react";
import "./CrudStyles.scss";

const Crud = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="d-flex flex-row">
      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <div className="navbar">
          <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>

        {/* Main content */}
        <div className="main-content">
          {/* Your main content goes here */}
          <h1>Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Crud;
