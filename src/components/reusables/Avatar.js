import React from 'react';

const Avatar = ({
  width,
  height,
  url
}) => {
  return (
    <div 
      style={{
        width, height,
        background: `url(${url})`
      }}
      className="avatar"
    />
  )
}

export default Avatar;