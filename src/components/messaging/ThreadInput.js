import React, { useState } from 'react';
import * as moment from 'moment';
import * as helper from '../helper';

const ThreadInput = ({ 
  messages,
  setMessages,
  setMessagesRef 
}) => {
  const [message, setMessage] = useState({});

  const handleChange = (content) => {
    setMessage({
      created_at: helper.current(),
      creator: {
        profile_picture: '/Images/Avatar 06.png',
        tag: '@pena',
      },
      content,
      isOwn: true,
    });
  };

  const handleSend = (e) => {
    if (e.key === 'Enter' && message.content) {
      const toInsert = [...messages, message];
      setMessages(toInsert);
      setMessage({});
    }
  };

  return (
    <div id="threadInput" className="threadInput">
      <input
        placeholder="Message Team Turon"
        onKeyPress={handleSend}
        onChange={({ target }) => { handleChange(target.value); }}
        value={message.content || ''}
      />
    </div>
  );
};

export default ThreadInput;
