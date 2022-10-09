import React from 'react';

import customerData, { customersData } from '../data/data';

const CustomerTable = () => {
  return (
    <div class='w-[1060px] overflow-hidden'>
      <div class='w-full '>
        <div class='bg-white shadow-md rounded my-6'>
          <table class='w-full table-auto'>
            <thead>
              <tr class='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                <th class='py-3 px-6 text-center'>ID</th>
                <th class='py-3 px-6 text-center'>Customer Name</th>
                <th class='py-3 px-6 text-center'>Customer Email</th>
                <th class='py-3 px-6 text-center'>Order</th>
                <th class='py-3 px-6 text-center'>Quantity</th>
                <th class='py-3 px-6 text-center'>Actions</th>
              </tr>
            </thead>

            <tbody class='text-gray-600 text-sm font-light'>
              {customersData.map((customerDetail) => (
                <>
                  <tr className=' border-gray-200 hover:bg-gray-100'>
                    <div className='flex justify-center items-center'>
                      <span className='mt-[15px]'>{customerDetail.id}</span>
                    </div>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            {customerDetail.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            {customerDetail.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            {customerDetail.order}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            {customerDetail.quantity}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <span class='font-medium text-green-500 cursor-pointer'>
                          Edit
                        </span>
                        <span class='font-medium ml-4 text-rose-600 cursor-pointer'>
                          Delete
                        </span>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
