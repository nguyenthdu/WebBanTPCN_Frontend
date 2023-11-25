import React, { memo } from "react";
import { Button, Image } from "react-bootstrap";

function NotFoundPage() {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="https://bit.ly/3QQjCWV" />
        <h2 className="title">Có gì đó không đúng...</h2>
        <span c="dimmed" size="lg">
          Trang bạn đang cố mở không tồn tại. Có thể bạn đã gõ nhầm địa chỉ hoặc
          trang đã được chuyển sang một URL khác. Nếu bạn nghĩ đây là một lỗi
          liên hệ với bộ phận hỗ trợ.
        </span>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            display: "flex",
            margin: "20px 0",
            justifyContent: "center",
          }}
        >
          <a href="/">
            <Button className="btn" style={{ textAlign: "center" }}>
              Quay lại trang chủ!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(NotFoundPage);
