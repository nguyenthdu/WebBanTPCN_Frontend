import { createContext, useContext, useState } from "react";

// Tạo một Context với giá trị mặc định là một mảng rỗng
const SidebarContext = createContext([]);

// Tạo một Provider để cung cấp dữ liệu cho các thành phần con
const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const value = { isSidebarOpen, toggleSidebar };
  // Trả về Provider với giá trị được cung cấp cho Context
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

// Tạo một hook để dễ dàng sử dụng giá trị từ Context
const useToggleContext = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};

// Xuất Provider và hook để sử dụng trong các thành phần khác
export { SidebarProvider, useToggleContext };
