import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ uid, name, email, setSelectedFiles }) => {
  return (
    <div>
      Главная
      <ul>
        <li>Uid: {uid}</li>
        <li>Имя: {name}</li>
        <li>Email: {email}</li>
      </ul>
      <NavLink to="/add-post">Новая запись</NavLink>
    </div>
  );
};

export default Home;
