import { motion } from 'framer-motion';
import { ArrowRight, Mail, GraduationCap, Cloud, Linkedin, FileDown, Github } from 'lucide-react';
import { profile, stats } from '../data/portfolio.js';
import { useTyped } from '../hooks/hooks.js';

const ease = [0.21, 0.6, 0.35, 1];

export default function Hero() {
  const typed = useTyped(profile.typed);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="wrap hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <span className="eyebrow"><span className="pulse" aria-hidden="true" /> Available for DevOps & Cloud roles</span>
          <h1 className="hero-name" id="hero-title">Keerthivasan <span className="grad">R.V</span></h1>
          <p className="hero-sub">DevOps & Cloud Engineer — I ship reliable infrastructure.</p>
          <div className="role-pills" aria-label="Focus areas">
            {profile.roles.map((r) => (
              <span key={r} className="rpill">{r}</span>
            ))}
          </div>
          <p className="typed-line" aria-live="polite">
            Specialising in <strong>{typed}</strong><span className="cursor" aria-hidden="true" />
          </p>
          <p className="hero-desc">{profile.headline} I turn manual, fragile workflows into automated, observable systems.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn-p">View Projects <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#contact" className="btn-g">Get in Touch</a>
            <a href={profile.resumeUrl} download className="btn-g"><FileDown size={16} aria-hidden="true" /> Resume</a>
          </div>
          <dl className="hero-stats" aria-label="Highlights">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="stat-n">{s.value}</dt>
                <dd className="stat-l">{s.label}</dd>
                <dd className="stat-s">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.aside
          className="hero-card"
          aria-label="Profile summary"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          <div className="profile-card">
            <div className="profile-top">
              <div className="photo-frame">
                <img src="/profile.png" alt="Portrait of Keerthivasan R V" loading="eager" fetchPriority="high" />
              </div>
              <div>
                <div className="profile-name">Keerthivasan R V</div>
                <div className="profile-role">DevOps · Cloud · AI Integration</div>
              </div>
            </div>
            <ul className="info-list">
              <li><span className="info-ic"><GraduationCap size={15} aria-hidden="true" /></span><span><strong>B.Sc (Hons)</strong> Cloud Computing & Big Data — Reva University</span></li>
              <li><span className="info-ic"><Cloud size={15} aria-hidden="true" /></span><span>AWS · Azure · GCP — Docker · Kubernetes · Terraform</span></li>
              <li><span className="info-ic"><Mail size={15} aria-hidden="true" /></span><span>{profile.email}</span></li>
              <li><span className="info-ic"><Linkedin size={15} aria-hidden="true" /></span><span><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile ↗</a></span></li>
            </ul>
            <div className="profile-actions">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mini-btn"><Linkedin size={15} aria-hidden="true" /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="mini-btn"><Github size={15} aria-hidden="true" /> GitHub</a>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
