import { BadgeCheck, Brain, FileCode2, KanbanSquare } from 'lucide-react';
import { certifications } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

const icons = { azure: BadgeCheck, python: FileCode2, pm: KanbanSquare };

export default function Certifications() {
  return (
    <section className="block alt" id="certifications">
      <div className="wrap">
        <SectionHeading kicker="// certifications.db" title="Certifications" sub="Verified foundations across cloud, code, and delivery." />
        <div className="cert-grid">
          {certifications.map((c) => {
            const Icon = icons[c.icon] || Brain;
            return (
              <div className="ccard reveal" key={c.name}>
                <span className="clogo"><Icon size={20} /></span>
                <div>
                  <div className="cname">{c.name}</div>
                  <div className="ciss">{c.code}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="reveal" style={{ marginTop: '1.6rem', color: '#8b98ad', fontSize: '.88rem' }}>
          <strong style={{ color: '#e6edf7' }}>Education —</strong> B.Sc (Hons) Cloud Computing &amp; Big Data, Reva University (2022–2025).
          Final-year focus on cloud infrastructure + ML (dyslexia prediction project).
        </div>
      </div>
    </section>
  );
}
