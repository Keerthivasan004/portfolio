import { useState } from 'react';
import { Linkedin, Github, Download, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { SectionHeading } from './About.jsx';

const MAX_LEN = 2000;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === 'message' ? value.slice(0, MAX_LEN) : value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!emailRe.test(form.email.trim())) er.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) er.message = 'Tell me a little more (10+ characters).';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });
    if (!validate()) {
      setStatus({ type: 'err', text: 'Please fix the highlighted fields.' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to send. Please try again.');
      setStatus({ type: 'ok', text: 'Message received — I’ll reply within 24–48 hours. Thank you!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'err', text: `${err.message} You can also reach me at ${profile.email}.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="block" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-wrap">
        <div id="contact-title"><SectionHeading center kicker="Contact" title="Let’s build something reliable." sub="For entry-level DevOps / Cloud roles, collaborations, or referrals." /></div>
        <div className="contact-card reveal">
          <p className="contact-lead">For opportunities, collaborations, or referrals — my inbox is always open.</p>
          <a href={`mailto:${profile.email}`} className="cemail">{profile.email}</a>

          <form className="contact-form" onSubmit={onSubmit} noValidate aria-label="Contact form">
            <div className="form-row">
              <div className="field">
                <label htmlFor="cf-name">Name <small aria-hidden="true">· required</small></label>
                <input id="cf-name" name="name" value={form.name} onChange={onChange} placeholder="Your name"
                  autoComplete="name" required aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'cf-name-err' : undefined} />
                {errors.name ? <span id="cf-name-err" className="form-msg err" role="alert">{errors.name}</span> : null}
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email <small aria-hidden="true">· required</small></label>
                <input id="cf-email" name="email" type="email" value={form.email} onChange={onChange}
                  placeholder="you@company.com" autoComplete="email" required
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'cf-email-err' : undefined} />
                {errors.email ? <span id="cf-email-err" className="form-msg err" role="alert">{errors.email}</span> : null}
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message <small aria-hidden="true">· required</small></label>
              <textarea id="cf-message" name="message" rows={5} value={form.message} onChange={onChange}
                placeholder="Hi Keerthivasan — we have a DevOps role you might be a fit for…"
                required aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'cf-message-err' : 'cf-count'} />
              <span id="cf-count" className="char-count" aria-live="polite">{form.message.length}/{MAX_LEN}</span>
              {errors.message ? <span id="cf-message-err" className="form-msg err" role="alert">{errors.message}</span> : null}
            </div>
            <button className="btn-p" type="submit" disabled={sending} style={{ justifyContent: 'center' }}>
              {sending ? <Loader2 size={16} className="spin" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
              {sending ? 'Sending…' : 'Send Message'}
            </button>
            {status.text ? (
              <div className={`form-msg ${status.type}`} role="status" style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                {status.type === 'ok'
                  ? <CheckCircle2 size={16} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                  : <AlertCircle size={16} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />}
                <span>{status.text}</span>
              </div>
            ) : null}
          </form>

          <div className="clinks">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="cl"><Linkedin size={14} aria-hidden="true" /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="cl"><Github size={14} aria-hidden="true" /> GitHub</a>
            <a href={profile.resumeUrl} download className="cl"><Download size={14} aria-hidden="true" /> Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
