import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { connect } from "react-redux";
import { getAllBrands } from "../../redux/actions/BrandActions";
import { getAllCategory } from "../../redux/actions/CategoryActions";
import { getAllManufacturer } from "../../redux/actions/ManufactureActions";
import {
  convertImagesToBase64,
  getItemsById,
  updateItems,
} from "../../redux/actions/ProductActions";
import "./ProductFormStyles.scss";

const ProductForm = ({
  getAllBrands,
  itemsBrand,
  getAllCategory,
  itemsCategory,
  getAllManufacturer,
  itemsManufacturer,
  getItemsById,
  updateItems,
  items,
  itemId,
}) => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  // const [updateItem, setUpdateItem] = useState({});
  const [productStatus, setProductStatus] = useState(
    formData.quantity > 0 ? "1" : "0"
  ); // 1: còn hàng, 0: hết hàng

  // const navigate = useNavigate();
  // lấy dữ liệu của brand, category, manufacturer
  useEffect(() => {
    getAllBrands();
    getAllCategory();
    getAllManufacturer();
  }, [getAllBrands, getAllCategory, getAllManufacturer]);

  const brands = itemsBrand;
  const categories = itemsCategory;
  const manufacturers = itemsManufacturer;

  // cập nhật lại trạng thái của sản phẩm
  useEffect(() => {
    const updatedStatus = formData.quantity > 0 ? "1" : "0";
    setProductStatus(updatedStatus);
  }, [formData.quantity]);

  // lấy dữ liệu của item theo id
  useEffect(() => {
    const fetchData = async () => {
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

  // Sau khi dữ liệu đã được load thành công
  useEffect(() => {
    // Chuyển đổi hình ảnh thành base64
    const itemsWithBase64 = convertImagesToBase64([items])[0];
    setFormData(itemsWithBase64);
  }, [items]);

  // // chỗ này cần xem lại nếu muốn set lại giá trị cho selectedBrand
  // useEffect(() => {
  //   console.log("formData", formData);

  //   // Kiểm tra xem formData.brand có được xác định hay không trước khi truy cập thuộc tính id của nó
  //   if (formData.brand) {
  //     console.log("formdata.brandid", formData.brand.id);
  //   } else {
  //     console.log("formdata.brand is undefined");
  // }

  //   console.log("selectedBrand", selectedBrand);
  // }, [formData]);

  // nhấn lưu
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Trích xuất chỉ những trường cần thiết để cập nhật
      const {
        id,
        nameFood,
        description,
        price,
        quantity,
        imageFiles,
        ingredients,
        packingWay,
        dosageForm,
        placeOfManufacture,
        expiryDate,
        manufacturer,
        brand,
        category,
        discount,
        status,
      } = formData;

      const dataUpdate = {
        id,
        nameFood,
        description,
        price,
        quantity,
        imageFiles,
        ingredients,
        packingWay,
        dosageForm,
        placeOfManufacture,
        expiryDate,
        manufacturerId: manufacturer.id,
        brandId: brand.id,
        categoryId: category.id,
        discount,
        status,
      };

      // await updateItems({ dataUpdate });
      var requestOptions = {
        method: "PUT",
        body: dataUpdate,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/v1/foodFunctions", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      console.log("Form submitted:", dataUpdate);
    } catch (error) {
      // Xử lý lỗi
      console.error("Error updating item:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   var formData = new FormData();
  //   formData.append("id", formData.id);
  //   formData.append("nameFood", formData.nameFood);
  //   formData.append("description", formData.description);
  //   formData.append("price", formData.price);
  //   formData.append("quantity", formData.quantity);
  //   formData.append("ingredients", formData.ingredients);
  //   formData.append("packingWay", formData.packingWay);
  //   formData.append("dosageForm", formData.dosageForm);
  //   formData.append("placeOfManufacture", formData.placeOfManufacture);
  //   formData.append("expiryDate", formData.expiryDate);
  //   formData.append("manufacturerId", formData.manufacturer.id);
  //   formData.append("brandId", formData.brand.id);
  //   formData.append("categoryId", formData.category.id);
  //   formData.append("status", formData.status);
  //   formData.append("discount", formData.discount);
  //   formData.imageFiles.forEach((image) => {
  //     formData.append("image", image);
  //   });

  //   console.log("Form submitted:", formData);

  //   var requestOptions = {
  //     method: "PUT",
  //     body: formData,
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:8080/api/v1/foodFunctions", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  const handleImagesChange = (e) => {
    // Xử lý khi người dùng chọn hình ảnh
    const files = Array.from(e.target.files);

    // Chuyển đổi các ảnh thành base64
    const base64Images = files.map((file) => URL.createObjectURL(file));

    // Thêm các ảnh mới vào danh sách images và imageBase64
    setFormData((prevFormData) => ({
      ...prevFormData,
      imageFiles: [...(prevFormData.imageFiles || []), ...files],
      imageBase64: [...(prevFormData.imageBase64 || []), ...base64Images],
    }));
  };

  // hàm xóa ảnh
  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => {
      const newImages = [...prevFormData.imageBase64];
      newImages.splice(index, 1);

      const newImageFiles = [...prevFormData.imageFiles];
      newImageFiles.splice(index, 1);

      return {
        ...prevFormData,
        imageBase64: newImages,
        imageFiles: newImageFiles,
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

        <Col>
          <Form.Group controlId="formProductStatus">
            <Form.Label className="custom-label">
              <h5 className="custom-label">Trạng thái</h5>
            </Form.Label>
            <Form.Control
              disabled
              as="select"
              value={productStatus}
              onChange={(e) => {
                setProductStatus(e.target.value);
                setFormData({
                  ...formData,
                  status: productStatus === 1 ? true : false,
                });
              }}
              style={{
                fontWeight: "bold",
                color:
                  productStatus === "1"
                    ? "green"
                    : productStatus === "0"
                    ? "red"
                    : "black",
              }}
            >
              <option value="" disabled selected>
                Chọn trạng thái
              </option>
              <option value="1">Còn hàng</option>
              <option value="0">Hết hàng</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col>
          <Form.Group controlId="formProductIngredients">
            <Form.Label className="custom-label">
              <h5 className="custom-label">Thành phần</h5>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Nhập thành phần của sản phẩm"
              value={formData.ingredients}
              onChange={(e) =>
                setFormData({ ...formData, ingredients: e.target.value })
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
              value={
                selectedBrand
                  ? selectedBrand
                  : formData.brand
                  ? formData.brand.id
                  : ""
              }
              placeholder="Chọn thương hiệu"
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setFormData({
                  ...formData,
                  // brandId: parseInt(e.target.value, 10),
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Danh mục</h5>
            </Form.Label>
            <Form.Control
              as="select"
              value={
                selectedCategory
                  ? selectedCategory
                  : formData.category
                  ? formData.category.id
                  : ""
              }
              placeholder="Chọn danh mục"
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setFormData({
                  ...formData,
                  // categoryId: parseInt(e.target.value, 10),
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
            <Form.Label className="custom-label">
              <h5 className="custom-label">Nhà sản xuất</h5>
            </Form.Label>
            <Form.Control
              as="select"
              value={
                selectedManufacturer
                  ? selectedManufacturer
                  : formData.manufacturer
                  ? formData.manufacturer.id
                  : ""
              }
              placeholder="Chọn nhà sản xuất"
              onChange={(e) => {
                setSelectedManufacturer(e.target.value);
                setFormData({
                  ...formData,
                  // manufacturerId: parseInt(e.target.value, 10),
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
          {formData.imageBase64 && formData.imageBase64.length > 0 && (
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
              {formData.imageBase64.map((image, index) => (
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
                    src={image}
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
  items: state.product.items || [],
  itemsBrand: state.brand.itemsBrand || [],
  itemsCategory: state.category.itemsCategory || [],
  itemsManufacturer: state.manufacturer.itemsManufacturer || [],
});

const mapDispatchToProps = {
  getAllCategory,
  getAllBrands,
  getAllManufacturer,
  updateItems,
  getItemsById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
