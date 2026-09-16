import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile, bcbuzzPeriodLabel, bcbuzzTenure } from '../data/portfolio.js';
import { useTyped } from '../hooks/hooks.js';

const FOCUS_WORDS = [
  'futrsec.in end-to-end',
  'fresh prod deploys',
  'Azure + Hostinger infra',
  'zero-downtime releases',
  'AI-accelerated delivery'
];

const FACTS_STATIC = [
  { value: 'FUTRSEC', label: 'Fully owned + operated · Live' },
  { value: 'SYRA', label: 'Just deployed · dpdp.bcbuzz.io' }
];

export default function Hero() {
  const typed = useTyped(FOCUS_WORDS);
  const facts = [
    ...FACTS_STATIC,
    { value: bcbuzzTenure(), label: `at BCBUZZ · ${bcbuzzPeriodLabel()}` }
  ];

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 className="hero-name" id="hero-title">Keerthivasan R V</h1>
          <p className="hero-role">DevOps Engineer @ BCBUZZ Technologies</p>
          <p className="hero-focus" aria-live="polite">
            I ship <span className="typed-word">{typed}</span><span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-bio">
            I completely worked on <a href="https://futrsec.in" target="_blank" rel="noreferrer">futrsec.in</a> and
            operate it end-to-end — plus just deployed <a href="https://dpdp.bcbuzz.io" target="_blank" rel="noreferrer">dpdp.bcbuzz.io (SYRA Data)</a> to
            production. I manage infrastructure across Azure (App Service, config, scaling, logs) +{' '}
            Hostinger (DNS, domains, TLS) with GitHub Actions CI/CD and an AI-accelerated workflow.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View live work <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#contact" className="btn-secondary">Contact me</a>
          </div>
          <p className="hero-stack">
            <strong>Infra I manage — </strong>
            Azure App Service · Hostinger (DNS/Domains/TLS) · GitHub Actions · React.js · Node.js · Antigravity
          </p>
          <div className="hero-facts" aria-label="Highlights">
            {facts.map((f) => (
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
