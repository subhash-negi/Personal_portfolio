import React from 'react'

const Skillscard = ({icon,color,title}) => {
  return (
    <div className='py-4 ml-10 flex-row  gap-1
     borderRight borderBottom shadow-lg shadow-orange-500 justify-center items-center relative'>
         <div style={{color: color}} className='w-[100px] ml-14 text-8xl mb-[1px] hover:animate-spin relative'>
            {icon}
            <h2 className='text-xl text-center hover:animate-none'>{title}</h2>
        </div>   
    </div>
  )
}

export default Skillscard