import React from 'react'
import { NavLink } from 'react-router-dom'

const PostDetais = ({uid, postId, title, createdAt}) => {
    debugger
    return (
        <div>
            <NavLink to="/">На главную</NavLink>
            <ul>
                <li>ИД владельца: {uid}</li>
                <li>ИД поста: {postId}</li>
                <li>Заголовок: {title}</li>
                <li>Дата добавления: {createdAt}</li>
            </ul>
        </div>
    )
}

export default PostDetais
