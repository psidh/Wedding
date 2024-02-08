import React from 'react';

export default function Important() {
  return (
    <div>
      <div
        className='flex flex-col justify-center items-center h-[70px] 
        bg-gradient-to-r from-[#E8B865] from-25% via-[#FEA0AF] 
        via-50% to-[#98C9E7] to-100%
        w-full opacity-30'
      >
        <h1 className='text-3xl my-4 z-10'>Important Links</h1>
      </div>
      <div className='my-[41px] flex flex-col items-center justify-center'>
        <button className='border border-black py-2 px-6 mt-[15px] mb-[14px] shadow-xl w-[75%] rounded-xl text-2xl'>
          Pre-Wedding Shoot
        </button>
        <button className='border border-black py-2 px-6 my-[14px] shadow-xl w-[75%] rounded-xl text-2xl'>
          Wedding Album
        </button>
        <button className='border border-black py-2 px-6 mt-[14px] mb-[48px] shadow-xl w-[75%] rounded-xl text-2xl'>
          Wedding Video
        </button>
      </div>
    </div>
  );
}
