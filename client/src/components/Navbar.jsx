import { useEffect, useState } from 'react';
import { Menu, X, Download, FileDown, Sun, Moon } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio.js';
import { useTheme } from '../hooks/hooks.js';

function ThemeButton({ theme, onToggle, label }) {
  const isDark = theme === 'dark';
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={!isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      {label ? <span style={{ fontSize: '.8rem', fontWeight: 600 }}>{label}</span> : null}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const secs = document.querySelectorAll('main section[id]');
      let cur = 'home';
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open ]);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Primary">
        <div className="nav-inner">
          <a href="#home" className="logo" aria-label="Keerthivasan R V — home">KRV<em>.</em>dev</a>
          <div className="nav-right">
            <ul className="nav-links">
              {navLinks.map((l) => {
                const id = l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a href={l.href} aria-current={active === id ? 'true' : undefined} className={active === id ? 'active' : ''}>{l.label}</a>
                  </li>
                );
              })}
              <li>
                <a className="nav-cta" href={profile.resumeUrl} download>
                  <FileDown size={14} /> Resume
                </a>
              </li>
            </ul>
            <ThemeButton theme={theme} onToggle={toggleTheme} />
            <button
              className="hamburger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{l.label}</a>
        ))}
        <a href={profile.resumeUrl} download onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          <Download size={15} /> Download Resume
        </a>
        <div className="mobile-theme-row">
          <span>{theme === 'dark' ? 'Dark theme' : 'Light theme'} — tap to switch</span>
          <ThemeButton theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </>
  );
}
