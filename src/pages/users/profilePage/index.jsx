import { memo } from "react";
import { Image } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import "./style.scss";
const ProfilePage = () => {
  const currentUser = AuthService.getCurrentUser();
  const fullname = currentUser.firstName + " " + currentUser.lastName;
  const email = currentUser.email;
  const phone = currentUser.phone;
  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <Image
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    <h4>{fullname}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3 align-items-center">
                  <div className="col-sm-3">
                    <label for="fullNameInput" className="mb-0">
                      Họ và tên
                    </label>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      id="fullNameInput"
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      value={fullname}
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-sm-3">
                    <label for="emailInput" className="mb-0">
                      Email
                    </label>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      id="emailInput"
                      type="text"
                      className="form-control"
                      placeholder="john@example.com"
                      value={email}
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-sm-3">
                    <label for="soDTInput" className="mb-0">
                      Số điện thoại
                    </label>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      id="soDTInput"
                      type="text"
                      className="form-control"
                      placeholder="034567976"
                      value={phone}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <div className="row">
                      <div className="col-sm-9 text-secondary"></div>
                      <div className="col-sm-3">
                        <input
                          type="button"
                          className="btn btn-primary"
                          style={{ width: "100%", justifyContent: "center" }}
                          value="Save Changes"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfilePage);
