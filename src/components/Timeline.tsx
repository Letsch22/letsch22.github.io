'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import clsx from 'clsx'

interface TimelineItemProps {
  company: string
  location: string
  roles: {
    title: string
    period: string
  }[]
  departments?: string[]
  index: number
  isLast?: boolean
}

export function TimelineItem({
  company,
  location,
  roles,
  departments,
  index,
  isLast = false,
}: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={clsx(
        'relative flex flex-col md:flex-row gap-8 md:gap-16',
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      {/* Timeline line and dot */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px">
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full w-full bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent origin-top"
          />
        )}
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10"
      >
        <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 shadow-glow animate-pulse-slow" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'flex-1 ml-12 md:ml-0',
          isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
        )}
      >
        <div
          className={clsx(
            'glass rounded-2xl p-6 card-hover glow-border',
            isEven ? 'md:mr-auto' : 'md:ml-auto',
            'max-w-lg'
          )}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{company}</h3>

          <div
            className={clsx(
              'flex items-center gap-2 text-dark-400 text-sm mb-4',
              isEven ? 'md:justify-end' : 'md:justify-start'
            )}
          >
            <MapPin size={14} className="text-primary-500" />
            <span>{location}</span>
          </div>

          <div className="space-y-3">
            {roles.map((role, roleIndex) => (
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.4 + roleIndex * 0.1 }}
                className={clsx(
                  'border-primary-500/30',
                  isEven ? 'md:border-r-2 md:border-l-0 md:pr-3 md:pl-0 border-l-2 pl-3' : 'border-l-2 pl-3'
                )}
              >
                <div className="font-medium text-primary-400">{role.title}</div>
                <div className={clsx(
                  'flex items-center gap-2 text-dark-400 text-sm',
                  isEven ? 'md:justify-end' : 'md:justify-start'
                )}>
                  <Calendar size={12} />
                  <span>{role.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {departments && departments.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className={clsx(
                'flex flex-wrap gap-2 mt-4 pt-4 border-t border-dark-700/50',
                isEven ? 'md:justify-end' : 'md:justify-start'
              )}
            >
              {departments.map((dept, deptIndex) => (
                <span
                  key={deptIndex}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-dark-800/50 rounded-full text-xs text-dark-300"
                >
                  <Briefcase size={10} className="text-accent-500" />
                  {dept}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

interface EducationCardProps {
  school: string
  location: string
  degree: string
  period: string
  details?: string[]
  index: number
}

export function EducationCard({
  school,
  location,
  degree,
  period,
  details,
  index,
}: EducationCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-8 card-hover glow-border group"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-gradient-static transition-all duration-500">
            {school}
          </h3>
          <div className="flex items-center gap-2 text-dark-400 text-sm mt-1">
            <MapPin size={14} className="text-primary-500" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-accent-500/20 rounded-full text-accent-400 text-sm whitespace-nowrap">
          <Calendar size={12} />
          <span>{period}</span>
        </div>
      </div>

      <div className="font-medium text-primary-400 text-lg mb-3">{degree}</div>

      {details && details.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
          {details.map((detail, detailIndex) => (
            <span
              key={detailIndex}
              className="px-3 py-1 bg-dark-800/50 rounded-full text-sm text-dark-300 hover:bg-primary-500/10 hover:text-primary-400 transition-colors duration-300"
            >
              {detail}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
