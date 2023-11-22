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
    CRUD: "/admin/crud",
    USER: "/admin/user",
    NOTFOUNDPAGE: "*",
  },
};
