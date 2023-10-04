import React, { useState } from 'react'
import Left from './components/RoundedDesigns/Home/Left'
import About from './components/about/About.js'
import { FaUser,FaEnvelope } from 'react-icons/fa6';
import {IoIosPaper} from 'react-icons/io';
import {MdWork,MdOutlineClose} from "react-icons/md";
import Resumed from './components/resume/Resume'
import Project from './components/Projects/Projects';
import {FiPhoneCall} from 'react-icons/fi'
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/contact';

const Home = () => {
  const[about,setabout]=useState(false);
  const[resume,setresume]=useState(false);
  const[Projects,setProjects]=useState(false);
  const[contact,setcontact]=useState(false);
  const[details,setdetails]=useState(false);
  const[show,setshow]=useState(false);
  const[rightportion,setrightportion]=useState(true);
  



  return (
    <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
        <div className='w-16 h-96 bg-transparent flex flex-col gap-4'>
          <div className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'>
            <div onClick={()=>{setshow(!show)}} className='flex flex-col gap-1.5 overflow-hidden'>
              <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2
              group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'> </span>
              <span className='w-8 h-[2px] bg-textColor inline-block '> </span>
              <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2
              group-hover:translate-x-0  transition-transform duration-300 group-hover:bg-designColor'> </span>
            </div>
          </div>

          {
            show ?
            <div className='w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between'>
              <span 
              onClick={()=>
                setabout(true)&
                setresume(false)&
                setProjects(false)&
                setcontact(false)&
                setdetails(false)&
                setrightportion(false)
              }
              className='w-full h-6 text-textColor text-xl flex items-center 
              justify-center hover:text-designColor duration-300 cursor-pointer relative group'><FaUser/>
              <span className='absolute font-medium text-xs uppercase  text-white
              bg-designColor px-4 py-[1px] rounded-xl  left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>About</span>
              </span>

              <span 
               onClick={()=>
                setabout(false)&
                setresume(true)&
                setProjects(false)&
                setcontact(false)&
                setdetails(false)
                &
                setrightportion(false)
              }
              className='w-full h-6 text-textColor text-xl flex items-center 
              justify-center hover:text-designColor duration-300 cursor-pointer relative group'><IoIosPaper/>
              <span className='absolute font-medium text-xs uppercase  text-white
              bg-designColor px-4 py-[1px] rounded-xl  left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Resume</span>
              </span>

              <span 
               onClick={()=>
                setabout(false)&
                setresume(false)&
                setProjects(true)&
                setcontact(false)&
                setdetails(false)
                &
                setrightportion(false)
              }
              className='w-full h-6 text-textColor text-xl flex items-center 
              justify-center hover:text-designColor duration-300 cursor-pointer relative group'><MdWork/>
              <span className='absolute font-medium text-xs uppercase  text-white
              bg-designColor px-4 py-[1px] rounded-xl  left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Projects</span>
              </span>

              <span
               onClick={()=>
                setabout(false)&
                setresume(false)&
                setProjects(false)&
                setcontact(true)&
                setdetails(false)
                &
                setrightportion(false)
              }
               className='w-full h-6 text-textColor text-xl flex items-center 
              justify-center hover:text-designColor duration-300 cursor-pointer relative group'><FaEnvelope/>
              <span className='absolute font-medium text-xs uppercase  text-white
              bg-designColor px-4 py-[1px] rounded-xl  left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Contact</span>
              </span>

              <span
               onClick={()=>
                setabout(false)&
                setresume(false)&
                setProjects(false)&
                setcontact(false)&
                setdetails(true)
                &
                setrightportion(false)
              }
               className='w-full h-6 text-textColor text-xl flex items-center 
              justify-center hover:text-designColor duration-300 cursor-pointer relative group'><FiPhoneCall/>
              <span className='absolute font-medium text-xs uppercase  text-white
              bg-designColor px-4 py-[1px] rounded-xl  left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Call</span>
              </span>
              
            </div>
            :
       
            <div>
          </div>
          }
        </div>
        <div className='w-[94%] h-full bg-transparent flex items-center'>
   
            <Left/>
            <div className='w-8/12 h-[95%] bg-bodyColor'>
              <div className='w-full h-[96%] overflow-y-scroll scrollbar-thin'>
                {rightportion&& <Welcome/>}
               {about&& <About/>}
               {resume && <Resumed/>}
               {Projects && <Project/>}
               {contact && <Contact/>}
                {details && <h1 className='text-2xl mt-64 text-center text-designColor'> NOT!! available at the moment!!<br/> Privacy issues </h1>}

              </div>
           
            </div>
          </div>
    </div>
  )
}

export default Home