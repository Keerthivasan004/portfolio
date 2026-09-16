import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { Heading } from './About.jsx';

const FILTERS = ['All', 'Production', 'Azure', 'AWS', 'ML'];

function matches(p, f) {
  if (f === 'All') return true;
  if (f === 'Production') return p.kind.includes('Production') || p.kind.includes('Flagship') || p.kind.includes('Deployed') || p.kind.includes('Owned');
  if (f === 'Azure') return p.kind.includes('Azure') || p.kind.includes('DevOps') || p.kind.includes('BCBUZZ');
  if (f === 'AWS') return p.kind.includes('AWS');
  if (f === 'ML') return p.kind.includes('ML');
  return true;
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section className="block" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div id="projects-title">
          <Heading eyebrow="Projects" title="FUTRSEC owned · SYRA just shipped."
            sub="Flagship first: futrsec.in I completely worked on and operate — then dpdp.bcbuzz.io just deployed — then CI/CD and HA builds." />
        </div>
        <div className="tabs" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} className={`tab${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <ul className="work-list">
          {visible.map((p, i) => (
            <li key={p.title}>
              <a className="work-row reveal" href={p.live || p.github} target="_blank" rel="noreferrer"
                aria-label={`${p.title} — ${p.live ? 'live site' : 'on GitHub'}`} style={{ ['--d']: `${i * 60}ms` }}>
                <span className="work-no">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="work-kind">{p.kind} · {p.year}</span>
                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-desc">{p.description}</p>
                  <span className="work-meta"><b>{p.outcome}</b><span className="sep">·</span><span>{p.stack}</span></span>
                </span>
                <span className="work-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
