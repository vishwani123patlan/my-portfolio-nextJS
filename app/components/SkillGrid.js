import React from 'react';
import Skill from './Skill';
import { skillsData } from '../utils/staticData';

const SkillGrid = () => {
  return (
    <section className='md:mt-32 mb-20 relative'>
      <h2 className='text-white text-center text-5xl font-bold'>Tools and Technologies</h2>
      <div className=' flex flex-col flex-wrap items-center justify-start md:items-start pl-0 md:pl-20 gap-8'>
        {
          skillsData.map((skill, index)=>(
            <div key={index} className='mt-16'>
              <h1 className='text-white text-2xl font-semibold'>{skill.category}</h1>
              <div className='flex flex-col md:flex-row mt-8 flex-wrap justify-start items-start gap-6'>
              {
                skill.skills.map((skill)=>(
                  <Skill logo={skill.logo} name={skill.name} level={skill.level} />
                ))
              }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default SkillGrid;
