'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, ChevronDown } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'

export function HeroSection() {
  const scrollToExperience = () => {
    const element = document.getElementById('experience')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-500/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent-500/5 rounded-full"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer staggerDelay={0.15}>
            {/* Greeting */}
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-dark-800/50 rounded-full border border-dark-700/50 backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm text-dark-300">Busy building...</span>
              </motion.div>
            </StaggerItem>

            {/* Main heading */}
            <StaggerItem>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="text-gradient">Dan</span>
                <br />
                <span className="text-white">Letscher</span>
              </h1>
            </StaggerItem>

            {/* Subtitle with typing effect */}
            <StaggerItem>
              <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-dark-300 mb-8">
                <span className="text-primary-400 font-semibold">Senior Product Manager</span>
                <span className="w-1.5 h-1.5 bg-dark-500 rounded-full" />
                <span className="text-accent-400">Xbox Game Pass</span>
              </div>
            </StaggerItem>

            {/* Description */}
            <StaggerItem>
              <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                A product manager who is passionate about{' '}
                <span className="text-primary-400 font-medium">gaming</span> and building{' '}
                <span className="text-accent-400 font-medium">exceptional experiences</span> that
                delight millions of players worldwide.
              </p>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <motion.a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToExperience()
                  }}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Experience</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dpletscher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </StaggerItem>

            {/* Social links */}
            <StaggerItem>
              <div className="flex items-center justify-center gap-4">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/dpletscher/', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/Letsch22', label: 'GitHub' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl text-dark-400 hover:text-primary-400 hover:shadow-glow-sm transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToExperience}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors"
          aria-label="Scroll to experience"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  )
}
