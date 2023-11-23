import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext/cartContext";
import store from "./redux/store/Store";
import RouterCustom from "./router";
import "./style/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </CartProvider>
  </Provider>
);
