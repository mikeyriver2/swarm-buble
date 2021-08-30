import React from 'react';

const MessagePreview = ({
  unreadCount,
}) => {
  let message = 'When can you send the branding manual for the press chicken wings';
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
      <div className="messagePreview__avatar" />
      <div className="messagePreview__message">
        <h3>Logistics Team</h3>
        <p>
          {/* Ideally though, sub limit should be based on component */}
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
