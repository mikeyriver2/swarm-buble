import React, { useState, useEffect, useRef } from 'react';
import ThreadInput from './ThreadInput';
import ThreadDetails from './ThreadDetails';
import Message from './Message';

import * as helper from '../helper';

const Thread = ({ activateThread }) => {
  const {
    messages: pMessages,
    title,
    logo,
    members
  } = activateThread;

  // I would personally go with stateful components though
  //  for components wherein states would be relative to each other
  const [messages, setMessages] = useState([...pMessages]);
  const messagesRef = useRef([]);
  // Ideally it's not good practice to setstate a prop but i'm just using it for this case

  const messageContainer = useRef(null);
  const header = useRef(null);
  const loaded = useRef(false);

  const handleReply = async () => {
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
    const newMessages = [...messagesRef.current, messageToSend];
    setMessages(newMessages);
  };

  const toggleAdjustHeight = () => {
    const threadInput = document.querySelector('#threadInput');
    // 62 from padding of container
    messageContainer.current.style.height = `calc(
      100vh
      - (${(threadInput.clientHeight + header.current.clientHeight)}px
      + 62px
    ))`;
  };

  useEffect(() => {
    // do not run on ini useEffect
    if (loaded.current) {
      const lastestMessage = document.querySelector('.message.isLast .message__bubble p');
      lastestMessage.scrollIntoView({ behavior: 'smooth' });

      // update message preview in thread preview
      // ideally i would not do this, but this is only for demo
      const domPrev = document.querySelector(`
        .messagePreview:first-of-type .messagePreview__message p
      `);
      const domDate = document.querySelector(`
        .messagePreview:first-of-type .messagePreview__details p
      `);

      domDate.innerText = 'less than 1 min ago';
      const toPrev = lastestMessage.innerText;
      domPrev.innerText = toPrev.length > 50
        ? `${toPrev.substr(0, 51)}...`
        : toPrev;

      // handle reply async
      const latestMessageState = messages[messages.length - 1];
      if (latestMessageState.isOwn) {
        handleReply();
      }
    } else {
      loaded.current = true;
    }
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    // setting state helpful when actually setting state asynchronously when
    // fetching APIs to rerender page every load/onresize
    toggleAdjustHeight();
  }, []);

  return (
    <div className="thread">
      <div className="thread__contents">
        <div
          ref={header}
          className="thread__header"
        >
          <h2>
            {title}
          </h2>
        </div>
        <div
          ref={messageContainer}
          className="thread__messages"
        >
          {
            messages.map((message, index) => {
              return (
                <Message
                  key={`message-${index * Math.random()}`}
                  message={message}
                  lastMessage={messages[index - 1]}
                  isLast={index === messages.length - 1}
                />
              );
            })
          }
        </div>
        <ThreadInput
          messages={messages}
          setMessages={setMessages}
        />
      </div>
      <ThreadDetails
        logo={logo}
        title={title}
        members={members}
      />
    </div>
  );
};

export default Thread;
