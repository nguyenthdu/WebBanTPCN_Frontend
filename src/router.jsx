import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductForm from "./component/productForm/ProductForm";
import Brand from "./pages/admin/Brand/Brand";
import Category from "./pages/admin/Category/Category";
import Manufacturer from "./pages/admin/Manufacturer/Manufacturer";
import Product from "./pages/admin/Product/Product";
import CrudUser from "./pages/admin/User/CrudUser";
import Cart from "./pages/users/cart/shoppingCart";
import ProductDetail from "./pages/users/detail";
import HomePage from "./pages/users/homePage";
import ListProduct from "./pages/users/listProduct";
import NotFoundPage from "./pages/users/notFoundPage/notFoundPage";
import ProfilePage from "./pages/users/profilePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import AuthService from "./services/auth.service";
import { ROUTERS } from "./utils/router";

const RenderUserRouter = () => {
  const visitorRouters = [
    { path: ROUTERS.VISITOR.HOME, component: <HomePage /> },
    { path: ROUTERS.VISITOR.PRODUCT_DETAIL, component: <ProductDetail /> },
    { path: ROUTERS.VISITOR.LIST_PRODUCT, component: <ListProduct /> },
    { path: ROUTERS.VISITOR.NOTFOUNDPAGE, component: <NotFoundPage /> },
    { path: ROUTERS.VISITOR.CART, component: <Cart /> },
  ];
  const userRouters = [
    ...visitorRouters,
    { path: ROUTERS.USER.PROFILE, component: <ProfilePage /> },
  ];

  const adminRouters = [
    ...userRouters,
    { path: ROUTERS.ADMIN.PRODUCT, component: <Product /> },
    { path: ROUTERS.ADMIN.ADDPRODUCT, component: <ProductForm /> },
    { path: ROUTERS.ADMIN.MANUFACTURER, component: <Manufacturer /> },
    { path: ROUTERS.ADMIN.BRAND, component: <Brand /> },
    { path: ROUTERS.ADMIN.CATEGORY, component: <Category /> },
    { path: ROUTERS.ADMIN.USER, component: <CrudUser /> },
    // { path: ROUTERS.ADMIN.NOTFOUNDPAGE, component: <NotFoundPage /> },
  ];

  const currentUser = AuthService.getCurrentUser();
  var role = null;

  const checkRole = () => {
    if (currentUser === null) {
      return visitorRouters;
    }
    role = currentUser.role;
    if (role === "USER") return userRouters;
    return adminRouters;
  };

  const [route, setRoute] = useState(checkRole);

  // Khi bạn muốn thay đổi route dựa trên vai trò
  const handleRoleChange = () => {
    setRoute(checkRole());
  };

  useEffect(() => {
    handleRoleChange();
    console.log("route in render user router: ", route);
  }, []);

  return (
    <MasterLayout>
      {/* {handleRoleChange()} */}
      <Routes>
        {route.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
        ;
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return RenderUserRouter();
};

export default RouterCustom;
