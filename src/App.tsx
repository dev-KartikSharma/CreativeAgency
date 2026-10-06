import { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { ContactModal } from "./components/ContactModal";

const services = [
  {
    num: "01",
    title: "Brand systems",
    detail: "Positioning, identity and visual systems built to stay recognisable everywhere your brand shows up.",
  },
  {
    num: "02",
    title: "Digital experiences",
    detail: "High-impact websites and products where sharp creative direction meets frictionless interaction.",
  },
  {
    num: "03",
    title: "Campaigns",
    detail: "Ideas, content and launch systems designed to earn attention and turn momentum into measurable growth.",
  },
  {
    num: "04",
    title: "Creative technology",
    detail: "Motion, 3D and emerging technology used with purpose—not novelty—to make an experience unforgettable.",
  },
];

const projects = [
  {
    num: "01",
    title: "Colter Media",
    category: "Brand Identity / Guidelines",
    image: `${import.meta.env.BASE_URL}projects/colter-roll.png`,
    isReel: true,
    className: "project-card project-card--wide",
  },
  {
    num: "02",
    title: "New Form",
    category: "Fashion / Digital",
    image:
      "https://images.unsplash.com/photo-1715784337197-70ef917be0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    className: "project-card project-card--portrait",
  },
  {
    num: "03",
    title: "Signal",
    category: "Technology / Identity",
    image:
      "https://images.unsplash.com/photo-1722170225004-929efa1546f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
    className: "project-card project-card--square",
  },
  {
    num: "04",
    title: "Ritual",
    category: "Art / Experience",
    image:
      "https://images.unsplash.com/photo-1664477615410-ee1a7f540a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    className: "project-card project-card--landscape",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="globe" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="46" />
      <ellipse cx="50" cy="50" rx="20" ry="46" />
      <path d="M4 50h92M12 30h76M12 70h76" />
    </svg>
  );
}

function App() {
  const [activeService, setActiveService] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main>
      <div className="ticker" aria-label="Creative services">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" key={group}>
              {Array.from({ length: 4 }).flatMap((_, loopIdx) =>
                ["Brand systems", "Digital experiences", "Campaigns", "Creative technology"].map((item, itemIdx) => (
                  <span key={`${group}-${loopIdx}-${itemIdx}`}>
                    {item}
                    <b>✳</b>
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="hero">
        <div className="hero-meta">
          <span>Creative agency for ambitious brands</span>
          <span>Los Angeles / Working worldwide</span>
        </div>

        <div className="hero-stage">
          <div className="hero-title" aria-label="Make them feel">
            <span>Make</span>
            <span className="hero-title-offset hero-title-outline">them</span>
            <span className="hero-title-accent">feel.</span>
          </div>

          <figure className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1688128320295-2e6eae0bf912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400"
              alt="Figures moving through a dramatic dark space"
            />
            <figcaption>Emotion earns attention / 2026</figcaption>
          </figure>
        </div>

        <div className="hero-bottom">
          <p>
            We turn strategy into identities, experiences and campaigns people can&apos;t scroll past.
          </p>
          <a href="#work" className="text-link">
            See what we mean <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="proof" aria-label="Studio statistics">
        <div className="proof-intro">
          <span>Small team. Loud impact.</span>
          <p>Senior minds, close collaboration and no unnecessary layers between the idea and the work.</p>
        </div>
        {[
          ["3.5M+", "Organic views"],
          ["50+", "Projects shipped"],
          ["15+", "Partners worldwide"],
        ].map(([value, label]) => (
          <div className="proof-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="work" id="work">
        <header className="section-heading">
          <div>
            <span className="eyebrow">02 / Selected obsessions</span>
            <h2>Work that<br /><i>sticks.</i></h2>
          </div>
          <p>
            Identity, digital and campaign work created to live in people&apos;s heads—not just their feeds.
          </p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <a className={project.className} href="#" key={project.title}>
              {project.isReel ? (
                <div className="colter-reel-container">
                  <div className="colter-reel-vignette-top" />
                  <div className="colter-reel-track">
                    <img src={project.image} alt="Colter Media Brand Guidelines Deck" />
                    <img src={project.image} alt="Colter Media Brand Guidelines Deck Repeat" />
                  </div>
                  <div className="colter-reel-vignette-bottom" />
                </div>
              ) : (
                <img src={project.image} alt="" />
              )}
              <div className="project-shade" />
              <span className="project-num">{project.num}</span>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <span className="project-arrow"><ArrowIcon /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="capabilities">
        <div className="capabilities-statement">
          <span className="eyebrow">03 / What we do</span>
          <h2>Sharp<br /><i>thinking.</i></h2>
          <p>
            Strategy finds the tension. Design makes it visible. Technology gives it somewhere to go.
          </p>
          <div className="asterisk" aria-hidden="true">✳</div>
        </div>

        <div className="service-list">
          {services.map((service, index) => {
            const isOpen = activeService === index;
            return (
              <button
                className={`service ${isOpen ? "is-open" : ""}`}
                type="button"
                key={service.num}
                onClick={() => setActiveService(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="service-num">{service.num}</span>
                <span className="service-content">
                  <strong>{service.title}</strong>
                  <span className="service-detail">{service.detail}</span>
                </span>
                <span className="service-toggle">{isOpen ? "−" : "+"}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="principle">
        <span className="eyebrow">04 / Our point of view</span>
        <p>
          Safe work gets<br />
          <span>scrolled past.</span><br />
          We make what sticks.
        </p>
      </section>

      <footer className="contact">
        <div className="contact-top">
          <span>Have an idea worth making real?</span>
          <GlobeIcon />
        </div>
        <a className="contact-title" href="mailto:kartiksharma17012007@gmail.com">
          <span>Let&apos;s</span>
          <span>make it.</span>
        </a>
        <button
          type="button"
          className="contact-button"
          onClick={() => setIsContactOpen(true)}
        >
          <span>Start a project</span>
          <ArrowIcon />
        </button>
        <div className="contact-bottom">
          <a href="mailto:kartiksharma17012007@gmail.com">kartiksharma17012007@gmail.com</a>
          <div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
          <span>© 2026 CM Studio</span>
        </div>
      </footer>

      {/* Inquiry Modal with Connect to Call & DM on Insta */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Inverted Orange Pill Cursor */}
      <CustomCursor />
    </main>
  );
}

export default App;
