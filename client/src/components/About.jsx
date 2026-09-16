import { GitBranch, Container, Layers, Activity } from 'lucide-react';
import { bcbuzzPeriodLabel, bcbuzzTenure } from '../data/portfolio.js';

export function Heading({ eyebrow, title, sub }) {
  return (
    <div className="reveal">
      <div className="eyebrow-sm">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {sub ? <p className="sub">{sub}</p> : null}
    </div>
  );
}

const CAPS = [
  { icon: GitBranch, title: 'FUTRSEC — fully owned', desc: 'Completely worked on futrsec.in: build → GitHub Actions CI/CD → Azure + Hostinger infra → production ops.' },
  { icon: Container, title: 'SYRA — just deployed', desc: 'Just shipped dpdp.bcbuzz.io to production: App Service deploy, domain + TLS go-live, release debugging.' },
  { icon: Layers, title: 'Infra I manage: Azure + Hostinger', desc: 'App Service, envs, slots, logs, scaling + DNS zones, domains, nameservers, TLS. Single owner for uptime.' },
  { icon: Activity, title: 'AI-accelerated delivery', desc: 'Antigravity + GenAI copilots for rapid iteration, rigorous review and fast deploy debugging.' }
];

export default function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div id="about-title">
          <Heading eyebrow="About" title="DevOps Engineer — FUTRSEC owner, SYRA shipper."
            sub={`DevOps Engineer at BCBUZZ Technologies (${bcbuzzPeriodLabel()} · ${bcbuzzTenure()}). Completely worked on futrsec.in, just deployed dpdp.bcbuzz.io, managing infra across Azure + Hostinger with GitHub Actions CI/CD.`} />
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I&apos;m <strong>Keerthivasan R V</strong>, a DevOps Engineer at{' '}
              <strong>BCBUZZ Technologies</strong>. I <strong>completely worked on futrsec.in</strong> and
              operate it end-to-end (React + Node.js, CI/CD, Azure + Hostinger infrastructure) — and I{' '}
              <strong>just deployed dpdp.bcbuzz.io (SYRA Data)</strong> to production.
            </p>
            <p>
              Infrastructure I manage: <strong>Azure</strong> (App Service, app configuration, environment
              variables, deployment slots, logs, scaling) + <strong>Hostinger</strong> (DNS zones, domains,
              nameservers, TLS). Single owner for releases, uptime and incident response on both apps.
            </p>
            <p>
              My practice is <strong>AI-accelerated delivery</strong>: I build with Antigravity and GenAI
              engineering copilots for rapid scaffolding, disciplined AI-assisted review, and systematic
              debugging of deployment failures — senior-team velocity with full production accountability.
              Previously at <strong>Proctor AI</strong>, I cut document-processing effort by <strong>60%</strong> with Azure OCR + GCP Gemini automation.
            </p>
          </div>
          <ul className="cap-list reveal" style={{ ['--d']: '100ms' }}>
            {CAPS.map((c) => (
              <li key={c.title}>
                <span className="cap-ic"><c.icon size={16} aria-hidden="true" /></span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
