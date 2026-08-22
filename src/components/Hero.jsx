function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>OKOLLA IMMACULATE</h1>

        <h> Student doing computer programming.</h>

        <p className="hero-description">
        I am learning on how to use github. javascript.react,express and MongoDB to create web applications and design websites.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;