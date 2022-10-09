import React from 'react';
import SideBar from './SideBar';
import profileImageUser from '../assets/imagenalami.jpg';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { TbBox } from 'react-icons/tb';
import { BsFillBarChartFill } from 'react-icons/bs';

const DashBoard = () => {
  return (
    <div class='flex flex-row '>
      <SideBar />
      <div class='basis-full p-5 d-flex flex-col items-start'>
        <div className='flex flex-row justify-between items-center h-[60px]'>
          <span className='text-xl text-gray-500'>Dashboard</span>
          <div className='flex items-center justify-evenly gap-6'>
            <p>
              <span className='text-gray-500'> Welcome </span>
              <span className='text-[#5e3e33]'>sdfdsfsdfsdfsd</span>
            </p>
            <div className='flex items-center justify-evenly gap-6 '>
              <img
                src={profileImageUser}
                alt=''
                className='rounded-full mr-[100px] w-[60px] h-[60px]'
              />
            </div>
          </div>
        </div>
        {/* main-content */}
        <div className='flex flex-wrap lg:flex-nowrap justify-center '>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold text-gray-500'>Earnings</p>
                <p className='text-2xl'>$63,448.78</p>
              </div>
              <button
                type='button'
                className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4 bg-[#985e49]'
              >
                <BsCurrencyDollar />
              </button>
            </div>
            <div className='mt-6'>
              <button color='white' text='Download' borderRadius='10px'>
                Download Information
              </button>
            </div>
          </div>
          {/* customers --to--- final */}
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
            <div className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '>
              <button
                type='button'
                className='text-2xl opacity-0.9 rounded-full bg-cyan-300 text-cyan-600  p-4 hover:drop-shadow-xl'
              >
                <BsPeople />
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>10,450</span>
                <span className='text-sm text ml-2 text-red-600'>-10%</span>
              </p>
              <p className='text-sm text-gray-400  mt-1'>customers</p>
            </div>
          </div>
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
            <div className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '>
              <button
                type='button'
                className='text-2xl opacity-0.9 rounded-full bg-yellow-300 text-white  p-4 hover:drop-shadow-xl'
              >
                <TbBox />
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>13,500</span>
                <span className='text-sm text ml-2 text-green-600'>+11%</span>
              </p>
              <p className='text-sm text-gray-400  mt-1'>Products</p>
            </div>
          </div>
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
            <div className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '>
              <button
                type='button'
                className='text-2xl opacity-0.9 rounded-full bg-red-300 text-red-600  p-4 hover:drop-shadow-xl'
              >
                <BsFillBarChartFill />
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>150,900</span>
                <span className='text-sm text ml-2 text-green-600'>+14%</span>
              </p>
              <p className='text-sm text-gray-400  mt-1'>Sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
