import { memo } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../../component/Sidebar/Sidebar";
import { SidebarProvider } from "../../../../context/SidebarContext/SidebarContext";
import { ADMIN_ROUTES_PREFIX } from "../../../../utils/router";
import Footer from "../footer";
import Header from "../header";

const MasterLayout = ({ children, ...props }) => {
  const location = useLocation();

  // Kiểm tra xem route hiện tại có thuộc về nhóm quản trị không
  const shouldDisplaySidebar =
    location.pathname.startsWith(ADMIN_ROUTES_PREFIX);
  return (
    <div {...props}>
      <Header />
      {shouldDisplaySidebar ? (
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
