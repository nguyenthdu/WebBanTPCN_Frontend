import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Cart2, Person, Search } from "react-bootstrap-icons";
import "./style.scss";

function Header() {
  return (
    <Navbar expand="lg" className="container__nav">
      <Container fluid className="mx-5">
        <Navbar.Brand href="/" className="brand">
          Function Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex rounded-pill form__container">
            <Form.Control
              type="search"
              placeholder="Tìm kiếm thực phẩm chức năng"
              aria-label="Search"
              className="form__search rounded-pill"
            />
            <Button variant="" className="rounded-pill m-1 btn__search">
              <Search className="icon__search" />
            </Button>
          </Form>
          <div className="btn">
            <Button className="mx-2 icon__login">
              <Person className="me-2" />
              Đăng nhập
            </Button>
            <Button className="mx-2 icon__cart">
              <Cart2 className="me-2" />
              Giỏ Hàng
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
