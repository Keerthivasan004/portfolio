import { GitBranch, Container, Layers, Activity, Bot } from 'lucide-react';
import { aboutCards } from '../data/portfolio.js';

const icons = { pipeline: GitBranch, container: Container, infra: Layers, monitor: Activity, ai: Bot };

export function SectionHeading({ kicker, title, sub }) {
  return (
    <div className="reveal">
      <div className="stag">{kicker}</div>
      <h2 className="stitle">{title}</h2>
      {sub ? <p className="ssub">{sub}</p> : null}
      <div className="div" />
    </div>
  );
}

export default function About() {
  return (
    <section className="block alt" id="about">
      <div className="wrap">
        <SectionHeading kicker="// about.me" title="About Me" sub="DevOps engineer who treats infrastructure as product — automated, observable, and boring in the best way." />
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I&apos;m <strong>Keerthivasan R V</strong>, a DevOps & Cloud Engineer with a B.Sc (Hons) in Cloud Computing
              and Big Data from Reva University. I build automated, reliable infrastructure across AWS, Azure and GCP.
            </p>
            <p>
              At <strong>Proctor AI</strong> I worked as a <strong>Backend Web Developer (Cloud & AI Integration)</strong>,
              automating document workflows with Azure OCR + GCP Gemini — reducing manual effort by 60%.
            </p>
            <p>
              My toolchain: Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana.
              I believe infra should be code, deploys should be automated, and systems should always be observable.
            </p>
            <div className="terminal" role="img" aria-label="Terminal showing roles and status">
              <div className="tbar"><span className="dot dr" /><span className="dot dy" /><span className="dot dg" /><span className="ttitle">keerthivasan@devops:~$</span></div>
              <div className="tbody">
                <div><span className="tp">$ </span><span className="tc">cat roles.txt</span></div>
                <div><span className="tk">→</span> DevOps Engineer</div>
                <div><span className="tk">→</span> Cloud Engineer (AWS · Azure · GCP)</div>
                <div><span className="tk">→</span> Backend Developer (Cloud & AI)</div>
                <div style={{ marginTop: 6 }}><span className="tp">$ </span><span className="tc">echo $STATUS</span></div>
                <div className="tv">open_to_work=true &amp;&amp; relocatable=true</div>
              </div>
            </div>
          </div>
          <div className="reveal">
            {aboutCards.map((c) => {
              const Icon = icons[c.icon] || Activity;
              return (
                <div className="acard" key={c.title}>
                  <span style={{ color: '#00d4ff' }}><Icon size={20} /></span>
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
