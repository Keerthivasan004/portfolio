import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { Heading } from './About.jsx';

const FILTERS = ['All', 'Azure', 'AWS', 'ML'];

function matches(p, f) {
  if (f === 'All') return true;
  if (f === 'Azure') return p.kind.includes('Azure') || p.kind.includes('DevOps');
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
          <Heading eyebrow="Projects" title="Selected projects."
            sub="Each one covers CI/CD, high-availability design, and monitoring." />
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
              <a className="work-row reveal" href={p.github} target="_blank" rel="noreferrer"
                aria-label={`${p.title} on GitHub`} style={{ ['--d']: `${i * 60}ms` }}>
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
