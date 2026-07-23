import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-label">// 01 &mdash; about</div>
      <h2 className="section-title">Who I Am</h2>
      <ScrollReveal>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Final-year <strong>BCA student</strong> at Nandi Institute of
              Management &amp; Science, Bellary (VSKUB). I build at the
              intersection of <strong>cybersecurity</strong> and{' '}
              <strong>machine learning</strong> &mdash; tools that protect, tools
              that think.
            </p>
            <p>
              Currently leading <strong>EduSathi</strong>, an AI study companion
              for Indian university students. Previously shipped a{' '}
              <strong>Phishing Detector</strong> (0.97 accuracy) and{' '}
              <strong>ResumeAI</strong> &mdash; both live on Streamlit Cloud.
            </p>
            <p>
              Practicing on <strong>TryHackMe</strong> and{' '}
              <strong>HackTheBox</strong>. Targeting CEH &amp; CompTIA Security+.
              Hackathon participant at <strong>Chakravyuha 3.0</strong>, BITM
              Bellary.
            </p>
          </div>
          <div>
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-num">0.97</div>
                <div className="stat-label">Phishing Accuracy</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">4+</div>
                <div className="stat-label">Live Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">AI/Cloud Certs</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">SOC</div>
                <div className="stat-label">Target Role</div>
              </div>
            </div>
            <ScrollReveal className="">
              <div className="github-stats">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api?username=not-muzzyy&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=00ff41&icon_color=00ff41&text_color=c8ffc8"
                  style={{ width: '100%', maxWidth: 520 }}
                  alt="GitHub Stats"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/00ff41/not-muzzyy"
                  style={{ width: '100%', maxWidth: 520, marginTop: 14 }}
                  alt="GitHub Contributions"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=not-muzzyy&bg_color=050a05&color=00ff41&line=00cc33&point=00ff41&hide_border=true"
                  style={{ width: '100%', maxWidth: 520, marginTop: 14 }}
                  alt="GitHub Activity Graph"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
