'use client';

import { useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const logs = [
  { tag: 'INFO', cls: 'info', msg: 'Firewall rules synced successfully' },
  { tag: 'WARN', cls: 'warn', msg: 'Suspicious login attempt blocked — IP 192.168.1.247' },
  { tag: 'ALERT', cls: 'alert', msg: 'Phishing domain detected and quarantined' },
  { tag: 'AI', cls: 'ai', msg: 'Threat classification model updated — accuracy 0.97' },
  { tag: 'INFO', cls: 'info', msg: 'TLS handshake validated on port 443' },
  { tag: 'WARN', cls: 'warn', msg: 'Unusual outbound traffic pattern flagged' },
  { tag: 'ALERT', cls: 'alert', msg: 'Brute-force attempt detected — rate limiting applied' },
  { tag: 'AI', cls: 'ai', msg: 'Anomaly detection: network baseline deviation 14%' },
];

export default function SOCPanel() {
  const consoleRef = useRef<HTMLDivElement>(null);
  const logIdxRef = useRef(0);

  useEffect(() => {
    const el = consoleRef.current;
    if (!el) return;

    function addLog() {
      const l = logs[logIdxRef.current % logs.length];
      const now = new Date();
      const ts = now.toTimeString().slice(0, 8);
      const line = document.createElement('div');
      line.className = 'log-line';
      line.innerHTML = `<span class="log-time">[${ts}]</span><span class="log-tag ${l.cls}">[${l.tag}]</span><span class="log-msg">${l.msg}</span>`;
      el!.appendChild(line);
      if (el!.children.length > 5) el!.removeChild(el!.firstChild!);
      logIdxRef.current++;
    }

    addLog();
    const interval = setInterval(addLog, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="soc" style={{ position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: 20 }}>
          // SOC &mdash; system status
        </div>
        <div className="soc-grid">
          <div className="soc-card">
            <span className="soc-card-label">Portfolio Status</span>
            <span className="soc-card-status online">
              <span className="soc-dot g" />ONLINE
            </span>
          </div>
          <div className="soc-card">
            <span className="soc-card-label">Threat Monitoring</span>
            <span className="soc-card-status secure">
              <span className="soc-dot b" />SECURE
            </span>
          </div>
          <div className="soc-card">
            <span className="soc-card-label">Development</span>
            <span className="soc-card-status active">
              <span className="soc-dot y" />ACTIVE
            </span>
          </div>
          <div className="soc-card">
            <span className="soc-card-label">Open To Work</span>
            <span className="soc-card-status online">
              <span className="soc-dot g" />YES
            </span>
          </div>
        </div>
        <ScrollReveal>
          <div className="threat-console" ref={consoleRef} />
        </ScrollReveal>
      </div>
    </div>
  );
}
