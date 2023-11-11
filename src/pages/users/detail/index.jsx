import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ImagesDetail from "../../../component/imagesDetail/imagesDetail";
import InformationProduct from "../../../component/informationProduct/informationProduct";
import foodFunctionService from "../../../services/foodFunction.service";
import "./style.scss";

import Count from "../../../component/count/count";
import CustomTab from "../../../component/tab/tab";
import useShoppingCart from "../../../hook/shoppingCart/useShoppingCart";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [content, setContent] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleCountChange = (newCount) => {
    setSelectedQuantity(newCount);
  };

  // Fetch data for the specific product ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [foodData] = await Promise.all([foodFunctionService.getFood(id)]);
        setProductData(foodData);
        console.log("trong detail id: " + JSON.stringify(foodData));
      } catch (error) {
        const errorMessage =
          error.message || "An error occurred while fetching data";
        setContent(errorMessage);
      }
    };

    fetchData();
  }, [id]); // Thêm dependency 'id' để useEffect chạy khi id thay đổi

  const handleAddToCart = () => {
    addToCart(productData, selectedQuantity);
  };

  // Render product details when data is available
  if (productData) {
    return (
      <div
        className="container custom-container p-2"
        style={{ maxWidth: "none" }}
      >
        <div className="product-detail-container">
          <Row className="product-detail-row">
            {/* Đối với màn hình lớn, hiển thị 1 cột */}
            <Col className="product-detail-col d-md-none">
              <div className="product-image col-12">
                <ImagesDetail images={productData.images} />
              </div>
              <div className="product-infor col-12">
                <InformationProduct productData={productData} />
                <div className="btn-buy-cart">
                  <div className="count">
                    <Count hidden={1} countValue={handleCountChange} />
                  </div>
                  <button className="btn-buy" onClick={handleAddToCart}>
                    <h5 className="txt-buy" style={{ marginBottom: "unset" }}>
                      Chọn mua
                    </h5>
                  </button>
                </div>
              </div>
            </Col>

            {/* Đối với màn hình lớn hơn md, hiển thị 2 cột */}
            <Col className="product-detail-col d-none d-md-flex">
              <div className="product-image col-md-5">
                <ImagesDetail images={productData.images} />
              </div>
              <div className="product-infor col-md-7">
                <InformationProduct productData={productData} />
                <div className="btn-buy-cart">
                  <div className="count">
                    <Count hidden={1} countValue={handleCountChange} />
                  </div>
                  <button className="btn-buy mt-2" onClick={handleAddToCart}>
                    <h5 className="txt-buy" style={{ marginBottom: "unset" }}>
                      Chọn mua
                    </h5>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="custom-tab-container">
          <CustomTab />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default memo(ProductDetail);
