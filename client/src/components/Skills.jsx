import { Cloud, Container, GitBranch, Layers, Activity, Code2, Network, Users } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

const icons = {
  cloud: Cloud, container: Container, pipeline: GitBranch, infra: Layers,
  monitor: Activity, code: Code2, network: Network, team: Users
};

export default function Skills() {
  return (
    <section className="block alt" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div id="skills-title"><SectionHeading kicker="Skills" title="A toolkit for reliable systems." sub="Deep enough in each layer to debug across the stack — from VPC to pipeline to dashboard." /></div>
        <div className="skills-grid">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon] || Code2;
            return (
              <div className="sgroup reveal" key={g.title}>
                <div className="sghead">
                  <span className="sgicon"><Icon size={18} aria-hidden="true" /></span>
                  <span className="sgtitle">{g.title}</span>
                </div>
                <div className="tags">
                  {g.skills.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
