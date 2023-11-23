import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../../component/Sidebar/Sidebar";
import { SidebarProvider } from "../../../../context/SidebarContext/SidebarContext";
import AuthService from "../../../../services/auth.service";
import { ADMIN_ROUTES_PREFIX } from "../../../../utils/router";
import Footer from "../footer";
import Header from "../header";

const MasterLayout = ({ children, ...props }) => {
  const location = useLocation();

  const currentUser = AuthService.getCurrentUser();
  // Kiểm tra role
  const checkRole = () => {
    if (currentUser === null) {
      return "USER";
    }
    return currentUser.role === "ADMIN" ? "ADMIN" : "USER";
  };

  const [role, setRole] = useState(checkRole);

  // Khi bạn muốn thay đổi route dựa trên vai trò
  const handleRoleChange = () => {
    setRole(checkRole());
  };

  useEffect(() => {
    handleRoleChange();
    // console.log("role in render user router: ", role);
  }, []);
  // Kiểm tra xem route hiện tại có thuộc về nhóm quản trị không
  const shouldDisplaySidebar =
    location.pathname.startsWith(ADMIN_ROUTES_PREFIX);
  return (
    <div {...props}>
      <Header />
      {shouldDisplaySidebar && role === "ADMIN" ? (
        <SidebarProvider>
          <div className="d-flex flex-row">
            <Sidebar />
            <div className="flex-grow-1">{children}</div>
          </div>
        </SidebarProvider>
      ) : (
        children
      )}
      {/* {children} */}
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);
