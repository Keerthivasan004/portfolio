import { Github, ArrowUpRight, TrendingDown } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

export default function Projects() {
  return (
    <section className="block" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div id="projects-title"><SectionHeading kicker="Projects" title="Production-style builds, not tutorials." sub="Each project ships CI/CD, high-availability thinking, and observability — the three things hiring managers scan for." /></div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <article className={`pcard reveal${i === 0 ? ' featured' : ''}`} key={p.title}>
              <span className="pbadge">{p.badge}</span>
              <h3 className="ptitle">{p.title}</h3>
              <p className="pdesc">{p.description}</p>
              <div className="pimpact"><TrendingDown size={14} aria-hidden="true" /> {p.impact}</div>
              <div className="ptech" aria-label="Technologies">
                {p.tech.map((t) => (
                  <span className="pill" key={t}>{t}</span>
                ))}
              </div>
              <div className="plinks">
                <a className="plink" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}>
                  <Github size={14} aria-hidden="true" /> View on GitHub <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
