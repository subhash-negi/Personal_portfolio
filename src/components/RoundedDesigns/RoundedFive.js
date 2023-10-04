import React from 'react'

const RoundedFive = () => {
  return (
    <div className='w-96 h-96 absolute  top-0 -left-10 animate-reverse-spin'>
    <div className='w-32 h-32 rounded-full bg-rose-500 absolute top-16 blur-xl'></div>
    <div className='w-24 h-24 rounded-full bg-emerald-600 absolute -bottom-60 left-16 blur-xl'></div>
    <div className='w-28 h-28 rounded-full bg-orange-500 absolute top-32 -right-20 blur-2xl'></div>

  </div>
  )
}

export default RoundedFive