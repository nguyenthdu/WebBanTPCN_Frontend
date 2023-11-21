// import { memo, useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import ListProduct from "../../../component/ListProduct/ListProduct";
// import BanerRight from "../../../component/introduction/banerRight";
// import Introduction from "../../../component/introduction/introduction";
// import foodFunctionService from "../../../services/foodFunction.service";
// import "./style.scss";

const HomePage = () => {
  const [products, setProducts] = useState();
  const [visibleProducts, setVisibleProducts] = useState(10);
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

  // Hàm lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await foodFunctionService.getFoodList();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(products)) {
      const imageBase64 = products[0].imageFiles[0].picByte;
      // Tạo URL dữ liệu từ dữ liệu base64
      const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
      console.log("home: " + imageUrl);
    }
    // console.log("xem loại trong homepage: " + JSON.stringify(products));
  }, [products]);

  // Lấy dữ liệu base64 của ảnh từ mảng imageFiles

  // const showMoreProducts = () => {
  //   setVisibleProducts((prevValue) => prevValue + 10);
  // };

  // const renderProductsList = () => {
  //   const rows = [];

  //   // Kiểm tra xem products có được định nghĩa và có ít nhất một phần tử không
  //   if (!Array.isArray(products) || products.length === 0) {
  //     console.error("Error: Products is not defined or empty.");
  //     return null;
  //   }
  //   console.log("da vao duoc renderProductsList");

  //   for (let i = 0; i < visibleProducts; i += 6) {
  //     console.log("da vao duoc renderProductsList for", products.length);
  //     const rowProducts = products.slice(i, i + 6);

  //     rows.push(
  //       <Row key={i} xs={1} sm={2} md={3} lg={6} className="g-4">
  //         {rowProducts.map((product, index) => (
  //           <ProductCard key={index} product={product} index={index} />
  //         ))}
  //       </Row>
  //     );
  //   }

  //   return rows;
  // };

  const renderSliderIntroduction = () => {
    return <Introduction introduction={sliderIntroduction} />;
  };

  const list = [
    {
      id: 1,
      name: "Purple women shirt 1",
      image: require("../../../assets/images/product-1.webp"),
      imageHover: require("../../../assets/images/product-1-hover.webp"),
    },
    {
      id: 2,
      name: "Purple women shirt 2",
      image: require("../../../assets/images/product-2.webp"),
      imageHover: require("../../../assets/images/product-2-hover.webp"),
    },
    {
      id: 3,
      name: "Purple women shirt 3",
      image: require("../../../assets/images/product-3.webp"),
      imageHover: require("../../../assets/images/product-3-hover.webp"),
    },
    {
      id: 4,
      name: "Purple women shirt 4",
      image: require("../../../assets/images/product-4.webp"),
      imageHover: require("../../../assets/images/product-4-hover.webp"),
    },
    {
      id: 5,
      name: "Purple women shirt 5",
      image: require("../../../assets/images/product-4.webp"),
      imageHover: require("../../../assets/images/product-4-hover.webp"),
    },
    {
      id: 6,
      name: "Purple women shirt 6",
      image: require("../../../assets/images/product-4.webp"),
      imageHover: require("../../../assets/images/product-4-hover.webp"),
    },
  ];

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
      {/* {renderProductsList()} */}
      <ListProduct list={products} />
    </Container>
  );
};

export default memo(HomePage);
