"use client"
import React from 'react';
import Image from 'next/image';

import myPhoto from '@/app/assests/myphoto.png'
import { githublogo, instagram, linkedin } from '../assests';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
//import VishwaniResume from "@/app/assests/VishwaniPatlanResume.docx"

function HeroSection() {

  const downloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/VishwaniPatlanResume.docx'; // Path to the file in the public folder
    downloadLink.download = 'VishwaniPatlanResume.docx'; // The default file name for the download
    downloadLink.click();
  };

  return (
    <section className="p-32 mt-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-x-5 space-y-8 lg:space-y-0">
        <div className="flex-[.8] flex flex-col space-y-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-start">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-slate-600 "> Hello, I'm {""}</span>
           <br />
           <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Vishwani Patlan',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
          </h1>
          <p className="text-white text-base">
            I'm experienced web developer.Turning Your Vision into Reality. With a
            passion for crafting compelling online experiences, I bring your web projects to life. From responsive designs to efficient code, I specialize in creating user-friendly websites that captivate and engage. Let's collaborate to turn your vision into a web reality today.
          </p>
          <div className="my-3 flex flex-col md:flex-row justify-start items-start space-y-3 md:space-y-0 md:space-x-2">
            <button className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 font-serif font-normal w-[100%] bg-gradient-to-br from-slate-500 via-yellow-200 to-yellow-500">Hire me</button>
            <button className="px-6 py-3 rounded-full border-[1px] border-white text-white hover:bg-slate-200 w-[100%] hover:text-yellow-500" onClick={downloadResume}>Download CV</button>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0'>
            <h1 className='text-white text-lg font-medium'>Follow me on my social media</h1>
            <div className='flex flex-1 justify-center space-x-10'>
              <Link href={'https://github.com/vishwani123patlan'} target='_blank'>
                <Image
                  src={githublogo}
                  width={44}
                  height={44}
                  alt='github'
                  className="bg-white cursor-pointer"
                />
              </Link>
              <Link href={'https://www.linkedin.com/in/vishwani-patlan-90ab70187/'} target='_blank'>
                <Image
                  src={linkedin}
                  width={44}
                  height={44}
                  alt='linkedin'
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'https://www.instagram.com/vishwani.developer/'} target='_blank'>
                <Image
                  src={instagram}
                  width={44}
                  height={44}
                  alt='instagram'
                  className="cursor-pointer"
                />
              </Link>
            </div>
        </div>
        </div>
        <div>
          <Image 
            src={myPhoto}
            width={400}
            height={500}
            alt='vishwani patlan'
            className="rounded-full cursor-pointer transform transition duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection