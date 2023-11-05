import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Facebook, Google, Key, Person, X } from "react-bootstrap-icons";
import ReactDOM from "react-dom";
import AuthService from "../../services/auth.service";
import "./style.scss";

const LoginModal = ({ isShowing, hide }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Hàm xử lý khi người dùng thay đổi giá trị ô input
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // Hàm xử lý khi người dùng nhấn nút Login
  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn chặn browser reload lại trang

    // Xóa thông báo lỗi trước đó và đặt trạng thái "loading" là true
    setMessage("");
    setLoading(true);

    AuthService.login(username, password).then(
      (data) => {
        console.log("Login success" + data);
        window.location.reload(); // Tải lại trang để cập nhật trạng thái đăng nhập
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="custom-modal-overlay" /> {/* background */}
          <div
            className="custom-modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="custom-modal">
              <div className="custom-modal-header">
                <button
                  type="button"
                  className="custom-modal-close-button"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">
                    <X className="icon__close" />
                  </span>
                </button>
              </div>
              <div className="custom-modal-body">
                <h5>Đăng nhập</h5>
                <div className="input-content">
                  <div className="username">
                    <Person className="icon__user" />
                    <input
                      className="input__username"
                      type="text"
                      placeholder="Tên đăng nhập"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </div>
                  <div className="password">
                    <Key className="icon__key" />
                    <input
                      className="input__password"
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>
                  <div className="span__forgot-password">
                    <span className="text__forgot">Quên mật khẩu?</span>
                  </div>
                  <div className="btn__login">
                    <Button
                      className="btn__login--btn"
                      disabled={loading}
                      onClick={handleLogin}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Đăng nhập</span>
                    </Button>
                  </div>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="custom-modal-footer">
                <span className="text__replace-login">hoặc đăng nhập bằng</span>
                <div className="btn__replace-login">
                  <Google className="icon__google" />
                  <Facebook className="icon__facebook" />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
export default LoginModal;
