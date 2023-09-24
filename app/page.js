import Image from 'next/image'
import HeroSection from '@/app/components/HeroSection';
import Navbar from './components/Navbar';
import MyProjects from './components/MyProjects';
import SkillGrid from './components/SkillGrid';
import Skill from './components/Skill';

export default function Home() {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <MyProjects />
      <SkillGrid skills={skills} />
    </main>
  )
}
