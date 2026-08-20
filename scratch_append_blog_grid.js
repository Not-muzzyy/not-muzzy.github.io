const fs = require('fs');
const css = `

/* ── BLOG SECTION ── */
.blog-header {
  margin-bottom: 64px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  text-decoration: none;
  transition: all 0.4s var(--ease);
  position: relative;
  overflow: hidden;
  height: 100%;
}

.blog-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, hsla(160, 80%, 55%, 0.1), transparent 50%);
  opacity: 0;
  transition: opacity 0.5s var(--ease);
}

.blog-card:hover {
  background: var(--surface-3);
  border-color: hsla(160, 80%, 55%, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.blog-card:hover::before {
  opacity: 1;
}

.blog-meta-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
}

.blog-date {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-dim);
}

.blog-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.blog-title {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
  transition: color 0.4s var(--ease);
}

.blog-card:hover .blog-title {
  color: hsla(160, 80%, 55%, 1);
}

.blog-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 32px;
  flex: 1;
  position: relative;
  z-index: 2;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  position: relative;
  z-index: 2;
}

.blog-tag {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-dim);
}

/* ── BLOG POST DETAIL ── */
.blog-post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px clamp(24px, 6vw, 80px) 80px;
}

.blog-back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-dim);
  text-decoration: none;
  margin-bottom: 48px;
  transition: color 0.3s ease;
}

.blog-back-link:hover {
  color: hsla(160, 80%, 55%, 1);
}

.blog-post-header {
  margin-bottom: 64px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.blog-post-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  color: var(--text);
  margin-bottom: 24px;
}
`;
fs.appendFileSync('c:/Users/vizxe/Downloads/not-muzzyy.github.io/src/app/globals.css', css);
console.log('Appended blog styles');
