'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

const CMD_DATA: Record<string, string> = {
  help: `<div class="line-green">Available commands:</div><div>&nbsp;&nbsp;about &nbsp;&nbsp;&mdash; Who is Muzammil?</div><div>&nbsp;&nbsp;skills &nbsp;&mdash; Tech stack overview</div><div>&nbsp;&nbsp;projects &mdash; Active projects</div><div>&nbsp;&nbsp;contact &mdash; Get in touch</div><div>&nbsp;&nbsp;clear &nbsp;&nbsp;&mdash; Clear terminal</div>`,
  about: `<div class="line-white">Muzammil C</div><div>Final-year BCA @ NIMS Bellary (VSKUB)</div><div>Cybersecurity + ML developer</div><div>Targeting: SOC Analyst / ML Engineer</div><div class="line-green">Status: Open to opportunities</div>`,
  skills: `<div class="line-green">Core Skills:</div><div>Languages &rarr; Python, JS, Bash, SQL</div><div>AI/ML &rarr; RAG, Scikit-learn, Groq, Pandas</div><div>Security &rarr; SIEM, Phishing Detection, Linux</div><div>Tools &rarr; Git, Streamlit, Google Cloud</div>`,
  projects: `<div class="line-green">Active Projects:</div><div>[LIVE] Phishing Detector &mdash; 0.97 accuracy</div><div>[LIVE] ResumeAI &mdash; ATS resume checker</div><div>[WIP] &nbsp;EduSathi &mdash; RAG study companion</div><div>[RES] &nbsp;Mini-SIEM AI &mdash; SOC log analysis</div>`,
  contact: `<div class="line-green">Contact:</div><div>Email &nbsp;&rarr; mohammedmuzammil643@gmail.com</div><div>GitHub &rarr; github.com/not-muzzy</div><div>LinkedIn &rarr; linkedin.com/in/muzzammilc7</div>`,
};

export default function CommandTerminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([
    '<div class="line-green">Muzammil C :: Portfolio Terminal v1.0</div>',
    '<div>Type <span class="line-green">help</span> to see available commands.</div>',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const val = (e.target as HTMLInputElement).value.trim().toLowerCase();
    (e.target as HTMLInputElement).value = '';

    const echo = `<span class="line-green">visitor@muzammil:~$</span> ${val}`;

    if (val === 'clear') {
      setHistory(['<div class="line-green">Terminal cleared.</div>']);
      return;
    }

    const newLines = [echo];

    if (CMD_DATA[val]) {
      newLines.push(CMD_DATA[val]);
    } else if (val !== '') {
      newLines.push(
        `<span class="line-red">Command not found: ${val}</span> &mdash; type <span class="line-green">help</span>`
      );
    }

    setHistory((prev) => [...prev, ...newLines]);
  };

  return (
    <>
      <button
        id="term-btn"
        title="Open terminal"
        onClick={() => setOpen((o) => !o)}
      >
        <i className="fa-solid fa-terminal" />
      </button>

      <div id="cmd-terminal" className={open ? 'open' : ''}>
        <div className="cmd-header">
          <span className="cmd-header-title">// TERMINAL &mdash; TYPE help</span>
          <button className="cmd-close" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div id="cmd-output" ref={outputRef}>
          {history.map((html, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>
        <div className="cmd-input-row">
          <span className="cmd-prompt">visitor@muzammil:~$</span>
          <input
            id="cmd-input"
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck={false}
            placeholder="type a command..."
            onKeyDown={handleKey}
          />
        </div>
      </div>
    </>
  );
}
