import React from "react";
import "./style.scss";

function Bill() {
  return (
    <div className="col-12">
      <div className="summary">
        <div className="summary-item">
          <span className="text">Tổng tiền:</span>
          <span className="price">$360</span>
        </div>
        <div className="summary-item">
          <span className="text">Giảm giá:</span>
          <span className="price">$0</span>
        </div>
        <div className="summary-item">
          <span className="text">Tiết kiệm:</span>
          <span className="price">$0</span>
        </div>
        <div className="summary-item">
          <span className="text">Tạm tính:</span>
          <span className="price" style={{ color: "blue" }}>
            $360
          </span>
        </div>
        <button type="button" className="btn-lg btn-block btn-mua-hang">
          Mua hàng
        </button>
      </div>
    </div>
  );
}

export default Bill;
