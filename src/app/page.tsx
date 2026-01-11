'use client'

import {
  Navigation,
  ScrollProgress,
  HeroSection,
  ExperienceSection,
  EducationSection,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </>
  )
}
