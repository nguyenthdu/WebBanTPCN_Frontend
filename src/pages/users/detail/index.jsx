import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ImagesDetail from "../../../component/imagesDetail/imagesDetail";
import InformationProduct from "../../../component/informationProduct/informationProduct";
import foodFunctionService from "../../../services/foodFunction.service";
import "./style.scss";

import Loading from "../../../component/Loading/Loading";
import Count from "../../../component/count/count";
import CustomTab from "../../../component/tab/tab";
import { useCartContext } from "../../../context/cartContext/cartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [content, setContent] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart, carts } = useCartContext();

  const handleCountChange = (newCount) => {
    setSelectedQuantity(newCount);
  };

  const getImageBase64 = (imageFiles) => {
    if (Array.isArray(imageFiles) && imageFiles.length > 0) {
      // Lặp qua từng ảnh trong mảng imageFiles
      const imagesBase64 = imageFiles.map((image) => {
        return `data:image/jpeg;base64,${image.picByte}`;
      });

      return imagesBase64;
    }
    return null;
  };

  // Fetch data for the specific product ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await foodFunctionService.getFood(id);
        console.log("Updated Products: ", response);
        // Lấy base64 từ imageFiles
        const imageBase64 = getImageBase64(response.imageFiles);
        const newProducts = { ...response, imageBase64 };
        // Gắn lại vào products
        setProduct(newProducts);

        // In ra màn hình để kiểm tra
        console.log("Updated Products: ", newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Mảng phụ thuộc trống để chỉ chạy một lần

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [foodData] = await Promise.all([foodFunctionService.getFood(id)]);
  //       setProductData(foodData);
  //     } catch (error) {
  //       const errorMessage =
  //         error.message || "An error occurred while fetching data";
  //       setContent(errorMessage);
  //     }
  //   };

  //   fetchData();
  // }, [id]); // Thêm dependency 'id' để useEffect chạy khi id thay đổi

  // const carts = useSelector((state) => state.cartReducer.Carts);
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: selectedQuantity });
  };

  // Render product details when data is available
  if (product) {
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
                <ImagesDetail images={product.imageBase64} />
              </div>
              <div className="product-infor col-12">
                <InformationProduct productData={product} />
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
                <ImagesDetail images={product.imageBase64} />
              </div>
              <div className="product-infor col-md-7">
                <InformationProduct productData={product} />
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
          <CustomTab productData={product} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="custom-loading">
        <Loading />
      </div>
    );
  }
};

export default memo(ProductDetail);
