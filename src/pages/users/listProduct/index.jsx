import { memo, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import Icon from "react-icon";
import axios from "axios";
import { FaCheck, FaFilter, FaList, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.scss";

const ListProduct = () => {
  const [userObject, setUserObject] = useState([
    { id: 0, userObject: "Tất cả", selected: true },
    { id: 1, userObject: "Trẻ sơ sinh", selected: false },
    { id: 2, userObject: "Trẻ em", selected: false },
    { id: 3, userObject: "Người lớn", selected: false },
    { id: 4, userObject: "Người cao tuổi", selected: false },
    { id: 5, userObject: "Phụ nữ", selected: false },
    { id: 6, userObject: "Phụ nữ mang thai", selected: false },
    { id: 7, userObject: "Phụ nữ sau sinh", selected: false },
    { id: 8, userObject: "Nam giới trưởng thành", selected: false },
  ]);

  const [price, setPrice] = useState([
    { id: 1, price: "Dưới 100.000đ", selected: false },
    { id: 2, price: "100.000đ đến 300.000đ", selected: false },
    { id: 3, price: "trên 300.000đ đến 500.000đ", selected: false },
    { id: 4, price: "trên 500.000đ", selected: false },
  ]);

  const [selectedCriteria, setSelectedCriteria] = useState(1);

  const [selectedList, setSelectedList] = useState(2);

  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Sử dụng useEffect để theo dõi thay đổi trong selectedList
  // useEffect(() => {
  //   // Đây là nơi bạn có thể thực hiện các hành động cập nhật giao diện dựa trên selectedList.
  //   // Ví dụ:
  //   // render lại sản phẩm khi selectedList thay đổi
  //   const updatedProducts = renderProducts(selectedList);

  // }, [selectedList]);

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
    setVisibleProducts((prevValue) => prevValue + 12);
  };

  const renderProducts4 = () => {
    const rows = [];
    for (let i = 0; i < visibleProducts; i += 4) {
      const rowProducts = products.slice(i, i + 4);

      rows.push(
        <Row key={i} /*xs={1} sm={2} md={3} lg={6}*/ className="gs-1">
          {rowProducts.map((product, index) => (
            <Col
              key={index}
              className="product-card mb-3 col-12 col-md-6 col-lg-3"
            >
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

  const renderProducts2 = () => {
    const rows = [];
    for (let i = 0; i < visibleProducts; i += 2) {
      const rowProducts = products.slice(i, i + 2);

      rows.push(
        <Row key={i} /*xs={1} sm={2} md={3} lg={6}*/ className="gs-1">
          {rowProducts.map((product, index) => (
            <Col key={index} className="product-card mb-3 col-12 col-md-6">
              <Link to={`/product/${product.id}`}>
                <Card className="product-card_a" style={{ height: "100%" }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Card.Img variant="top" src={product.avatar} />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title className="text-md-start">
                          {product.first_name} {product.last_name}
                        </Card.Title>
                        <Card.Text>{product.email}</Card.Text>
                        <p>Giá: {product.phone_number}</p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      );
    }

    return rows;
  };

  // chưa render được bộ lọc, bộ lọc còn quá cố định không thể tùy biến được
  const handleCheckboxChangeUserObject = (id) => {
    const updatedUserObject = userObject.map((user) => {
      if (id === 0) {
        // thì tất cả các checkbox đều false trừ id === 0
        if (user.id === 0) return { ...user, selected: true };
        return { ...user, selected: false };
      } else {
        if (user.id === id) {
          // thì id === 0 đảo trạng thái slelected
          return { ...user, selected: !user.selected };
        }
        // sau đó và === 0 luôn false
        return user.id === 0 ? { ...user, selected: false } : user;
      }
    });
    setUserObject(updatedUserObject);
  };

  // render giá, vì sao phải làm render? (chưa xét logic nên không biết luôn)
  const handleRadioChangePrice = (id) => {
    const updatedPrice = price.map((item) => {
      if (id === item.id) {
        return { ...item, selected: true };
      }
      return item.id !== id ? { ...item, selected: false } : item;
    });
    setPrice(updatedPrice);
  };

  return (
    <Container className="cContainer">
      <Row className="col-12 cRow1 my-3">
        <h6 className="col-12">
          Tìm thấy n sản phẩm với từ khóa "tên từ khóa"
        </h6>
      </Row>
      <Row className="col-12 mb-3 cRow2">
        <Col className="col-3 cColumn1">
          <Row className="cColumn1_Row1 border-bottom py-1">
            <Col className="col-12 d-flex justify-content-center align-items-center">
              <FaFilter />
              <span style={{ marginLeft: 5, fontWeight: 700 }}>
                Bộ lọc nâng cao
              </span>
            </Col>
          </Row>
          <Row className="cColumn1_Row2 border-bottom py-1">
            <h6 className="stlH6">Đối tượng</h6>
            <Col className="col-12">
              <ul>
                {userObject.map((user) => (
                  <li key={user.id}>
                    <label>
                      <input
                        className="_ip"
                        type="checkbox"
                        checked={user.selected}
                        onChange={() => handleCheckboxChangeUserObject(user.id)}
                      />
                      <span>{user.userObject}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row className="cColumn1_Row3 py-1">
            <h6 className="stlH6">Giá bán</h6>
            <Col className="col-12">
              <ul>
                {price.map((item) => (
                  <li key={item.id}>
                    <label>
                      <input
                        className="_ip"
                        type="radio"
                        checked={item.selected}
                        onChange={() => handleRadioChangePrice(item.id)}
                      />
                      <span>{item.price}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="col-9 cColumn2">
          <Row className="cColumn2_Row1">
            <Col className="col-5">Danh sách sản phẩm</Col>
            <Col className="col-2">Sắp xếp theo</Col>
            <Col
              md="auto"
              className={`mx-1 sortByCriteria ${
                selectedCriteria === 1 ? "sortedByCriteria" : "sortByCriteria"
              }`}
              onClick={() => setSelectedCriteria(1)}
            >
              Bán chạy
              {selectedCriteria === 1 && (
                <FaCheck className="check_icon_criteria facheck" />
              )}
            </Col>
            <Col
              md="auto"
              className={`mx-1 sortByCriteria ${
                selectedCriteria === 2 ? "sortedByCriteria" : "sortByCriteria"
              }`}
              onClick={() => setSelectedCriteria(2)}
            >
              Giá thấp
              {selectedCriteria === 2 && (
                <FaCheck className="check_icon_criteria" />
              )}
            </Col>
            <Col
              md="auto"
              className={`mx-1 sortByCriteria ${
                selectedCriteria === 3 ? "sortedByCriteria" : "sortByCriteria"
              }`}
              onClick={() => setSelectedCriteria(3)}
            >
              Giá cao
              {selectedCriteria === 3 && (
                <FaCheck className="check_icon_criteria" />
              )}
            </Col>
            <Col
              md="auto"
              className="sortByCriteria d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "white", cursor: "pointer" }}
            >
              <span
                className={`iconList fath py-1 ${
                  selectedList === 2 ? "selectedList" : "list"
                }`}
                onClick={() => setSelectedList(2)}
              >
                <FaTh className="mx-1" />
              </span>
              <span
                className={`iconList falist py-1 ${
                  selectedList === 1 ? "selectedList" : "list"
                }`}
                onClick={() => setSelectedList(1)}
              >
                <FaList className="mx-1" />
              </span>
            </Col>
          </Row>
          <Row className="cColumn2_Row2">
            <Col className="col-12 mt-2 pe-0">
              {/* viết render list sản phẩm ở đây */}
              {selectedList === 2 ? renderProducts4() : renderProducts2()}
              {visibleProducts < products.length && (
                <Button onClick={showMoreProducts}>Xem thêm</Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ListProduct);
