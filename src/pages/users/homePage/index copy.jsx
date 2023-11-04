import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { memo, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/v2/users?size=29&is_xml=true")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
            <Col key={index} className="product-card mb-3">
              <Link to={`/product/${product.id}`}>
                <Card className="product-card_a" style={{ height: "100%" }}>
                  <Card.Img variant="top" src={product.avatar} />
                  <Card.Body>
                    <div style={{ height: "100%" }}>
                      <Card.Title>
                        {product.first_name} {product.last_name}
                      </Card.Title>
                      <Card.Text>{product.email}</Card.Text>
                      <p>Giá: {product.phone_number}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      );
    }

    return rows;
  };

  return (
    <Container className="my-4">
      {renderProducts()}
      {visibleProducts < products.length && (
        <Button onClick={showMoreProducts}>Xem thêm</Button>
      )}
    </Container>
  );
};

export default memo(HomePage);
