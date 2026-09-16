import { experience, bcbuzzPeriodLabel, formatTenure } from '../data/portfolio.js';
import { Heading } from './About.jsx';

function tenureFor(job) {
  if (job.startDate) return formatTenure(job.startDate);
  return null;
}

function periodFor(job) {
  if (job.company === 'BCBUZZ Technologies') return bcbuzzPeriodLabel();
  return job.period;
}

export default function Experience() {
  return (
    <section className="block" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <div id="exp-title">
          <Heading eyebrow="Experience" title="Work experience."
            sub="Currently operating production on Azure at BCBUZZ Technologies — plus prior cloud & AI integration work." />
        </div>
        {experience.map((e) => (
          <article className="job reveal" key={e.company}>
            <div className="job-date">{periodFor(e)}<br />{tenureFor(e) ? `${tenureFor(e)} · ${e.location}` : e.duration}</div>
            <div>
              <div className="job-role">{e.role}</div>
              <div className="job-co">{e.company}</div>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="job-tags" aria-label="Stack used">
                {e.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
