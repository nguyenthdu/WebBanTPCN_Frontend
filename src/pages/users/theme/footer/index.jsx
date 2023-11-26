import React from "react";
import "./style.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-4 OurAwards">
          <h2>Thông tin về chúng tôi</h2>
          <p>
            Hiệu thuốc hoạt động với mong muốn mang đến sự chăm sóc sức khỏe tốt
            nhất cho cộng đồng. Luôn sẵn sàng tư vấn và hỗ trợ quý khách trong
            việc chọn lựa sản phẩm phù hợp nhất.
            <br /> Cam kết đem lại sự tiện lợi và tin cậy cho mọi người khi mua
            sắm tại hiệu thuốc
          </p>
          <img
            style={{ width: 150, height: 150 }}
            src="https://static3.bigstockphoto.com/2/5/3/large2/352088765.jpg"
            alt="myphoto"
          />
        </div>
        <div className="col-4 ContactInfo">
          <h2>Thông tin liên lạc</h2>
          <span>
            <i className="fa-solid fa-phone-volume"></i>18006928
          </span>
          <br></br>

          <span>
            <i className="fa-solid fa-location-dot"></i>379-381 Hai Bà Trưng, P.
            Võ Thị Sáu, Q.3, TP. HCM
          </span>
          <br></br>
          <span>
            <i className="fa-regular fa-clock"></i>Thứ 2 - Thứ 7 8.00 - 18.00 ||
            Chủ Nhật CLOSED
          </span>
          <br></br>
          <div className="socialMedia">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="col-4 RecentTrips">
          <h2>CHỨNG NHẬN BỞI</h2>
          <div className="row">
            <div className="col-4">
              <img
                style={{ width: 150, height: 150 }}
                src="https://nanoclean.vn/wp-content/uploads/2023/07/DMCA.png"
                alt="myphoto"
              />
            </div>
            <div className="col-4">
              <img
                style={{ width: 150, height: 150 }}
                src="http://forci.vn/Pictures/dathongbao.jpg"
                alt="myphoto"
              />
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          backgroundColor: "#cccccc",
        }}
      />
      <div className="row">
        <div className="col-6" style={{ color: "rgb(187, 185, 185)" }}>
          &#169; © 2007 - 2022 Công ty Cổ Phần Dược Phẩm FPT IUH <br /> ĐKKD
          0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM
        </div>
        <div className="col-6 MenuFooter">
          <span>Trang chủ</span>
          <span>TPCN</span>
          <span>Trang Blog</span>
          <span>Đặt hàng</span>
        </div>
      </div>
    </div>
  );
}
