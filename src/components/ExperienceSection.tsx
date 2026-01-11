'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { TimelineItem } from './Timeline'

const experiences = [
  {
    company: 'MICROSOFT',
    location: 'Redmond, Washington',
    roles: [{ title: 'Senior Product Manager', period: 'Jun 2024 — Present' }],
    departments: ['Xbox Game Pass'],
  },
  {
    company: 'AMAZON',
    location: 'Bellevue, Washington',
    roles: [{ title: 'Senior Product Manager - Technical Intern', period: 'May 2023 — Aug 2023' }],
    departments: ['Amazon Artificial General Intelligence'],
  },
  {
    company: 'PATIENTPOP, A TEBRA COMPANY',
    location: 'Santa Monica, California',
    roles: [
      { title: 'Senior Software Engineer', period: 'Feb 2021 — Jun 2022' },
      { title: 'Software Engineer II', period: 'Nov 2019 — Feb 2021' },
    ],
  },
  {
    company: 'ORACLE',
    location: 'Redwood Shores, California',
    roles: [
      { title: 'Software Engineer', period: 'Jun 2019 — Oct 2019' },
      { title: 'Associate Software Engineer', period: 'Aug 2017 — May 2019' },
    ],
    departments: ['NetSuite Global Business Unit', 'Platform Development Process'],
  },
  {
    company: 'NETSUITE',
    location: 'San Mateo, California',
    roles: [{ title: 'Software Engineering Intern', period: 'Jun 2016 — Sep 2016' }],
    departments: ['Platform Development Process'],
  },
  {
    company: 'EXOSITE',
    location: 'Minneapolis, Minnesota',
    roles: [{ title: 'Support Services Intern', period: 'Jun 2015 — Sep 2015' }],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Work </span>
            <span className="text-gradient-static">Experience</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-lg">
            From software engineering to product management, building impactful products.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative space-y-12 md:space-y-0">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              company={exp.company}
              location={exp.location}
              roles={exp.roles}
              departments={exp.departments}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
