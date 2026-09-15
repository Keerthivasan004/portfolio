import { useState } from 'react';
import { Linkedin, Github, Download, Send, Loader2 } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'err', text: 'Please fill in name, email and message.' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setStatus({ type: 'ok', text: 'Message received — I’ll reply within 24–48h. Thank you!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      // Graceful fallback when API is not running (e.g. static preview)
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ type: 'ok', text: 'API offline — opened your email client instead. Your draft is ready to send.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="block" id="contact">
      <div className="wrap contact-wrap">
        <div style={{ textAlign: 'center' }}>
          <SectionHeading kicker="// contact.init" title="Get In Touch" />
        </div>
        <div className="contact-card reveal">
          <p style={{ color: '#9aa7bd', fontSize: '.9rem', lineHeight: 1.75 }}>
            Open to entry-level DevOps / Cloud roles across Bengaluru, Hyderabad, Chennai & Kochi.
            For opportunities, collaborations, or referrals — my inbox is always open.
          </p>
          <a href={`mailto:${profile.email}`} className="cemail" style={{ marginTop: '1rem' }}>{profile.email}</a>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@company.com" autoComplete="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} placeholder="Hi Keerthivasan, we have a DevOps role…" />
            </div>
            <button className="btn-p" type="submit" disabled={sending} style={{ justifyContent: 'center' }}>
              {sending ? <Loader2 size={16} className="spin" /> : <Send size={16} />}
              {sending ? ' Sending…' : ' Send Message'}
            </button>
            {status.text ? <div className={`form-msg ${status.type}`} role="status">{status.text}</div> : null}
          </form>

          <div className="clinks">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="cl"><Linkedin size={14} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="cl"><Github size={14} /> GitHub</a>
            <a href={profile.resumeUrl} download className="cl"><Download size={14} /> Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
