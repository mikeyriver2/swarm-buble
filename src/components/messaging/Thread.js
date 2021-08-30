import React, { useState, useEffect, useRef } from 'react';
import ThreadInput from './ThreadInput';
import ThreadDetails from './ThreadDetails';
import Message from './Message';

const Thread = () => {
  // I would personally go with stateful components though
  //  for components wherein states would be relative to each other
  const [messageHeight, setMessageHeight] = useState(0);
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
    // helpful when actually setting state asynchronously when
    // fetching APIs
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
            Team Turon 🍌
          </h2>
        </div>
        <div
          ref={messageContainer}
          className="thread__messages"
        >
          <Message />
          <div className="thread__divider">
            <p><span>Now</span></p>
          </div>
          <Message
            isOwn
          />
        </div>
        <ThreadInput />
      </div>
      <ThreadDetails />
    </div>
  );
};

export default Thread;
