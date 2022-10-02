import React from 'react';

import SideBar from './SideBar';

const Customers = () => {
  return (
    <div class='flex flex-row'>
      <SideBar />
      <div class='basis-full p-5'>Customers</div>
    </div>
  );
};

export default Customers;
