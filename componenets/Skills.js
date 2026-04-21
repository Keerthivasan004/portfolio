export default function Skills() {
  const skills = [
    "CI/CD (GitHub Actions, Docker, Azure, AWS)",
    "Infrastructure as Code (Terraform, CloudFormation)",
    "Monitoring (Prometheus, Grafana, CloudWatch)",
    "Python & Bash scripting",
    "Cloud Platforms (AWS, Azure, GCP)"
  ];

  return (
    <section id="skills" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white p-4 shadow rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
