import React from 'react';
import { Roboto_Mono } from 'next/font/google';
const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });


export default function Top() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold pt-[44px] px-[102px] pb-[10px]'>
          Priya & Amit
        </h1>
        <hr className='border-black border-1 text-black py-[10px] w-[75%]' />
        <h2 className={`${roboto_Mono.className} font-light`}>
          20 . 08 . 2024
        </h2>
        <div
          className='flex flex-col items-center mt-[18px] bg-gradient-to-r from-[#E8B865] from-25% via-[#FEA0AF] via-50% to-[#98C9E7] to-100%
         pb-[30px] w-full opacity-30'
        >
          <h1 className='text-center z-10 text-[23px] pt-[13px] px-[80px] pb-[10px]'>
            Royal Palace Banquet Hall
          </h1>
          <button
            className={`${roboto_Mono.className} text-sm 
            mt-[10px] mx-[131px] 
            py-3 text-md px-6 bg-black rounded-md text-white`}
          >
            navigate me
          </button>
        </div>
      </div>
    </div>
  );
}
