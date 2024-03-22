import React from 'react'
import Card from './Card'
import { MdOutlineKeyboardArrowLeft ,MdOutlineKeyboardArrowRight} from "react-icons/md";
import { collections } from '@/constant'

const Collections = () => {
  return (
    <div className='dark:bg-collection bg-collection-light max-w-[1290px] max-h-[918px]  flex items-center flex-col  p-[120px]'>
      <h1 className='text-center text-3xl font-bold '>Collection Spolight</h1>
      <p className='text-center max-w-[60rem] mt-5'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

      <div className='flex gap-5 items-center mt-10 relative'>
      <button className='flex items-center justify-center mt-10 bg-black text-white w-auto h-[36px] '>
          <MdOutlineKeyboardArrowLeft className='text-2xl'/>
        </button>
        {
          collections.map((_, i) => (
            <Card key={i} collection={collections[i]} />
          ))
        }
        
        <button className='flex items-center justify-center mt-10 bg-black text-white w-auto h-[36px]'>
          <MdOutlineKeyboardArrowRight className='text-2xl'/>
        </button>
      </div>
      
    </div>
  )
}

export default Collections
