// Everything about you that appears in the header and footer.

export const site = {
  name: 'Sumedh Hindupur',
  // Put your photo at public/photo.jpg and set this to '/photo.jpg'.
  photo: '/photo.jpg' as string | null,
  // One line under your name, then your position. The position may contain HTML links.
  tagline: 'I read the minds of AI models and animals.',
  position: `PhD candidate in Applied Mathematics at Harvard, advised by
    <a href="https://crisp.seas.harvard.edu/">Demba Ba</a>.`,
  // Your email, split in two so spam bots scraping the page (or this repo) can't read it.
  // The page joins the parts only when someone clicks an email link.
  email: { user: 'sumedh.hindupur', domain: 'gmail.com' },
  links: [
    { label: 'Scholar', icon: 'scholar', url: 'https://scholar.google.com/citations?user=Hydyi-4AAAAJ' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/Sai-Sumedh' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/sai-sumedh-h-r/' },
    { label: 'X', icon: 'x', url: 'https://x.com/sumedh_hrs' },
    { label: 'Bluesky', icon: 'bluesky', url: 'https://bsky.app/profile/sumedh-hindupur.bsky.social' },
    { label: 'CV', icon: 'cv', url: '/cv.pdf' },
  ] as const,
};

// Rendered as "Outside research, I love A, B, C and D." with each item's icons inline.
// Add a `url` to any item to make it a link.
export const interests = [
  { text: 'long-distance running', icons: ['running'] },
  { text: 'playing tennis', icons: ['tennis'], url: 'https://harvardgraduatetennis.org/' },
  { text: 'reading books', icons: ['books'] },
  { text: 'playing the guitar', icons: ['guitar', 'music'] },
] as const;

// The affiliation row under the intro, newest first. The first one is highlighted as current.
export const affiliations = [
  { name: 'Harvard University', role: 'PhD, Applied Math', years: '2023–' },
  { name: 'NTT Research', role: 'Intern, Physics of AI', years: '2025' },
  { name: 'Hokkaido University', role: 'Research intern (remote)', years: '2020–23' },
  { name: 'IIT Bombay', role: 'B.Tech + M.Tech, EE', years: '2018–23' },
];

// The Leadership section after Research.
export const leadership = [
  {
    name: 'PRISM Reading Club',
    url: 'https://prism-interp-neuro.github.io/',
    role: 'Co-founder',
    years: '2025–',
    text: 'A weekly reading group at Harvard SEAS and the Kempner Institute on the intersection of neuroscience and ML interpretability, with paper presentations and panel discussions.',
  },
  {
    name: 'Harvard Graduate Tennis Club',
    url: 'https://harvardgraduatetennis.org/',
    role: 'Officer (2024–) · Co-President (2024–25)',
    years: '',
    text: '',
  },
];
