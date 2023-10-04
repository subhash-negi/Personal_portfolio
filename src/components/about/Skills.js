import React from 'react'
import Skillscard from './Skillscard'
import {BiLogoReact} from 'react-icons/bi'
import {SiTailwindcss} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaPython} from 'react-icons/fa'
import {SiHiveBlockchain} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'
const Skills = () => {
  return (
    <div className='grid grid-cols-3'>
      <Skillscard icon={<BiLogoReact/>} color="cyan" title="React"/>
      <Skillscard icon={<SiTailwindcss/>} title="Tailwind CSS"/>
      <Skillscard icon={<SiHtml5/>} color="yellow" title="HTML"/>
      <Skillscard icon={<TbBrandJavascript/>} color="lightgreen" title="Javascript"/>
      <Skillscard icon={<SiHiveBlockchain/>} color="orange" title="Blockchain"/>
      <Skillscard icon={<FaPython/>} color="" title="Python"/>
      <Skillscard icon={<TbBrandNextjs/>} color="yellow" title="Next.js"/>
      <Skillscard icon={<AiFillGithub/>} color="purple" title="github"/>
    </div>
  )
}

export default Skills