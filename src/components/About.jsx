export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">
          I am a passionate frontend developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning complex problems into simple, beautiful interface designs and writing clean, scalable code.
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Frontend Development</h3>
            <p>Creating interactive layouts using modern JavaScript and React.</p>
          </div>
          <div className="highlight-card">
            <h3>Responsive Design</h3>
            <p>Ensuring web applications look great across all mobile and desktop devices.</p>
          </div>
        </div>
        <div className="about-action">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}