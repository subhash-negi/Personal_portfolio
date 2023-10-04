import React from 'react'
import { bannerImg } from '../../../assets'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa6'
import {BsFacebook, BsLightningFill} from 'react-icons/bs'
import {FiMail,FiSend} from 'react-icons/fi'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Contact from '../../Contact/contact'
import CV from "../../../assets/subhashnegiresume.pdf"
const Left = () => {
    const[text]=useTypewriter({
        words:["Web Developer","Blockchain Developer","Machine Learning Enthusiast"],
        loop:true,
        typeSpeed:30,
        delaySpeed:2000,
        deleteSpeed:20
    });
  return (
    
    <div className='w-3/12 h-full bg-bodyColor rounde-2xl shadow-testshadow z-10'>
 
        <div className='w-full '>
            <img 
            className='w-full h-72 mb-12 object-cover rounded-2xl'
            src={bannerImg}
            alt="bannerimage"
            loading='priority'
            />  
        </div>
        <div className='w-full h-2/5'>
            <div className='flex flex-col items-centergap-2 py-10'>
                 <h1 className='text-emerald-500 mb-2 text-4xl font-semibold text-center'>Subhash Negi</h1>
                <p className='text-center text-base mb-10 text-designColor tracking-wide'>{text } <Cursor cursorBlinking="false" cursorStyle="|"/></p>
                <div className='flex gap-2 justify-center mt-2'>
                    <span className='hover:text-designColor duration-300 text-2xl cursor-pointer'>
                        <FaGithub/>
                    </span>
                    <span className='hover:text-designColor duration-300 text-2xl cursor-pointer'>
                        <FaLinkedinIn/>
                    </span>
                    <span className='hover:text-designColor duration-300 text-2xl cursor-pointer'>
                        <BsFacebook/>
                    </span>
                    <span className='hover:text-designColor duration-300 text-2xl cursor-pointer'>
                        <FaInstagram/>
                    </span>
                    <span className='hover:text-designColor duration-300 text-2xl cursor-pointer'>
                        <FiMail/>
                    </span>
                    
                </div>
            </div>
            <div className='mt-6 flex h-14'>
               <a
                href={CV} 
                target="_blank"
                rel="nonreferrer" 
                className='w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide  hover:text-designColor duration-300'>
               <button className='w-full h-full flex justify-center items-center gap-2 uppercase'
             >
                    Download CV <BsLightningFill/>
                </button>
               </a>
               
                <button  className='w-1/2 flex justify-center borderRight items-center gap-2
               border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300' >
                    Contact Me <FiSend/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Left