import { BadgeCheck } from 'lucide-react';
import { certifications, profile } from '../data/portfolio.js';
import { Heading } from './About.jsx';

export default function Certifications() {
  return (
    <section className="block" id="certifications" aria-labelledby="certs-title">
      <div className="wrap">
        <div id="certs-title">
          <Heading eyebrow="Credentials" title="Certifications and education." />
        </div>
        <ul className="cert-list">
          {certifications.map((c) => (
            <li className="reveal" key={c.name}>
              <span className="cert-ic"><BadgeCheck size={17} aria-hidden="true" /></span>
              <div>
                <b>{c.name}</b>
                <span>{c.detail}</span>
              </div>
              <span className="cert-code">{c.code}</span>
            </li>
          ))}
        </ul>
        <div className="edu reveal">
          <strong>Education — </strong>
          {profile.education}. Final-year focus on cloud infrastructure and machine learning.
        </div>
      </div>
    </section>
  );
}
