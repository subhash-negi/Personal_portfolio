import React from 'react'

const RoundedOne = () => {
  return (
    <div className='w-96 h-96 absolute  top-0 -left-10 animate-spin-slow'>
    <div className='w-32 h-32 rounded-full bg-cyan-500 absolute top-10 blur-xl'></div>
    <div className='w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-24 blur-xl'></div>
    <div className='w-28 h-28 rounded-full bg-designColor absolute top-10 -right-60 blur-2xl'></div>

  </div>
  )
}

export default RoundedOne