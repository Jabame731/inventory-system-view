import React from 'react';
import SideBar from './SideBar';
import ProductTable from './ProductTable';

const Orders = () => {
  return (
    <div class='flex flex-row'>
      <SideBar />
      <div class='basis-full p-5 d-flex flex-col items-start'>
        <div className='flex flex-row justify-between items-center h-[60px]'>
          <span className='text-xl text-gray-500'>Orders</span>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap justify-center overflow-hidden'>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
