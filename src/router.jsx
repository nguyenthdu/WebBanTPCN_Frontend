import { Route, Routes } from "react-router-dom";
import Cart from "./pages/users/cart/shoppingCart";
import ProductDetail from "./pages/users/detail";
import HomePage from "./pages/users/homePage";
import ListProduct from "./pages/users/listProduct";
import NotFoundPage from "./pages/users/notFoundPage/notFoundPage";
import ProfilePage from "./pages/users/profilePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import { ROUTERS } from "./utils/router";

const RenderUserRouter = () => {
  const userRouters = [
    { path: ROUTERS.USER.HOME, component: <HomePage /> },
    { path: ROUTERS.USER.PROFILE, component: <ProfilePage /> },
    { path: ROUTERS.USER.PRODUCT_DETAIL, component: <ProductDetail /> },
    { path: ROUTERS.USER.LIST_PRODUCT, component: <ListProduct /> },
    { path: ROUTERS.USER.CART, component: <Cart /> },
    { path: ROUTERS.USER.HOME, component: <HomePage /> },
    { path: ROUTERS.USER.NOTFOUNDPAGE, component: <NotFoundPage /> },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
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
