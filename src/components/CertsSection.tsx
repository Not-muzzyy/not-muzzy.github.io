import ScrollReveal from './ScrollReveal';

interface Cert {
  icon: string;
  pending?: boolean;
  date: string;
  title: string;
  sub: string;
  status: string;
  statusPending?: boolean;
}

const certs: Cert[] = [
  {
    icon: 'fa-brands fa-google',
    date: '2024 — 2025',
    title: 'Google Cloud Cybersecurity',
    sub: 'Security fundamentals, threat analysis, cloud defense',
    status: 'COMPLETED',
  },
  {
    icon: 'fa-solid fa-robot',
    date: '2026',
    title: 'HuggingFace AI Agents',
    sub: 'Building and deploying autonomous AI agents',
    status: 'COMPLETED',
  },
  {
    icon: 'fa-solid fa-brain',
    date: '2026',
    title: 'Anthropic — AI Fluency + Claude 101 + Claude Code',
    sub: 'AI literacy, Claude API, agentic coding workflows',
    status: 'COMPLETED',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    pending: true,
    date: 'Targeting 2026',
    title: 'CEH — Certified Ethical Hacker',
    sub: 'EC-Council — In progress',
    status: 'IN PROGRESS',
    statusPending: true,
  },
  {
    icon: 'fa-solid fa-lock',
    pending: true,
    date: 'Targeting 2026',
    title: 'CompTIA Security+',
    sub: 'Industry-standard security certification',
    status: 'IN PROGRESS',
    statusPending: true,
  },
];

export default function CertsSection() {
  return (
    <section id="certs">
      <div className="section-label">// 04 &mdash; certifications</div>
      <h2 className="section-title">Credentials</h2>
      <ScrollReveal>
        <div className="cert-grid">
          {certs.map((c) => (
            <div className="cert-card" key={c.title}>
              <div className={`cert-icon${c.pending ? ' pending' : ''}`}>
                <i className={c.icon} />
              </div>
              <div>
                <div className="cert-date">{c.date}</div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-sub">{c.sub}</div>
                <span
                  className={`cert-badge-tag${c.statusPending ? ' pending' : ''}`}
                >
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
