type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Education = {
  degree: string
  university: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Chef Claude',
    description:
      'AI recipe generator that turns ingredients into bespoke step-by-step recipes.',
    link: 'https://chef-claude-eight.vercel.app/',
    video:
      'https://res.cloudinary.com/dkksgwa2t/video/upload/v1757412757/chef-claude_y78ata.mp4',
    id: 'project1',
  },
  {
    name: 'Tenzies',
    description:
      'A fast dice game where players roll dice until all ten show the same face.',
    link: 'https://tenzies-game-nine-mu.vercel.app/',
    video:
      'https://res.cloudinary.com/dkksgwa2t/video/upload/v1757412756/tenzies_ur5pgc.mp4',
    id: 'project2',
  },
  {
    name: 'Assembly: Endgame',
    description:
      'A Hangman-style game where players attempt to guess a secret word.',
    link: 'https://assembly-endgame-hangman-nine.vercel.app/',
    video:
      'https://res.cloudinary.com/dkksgwa2t/video/upload/v1757412755/ae_sgnhtl.mp4',
    id: 'project3',
  },
  {
    name: 'Travel Journal',
    description:
      'A modern web app for documenting and sharing travel experiences.',
    link: 'https://travel-journal-nine-xi.vercel.app/',
    video:
      'https://res.cloudinary.com/dkksgwa2t/video/upload/v1757412759/tj_jd0zqz.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Brokit',
    title: 'Software Developer (Intern)',
    start: 'Jul 2024',
    end: 'Dec 2024',
    link: 'https://www.brokit.co.uk',
    id: 'work1',
  },
  {
    company: 'Knibbs',
    title: 'Web Design Assistant',
    start: 'Apr 2017',
    end: 'May 2017',
    link: 'https://knibbs.co.uk',
    id: 'work2',
  },
]

export const EDUCATION: Education[] = [
  {
    degree: 'MSc Computer Science - Distinction',
    university: 'University of Bath',
    start: '2021',
    end: '2022',
    link: 'https://www.bath.ac.uk/',
    id: 'edu1',
  },
  {
    degree: 'BEng Engineering Mathematics - 2:1',
    university: 'University of Bristol',
    start: '2017',
    end: '2020',
    link: 'https://www.bristol.ac.uk/',
    id: 'edu2',
  },
]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
//   {
//     title: 'Why I left my job to start my own company',
//     description:
//       'A deep dive into my decision to leave my job and start my own company',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-2',
//   },
//   {
//     title: 'What I learned from my first year of freelancing',
//     description:
//       'A look back at my first year of freelancing and what I learned',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-3',
//   },
//   {
//     title: 'How to Export Metadata from MDX for Next.js SEO',
//     description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
//     link: '/blog/example-mdx-metadata',
//     uid: 'blog-4',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/henryprosser',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ProsserHenry',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/henry-prosser-2b9aa512a/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/henryprosser_/',
  },
]

export const EMAIL = 'henryprosser@icloud.com'
