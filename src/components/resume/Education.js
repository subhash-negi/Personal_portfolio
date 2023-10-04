import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import ResumeCard from './ResumeCard'
import ResumeTitle from './ResumeTitle'
const Education = () => {
  return (
    <div className='w-full  px-6'>
        <div>
            <ResumeTitle title="Education" icon={<GiGraduateCap/>}/>
            <ResumeCard
                badge=""
                title="B.tech (CSE) "
                subtitle="GRAPHIC ERA HILL UNIVERSITY"
                des="Enrolled in 4 year engineering degree pursuing B.tech in computer science and engineering from graphic era hill university
                "
            />

            <ResumeCard
                badge="2019-2020"
                title="Intermediate"
                subtitle="KENDRIYA VIDYALAYA UPPERCAMP"
                des="Passed intermediate (12 th)  from kendriya vidyalaya uppercamp dehradun."
            />

            <ResumeCard
                badge="2017-2018"
                title="Hign School " 
                subtitle="Children's Academy"
                des="Passed High school (10 th) from Children's Academy dehradun."
            />
        </div>

    </div>
  )
}

export default Education