import React from 'react'

const Aboutme = () => {
  return (
    <div className='flex pb-6'>
        <div className='w-1/2 text-zinc-400 px-6 borderRight flex-row items-center'>
           <div className='py-6'>
           <h2 className='font-bold mb-1 text-designColor'>Software Engineer | Pursuing B.Tech CSE | Graphic Era Hill University <br/><br/>Hello! I'm Subhash Negi </h2>
            <p className='text-base leading-6'>
            A developer
        
            with  a rich experience of working with core web development technologies 
            like 
            <span className="text-emerald-400 hover:underline"> react.js</span>
            , 
            <span className="text-emerald-400 hover:underline"> next.js</span>,  
            <span className="text-emerald-400 hover:underline"> SQL</span>, 
            <span className="text-emerald-400 hover:underline"> HTML</span>, 
            <span className="text-emerald-400 hover:underline"> Tailwind CSS</span>,
            <span className="text-emerald-400 hover:underline"> Express.js </span>,
            <span className="text-emerald-400 hover:underline"> MongoDB</span> and various others. 
            I am proficient in programming languages like
            <span className="text-emerald-400 hover:underline"> C++ </span>,
            <span className="text-emerald-400 hover:underline">C</span>,
            <span className="text-emerald-400 hover:underline"> Javascript</span>  etc.

             In addition to these skills, I also possess knowledge of blockchain technology, showcasing my commitment to staying at the forefront of emerging trends in the tech world.

            </p>
           </div>
        </div>
        <div className='w-1/2 p-6'>
          <ul>
              <li className='text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2'>
                <span className='bg-designColor text-white uppercasepx-4 py-[1px] px-2 rounded-md uppercase'>Age</span>21
              </li>
              <li className='text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2'>
                <span className='bg-designColor text-white uppercasepx-4 py-[1px] px-2 rounded-md uppercase'>Residence</span>INDIA
              </li>
              <li className='text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2'>
                <span className='bg-designColor text-white uppercasepx-4 py-[1px] px-2 rounded-md uppercase'>qualification</span>SOFTWARE ENGINEER <br/>(B.tech CSE)
              </li>
              <li className='text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2'>
                <span className='bg-designColor text-white uppercasepx-4 py-[1px] px-2 rounded-md uppercase'>Address</span>DEHRADUN, INDIA
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Aboutme