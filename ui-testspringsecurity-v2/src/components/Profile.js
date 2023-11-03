import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  // profile này là lấy từ local storage
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.role && <li>{currentUser.role}</li>}
        {/* currentUser.role.map((rol, index) => <li key={index}>{rol}</li>) role ở đây không phải là mảng vì thế không thẻ .map */}
      </ul>
    </div>
  );
};

export default Profile;
