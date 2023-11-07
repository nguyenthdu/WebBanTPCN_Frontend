import { memo, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BanerRight from "../../../component/introduction/banerRight";
import Introduction from "../../../component/introduction/introduction";
import ProductCard from "../../../component/productCart/productCard";
import foodFunctionService from "../../../services/foodFunction.service";
import sliderIntroductionService from "../../../services/sliderIntroduction.service";
import "./style.scss";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [content, setContent] = useState(null); // chưa test được

  const [sliderIntroduction, setSliderIntroduction] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sliderData =
          await sliderIntroductionService.getListSliderIntroduction();
        setSliderIntroduction(sliderData); // Set the sliderIntroduction state with the fetched data

        const foodData = await foodFunctionService.getFoodList();
        setProducts(foodData);
        console.log(products);
      } catch (error) {
        const errorMessage =
          error.message || "An error occurred while fetching data";
        setContent(errorMessage);
      }
    };

    fetchData();
  }, []);

  // có thể sau này không cần dùng (vì nó được xử ở backend)
  const showMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 10);
  };

  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < visibleProducts; i += 6) {
      const rowProducts = products.slice(i, i + 6);

      rows.push(
        <Row key={i} xs={1} sm={2} md={3} lg={6} className="g-4">
          {rowProducts.map((product, index) => (
            <ProductCard product={product} index={index} />
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
      <div className="product__Container_for_children">
        <div class="tem_title__container" gutter="[object Object]">
          <Image
            src="https://nhathuoclongchau.com.vn/static/images/san-pham-ban-chay.svg"
            alt="Sản phẩm bán chạy"
            className="tem_title"
          />
          <h2 className="txt_h2 spChild">Sản phẩm cho bé</h2>
        </div>
        <div className="product_for_children">
          <div className="product__List">
            {content !== null ? content : renderProducts()}
          </div>
        </div>
      </div>
      <div className="product__Container_for_mom">
        <div class="tem_title__container" gutter="[object Object]">
          <Image
            src="https://nhathuoclongchau.com.vn/static/images/san-pham-ban-chay.svg"
            alt="Sản phẩm cho mẹ"
            className="tem_title"
          />
          <h2 className="txt_h2">Sản phẩm cho mẹ</h2>
        </div>
        <div className="product_for_Mom">
          <div className="product__List">
            {content !== null ? content : renderProducts()}
          </div>
        </div>
      </div>
      <div className="product__Container_for_men">
        <div class="tem_title__container" gutter="[object Object]">
          <Image
            src="https://nhathuoclongchau.com.vn/static/images/san-pham-ban-chay.svg"
            alt="Sản phẩm cho mẹ"
            className="tem_title"
          />
          <h2 className="txt_h2 spMen" style={{ left: "44%" }}>
            Sản phẩm cho nam
          </h2>
        </div>
        <div className="product_for_Men">
          <div className="product__List">
            {content !== null ? content : renderProducts()}
          </div>
        </div>
      </div>
      <div className="product__Container_for_women">
        <div class="tem_title__container" gutter="[object Object]">
          <Image
            src="https://nhathuoclongchau.com.vn/static/images/san-pham-ban-chay.svg"
            alt="Sản phẩm cho mẹ"
            className="tem_title"
          />
          <h2 className="txt_h2">Sản phẩm cho nữ</h2>
        </div>
        <div className="product_for_Women">
          <div className="product__List">
            {content !== null ? content : renderProducts()}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(HomePage);
