"use client"
import React, {useRef} from 'react';
import Image from 'next/image';
import Github from "@/app/assests/githublogo.png";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

function Project({index, projectData}) {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7, 1])
  const opacityPorgress = useTransform(scrollYProgress, [0,1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      className="group md:overflow-hidden relative transition"
      style={{
        scale: scaleProgress,
        opacity: opacityPorgress,
      }}
    >
    <div key={index} className="flex flex-col-reverse md:flex-row bg-slate-200 rounded-lg py-10 items-center md:p-16 md:h-[450px]">
      <div className="flex-1 flex flex-col space-y-4">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wider text-yellow-500 uppercase px-4">
            {projectData.name}
          </h1>
          <p className="text-lg text-gray-900 px-4">{projectData.description}</p>
          <div className="flex flex-col space-y-8">
            <h2 className="text-xl font-extrabold tracking-wider uppercase px-4">Technology Used</h2>
            <div className="flex flex-wrap w-96 gap-4 px-4">
              {
                projectData.technology.map((technology)=> (
                  <h1 className="bg-yellow-300 w-fit px-2 rounded-lg px-4">{technology}</h1>
                ))
              }
            </div>
          </div>
          
          <Link href={projectData.github} target='_blank'>
            <div className='flex items-center space-x-8 px-4'>
              <Image 
                src={Github}
                width={48}
                height={48}
              />
              <h2>Github Repo</h2>
            </div>
          </Link>
      </div>
      <div className="flex-1 mb-10 md:mb-0">
        <Link href={projectData.url} target='_blank'>
          <Image 
            src={projectData.logo}
            width={300}
            height={100}
            alt="project"
            className={`rounded-lg w-[300px] h-[150px] md:w-[700px] md:h-[300px] cursor-pointer ${index%2==0 ? 'rotate-6' : 'rotate-[-6deg]' } h-fit w-fit`}
          />
        </Link>
      </div>
    </div>
    </motion.div>
  )
}

export default Project
