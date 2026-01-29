'use client'
import React from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const NAV_ITEMS = [
  { label: 'Design', id: 'design' },
  { label: 'Work', id: 'work' },
  { label: 'Technologies', id: 'technologies' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Connect', id: 'connect' },
]

export function Header() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <motion.header variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
      className="top-4 z-50 mb-12 hidden w-full justify-center py-4 md:flex">
    <motion.nav
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex gap-[3px]"
      >
        <AnimatedBackground
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              data-id={item.label}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer inline-flex px-3 py-1.5 text-sm font-normal text-zinc-500 transition-colors duration-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </button>
          ))}
        </AnimatedBackground>
      </motion.nav>
    </motion.header>
  )
}
