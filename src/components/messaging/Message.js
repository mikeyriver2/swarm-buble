import React from 'react';
import Avatar from '../reusables/Avatar';

const Message = ({ message }) => {
  const { isOwn, creator, content, created_at } = message;
  return (
    <div 
      className={`message ${isOwn ? 'isOwn' : ''}`}
    >
      <div className="message__contents">
        <Avatar
          width="32px"
          height="32px"
          url={creator.profile_picture}
        />
        <div className="message__bubble">
          <p>
          { // the '<' is breaking the html tag
            'We’re not having standups today. I have no internet since midnight :<'
          }
          </p>
        </div>
      </div>
      <div className="message__details">
        {isOwn
          ? created_at
          : `${creator.tag}, ${created_at}`
        }
      </div>
    </div>
  );
};

export default Message;