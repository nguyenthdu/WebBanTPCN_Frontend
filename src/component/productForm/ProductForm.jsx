import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    images: [], // Danh sách ảnh đã chọn
  });
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    getAllBrands();
    getAllCategory();
    getAllManufacturer();
  }, [getAllBrands, getAllCategory, getAllManufacturer]);

  const brands = itemsBrand;
  const categories = itemsCategory;
  const manufacturers = itemsManufacturer;

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("nameFood", formData.nameFood || "thanh12ss2asd223");
    formdata.append("description", formData.description || "sssss");
    formdata.append("price", formData.price || "100");
    formdata.append("quantity", formData.quantity || "10");
    formdata.append("ingredients", formData.ingredients || "aaaaaaaaaaaa");
    formdata.append("packingWay", formData.packingWay || "cccc");
    formdata.append("dosageForm", formData.dosageForm || "ccc");
    formdata.append(
      "placeOfManufacture",
      formData.placeOfManufacture || "ccccc"
    );
    formdata.append("expiryDate", formData.expiryDate || "222");
    formdata.append("manufacturerId", formData.manufacturerId || "1");
    formdata.append("brandId", formData.brandId || "1");
    formdata.append("categoryId", formData.categoryId || "1");
    formdata.append("discount", formData.discount || "10");

    // Thêm ảnh vào FormData
    formData.images.forEach((image) => {
      formdata.append("imageFiles", image);
    });

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/foodFunctions", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleImagesChange = (e) => {
    // Xử lý khi người dùng chọn hình ảnh
    const files = Array.from(e.target.files);
    // Thêm các ảnh mới vào danh sách hiện tại
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...files],
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

  return (
    <form onSubmit={handleSubmit}>
      <Row className="custom-row" style={{ marginTop: "10px" }}>
        <Col>
          <Form.Group controlId="formProductName">
            <Form.Label className="custom-label">
              <h5 className="custom-label">Tên sản phẩm</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Giá sản phẩm (VND)</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Xuất xứ</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Mô tả</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Tồn kho</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Thành phần</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Khuyến mãi (%)</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Dạng bào chế</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Hạn sử dụng (tháng)</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Cách đóng gói</h5>
            </Form.Label>
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Thương hiệu</h5>
            </Form.Label>
            <Form.Control
              as="select"
              value={selectedBrand}
              placeholder="Chọn thương hiệu"
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setFormData({
                  ...formData,
                  brandId: parseInt(e.target.value, 10),
                  // brand: brands.find(
                  //   (brand) => brand.id === parseInt(e.target.value, 10)
                  // ),
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Danh mục</h5>
            </Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              placeholder="Chọn danh mục"
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setFormData({
                  ...formData,
                  categoryId: parseInt(e.target.value, 10),
                  // category: categories.find(
                  //   (category) => category.id === parseInt(e.target.value, 10)
                  // ),
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Nhà sản xuất</h5>
            </Form.Label>
            <Form.Control
              as="select"
              value={selectedManufacturer}
              placeholder="Chọn nhà sản xuất"
              onChange={(e) => {
                setSelectedManufacturer(e.target.value);
                setFormData({
                  ...formData,
                  manufacturerId: parseInt(e.target.value, 10),
                  // manufacturer: manufacturers.find(
                  //   (manufacturer) =>
                  //     manufacturer.id === parseInt(e.target.value, 10)
                  // ),
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
      <Row className="custom-row">
        <Form.Group controlId="formProductImage">
          <Form.Label
            className="custom-label"
            style={{ margin: "10px 10px 0 0" }}
          >
            <h5 className="custom-label">Ảnh sản phẩm</h5>
          </Form.Label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            multiple
            onChange={handleImagesChange}
          />
          {formData.images.length > 0 && (
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
                    type="button"
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
          )}
        </Form.Group>
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
    </form>
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
