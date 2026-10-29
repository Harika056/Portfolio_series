/**
 * Central portfolio data — generated from Talla Harika's resume (Talla_Harika_Resume_SE.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */
import { asset } from '../lib/asset';

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Talla Harika',
  displayName: 'Talla Harika',
  firstName: 'HARIKA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A HARIKA ORIGINAL',
  role: 'Software Engineer',
  tagline: ['Java Backend', 'Distributed Systems', 'Performance'],
  intro:
    'An Integrated M.Tech Software Engineering graduate (CGPA 8.35) who likes making software fast and reliable — building and load-testing Java / Spring Boot services, then digging into why something is slow and fixing it.',
  location: 'Hyderabad',
  locationNote: 'Open to relocate',
  email: 'tallaharika27@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/harika-t-36951324b/',
    github: 'https://github.com/Harika056',
    leetcode: 'https://leetcode.com/u/Harika56/',
  },
  resumePdf: asset('/assets/Talla_Harika_Resume_SE.pdf'),
  resumeFileName: 'Talla_Harika_Resume.pdf',
  portrait: {
    src: asset('/assets/portrait-720.webp'),
    srcSet: `${asset('/assets/portrait-420.webp')} 420w, ${asset('/assets/portrait-720.webp')} 720w, ${asset('/assets/portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Talla Harika',
  },
  /** Not on the resume — your own list; edit freely. */
  interests: ['System Design', 'Cloud Computing (AWS)', 'Agentic AI', 'Machine Learning'],
};

export const education = [
  {
    school: 'Vellore Institute of Technology',
    place: 'Vellore',
    degree: 'Integrated M.Tech — Software Engineering',
    period: '2021 – Aug 2026',
    score: 'CGPA 8.35',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Piduguralla',
    degree: 'Class XII',
    period: '2021',
    score: '95%',
  },
  {
    school: 'Scholars High School',
    place: 'Piduguralla',
    degree: 'Class X',
    period: '2019',
    score: 'CGPA 10.0',
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'streamrate',
    title: 'StreamRate',
    year: '2026',
    genre: 'Backend • Distributed Systems • Performance',
    logline: 'A distributed API gateway with Redis-backed rate limiting, atomic quota enforcement, and real-time performance monitoring.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Cloud Gateway', 'Redis', 'Lua', 'JWT', 'Prometheus', 'Grafana', 'Docker', 'JMeter'],
    build: [
      'Built a Redis-backed token bucket rate limiter in atomic Lua scripts so per-API-key quotas stay consistent across 3 gateway instances.',
      'Handled about 1,200 requests/sec at p95 latency under 45 ms in JMeter tests on a 2-core container; over-quota requests get HTTP 429 with a Retry-After header.',
      'Added Micrometer, Prometheus and Grafana dashboards for throughput, rejection rate and p95/p99 latency per route, which is how slow paths were spotted and fixed.',
    ],
    features: [
      'Distributed token bucket rate limiting',
      'Atomic Lua scripts for consistent quota enforcement',
      'Per-API-key request quotas',
      'HTTP 429 responses with Retry-After headers',
      'JWT integration',
      'Prometheus and Grafana performance dashboards',
      'JMeter load testing',
    ],
    metrics: [
      { value: '~1,200', label: 'requests per second' },
      { value: '<45 ms', label: 'p95 latency in load tests' },
      { value: '3', label: 'gateway instances' },
      { value: 'p95/p99', label: 'latency monitoring' },
    ],
    github: 'https://github.com/Harika056/streamrate',
    palette: { from: '#071d2b', via: '#075985', to: '#05080d', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'banklite',
    title: 'BankLite',
    year: '2026',
    genre: 'Backend • Fintech • Transactional Systems',
    logline: 'A transactional banking service designed to protect fund transfers and speed up account-balance reads.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'PostgreSQL', 'Redis', 'JUnit 5', 'Mockito', 'Docker', 'JMeter'],
    build: [
      'Built fund transfers with @Transactional and optimistic locking; no double-spends across 500 concurrent transfer requests in JMeter tests.',
      'Cached account-balance reads in Redis with write-through invalidation, cutting average read latency from about 90 ms to 12 ms and database hits by about 70%.',
      'Wrote 40+ JUnit 5 and Mockito tests (about 85% line coverage), including insufficient-funds and concurrent-modification cases.',
    ],
    features: [
      'Transactional fund transfers',
      'Optimistic locking for concurrent updates',
      'Redis account-balance caching',
      'Write-through cache invalidation',
      'Insufficient-funds validation',
      'JUnit 5 and Mockito test suite',
      'Docker-based deployment',
    ],
    metrics: [
      { value: '500', label: 'concurrent transfers tested' },
      { value: '90 → 12 ms', label: 'average read latency' },
      { value: '~70%', label: 'fewer database hits' },
      { value: '40+', label: 'automated tests' },
      { value: '~85%', label: 'line coverage' },
    ],
    github: 'https://github.com/Harika056/Banklite',
    palette: { from: '#10271c', via: '#166534', to: '#050a07', accent: '#4ade80' },
    motif: 'shield',
  },
  {
    id: 'orderhub',
    title: 'OrderHub',
    year: '2026',
    genre: 'Backend • E-Commerce • Event-Driven Microservices',
    logline: 'An event-driven e-commerce backend with independently deployable services, service discovery and resilient order processing.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'Spring Cloud Gateway', 'Eureka', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Resilience4j', 'Docker Compose'],
    build: [
      'Split the system into 4 independently deployable services (Order, Inventory, Payment, Notification) behind Spring Cloud Gateway with Eureka discovery.',
      'Moved order processing to Kafka events, so order placement returns in about 120 ms instead of about 600 ms.',
      'Added circuit breakers and retry with exponential backoff, so orders kept flowing during simulated Inventory outages instead of failing in a cascade.',
    ],
    features: [
      'Four independently deployable microservices',
      'Kafka-based asynchronous order processing',
      'Eureka service discovery',
      'Spring Cloud Gateway as the single entry point',
      'Circuit breakers with Resilience4j',
      'Retry with exponential backoff',
      'PostgreSQL and Redis integration',
      'Docker Compose deployment',
    ],
    metrics: [
      { value: '4', label: 'independent services' },
      { value: '600 → 120 ms', label: 'order-placement response time' },
      { value: '~80%', label: 'faster order placement' },
    ],
    github: 'https://github.com/Harika056/orderhub',
    palette: { from: '#27120a', via: '#9a3412', to: '#090605', accent: '#fb923c' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'leetcode',
    title: '100+ Problems Solved',
    org: 'LeetCode',
    detail: 'Steady data-structures-and-algorithms practice on LeetCode.',
    laurel: 'Problem Solving',
    link: profile.links.leetcode,
    linkLabel: 'View profile',
  },
  {
    id: 'load-tested',
    title: '3 Load-Tested Services',
    org: 'Java • Spring Boot',
    detail: 'StreamRate, BankLite and OrderHub — each measured for latency, throughput and failure behavior with JMeter.',
    laurel: 'Performance',
  },
  {
    id: 'vit',
    title: 'CGPA 8.35',
    org: 'VIT Vellore',
    detail: 'Integrated M.Tech in Software Engineering, graduating August 2026.',
    laurel: 'Academics',
  },
  {
    id: 'class-xii',
    title: '95% in Class XII',
    org: 'Sri Chaitanya Junior College',
    detail: 'Senior secondary, Piduguralla — 2021.',
    laurel: 'Academics',
  },
  {
    id: 'class-x',
    title: 'CGPA 10.0 in Class X',
    org: 'Scholars High School',
    detail: 'Secondary school, Piduguralla — a perfect 10.0 in 2019.',
    laurel: 'Academics',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** Add a credential URL to any entry and its card becomes a link. */
export const certifications: Certification[] = [
  { issuer: 'Microsoft', name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', link: '' },
  { issuer: 'HackerRank', name: 'SQL (Intermediate)', link: '' },
  { issuer: 'Coursera', name: 'Java Programming: Arrays, Lists and Structured Data', link: '' },
  { issuer: 'Infosys Springboard', name: 'Exploratory Data Analysis', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java 17 is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'APIs & Backend',
    subtitle: 'Services that scale and stay up',
    skills: [
      { name: 'REST API Design', mono: 'Ap' },
      { name: 'Spring Boot 3', mono: 'Sb' },
      { name: 'Spring Security', mono: 'Ss' },
      { name: 'Spring Data JPA', mono: 'Jp' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Apache Kafka', mono: 'Kf' },
    ],
  },
  {
    id: 'performance',
    title: 'Performance & Caching',
    subtitle: 'Measure it, then make it fast',
    skills: [
      { name: 'Redis', mono: 'Rd' },
      { name: 'PostgreSQL', mono: 'Pg', note: 'Indexing & tuning' },
      { name: 'JMeter', mono: 'Jm' },
      { name: 'Prometheus', mono: 'Pr' },
      { name: 'Grafana', mono: 'Gf' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Build, test, ship',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub Actions', mono: 'Ga' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Maven', mono: 'Mv' },
      { name: 'JUnit 5', mono: 'Ju' },
      { name: 'Mockito', mono: 'Mk' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core CS',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Low-Level Design', mono: 'Ld' },
    ],
  },
  {
    id: 'ai-dev',
    title: 'AI-Assisted Dev',
    subtitle: 'Shipping faster with AI tools',
    skills: [
      { name: 'Claude Code', mono: 'Cc' },
      { name: 'GitHub Copilot', mono: 'Cp' },
      { name: 'Cursor', mono: 'Cu' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 * Skills with no entry simply don't expand.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['StreamRate', 'BankLite', 'OrderHub', 'Java Programming — Coursera'],
  SQL: ['HackerRank SQL (Intermediate)'],
  'Spring Boot 3': ['StreamRate', 'BankLite', 'OrderHub'],
  'Spring Data JPA': ['BankLite'],
  Microservices: ['OrderHub'],
  'Apache Kafka': ['OrderHub'],
  Redis: ['StreamRate', 'BankLite', 'OrderHub'],
  PostgreSQL: ['BankLite', 'OrderHub'],
  JMeter: ['StreamRate', 'BankLite'],
  Prometheus: ['StreamRate'],
  Grafana: ['StreamRate'],
  Docker: ['StreamRate', 'BankLite', 'OrderHub (Docker Compose)'],
  'JUnit 5': ['BankLite — 40+ tests, ~85% line coverage'],
  Mockito: ['BankLite — 40+ tests, ~85% line coverage'],
  DSA: ['LeetCode — 100+ problems solved'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2021',
    synopsis: 'School years in Piduguralla — a perfect CGPA in Class X, then Class XII at Sri Chaitanya Junior College.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Perfect Ten',
        description: 'Class X at Scholars High School, Piduguralla — finishing with a CGPA of 10.0 out of 10.',
        tags: ['Class X', 'CGPA 10.0'],
        runtime: '2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Senior Year',
        description: 'Class XII at Sri Chaitanya Junior College, Piduguralla — finishing with 95%.',
        tags: ['Class XII', '95%'],
        runtime: '2021',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Software Engineering',
    period: '2021 – 2026',
    synopsis: 'Five years at Vellore Institute of Technology — an Integrated M.Tech in Software Engineering, with a CGPA of 8.35.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Integrated M.Tech in Software Engineering at VIT Vellore, graduating August 2026 with a CGPA of 8.35 out of 10.',
        tags: ['Integrated M.Tech', 'VIT Vellore', 'CGPA 8.35'],
        runtime: '2021 – Aug 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description: '100+ problems solved on LeetCode, on top of core fundamentals: DSA, OOP, Operating Systems, Computer Networks, DBMS and Low-Level Design.',
        tags: ['DSA', 'LeetCode', 'OOP', 'DBMS'],
        runtime: '100+ problems',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Certified',
        description: 'Azure AI Fundamentals (AI-900), HackerRank SQL (Intermediate), a Coursera Java course and Exploratory Data Analysis from Infosys Springboard.',
        tags: ['Azure AI-900', 'SQL', 'Java', 'EDA'],
        runtime: '4 credentials',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building for Speed',
    period: '2026',
    synopsis: 'Three Java / Spring Boot Originals, each load-tested for latency, throughput and failure behavior.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Gatekeeper',
        description: 'StreamRate — a distributed API gateway with Redis + Lua token-bucket rate limiting. About 1,200 requests/sec at p95 under 45 ms.',
        tags: ['Spring Cloud Gateway', 'Redis', 'Lua', 'Grafana'],
        runtime: 'StreamRate',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Ledger',
        description: 'BankLite — transactional transfers with optimistic locking and zero double-spends across 500 concurrent requests. Reads cut from about 90 ms to 12 ms.',
        tags: ['@Transactional', 'PostgreSQL', 'Redis', 'JUnit 5'],
        runtime: 'BankLite',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'The Orchestrator',
        description: 'OrderHub — four event-driven microservices on Kafka. Order placement dropped from about 600 ms to 120 ms, and survived simulated outages.',
        tags: ['Kafka', 'Eureka', 'Resilience4j', 'Docker Compose'],
        runtime: 'OrderHub',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Graduating in August 2026 and looking for the next role — and the next set of things to learn.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Chapter',
        description: 'Looking for a Software Engineer role, open to relocate. Exploring System Design, Cloud Computing (AWS), Agentic AI and Machine Learning.',
        tags: ['System Design', 'AWS', 'Agentic AI', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java 17', detail: 'Listed first on the resume', palette: amber },
  { label: 'Throughput', title: 'StreamRate', detail: '~1,200 req/s • p95 under 45 ms', palette: ocean },
  { label: 'Biggest speed-up', title: 'BankLite', detail: 'Balance reads ~90 ms → 12 ms', palette: jade },
  { label: 'Event-driven', title: 'OrderHub', detail: 'Order placement ~600 ms → 120 ms', palette: crimson },
  { label: 'Degree', title: 'Integrated M.Tech', detail: 'VIT Vellore • CGPA 8.35', palette: violet },
  { label: 'Problems solved', title: '100+', detail: 'On LeetCode', palette: crimson },
  { label: 'Concurrency', title: '500', detail: 'Concurrent transfers, no double-spends', palette: jade },
  { label: 'Test discipline', title: '40+ Tests', detail: 'JUnit 5 + Mockito • ~85% coverage', palette: amber },
  { label: 'Cloud credential', title: 'Azure AI-900', detail: 'Microsoft Certified', palette: ocean },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Agentic AI', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Integrated M.Tech · Software Eng.',
    lines: ['Vellore Institute of Technology, Vellore', '2021 – August 2026'],
    chips: ['CGPA 8.35'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Java 17, Python, SQL, JavaScript · Spring Boot 3, Kafka, Microservices', 'Redis, PostgreSQL · JMeter, Prometheus, Grafana · Docker'],
    chips: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    kicker: 'How I work',
    title: 'Fast & reliable.',
    lines: ['Every service load-tested before it is called done', 'Latency · throughput · failure behavior'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['StreamRate — ~1,200 req/s at p95 under 45 ms', 'BankLite — reads 90 → 12 ms, no double-spends', 'OrderHub — order placement 600 → 120 ms'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['100+ problems solved on LeetCode', 'CGPA 8.35 at VIT Vellore', 'Class X CGPA 10.0 · Class XII 95%'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['Microsoft · HackerRank · Coursera', 'Infosys Springboard'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Agentic AI · Machine Learning'],
  },
];

export type ProfileId = 'harika' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'harika',
    name: 'Harika',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & skills', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
