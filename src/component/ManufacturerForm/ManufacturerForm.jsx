import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addManufacturer,
  getManufacturerById,
  updateManufacturer,
} from "../../redux/actions/ManufactureActions";
import "./ManufacturerFormStyles.scss";

const ManufacturerForm = ({
  addManufacturer,
  formType,
  itemId,
  getManufacturerById,
  itemsManufacturer,
  updateManufacturer,
}) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (formType === "update" && itemId) {
        try {
          await getManufacturerById(itemId);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData(); // Call the async function immediately
  }, [formType, itemId]);

  useEffect(() => {
    if (formType === "update" && itemId) {
      const item = itemsManufacturer;
      setFormData(item);
    }
  }, [formType, itemId, itemsManufacturer]);

  const handleSubmit = async (e) => {
    try {
      if (formType === "add") {
        // console.log("formdata", formData);
        await addManufacturer(formData);
      } else {
        // console.log("formdata update ", formData);
        await updateManufacturer(formData);
      }
      navigate("/admin/manufacturer");
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
          <Form.Group controlId="formManufacturerName">
            <Form.Label className="custom-label">Tên nhà sản xuất</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên nhà sản xuất"
              value={formData.nameManufacturer}
              onChange={(e) =>
                setFormData({ ...formData, nameManufacturer: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formManufacturerPhoneNumber">
            <Form.Label className="custom-label">Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formManufacturerEmail">
            <Form.Label className="custom-label">Nhập email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formManufacturerAddress">
            <Form.Label className="custom-label">Địa chỉ</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Nhập địa chỉ"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formManufacturerDescription">
            <Form.Label className="custom-label">Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Nhập mô tả"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
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

const mapStateToProps = (state) => ({
  itemsManufacturer: state.manufacturer.itemsManufacturer || [],
});

const mapDispatchToProps = {
  addManufacturer,
  updateManufacturer,
  getManufacturerById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerForm);
