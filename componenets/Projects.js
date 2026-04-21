export default function Projects() {
  const projects = [
    { name: "CI/CD Pipeline Automation", link: "https://github.com/Keerthivasan004/devops-ci-cd" },
    { name: "Terraform Infrastructure Setup", link: "https://github.com/Keerthivasan004/terraform-infra" },
    { name: "Monitoring Dashboard with Grafana", link: "https://github.com/Keerthivasan004/monitoring-grafana" }
  ];

  return (
    <section id="projects" className="p-10 bg-gray-200">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <a key={index} href={proj.link} target="_blank" rel="noopener noreferrer"
             className="bg-white p-6 shadow rounded hover:shadow-lg">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
