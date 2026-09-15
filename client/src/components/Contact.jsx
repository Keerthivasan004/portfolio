import { useState } from 'react';
import { Send, Loader2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { Heading } from './About.jsx';

const MAX_LEN = 2000;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === 'message' ? value.slice(0, MAX_LEN) : value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!emailRe.test(form.email.trim())) er.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) er.message = 'Please write a longer message (10+ characters).';
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
      setStatus({ type: 'ok', text: 'Thanks — your message was sent. I’ll reply within 24–48 hours.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'err', text: `${err.message} You can also reach me at ${profile.email}.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="block" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div id="contact-title">
          <Heading eyebrow="Contact" title="Get in touch."
            sub="For DevOps and Cloud roles, collaborations, or referrals." />
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <div className="email-row">
              <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}</a>
              <button type="button" className={`copy-btn${copied ? ' copied' : ''}`} onClick={copyEmail}
                aria-label="Copy email address">
                {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <dl className="contact-rows">
              <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noreferrer">View profile <ArrowUpRight size={12} aria-hidden="true" /></a></dd></div>
              <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">View repositories <ArrowUpRight size={12} aria-hidden="true" /></a></dd></div>
              <div><dt>Resume</dt><dd><a href={profile.resumeUrl} download>Download PDF</a></dd></div>
            </dl>
          </div>
          <form className="contact-form reveal" onSubmit={onSubmit} noValidate aria-label="Contact form" style={{ ['--d']: '100ms' }}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" value={form.name} onChange={onChange} placeholder="Your name"
                  autoComplete="name" required aria-invalid={errors.name ? 'true' : undefined} />
                {errors.name ? <span className="form-msg err" role="alert">{errors.name}</span> : null}
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" value={form.email} onChange={onChange}
                  placeholder="you@company.com" autoComplete="email" required
                  aria-invalid={errors.email ? 'true' : undefined} />
                {errors.email ? <span className="form-msg err" role="alert">{errors.email}</span> : null}
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" rows={4} value={form.message} onChange={onChange}
                placeholder="Hi Keerthivasan — we’d like to talk about a role…"
                required aria-invalid={errors.message ? 'true' : undefined} />
              <span className="count">{form.message.length}/{MAX_LEN}</span>
              {errors.message ? <span className="form-msg err" role="alert">{errors.message}</span> : null}
            </div>
            <button className="btn-primary" type="submit" disabled={sending}>
              {sending ? <Loader2 size={16} className="spin" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
              {sending ? 'Sending…' : 'Send message'}
            </button>
            {status.text ? <div className={`form-msg ${status.type}`} role="status" style={{ marginTop: 12 }}>{status.text}</div> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
