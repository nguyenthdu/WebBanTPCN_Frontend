// Đặt các route quản trị trong một nhóm hoặc prefix
export const ADMIN_ROUTES_PREFIX = "/admin"; // để qua bên masterlay nó sẽ kiểm tra xem có này thì ok có sidebar

// This file contains all the routes of the application
export const ROUTERS = {
  VISITOR: {
    HOME: process.env.IS_PROD ? "/" : "",
    PRODUCT_DETAIL: "/product/:id",
    LIST_PRODUCT: "/listProduct/:name",
    CART: "/cart",
    NOTFOUNDPAGE: "*",
  },
  USER: {
    PROFILE: "/profile",
    NOTFOUNDPAGE: "*",
  },
  ADMIN: {
    PRODUCT: `${ADMIN_ROUTES_PREFIX}/product`,
    ADDPRODUCT: `${ADMIN_ROUTES_PREFIX}/product/add`,
    MANUFACTURER: `${ADMIN_ROUTES_PREFIX}/manufacturer`,
    BRAND: `${ADMIN_ROUTES_PREFIX}/brand`,
    CATEGORY: `${ADMIN_ROUTES_PREFIX}/category`,
    USER: `${ADMIN_ROUTES_PREFIX}/user`,
    NOTFOUNDPAGE: "*",
  },
};
