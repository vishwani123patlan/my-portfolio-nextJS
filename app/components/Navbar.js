import React from 'react'
import Image from 'next/image'
import github from '@/app/assests/github.png'
import instagram from '@/app/assests/instagram.png'
import linkedin from '@/app/assests/linkedin.png'

function Navbar() {
  return (
    <div className="h-20 flex flex-row justify-around bg-transparent items-center px-4">
      <div className="flex-1">
        <h1 className="font-bold text-lg cursor-pointer text-white">Vishwani</h1>
      </div>

      {/* <div className="hidden  md:flex flex-1 justify-center space-x-14">
        <Image 
          src={github}
          width={30}
          height={30}
          alt='github'
          className="cursor-pointer"
        />
        <Image 
          src={linkedin}
          width={30}
          height={30}
          alt='linkedin'
          className="cursor-pointer"
        />
        <Image 
          src={instagram}
          width={30}
          height={30}
          alt='instagram'
          className="cursor-pointer"
        />
      </div> */}

      <div className="text-white hidden flex-1 md:flex justify-end space-x-16 items-center">
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Projects</a>
        <a className="cursor-pointer">Skills</a>
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded-full hover:bg-white group px-10 py-3">
          <span className="w-0 h-0 rounded-full bg-yellow-600 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>  
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 text-base">Contact Me</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar



{/* <div ref={headRef}>
<motion.div
  style={{
    height: "48rem",
    zIndex: 6,
    position: 'relative',
    translateX: xTransformForScroll
  }}
  initial={{ x: 0, y: 0 }}
  animate={{x: 0, y: 0}}
>
<h1 className="text-8xl font-bold text-white">
  My Projects
</h1>
</motion.div>
</div> */}