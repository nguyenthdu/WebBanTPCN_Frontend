// This is a public page that shows public content. People don’t need to log in to view this page.
import React, { useEffect, useState } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  // Sử dụng useEffect để thực hiện các tác vụ sau khi component được render
  useEffect(() => {
    UserService.getHello().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []); // Tham số trống [] đảm bảo rằng useEffect chỉ được gọi sau khi component được render một lần

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
