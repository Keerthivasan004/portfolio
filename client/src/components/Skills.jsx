import { Heading } from './About.jsx';

const GROUPS = [
  { title: 'Cloud', body: 'AWS (EC2, S3, VPC, IAM, RDS, Route 53, CloudWatch) · Azure (VM, AKS, SQL, Monitor) · GCP' },
  { title: 'Containers', body: 'Docker · Kubernetes · AKS · Docker Compose · Container Registry' },
  { title: 'CI/CD', body: 'GitHub Actions · Jenkins · Pipeline as Code' },
  { title: 'Infrastructure as code', body: 'Terraform (HCL) · Ansible · YAML' },
  { title: 'Monitoring', body: 'Prometheus · Grafana · CloudWatch · Azure Monitor · Alerting' },
  { title: 'Languages & OS', body: 'Python · Bash · JavaScript · Node.js · Ubuntu · Git' }
];

export default function Skills() {
  return (
    <section className="block" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div id="skills-title">
          <Heading eyebrow="Skills" title="Technical skills."
            sub="Working knowledge across the stack, from VPC to pipeline to dashboard." />
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
