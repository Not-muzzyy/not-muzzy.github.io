import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="section-label">// 05 &mdash; contact</div>
      <h2 className="section-title">Get In Touch</h2>
      <ScrollReveal>
        <div className="contact-grid">
          <div className="contact-desc">
            Open to{' '}
            <strong style={{ color: 'var(--green)' }}>SOC analyst</strong> roles,{' '}
            <strong style={{ color: 'var(--green)' }}>ML internships</strong>, and{' '}
            <strong style={{ color: 'var(--green)' }}>collaboration</strong> on
            security or AI projects. Currently in final semester &mdash; available
            from mid-2025.
            <br />
            <br />
            If you&apos;re building something interesting, let&apos;s talk.
          </div>
          <div className="contact-links">
            <a
              href="https://linkedin.com/in/muzzammilc7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fa-brands fa-linkedin" />
              <span className="cl-label">LinkedIn</span>
              linkedin.com/in/muzzammilc7
            </a>
            <a
              href="https://github.com/not-muzzyy"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fa-brands fa-github" />
              <span className="cl-label">GitHub</span>
              github.com/not-muzzy
            </a>
            <a
              href="mailto:mohammedmuzammil643@gmail.com"
              className="contact-link"
            >
              <i className="fa-solid fa-envelope" />
              <span className="cl-label">Email</span>
              mohammedmuzammil643@gmail.com
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
