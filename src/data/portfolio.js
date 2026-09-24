// All copy, links, and content for the site live here. Nothing in the
// components below hardcodes text — edit this file to update the site.

export const profile = {
  name: 'Muhammad Haseeb',
  role: 'Digital Architect',
  tagline: 'Digital Growth & IT Specialist',
  location: 'Lahore, Punjab, Pakistan',
  email: 'contact.haseebashraf@gmail.com',
  phone: '+92 302 9504131',
  resumeUrl:
    'https://drive.google.com/drive/folders/1w14jxZJGNv7WUwayNSSRyhOyDdBa6f55?usp=sharing',
  heroImage: '/images/hero.png',
  portraitImage: '/images/profile2.jpg',
  interests: [
    'Python & automation',
    'machine learning fundamentals',
    'Linux systems',
    'AI prompt engineering',
    'frontend development',
  ],
  bio: [
    'I am a passionate IT professional driven by problem-solving and digital growth.',
    'I build modern web applications and manage technical and online operations.',
    'Focused on delivering clean, impactful results and continuously learning.',
  ],
  coreSkills: [
    { label: 'Development', detail: 'Python · HTML, CSS, JavaScript' },
    { label: 'Digital Growth', detail: 'YouTube Growth & Management · B2B Lead Generation' },
    { label: 'Operations', detail: 'Technical Virtual Assistance & Workflow Optimization' },
  ],
};

export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'fa-linkedin',
    url: 'https://www.linkedin.com/in/mhaseeb-ashraf/',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'fa-github',
    url: 'https://github.com/muhammadhaseeb-va',
  },
  { id: 'twitter', label: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/' },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: 'fa-telegram-plane',
    url: 'https://t.me/haseebcoder',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: 'fa-facebook-f',
    url: 'https://web.facebook.com/muhammadhaseebva',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'fa-whatsapp',
    url: 'https://wa.me/923029504131',
  },
];

export const skills = [
  { id: 'python', label: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
  { id: 'linux', label: 'Linux Environment', icon: 'fa-brands fa-linux', color: '#FCC624' },
  { id: 'html5', label: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
  { id: 'css3', label: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
  { id: 'javascript', label: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
  { id: 'workspace', label: 'Google Workspace', icon: 'fa-brands fa-google', color: '#4285F4' },
  {
    id: 'seo',
    label: 'SEO Fundamentals',
    icon: 'fa-solid fa-magnifying-glass-chart',
    color: '#20B2AA',
  },
  { id: 'ai-ml', label: 'AI & ML Basics', icon: 'fa-solid fa-brain', color: '#FF69B4' },
  { id: 'b2b', label: 'B2B Lead Generation', icon: 'fa-solid fa-users-gear', color: '#008080' },
  { id: 'youtube', label: 'YouTube Management', icon: 'fa-brands fa-youtube', color: '#FF0000' },
  { id: 'ai-trainer', label: 'AI Trainer', icon: 'fa-solid fa-robot', color: '#00E5FF' },
  { id: 'design', label: 'Graphic Design (Canva)', icon: 'fa-solid fa-palette', color: '#00C4CC' },
];

export const education = [
  {
    id: 'edu-ics',
    title: 'Intermediate in Computer Science (ICS)',
    place: 'Govt. Graduate College · BISE',
    period: '2026 – Present · 1st Year',
    image: '/images/educat/college.jpg',
  },
  {
    id: 'edu-matric',
    title: 'Matriculation in Science',
    place: 'Evergreen BISE Registered High School',
    period: '2024 – 2026 · Completed',
    image: '/images/educat/school.jpg',
  },
];

export const experience = [
  {
    id: 'exp-ai-trainer',
    role: 'AI Trainer & Prompt Engineer',
    org: 'Self Training & AI R&D',
    period: '2025 – Present',
    description:
      'Active model training, ethical AI instruction, custom system prompt design, and fine-tuning AI workflows for real-world tasks.',
  },
  {
    id: 'exp-python',
    role: 'Python Developer & Scripting Specialist',
    org: 'Self Employed / Freelance',
    period: '2025 – Present',
    description:
      'Developing automated scripts, machine learning foundational models, and executing client/academic DigiSkills projects.',
  },
  {
    id: 'exp-youtube',
    role: 'YouTube Channel Manager & Strategist',
    org: 'YouTube & Content Strategy',
    period: '2025 – Present',
    description:
      'Managing channel growth, target audience analytics, SEO optimization, and visual branding using Canva.',
  },
  {
    id: 'exp-linux',
    role: 'Linux Systems & Shell Operator',
    org: 'Cyber Security & Systems',
    period: '2025 – Present',
    description:
      'Hands-on command line operations, Linux Mint administration, and offline security analysis using Kali Linux tools.',
  },
  {
    id: 'exp-gaotech',
    role: 'B2B Specialist · Internship',
    org: 'Gao Tech',
    period: 'Recent',
    description:
      'B2B client communication, outreach execution, and digital service workflow management.',
  },
  {
    id: 'exp-workspace',
    role: 'Google Workspace Specialist · Digital Bootcamp',
    org: 'PEF & Google for Education',
    period: 'Jan 2026',
    description:
      'Completed intensive digital bootcamp on Google Workspace productivity tools and cloud collaboration.',
  },
  {
    id: 'exp-frontend',
    role: 'Frontend Developer & Graphic Designer',
    org: 'Portfolio & UI Projects',
    period: 'Ongoing',
    description:
      'Building responsive web layouts with HTML5/CSS3 and crafting digital brand designs on Canva.',
  },
];

// The 3D journey spine and the DOM journey list walk this exact array,
// oldest first, so the "you are here" node always matches the visible card.
export const milestones = [
  { ...education[1], type: 'education' },
  { ...experience[0], type: 'experience' },
  { ...experience[1], type: 'experience' },
  { ...experience[3], type: 'experience' },
  { ...experience[2], type: 'experience' },
  { ...experience[4], type: 'experience' },
  { ...experience[5], type: 'experience' },
  { ...education[0], type: 'education' },
  { ...experience[6], type: 'experience' },
];

export const certificates = [
  {
    id: 'cert-hubspot',
    title: 'Inbound Sales Certified',
    issuer: 'HubSpot Academy',
    description:
      'Inbound sales methodology, identifying, connecting, and advising potential buyers.',
    image: '/images/certificates/hubspot-inbound-sales.png',
    url: 'https://drive.google.com/file/d/1aDtBl_pnmnBSCl84y1aVut0WoATzs2QH/view?usp=sharing',
  },
  {
    id: 'cert-bootcamp',
    title: 'Digital Bootcamp',
    issuer: 'Punjab Education Foundation & Google for Education',
    description: 'Google Workspace & Digital Tools Certification.',
    image: '/images/certificates/google-bootcamp.png',
    url: 'https://drive.google.com/file/d/1pX5sLjbjfwgc5IS0nSRhrSYOFmQ2OuRv/view?usp=sharing',
  },
  {
    id: 'cert-gemini',
    title: 'Gemini Certified Educator',
    issuer: 'Google',
    description: 'Proficiency in leveraging Gemini AI tools for education and workflow optimization.',
    image: '/images/certificates/gemini-educator.png',
    url: 'https://drive.google.com/file/d/1OUrnRR5KoN_FtmgwfpFyLxLmrpLOUE_1/view?usp=sharing',
  },
  {
    id: 'cert-educator1',
    title: 'Google Certified Educator (Level 1)',
    issuer: 'Google',
    description: 'Integrating Google technology and tools into educational environments.',
    image: '/images/certificates/google-educator.png',
    url: 'https://drive.google.com/file/d/17-SC-nHuuJTS6DApOlfrg443o7ncTOI4/view?usp=sharing',
  },
  {
    id: 'cert-freelancing',
    title: 'Freelancing Certification',
    issuer: 'DigiSkills',
    description: 'Client acquisition, project management, and execution.',
    image: '/images/certificates/digiskills-freelancing.png',
    url: 'https://drive.google.com/file/d/1DxbTX9sqQAgmmIAuOJVK-Tq0bKdQUnUP/view?usp=sharing',
  },
  {
    id: 'cert-seo',
    title: 'SEO Certification',
    issuer: 'DigiSkills',
    description: 'Keyword research, on-page, and off-page optimization.',
    image: '/images/certificates/digiskills-seo.png',
    url: 'https://drive.google.com/file/d/12-LwCJJxvuK36uvoDx3vnjIdtiBrbsN5/view?usp=sharing',
  },
  {
    id: 'cert-hp-ai',
    title: 'AI for Beginners',
    issuer: 'HP Foundation (HP LIFE)',
    description: 'Foundational artificial intelligence concepts and applications.',
    image: '/images/certificates/hp-ai.png',
    url: 'https://drive.google.com/file/d/1HVxaBGDa6VNUHBPICQxHU0_x716kYdFv/view?usp=sharing',
  },
  {
    id: 'cert-ai-ethics',
    title: 'Ethics in Generative AI',
    issuer: 'LinkedIn Learning',
    description: 'Ethical frameworks, responsible AI usage, and data governance.',
    image: '/images/certificates/linkedin-ai-ethics.png',
    url: 'https://drive.google.com/file/d/1R0pmy20YRKT7tPsBLK6jVy9Kamny4hh-/view?usp=sharing',
  },
];

export const learningStack = [
  {
    id: 'learn-python',
    title: 'Python & Machine Learning',
    icon: 'fa-brands fa-python',
    color: '#3776AB',
    description:
      'Building functional automation scripts, practicing core algorithms, data structures, and machine learning fundamentals.',
  },
  {
    id: 'learn-linux',
    title: 'Kali Linux & Shell CLI',
    icon: 'fa-brands fa-linux',
    color: '#FCC624',
    description:
      'Mastering Linux Mint system navigation, command-line operations, terminal tools, and offline ethical security testing.',
  },
  {
    id: 'learn-genai',
    title: 'Generative AI & Fine-Tuning',
    icon: 'fa-solid fa-robot',
    color: '#10a37f',
    description:
      'System prompt design, AI instruction tuning, LLM workflow automation, and custom model performance optimization.',
  },
  {
    id: 'learn-frontend',
    title: 'Frontend & Graphic Design',
    icon: 'fa-solid fa-code',
    color: '#E34F26',
    description:
      'Developing clean HTML5/CSS3 layouts, responsive UI components, and crafting content assets using Canva.',
  },
];

export const contact = {
  email: 'contact.haseebashraf@gmail.com',
  phone: '+92 302 9504131',
  location: 'Lahore, Punjab Pakistan',
  image: '/images/contact1.png',
};

export const nav = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

// Camera stage order for the 3D scene — must stay in sync with `nav` above.
export const SECTION_IDS = nav.map((item) => item.id);
