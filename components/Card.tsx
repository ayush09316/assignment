import React from 'react'
import Image from 'next/image'

type Props = {
    collection: {
        pic: string; city: string; time: string[]; para2: string; button: string; 
    }
}

const Card = ({collection}:Props) => {
  return (
    <div className='w-[257px] shadow-lg h-[624px] dark:bg-[#818A97] p-5 bg-[#FFFFFF] relative'>
      <div className=' bg-black relative'>
        <Image src={collection.pic} alt='pic' width={100} height={100}  className='w-[290px] h-[400px] object-cover' />
      </div>
      <hr className='bg-[#818A97]  w-auto mt-2 h-[2px] '/>
     <div className='flex flex-col items-center   h-[11rem] justify-between'>
     <h1 className='text-xl font-semibold text-center mt-2'>{collection.city}</h1>
     
     <span className='text-center '> {collection.time[0]}  | {collection.time[1]} | {collection.time[2]}</span>
 
     <p className='text-center text-sm'> {collection.para2} </p>
     <button className='w-[200px]  h-[36px] bg-black text-white '>
       {collection.button}
     </button>
     </div>
    </div>
  )
}

export default Card
