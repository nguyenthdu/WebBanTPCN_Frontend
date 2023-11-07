import { memo, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BanerRight from "../../../component/introduction/banerRight";
import Introduction from "../../../component/introduction/introduction";
import ProductCard from "../../../component/productCart/productCard";
import foodFunctionService from "../../../services/foodFunction.service";
import sliderIntroductionService from "../../../services/sliderIntroduction.service";
import "./style.scss";

const HomePage = () => {
  const [products, setProducts] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [content, setContent] = useState(null);
  const [sliderIntroduction, setSliderIntroduction] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sliderData, foodData] = await Promise.all([
          sliderIntroductionService.getListSliderIntroduction(),
          foodFunctionService.getFoodList(),
        ]);

        setSliderIntroduction(sliderData);

        // Tạo một đối tượng để phân loại sản phẩm dựa trên từng đối tượng sử dụng
        const categorizedUseObjectProducts = {};

        foodData.forEach((element) => {
          const obj = element.useObject;
          for (let i = 0; i < obj.length; i++) {
            // Kiểm tra xem categorizedUseObjectProducts có chứa thuộc tính tương ứng với đối tượng sử dụng hiện tại không
            if (!categorizedUseObjectProducts.hasOwnProperty(obj[i])) {
              // Nếu không tồn tại, tạo một mảng trống cho đối tượng sử dụng hiện tại. nhưng thực tế trường hợp này là không tồn tại
              categorizedUseObjectProducts[obj[i]] = [];
            }
            // Sau đó, thêm sản phẩm hiện tại vào mảng của đối tượng sử dụng tương ứng
            categorizedUseObjectProducts[obj[i]].push(element);
          }
        });

        setProducts(categorizedUseObjectProducts);
      } catch (error) {
        const errorMessage =
          error.message || "An error occurred while fetching data";
        setContent(errorMessage);
      }
    };

    fetchData();
  }, []); // Run once on initial load

  useEffect(() => {
    console.log("xem loại trong 2: " + JSON.stringify(products));
  }, [products]);

  const showMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 10);
  };

  const renderProducts = (category) => {
    if (!category || !Array.isArray(products[category])) {
      return null;
    }
    return (
      <div className={`product__Container_for_${category}`}>
        <div
          className="tem_title__container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            src="https://nhathuoclongchau.com.vn/static/images/san-pham-ban-chay.svg"
            alt={`Sản phẩm cho ${category}`}
            className="tem_img"
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
          <h2
            className="txt_h2"
            style={{
              position: "absolute",
              left: "0",
              bottom: "0",
              width: "100%",
              textAlign: "center",
            }}
          >{`Sản phẩm cho ${category}`}</h2>
        </div>
        <div
          className={`product_for_${category}`}
          style={{ maxWidth: 1320, margin: "auto" }}
        >
          <div className="product__List">{renderProductsList(category)}</div>
        </div>
      </div>
    );
  };

  const renderProductsList = (category) => {
    // if (!category || !Array.isArray(products[category])) {
    //   return null;
    // }

    const items = products[category];
    const rows = [];
    for (let i = 0; i < visibleProducts; i += 6) {
      const rowProducts = items.slice(i, i + 6);

      rows.push(
        <Row key={i} xs={1} sm={2} md={3} lg={6} className="g-4">
          {rowProducts.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </Row>
      );
    }

    return rows;
  };

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
      {renderProducts("children")}
      {renderProducts("men")}
      {renderProducts("women")}
      {renderProducts("mom")}
    </Container>
  );
};

export default memo(HomePage);
