import React from 'react';

const UserPreview = ({
  unreadCount,
}) => (
  <a
    className={
      `userPreview ${unreadCount ? 'hasUnread' : ''}
    `
    }
    href="#"
  >
    <div className="userPreview__user">
      <div className="userPreview__avatar" />
      <p>Robert Fox</p>
      <p>@robert</p>
    </div>
    <div className="userPreview__detail">
      {unreadCount && (
        <div className="count">
          <span>{unreadCount}</span>
        </div>
      )}
    </div>
  </a>
);

export default UserPreview;
