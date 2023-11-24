import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { connect } from "react-redux";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
import ProductForm from "../../../component/productForm/ProductForm";
import {
  fetchItems,
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
  fetchItems,
}) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

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
        <td>
          <img
            alt={item.nameFood}
            className="ctm-img"
            src={item.imageBase64[0]}
            style={{ maxHeight: "auto", maxWidth: "50%" }}
          />
        </td>
        <td>{item.nameFood}</td>
        <td>{item.quantity}</td>
        <td>
          {item.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
          / {item.packingWay}
        </td>
        <td>
          <BsFillTrashFill className="custom-icon-trash" />
        </td>
      </tr>
    ));
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <div className="d-flex flex-row">
            <h1>Danh sách sản phẩm</h1>
            <Button
              variant="primary btn custom-btn ms-5"
              onClick={handleShow}
              style={{
                fontSize: "1.2em",
                backgroundColor: isShow ? "#dc3545" : "green",
              }}
            >
              {isShow ? "Đóng" : "Thêm sản phẩm"}
            </Button>
          </div>
          {isShow ? (
            <ProductForm />
          ) : (
            <>
              <h5 className="custom-quantity">{`Có ${items.length} sản phẩm`}</h5>
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
            </>
          )}
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
  fetchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
