export default function Skills() {
  const skillsList = [
    'HTML5 & CSS3',
    'JavaScript ',
    'React',
    'Vite',
    'Git & GitHub',
    'Effect',
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}