import React from 'react';
import SideBar from './SideBar';

const Orders = () => {
  return (
    <div class='flex flex-row'>
      <SideBar />
      <div class='basis-full p-5'>
        <div className='flex flex-row justify-between items-center h-[60px]'>
          <span className='text-xl text-gray-500'>Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Orders;
