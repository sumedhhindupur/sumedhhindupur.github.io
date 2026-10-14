// Research projects, grouped by theme. Order here = order on the page.
//
// media: put a file in public/media/ and set e.g. '/media/comparison.mp4' or '/media/spade.png'.
//        .mp4/.webm files loop silently; anything else is shown as an image.
//        Leave it null to show a placeholder. Keep every visual 4:3.
// links: any labels you like; projects without public links can use [].

type Project = {
  title: string;
  authors: string; // your name is bolded automatically
  venue: string;
  summary: string;
  media: string | null;
  links: { label: string; url: string }[];
};

export const me = 'Sai Sumedh R. Hindupur';

export const groups: { theme: string; blurb: string; projects: Project[] }[] = [
  {
    theme: 'Geometry and computation in language models',
    blurb: 'How do models actually use the geometry of their representations to compute?',
    projects: [
      {
        title: 'When Models Don’t Manipulate Manifolds: The Geometry of a Comparison Task',
        authors: 'Sai Sumedh R. Hindupur, Hadas Orgad, Thomas Fel, Demba Ba',
        venue: 'Under review, ICLR 2027',
        summary: 'Qwen2.5-7B represents numbers on curved manifolds, yet compares them using linear representations. We distil its computation into a concise algorithm that extends to longer sequences.',
        media: null,
        links: [],
      },
      {
        title: 'On the Dissociation of Order and Identity in Number Manifold Representations',
        authors: 'Sai Sumedh R. Hindupur, Thomas Fel, Demba Ba',
        venue: 'NeurReps Workshop, NeurIPS 2026',
        summary: 'Do number manifolds in language models encode a number’s order and its identity together, or separately?',
        media: null,
        links: [],
      },
      {
        title: 'From States to Dynamics: Detecting Rule Violations in OthelloGPT',
        authors: 'David Cao, Sai Sumedh R. Hindupur, Demba Ba',
        venue: 'InterpScience Workshop, NeurIPS 2026',
        summary: 'How does OthelloGPT encode the rules of the game, beyond the board state?',
        media: null,
        links: [],
      },
    ],
  },
  {
    theme: 'Assumptions built into interpretability tools',
    blurb: 'Every interpretability method assumes something about the structure it is looking for. What happens when that assumption is wrong?',
    projects: [
      {
        title: 'Projecting Assumptions: The Duality between Sparse Autoencoders and Concept Geometry',
        authors: 'Sai Sumedh R. Hindupur, Ekdeep Singh Lubana, Thomas Fel, Demba Ba',
        venue: 'NeurIPS 2025',
        summary: 'Each SAE implicitly assumes a geometry for concepts. We make these assumptions explicit and build SpaDE, an SAE that captures nonlinearly separable and heterogeneous concepts that other SAEs miss.',
        media: null,
        links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2503.01822' }],
      },
      {
        title: 'Priors in Time: Missing Inductive Biases for Language Model Interpretability',
        authors: 'Ekdeep Singh Lubana, Can Rager, Sai Sumedh R. Hindupur, et al.',
        venue: 'ICLR 2026',
        summary: 'Standard SAEs implicitly assume concepts are independent across time, but language model representations are not. We introduce the Temporal Feature Analyzer to capture this structure.',
        media: null,
        links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2511.01836' }],
      },
      {
        title: 'Sparse, Self-Organizing Ensembles of Local Kernels Detect Rare Statistical Anomalies',
        authors: 'Gaia Grosso, Sai Sumedh R. Hindupur, Thomas Fel, Samuel Bright-Thonney, Philip Harris, Demba Ba',
        venue: 'Under review, PNAS',
        summary: 'SparKer, a sparse ensemble of competing Gaussian kernels, detects statistical anomalies across particle physics, language and vision.',
        media: null,
        links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2511.03095' }],
      },
    ],
  },
  {
    theme: 'Neuroscience and earlier work',
    blurb: '',
    projects: [
      {
        title: 'Population Coding under the Scale Invariance of High-Dimensional Noise',
        authors: 'S. Amin Moosavi, Sai Sumedh R. Hindupur, Hideaki Shimazaki',
        venue: 'Science Advances 2026',
        summary: 'In recordings of ~20,000 neurons in mouse visual cortex, shared noise slows the growth of information with population size but does not cap it.',
        media: null,
        links: [
          { label: 'Paper', url: 'https://doi.org/10.1126/sciadv.adz9632' },
          { label: 'Press', url: 'https://www.kyoto-u.ac.jp/en/research-news/2026-09-28' },
        ],
      },
      {
        title: 'Online Parameter Estimation in Partially Observed Markov Decision Processes',
        authors: 'Sai Sumedh R. Hindupur, Vivek S. Borkar',
        venue: 'Allerton 2023',
        summary: 'An online algorithm, with convergence guarantees, for estimating model parameters from partial observations.',
        media: null,
        links: [{ label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/10313415' }],
      },
    ],
  },
];
