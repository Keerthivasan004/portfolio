const profile = {
  name: 'Keerthivasan R V',
  headline: 'DevOps & Cloud Engineer — AWS · Azure · GCP · Docker · Kubernetes · Terraform · CI/CD',
  email: 'keerthivasanVA@gmail.com',
  phone: '+91 8220180450',
  linkedin: 'https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/',
  github: 'https://github.com/Keerthivasan004'
};

const projects = [
  { title: 'End-to-End DevOps CI/CD Pipeline on Azure', stack: ['GitHub Actions', 'Docker', 'AKS', 'Terraform', 'Prometheus', 'Grafana'], github: 'https://github.com/Keerthivasan004/devops-aks-monitoring-project' },
  { title: 'Next.js on AWS with ALB + CloudWatch', stack: ['EC2', 'PM2', 'ALB', 'Route 53', 'CloudWatch'] },
  { title: 'Scalable 3-Tier App on AWS', stack: ['EC2 Auto Scaling', 'ALB', 'RDS Multi-AZ'] },
  { title: 'Predictive Analytics for Dyslexia', stack: ['Python', 'ML', 'Cloud'], github: 'https://github.com/Keerthivasan004/Minor-Project-Dyslexia-Prediction' }
];

const messagesStore = [];

function addMessage(entry) {
  messagesStore.push(entry);
}

module.exports = { profile, projects, addMessage, messagesStore };