import React from 'react'
import Title from '../RoundedDesigns/Home/Title'
import Aboutme from './Aboutme'
import Skills from './Skills'

const About = () => {
  return (
     <section id="about" className='w-full'>
       <Title title="About" subtitle=" Me"/>
       <Aboutme/>
       <Title title="Skills"/>
       <Skills/>
     </section>
  )
}

export default About