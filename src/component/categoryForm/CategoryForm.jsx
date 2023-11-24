import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addCategory } from "../../redux/actions/CategoryActions";
import "./CategoryFormStyles.scss";

const CategoryForm = ({ addCategory }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the form data, like sending it to a server

    try {
      await addCategory(formData);

      // Cập nhật state hoặc thực hiện các hành động khác sau khi thêm sản phẩm thành công

      // Ví dụ: Xóa dữ liệu trong form hoặc chuyển hướng đến trang danh sách sản phẩm
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error adding items:", error);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formCategoryName">
            <Form.Label className="custom-label">Tên loại sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên loại sản phẩm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="custom-row" style={{ justifyContent: "center" }}>
        <Button
          variant="primary btn"
          style={{
            backgroundColor: "green",
            justifyContent: "center",
            width: "30%",
          }}
          type="submit"
        >
          Lưu
        </Button>
      </Row>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
