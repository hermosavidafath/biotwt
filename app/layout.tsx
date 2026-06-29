import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BioPage — Share your Twitter/X bio',
  description: 'A minimal, aesthetic bio page creator for Twitter/X users. Share your about me, DNI, side notes and more.',
  openGraph: {
    title: 'BioPage',
    description: 'Share your Twitter/X bio in style.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
