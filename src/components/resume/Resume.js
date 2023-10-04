import React from 'react'
import Title from '../RoundedDesigns/Home/Title'
import Education from './Education'
import Languages from './Languages'
import ResumeTitle from './ResumeTitle'
import{BiCodeAlt} from 'react-icons/bi'
const resume = () => {
  return (
    <section id="resume">
        <Title title="My" subtitle=" Resume"/>
        <Education/>
        <div className='flex'>
            <div>
                <Title title="Languages" subtitle="Known"/>
                <Languages title="English" percent="94%"/>
                <Languages title="Hindi" percent="99%"/>
            </div>
            <div className='mt-6'>
               <ResumeTitle title="Coding" icon={<BiCodeAlt/>}/>
                <Languages title="C++" percent="90%"/>
                <Languages title="Javascript" percent="80%"/>
                <Languages title="C" percent="85%"/>
            </div>
        </div>
      
     
    </section>
  )
}

export default resume