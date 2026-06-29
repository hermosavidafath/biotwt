import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.root}>
      <div style={styles.card}>
        <span style={styles.code}>404</span>
        <h1 style={styles.title}>Page not found</h1>
        <p style={styles.desc}>
          This bio page doesn&apos;t exist yet. Maybe it&apos;s waiting to be created.
        </p>
        <Link href="/" style={styles.btn}>
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#111111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  card: {
    backgroundColor: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderRadius: '12px',
    padding: '48px 40px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  code: {
    display: 'block',
    fontSize: '3rem',
    fontWeight: 800,
    color: '#2a2a3e',
    lineHeight: 1,
    marginBottom: '12px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#e8e8f0',
    marginBottom: '10px',
  },
  desc: {
    fontSize: '0.85rem',
    color: '#5a5a72',
    lineHeight: 1.65,
    marginBottom: '28px',
  },
  btn: {
    display: 'inline-block',
    color: '#7aa2f7',
    fontSize: '0.85rem',
    textDecoration: 'none',
  },
};
