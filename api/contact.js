import { addMessage } from './_lib/data.js';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const recent = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 30;
  const arr = recent.get(ip) || [];
  const fresh = arr.filter(t => now - t < windowMs);
  if (fresh.length >= max) return false;
  fresh.push(now);
  recent.set(ip, fresh);
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (!rateLimit(ip)) return res.status(429).json({ error: 'Too many requests' });

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
    ip
  };

  addMessage(entry);
  console.log(`[contact] ${entry.name} <${entry.email}>: ${entry.message.slice(0, 120)}`);
  res.status(201).json({ ok: true, message: 'Thanks — your message has been received.' });
}