export type SectionContent =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'mixed'; blocks: Array<{ kind: 'paragraph'; text: string } | { kind: 'list'; items: string[] }> };

export interface BioSection {
  id: string;
  title: string;
  titleColor: string;
  content: SectionContent;
}

export interface BioPage {
  slug: string;
  username: string;
  displayName?: string;
  avatarInitials?: string;
  avatarColor?: string;
  pronouns?: string;
  tagline?: string;
  sections: BioSection[];
  createdAt: string;
  updatedAt: string;
  views: number;
}

const bioPages: BioPage[] = [
  {
    slug: 'example',
    username: 'audy',
    displayName: 'Audy ✦',
    avatarInitials: 'A',
    avatarColor: '#bb9af7',
    pronouns: 'she/her',
    tagline: 'artist · dreamer · chaotic good',
    sections: [
      {
        id: 'about',
        title: 'About Me',
        titleColor: '#e8e8f0',
        content: {
          type: 'mixed',
          blocks: [
            {
              kind: 'paragraph',
              text: "Hi! I'm Audy, a digital artist and occasional writer living in my own little world. I post mostly about art, games, and whatever's currently consuming my brain at 2am.",
            },
            {
              kind: 'paragraph',
              text: "I'm a big fan of cozy games, gothic aesthetics, and collecting way too many washi tapes. My DMs are open for collabs, kind words, or memes.",
            },
          ],
        },
      },
      {
        id: 'dni',
        title: 'DNI',
        titleColor: '#f7768e',
        content: {
          type: 'mixed',
          blocks: [
            {
              kind: 'paragraph',
              text: 'Please do not interact if you fit any of the following:',
            },
            {
              kind: 'list',
              items: [
                'Proship / comship supporters',
                'NSFW accounts without proper age restriction',
                'Bigots of any kind (racist, homophobic, transphobic, etc.)',
                'NFT / crypto promoters',
                'Under 16 — my content can get heavy sometimes',
              ],
            },
          ],
        },
      },
      {
        id: 'sidenote',
        title: 'Side Note',
        titleColor: '#e0af68',
        content: {
          type: 'list',
          items: [
            'I retweet a LOT — mute my RTs if needed, no hard feelings!',
            'English is not my first language, so sorry for any weird phrasing.',
            'I go on hiatus without warning sometimes. I always come back.',
            'Fanart of my OCs is always welcome and will make me cry happy tears.',
            'I do not take constructive criticism unless I explicitly ask for it.',
          ],
        },
      },
      {
        id: 'important',
        title: 'Important to Read',
        titleColor: '#ff9e64',
        content: {
          type: 'mixed',
          blocks: [
            {
              kind: 'paragraph',
              text: "My art is NOT to be used for AI training datasets, NFTs, or any commercial purpose without explicit written permission. This includes but is not limited to: feeding into generative models, reselling, or using as profile pictures without credit.",
            },
            {
              kind: 'paragraph',
              text: 'Reposting my art with proper credit and a link back is okay. Edits and color palettes require permission first.',
            },
          ],
        },
      },
    ],
    createdAt: '2024-03-10',
    updatedAt: '2024-11-28',
    views: 4821,
  },
];

export function getBioPage(slug: string): BioPage | undefined {
  return bioPages.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return bioPages.map((p) => p.slug);
}
