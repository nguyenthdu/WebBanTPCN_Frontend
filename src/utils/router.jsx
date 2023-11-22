// Đặt các route quản trị trong một nhóm hoặc prefix
export const ADMIN_ROUTES_PREFIX = "/admin"; // để qua bên masterlay nó sẽ kiểm tra xem có này thì ok có sidebar

// This file contains all the routes of the application
export const ROUTERS = {
  USER: {
    HOME: process.env.IS_PROD ? "/" : "",
    PROFILE: "/profile",
    PRODUCT_DETAIL: "/product/:id",
    LIST_PRODUCT: "/listProduct/:name",
    CART: "/cart",
    NOTFOUNDPAGE: "*",
  },
  ADMIN: {
    CRUD: `${ADMIN_ROUTES_PREFIX}/crud`,
    USER: `${ADMIN_ROUTES_PREFIX}/user`,
    NOTFOUNDPAGE: "*",
  },
};
