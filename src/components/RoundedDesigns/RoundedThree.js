import React from 'react'

const RoundedThree = () => {
  return (
    <div className='w-96 h-96 rounded-full absolute top-72 left-72'>
    <div className='w-full h-full relative animate-reverse-spin'>
    <div className='w-32 h-32 rounded-full bg-emerald-500 absolute top-24 blur-xl'></div>
    <div className='w-24 h-24 rounded-full bg-rose-600 absolute -bottom-32 left-16 blur-xl'></div>
    <div className='w-28 h-28 rounded-full bg-blue-600 absolute top-32 -right-32 blur-2xl'></div>
    
    </div>
    </div>
  )
}

export default RoundedThree