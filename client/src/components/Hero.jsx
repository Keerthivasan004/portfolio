import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { useTyped } from '../hooks/hooks.js';

const FOCUS_WORDS = [
  'CI/CD pipelines',
  'Docker & Kubernetes',
  'Terraform & IaC',
  'observable systems',
  'boring deploys'
];

const FACTS = [
  { value: '3', label: 'Cloud platforms · AWS, Azure, GCP' },
  { value: '4', label: 'Production-style projects' },
  { value: '60%', label: 'Manual effort cut at Proctor AI' }
];

export default function Hero() {
  const typed = useTyped(FOCUS_WORDS);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 className="hero-name" id="hero-title">Keerthivasan R V</h1>
          <p className="hero-role">DevOps & Cloud Engineer</p>
          <p className="hero-focus" aria-live="polite">
            I ship <span className="typed-word">{typed}</span><span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-bio">
            I automate deployments, build <strong>CI/CD pipelines</strong>, and run observable
            infrastructure on <strong>AWS and Azure</strong>. Previously at Proctor AI, where I cut
            document-processing effort by 60% with cloud and AI automation.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View projects <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#contact" className="btn-secondary">Contact me</a>
          </div>
          <p className="hero-stack">
            <strong>Core stack — </strong>
            Docker · Kubernetes (AKS) · Terraform · GitHub Actions · Jenkins · Prometheus · Grafana
          </p>
          <div className="hero-facts" aria-label="Highlights">
            {FACTS.map((f) => (
              <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
            ))}
          </div>
        </div>
        <aside className="profile" aria-label="Profile">
          <img src="/profile.png" alt="Portrait of Keerthivasan R V" loading="eager" fetchPriority="high" />
          <div>
            <div className="profile-name">Keerthivasan R V</div>
            <div className="profile-sub">B.Sc (Hons) Cloud Computing & Big Data, Reva University</div>
            <div className="profile-links">
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
