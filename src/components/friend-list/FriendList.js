import React from "react";
import PropTypes from "prop-types";


// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

const FriendList = ({ friends }) =>
    <ul className="friend-list">
        {friends.map(({avatar, name, isOnline, id}) =>
            <li className="item" key = {id}>
                <span className="status">{ isOnline}</span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{ name}</p>
            </li >
        
        )}

    </ul >

    ;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
       })).isRequired 
    }

export default FriendList;