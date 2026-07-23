export default function ToolkitSection() {
  return (
    <section id="toolkit">
      <div className="section-label">// 02B — security toolkit</div>
      <h2 className="section-title">Tools I Use</h2>

      <div className="skills-grid">
        {/* Security Learning */}
        <div className="skill-group">
          <div className="skill-group-title">
            <i className="fa-solid fa-shield-halved" /> Security Learning
          </div>
          <div className="skill-tags">
            <span className="tag">HackTheBox</span>
            <span className="tag">TryHackMe</span>
            <span className="tag red">Linux (Learning)</span>
          </div>
        </div>

        {/* AI / ML */}
        <div className="skill-group">
          <div className="skill-group-title">
            <i className="fa-solid fa-brain" /> AI / ML Stack
          </div>
          <div className="skill-tags">
            <span className="tag">Python</span>
            <span className="tag">Scikit-learn</span>
            <span className="tag">Groq API</span>
          </div>
        </div>

        {/* Development */}
        <div className="skill-group">
          <div className="skill-group-title">
            <i className="fa-solid fa-code" /> Development
          </div>
          <div className="skill-tags">
            <span className="tag">VS Code</span>
            <span className="tag">Streamlit</span>
            <span className="tag">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}
