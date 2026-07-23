const messages = [
  'ALERT: Suspicious login attempt blocked',
  'SCAN: Network anomaly detected on port 8080',
  'LOG: Firewall rules synced successfully',
  'AI: Phishing domain classification updated',
  'STATUS: SOC monitoring active',
  'INFO: TLS certificate validation passed',
  'WARN: Unusual outbound traffic pattern flagged',
];

export default function ThreatTicker() {
  // Duplicate messages for seamless scrolling
  const doubled = [...messages, ...messages];

  return (
    <div id="threat-ticker">
      <div className="ticker-label">LIVE FEED</div>
      <div className="ticker-track">
        {doubled.map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </div>
    </div>
  );
}
