import React from 'react'
import Title from '../RoundedDesigns/Home/Title'
import ProjectCard from './ProjectCard'
import {
    workImgOne,
    workImgTwo,
    workImgThree,
    workImgFour,
    workImgFive,
    
    workImgEight


} from '../../assets'
const Projects = () => {
  return (
    <div>
        <Title title="Recent" subtitle=" Projects"/>
        <div className='w-full grid grid-cols-2 gap-10'>
            <div className='px-6' >
                <ProjectCard
                  title="Web site for restaurent"
                  category="Web Application"
                  image={workImgThree}
                  
                />

                <ProjectCard
                  title="Fraud detection and prevention system"
                  category="Blockchain"
                  image={workImgTwo}
                />
                <ProjectCard
                  title="Portfolio"
                  category="Web Application"
                  image={workImgOne}
                />
               
            </div>
            
            <div className='px-6' >
                <ProjectCard
                  title="House price prediction system"
                  category="Machine learning"
                  image={workImgEight}
                />

                <ProjectCard
                  title="Movie recommenadation system"
                  category="Machine Learning"
                  image={workImgFour}
                />
                <ProjectCard
                  title="Internal navigation system"
                  category="AR/VR"
                  image={workImgFive}
                />
               
            </div>
            
           
        </div>
    </div>
  )
}

export default Projects