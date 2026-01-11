'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Heart, ArrowUp } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 md:py-24 bg-dark-900/50">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="mx-auto mb-8 p-4 glass rounded-full text-primary-400 hover:text-primary-300 hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>

          {/* Thank you message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Thanks for visiting
            </h3>
            <p className="text-dark-400">
              Let&apos;s connect.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/dpletscher/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/Letsch22', label: 'GitHub' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-xl text-dark-400 hover:text-primary-400 hover:shadow-glow-sm transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8 border-t border-dark-800/50"
          >
            <p className="text-dark-500 text-sm flex items-center justify-center gap-1">
              Made with <Heart size={14} className="text-red-500 animate-pulse" /> by Dan Letscher
            </p>
            <p className="text-dark-600 text-xs mt-2">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
