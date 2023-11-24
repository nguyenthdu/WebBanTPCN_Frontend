import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
// import "./CategoryStyles.scss";
import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import CategoryForm from "../../../component/categoryForm/CategoryForm";
import {
  getAllCategory,
  handleCheckbox,
  handleSelectAll,
} from "../../../redux/actions/CategoryActions";

const Category = ({
  header,
  selectAll,
  itemsCategory,
  getAllCategory,
  handleCheckbox,
  handleSelectAll,
}) => {
  useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);

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
        <td>{item.name}</td>
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
            <h1>Danh sách loại sản phẩm</h1>
            <Button
              variant="primary btn custom-btn ms-5"
              onClick={handleShow}
              style={{
                fontSize: "1.2em",
                backgroundColor: isShow ? "#dc3545" : "green",
              }}
            >
              {isShow ? "Đóng" : "Thêm loại sản phẩm"}
            </Button>
          </div>
          {isShow ? (
            <CategoryForm />
          ) : (
            <>
              <h5 className="custom-quantity">{`Có ${itemsCategory.length} sản phẩm`}</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    {renderItemHeader(header)}
                    <td>
                      <BsFillTrashFill className="custom-icon-trash" />
                    </td>
                  </tr>
                </thead>
                <tbody>{renderItem(itemsCategory)}</tbody>
              </Table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  header: state.category.header,
  selectAll: state.category.selectAll,
  itemsCategory: state.category.itemsCategory,
});

const mapDispatchToProps = {
  handleCheckbox,
  handleSelectAll,
  getAllCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
