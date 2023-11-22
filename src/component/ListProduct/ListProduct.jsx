// components/listProduct/ListProduct.jsx
import { List } from "antd";
import React, { useState } from "react";
import CardProduct from "../CardProduct/CardProduct";

const ListProduct = ({ list }) => {
  const [products, setProducts] = useState(list);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const renderItem = (item) => (
    <List.Item>
      <CardProduct item={item} />
    </List.Item>
  );
  return (
    <List
      grid={{
        gutter: 16,
        sm: 1,
        md: 2,
        xl: 4,
        // xxl: 6,
      }}
      dataSource={products}
      renderItem={(item) => renderItem(item)}
    />
  );
};

export default ListProduct;
