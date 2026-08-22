export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Personal Portfolio. Built with React & Vite.</p>
        <div className="footer-links">
          <a href="https://github.com 0k0la-immaculate">
          </a>
          
          <a href="#about">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}