import React from "react";
import PropTypes from "prop-types";
import style from './FriendList.module.css'


const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={style.item} key={id}>
        <span className={isOnline ? style.isOnline : style.isOffline}></span>
        <img className={style.avatar} src={avatar} alt={name} width="48" />
        <p className={style.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
