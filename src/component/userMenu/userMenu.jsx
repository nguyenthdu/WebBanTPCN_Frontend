import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import AuthService from "../../services/auth.service";

function UserMenu({ currentUser }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const logout = () => {
    AuthService.logout();
    window.location.href = "/";
  };
  const handleUserMenuToggle = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <Dropdown
      onMouseEnter={handleUserMenuToggle}
      onMouseLeave={handleUserMenuToggle}
      show={showUserMenu}
    >
      <Dropdown.Toggle
        variant="transparent"
        style={{ color: "#fff", alignItems: "center" }}
        id="user-menu-dropdown"
        href="/profile"
      >
        <Person className="me-2" />
        {currentUser.lastName}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">Hồ sơ</Dropdown.Item>
        <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserMenu;
