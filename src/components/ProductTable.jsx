import React from 'react';

import { coffeeDataOrders } from '../data/data';

const colorFunction = (status) => {
  let color = '';
  if (status === 'Available') {
    color = '  !bg-emerald-500 ';
  } else if (status === 'Not Available') {
    color = '!bg-rose-500';
  } else if (status === 'Inadequate') {
    color = '!bg-amber-500';
  } else {
    color = '';
  }

  return color;
};

const ProductTable = () => {
  return (
    <div class='w-[1060px] overflow-hidden'>
      <div class='w-full '>
        <div class='bg-white shadow-md rounded my-6'>
          <table class='w-full table-auto'>
            <thead>
              <tr class='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                <th class='py-3 px-6 text-center'>ID</th>
                <th class='py-3 px-6 text-center'>Image</th>
                <th class='py-3 px-6 text-center'>Coffee Name</th>
                <th class='py-3 px-6 text-center'>Items Available</th>
                <th class='py-3 px-6 text-center'>Price</th>
                <th class='py-3 px-6 text-center'>Status</th>
                <th class='py-3 px-6 text-center'>Actions</th>
              </tr>
            </thead>

            <tbody class='text-gray-600 text-sm font-light'>
              {coffeeDataOrders.map((coffeeDetail) => (
                <>
                  <tr className=' border-gray-200 hover:bg-gray-100'>
                    <div className='flex justify-center items-center'>
                      <span className='mt-[15px]'>{coffeeDetail.id}</span>
                    </div>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <img
                          src={coffeeDetail.coffeImage}
                          alt='coffee'
                          className='w-[32px] h-[32px] flex justify-center items-center'
                        />
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            {coffeeDetail.coffeName}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            {coffeeDetail.itemsAvailable}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span class='font-medium flex justify-center items-center'>
                            ${coffeeDetail.price}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class='py-3 px-6 text-left'>
                      <div class='flex justify-center items-center'>
                        <div class='mr-2'></div>
                        <div className=''>
                          <span
                            class={`flex justify-center items-center p-1 rounded-lg text-white ${colorFunction(
                              coffeeDetail.status
                            )}`}
                          >
                            {coffeeDetail.status}
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

export default ProductTable;
