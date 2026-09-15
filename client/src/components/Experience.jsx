import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

export default function Experience() {
  return (
    <section className="block" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <div id="exp-title"><SectionHeading kicker="Experience" title="Impact, measured in toil removed." sub="One role, real production pressure — automation that paid for itself." /></div>
        <div className="exp-list">
          {experience.map((e) => (
            <article className="exp-card reveal" key={e.company}>
              <div className="exp-head">
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company"><Briefcase size={13} style={{ verticalAlign: -2 }} aria-hidden="true" /> {e.company} · {e.location}</div>
                </div>
                <span className="exp-period">{e.period}</span>
              </div>
              <ul className="exp-listul">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="exp-stack" aria-label="Stack used">
                {e.stack.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
