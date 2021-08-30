import React from 'react';

const Message = ({ isOwn }) => (
  <div 
    className={`message ${isOwn ? 'isOwn' : ''}`}
  >
    <div className="message__contents">
      <div className="message__avatar" />
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
        ? '30 mins ago'
        : '@robert, 11:43 pm'
      }
    </div>
  </div>
);

export default Message;