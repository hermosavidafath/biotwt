'use client';

import React, { useState } from 'react';
import Section from './Section';
import type { BioPage } from '@/lib/data';

interface BioCardProps {
  bio: BioPage;
}

export default function BioCard({ bio }: BioCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div style={styles.wrapper}>
      {/* Top bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarLeft}>
          <span style={styles.dot} />
          <span style={styles.dot} />
          <span style={styles.dot} />
        </div>
        <span style={styles.slugLabel}>biopage.vercel.app/{bio.slug}</span>
        <button
          onClick={handleCopy}
          style={styles.copyBtn}
          aria-label="Copy link"
          title="Copy link"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Link
            </>
          )}
        </button>
      </div>

      {/* Card body */}
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div
            style={{
              ...styles.avatar,
              backgroundColor: bio.avatarColor ?? '#7aa2f7',
            }}
          >
            {bio.avatarInitials ?? bio.username[0].toUpperCase()}
          </div>
          <div style={styles.headerText}>
            <h1 style={styles.displayName}>{bio.displayName ?? bio.username}</h1>
            <span style={styles.username}>@{bio.username}</span>
            {bio.pronouns && (
              <span style={styles.pronounsBadge}>{bio.pronouns}</span>
            )}
            {bio.tagline && <p style={styles.tagline}>{bio.tagline}</p>}
          </div>
        </div>

        <div style={styles.divider} />

        {/* Sections */}
        <div style={styles.sections}>
          {bio.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {/* Footer meta */}
        <div style={styles.footer}>
          <span style={styles.footerItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4, verticalAlign: 'middle' }}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {bio.views.toLocaleString()} views
          </span>
          <span style={styles.footerDot}>·</span>
          <span style={styles.footerItem}>Published {bio.createdAt}</span>
          <span style={styles.footerDot}>·</span>
          <span style={styles.footerItem}>Edited {bio.updatedAt}</span>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: '100%',
    maxWidth: '680px',
    margin: '0 auto',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#16162a',
    borderRadius: '12px 12px 0 0',
    padding: '10px 16px',
    borderBottom: '1px solid #2a2a3e',
  },
  topBarLeft: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: '#2a2a3e',
    display: 'inline-block',
  },
  slugLabel: {
    fontSize: '0.75rem',
    color: '#5a5a72',
    fontFamily: 'monospace',
    letterSpacing: '0.02em',
  },
  copyBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    background: '#2a2a3e',
    color: '#9090a8',
    border: 'none',
    borderRadius: '6px',
    padding: '4px 10px',
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s',
    fontFamily: 'inherit',
  },
  card: {
    backgroundColor: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderTop: 'none',
    borderRadius: '0 0 12px 12px',
    padding: '28px 28px 20px',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '18px',
    marginBottom: '20px',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#111',
    flexShrink: 0,
    letterSpacing: '-1px',
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    paddingTop: '4px',
  },
  displayName: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#e8e8f0',
    lineHeight: 1.2,
  },
  username: {
    fontSize: '0.85rem',
    color: '#7aa2f7',
    fontFamily: 'monospace',
  },
  pronounsBadge: {
    display: 'inline-block',
    fontSize: '0.7rem',
    color: '#9090a8',
    border: '1px solid #2a2a3e',
    borderRadius: '999px',
    padding: '2px 8px',
    marginTop: '2px',
    width: 'fit-content',
  },
  tagline: {
    fontSize: '0.82rem',
    color: '#7a7a96',
    marginTop: '4px',
    fontStyle: 'italic',
  },
  divider: {
    height: '1px',
    backgroundColor: '#2a2a3e',
    marginBottom: '22px',
  },
  sections: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: '4px',
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #2a2a3e',
  },
  footerItem: {
    fontSize: '0.72rem',
    color: '#5a5a72',
    display: 'flex',
    alignItems: 'center',
  },
  footerDot: {
    color: '#3a3a52',
    fontSize: '0.72rem',
  },
};
