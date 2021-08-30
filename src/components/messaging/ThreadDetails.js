import React from 'react';
import Avatar from '../../components/reusables/Avatar';
import UserPreview from '../reusables/UserPreview';

const ThreadDetails = () => (
  <div className="threadDetails">
    <div className="threadDetails__header">
      <Avatar
        url="./Images/Logo 02.png"
        height="128px"
        width="128px"
      />
      <h1>Team Turon</h1>
    </div>
    <div className="threadDetails__body">
      <h4>Members</h4>
      <UserPreview />
      <UserPreview />
      <UserPreview />
      <UserPreview />
    </div>
  </div>
);

export default ThreadDetails;