import React, { useState } from 'react';
import * as moment from 'moment';
import * as helper from '../helper';

const ThreadInput = ({ messages, setMessages }) => {
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

  const handleReply = async (toInsert) => {
    // some random lorem ipsum api i found
    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const data = await response.json();
    const messageToSend = {
      created_at: helper.current(),
      creator: {
        profile_picture: '/Images/Avatar 06.png',
        tag: '@pena',
      },
      content: data[0],
      isOwn: false,
    };
    setMessages([...toInsert, messageToSend]);
  };

  const handleSend = (e) => {
    if (e.key === 'Enter' && message.content) {
      const toInsert = [...messages, message];
      setMessages(toInsert);
      setMessage({});

      // handle 'bot' reply
      handleReply(toInsert);
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
