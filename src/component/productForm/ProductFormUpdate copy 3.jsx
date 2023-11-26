import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllBrands } from "../../redux/actions/BrandActions";
import { getAllCategory } from "../../redux/actions/CategoryActions";
import { getAllManufacturer } from "../../redux/actions/ManufactureActions";
import { getItemsById, updateItems } from "../../redux/actions/ProductActions";
import "./ProductFormStyles.scss";

const ProductForm = ({
  getItemsById,
  updateItems,
  getAllBrands,
  getAllCategory,
  getAllManufacturer,
  items,
  itemsBrand,
  itemsCategory,
  itemsManufacturer,
  itemId,
}) => {
  const [itemData, setItemData] = useState({});
  const [itemDataUpdate, setItemDataUpdate] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      console.log("id: ", itemId);
      if (itemId) {
        try {
          await getItemsById(itemId);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [itemId]);

  useEffect(() => {
    if (itemId) {
      const item = items;
      setItemData(item);
      console.log("item", item);
    }
  }, [itemId, items]);

  useEffect(() => {
    console.log("itemDataUpdate: ", itemDataUpdate);
  }, [itemDataUpdate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItems(itemDataUpdate);
      // navigate("/admin/product");
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error adding items:", error);
    }
    console.log("Form submitted:", itemDataUpdate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row className="custom-row" style={{ marginTop: "10px" }}>
        <Col>
          <Form.Group controlId="formProductName">
            <Form.Label className="custom-label">
              <h5 className="custom-label">Tên sản phẩm</h5>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Nhập tên sản phẩm"
              value={itemData.nameFood}
              onChange={(e) =>
                setItemData({ ...itemData, nameFood: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>
    </form>
  );
};

const mapStateToProps = (state) => ({
  items: state.product.items || [],
  itemsBrand: state.brand.itemsBrand || [],
  itemsManufacturer: state.manufacturer.itemsManufacturer || [],
  itemsCategory: state.category.itemsCategory || [],
});

const mapDispatchToProps = {
  getItemsById,
  updateItems,
  getAllBrands,
  getAllCategory,
  getAllManufacturer,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
