import React from 'react'
import Card from './Card'
import { MdOutlineKeyboardArrowLeft ,MdOutlineKeyboardArrowRight} from "react-icons/md";
import { collections } from '@/constant'

const Collections = () => {
  return (
    <div className='relative dark:bg-collection bg-collection-light flex items-center flex-col p-[10%] '>
      <h1 className='text-center text-3xl font-bold '>Collection Spolight</h1>
      <p className='text-center max-w-[60rem] mt-5'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      <button className='absolute z-50 top-1/2 left-[8%] translate-y-[-50%]  bg-black text-white w-auto h-[36px] max-xs:left-[1%] '>
          <MdOutlineKeyboardArrowLeft className='text-2xl'/>
        </button>
      <div className='flex gap-5 items-center mt-10  flex-wrap justify-evenly'>
      
        {
          collections.map((_, i) => (
            <Card key={i} collection={collections[i]} />
          ))
        }
      </div>
      <button className='absolute top-1/2 right-[8%] translate-y-[-50%]   bg-black text-white w-auto h-[36px] max-xs:right-[1%] '>
          <MdOutlineKeyboardArrowRight className='text-2xl'/>
        </button>
      
    </div>
  )
}

export default Collections
