// Single source of truth for portfolio content.
export const profile = {
  name: 'Keerthivasan R V',
  firstName: 'Keerthivasan',
  title: 'DevOps & Cloud Engineer',
  headline: 'Entry-level DevOps & Cloud Engineer automating deployments, shipping CI/CD pipelines, and running observable infrastructure on AWS & Azure.',
  education: 'B.Sc (Hons) Cloud Computing & Big Data — Reva University, 2022–2025',
  email: 'keerthivasanVA@gmail.com',
  phone: '+91 8220180450',
  linkedin: 'https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/',
  github: 'https://github.com/Keerthivasan004',
  resumeUrl: '/Keerthivasan_RV_DevOps_Engineer_Resume.pdf',
  focus: 'AWS · Azure · Docker · Kubernetes · Terraform'
};

export const stats = [
  { value: '3', suffix: '', label: 'Cloud platforms', sub: 'AWS · Azure · GCP' },
  { value: '4', suffix: '', label: 'Production-style projects', sub: 'CI/CD · HA · Monitoring' },
  { value: '4', suffix: '', label: 'Certifications', sub: 'Azure · Python · PM' },
  { value: '60', suffix: '%', label: 'Manual effort removed', sub: 'Document automation, Proctor AI' }
];

export const experience = [
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
    area: 'Cloud Platforms',
    note: 'Compute · Network · Data',
    skills: 'AWS (EC2, S3, VPC, IAM, RDS, Route 53, CloudWatch) · Azure (VM, VMSS, AKS, Azure SQL, Monitor) · GCP',
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
    area: 'CI/CD & Automation',
    note: 'Pipelines as code',
    skills: 'GitHub Actions · Jenkins · Pipeline as Code',
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
    skills: 'Prometheus · Grafana · CloudWatch · Azure Monitor',
    level: 'Proficient',
    levelClass: 'lvl-prof'
  },
  {
    area: 'Scripting & Programming',
    note: 'Automation first',
    skills: 'Python · Bash/Shell · JavaScript · Node.js/Express · HTML/CSS',
    level: 'Proficient',
    levelClass: 'lvl-prof'
  },
  {
    area: 'OS, Networking & VCS',
    note: 'Foundations',
    skills: 'Ubuntu · CentOS · Windows · VPC, Security Groups, NAT, Route Tables · Git/GitHub',
    level: 'Working',
    levelClass: 'lvl-work'
  }
];

export const projects = [
  {
    no: '01',
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
    no: '02',
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
    no: '03',
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
    no: '04',
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
  { title: 'Pipelines over clicks', desc: 'Every deploy is code-reviewed, repeatable GitHub Actions or Jenkins — manual steps down 40%.' },
  { title: 'Infrastructure as code', desc: 'Terraform-provisioned AKS + networking. Reproducible environments in minutes, not days.' },
  { title: 'Observable by default', desc: 'Prometheus + Grafana + CloudWatch on every service — 50% less manual troubleshooting.' },
  { title: 'Automation with judgment', desc: 'Azure OCR + GCP Gemini cut document effort 60%. Automate the toil, keep humans for decisions.' }
];

export const navLinks = [
  { href: '#about', label: 'About', no: '01' },
  { href: '#experience', label: 'Experience', no: '02' },
  { href: '#skills', label: 'Skills', no: '03' },
  { href: '#projects', label: 'Projects', no: '04' },
  { href: '#certifications', label: 'Credentials', no: '05' },
  { href: '#contact', label: 'Contact', no: '06' }
];
