import React, { useState, useEffect, useRef } from 'react';
import ThreadInput from './ThreadInput';
import ThreadDetails from './ThreadDetails';
import Message from './Message';

const Thread = ({ activateThread }) => {
  const { messages, title, logo, members } = activateThread;
  // I would personally go with stateful components though
  //  for components wherein states would be relative to each other

  const messageContainer = useRef(null);
  const header = useRef(null);

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
          {/** With real data i would map them */}
          <Message
            message={messages[0]}
          />
          <Message
            message={messages[1]}
          />
          <div className="thread__divider">
            <p><span>Now</span></p>
          </div>
          <Message
            message={messages[2]}
          />
        </div>
        <ThreadInput />
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
