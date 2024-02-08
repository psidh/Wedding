import React from 'react';

export default function Events() {
  return (
    <div>
      <div
        className='flex flex-col justify-center items-center h-[70px] 
        bg-gradient-to-r from-[#E8B865] from-25% via-[#FEA0AF] 
        via-50% to-[#98C9E7] to-100%
        w-full opacity-30'
      >
        <h1 className='text-3xl my-4 z-10'>Events</h1>
      </div>
      <img
        src='/draw2.svg'
        alt='drawing3 svg'
        className='absolute z-0 right-0'
      />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-[41px] text-5xl font-extralight'>20th August 2024</h1>
        <div className='mt-[46px] mb-[36px]'>
          <h1 className='text-3xl '>Mehendi</h1>
          <h2 className='text-2xl '>2:30 PM</h2>
        </div>

        <div className='mt-[46px] mb-[36px]'>
          <h1 className='text-3xl '>Sangeet</h1>
          <h2 className='text-2xl '>7:00 PM</h2>
        </div>

        <div className='mt-[46px] mb-[36px] flex flex-col items-center justify-center'>
          <h1 className='text-3xl '>Wedding Ceremony</h1>
          <h2 className='text-2xl '>8:30 PM</h2>
        </div>
        <div className='mt-[46px] mb-[88px]'>
          <h1 className='text-3xl '>Reception</h1>
          <h2 className='text-2xl '>10:00 PM</h2>
        </div>
      </div>
    </div>
  );
}
