import { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListProduct from "../../../component/ListProduct/ListProduct";
import Loading from "../../../component/Loading/Loading";
import BanerRight from "../../../component/introduction/banerRight";
import Introduction from "../../../component/introduction/introduction";
import foodFunctionService from "../../../services/foodFunction.service";
import "./style.scss";

const HomePage = () => {
  const [products, setProducts] = useState();
  // const [visibleProducts, setVisibleProducts] = useState(10);
  const [content, setContent] = useState(null);
  const slider = [
    {
      name: "name 1",
      image: "http://surl.li/njjxn",
      id: "1",
    },
    {
      name: "name 2",
      image: "http://surl.li/njjya",
      id: "2",
    },
    {
      name: "name 3",
      image: "http://surl.li/njjyo",
      id: "3",
    },
  ];
  const [sliderIntroduction, setSliderIntroduction] = useState(slider);

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

  // Hàm lấy dữ liệu từ API
  useEffect(() => {
    // Thực hiện chỉ một lần khi component được tạo ra
    const fetchData = async () => {
      try {
        const response = await foodFunctionService.getFoodList();
        // Lấy base64 từ imageFiles
        const newProducts = response.map((product) => {
          const imageBase64 = getImageBase64(product.imageFiles);
          return { ...product, imageBase64 };
        });

        // Gắn lại vào products
        setProducts(newProducts);

        // In ra màn hình để kiểm tra
        console.log("Updated Products: ", newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Mảng phụ thuộc trống để chỉ chạy một lần

  useEffect(() => {
    if (Array.isArray(products)) {
      const imageBase64 = products[0].imageFiles[0].picByte;
      // Tạo URL dữ liệu từ dữ liệu base64
      const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
      // console.log("home: " + imageUrl);
    }
    console.log("xem trong homepage: " + products);
  }, [products]);

  const renderSliderIntroduction = () => {
    return <Introduction introduction={sliderIntroduction} />;
  };

  return (
    <Container className="my-4" style={{ maxWidth: "100%" }}>
      <div className="product__Container_slider_introduction">
        <div className="slider__Introduction">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={8} className="banner__left">
              {content !== null ? content : renderSliderIntroduction()}
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="banner__right">
              <BanerRight />
            </Col>
          </Row>
        </div>
      </div>
      <div className="loadinggg-container">
        <div className="loadinggg">
          {Array.isArray(products) && products.length > 0 ? (
            <ListProduct list={products} />
          ) : (
            <div className="custom-loading">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default memo(HomePage);
