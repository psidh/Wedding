import { Roboto_Mono } from 'next/font/google';
const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });


export default function FamDetails() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className={`mt-[46px]`}>Bride's Father</h1>
        <h2 className='text-2xl'>Rajesh Sharma </h2>
        <h3 className={`${roboto_Mono.className} font-light text-xl`}>
          Business Man
        </h3>

        <h1 className={`mt-[36px]`}>Bride's Mother</h1>
        <h2 className='text-2xl'>Anita Sharma </h2>
        <h3 className={`${roboto_Mono.className} font-light text-xl`}>
          HomeMaker
        </h3>

        <h1 className={`mt-[36px]`}>Groom's Father</h1>
        <h2 className='text-2xl'>Vijay Patel </h2>
        <h3 className={`${roboto_Mono.className} font-light text-xl`}>
          Retired Government Officer
        </h3>

        <h1 className={`mt-[36px]`}>Groom's Mother</h1>
        <h2 className='text-2xl'>Meera Patel </h2>
        <h3 className={`${roboto_Mono.className} font-light text-xl mb-[56px]`}>
          School Principal
        </h3>
      </div>
    </div>
  );
}
