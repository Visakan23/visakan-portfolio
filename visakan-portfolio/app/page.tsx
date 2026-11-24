
const projects = [
  {
    number: "01",
    title: "AI Financial Tutor",
    category: "AI / FINTECH",
    description:
      "An AI-powered financial learning assistant designed to help gig economy workers understand financial concepts and make informed decisions.",
    tags: ["Generative AI", "Gemini API", "Full Stack"],
    visual: "finance",
  },
  {
    number: "02",
    title: "Manufacturing Process AI",
    category: "AI / PRECISION MANUFACTURING",
    description:
      "An ongoing project exploring how AI can identify process parameters in precision manufacturing.",
    tags: ["Artificial Intelligence", "Process Parameters", "Research"],
    visual: "manufacturing",
  },
  {
    number: "03",
    title: "Desk Helping Bot",
    category: "IOT / HARDWARE",
    description:
      "A desk companion project combining hardware and software to create an interactive desktop assistant.",
    tags: ["Embedded Systems", "Hardware", "Software"],
    visual: "desk",
  },
  {
    number: "04",
    title: "Plant Disease Identification",
    category: "AI / AGRITECH",
    description:
      "An application designed to identify plant diseases and support users in recognising potential plant health problems.",
    tags: ["AI", "Image Analysis", "Application"],
    visual: "plant",
  },
  {
    number: "05",
    title: "Road Damage Tracker",
    category: "FULL STACK / CIVIC TECH",
    description:
      "A road damage reporting and tracking application designed to help document road issues.",
    tags: ["Web Development", "Reporting", "Tracking"],
    visual: "road",
  },
];

const skills = [
  "Generative AI",
  "Gemini API",
  "LLM Integration",
  "Prompt Engineering",
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "JavaScript",
  "HTML & CSS",
  "MongoDB",
  "MySQL",
  "SQL",
  "Java",
  "C",
  "C++",
  "Git & GitHub",
  "Vercel",
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "finance") {
    return (
      <div className="visual visual-finance">
        <div className="visual-window">
          <div className="visual-topline"><span /><span /><span /></div>
          <p className="visual-eyebrow">FINANCIAL OVERVIEW</p>
          <div className="finance-number">₹ 24,850<span> +12.8%</span></div>
          <div className="finance-chart">
            {[34, 52, 43, 70, 58, 84, 65, 94, 74, 100, 82, 90].map(
              (height, i) => (
                <span key={i} style={{ height: `${height}%` }} />
              )
            )}
          </div>
          <div className="visual-bottomline">
            <span>INCOME</span>
            <span>SAVINGS</span>
            <span>EXPENSES</span>
          </div>
        </div>
        <div className="visual-stamp">AI<br />FINANCE</div>
      </div>
    );
  }

  if (type === "manufacturing") {
    return (
      <div className="visual visual-manufacturing">
        <div className="process-label">PROCESS INTELLIGENCE / 01</div>
        <div className="process-flow">
          <div className="process-node">INPUT<br /><b>01</b></div>
          <div className="process-line" />
          <div className="process-node process-active">
            AI MODEL<br /><b>02</b>
          </div>
          <div className="process-line" />
          <div className="process-node">OUTPUT<br /><b>03</b></div>
        </div>
        <div className="manufacturing-grid">
          <span>PARAMETER_01</span><span>ANALYSIS</span>
          <span>PARAMETER_02</span><span>DETECTION</span>
          <span>PARAMETER_03</span><span>OPTIMISATION</span>
        </div>
        <div className="visual-crosshair">+</div>
      </div>
    );
  }

  if (type === "desk") {
    return (
      <div className="visual visual-desk">
        <div className="desk-orbit orbit-one" />
        <div className="desk-orbit orbit-two" />
        <div className="desk-device">
          <div className="device-screen">
            <div className="device-eyes"><i /><i /></div>
            <div className="device-mouth" />
          </div>
          <div className="device-base" />
        </div>
        <p className="desk-caption">
          YOUR DESK COMPANION<span>ONLINE ●</span>
        </p>
      </div>
    );
  }

  if (type === "plant") {
    return (
      <div className="visual visual-plant">
        <div className="plant-scan">
          <div className="plant-leaf leaf-one" />
          <div className="plant-leaf leaf-two" />
          <div className="plant-leaf leaf-three" />
          <div className="scan-corner corner-one" />
          <div className="scan-corner corner-two" />
          <div className="scan-corner corner-three" />
          <div className="scan-corner corner-four" />
        </div>
        <div className="plant-result">
          <span>IMAGE ANALYSIS</span>
          <b>PLANT SCAN</b>
          <div className="scan-progress"><i /></div>
          <small>AI-ASSISTED IDENTIFICATION</small>
        </div>
      </div>
    );
  }

  return (
    <div className="visual visual-road">
      <div className="road-map">
        <div className="map-road road-one" />
        <div className="map-road road-two" />
        <div className="map-road road-three" />
        <div className="map-pin pin-one">!</div>
        <div className="map-pin pin-two">!</div>
        <div className="map-pin pin-three">!</div>
      </div>
      <div className="road-status">
        <span>REPORT / TRACK / RESOLVE</span>
        <b>ROAD MONITORING SYSTEM</b>
        <small>LOCATION-BASED REPORTING</small>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="nav-logo">VT<span>.</span></a>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
        <a href="#contact" className="nav-availability">
          <span /> AVAILABLE FOR OPPORTUNITIES
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>COIMBATORE, INDIA</span>
        </div>

        <div className="hero-layout">
          <div className="hero-content">
            <p className="hero-intro">HELLO, I'M VISAKAN T.</p>
            <h1>
              Building<br />
              <span>intelligent</span><br />
              digital experiences<span className="hero-period">.</span>
            </h1>
            <div className="hero-bottom">
              <p>
                Computer Science undergraduate exploring the intersection of
                artificial intelligence, software development and real-world
                problem solving.
              </p>
              <a href="#work" className="hero-cta">
                EXPLORE MY WORK <span>↘</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-orbit orbit-outer">
              <span className="orbit-dot" />
            </div>
            <div className="portrait-orbit orbit-inner" />
            <div className="portrait-circle">
              <img src="/profile.jpeg" alt="Portrait of Visakan T" />
            </div>
            <div className="portrait-label">
              <span>VISAKAN T.</span>
              <span>AI / FULL STACK</span>
            </div>
          </div>
        </div>

        <div className="hero-index">01 — 05 / SELECTED PROJECTS</div>
      </section>

      {/* PORTFOLIO PROJECTS */}
      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / PORTFOLIO PROJECTS</p>
            <h2>Ideas into<br /><span>applications.</span></h2>
          </div>
          <p className="section-note">
            A collection of projects exploring AI, software, hardware and
            practical problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <ProjectVisual type={project.visual} />
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>/{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="about-section" id="about">
        <p className="eyebrow">02 / ABOUT ME</p>
        <div className="about-content">
          <h2>
            Curious by nature.
            <br />
            <span>Builder by choice.</span>
          </h2>
          <div className="about-description">
            <p>
              I'm Visakan, a Computer Science Engineering undergraduate at
              Kumaraguru College of Technology, Coimbatore.
            </p>
            <p>
              I enjoy building AI-integrated applications, developing
              full-stack solutions and experimenting with technologies that
              solve practical problems.
            </p>
            <p>
              My interests span generative AI, web development, embedded
              systems and emerging technologies.
            </p>
            <a
              href="/resume.pdf"
              download="Visakan_T_Resume.pdf"
              className="resume-button"
            >
              DOWNLOAD RESUME ↗
            </a>
          </div>
        </div>
      </section>

      {/* TECHNICAL TOOLKIT */}
      <section className="skills-section" id="skills">
        <p className="eyebrow">03 / TECHNICAL TOOLKIT</p>
        <div className="skills-heading">
          <h2>Tools I work <span>with.</span></h2>
          <p>
            Technologies and tools I use to explore, build and deploy ideas.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {skill}
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section" id="experience">
        <p className="eyebrow">04 / EXPERIENCE & LEARNING</p>
        <div className="experience-item">
          <div className="experience-date">INTERNSHIP / 01 MONTH</div>
          <div>
            <h3>Software Development Intern</h3>
            <p className="experience-company">KSI Special School</p>
            <p>
              Gathered user requirements and contributed to MOUTH, an
              application-based solution addressing a communication challenge.
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-date">WORKSHOPS & PARTICIPATION</div>
          <div>
            <h3>Continuous Learning</h3>
            <p>
              Drone Mapping Technical Workshop · Build Your Own Mini Chat GPT ·
              Smart India Hackathon 2025 · Technical and communication training.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <p className="eyebrow">05 / GET IN TOUCH</p>
        <h2>
          Have an idea?
          <br />
          <span>Let's connect.</span>
        </h2>
        <a className="contact-email" href="mailto:visakan2306@gmail.com">
          VISAKAN2306@GMAIL.COM ↗
        </a>
        <div className="contact-links">
          <a
            href="https://github.com/Visakan23"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/visakan-t-090827328/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VISAKAN T.</span>
          <span>DESIGNED & BUILT WITH INTENTION.</span>
          <a href="#">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
