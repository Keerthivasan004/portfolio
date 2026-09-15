import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio.js';
import { useTheme } from '../hooks/hooks.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => {
      const secs = document.querySelectorAll('main section[id]');
      let cur = 'home';
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 160) cur = s.id;
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
  }, [open]);

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav-inner">
          <a href="#home" className="brand">Keerthivasan R V <span>— DevOps</span></a>
          <div className="nav-right">
            <ul className="nav-links">
              {navLinks.map((l) => {
                const id = l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a href={l.href} aria-current={active === id ? 'true' : undefined} className={active === id ? 'active' : ''}>
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a className="btn-resume" href={profile.resumeUrl} download>
              Resume <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button className="theme-toggle" onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
              {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <button className="hamburger" onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{l.label}</a>
        ))}
        <a href={profile.resumeUrl} download onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Download resume</a>
        <div className="mobile-theme-row">
          <span>{isDark ? 'Dark theme' : 'Light theme'}</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ marginLeft: 0 }}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </>
  );
}
