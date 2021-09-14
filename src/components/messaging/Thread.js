import React, { useState, useEffect, useRef } from 'react';
import ThreadInput from './ThreadInput';
import ThreadDetails from './ThreadDetails';
import Message from './Message';

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
  // Ideally it's not good practice to setstate a prop but i'm just using it for this case

  const messageContainer = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const lastestMessage = document.querySelector('.message.isLast .message__bubble p');
    lastestMessage.scrollIntoView({ behavior: 'smooth' });

    // update message preview in thread preview
    // ideally i would not do this, but this is only for demo
    const domPrev = document.querySelector(`
      .messagePreview:first-of-type .messagePreview__message p
    `);

    const toPrev = lastestMessage.innerText;
    domPrev.innerText = toPrev.length > 50
      ? `${toPrev.substr(0, 51)}...`
      : toPrev;
  }, [messages]);

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
