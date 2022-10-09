import React from 'react';

import { MdDashboard } from 'react-icons/md';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineInventory2 } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';

import coffee from '../assets/coffee.png';

import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div class='min-h-screen flex flex-row bg-gray-100'>
      <div class='flex flex-col w-56  overflow-hidden'>
        <div class='flex items-center justify-center h-20 mt-3'>
          <img src={coffee} alt='coffee-logo' width={100} height={100} />
        </div>
        <ul class='flex flex-col py-4'>
          <li>
            <Link
              to='/'
              class='flex flex-row items-center h-12 text-gray-800 hover:text-[#985e49]  '
            >
              <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <MdDashboard />
              </span>
              <span class='text-sm font-medium'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to='/orders'
              class='flex flex-row items-center h-12  text-gray-800 hover:text-[#985e49]'
            >
              <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <RiShoppingBag3Line />
              </span>
              <span class='text-sm font-medium'>Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to='/customers'
              class='flex flex-row items-center h-12  text-gray-800 hover:text-[#985e49]'
            >
              <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <BsPerson />
              </span>
              <span class='text-sm font-medium'>Customers</span>
            </Link>
          </li>
          <li>
            <Link
              to='/inventory'
              class='flex flex-row items-center h-12  text-gray-800 hover:text-[#985e49]'
            >
              <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <MdOutlineInventory2 />
              </span>
              <span class='text-sm font-medium'>Inventory</span>
            </Link>
          </li>

          <li>
            <Link
              to='/profile'
              class='flex flex-row items-center h-12  text-gray-800 hover:text-[#985e49]'
            >
              <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <CgProfile />
              </span>
              <span class='text-sm font-medium'>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              class='flex flex-row items-center h-12  text-gray-800 hover:text-[#985e49]'
            >
              <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <HiOutlineLogout />
              </span>
              <span class='text-sm font-medium'>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
