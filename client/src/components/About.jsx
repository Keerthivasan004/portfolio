import { GitBranch, Container, Layers, Activity } from 'lucide-react';

export function Heading({ eyebrow, title, sub }) {
  return (
    <div className="reveal">
      <div className="eyebrow-sm">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {sub ? <p className="sub">{sub}</p> : null}
    </div>
  );
}

const CAPS = [
  { icon: GitBranch, title: 'CI/CD pipelines', desc: 'GitHub Actions and Jenkins pipelines that cut manual deployment steps by 40%.' },
  { icon: Container, title: 'Containers & Kubernetes', desc: 'Docker images and AKS rollouts for scalable production workloads.' },
  { icon: Layers, title: 'Infrastructure as code', desc: 'Terraform-provisioned clusters and networking. Reproducible envs in minutes.' },
  { icon: Activity, title: 'Monitoring', desc: 'Prometheus, Grafana and CloudWatch. 50% less manual troubleshooting.' }
];

export default function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div id="about-title">
          <Heading eyebrow="About" title="Engineer focused on reliable, automated systems."
            sub="B.Sc (Hons) in Cloud Computing and Big Data from Reva University. I work across AWS, Azure and GCP with a toolchain of Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus and Grafana." />
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I&apos;m <strong>Keerthivasan R V</strong>, a DevOps and Cloud Engineer.
              At <strong>Proctor AI</strong> I worked as a Backend Web Developer (Cloud & AI Integration),
              automating document workflows with Azure OCR and GCP Gemini — reducing manual effort by <strong>60%</strong>.
            </p>
            <p>
              I care about the fundamentals: infrastructure as code, boring deploys, and observability
              on every service.
            </p>
          </div>
          <ul className="cap-list reveal" style={{ ['--d']: '100ms' }}>
            {CAPS.map((c) => (
              <li key={c.title}>
                <span className="cap-ic"><c.icon size={16} aria-hidden="true" /></span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
