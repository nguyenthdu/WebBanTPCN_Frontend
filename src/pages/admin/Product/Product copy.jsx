import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
import "./ProductStyles.scss";

const Product = () => {
  const [header, setHeader] = useState([
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "ID" },
    { id: 2, title: "Code" },
    { id: 3, title: "Tên sản phẩm" },
    { id: 4, title: "Tồn kho" },
    { id: 5, title: "Giá" },
  ]);

  // State to track header checkbox
  const [selectAll, setSelectAll] = useState(false);

  const [item, setItem] = useState([
    {
      id: 1,
      code: "SP01",
      name: "Áo thun nam",
      quantity: 10,
      price: 100000,
      selected: false,
    },
    {
      id: 2,
      code: "SP02",
      name: "Áo thun nữ",
      quantity: 20,
      price: 200000,
      selected: false,
    },
    {
      id: 3,
      code: "SP03",
      name: "Áo thun trẻ em",
      quantity: 30,
      price: 300000,
      selected: false,
    },
    {
      id: 4,
      code: "SP04",
      name: "Áo thun nam",
      quantity: 40,
      price: 400000,
      selected: false,
    },
  ]);

  const renderItemHeader = (element) => {
    return element.map((item) => {
      return (
        <th className="custom-header" key={item.id}>
          {item.title === "Chọn toàn bộ" ? (
            <label>
              <input
                className="_ip"
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </label>
          ) : (
            item.title
          )}
        </th>
      );
    });
  };

  const handleSelectAll = () => {
    const updatedItem = item.map((element) => ({
      ...element,
      selected: !selectAll,
    }));
    setItem(updatedItem);
    setSelectAll(!selectAll);
  };

  const renderItem = (element) => {
    return element.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <label>
              <input
                className="_ip"
                type="checkbox"
                checked={item.selected}
                onChange={() => handleCheckbox(item.id)}
              />
            </label>
          </td>
          <td>{item.id}</td>
          <td>{item.code}</td>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>
            <BsFillTrashFill className="custom-icon-trash" />
          </td>
        </tr>
      );
    });
  };

  const handleCheckbox = (id) => {
    const updatedItem = item.map((element) => {
      if (id === 0) {
        // thì tất cả các checkbox đều false trừ id === 0
        if (element.id === 0) return { ...element, selected: true };
        return { ...element, selected: false };
      } else {
        if (element.id === id) {
          // thì id === 0 đảo trạng thái slelected
          return { ...element, selected: !element.selected };
        }
        // sau đó và === 0 luôn false
        return element.id === 0 ? { ...element, selected: false } : element;
      }
    });
    setItem(updatedItem);
  };

  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <h1>Danh sách sản phẩm</h1>
          <h5 className="custom-quantity">có n sản phẩm</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                {renderItemHeader(header)}
                <td>
                  <BsFillTrashFill className="custom-icon-trash" />
                </td>
              </tr>
            </thead>
            <tbody>{renderItem(item)}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Product;
