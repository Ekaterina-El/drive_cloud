import React from "react";

const Home = ({ uid, name, email }) => {
  return (
    <div>
      Главная
      <ul>
        <li>Uid: {uid}</li>
        <li>Имя: {name}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
};

export default Home;
