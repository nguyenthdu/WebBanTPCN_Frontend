import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { connect } from "react-redux";
import ManufacturerForm from "../../../component/ManufacturerForm/ManufacturerForm";
import NavbarProduct from "../../../component/NavBarProduct/NavbarProduct";
import {
  deleteManufacturer,
  getAllManufacturer,
  handleCheckbox,
  handleSelectAll,
} from "../../../redux/actions/ManufactureActions";
import "./ManufacturerStyles.scss";

const Manufacturer = ({
  header,
  selectAll,
  itemsManufacturer,
  getAllManufacturer,
  handleCheckbox,
  handleSelectAll,
  deleteManufacturer,
}) => {
  useEffect(() => {
    getAllManufacturer();
  }, [getAllManufacturer]);

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

  // State để xác định form đang được sử dụng để thêm mới hay cập nhật
  const [isNewForm, setIsNewForm] = useState(false);

  // State để xác định xem có hiển thị form update hay không
  const [isShowUpdate, setIsShowUpdate] = useState(false);

  const [updatedManufacturerId, setUpdatedManufacturerId] = useState(null);
  // Hàm xử lý khi nhấn vào mỗi hàng để hiển thị form update
  const hanldleShowUpdate = (id) => {
    setIsShowUpdate(!isShowUpdate);
    setIsNewForm(false); // Nếu muốn form được sử dụng để cập nhật
    setIsShow(!isShow);
    setUpdatedManufacturerId(id);
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
        {[
          "id",
          "nameManufacturer",
          "address",
          "phoneNumber",
          "email",
          "description",
        ].map((field) => (
          <td key={field} onClick={() => hanldleShowUpdate(item.id)}>
            {item[field]}
          </td>
        ))}
        {/* <td onClick={() => hanldleShowUpdate()}>{item.id}</td>
        <td onClick={() => hanldleShowUpdate()}>{item.nameManufacturer}</td>
        <td onClick={() => hanldleShowUpdate()}>{item.address}</td>
        <td onClick={() => hanldleShowUpdate()}>{item.phoneNumber}</td>
        <td onClick={() => hanldleShowUpdate()}>{item.email}</td>
        <td onClick={() => hanldleShowUpdate()}>{item.description}</td> */}
        <td></td>
      </tr>
    ));
  };

  // State để xác định xem có hiển thị form thêm mới hay không
  const [isShow, setIsShow] = useState(false);

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

  // Hàm xử lý khi nhấn nút để xóa các mục đã chọn
  const handleDelete = () => {
    // Lấy ra danh sách các id đã chọn
    const selectedIds = itemsManufacturer
      .filter((item) => item.selected)
      .map((item) => item.id);

    // Gọi hành động xóa cho từng id đã chọn
    selectedIds.forEach((id) => {
      deleteManufacturer(id);
    });
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
                  ? "Thêm loại sản phẩm"
                  : "Cập nhật loại sản phẩm"
                : "Danh sách loại sản phẩm"}
            </h1>
            <Button
              variant="primary btn custom-btn ms-5"
              onClick={handleShow}
              style={{
                fontSize: "1.2em",
                backgroundColor: isShow || isShowUpdate ? "#dc3545" : "green",
              }}
            >
              {isShow || isShowUpdate ? "Đóng" : "Thêm loại sản phẩm"}
            </Button>
          </div>
          {isShow || isShowUpdate ? (
            <ManufacturerForm
              formType={isNewForm ? "add" : "update"}
              itemId={updatedManufacturerId}
            />
          ) : (
            <>
              <h5 className="custom-quantity">{`Có ${itemsManufacturer.length} sản phẩm`}</h5>
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
                <tbody>{renderItem(itemsManufacturer)}</tbody>
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
  header: state.manufacturer.header,
  selectAll: state.manufacturer.selectAll,
  itemsManufacturer: state.manufacturer.itemsManufacturer,
});

const mapDispatchToProps = {
  handleCheckbox,
  handleSelectAll,
  getAllManufacturer,
  deleteManufacturer,
};

// Kết nối component với Redux
export default connect(mapStateToProps, mapDispatchToProps)(Manufacturer);
