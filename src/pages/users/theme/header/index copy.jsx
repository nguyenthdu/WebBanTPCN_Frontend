import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Search } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./style.scss";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="mx-5">
        <Navbar.Brand href="/">Function Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          style={{ justifyContent: "flex-end" }}
        >
          <Form
            className="d-flex rounded-pill"
            style={{ width: "50%", backgroundColor: "#fff" }}
          >
            <Form.Control
              type="search"
              placeholder="Tìm kiếm thực phẩm chức năng"
              className="me-2 rounded-pill CSearch"
              aria-label="Search"
              style={{ border: "none", fontSize: "1.2rem" }}
            />
            <Button variant="outline-success" className="rounded-pill m-2">
              <Search className="item-center" />
            </Button>
          </Form>
          <Button variant="outline-success" className="mx-2">
            Đăng nhập
          </Button>
          <Button variant="outline-success">Giỏ Hàng</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
