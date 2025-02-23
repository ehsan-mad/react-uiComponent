import React from 'react'
import {StarIcon}  from '@heroicons/react/24/solid'
const Rating = () => {
  return (
    <div  className="min-h-screen flex items-center justify-center bg-white">
        <div className='bg-white p-6 rounded-lg shadow-lg w-80 text-center'>
            <div className='flex justify-center items-center gap-2'>
                {[...Array(5)].map((item,index)=>(
<StarIcon key={index} className='w-6 h-6 text-yellow-500'/>
                ))}
                </div>
                <p className='text-gray-500'>Amazing! </p>
                <p className='mt-2 text-sm text-gray-500'>Ostad rating...</p>
        </div>
    
    
    </div>
  )
}

export default Rating