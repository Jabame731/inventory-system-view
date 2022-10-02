import React from 'react';
import SideBar from './SideBar';

const Inventory = () => {
  return (
    <div class='flex flex-row'>
      <SideBar />
      <div class='basis-full p-5'>Inventory</div>
    </div>
  );
};

export default Inventory;
