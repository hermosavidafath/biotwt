import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BioPage — Share your Twitter/X bio',
};

export default function HomePage() {
  return (
    <main style={styles.main}>
      {/* Nav */}
      <nav style={styles.nav}>
        <span style={styles.logo}>
          <span style={styles.logoDot}>✦</span> BioPage
        </span>
        <Link href="/example" style={styles.navLink}>
          See Example
        </Link>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.badge}>For Twitter/X users</div>
        <h1 style={styles.heroTitle}>
          Your bio,{' '}
          <span style={styles.heroAccent}>beautifully displayed</span>
        </h1>
        <p style={styles.heroSub}>
          A minimal, dark-themed page to share everything about you — About Me,
          DNI, Side Notes, and more. No account needed.
        </p>
        <div style={styles.heroCta}>
          <Link href="/example" style={styles.btnPrimary}>
            View Example Bio
          </Link>
          <a
            href="https://github.com"
            style={styles.btnSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={styles.features}>
        {features.map((f) => (
          <div key={f.title} style={styles.featureCard}>
            <span style={styles.featureIcon}>{f.icon}</span>
            <h3 style={styles.featureTitle}>{f.title}</h3>
            <p style={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Section preview */}
      <section style={styles.previewSection}>
        <h2 style={styles.previewHeading}>Sections you can add</h2>
        <div style={styles.sectionPills}>
          {sectionTypes.map((s) => (
            <span
              key={s.label}
              style={{ ...styles.pill, borderColor: s.color, color: s.color }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* CTA card */}
      <section style={styles.ctaCard}>
        <p style={styles.ctaText}>
          Want to see what a full bio looks like?
        </p>
        <Link href="/example" style={styles.btnPrimary}>
          Open @audy&apos;s example page →
        </Link>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>Built with Next.js · Deployable to Vercel for free</span>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: '🌙',
    title: 'Dark & Aesthetic',
    desc: 'A carefully crafted dark theme that looks great on any screen.',
  },
  {
    icon: '🔗',
    title: 'Shareable Link',
    desc: 'Every bio page lives at /username — easy to drop in your Twitter bio.',
  },
  {
    icon: '🎨',
    title: 'Colored Sections',
    desc: 'Each section has its own color — white, red, gold, orange and more.',
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    desc: 'Looks perfect on phones, tablets, and desktops.',
  },
  {
    icon: '⚡',
    title: 'No Login Needed',
    desc: 'Static pages — blazing fast, no auth, no drama.',
  },
  {
    icon: '🛠️',
    title: 'Easy to Extend',
    desc: 'Built with Next.js 14 and TypeScript. Add your own sections easily.',
  },
];

const sectionTypes = [
  { label: 'About Me', color: '#e8e8f0' },
  { label: 'DNI', color: '#f7768e' },
  { label: 'Side Note', color: '#e0af68' },
  { label: 'Important to Read', color: '#ff9e64' },
  { label: 'Interests', color: '#9ece6a' },
  { label: 'Credits', color: '#7aa2f7' },
  { label: 'Custom', color: '#bb9af7' },
];

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#111111',
    color: '#e8e8f0',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 32px',
    borderBottom: '1px solid #1e1e2e',
    maxWidth: '960px',
    margin: '0 auto',
    width: '100%',
  },
  logo: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#e8e8f0',
    letterSpacing: '-0.02em',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  logoDot: {
    color: '#bb9af7',
    fontSize: '0.9rem',
  },
  navLink: {
    fontSize: '0.85rem',
    color: '#7aa2f7',
    textDecoration: 'none',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 24px 60px',
    maxWidth: '680px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#bb9af7',
    border: '1px solid #2a1e3e',
    backgroundColor: '#1a1428',
    borderRadius: '999px',
    padding: '4px 14px',
    marginBottom: '24px',
    fontWeight: 600,
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '16px',
    letterSpacing: '-0.03em',
    color: '#f0f0fa',
  },
  heroAccent: {
    color: '#bb9af7',
  },
  heroSub: {
    fontSize: '1rem',
    color: '#7a7a96',
    lineHeight: 1.75,
    marginBottom: '36px',
  },
  heroCta: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-block',
    backgroundColor: '#bb9af7',
    color: '#111',
    padding: '10px 22px',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '0.88rem',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    transition: 'opacity 0.15s',
  },
  btnSecondary: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: '#9090a8',
    padding: '10px 22px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.88rem',
    textDecoration: 'none',
    border: '1px solid #2a2a3e',
    transition: 'border-color 0.15s',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '16px',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 24px 60px',
  },
  featureCard: {
    backgroundColor: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderRadius: '12px',
    padding: '20px',
  },
  featureIcon: {
    fontSize: '1.5rem',
    display: 'block',
    marginBottom: '10px',
  },
  featureTitle: {
    fontSize: '0.9rem',
    fontWeight: 700,
    marginBottom: '6px',
    color: '#e8e8f0',
  },
  featureDesc: {
    fontSize: '0.82rem',
    color: '#7a7a96',
    lineHeight: 1.65,
  },
  previewSection: {
    textAlign: 'center',
    padding: '0 24px 60px',
  },
  previewHeading: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#5a5a72',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  sectionPills: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
  },
  pill: {
    display: 'inline-block',
    fontSize: '0.8rem',
    fontWeight: 600,
    padding: '5px 16px',
    borderRadius: '999px',
    border: '1px solid',
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  ctaCard: {
    maxWidth: '500px',
    margin: '0 auto 80px',
    backgroundColor: '#1a1428',
    border: '1px solid #2a1e3e',
    borderRadius: '12px',
    padding: '32px 28px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  ctaText: {
    fontSize: '1rem',
    color: '#9090a8',
  },
  footer: {
    textAlign: 'center',
    padding: '24px',
    borderTop: '1px solid #1e1e2e',
    fontSize: '0.75rem',
    color: '#3a3a52',
  },
};
