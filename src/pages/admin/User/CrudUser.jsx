import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavbarUser from "../../../component/NavBarUser/NavBarUser";
// import "./CrudUserStyles.scss";
import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import {
  deleteUser,
  getAllUser,
  handleCheckbox,
  handleSelectAll,
} from "../../../redux/actions/UserActions";

const CrudUser = ({
  header,
  selectAll,
  itemsUser,
  getAllUser,
  handleCheckbox,
  handleSelectAll,
  deleteUser,
}) => {
  useEffect(() => {
    getAllUser();
  }, [getAllUser]);

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
        {["firstName", "lastName", "phone", "email", "username", "role"].map(
          (field) => (
            <td key={field}>{item[field]}</td>
          )
        )}
        <td>
          <Button variant="link" onClick={handleDelete} style={{ padding: 0 }}>
            <BsFillTrashFill className="custom-icon-trash" />
          </Button>
        </td>
      </tr>
    ));
  };

  // Hàm xử lý khi nhấn nút để xóa các mục đã chọn
  const handleDelete = () => {
    // Lấy ra danh sách các id đã chọn
    const selectedIds = itemsUser
      .filter((item) => item.selected)
      .map((item) => item.id);

    // Gọi hành động xóa cho từng id đã chọn
    selectedIds.forEach((id) => {
      deleteUser(id);
    });
  };

  return (
    <div className="d-flex flex-row">
      <div className="content">
        <NavbarUser />
        <div className="main-content">
          <h1>Danh sách người dùng</h1>
          <h5 className="custom-quantity">{`Có ${itemsUser.length} người dùng`}</h5>
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
            <tbody>{renderItem(itemsUser)}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

// Map state và dispatch tới props
const mapStateToProps = (state) => ({
  header: state.user.header,
  selectAll: state.user.selectAll,
  itemsUser: state.user.itemsUser,
});

const mapDispatchToProps = {
  handleCheckbox,
  handleSelectAll,
  getAllUser,
  deleteUser,
};

// Kết nối component với Redux
export default connect(mapStateToProps, mapDispatchToProps)(CrudUser);
