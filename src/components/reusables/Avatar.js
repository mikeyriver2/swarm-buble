import React from 'react';
import logo from '../../assets/Images/Logo_02.png';

const Avatar = ({
  width,
  height,
  url
}) => {
  return (
    <div
      style={{
        width,
        height
      }}
      className="avatar"
    >
      {/** For some weird ass reason which took me like 2 hours specific to windows
       * but not happening in ubuntu, if I set the entire '../../url' from the props, it
       * won't work...so I have to statically set the '../../' into this component straight.
       * I've never had this issue with non create-react-app projects before...
       */}

      <img alt="avatar img" src={require('../../assets' + url).default} />
    </div>
  ) 
}

export default Avatar;