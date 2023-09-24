"use client"
import React from 'react';
import Image from 'next/image';
const Skill = ({logo, name, level}) => {
  return (
    <div key={name} className='mt-4 shadow-md shadow-gray-400'>
      <Image 
        src={logo}
        width={300}
        height={200}
        alt="project"
        className='rounded-md h-40 cursor-pointer'
      />
      <div className='flex justify-between p-3'>
        <h2 className='text-white font-semibold'>{name}</h2>
        <h3 className= "font-semibold text-yellow-500">{level}</h3>
      </div>
    </div>
  );
};

export default Skill;
