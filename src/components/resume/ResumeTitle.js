import React from 'react'
import {GiGraduateCap} from 'react-icons/gi'
const ResumeTitle = ({title,icon}) => {
  return (
    <h1 className='text-lg  text-gray-300 uppercase font-medium flex items-center justify-center gap-2'>
        <span className='text-designColor text-2xl'>
            {icon}
        </span>
        {title}
    </h1>
  )
}

export default ResumeTitle