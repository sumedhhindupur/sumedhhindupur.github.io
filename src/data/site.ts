// Everything about you that appears in the header and footer.

export const site = {
  name: 'Sumedh Hindupur',
  // Put your photo at public/photo.jpg and set this to '/photo.jpg'.
  photo: null as string | null,
  // Short description under your name. Plain HTML is allowed.
  intro: `PhD candidate in Applied Mathematics at Harvard, advised by
    <a href="https://crisp.seas.harvard.edu/">Demba Ba</a>. I study how neural
    representations support computation, in language models and in the brain,
    using representation geometry and causal interventions.`,
  email: 'sumedh.hindupur@gmail.com',
  links: [
    { label: 'Email', url: 'mailto:sumedh.hindupur@gmail.com' },
    { label: 'Scholar', url: 'https://scholar.google.com/citations?user=Hydyi-4AAAAJ' },
    { label: 'GitHub', url: 'https://github.com/Sai-Sumedh' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-sumedh-h-r/' },
    { label: 'CV', url: '/cv.pdf' },
  ],
};

// The affiliation row under the intro, oldest first.
export const affiliations = [
  { name: 'IIT Bombay', role: 'B.Tech + M.Tech, EE', years: '2018–23' },
  { name: 'Hokkaido University', role: 'Research intern (remote)', years: '2020–23' },
  { name: 'Harvard University', role: 'PhD, Applied Math', years: '2023–' },
  { name: 'NTT Research', role: 'Intern, Physics of AI', years: '2025' },
];
