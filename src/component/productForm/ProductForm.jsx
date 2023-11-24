import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { connect } from "react-redux";
import { getAllBrands } from "../../redux/actions/BrandActions";
import { getAllCategory } from "../../redux/actions/CategoryActions";
import { getAllManufacturer } from "../../redux/actions/ManufactureActions";
import { addItems } from "../../redux/actions/ProductActions";
import "./ProductFormStyles.scss";
const ProductForm = ({
  getAllBrands,
  itemsBrand,
  getAllCategory,
  itemsCategory,
  getAllManufacturer,
  itemsManufacturer,
  addItems,
}) => {
  const [formData, setFormData] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the form data, like sending it to a server

    try {
      await addItems(formData);

      // Cập nhật state hoặc thực hiện các hành động khác sau khi thêm sản phẩm thành công

      // Ví dụ: Xóa dữ liệu trong form hoặc chuyển hướng đến trang danh sách sản phẩm
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error adding items:", error);
    }
    console.log("Form submitted:", formData);
  };

  const handleImagesChange = (e) => {
    // Xử lý khi người dùng chọn hình ảnh
    const files = Array.from(e.target.files);
    // setFormData({ ...formData, images: files });
    // Thêm các ảnh mới vào danh sách hiện tại
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...(prevFormData.images || []), ...files],
    }));
  };

  // hàm xóa ảnh
  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => {
      const newImages = [...prevFormData.images];
      newImages.splice(index, 1);
      return {
        ...prevFormData,
        images: newImages,
      };
    });
  };

  useEffect(() => {
    getAllBrands();
    getAllCategory();
    getAllManufacturer();
  }, [getAllBrands, getAllCategory, getAllManufacturer]);

  const brands = itemsBrand;
  const categories = itemsCategory;

  const manufacturers = itemsManufacturer;

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductName">
            <Form.Label className="custom-label">Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên sản phẩm"
              value={formData.nameFood}
              onChange={(e) =>
                setFormData({ ...formData, nameFood: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductPrice">
            <Form.Label className="custom-label">Giá sản phẩm</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Nhập giá sản phẩm"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductPlaceOfManufacture">
            <Form.Label className="custom-label">Xuất xứ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập xuất xứ"
              value={formData.placeOfManufacture}
              onChange={(e) =>
                setFormData({ ...formData, placeOfManufacture: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductDescription">
            <Form.Label className="custom-label">Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Nhập mô tả sản phẩm"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductQuantity">
            <Form.Label className="custom-label">Tồn kho</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số lượng tồn kho của sản phẩm"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductIngredients">
            <Form.Label className="custom-label">Thành phần</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập thành phần của sản phẩm"
              value={formData.ingredients}
              onChange={(e) =>
                setFormData({ ...formData, ingredients: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductDiscount">
            <Form.Label className="custom-label">Khuyến mãi</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập khuyến mãi"
              value={formData.discount}
              onChange={(e) =>
                setFormData({ ...formData, discount: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductDosageForm">
            <Form.Label className="custom-label">Dạng bào chế</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập dạng bào chế"
              value={formData.dosageForm}
              onChange={(e) =>
                setFormData({ ...formData, dosageForm: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductExpiryDate">
            <Form.Label className="custom-label">Hạn sử dụng</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập hạn sử dụng (12 tháng: 12...)"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductPackingWay">
            <Form.Label className="custom-label">Cách đóng gói</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập cách đóng gói"
              value={formData.packingWay}
              onChange={(e) =>
                setFormData({ ...formData, packingWay: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formProductBrand">
            <Form.Label className="custom-label">Thương hiệu</Form.Label>
            <Form.Control
              as="select"
              value={selectedBrand}
              placeholder="Chọn thương hiệu"
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setFormData({
                  ...formData,
                  brand: brands.find(
                    (brand) => brand.id === parseInt(e.target.value, 10)
                  ),
                });
              }}
            >
              <option value="" disabled selected>
                Chọn thương hiệu
              </option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.nameBrand}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductCategory">
            <Form.Label className="custom-label">Danh mục</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              placeholder="Chọn danh mục"
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setFormData({
                  ...formData,
                  category: categories.find(
                    (category) => category.id === parseInt(e.target.value, 10)
                  ),
                });
              }}
            >
              <option value="" disabled selected>
                Chọn danh mục
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formProductManufacturer">
            <Form.Label className="custom-label">Nhà sản xuất</Form.Label>
            <Form.Control
              as="select"
              value={selectedManufacturer}
              placeholder="Chọn nhà sản xuất"
              onChange={(e) => {
                setSelectedManufacturer(e.target.value);
                setFormData({
                  ...formData,
                  manufacturer: manufacturers.find(
                    (manufacturer) =>
                      manufacturer.id === parseInt(e.target.value, 10)
                  ),
                });
              }}
            >
              <option value="" disabled selected>
                Chọn nhà sản xuất
              </option>
              {manufacturers.map((manufacturer) => (
                <option key={manufacturer.id} value={manufacturer.id}>
                  {manufacturer.nameManufacturer}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductStatus">
            <Form.Label className="custom-label">Còn hàng</Form.Label>
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
              checked={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.checked })
              }
            />
          </Form.Group>
        </Col>
      </Row> */}

      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductImage">
            <Form.Label className="custom-label">Ảnh sản phẩm</Form.Label>
            {formData.images && formData.images.length > 0 ? (
              <>
                <Form.Label className="custom-label">Ảnh sản phẩm</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImagesChange}
                  multiple
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <h5 className="custom-label" style={{ marginRight: "10px" }}>
                    Ảnh đã chọn:
                  </h5>
                  {formData.images.map((image, index) => (
                    <div key={index} style={{ marginRight: "10px" }}>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <BsXLg />
                      </Button>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Selected Image ${index}`}
                        style={{
                          width: "100px",
                          height: "auto",
                          marginRight: "5px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <Form.Control
                key={formData.images ? "withImages" : "withoutImages"}
                type="file"
                accept="image/*"
                onChange={handleImagesChange}
                multiple
              />
            )}
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
  itemsCategory: state.category.itemsCategory || [],
  itemsManufacturer: state.manufacturer.itemsManufacturer || [],
});

const mapDispatchToProps = {
  getAllCategory,
  getAllBrands,
  getAllManufacturer,
  addItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
