import { useEffect, useState } from 'react';

export function useTyped(words, typeSpeed = 75, deleteSpeed = 40, holdTime = 1600) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] || '');
      return;
    }
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      const current = words[word % words.length];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, holdTime);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    };
    timer = setTimeout(tick, 500);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [words, typeSpeed, deleteSpeed, holdTime]);
  return text;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('krv-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) { /* ignore */ }
    return document.documentElement.getAttribute('data-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('krv-theme', theme); } catch (e) { /* ignore */ }
  }, [theme]);

  // Follow OS changes only until the user picks explicitly
  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem('krv-theme'); } catch (e) { /* ignore */ }
    if (saved) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => setTheme(e.matches ? 'light' : 'dark');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

export function useReveal() {
  useEffect(() => {
    const els = () => Array.from(document.querySelectorAll('.reveal:not(.vis)'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els().forEach((el) => io.observe(el));
    // Re-scan shortly after mount for late-painted content
    const t = setTimeout(() => els().forEach((el) => io.observe(el)), 600);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
}
