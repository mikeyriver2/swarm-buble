import React, { useState } from 'react';
import * as moment from 'moment';

const ThreadInput = ({ messages, setMessages }) => {
  const [message, setMessage] = useState({});

  const handleChange = (content) => {
    setMessage({
      created_at: moment().format('YYYY MM DD HH:MM:SS'),
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
      handleReply(toInsert);
    }
  };

  const handleReply = async (toInsert) => {
    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const data = await response.json();
    const messageToSend = {
      created_at: moment().format('YYYY MM DD HH:MM:SS'),
      creator: {
        profile_picture: '/Images/Avatar 06.png',
        tag: '@pena',
      },
      content: data[0],
      isOwn: false,
    };
    setMessages([...toInsert, messageToSend]);
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
