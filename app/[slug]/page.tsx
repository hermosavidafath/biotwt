import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BioCard from '@/components/BioCard';
import { getBioPage, getAllSlugs } from '@/lib/data';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const bio = getBioPage(params.slug);
  if (!bio) return { title: 'Not Found' };
  return {
    title: `@${bio.username} — BioPage`,
    description: `Bio page for @${bio.username}${bio.tagline ? ` · ${bio.tagline}` : ''}`,
    openGraph: {
      title: `@${bio.username} on BioPage`,
      description: bio.tagline ?? `Bio page for @${bio.username}`,
      type: 'profile',
    },
  };
}

export default function BioPageRoute({ params }: Props) {
  const bio = getBioPage(params.slug);

  if (!bio) {
    notFound();
  }

  return (
    <div style={styles.root}>
      {/* Minimal top nav */}
      <nav style={styles.nav}>
        <Link href="/" style={styles.homeLink}>
          <span style={styles.logoMark}>✦</span>
          <span>BioPage</span>
        </Link>
      </nav>

      {/* Bio card */}
      <main style={styles.main}>
        <BioCard bio={bio} />
      </main>

      <footer style={styles.footer}>
        <Link href="/" style={styles.footerLink}>
          Create your own BioPage →
        </Link>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#111111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nav: {
    width: '100%',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #1a1a2a',
    marginBottom: '32px',
  },
  homeLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#5a5a72',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 600,
    transition: 'color 0.15s',
  },
  logoMark: {
    color: '#bb9af7',
  },
  main: {
    width: '100%',
    maxWidth: '720px',
    padding: '0 16px',
    flex: 1,
  },
  footer: {
    padding: '32px 24px',
    textAlign: 'center',
  },
  footerLink: {
    fontSize: '0.8rem',
    color: '#5a5a72',
    textDecoration: 'none',
  },
};
