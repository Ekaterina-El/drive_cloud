import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ uid, name, email, setSelectedFiles, posts }) => {
  return (
    <div>
      Главная
      <ul>
        <li>Uid: {uid}</li>
        <li>Имя: {name}</li>
        <li>Email: {email}</li>
      </ul>
      <NavLink to="/add-post">Новая запись</NavLink>

      <h3>Записи</h3>
      {posts.map((postId) => {
        return (
          <div>
            <NavLink to={`/post-details/${uid}/${postId}`}>{postId}</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
