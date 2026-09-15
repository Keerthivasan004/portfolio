// Single source of truth for portfolio content.
// Update here and both the React UI + Node API pick it up.
export const profile = {
  name: 'Keerthivasan R V',
  firstName: 'Keerthivasan',
  roles: ['DevOps Engineer', 'Cloud Engineer', 'Backend Developer — Cloud & AI'],
  headline: 'Entry-level DevOps & Cloud Engineer automating deployments, shipping CI/CD pipelines, and running observable infrastructure on AWS & Azure.',
  education: 'B.Sc (Hons) Cloud Computing & Big Data — Reva University (2022–2025)',
  email: 'keerthivasanVA@gmail.com',
  phone: '+91 8220180450',
  linkedin: 'https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/',
  github: 'https://github.com/Keerthivasan004',
  resumeUrl: '/Keerthivasan_RV_DevOps_Engineer_Resume.pdf',
  openToWork: true,
  typed: ['Azure & AKS', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Terraform & IaC', 'Prometheus & Grafana', 'AWS & GCP']
};

export const stats = [
  { value: '3', label: 'Cloud Platforms', sub: 'AWS · Azure · GCP' },
  { value: '4', label: 'Production-style Projects', sub: 'CI/CD · HA · Monitoring' },
  { value: '4', label: 'Certifications', sub: 'Azure · Python · PM' },
  { value: '60%', label: 'Manual Effort Reduced', sub: 'At Proctor AI' }
];

export const experience = [
  {
    role: 'Backend Web Developer — Cloud & AI Integration',
    company: 'Proctor AI',
    period: 'Apr 2025 – Jun 2025',
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
    title: 'Cloud Platforms',
    icon: 'cloud',
    skills: ['AWS', 'Azure', 'GCP', 'EC2 · S3 · VPC', 'IAM · RDS · Route 53', 'CloudWatch', 'Azure VM · VMSS · AKS', 'Azure SQL', 'Azure Monitor']
  },
  {
    title: 'Containers & Orchestration',
    icon: 'container',
    skills: ['Docker', 'Kubernetes', 'AKS', 'Docker Compose', 'Container Registry']
  },
  {
    title: 'CI/CD & Automation',
    icon: 'pipeline',
    skills: ['GitHub Actions', 'Jenkins', 'CI/CD Pipelines', 'Pipeline as Code']
  },
  {
    title: 'Infrastructure as Code',
    icon: 'infra',
    skills: ['Terraform', 'Ansible', 'YAML', 'HCL', 'IaC']
  },
  {
    title: 'Monitoring & Observability',
    icon: 'monitor',
    skills: ['Prometheus', 'Grafana', 'CloudWatch', 'Azure Monitor', 'Alerting']
  },
  {
    title: 'Scripting & Programming',
    icon: 'code',
    skills: ['Python', 'Bash / Shell', 'JavaScript / React', 'Node.js / Express', 'HTML', 'CSS']
  },
  {
    title: 'OS, Networking & VCS',
    icon: 'network',
    skills: ['Ubuntu', 'CentOS', 'Windows', 'VPC · Security Groups', 'NAT · Route Tables', 'Git', 'GitHub']
  },
  {
    title: 'Professional Skills',
    icon: 'team',
    skills: ['Problem-Solving', 'Adaptability', 'Teamwork', 'Communication', 'Time Management']
  }
];

export const projects = [
  {
    badge: 'DevOps · Azure · Featured',
    title: 'End-to-End DevOps CI/CD Pipeline on Azure',
    description:
      'Docker builds + GitHub Actions deploys to AKS provisioned with Terraform. Prometheus & Grafana observe three microservices — manual deploys down 40%, troubleshooting time down 50%.',
    tech: ['GitHub Actions', 'Docker', 'AKS', 'Terraform', 'Prometheus', 'Grafana', 'Azure'],
    github: 'https://github.com/Keerthivasan004/devops-aks-monitoring-project',
    impact: '−40% deploy effort · −50% MTTR'
  },
  {
    badge: 'AWS · Full-Stack + DevOps',
    title: 'Next.js on AWS with ALB + CloudWatch',
    description:
      'Deployed a Next.js app on EC2 with PM2, Application Load Balancer and Route 53 for high availability. CloudWatch dashboards + log groups sped up issue detection by 30%.',
    tech: ['EC2', 'PM2', 'ALB', 'Route 53', 'CloudWatch', 'Next.js'],
    github: 'https://github.com/Keerthivasan004',
    impact: '+Uptime · −30% detection time'
  },
  {
    badge: 'AWS · High Availability',
    title: 'Scalable 3-Tier App on AWS',
    description:
      'EC2 Auto Scaling + ALB + RDS Multi-AZ 3-tier architecture. Handles traffic spikes with zero downtime and demonstrates HA patterns recruiters look for.',
    tech: ['EC2 Auto Scaling', 'ALB', 'RDS Multi-AZ', '3-Tier Arch'],
    github: 'https://github.com/Keerthivasan004',
    impact: 'Zero-downtime scaling'
  },
  {
    badge: 'ML · Cloud · Social Impact',
    title: 'Predictive Analytics for Dyslexia',
    description:
      'Cloud-hosted ML classifiers for early dyslexia screening — accessible, scalable alternative to expensive clinical diagnostics. Python + cloud infra.',
    tech: ['Python', 'Machine Learning', 'Cloud', 'Classification'],
    github: 'https://github.com/Keerthivasan004/Minor-Project-Dyslexia-Prediction',
    impact: 'Accessible early screening'
  }
];

export const certifications = [
  { name: 'Microsoft Azure Fundamentals', code: 'AZ-900 — Microsoft', icon: 'azure' },
  { name: 'Microsoft Azure AI Fundamentals', code: 'AI-900 — Microsoft', icon: 'azure' },
  { name: 'IT Specialist — Python', code: 'Information Technology Specialist', icon: 'python' },
  { name: 'Google Project Management', code: 'Professional Certificate — Coursera', icon: 'pm' }
];

export const aboutCards = [
  { icon: 'pipeline', title: 'CI/CD Pipelines', desc: 'GitHub Actions & Jenkins pipelines cutting manual deployment steps by 40%.' },
  { icon: 'container', title: 'Containers & Orchestration', desc: 'Docker images + AKS/Kubernetes rollouts for scalable production workloads.' },
  { icon: 'infra', title: 'Infrastructure as Code', desc: 'Terraform-provisioned AKS + networking — reproducible envs in minutes.' },
  { icon: 'monitor', title: 'Monitoring & Observability', desc: 'Prometheus + Grafana + CloudWatch — 50% less manual troubleshooting.' },
  { icon: 'ai', title: 'Cloud & AI Automation', desc: 'Azure OCR + GCP Gemini integrations — 60% less document-processing effort.' }
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
];
