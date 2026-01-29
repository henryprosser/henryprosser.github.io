'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { motion } from 'motion/react'

const MotionLink = motion(Link)

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function Profile() {
  return (
    <header className="mb-8 flex items-center gap-4">
      <motion.div
        className="h-[64px] w-[64px] overflow-hidden rounded-full"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.07,
          transition: { type: 'tween', duration: 0.1 },
        }}
      >
        <img
          src="/profile-pic.png"
          alt="Henry Prosser"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div>
        <MotionLink
          href="/"
          className="font-medium text-black dark:text-white"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          initial="hidden"
          animate="visible"
        >
          Henry Prosser
        </MotionLink>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Web Developer
        </TextEffect>
      </div>
    </header>
  )
}
