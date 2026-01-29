'use client'
import { motion } from 'motion/react'
import { XIcon, ArrowUpRight } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WEBSITE_DESIGN,
  WORK_EXPERIENCE,
  EDUCATION,
  // BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function ProjectCard({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 ${className}`}>
      <img
        src={src}
        alt="Project Preview"
        className="h-full w-full object-cover object-top"
      />
    </div>
  )
}

function MagneticTechnology({
  icon,
  name,
}: {
  icon: React.ReactNode
  name: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.1}>
      <div className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
        {icon}
        <span>{name}</span>
      </div>
    </Magnetic>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Focused on building functional and creative projects. Passionate
            about continuous learning and thoughtful design.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="design"
        className="scroll-mt-24"
      >
        <h3 className="mb-5 text-lg font-medium">Web Design</h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-15">
          {WEBSITE_DESIGN.map((project) => (
            <div key={project.name} className="space-y-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <ProjectCard
                  src={project.image || ''}
                  className="aspect-video"
                />
              </a>
              <div className="flex items-center justify-between px-1">
                <a
                  className="group flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>



      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="work"
        className="scroll-mt-24"
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="technologies"
        className="scroll-mt-24"
      >
        <h3 className="mb-5 text-lg font-medium">Technologies</h3>
        <div className="flex cursor-default flex-wrap items-center justify-start gap-y-3 space-x-3">
          <MagneticTechnology
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2320)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.63057 1.8H4.62843H2.04364L2.10545 2.4H4.56907C4.53296 2.9256 4.42372 4.03915 4.38363 4.54585L2.9999 4.93535V4.93652L2.99684 4.93799L1.61218 4.45078L1.51732 3.3H2.19603L2.24407 3.9189L2.99806 4.2H2.9999L3.75266 3.93003L3.83008 3H1.48703C1.4757 2.8797 1.33005 1.3176 1.30465 1.2H4.69116C4.67219 1.398 4.65291 1.6014 4.63057 1.8ZM0.300049 0L0.791486 5.44439L2.99684 6L5.208 5.43325L5.70005 0H0.300049Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2320">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="HTML"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2324)">
                  <path
                    d="M5.66142 0.00585938L5.16231 5.41188L2.99992 5.99412L0.837497 5.41188L0.338501 0.00585938H5.66142ZM4.6557 1.10509H2.99798H1.31089L1.39157 1.75792H2.99798H3.08821L2.99798 1.79548L1.45028 2.44008L1.50161 3.0782L2.99798 3.08305L3.79999 3.08559L3.74865 3.93644L2.99797 4.14779V4.14712L2.99181 4.14884L2.26684 3.96582L2.22285 3.43766H2.22045H1.54801H1.54564L1.63366 4.45727L2.99799 4.86074V4.86001L3.00045 4.86074L4.35747 4.46462L4.5335 2.44008H2.99799H2.9942L2.99799 2.43844L4.58975 1.75792L4.6557 1.10509Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2324">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="CSS"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2328)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0118173 0.00585938C0.0051376 0.00683203 0.00562979 0.0148828 0.00611026 0.0229453C0.00611026 2.01124 0.00611026 3.99923 0.00611026 5.98748C1.99084 6.00079 3.99995 5.98938 5.99415 5.99318C5.99415 3.99737 5.99415 2.00166 5.99415 0.00585938C4.00011 0.00585938 2.00587 0.00585938 0.0118173 0.00585938ZM3.04563 5.29883C2.90709 5.43851 2.68846 5.52076 2.4195 5.52076C1.97838 5.52076 1.73345 5.30584 1.57711 5.00852C1.72761 4.91243 1.8814 4.81959 2.03818 4.72968C2.10211 4.90853 2.31809 5.1096 2.56181 4.98581C2.71629 4.90731 2.69846 4.66929 2.69846 4.41096C2.69846 3.87456 2.69846 3.25575 2.69846 2.77184C2.69797 2.76377 2.69749 2.75572 2.70411 2.75475C2.88817 2.75475 3.07223 2.75475 3.25625 2.75475C3.25625 3.18586 3.25625 3.67352 3.25625 4.13204C3.25625 4.63124 3.29192 5.05064 3.04563 5.29883ZM5.51597 4.80372C5.48464 5.27111 5.10297 5.5193 4.5882 5.52076C4.08357 5.52222 3.76057 5.29795 3.56359 4.95162C3.70522 4.85415 3.86568 4.77564 4.0133 4.68417C4.13143 4.86887 4.336 5.0464 4.63942 5.01994C4.82846 5.00346 5.04789 4.84937 4.92401 4.61585C4.86393 4.50265 4.71875 4.44514 4.5882 4.38822C4.17392 4.20747 3.68787 4.04168 3.73436 3.39222C3.74991 3.17525 3.84981 3.02278 3.97915 2.91414C4.1117 2.80281 4.28923 2.7282 4.52559 2.72065C4.95483 2.7069 5.19031 2.89784 5.35093 3.1646C5.21424 3.26879 5.06365 3.35923 4.91263 3.44914C4.86307 3.29686 4.62384 3.14847 4.42312 3.23857C4.33184 3.2795 4.24982 3.39983 4.29791 3.54588C4.34081 3.67614 4.51575 3.74743 4.6565 3.80773C5.0825 3.99007 5.55857 4.16828 5.51597 4.80372Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2328">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="JavaScript"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2332)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.8232 5.5374C3.6786 5.5374 3.5616 5.41982 3.5616 5.27446C3.5616 5.12911 3.6786 5.01182 3.8232 5.01182C3.9678 5.01182 4.0848 5.12911 4.0848 5.27446C4.0848 5.41982 3.9678 5.5374 3.8232 5.5374ZM3.0216 6C4.545 6 4.4499 5.33599 4.4499 5.33599L4.4481 4.6481H2.9946V4.44155H5.0253C5.0253 4.44155 6 4.55284 6 3.00791C6 1.46298 5.1495 1.51743 5.1495 1.51743H4.6416V2.23462C4.6416 2.23462 4.6689 3.0895 3.8046 3.0895H2.3628C2.3628 3.0895 1.5528 3.07665 1.5528 3.87671V5.19932C1.5528 5.19932 1.4298 6 3.0216 6ZM2.1771 0.462598C2.3217 0.462598 2.4384 0.580181 2.4384 0.725537C2.4384 0.870893 2.3217 0.988184 2.1771 0.988184C2.0325 0.988184 1.9155 0.870893 1.9155 0.725537C1.9155 0.580181 2.0325 0.462598 2.1771 0.462598ZM2.9784 0C1.4553 0 1.5504 0.664014 1.5504 0.664014L1.5522 1.3519H3.0057V1.55845H0.974698C0.974698 1.55845 0 1.44716 0 2.99209C0 4.53702 0.8508 4.48257 0.8508 4.48257H1.3584V3.76538C1.3584 3.76538 1.3311 2.9105 2.1957 2.9105H3.6372C3.6372 2.9105 4.4472 2.92335 4.4472 2.12329V0.800684C4.4472 0.800684 4.5702 0 2.9784 0Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2332">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="Python"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2336)">
                  <path
                    d="M2.27242 2.44182C2.217 2.31929 2.19216 2.17637 2.2345 2.04654C2.27683 1.9138 2.37164 1.80732 2.46646 1.70812C2.73043 1.44409 3.05574 1.2501 3.31391 0.981727C3.45685 0.834387 3.57498 0.657891 3.61581 0.455121C3.64937 0.306352 3.63334 0.153199 3.60272 0.00585938C3.73983 0.161941 3.78505 0.385113 3.74566 0.586418C3.70337 0.812496 3.57789 1.01232 3.43059 1.18444C3.31245 1.32304 3.17677 1.44555 3.0353 1.55936C2.87048 1.69209 2.70858 1.83503 2.60503 2.02174C2.51747 2.17342 2.49705 2.36013 2.55687 2.52497C2.65462 2.80793 2.88214 3.01799 3.00614 3.28491C2.869 3.16383 2.73483 3.03839 2.60935 2.90568C2.47812 2.76564 2.35411 2.61688 2.27242 2.44182ZM3.01633 2.22009C2.99154 2.45203 3.11257 2.67082 3.25702 2.84296C3.327 2.92025 3.38682 3.01507 3.38971 3.12302C3.39265 3.26737 3.31101 3.40163 3.20591 3.49639C3.23075 3.49351 3.24824 3.47161 3.26867 3.45995C3.4262 3.3593 3.57787 3.23239 3.65518 3.05885C3.70623 2.94069 3.69457 2.80064 3.6275 2.69122C3.5487 2.56287 3.44516 2.44909 3.38391 2.30907C3.35031 2.23031 3.33865 2.13843 3.36638 2.05528C3.40287 1.94298 3.48162 1.85107 3.56478 1.77084C3.79376 1.55353 4.0709 1.39886 4.33639 1.22968C4.00089 1.32594 3.66979 1.45869 3.38682 1.6673C3.20739 1.80149 3.04114 1.98818 3.01633 2.22009ZM4.61065 3.31702C4.76965 3.32578 4.92568 3.44245 4.95488 3.60292C4.98261 3.74149 4.91553 3.87859 4.82943 3.9836C4.68793 4.1528 4.49683 4.27389 4.30435 4.37746C4.28534 4.38907 4.26931 4.40367 4.25472 4.41974C4.50854 4.35554 4.7623 4.25932 4.968 4.09447C5.08173 3.99966 5.18239 3.87417 5.20429 3.72394C5.22471 3.59414 5.17077 3.45994 5.07448 3.37389C4.95776 3.26736 4.79298 3.22801 4.63833 3.24845C4.54935 3.26011 4.45164 3.27907 4.39039 3.35346C4.46335 3.33892 4.53476 3.30971 4.61065 3.31702ZM1.44393 3.73414C1.63498 3.7852 1.83191 3.7998 2.02737 3.81294C2.2024 3.8246 2.37747 3.82754 2.55398 3.82607C3.00905 3.81881 3.46705 3.78814 3.91339 3.68897C3.95567 3.67877 4.00237 3.67147 4.04034 3.64522C4.11471 3.59706 4.19635 3.55913 4.27661 3.5212C3.91339 3.57955 3.54872 3.62919 3.18116 3.65251C2.80921 3.67584 2.43432 3.69043 2.06093 3.66565C1.95446 3.65545 1.84504 3.64958 1.74586 3.60872C1.7225 3.59852 1.6904 3.57814 1.70206 3.54746C1.72396 3.50808 1.76772 3.48914 1.80564 3.46871C1.96612 3.39286 2.14114 3.35058 2.31181 3.30098C2.01859 3.29658 1.72686 3.37096 1.45852 3.48621C1.3987 3.5154 1.33161 3.53872 1.28349 3.58833C1.26448 3.60871 1.26448 3.64378 1.28638 3.66124C1.33015 3.70063 1.38846 3.71813 1.44393 3.73414ZM3.80695 4.13531C3.55166 4.18054 3.29491 4.22288 3.03672 4.23596C2.75375 4.25493 2.47077 4.23886 2.19073 4.2097C2.13678 4.2024 2.08279 4.19367 2.03467 4.16889C2.00987 4.15428 1.98509 4.13096 1.98655 4.10029C1.98945 4.05217 2.03027 4.01864 2.05947 3.98361C1.96906 4.01571 1.8786 4.04923 1.80276 4.1091C1.77062 4.13389 1.73856 4.17325 1.74729 4.217C1.76048 4.26805 1.81006 4.29868 1.85382 4.322C1.96172 4.37747 2.0828 4.40223 2.20098 4.42412C2.49994 4.47229 2.80482 4.47375 3.10529 4.45328C3.42334 4.42849 3.73983 4.376 4.0476 4.28555C3.96009 4.2462 3.87693 4.20093 3.80695 4.13531ZM2.20387 4.64005C2.12219 4.66337 2.03903 4.69111 1.97195 4.74502C1.93834 4.77128 1.91213 4.81655 1.9282 4.85884C1.94862 4.91279 1.99968 4.94494 2.04776 4.97257C2.17325 5.04117 2.31471 5.07322 2.45328 5.09805C2.76693 5.14761 3.08925 5.14034 3.40142 5.08493C3.58664 5.0499 3.77191 5.00031 3.94401 4.92304C3.8317 4.87635 3.72232 4.82381 3.61731 4.76257C3.43498 4.79466 3.25115 4.82823 3.06445 4.83989C2.81798 4.85885 2.56852 4.83843 2.322 4.8078C2.26364 4.79467 2.19073 4.78884 2.15134 4.73777C2.13096 4.69543 2.17762 4.6648 2.20387 4.64005ZM4.1993 5.57791C4.40349 5.53568 4.60919 5.48746 4.79588 5.39269C4.85419 5.35909 4.92568 5.32262 4.94468 5.25265C4.95488 5.18556 4.88486 5.15053 4.83527 5.1228C4.86589 5.15788 4.88631 5.2089 4.85566 5.24972C4.8046 5.31831 4.71713 5.34454 4.6398 5.3708C4.39769 5.43935 4.14677 5.46708 3.89736 5.4948C3.23659 5.55459 2.57143 5.5692 1.9107 5.51377C1.68898 5.4904 1.46284 5.46561 1.25136 5.38686C1.21784 5.37226 1.16678 5.35766 1.16678 5.31243C1.17987 5.27312 1.21784 5.25117 1.25136 5.23221C1.40305 5.15493 1.57226 5.1126 1.74146 5.1024C1.69191 5.07321 1.63355 5.07032 1.57667 5.07178C1.43515 5.07615 1.29659 5.1126 1.16242 5.15788C1.04718 5.20011 0.929031 5.24682 0.837109 5.33145C0.800652 5.3635 0.767137 5.42475 0.805012 5.46854C0.863371 5.53127 0.953828 5.54729 1.034 5.56625C1.48327 5.64359 1.93834 5.68729 2.3935 5.70335C2.99738 5.72091 3.60562 5.69463 4.1993 5.57791ZM4.79734 5.65671C4.5231 5.74423 4.23869 5.79234 3.95568 5.83174C3.46705 5.893 2.97401 5.91196 2.48245 5.8974C2.18344 5.88574 1.88444 5.86532 1.58976 5.81568C1.65831 5.86236 1.74293 5.87693 1.82172 5.89883C2.15286 5.96886 2.49268 5.98199 2.82965 5.99218C3.32406 6.00095 3.81856 5.98199 4.30577 5.90467C4.53626 5.86389 4.76818 5.81426 4.97526 5.7063C5.08325 5.64942 5.19266 5.56186 5.21154 5.43499C5.10218 5.55165 4.94468 5.60565 4.79734 5.65671Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2336">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="Java"
          />
          <MagneticTechnology
            icon={
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M3.5 2.875C4.88071 2.875 6 2.45527 6 1.9375C6 1.41973 4.88071 1 3.5 1C2.11929 1 1 1.41973 1 1.9375C1 2.45527 2.11929 2.875 3.5 2.875Z"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
                <path
                  d="M1 1.9375V6.04107C1.01155 6.167 1.08763 6.29169 1.2239 6.40804C1.36017 6.52438 1.55396 6.63009 1.7942 6.71914C2.03444 6.80818 2.31643 6.87882 2.62407 6.92701C2.93171 6.9752 3.25898 7 3.58718 7C3.91538 7 4.2381 6.9752 4.5369 6.92701C4.8357 6.87882 5.10473 6.80818 5.32864 6.71914C5.55255 6.63009 5.72694 6.52438 5.84187 6.40804C5.9568 6.29169 6.01 6.167 5.99845 6.04107V1.9375M1 3.30536C1.01155 3.43129 1.08763 3.55598 1.2239 3.67232C1.36017 3.78867 1.55396 3.89438 1.7942 3.98342C2.03444 4.07247 2.31643 4.1431 2.62407 4.19129C2.93171 4.23948 3.25898 4.26429 3.58718 4.26429C3.91538 4.26429 4.2381 4.23948 4.5369 4.19129C4.8357 4.1431 5.10473 4.07247 5.32864 3.98342C5.55255 3.89438 5.72694 3.78867 5.84187 3.67232C5.9568 3.55598 6.01 3.43129 5.99845 3.30536M1 4.67321C1.01155 4.79914 1.08763 4.92384 1.2239 5.04018C1.36017 5.15652 1.55396 5.26223 1.7942 5.35128C2.03444 5.44032 2.31643 5.51096 2.62407 5.55915C2.93171 5.60734 3.25898 5.63214 3.58718 5.63214C3.91538 5.63214 4.2381 5.60734 4.5369 5.55915C4.8357 5.51096 5.10473 5.44032 5.32864 5.35128C5.55255 5.26223 5.72694 5.15652 5.84187 5.04018C5.9568 4.92384 6.01 4.79914 5.99845 4.67321"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
              </svg>
            }
            name="SQL"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2351)">
                  <path
                    d="M2.68373 4.16457C2.78685 4.16926 2.89223 4.17263 2.99891 4.17263C3.10673 4.17263 3.21323 4.17038 3.31766 4.16457C3.21323 4.29957 3.1101 4.41901 3.00098 4.53282L3.00248 4.53132C2.89391 4.41882 2.78966 4.2992 2.69141 4.1747L2.68373 4.16457ZM1.61535 4.01457C1.81841 4.06613 2.0661 4.11001 2.31885 4.13701L2.34341 4.13907C2.4981 4.35151 2.65448 4.53845 2.82229 4.71432L2.82023 4.71207C2.57441 4.98638 2.24273 5.17913 1.86754 5.24832L1.85723 5.24982C1.85648 5.24982 1.85573 5.24982 1.85498 5.24982C1.80848 5.24982 1.7646 5.23838 1.72616 5.21813L1.72766 5.21888C1.57166 5.12982 1.50398 4.78913 1.55666 4.35132C1.56923 4.24351 1.58985 4.13007 1.61516 4.01438L1.61535 4.01457ZM4.38716 4.01213C4.40929 4.10101 4.4301 4.21426 4.44491 4.32938L4.4466 4.34551C4.50041 4.78313 4.43404 5.12345 4.27935 5.21438C4.24485 5.23351 4.2036 5.24476 4.15973 5.24476C4.15541 5.24476 4.1511 5.24457 4.14679 5.24438H4.14735C3.76241 5.17407 3.43091 4.98263 3.18566 4.7117L3.18435 4.7102C3.34916 4.53713 3.50441 4.35057 3.64673 4.15426L3.6576 4.13851C3.93435 4.10963 4.18241 4.06501 4.4241 4.00407L4.38716 4.01195V4.01213ZM1.83454 3.31238C1.88141 3.40426 1.93054 3.49576 1.98454 3.58763C2.03841 3.67901 2.09348 3.76826 2.14973 3.85538C1.98698 3.83157 1.82985 3.80157 1.67966 3.76501C1.72185 3.61745 1.77473 3.46463 1.83435 3.31201L1.83454 3.31238ZM4.16479 3.3077C4.22685 3.46163 4.27954 3.6152 4.32323 3.76407C4.17323 3.80082 4.01479 3.83195 3.85091 3.85538C3.90716 3.76745 3.96341 3.67688 4.0161 3.58407C4.06879 3.49276 4.1181 3.39938 4.16516 3.30751L4.16479 3.3077ZM1.4286 2.30476C1.51035 2.58188 1.5981 2.81363 1.70029 3.03713L1.68623 3.00301C1.59885 3.19145 1.51241 3.42188 1.44154 3.65907L1.43179 3.69751C1.29941 3.65682 1.19291 3.61688 1.08923 3.57207L1.11079 3.58032C0.705039 3.40763 0.442539 3.18057 0.442539 3.00057C0.442539 2.82057 0.705039 2.59238 1.11079 2.42045C1.20923 2.37826 1.31723 2.3402 1.4286 2.30476ZM4.56716 2.30382C4.6806 2.33888 4.78841 2.37807 4.88929 2.42045C5.29504 2.59388 5.55754 2.82057 5.55754 3.00057C5.55641 3.18057 5.29391 3.4082 4.88816 3.58051C4.78973 3.6227 4.68191 3.66057 4.57073 3.69601C4.48823 3.41795 4.40048 3.18638 4.29866 2.96251L4.31291 2.99776C4.39991 2.80951 4.48654 2.57907 4.55723 2.34188L4.56716 2.30326V2.30382ZM3.84941 2.14576C4.01235 2.16995 4.16929 2.19957 4.31948 2.23651C4.27729 2.38463 4.2246 2.53688 4.16479 2.68951C4.11791 2.5982 4.06879 2.50613 4.01479 2.41445C3.9621 2.32257 3.90585 2.23313 3.8496 2.14595L3.84941 2.14576ZM2.14841 2.14576C2.09216 2.23407 2.03591 2.32445 1.98341 2.41763C1.93073 2.50895 1.88141 2.60082 1.83454 2.6927C1.77248 2.53895 1.71979 2.38576 1.6761 2.23651C1.8261 2.20145 1.98416 2.17013 2.14823 2.14613L2.14841 2.14576ZM3.00004 2.08613C3.17348 2.08613 3.34616 2.09401 3.51604 2.10788C3.61116 2.24426 3.70354 2.38951 3.79316 2.54363C3.88029 2.69363 3.95979 2.84563 4.03166 2.99963C3.95948 3.1532 3.88035 3.30657 3.79429 3.45657C3.70523 3.61126 3.61316 3.75845 3.51773 3.89476C3.3471 3.90957 3.17423 3.91763 2.99985 3.91763C2.82641 3.91763 2.65373 3.90938 2.48385 3.89588C2.38879 3.75957 2.29598 3.6137 2.20673 3.46013C2.1196 3.31013 2.0401 3.15813 1.96823 3.00413C2.03929 2.8502 2.11954 2.69645 2.2056 2.54626C2.29466 2.39157 2.38673 2.24495 2.48216 2.10863C2.65279 2.09363 2.82566 2.08576 3.00004 2.08576V2.08613ZM2.99648 1.47095C3.10523 1.58345 3.20948 1.70288 3.30754 1.82738L3.31504 1.83732C3.21191 1.83263 3.10654 1.82945 2.99985 1.82945C2.89204 1.82945 2.78554 1.8317 2.6811 1.83732C2.78535 1.70232 2.88848 1.58288 2.99779 1.46907L2.99629 1.47057L2.99648 1.47095ZM1.85254 0.756196C2.23748 0.826696 2.56879 1.01813 2.81423 1.28888L2.81554 1.29038C2.65073 1.46363 2.49548 1.6502 2.35316 1.84688L2.34229 1.86263C2.06573 1.89132 1.81766 1.93557 1.57616 1.99651L1.61291 1.98863C1.58666 1.87388 1.56716 1.7627 1.55348 1.65601C1.49966 1.21838 1.56604 0.878071 1.72073 0.787508C1.75935 0.769321 1.80454 0.758071 1.85216 0.756571H1.85273L1.85254 0.756196ZM4.14191 0.751508V0.753008C4.14435 0.753008 4.14716 0.752821 4.15016 0.752821C4.19498 0.752821 4.23716 0.763883 4.27429 0.783383L4.27279 0.782633C4.42879 0.872071 4.49648 1.21257 4.44379 1.65057C4.43123 1.75838 4.4106 1.87201 4.38529 1.98788C4.18185 1.93576 3.93416 1.8917 3.68141 1.86488L3.65741 1.86282C3.50254 1.6502 3.34616 1.46326 3.17835 1.2872L3.1806 1.28945C3.42641 1.0157 3.75754 0.822946 4.13198 0.753383L4.14248 0.751696L4.14191 0.751508ZM4.14304 0.496133C3.68516 0.565696 3.28879 0.788071 2.99929 1.10888L2.99779 1.11057C2.70623 0.789946 2.30985 0.569071 1.86323 0.502133L1.85273 0.500821C1.85029 0.500821 1.84729 0.500821 1.84429 0.500821C1.75223 0.500821 1.66579 0.525008 1.59098 0.567383L1.5936 0.566071C1.27148 0.751883 1.19929 1.33088 1.3656 2.05745C0.652352 2.27776 0.188477 2.62988 0.188477 3.00095C0.188477 3.37351 0.654789 3.72657 1.3701 3.9452C1.2051 4.67457 1.27879 5.25451 1.60166 5.44013C1.67254 5.48082 1.75766 5.50463 1.84823 5.50463C1.85235 5.50463 1.85648 5.50463 1.86041 5.50445H1.85985C2.31773 5.43488 2.7141 5.21232 3.0036 4.89132L3.0051 4.88963C3.29666 5.21045 3.69304 5.43132 4.13966 5.49826L4.15016 5.49957C4.15298 5.49957 4.15654 5.49957 4.15991 5.49957C4.25141 5.49957 4.33748 5.47557 4.41191 5.43376L4.40929 5.43507C4.73123 5.24945 4.8036 4.67045 4.63729 3.9437C5.34791 3.72526 5.81179 3.37238 5.81179 3.00076C5.81179 2.6282 5.34548 2.27513 4.63016 2.05595C4.79516 1.32732 4.72148 0.746821 4.3986 0.561008C4.32698 0.519946 4.2411 0.495758 4.1496 0.495758C4.14716 0.495758 4.14473 0.495758 4.14229 0.495758H4.14266L4.14304 0.496133ZM3.5226 3.00095C3.5226 3.29026 3.28804 3.52482 2.99873 3.52482C2.70941 3.52482 2.47485 3.29026 2.47485 3.00095C2.47485 2.71163 2.70941 2.47707 2.99873 2.47707C3.14348 2.47707 3.27435 2.53576 3.36923 2.63045C3.4641 2.72532 3.5226 2.8562 3.5226 3.00095Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2351">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="React"
          />
          <MagneticTechnology
            icon={
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M0.4375 1.375L3.5 6.625L6.5625 1.375H5.35938L3.5 4.54688L1.64062 1.375H0.4375Z"
                  fill="#AAAAAA"
                />
                <path
                  d="M1.64062 1.375L3.5 4.54688L5.35938 1.375H4.26562L3.51428 2.69026L2.73438 1.375H1.64062Z"
                  fill="currentColor"
                />
              </svg>
            }
            name="Vue"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <g clipPath="url(#clip0_659_2366)">
                  <path
                    d="M3.96306 2.24525H2.81606V0H3.96306C4.58206 0 5.08556 0.5035 5.08556 1.1225C5.08556 1.7415 4.58206 2.24525 3.96306 2.24525ZM3.18381 1.8775H3.96306C4.37931 1.8775 4.71781 1.53875 4.71781 1.12275C4.71781 0.70675 4.37906 0.368 3.96306 0.368H3.18381V1.8775ZM3.18381 2.24525H2.03706C1.41806 2.24525 0.914557 1.74175 0.914557 1.12275C0.914557 0.50375 1.41806 0 2.03706 0H3.18406V2.24525H3.18381ZM2.03706 0.36775C1.62081 0.36775 1.28231 0.7065 1.28231 1.1225C1.28231 1.5385 1.62081 1.8775 2.03706 1.8775H2.81631V0.36775H2.03706ZM3.18381 4.1225H2.03706C1.41806 4.1225 0.914557 3.619 0.914557 3C0.914557 2.381 1.41806 1.8775 2.03706 1.8775H3.18406V4.1225H3.18381ZM2.03706 2.24525C1.62081 2.24525 1.28231 2.584 1.28231 3C1.28231 3.416 1.62106 3.75475 2.03706 3.75475H2.81631V2.24525H2.03706ZM2.04306 6C1.42081 6 0.914307 5.4965 0.914307 4.8775C0.914307 4.2585 1.41781 3.755 2.03681 3.755H3.18381V4.86525C3.18381 5.491 2.67206 6 2.04306 6ZM2.03706 4.1225C1.83697 4.12276 1.64515 4.20237 1.50366 4.34385C1.36217 4.48534 1.28257 4.67716 1.28231 4.87725C1.28231 5.2935 1.62356 5.632 2.04331 5.632C2.46956 5.632 2.81656 5.288 2.81656 4.865V4.1225H2.03706ZM3.96306 4.1225H3.93856C3.31956 4.1225 2.81606 3.619 2.81606 3C2.81606 2.381 3.31956 1.8775 3.93856 1.8775H3.96306C4.58206 1.8775 5.08556 2.381 5.08556 3C5.08556 3.619 4.58206 4.1225 3.96306 4.1225ZM3.93881 2.24525C3.52256 2.24525 3.18406 2.584 3.18406 3C3.18406 3.416 3.52281 3.75475 3.93881 3.75475H3.96331C4.37956 3.75475 4.71806 3.416 4.71806 3C4.71806 2.584 4.37931 2.24525 3.96331 2.24525H3.93881Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2366">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="Figma"
          />
          <MagneticTechnology
            icon={
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g clipPath="url(#clip0_659_2370)">
                  <path
                    d="M5.70529 2.74933L3.24998 0.2942C3.18435 0.228763 3.09379 0.188263 2.99366 0.188263C2.89354 0.188263 2.80298 0.228763 2.73735 0.2942L2.22866 0.803825L2.87535 1.45051C2.9166 1.43608 2.96404 1.42783 3.01354 1.42783C3.25148 1.42783 3.44423 1.62058 3.44423 1.85851C3.44423 1.90895 3.4356 1.95714 3.41966 2.00214L3.4206 1.99914L4.04348 2.62239C4.0851 2.60758 4.13329 2.59895 4.18335 2.59895C4.4211 2.59895 4.61385 2.7917 4.61385 3.02945C4.61385 3.2672 4.4211 3.45995 4.18335 3.45995C3.9456 3.45995 3.75285 3.2672 3.75285 3.02945C3.75285 2.97076 3.76466 2.91489 3.78585 2.86389L3.78473 2.8667L3.2016 2.28658V3.81545C3.34485 3.88764 3.44141 4.03351 3.44141 4.20189C3.44141 4.44001 3.24829 4.63314 3.01016 4.63314C2.77204 4.63314 2.57891 4.44001 2.57891 4.20189C2.57891 4.08301 2.62691 3.97558 2.70473 3.89758C2.74429 3.85801 2.79135 3.82595 2.84366 3.80345L2.84648 3.80233V2.25845C2.6886 2.19208 2.57985 2.03851 2.57985 1.85983C2.57985 1.79983 2.59204 1.74283 2.61416 1.69089L2.61304 1.6937L1.9776 1.05526L0.293852 2.73789C0.228602 2.8037 0.188477 2.89426 0.188477 2.99439C0.188477 3.09451 0.228789 3.18508 0.294039 3.25089L2.74954 5.70564C2.81498 5.77126 2.90554 5.81176 3.00566 5.81176C3.10579 5.81176 3.19616 5.77126 3.26179 5.70564L5.70566 3.26176C5.77129 3.19633 5.81198 3.10558 5.81198 3.00564C5.81198 2.9057 5.77129 2.81495 5.70566 2.74951L5.70529 2.74933Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_659_2370">
                    <rect width="6" height="6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            name="Git"
          />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="education"
        className="scroll-mt-24"
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((edu) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={edu.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {edu.degree}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {edu.university}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {edu.start} - {edu.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="projects"
        className="scroll-mt-24"
      >
        <h3 className="mb-5 text-lg font-medium">Side Projects</h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-15 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                {project.video && <ProjectVideo src={project.video} />}
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="connect"
        className="scroll-mt-24"
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
