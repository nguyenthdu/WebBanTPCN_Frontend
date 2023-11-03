// getHelloAdmin

import React, { useEffect, useState } from "react";

import UserService from "../services/user.service";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  // Sử dụng useEffect để thực hiện các tác vụ sau khi component được render
  useEffect(() => {
    UserService.getHelloAdmin().then(
      (data) => {
        setContent(data);
      },
      (error) => {
        const _content =
          (error && error.data && error.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardAdmin;
