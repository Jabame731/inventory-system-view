import React from 'react';

import SideBar from './SideBar';

const Profile = () => {
  return (
    <div class='flex flex-row'>
      <SideBar />
      <div class='basis-full p-5'>Profile</div>
    </div>
  );
};

export default Profile;
