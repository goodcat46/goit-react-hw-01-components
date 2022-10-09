import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendItem/FriendsItem';
import css from './friends.module.css';



const Friends = ({ friends }) => { 
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, isOnline, name, id }) => (
        <FriendsItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </ul>
  );
};



Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default Friends;
