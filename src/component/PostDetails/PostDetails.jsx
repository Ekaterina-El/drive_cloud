import React from "react";
import { NavLink } from "react-router-dom";

const PostDetais = ({ uid, postId, title, createdAt, files }) => {
  debugger;
  return (
    <div>
      <NavLink to="/">На главную</NavLink>
      <ul>
        <li>ИД владельца: {uid}</li>
        <li>ИД поста: {postId}</li>
        <li>Заголовок: {title}</li>
        <li>Дата добавления: {createdAt}</li>
      </ul>

      <h3>Files:</h3>
      {files !== undefined &&
        files.map((file) => {
          return <FileItem {...file} />;
        })}
    </div>
  );
};

const FileItem = ({ url, name, created, updated, size }) => {
    debugger
  return (
    <div>
      <a href={url}>{name}</a>
      <div>Создан: {created}</div>
      <div>Обновлен: {updated}</div>
      <div>Размер: {size}</div>
    </div>
  );
};

export default PostDetais;
