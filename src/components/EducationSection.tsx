'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { EducationCard } from './Timeline'

const education = [
  {
    school: 'THE WHARTON SCHOOL',
    location: 'Philadelphia, Pennsylvania',
    degree: 'Master of Business Administration',
    period: 'Aug 2022 — May 2024'
  },
  {
    school: 'NORTHWESTERN UNIVERSITY',
    location: 'Evanston, Illinois',
    degree: 'Bachelor of Arts',
    period: 'Sep 2013 — Jun 2017',
    details: ['Computer Science major', 'Economics minor'],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="section-padding relative bg-dark-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        
        {/* Diagonal lines pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Academic Background
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gradient-static">Education</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-lg">
            A blend of technical expertise and business acumen.
          </p>
        </AnimatedSection>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              school={edu.school}
              location={edu.location}
              degree={edu.degree}
              period={edu.period}
              details={edu.details}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
