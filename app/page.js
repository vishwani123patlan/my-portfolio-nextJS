import HeroSection from '@/app/components/HeroSection';
import Navbar from './components/Navbar';
import MyProjects from './components/MyProjects';
import SkillGrid from './components/SkillGrid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <MyProjects />
      <SkillGrid skills={skills} />
    </main>
  )
}
