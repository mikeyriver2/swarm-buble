import React from 'react';
import Avatar from '../reusables/Avatar';
import * as moment from 'moment';

const Message = ({lastMessage, message, isLast }) => {
  const {
    isOwn,
    creator,
    content,
    created_at
  } = message;
  let showDivider;

  const createdAt = moment(created_at, 'YYY MM DD HH:MM:SS');
  const date = createdAt.format('D M');
  const time = createdAt.format('h:MM a');

  const today = moment();
  const dateToday = today.format('D M');

  if (lastMessage) {
    const lastMessageCreatedAt = moment(lastMessage.created_at, 'YYY MM DD HH:MM:SS');
    const duration = moment.duration(createdAt.diff(lastMessageCreatedAt));
    const inMins = duration.asMinutes();

    if (inMins >= (60*24)
      && dateToday === date
    ) {
      showDivider = true;
    }
  }

  const divider = (
    <div className="thread__divider">
      <p><span>Now</span></p>
    </div>
  );

  const messageBubble = (
    <div
      className={`
        message 
        ${isOwn ? 'isOwn' : ''}
        ${isLast ? 'isLast' : ''}
      `}
    >
      <div className="message__contents">
        <Avatar
          width="32px"
          height="32px"
          url={creator.profile_picture}
        />
        <div className="message__bubble">
          <p>
            { content }
          </p>
        </div>
      </div>
      <div className="message__details">
        {isOwn
          ? time
          : `${creator.tag}, ${time}`
        }
      </div>
    </div>
  );

  const toReturn = [messageBubble];
  if (showDivider) {
    toReturn.unshift(divider);
  }

  return toReturn;
};

export default Message;