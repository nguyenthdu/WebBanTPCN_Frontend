import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Button,
  CardHeader,
  Container,
  Form,
  Image,
  Navbar,
} from "react-bootstrap";
import { Cart2, Person, Search } from "react-bootstrap-icons";
import LoginModal from "../../../../component/login/loginModal";
import UserMenu from "../../../../component/userMenu/userMenu";
import useModal from "../../../../hook/modal/useModal";
import AuthService from "../../../../services/auth.service";
import "./style.scss";

function Header() {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);
  const { isShowing, toggle } = useModal();
  var logo = require("../../../../assets/logo-iuh.png");
  return (
    <CardHeader>
      <Navbar expand="lg" className="container__nav">
        <Container fluid className="mx-5">
          <Navbar.Brand href="/" className="brand">
            <Image className="brand__logo" src={logo} />
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
              {currentUser ? (
                <UserMenu currentUser={currentUser} />
              ) : (
                <Button className="mx-2 icon__login" onClick={toggle}>
                  <Person className="me-2" />
                  <span>Đăng nhập</span>
                </Button>
              )}
              <Button className="mx-2 icon__cart">
                <Cart2 className="me-2" />
                Giỏ Hàng
              </Button>
            </div>
            <LoginModal isShowing={isShowing} hide={toggle} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </CardHeader>
  );
}

export default Header;
