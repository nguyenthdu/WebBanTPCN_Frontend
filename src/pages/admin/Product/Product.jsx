import React from "react";
import { Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { connect } from "react-redux";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
import {
  handleCheckbox,
  handleSelectAll,
} from "../../../redux/actions/ProductActions";
import "./ProductStyles.scss";

const Product = ({
  header,
  selectAll,
  items,
  handleCheckbox,
  handleSelectAll,
}) => {
  const renderItemHeader = (element) => {
    return element.map((item) => (
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
    ));
  };

  const renderItem = (element) => {
    return element.map((item) => (
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
    ));
  };

  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <h1>Danh sách sản phẩm</h1>
          <h5 className="custom-quantity">có {items.length} sản phẩm</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                {renderItemHeader(header)}
                <td>
                  <BsFillTrashFill className="custom-icon-trash" />
                </td>
              </tr>
            </thead>
            <tbody>{renderItem(items)}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  header: state.product.header,
  selectAll: state.product.selectAll,
  items: state.product.items,
});

const mapDispatchToProps = {
  handleCheckbox,
  handleSelectAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
