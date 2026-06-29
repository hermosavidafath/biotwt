import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BioCard from '@/components/BioCard';
import { getBioPage, getAllSlugs } from '@/lib/data';

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
      {/* Bio card */}
      <main style={styles.main}>
        <BioCard bio={bio} />
      </main>
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
    paddingTop: '40px',
  },
  main: {
    width: '100%',
    maxWidth: '720px',
    padding: '0 16px',
    flex: 1,
  },
};
