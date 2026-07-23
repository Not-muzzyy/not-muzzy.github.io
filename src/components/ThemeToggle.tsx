'use client';

export default function ThemeToggle() {
  const toggle = () => {
    document.body.classList.toggle('deeper-dark');
  };

  return (
    <button id="theme-toggle" title="Toggle deeper dark" onClick={toggle}>
      <i className="fa-solid fa-circle-half-stroke" />
    </button>
  );
}
