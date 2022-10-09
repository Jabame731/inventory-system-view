import React from 'react';
import profileImageUser from '../assets/imagenalami.jpg';

import SideBar from './SideBar';

const Profile = () => {
  return (
    <div class='flex flex-row'>
      <SideBar />
      <div class='basis-full p-5 d-flex flex-col items-start'>
        <div className='flex flex-row justify-between items-center h-[60px]'>
          <span className='text-xl text-gray-500'>Profile</span>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap justify-center overflow-hidden'>
          <div className='overflow-hidden bg-white shadow'>
            <div className='border-t border-gray-200 w-[1080px]'>
              <dl>
                <div className='bg-gray-50 px-4 py-5 flex justify-between items-center'>
                  <span className='text-sm font-medium text-gray-500'>
                    Profile Photo
                  </span>
                  <span className='mt-1 text-sm text-gray-900 mr-[400px] '>
                    <img
                      src={profileImageUser}
                      alt='profile'
                      className='w-[60px] rounded-full'
                    />
                  </span>
                </div>
                <div className='bg-gray-50 px-4 py-5 flex justify-between items-center'>
                  <span className='text-sm font-medium text-gray-500'>
                    Full name
                  </span>
                  <span className='mt-1 text-sm text-gray-900 mr-[400px] '>
                    Test Lng Sa Ni
                  </span>
                </div>
                <div className='bg-white px-4 py-5 flex justify-between items-center'>
                  <span className='text-sm font-medium text-gray-500'>
                    Role
                  </span>
                  <span className='mt-1 text-sm text-gray-900 mr-[400px] '>
                    Admin
                  </span>
                </div>
                <div className='bg-gray-50 px-4 py-5 flex justify-between items-center'>
                  <span className='text-sm font-medium text-gray-500'>
                    Email Address
                  </span>
                  <span className='mt-1 text-sm text-gray-900 mr-[400px]'>
                    testLngSa@hotmail.com
                  </span>
                </div>
                <div className='bg-white px-4 py-5 flex justify-between items-center'>
                  <span className='text-sm font-medium text-gray-500'>
                    Address
                  </span>
                  <span className='mt-1 text-sm text-gray-900 mr-[400px]'>
                    Basak Mandaue City, Cebu
                  </span>
                </div>

                <div className='bg-white px-4 py-5 mt-[40px] ml-[1000px]'>
                  <span className='mt-1 text-md font-medium text-green-400 cursor-pointer '>
                    Edit
                  </span>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
