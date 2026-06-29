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
    slug: 'eun.code',
    username: 'reeunseok',
    displayName: 'rea',
    avatarInitials: 'E',
    avatarColor: '#f7768e',
    sections: [
      {
        id: 'about',
        title: 'About Me',
        titleColor: '#e8e8f0',
        content: {
          type: 'paragraph',
          text: "21 | cs stud | dolf & briize ♡ just here to enjoy my faves. i like keeping this account peaceful, but i won't stay quiet if something crosses the line.",
        },
      },
      {
  id: 'dni',
  title: 'DNI',
  titleColor: '#f7768e',
  content: {
    type: 'list',
    items: ['eunseok akgaes', 'eunseok haters','hard shippers (if you take ships seriously or hate on other ships)'],
  },
},

    ],
    createdAt: '2026-06-30',
    updatedAt: new Date().toISOString().split('T')[0],
    views: 0,
  },
];

export function getBioPage(slug: string): BioPage | undefined {
  return bioPages.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return bioPages.map((p) => p.slug);
}
