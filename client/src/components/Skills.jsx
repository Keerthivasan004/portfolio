import { Heading } from './About.jsx';

const GROUPS = [
  { title: 'Infrastructure I Manage (daily)', body: 'Azure App Service (config, envs, slots, logs, scaling) · Hostinger (DNS zones, domains, nameservers, TLS) · Azure VM, AKS, SQL, Monitor' },
  { title: 'CI/CD', body: 'GitHub Actions · Git/GitHub (branching, PRs, releases) · Jenkins · Zero-downtime deploys + rollback' },
  { title: 'AI-Accelerated Delivery', body: 'Antigravity · GenAI copilots · AI-assisted code review · AI-driven deploy debugging & RCA' },
  { title: 'Full-Stack Ops', body: 'React.js · Node.js/Express · JavaScript · HTML/CSS — FUTRSEC fully owned, SYRA just shipped' },
  { title: 'Containers & IaC', body: 'Docker · Kubernetes · AKS · Docker Compose · Terraform (HCL) · Ansible · YAML' },
  { title: 'Monitoring', body: 'Prometheus · Grafana · CloudWatch · Azure Monitor · Log triage · Incident response' }
];

export default function Skills() {
  return (
    <section className="block" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div id="skills-title">
          <Heading eyebrow="Skills" title="Infrastructure I manage."
            sub="Azure + Hostinger in production daily — from DNS to deploy to dashboard." />
        </div>
        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-group reveal" key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
