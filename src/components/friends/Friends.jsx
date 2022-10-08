import React from 'react';
import PropTypes from 'prop-types';
import css from './friends.module.css';

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.statusOn : css.statusOff}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, isOnline, name, id }) => (
        <FriendsItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </ul>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default Friends;
