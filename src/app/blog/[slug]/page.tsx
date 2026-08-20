import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import ScrollReveal from '@/components/ScrollReveal';

type Params = Promise<{ slug: string }>;

// Generate static routes for all blog posts at build time
export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

// Dynamically generate metadata for each blog post
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `https://muzzyy.me/blog/${resolvedParams.slug}/`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: ['Mohammed Muzammil C'],
      }
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const resolvedParams = await params;
  
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  return (
    <main id="main-content">
      <article className="blog-post-container">
        <div>
          <Link href="/blog/" className="blog-back-link">
            <i className="fa-solid fa-arrow-left" style={{ fontSize: '10px' }} /> Back to Journal
          </Link>
        </div>

        <header className="blog-post-header">
          <div className="blog-meta-row" style={{ marginBottom: '24px' }}>
            <time dateTime={post.date} className="blog-date" style={{ color: 'hsla(160, 80%, 55%, 0.8)' }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <div className="blog-line" />
          </div>

          <h1 className="blog-post-title">
            {post.title}
          </h1>

          {post.tags && post.tags.length > 0 && (
            <div className="blog-tags" style={{ marginTop: '24px' }}>
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose-blog">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
