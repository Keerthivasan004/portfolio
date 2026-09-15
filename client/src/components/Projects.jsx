import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

export default function Projects() {
  return (
    <section className="block" id="projects">
      <div className="wrap">
        <SectionHeading kicker="// projects.list" title="Projects" sub="Production-style builds — CI/CD, high availability, and observability included." />
        <div className="proj-grid">
          {projects.map((p) => (
            <article className="pcard reveal" key={p.title}>
              <span className="pbadge">{p.badge}</span>
              <h3 className="ptitle">{p.title}</h3>
              <p className="pdesc">{p.description}</p>
              <div className="pimpact">{p.impact}</div>
              <div className="ptech">
                {p.tech.map((t) => (
                  <span className="pill" key={t}>{t}</span>
                ))}
              </div>
              <div className="plinks">
                <a className="plink" href={p.github} target="_blank" rel="noreferrer">
                  <Github size={13} /> View on GitHub <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
