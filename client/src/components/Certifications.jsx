import { BadgeCheck, FileCode2, KanbanSquare, GraduationCap } from 'lucide-react';
import { certifications } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

const icons = { azure: BadgeCheck, python: FileCode2, pm: KanbanSquare };

export default function Certifications() {
  return (
    <section className="block alt" id="certifications" aria-labelledby="certs-title">
      <div className="wrap">
        <div id="certs-title"><SectionHeading kicker="Credentials" title="Certified foundations." sub="Cloud, code, and delivery — verified, not just claimed." /></div>
        <div className="cert-grid">
          {certifications.map((c) => {
            const Icon = icons[c.icon] || BadgeCheck;
            return (
              <div className="ccard reveal" key={c.name}>
                <span className="clogo"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <div className="cname">{c.name}</div>
                  <div className="ciss">{c.code}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="edu-note reveal">
          <strong><GraduationCap size={15} style={{ verticalAlign: -2 }} aria-hidden="true" /> Education — </strong>
          B.Sc (Hons) Cloud Computing & Big Data, Reva University (2022–2025). Final-year focus on cloud infrastructure + ML (dyslexia prediction project).
        </div>
      </div>
    </section>
  );
}
