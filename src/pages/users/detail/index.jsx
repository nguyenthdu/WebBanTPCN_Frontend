import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ImagesDetail from "../../../component/imagesDetail/imagesDetail";
import InformationProduct from "../../../component/informationProduct/informationProduct";
import foodFunctionService from "../../../services/foodFunction.service";
import "./style.scss";

import Count from "../../../component/count/count";
import CustomTab from "../../../component/tab/tab";

const ProductDetail = () => {
  const hidden = { hidden: "0" };
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [content, setContent] = useState(null);

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
                    <Count hidden={hidden} />
                  </div>
                  <button className="btn-buy">
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
                    <Count hidden={hidden} />
                  </div>
                  <button className="btn-buy mt-2">
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
