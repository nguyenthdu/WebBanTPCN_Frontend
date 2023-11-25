import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
import ProductForm from "../../../component/productForm/ProductForm";
import ProductFormUpdate from "../../../component/productForm/ProductFormUpdate";
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
  const navigate = useNavigate();

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
        <td style={{ width: "30%" }}>
          <img
            alt={item.nameFood}
            className="ctm-img"
            src={item.imageBase64[0]}
            style={{ maxHeight: "auto", maxWidth: "50%" }}
          />
        </td>
        <td style={{ width: "30%" }}>{item.nameFood}</td>
        <td>{item.quantity}</td>
        <td>
          {item.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
          / {item.packingWay}
        </td>
        <td className="d-flex flex-column">
          <Button
            variant="btn"
            type="submit"
            style={{
              backgroundColor: "#DC3749",
              marginBottom: "5px",
              width: "90px",
              justifyContent: "center",
            }}
          >
            Xóa
          </Button>
          <Button
            variant="btn"
            type="submit"
            style={{ backgroundColor: "#1FA3B5", width: "90px" }}
            onClick={() => handleUpdateClick(item.id)}
          >
            Cập nhật
          </Button>
        </td>
      </tr>
    ));
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
    setIsShowUpdate(false);
    // reload lại trang
    if (isShow || isShowUpdate) {
      window.location.reload();
      navigate("/admin/product");
    }
  };

  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);
  // chuyển trang update
  const handleUpdateClick = (id) => {
    setIsShowUpdate(!isShowUpdate);
    setIsShow(!isShow);
    setIdUpdate(id);
  };

  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <div className="d-flex flex-row">
            <h1>
              {isShowUpdate
                ? "Cập nhật sản phẩm"
                : isShow
                ? "Thêm sản phẩm"
                : "Danh sách sản phẩm"}
            </h1>
            <Button
              variant="primary btn custom-btn ms-5"
              onClick={handleShow}
              style={{
                fontSize: "1.2em",
                backgroundColor: isShow || isShowUpdate ? "#dc3545" : "green",
              }}
            >
              {isShow || isShowUpdate ? "Đóng" : "Thêm sản phẩm"}
            </Button>
          </div>
          {isShowUpdate ? (
            <ProductFormUpdate itemId={idUpdate} />
          ) : isShow ? (
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
