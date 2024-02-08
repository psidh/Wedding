import { Roboto_Mono } from 'next/font/google';
const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });

export default function FamDetails() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-[46px] mb-[30px] flex flex-col items-center justify-center'>
          <h1 className={`${roboto_Mono.className} text-[16px]`}>
            Bride's Father
          </h1>
          <h2 className='text-[42px]'>Rajesh Sharma </h2>
          <h3 className={`${roboto_Mono.className} font-light text-[16px]`}>
            Business Man
          </h3>
        </div>

        <div className='mt-[46px] mb-[30px] flex flex-col items-center justify-center'>
          <h1 className={`${roboto_Mono.className}`}>Bride's Mother</h1>
          <h2 className={` text-[42px]`}>Anita Sharma </h2>
          <h3 className={`${roboto_Mono.className} font-light text-[16px]`}>
            HomeMaker
          </h3>
        </div>

        <div className='mt-[46px] mb-[30px] flex flex-col items-center justify-center'>
          <h1 className={`${roboto_Mono.className}`}>Groom's Father</h1>
          <h2 className={` text-[42px]`}>Vijay Patel </h2>
          <h3 className={`${roboto_Mono.className} font-light text-[16px]`}>
            Retired Government Officer
          </h3>
        </div>

        <div className='mt-[46px] mb-[59px] flex flex-col items-center justify-center'>
          <h1 className={`${roboto_Mono.className}`}>Groom's Mother</h1>
          <h2 className={` text-[42px]`}>Meera Patel </h2>
          <h3 className={`${roboto_Mono.className} font-light text-[16px]`}>
            School Principal
          </h3>
        </div>
      </div>
    </div>
  );
}
