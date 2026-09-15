import { GitBranch, Container, Layers, Activity, Bot } from 'lucide-react';
import { aboutCards } from '../data/portfolio.js';

const icons = { pipeline: GitBranch, container: Container, infra: Layers, monitor: Activity, ai: Bot };

export function SectionHeading({ kicker, title, sub, center = false }) {
  return (
    <div className="reveal" style={center ? { textAlign: 'center' } : undefined}>
      <div className={`stag${center ? ' center' : ''}`}>{kicker}</div>
      <h2 className="stitle">{title}</h2>
      {sub ? <p className="ssub" style={center ? { marginInline: 'auto' } : undefined}>{sub}</p> : null}
    </div>
  );
}

export default function About() {
  return (
    <section className="block alt" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div id="about-title"><SectionHeading kicker="About" title="Infrastructure as a product — automated, observable, calm." sub="DevOps engineer who treats reliability as a feature. Less toil, faster deploys, systems you can trust at 3am." /></div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I&apos;m <strong>Keerthivasan R V</strong>, a DevOps & Cloud Engineer with a B.Sc (Hons) in Cloud Computing
              and Big Data from Reva University. I design automated, reliable infrastructure across <span className="hl-cyan">AWS, Azure and GCP</span>.
            </p>
            <p>
              At <strong>Proctor AI</strong> I worked as a <strong>Backend Web Developer (Cloud & AI Integration)</strong>,
              automating document workflows with Azure OCR + GCP Gemini — reducing manual effort by <span className="hl-green">60%</span>.
            </p>
            <p>
              My toolchain: Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana.
              I believe infra should be code, deploys should be boring, and everything worth running is worth observing.
            </p>
            <div className="terminal" role="img" aria-label="Terminal showing roles and availability status">
              <div className="tbar"><span className="dot dr" /><span className="dot dy" /><span className="dot dg" /><span className="ttitle">keerthivasan@devops — zsh</span></div>
              <div className="tbody">
                <div><span className="tp">$ </span><span className="tc">cat roles.txt</span></div>
                <div><span className="tk">→</span> DevOps Engineer</div>
                <div><span className="tk">→</span> Cloud Engineer (AWS · Azure · GCP)</div>
                <div><span className="tk">→</span> Backend Developer (Cloud & AI)</div>
                <div style={{ marginTop: 8 }}><span className="tp">$ </span><span className="tc">echo $STATUS</span></div>
                <div className="tv">focus=devops_cloud &amp;&amp; status=shipping</div>
              </div>
            </div>
          </div>
          <div className="about-cards reveal" style={{ ['--d']: '120ms' }}>
            {aboutCards.map((c) => {
              const Icon = icons[c.icon] || Activity;
              return (
                <div className="acard" key={c.title}>
                  <span className="acard-ic"><Icon size={19} aria-hidden="true" /></span>
                  <div>
                    <div className="atitle">{c.title}</div>
                    <div className="adesc">{c.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
