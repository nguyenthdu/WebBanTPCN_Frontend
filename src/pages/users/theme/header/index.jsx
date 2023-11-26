import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import {
  Button,
  CardHeader,
  Container,
  Form,
  Image,
  Navbar,
} from "react-bootstrap";
import { Cart2, Person, Search } from "react-bootstrap-icons";
import { BsPersonWorkspace } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TypeFood from "../../../../component/TypeFood/TypeFood";
import LoginModal from "../../../../component/login/loginModal";
import UserMenu from "../../../../component/userMenu/userMenu";
import { useCartContext } from "../../../../context/cartContext/cartContext";
import useModal from "../../../../hook/modal/useModal";
import AuthService from "../../../../services/auth.service";
import "./style.scss";

function Header() {
  // Sử dụng hook từ ShopContext để lấy thông tin về giỏ hàng
  const { carts } = useCartContext();
  // State quản lý thông tin và vai trò của người dùng
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { isShowing, toggle } = useModal();
  var logo = require("../../../../assets/logo-iuh.png");

  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();

  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.role.includes("ADMIN")); // Kiểm tra xem user có phải là admin
    }
  }, []);

  // Function to log out the user
  // const logOut = () => {
  //   AuthService.logout();
  //   setShowAdminBoard(false);
  // };

  const handleSearch = () => {
    navigate(`/listProduct/${textSearch}`);
  };

  const handleAdmin = () => {
    navigate("/admin/product");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
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
                  onChange={(e) => setTextSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  variant=""
                  className="rounded-pill m-1 btn__search"
                  onClick={handleSearch}
                >
                  <Search className="icon__search" />
                </Button>
              </Form>
              <div className="btn">
                {showAdminBoard ? (
                  <Button className="mx-2 icon__manager" onClick={handleAdmin}>
                    {/* icon react bootstrap quản lý*/}
                    <BsPersonWorkspace className="me-2" />
                    Quản lý
                  </Button>
                ) : null}
                {currentUser ? (
                  <UserMenu currentUser={currentUser} />
                ) : (
                  <Button className="mx-2 icon__login" onClick={toggle}>
                    <Person className="me-2" />
                    <span>Đăng nhập</span>
                  </Button>
                )}
                <Button className="mx-2 icon__cart" onClick={handleCart}>
                  <Cart2 className="me-2" />
                  {/* Hiển thị số lượng sản phẩm trong giỏ hàng
                   */}
                  {carts.length > 0 ? (
                    <p className="absolute top-[-10px] right-[-10px] text-xs font-bold">
                      {carts.length}
                    </p>
                  ) : null}
                  Giỏ Hàng
                </Button>
              </div>
              <LoginModal isShowing={isShowing} hide={toggle} />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </CardHeader>
      <div style={{ justifyContent: "center" }}>
        <TypeFood />
      </div>
    </>
  );
}

export default Header;
