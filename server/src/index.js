const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(cors({ origin: [CLIENT_URL, 'http://localhost:5173'], credentials: false }));
app.use(express.json({ limit: '32kb' }));
app.use(morgan('dev'));

const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false });
app.use('/api/contact', contactLimiter);

// ---- Data (mirrors client/src/data/portfolio.js) ----
const profile = {
  name: 'Keerthivasan R V',
  headline: 'DevOps Engineer @ BCBUZZ Technologies — FUTRSEC fully owned, SYRA just deployed, infra managed across Azure + Hostinger',
  email: 'keerthivasanVA@gmail.com',
  phone: '+91 8220180450',
  linkedin: 'https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/',
  github: 'https://github.com/Keerthivasan004'
};

const projects = [
  { title: 'FUTRSEC — Cybersecurity Talent Ecosystem (futrsec.in) — fully owned', stack: ['Azure App Service', 'Hostinger Infra', 'GitHub Actions', 'React.js', 'Node.js'], live: 'https://futrsec.in' },
  { title: 'SYRA Data — DPDPA Compliance Platform (dpdp.bcbuzz.io) — just deployed', stack: ['Azure', 'GitHub Actions', 'React.js', 'Node.js'], live: 'https://dpdp.bcbuzz.io' },
  { title: 'End-to-End DevOps CI/CD Pipeline on Azure', stack: ['GitHub Actions', 'Docker', 'AKS', 'Terraform', 'Prometheus', 'Grafana'], github: 'https://github.com/Keerthivasan004/devops-aks-monitoring-project' },
  { title: 'Next.js on AWS with ALB + CloudWatch', stack: ['EC2', 'PM2', 'ALB', 'Route 53', 'CloudWatch'] },
  { title: 'Scalable 3-Tier App on AWS', stack: ['EC2 Auto Scaling', 'ALB', 'RDS Multi-AZ'] },
  { title: 'Predictive Analytics for Dyslexia', stack: ['Python', 'ML', 'Cloud'], github: 'https://github.com/Keerthivasan004/Minor-Project-Dyslexia-Prediction' }
];

// ---- Routes ----
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'keerthivasan-portfolio-api', time: new Date().toISOString(), uptime: process.uptime() });
});

app.get('/api/profile', (req, res) => res.json(profile));
app.get('/api/projects', (req, res) => res.json(projects));

app.get('/api/resume', (req, res) => {
  const pdf = path.join(__dirname, '..', 'data', 'Keerthivasan_RV_DevOps_Engineer_Resume.pdf');
  if (!fs.existsSync(pdf)) return res.status(404).json({ error: 'Resume not found' });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Keerthivasan_RV_DevOps_Engineer_Resume.pdf"');
  fs.createReadStream(pdf).pipe(res);
});

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
app.post('/api/contact', (req, res) => {
  const { name = '', email = '', message = '' } = req.body || {};
  if (!String(name).trim() || !emailRe.test(String(email).trim()) || !String(message).trim()) {
    return res.status(400).json({ error: 'Please provide a valid name, email and message.' });
  }
  if (String(message).length > 4000) return res.status(400).json({ error: 'Message too long (max 4000 chars).' });

  const entry = {
    id: Date.now(),
    name: String(name).trim().slice(0, 120),
    email: String(email).trim().slice(0, 160),
    message: String(message).trim().slice(0, 4000),
    at: new Date().toISOString(),
    ip: req.ip
  };

  try {
    const file = path.join(__dirname, '..', 'data', 'messages.json');
    const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8') || '[]') : [];
    prev.push(entry);
    fs.writeFileSync(file, JSON.stringify(prev, null, 2));
  } catch (e) {
    console.error('Failed to persist message', e);
  }

  console.log(`[contact] ${entry.name} <${entry.email}>: ${entry.message.slice(0, 120)}`);
  res.status(201).json({ ok: true, message: 'Thanks — your message has been received.' });
});

// ---- Serve React build in production ----
const clientDist = path.join(__dirname, '..', '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.json({ ok: true, hint: 'Run `npm run build` in client/ to generate UI, then restart server.' }));
}

app.use((req, res) => res.status(404).json({ error: 'Not found' }));
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✓ API listening on http://localhost:${PORT}`);
  console.log(`✓ Health: http://localhost:${PORT}/api/health`);
});
