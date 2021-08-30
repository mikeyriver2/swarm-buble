/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Avatar from './Avatar';

const UserPreview = (props) => {
  let { dm } = props;
  dm = dm || {};

  const {
    unreadCount,
    user,
    tag,
    profile_pic
  } = dm;

  return dm.user ? (
    <a
      className={
        `userPreview ${unreadCount ? 'hasUnread' : ''}
      `
      }
      href="#"
    >
      <div className="userPreview__user">
        <Avatar
          width="20px"
          height="20px"
          url={profile_pic}
        />
        <p>{user}</p>
        <p>{tag}</p>
      </div>
      <div className="userPreview__detail">
        {unreadCount > 0 && (
          <div className="count">
            <span>{unreadCount}</span>
          </div>
        )}
      </div>
    </a>
  ) : '';
};

export default UserPreview;
