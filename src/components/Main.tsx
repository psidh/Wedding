import { Roboto_Mono } from 'next/font/google';
const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });

export default function Main() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <img src='/draw.svg' alt='drawing' />
        <div className='mr-8'>
          <h1 className='text-4xl font-bold'>Priya Sharma</h1>
          <h2 className={`${roboto_Mono.className} font-extralight`}>
            Software Engineer
          </h2>
          <h3 className={`${roboto_Mono.className} font-light`}>
            @priya_insta
          </h3>
        </div>
      </div>
      <div className='flex flex-row-reverse justify-between items-center'>
        <img src='/draw.svg' alt='drawing' className='rotate-180' />
        <div className='ml-16'>
          <h1 className='text-4xl font-bold'>Amit Patel</h1>
          <h2 className={`${roboto_Mono.className} font-extralight`}>
            Civil Engineer
          </h2>
          <h3 className={`${roboto_Mono.className} font-light`}>@amit_insta</h3>
        </div>
      </div>
    </div>
  );
}
