# BioPage

A minimal, aesthetic bio page creator for Twitter/X users — inspired by rentry.co. Built with **Next.js 14** (App Router) and **TypeScript**.

## Features

- 🌙 Dark theme (`#111111` background, `#1e1e2e` card)
- 🎨 Colored section headings (white, red, orange, gold...)
- 🔗 Copy-link button on every page
- 📱 Mobile responsive
- ⚡ No login, no auth — fully static pages
- 🚀 Free deployment on Vercel

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Homepage** → `http://localhost:3000`
- **Example bio** → `http://localhost:3000/example`

---

## Adding Your Own Bio Page

Edit `lib/data.ts` and add a new entry to the `bioPages` array:

```ts
{
  slug: 'yourname',           // URL: /yourname
  username: 'yourname',
  displayName: 'Your Name ✦',
  avatarInitials: 'Y',
  avatarColor: '#7aa2f7',    // avatar background color
  pronouns: 'they/them',
  tagline: 'artist · gamer · dreamer',
  sections: [
    {
      id: 'about',
      title: 'About Me',
      titleColor: '#e8e8f0',  // white
      content: {
        type: 'paragraph',
        text: 'Write something about yourself here!',
      },
    },
    {
      id: 'dni',
      title: 'DNI',
      titleColor: '#f7768e',  // red
      content: {
        type: 'list',
        items: ['Bigots', 'Spambots'],
      },
    },
  ],
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  views: 0,
}
```

### Section color suggestions

| Section          | Color     | Hex       |
|------------------|-----------|-----------|
| About Me         | White     | `#e8e8f0` |
| DNI              | Red       | `#f7768e` |
| Side Note        | Gold      | `#e0af68` |
| Important        | Orange    | `#ff9e64` |
| Interests        | Green     | `#9ece6a` |
| Credits          | Blue      | `#7aa2f7` |
| Custom           | Purple    | `#bb9af7` |
| Pinned           | Cyan      | `#7dcfff` |

### Content types

**Paragraph:**
```ts
content: { type: 'paragraph', text: 'Your text here' }
```

**List:**
```ts
content: { type: 'list', items: ['Item 1', 'Item 2'] }
```

**Mixed (paragraph + list):**
```ts
content: {
  type: 'mixed',
  blocks: [
    { kind: 'paragraph', text: 'Intro text...' },
    { kind: 'list', items: ['Item 1', 'Item 2'] },
  ]
}
```

---

## Deploying to Vercel (Free)

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B: GitHub + Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — no config needed

Your bio will be live at `https://your-project.vercel.app/example`

---

## Project Structure

```
bio-page/
├── app/
│   ├── globals.css          # Dark theme global styles
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Landing page
│   ├── not-found.tsx        # 404 page
│   └── [slug]/
│       └── page.tsx         # Dynamic bio page route
├── components/
│   ├── BioCard.tsx          # Full bio card with header + sections
│   └── Section.tsx          # Individual section with colored heading
├── lib/
│   └── data.ts              # In-memory bio page data store
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, SSG
- [TypeScript](https://typescriptlang.org)
- CSS inline styles + `globals.css` — no UI library needed
- Deployable on [Vercel](https://vercel.com) free tier

---

## License

MIT
