import { sports } from '@/constant'
import Image from 'next/image'
import SportCard from './SportCard'

const Sports = () => {
  return (
    <div className=' flex flex-col items-start '>
      <h1 className='font-bold text-lg underline my-4'>Sports</h1>
      <div className='flex gap-3 flex-wrap justify-evenly'>
        {
          sports.map((collection, index) => (
           <SportCard key={index} collection={collection} />
          ))
        }
        <div className='w-[237px] shadow-lg h-auto dark:bg-[#3B3E47] p-2 bg-[#FFFFFF] relative flex flex-col items-center text-black dark:text-white'>
          <div className='absolute top-2 right-2 text-center w-9 bg-black text-white'>
            <h1>Ad</h1>
          </div>
          <Image src='/ads.jpeg' alt='ads' width={400} height={400} />
         <div className='flex flex-col gap-4 items-start px-5'>
         <h1 className='font-semibold text-lg mt-4'>Advertisement title</h1>
          <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sports
