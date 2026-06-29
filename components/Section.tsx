import React from 'react';
import type { BioSection } from '@/lib/data';

interface SectionProps {
  section: BioSection;
}

export default function Section({ section }: SectionProps) {
  const { title, titleColor, content } = section;

  function renderContent() {
    if (content.type === 'paragraph') {
      return <p style={styles.paragraph}>{content.text}</p>;
    }

    if (content.type === 'list') {
      return (
        <ul style={styles.list}>
          {content.items.map((item, i) => (
            <li key={i} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      );
    }

    if (content.type === 'mixed') {
      return (
        <>
          {content.blocks.map((block, i) => {
            if (block.kind === 'paragraph') {
              return (
                <p key={i} style={styles.paragraph}>
                  {block.text}
                </p>
              );
            }
            return (
              <ul key={i} style={styles.list}>
                {block.items.map((item, j) => (
                  <li key={j} style={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          })}
        </>
      );
    }

    return null;
  }

  return (
    <div style={styles.section}>
      <div style={styles.titleRow}>
        <span style={{ ...styles.titleBar, backgroundColor: titleColor }} />
        <h2 style={{ ...styles.title, color: titleColor }}>{title}</h2>
      </div>
      <div style={styles.body}>{renderContent()}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    marginBottom: '1.75rem',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '0.7rem',
  },
  titleBar: {
    width: '4px',
    height: '20px',
    borderRadius: '2px',
    flexShrink: 0,
  },
  title: {
    fontSize: '1rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  body: {
    paddingLeft: '14px',
    color: '#c0c0d4',
    fontSize: '0.92rem',
  },
  paragraph: {
    marginBottom: '0.6rem',
    lineHeight: '1.75',
  },
  list: {
    paddingLeft: '1.2em',
    marginBottom: '0.4rem',
  },
  listItem: {
    marginBottom: '0.35rem',
    lineHeight: '1.7',
  },
};
