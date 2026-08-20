import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog | Field Notes on Security & AI',
  description: 'Technical deep-dives into SOC architectures, RAG pipelines, and cybersecurity engineering by Mohammed Muzammil C.',
  alternates: {
    canonical: 'https://muzzyy.me/blog',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main id="main-content" style={{ minHeight: '100vh', padding: '120px 0 80px 0' }}>
      <section>
        <header className="blog-header">
          <ScrollReveal>
            <div className="section-label" style={{ color: 'hsla(160, 80%, 55%, 1)' }}>
              Field Notes
            </div>
            <h1 className="section-title">
              Security &amp; AI Journal
            </h1>
            <p className="about-text" style={{ maxWidth: '700px', marginTop: '-30px' }}>
              Deep-dives into threat detection, machine learning explainability, and production RAG pipelines. Documenting the shift from rule-based SOC to AI-augmented architectures.
            </p>
          </ScrollReveal>
        </header>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className="blog-card" style={{ textDecoration: 'none' }}>
                
                <div className="blog-meta-row">
                  <time dateTime={post.date} className="blog-date">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  <div className="blog-line" />
                </div>
                
                <h2 className="blog-title">
                  {post.title}
                </h2>
                
                <p className="blog-desc">
                  {post.description}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="blog-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
