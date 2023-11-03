// getHelloUser

import React, { useEffect, useState } from "react";

import UserService from "../services/user.service";

const BoardModerator = () => {
  const [content, setContent] = useState("");

  // Sử dụng useEffect để thực hiện các tác vụ sau khi component được render
  useEffect(() => {
    UserService.getHelloUser().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
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

export default BoardModerator;
