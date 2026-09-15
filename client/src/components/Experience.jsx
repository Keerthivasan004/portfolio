import { experience } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <SectionHeading kicker="// experience.log" title="Experience" sub="Hands-on delivery with measurable impact." />
        {experience.map((e) => (
          <article className="exp-card reveal" key={e.company}>
            <div className="exp-head">
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company} · {e.location}</div>
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
            <ul className="exp-list">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="exp-stack">
              {e.stack.map((s) => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
