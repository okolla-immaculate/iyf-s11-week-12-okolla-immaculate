export default function Projects() {
  const projectList = [
    {
      title: 'Personal Developer Portfolio',
      description: 'A responsive single-page web portfolio showcasing my skills, projects, and contact info.',
      tech: ['React', 'Vite', 'CSS3'],
      github: 'https://github.com/okolla-immaculate',
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}