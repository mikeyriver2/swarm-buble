/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Avatar from './Avatar';

const MessagePreview = ({
  content,
  title,
  unreadCount,
}) => {
  let message = content;
  message = message.length > 50
    ? `${message.substr(0, 51)}...`
    : message;

  return (
    <a
      className={
        `messagePreview ${unreadCount ? 'hasUnread' : 0}`
        }
      href="#"
    >
      <Avatar
        width="48px"
        height="48px"
        url="/Images/Logo_01.png"
      />
      <div className="messagePreview__message">
        <h3>{title}</h3>
        <p>
          {/* Ideally though, sub limit should be based on width of component */}
          { message }
        </p>
      </div>
      <div className="messagePreview__details">
        <p>5 mins ago</p>
        {unreadCount
          && (
          <div className="count">
            <span>{ unreadCount }</span>
          </div>
          )}
      </div>
    </a>
  );
};

export default MessagePreview;
