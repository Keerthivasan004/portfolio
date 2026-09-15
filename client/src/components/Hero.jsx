import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, GraduationCap, Cloud, Linkedin } from 'lucide-react';
import { profile, stats } from '../data/portfolio.js';
import { useTyped } from '../hooks/hooks.js';

export default function Hero() {
  const typed = useTyped(profile.typed);

  return (
    <section className="hero" id="home">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="wrap hero-grid">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="eyebrow"><span className="pulse" /> Open to DevOps & Cloud Roles</span>
          <h1 className="hero-name">Keerthivasan<span className="c">.R.V</span></h1>
          <div className="role-pills">
            {profile.roles.map((r) => (
              <span key={r} className="rpill">{r}</span>
            ))}
          </div>
          <p className="typed-line" aria-live="polite">
            Specialising in <strong>{typed}</strong><span className="cursor" />
          </p>
          <p className="hero-desc">{profile.headline} Strong problem-solver who streamlines workflows and supports scalable applications.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn-p">View Projects <ArrowRight size={16} /></a>
            <a href="#contact" className="btn-g">Get in Touch</a>
            <a href={profile.resumeUrl} download className="btn-g">Resume</a>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-n">{s.value}</div>
                <div className="stat-l">{s.label}</div>
                <div className="stat-s">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="eyebrow"><span className="pulse" /> Open to Work</span>
          <div className="photo-frame">
            <img src="/profile.png" alt="Portrait of Keerthivasan R V" loading="eager" />
          </div>
          <div className="info-card">
            <div className="irow"><GraduationCap size={16} color="#00d4ff" /><span><strong>B.Sc (Hons)</strong> Cloud Computing & Big Data — Reva University</span></div>
            <div className="irow"><MapPin size={16} color="#00d4ff" /><span>{profile.location}</span></div>
            <div className="irow"><Cloud size={16} color="#00d4ff" /><span>AWS · Azure · GCP</span></div>
            <div className="irow"><Mail size={16} color="#00d4ff" /><span>{profile.email}</span></div>
            <div className="irow"><Linkedin size={16} color="#00d4ff" /><span><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile ↗</a></span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
