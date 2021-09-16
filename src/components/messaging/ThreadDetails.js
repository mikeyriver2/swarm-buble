import React from 'react';
import Avatar from '../reusables/Avatar';
import UserPreview from '../reusables/UserPreview';

const ThreadDetails = ({ title, logo, members}) => (
  <div className="threadDetails">
    <div className="threadDetails__header">
      <Avatar
        url={logo || '/Images/Logo_01.png'}
        height="128px"
        width="128px"
      />
      <h1>{title}</h1>
    </div>
    <div className="threadDetails__body">
      <h4>Members</h4>
      {
        members.map(member => {
          return (
            <UserPreview
              key={Math.random()}
              dm={member}
            />
          )
        })
      }
    </div>
  </div>
);

export default ThreadDetails;
