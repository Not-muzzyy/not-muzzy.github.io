export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        M<span>.</span>C
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certs">Certs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
