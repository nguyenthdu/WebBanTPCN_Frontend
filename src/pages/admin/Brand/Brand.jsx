import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
// import "./BrandStyles.scss";
import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import BrandForm from "../../../component/BrandForm/BrandForm";
import {
  deleteBrand,
  getAllBrands,
  handleCheckbox,
  handleSelectAll,
} from "../../../redux/actions/BrandActions";

const Brand = ({
  header,
  selectAll,
  itemsBrand,
  getAllBrands,
  handleCheckbox,
  handleSelectAll,
  deleteBrand,
}) => {
  useEffect(() => {
    getAllBrands();
  }, [getAllBrands]);

  // State để xác định xem có hiển thị form thêm mới hay không
  const [isShow, setIsShow] = useState(false);

  // State để xác định form đang được sử dụng để thêm mới hay cập nhật
  const [isNewForm, setIsNewForm] = useState(false);

  // Hàm xử lý khi nhấn nút để hiển thị form thêm mới
  const handleShow = () => {
    setIsShow(!isShow);
    setIsNewForm(true); // Nếu muốn form được sử dụng để thêm mới
    setIsShowUpdate(false);

    // Reload lại trang
    if (isShowUpdate === true) {
      window.location.reload();
    }
  };

  // State để xác định xem có hiển thị form update hay không
  const [isShowUpdate, setIsShowUpdate] = useState(false);

  const [updatedItemId, setUpdatedItemId] = useState(null);
  // Hàm xử lý khi nhấn vào mỗi hàng để hiển thị form update
  const hanldleShowUpdate = (id) => {
    setIsShowUpdate(!isShowUpdate);
    setIsNewForm(false); // Nếu muốn form được sử dụng để cập nhật
    setIsShow(!isShow);
    setUpdatedItemId(id);
  };

  // Hàm xử lý khi nhấn nút để xóa các mục đã chọn
  const handleDelete = () => {
    // Lấy ra danh sách các id đã chọn
    const selectedIds = itemsBrand
      .filter((item) => item.selected)
      .map((item) => item.id);

    // Gọi hành động xóa cho từng id đã chọn
    selectedIds.forEach((id) => {
      deleteBrand(id);
    });
  };

  // Render thẻ header
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

  // Render từng hàng của bảng
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
        {["id", "nameBrand", "description", "origin"].map((field) => (
          <td key={field} onClick={() => hanldleShowUpdate(item.id)}>
            {item[field]}
          </td>
        ))}
        <td></td>
      </tr>
    ));
  };

  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarProduct />
        <div className="main-content">
          <div className="d-flex flex-row">
            <h1>
              {isShow || isShowUpdate
                ? isNewForm
                  ? "Thêm thương hiệu"
                  : "Cập nhật thương hiệu"
                : "Danh sách thương hiệu"}
            </h1>
            <Button
              variant="primary btn custom-btn ms-5"
              onClick={handleShow}
              style={{
                fontSize: "1.2em",
                backgroundColor: isShow || isShowUpdate ? "#dc3545" : "green",
              }}
            >
              {isShow || isShowUpdate ? "Đóng" : "Thêm thương hiệu"}
            </Button>
          </div>
          {isShow || isShowUpdate ? (
            <BrandForm
              formType={isNewForm ? "add" : "update"}
              itemId={updatedItemId}
            />
          ) : (
            <>
              <h5 className="custom-quantity">{`Có ${itemsBrand.length} sản phẩm`}</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    {renderItemHeader(header)}
                    <td>
                      <Button
                        variant="link"
                        onClick={handleDelete}
                        style={{ padding: 0 }}
                      >
                        <BsFillTrashFill className="custom-icon-trash" />
                      </Button>
                    </td>
                  </tr>
                </thead>
                <tbody>{renderItem(itemsBrand)}</tbody>
              </Table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Map state và dispatch tới props
const mapStateToProps = (state) => ({
  header: state.brand.header,
  selectAll: state.brand.selectAll,
  itemsBrand: state.brand.itemsBrand,
});

const mapDispatchToProps = {
  handleCheckbox,
  handleSelectAll,
  getAllBrands,
  deleteBrand,
};

// Kết nối component với Redux
export default connect(mapStateToProps, mapDispatchToProps)(Brand);
