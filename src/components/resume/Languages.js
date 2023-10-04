import React from 'react'
import Title from '../RoundedDesigns/Home/Title'

const Languages = ({title,percent}) => {
  return (
    <div>
        
        <div className='py-4'>
            <div className='py-3 px-6 border-b-[1px] border-zinc-800'>
                <p className='text-base text-textColor mb-1.5'>{title}</p>
                <span className='w-80 bg-zinc-600 h-1 flex relative'>
                    <span style={{width:percent}} className=' h-full absolute top-0 lft-0 bg-designColor'></span></span>
            </div>
        </div>
    </div>
  )
}

export default Languages