"use client"
import React, { useRef, useEffect } from 'react'
import Project from './Project';
import { motion, useAnimation } from "framer-motion";
import { projectsData } from '../utils/staticData';

function MyProjects() {
  const ref = useRef(null);
  const controls = useAnimation();
  const headingRef = useRef(null);

  // Use Intersection Observer to trigger animation when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start({ y: 0, opacity: 1 });
        } else {
          controls.start({ y: 50, opacity: 0 }); // Adjust these values as needed
        }
      },
      {
        root: null, // Set the root to null for the viewport
        rootMargin: '0px',
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="container mx-auto py-16">
      <div ref={headingRef}>
        <motion.div
          className="heading-container text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}

        >
          <h1 ref={ref} className="text-6xl font-bold text-white">MY PROJECTS</h1>
        </motion.div>
      </div>
      
      <div className="flex flex-col justify-center items-center mt-20 space-y-24">
        {projectsData.map((data, index)=> (
            <Project projectData={data} index={index} />
        ))}
      </div>
      
    </div>
  );
}

export default MyProjects;
