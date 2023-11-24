import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addBrand,
  getBrandById,
  updateBrand,
} from "../../redux/actions/BrandActions";

import "./BrandFormStyles.scss";

const BrandForm = ({
  addBrand,
  updateBrand,
  getBrandById,
  formType,
  itemId,
  itemsBrand,
}) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (formType === "update" && itemId) {
        try {
          await getBrandById(itemId);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData(); // Call the async function immediately
  }, [formType, itemId]);

  useEffect(() => {
    if (formType === "update" && itemId) {
      const item = itemsBrand;
      setFormData(item);
    }
  }, [formType, itemId, itemsBrand]);

  const handleSubmit = async (e) => {
    try {
      if (formType === "add") {
        await addBrand(formData);
      } else {
        await updateBrand(formData);
      }
      navigate("/admin/brand");
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
          <Form.Group controlId="formBrandName">
            <Form.Label className="custom-label">Tên thương hiệu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên thương hiệu"
              value={formData.nameBrand}
              onChange={(e) =>
                setFormData({ ...formData, nameBrand: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBrandOrigin">
            <Form.Label className="custom-label">Xuất xứ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập xuất xứ"
              value={formData.origin}
              onChange={(e) =>
                setFormData({ ...formData, origin: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formBrandDescription">
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
  itemsBrand: state.brand.itemsBrand || [],
});

const mapDispatchToProps = {
  addBrand,
  updateBrand,
  getBrandById,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandForm);
