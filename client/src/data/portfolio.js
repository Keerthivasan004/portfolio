// Single source of truth for portfolio content.
export const profile = {
  name: 'Keerthivasan R V',
  firstName: 'Keerthivasan',
  title: 'DevOps Engineer @ BCBUZZ Technologies',
  headline: 'DevOps Engineer at BCBUZZ Technologies — fully owned and operating futrsec.in end-to-end, just shipped dpdp.bcbuzz.io (SYRA Data) to production, managing infrastructure across Azure + Hostinger with AI-accelerated delivery.',
  education: 'B.Sc (Hons) Cloud Computing & Big Data — Reva University, 2022–2025',
  email: 'keerthivasanVA@gmail.com',
  phone: '+91 8220180450',
  linkedin: 'https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/',
  github: 'https://github.com/Keerthivasan004',
  resumeUrl: '/Keerthivasan_RV_DevOps_Engineer_Resume.pdf',
  focus: 'Azure + Hostinger Infra · GitHub Actions · FUTRSEC Owner · SYRA Deployed'
};

// ── BCBUZZ tenure: single source of truth. Month count auto-updates everywhere. ──
// Joined: 19 Jun 2026
export const bcbuzzStartDate = '2026-06-19';

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatTenure(startISO, now = new Date()) {
  const s = new Date(startISO + 'T00:00:00');
  let months = (now.getFullYear() - s.getFullYear()) * 12 + (now.getMonth() - s.getMonth());
  if (now.getDate() < s.getDate()) months -= 1;
  const total = Math.max(months, 1); // minimum "1 mo" once started
  if (total < 12) return `${total} mo${total === 1 ? '' : 's'}`;
  const yrs = Math.floor(total / 12);
  const rem = total % 12;
  return rem === 0 ? `${yrs} yr${yrs === 1 ? '' : 's'}` : `${yrs} yr${yrs === 1 ? '' : 's'} ${rem} mo${rem === 1 ? '' : 's'}`;
}

export function bcbuzzPeriodLabel() {
  const s = new Date(bcbuzzStartDate + 'T00:00:00');
  return `${MONTHS_SHORT[s.getMonth()]} ${s.getFullYear()} – Present`;
}

export function bcbuzzTenure(now) {
  return formatTenure(bcbuzzStartDate, now);
}

export const stats = [
  { value: 'FUTRSEC', suffix: '', label: 'Fully owned + operated', sub: 'Build → infra → production' },
  { value: 'SYRA', suffix: '', label: 'Just deployed to prod', sub: 'dpdp.bcbuzz.io · Live' },
  { value: '100', suffix: '%', label: 'Deploys via CI/CD', sub: 'GitHub Actions · Zero-click' },
  { value: '2', suffix: '', label: 'Infra planes managed', sub: 'Azure + Hostinger' }
];

export const experience = [
  {
    role: 'DevOps Engineer',
    company: 'BCBUZZ Technologies',
    startDate: bcbuzzStartDate,
    period: 'Jun 2026 – Present', // rendered dynamically via bcbuzzPeriodLabel() + tenure
    duration: 'Current · Bengaluru, India',
    location: 'Bengaluru, India',
    bullets: [
      'Completely worked on futrsec.in (cybersecurity talent ecosystem) — end-to-end ownership from build through production: React.js + Node.js delivery, GitHub Actions CI/CD, and full infrastructure management across Azure + Hostinger.',
      'Just deployed dpdp.bcbuzz.io (SYRA Data) to production — DPDPA-2023 compliance intelligence platform with 7 modules and 58 automated checks (scanner, notice generator, consent manager, RBAC, audit logs). Owned the production rollout: build, Azure deploy, domain + TLS go-live.',
      'Manage infrastructure across Azure (App Service, app configuration, environment variables, deployment slots, logs, scaling) + Hostinger (DNS zones, domains, nameservers, TLS) — single owner for uptime, releases and incident response on both apps.',
      'Ship through Git-based CI/CD with GitHub Actions — automated build, test and zero-downtime deploys with staging-to-production promotion and instant rollback.',
      'Practice AI-accelerated delivery with Antigravity + GenAI engineering copilots — rapid full-stack iteration, rigorous AI-assisted code review, and systematic root-cause analysis that resolves deployment failures in hours, not days.'
    ],
    stack: ['FUTRSEC Owner', 'SYRA Deployed', 'Azure App Service', 'Hostinger Infra', 'GitHub Actions', 'React.js', 'Node.js', 'Antigravity / GenAI']
  },
  {
    role: 'Backend Web Developer — Cloud & AI Integration',
    company: 'Proctor AI',
    period: 'Apr 2025 – Jun 2025',
    duration: '3 months · Remote, India',
    location: 'Remote / India',
    bullets: [
      'Automated document-processing with Azure OCR Computer Vision API + GCP Gemini API, cutting manual effort by 60%.',
      'Streamlined Python backend workflows on cloud services, significantly reducing processing time.',
      'Built API-based automation that improved client turnaround time end-to-end.'
    ],
    stack: ['Python', 'Azure OCR', 'GCP Gemini', 'REST APIs']
  }
];

export const skillGroups = [
  {
    area: 'Cloud & Production Operations',
    note: 'Where I live daily',
    skills: 'Azure App Service · Azure VM, AKS, Azure SQL, Monitor · AWS (EC2, S3, VPC, IAM, RDS, Route 53, CloudWatch) · Hostinger (DNS, domains, hosting)',
    level: 'Production',
    levelClass: 'lvl-prod'
  },
  {
    area: 'CI/CD & Automation',
    note: 'Pipelines as code',
    skills: 'GitHub Actions · Git/GitHub (branching, PRs, releases) · Jenkins · Zero-downtime deploys · Rollback strategy',
    level: 'Production',
    levelClass: 'lvl-prod'
  },
  {
    area: 'Full-Stack Delivery (AI-Accelerated)',
    note: 'Ship with GenAI leverage',
    skills: 'React.js · Node.js/Express · JavaScript · HTML/CSS · Antigravity + GenAI copilots for build, review & deploy debugging',
    level: 'Production',
    levelClass: 'lvl-prod'
  },
  {
    area: 'Containers & Orchestration',
    note: 'Build · Ship · Scale',
    skills: 'Docker · Kubernetes · AKS · Docker Compose · Container Registry',
    level: 'Production',
    levelClass: 'lvl-prod'
  },
  {
    area: 'Infrastructure as Code',
    note: 'Reproducible envs',
    skills: 'Terraform (HCL) · Ansible · YAML',
    level: 'Proficient',
    levelClass: 'lvl-prof'
  },
  {
    area: 'Monitoring & Observability',
    note: 'Metrics · Logs · Alerts',
    skills: 'Prometheus · Grafana · CloudWatch · Azure Monitor · Log triage & incident response',
    level: 'Proficient',
    levelClass: 'lvl-prof'
  },
  {
    area: 'OS, Networking & Scripting',
    note: 'Foundations',
    skills: 'Ubuntu · CentOS · Windows · VPC, Security Groups, NAT, Route Tables · Python · Bash/Shell',
    level: 'Working',
    levelClass: 'lvl-work'
  }
];

export const projects = [
  {
    no: '01',
    kind: 'Flagship · Fully Owned · BCBUZZ Technologies',
    title: 'FUTRSEC — Cybersecurity Talent Ecosystem (futrsec.in)',
    year: '2026',
    description:
      'Completely worked on and operating — my flagship ownership. End-to-end delivery of the live cybersecurity placements & talent-intelligence platform: React + Node.js build, GitHub Actions CI/CD, and full infrastructure management across Azure App Service (config, envs, scaling, logs) + Hostinger (DNS, domains, TLS). Single owner for releases, uptime and incidents.',
    outcome: 'Fully owned · Live · Infra-managed',
    stack: 'Azure App Service / Hostinger Infra / GitHub Actions / React.js / Node.js',
    github: 'https://futrsec.in',
    live: 'https://futrsec.in'
  },
  {
    no: '02',
    kind: 'Just Deployed · Production · BCBUZZ Technologies',
    title: 'SYRA Data — DPDPA Compliance Platform (dpdp.bcbuzz.io)',
    year: '2026',
    description:
      'Just deployed to production. Owned the production rollout of the DPDPA-2023 compliance intelligence platform: 7 evaluation modules, 58 automated statutory checks, scanner + notice generator + consent manager, RBAC and immutable audit logs. Build → Azure deploy → domain + TLS go-live with AI-assisted release debugging.',
    outcome: 'Just shipped · Live · 7 modules · 58 checks',
    stack: 'Azure / GitHub Actions / React.js / Node.js / Hostinger DNS',
    github: 'https://dpdp.bcbuzz.io',
    live: 'https://dpdp.bcbuzz.io'
  },
  {
    no: '03',
    kind: 'DevOps · Azure · Featured',
    title: 'End-to-End CI/CD Pipeline on Azure',
    year: '2025',
    description:
      'Docker builds and GitHub Actions deploys to Terraform-provisioned AKS. Prometheus & Grafana observe three microservices. Manual deploy effort down 40%, troubleshooting time down 50%.',
    outcome: '−40% deploy effort · −50% MTTR',
    stack: 'GitHub Actions / Docker / AKS / Terraform / Prometheus / Grafana',
    github: 'https://github.com/Keerthivasan004/devops-aks-monitoring-project'
  },
  {
    no: '04',
    kind: 'AWS · Full-Stack + DevOps',
    title: 'Next.js on AWS with ALB + CloudWatch',
    year: '2024',
    description:
      'Next.js on EC2 with PM2, Application Load Balancer and Route 53 for availability. CloudWatch dashboards and log groups sped up issue detection by 30%.',
    outcome: '+Uptime · −30% detection time',
    stack: 'EC2 / PM2 / ALB / Route 53 / CloudWatch / Next.js',
    github: 'https://github.com/Keerthivasan004'
  },
  {
    no: '05',
    kind: 'AWS · High Availability',
    title: 'Scalable 3-Tier App on AWS',
    year: '2024',
    description:
      'EC2 Auto Scaling + ALB + RDS Multi-AZ three-tier architecture. Absorbs traffic spikes with zero downtime — the HA pattern hiring managers look for.',
    outcome: 'Zero-downtime scaling',
    stack: 'EC2 Auto Scaling / ALB / RDS Multi-AZ / 3-Tier',
    github: 'https://github.com/Keerthivasan004'
  },
  {
    no: '06',
    kind: 'ML · Cloud · Social Impact',
    title: 'Predictive Analytics for Dyslexia',
    year: '2024',
    description:
      'Cloud-hosted ML classifiers for early dyslexia screening — an accessible, scalable alternative to expensive clinical diagnostics.',
    outcome: 'Accessible early screening',
    stack: 'Python / Machine Learning / Cloud / Classification',
    github: 'https://github.com/Keerthivasan004/Minor-Project-Dyslexia-Prediction'
  }
];

export const certifications = [
  { name: 'Microsoft Azure Fundamentals', detail: 'Microsoft Certified', code: 'AZ-900' },
  { name: 'Microsoft Azure AI Fundamentals', detail: 'Microsoft Certified', code: 'AI-900' },
  { name: 'IT Specialist — Python', detail: 'Information Technology Specialist', code: 'Python' },
  { name: 'Google Project Management', detail: 'Professional Certificate · Coursera', code: 'PM' }
];

export const principles = [
  { title: 'Full ownership (FUTRSEC)', desc: 'Completely worked on futrsec.in — build, CI/CD, Azure + Hostinger infra, releases and uptime. If it ships, I operate it.' },
  { title: 'Ship to prod (SYRA)', desc: 'Just deployed dpdp.bcbuzz.io to production — clean rollout, domain + TLS go-live, AI-assisted release debugging.' },
  { title: 'Pipelines over clicks', desc: 'Every deploy is a reviewed GitHub Actions run — zero-click, zero-downtime, instantly rollbackable.' },
  { title: 'AI-accelerated, human-accountable', desc: 'Antigravity + GenAI copilots for rapid build, review and deploy debugging — velocity of a larger team, with production-grade accountability.' }
];

export const navLinks = [
  { href: '#about', label: 'About', no: '01' },
  { href: '#experience', label: 'Experience', no: '02' },
  { href: '#skills', label: 'Skills', no: '03' },
  { href: '#projects', label: 'Projects', no: '04' },
  { href: '#certifications', label: 'Credentials', no: '05' },
  { href: '#contact', label: 'Contact', no: '06' }
];
