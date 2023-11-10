import React from "react";
import "./style.scss";

function Bill() {
  return (
    <div class="col-12">
      <div class="summary">
        <div class="summary-item">
          <span class="text">Tổng tiền:</span>
          <span class="price">$360</span>
        </div>
        <div class="summary-item">
          <span class="text">Giảm giá:</span>
          <span class="price">$0</span>
        </div>
        <div class="summary-item">
          <span class="text">Tiết kiệm:</span>
          <span class="price">$0</span>
        </div>
        <div class="summary-item">
          <span class="text">Tạm tính:</span>
          <span class="price" style={{ color: "blue" }}>
            $360
          </span>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Bill;
