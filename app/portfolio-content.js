export const portfolioContent = `
  <header class="site-header">
    <nav class="navbar page-shell" id="primaryNavigation" aria-label="Main navigation">
      <a class="brand" href="#home" aria-label="Navodhya Senali, home"><span class="brand-mark">NS</span><span>Navodhya Senali</span></a>
      <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navigationLinks" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <ul class="nav-menu" id="navigationLinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tech-stack">Skills</a></li>
        <li><a href="#contact" class="nav-contact">Contact</a></li>
        <li class="nav-more"><details><summary>More</summary><ul class="nav-submenu"><li><a href="#education">Education</a></li><li><a href="#achievements">Achievements</a></li><li><a href="#competitions">Competitions</a></li><li><a href="#certificates">Certificates</a></li><li><a href="#workshops">Workshops</a></li><li><a href="#letters">Appreciation letters</a></li></ul></details></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero section-shell" id="home" aria-labelledby="hero-title">
      <canvas class="hero-atmosphere" id="heroAtmosphere" aria-hidden="true"></canvas>
      <div class="hero-copy" data-parallax="0.012">
        <p class="eyebrow"><span class="eyebrow-dot"></span> SOFTWARE ENGINEERING UNDERGRADUATE</p>
        <h1 id="hero-title">Navodhya Senali <span class="hero-role"><span>Software Engineering Undergraduate</span><span class="hero-typed-line">Exploring <span id="typing-text" aria-label="Full-stack enthusiast, backend enthusiast, AI/ML enthusiast, research enthusiast, and project management enthusiast">Full-stack enthusiast</span><span class="typing-cursor" aria-hidden="true"></span></span></span></h1>
        <p class="hero-intro">Curious about technology and always learning, I explore full-stack and backend development through hands-on projects, alongside interests in AI/ML and research. I’m currently seeking a software engineering internship where I can contribute, collaborate, and keep learning.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projects">View Projects <span aria-hidden="true">→</span></a>
          <a class="button button-secondary" href="#contact">Contact Me</a>
          <a class="cv-link" href="https://drive.google.com/file/d/1gFP0EaGWlXJphlHhQJXIz7M2z2SdJvAT/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-socials" aria-label="Social profiles">
          <a href="https://github.com/senali2001/" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/navodhya-senali-85a40b332/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="mailto:navodhyasenali@gmail.com">Email <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="hero-visual" data-parallax="-0.018">
        <div class="portrait-frame"><img src="/images/senali.PNG" alt="Navodhya Senali" class="hero-portrait"></div>
        <div class="portrait-caption"><span class="status-dot"></span><span>Open to software engineering internships</span></div>
        <div class="hero-orbit hero-orbit-one"></div><div class="hero-orbit hero-orbit-two"></div>
      </div>
      <a class="scroll-cue" href="#about"><span aria-hidden="true">↓</span> SCROLL TO EXPLORE</a>
    </section>

    <section class="content-section section-shell" id="about" aria-labelledby="about-title">
      <div class="section-heading"><p class="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">Building thoughtfully.<br><span>Learning continuously.</span></h2></div>
      <div class="about-layout">
        <div class="about-copy"><p class="lead-copy">I’m a third-year Software Engineering undergraduate at NSBM Green University with a strong foundation in full-stack development across Java, JavaScript, C#, and Python.</p><p>I have hands-on experience designing, building, and integrating REST APIs across frontend and backend systems, with a focus on secure, well-structured code. Alongside my technical work, I hold active leadership roles within the IEEE community at NSBM Green University. I’m seeking an internship where I can apply my skills, collaborate with experienced teams, and continue growing as an engineer.</p></div>
        <div class="highlight-grid" aria-label="Portfolio highlights">
          <article class="highlight-card"><span class="highlight-index">01</span><h3>Software Engineering</h3><p>Third-year undergraduate at NSBM Green University.</p></article>
          <article class="highlight-card"><span class="highlight-index">02</span><h3>Full-stack &amp; AI</h3><p>Hands-on projects spanning software, AI, healthcare, and retail.</p></article>
          <article class="highlight-card"><span class="highlight-index">03</span><h3>IEEE community</h3><p>Active leadership roles within the NSBM IEEE community.</p></article>
          <article class="highlight-card"><span class="highlight-index">04</span><h3>Internship seeking</h3><p>Looking to contribute and grow with a software engineering team.</p></article>
        </div>
      </div>
    </section>

    <section class="content-section section-shell education-section" id="education" aria-labelledby="education-title">
      <div class="section-heading"><p class="eyebrow">EDUCATION</p><h2 id="education-title">My academic journey</h2></div>
      <div class="education-layout">
        <div class="education-image"><img src="/images/edu.jpeg" alt="Education journey"></div>
        <div class="education-list">
          <article class="education-card"><span class="timeline-date">Since 2023</span><div><h3>BSc (Honors) in Software Engineering</h3><p class="education-place">NSBM Green University</p><p>Currently pursuing my degree, with a focus on full-stack development, backend systems, agile practices, database management, and problem-solving. Applying knowledge through practical software projects.</p></div></article>
          <article class="education-card"><span class="timeline-date">Since 2022</span><div><h3>GCE Advanced Level — Physical Science</h3><p class="education-place">St. Mary’s Convent, Matara</p><p>Combined Mathematics: B &nbsp;·&nbsp; Chemistry: B &nbsp;·&nbsp; Physics: C</p></div></article>
        </div>
      </div>
    </section>

    <section class="content-section section-shell projects-section" id="projects" aria-labelledby="projects-title">
      <div class="section-heading section-heading-row"><div><p class="eyebrow">SELECTED WORK</p><h2 id="projects-title">Featured projects</h2><p class="section-description">A selection of individual and collaborative work from my portfolio.</p></div><div class="project-controls"><button class="project-carousel-button" id="projectsPrevious" type="button" aria-label="Scroll to previous projects">←</button><button class="project-carousel-button" id="projectsNext" type="button" aria-label="Scroll to more projects">→</button></div></div>
      <div class="project-carousel" aria-label="Featured project cards"><div class="project-track" id="projectGrid">
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper"><img src="/images/chatbot.avif" alt="Stella AI-powered adaptive interviewer project" loading="lazy"></div><div class="project-card-body"><div><p class="project-card-subtitle">INDIVIDUAL PROJECT</p><h3 class="project-card-title">Stella</h3><p class="project-card-desc">An AI-powered adaptive interviewer featuring adaptive questioning, speech-based emotion analysis, semantic answer evaluation, scoring, and intelligent interview feedback.</p><ul class="project-tech-pills" aria-label="Technologies"><li class="tech-pill">Python</li><li class="tech-pill">PyTorch</li><li class="tech-pill">FastAPI</li><li class="tech-pill">React</li><li class="tech-pill">Whisper</li></ul></div><div class="project-links"><a class="project-github-btn" href="https://github.com/senali2001/Stella---AI-Powered-Adaptive-Interviewer" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper"><img src="/images/ERP Retail.jpg" alt="SmartStore retail ERP project" loading="lazy"></div><div class="project-card-body"><div><p class="project-card-subtitle">INDIVIDUAL PROJECT · 2026</p><h3 class="project-card-title">SmartStore</h3><p class="project-card-desc">A retail management system with role-based access control, POS functionality, secure REST APIs, and PDF invoices. Also explores Docker and CI/CD.</p><ul class="project-tech-pills" aria-label="Technologies"><li class="tech-pill">Spring Boot</li><li class="tech-pill">Next.js</li><li class="tech-pill">PostgreSQL</li><li class="tech-pill">Docker</li><li class="tech-pill">JWT</li></ul></div><div class="project-links"><a class="project-github-btn" href="https://github.com/senali2001/SmartStore-Retail_ERP" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a class="project-demo-btn" href="https://smart-store-retail-erp.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper"><img src="/images/mind care.png" alt="Mind Care mental healthcare platform" loading="lazy"></div><div class="project-card-body"><div><p class="project-card-subtitle">GROUP PROJECT · 2026</p><h3 class="project-card-title">Mind Care</h3><p class="project-card-desc">A Flutter mobile app and Flask backend supporting multiple user roles, secure communication, patient monitoring, and AI-assisted risk analysis and scoring.</p><ul class="project-tech-pills" aria-label="Technologies"><li class="tech-pill">Flutter</li><li class="tech-pill">Dart</li><li class="tech-pill">Firebase</li><li class="tech-pill">Python</li><li class="tech-pill">Flask</li></ul></div><div class="project-links"><a class="project-github-btn" href="https://github.com/sadithaboxrec/Mental-HealthCare-Application_Project" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper"><img src="/images/ares.png" alt="Ares AI chatbot project" loading="lazy"></div><div class="project-card-body"><div><p class="project-card-subtitle">AI CHATBOT</p><h3 class="project-card-title">Ares</h3><p class="project-card-desc">A chatbot built with Python and FastAPI, a Next.js frontend, and MongoDB for conversational data.</p><ul class="project-tech-pills" aria-label="Technologies"><li class="tech-pill">Python</li><li class="tech-pill">FastAPI</li><li class="tech-pill">Next.js</li><li class="tech-pill">MongoDB</li><li class="tech-pill">API</li></ul></div><div class="project-links"><a class="project-github-btn" href="https://github.com/senali2001/Basic-Chatbot" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a class="project-demo-btn" href="https://ares-basic-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper"><img src="/images/medi.png" alt="Nova Hospital management system" loading="lazy"></div><div class="project-card-body"><div><p class="project-card-subtitle">GROUP PROJECT · 2024</p><h3 class="project-card-title">Nova Hospital</h3><p class="project-card-desc">A hospital management solution for patients, doctors, and appointments. My contributions: backend database integration, the responsive homepage, and CRUD operations for hospital records.</p><ul class="project-tech-pills" aria-label="Technologies"><li class="tech-pill">Java</li><li class="tech-pill">JSP</li><li class="tech-pill">Java Servlets</li><li class="tech-pill">MySQL</li><li class="tech-pill">Bootstrap</li></ul></div><div class="project-links"><a class="project-github-btn" href="https://github.com/senali2001/Hospital-Management-System" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper"><img src="/images/tourism.jpg" alt="RoyalBidz real-time online auction platform" loading="lazy"></div><div class="project-card-body"><div><p class="project-card-subtitle">GROUP PROJECT · 2025</p><h3 class="project-card-title">RoyalBidz</h3><p class="project-card-desc">An online auction platform with live bidding, auction management, secure login, and role-based access control. My contribution: the payment page across frontend and backend.</p><ul class="project-tech-pills" aria-label="Technologies"><li class="tech-pill">ASP.NET Core</li><li class="tech-pill">C#</li><li class="tech-pill">React</li><li class="tech-pill">MySQL</li><li class="tech-pill">SignalR</li></ul></div><div class="project-links"><a class="project-github-btn" href="https://github.com/induwara-dissanayake/RoyalBidz/" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper project-artwork" aria-hidden="true"><span>M&amp;S</span><span>Mathematics &amp; Statistics Circle</span></div><div class="project-card-body"><div><p class="project-card-subtitle">WEBSITE CONTRIBUTION</p><h3 class="project-card-title">Mathematics &amp; Statistics Circle</h3><p class="project-card-desc">I contributed to the About Us page of the Mathematics and Statistics Circle website.</p></div><div class="project-links"><a class="project-demo-btn" href="https://mathscircle.nsbm.ac.lk/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a></div></div></div></article>
        <article class="project-card"><div class="project-card-container"><div class="project-image-wrapper project-artwork" aria-hidden="true"><span>senali.me</span><span>Personal portfolio</span></div><div class="project-card-body"><div><p class="project-card-subtitle">PERSONAL WEBSITE</p><h3 class="project-card-title">Personal Portfolio</h3><p class="project-card-desc">My personal portfolio website.</p></div><div class="project-links"><a class="project-demo-btn" href="http://www.senali.me/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a></div></div></div></article>
      </div></div><p class="project-carousel-status" id="projectsStatus" aria-live="polite">8 projects</p>
    </section>

    <section class="content-section section-shell skills-section" id="tech-stack" aria-labelledby="skills-title">
      <div class="section-heading"><p class="eyebrow">TOOLS OF THE TRADE</p><h2 id="skills-title">Skills &amp; technologies</h2><p class="section-description">Technologies and tools from my existing portfolio.</p></div>
      <div class="skills-groups">
        <article class="skill-group"><h3>Languages</h3><ul class="skill-list"><li>Java</li><li>JavaScript</li><li>Python</li><li>C#</li><li>PHP</li><li>Dart</li><li>C++</li><li>C</li></ul></article>
        <article class="skill-group"><h3>Frontend</h3><ul class="skill-list"><li>Next.js</li><li>React</li><li>Flutter</li><li>Tailwind CSS</li><li>HTML</li></ul></article>
        <article class="skill-group"><h3>Backend &amp; APIs</h3><ul class="skill-list"><li>Spring Boot</li><li>ASP.NET Core</li><li>Node.js</li><li>Express.js</li><li>Java Servlets</li><li>REST API</li></ul></article>
        <article class="skill-group"><h3>Data</h3><ul class="skill-list"><li>PostgreSQL</li><li>Oracle</li><li>PL/SQL</li><li>MongoDB</li><li>MySQL</li><li>Firebase</li></ul></article>
        <article class="skill-group"><h3>Tools &amp; platforms</h3><ul class="skill-list"><li>Git</li><li>GitHub</li><li>Azure</li><li>Postman</li><li>Jira</li><li>Docker</li><li>CI/CD</li></ul></article>
        <article class="skill-group"><h3>Development tools</h3><ul class="skill-list"><li>VS Code</li><li>IntelliJ IDEA</li><li>Visual Studio</li><li>NetBeans</li><li>Code Blocks</li></ul></article>
      </div>
    </section>

    <section class="content-section section-shell achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div class="section-heading"><p class="eyebrow">MILESTONES &amp; INVOLVEMENT</p><h2 id="achievements-title">Achievements &amp; involvement</h2></div>
      <div class="achievement-grid">
        <article class="achievement-card"><span class="achievement-number">01</span><h3>Competition participation</h3><p>Participated in coding and innovation competitions including AlgoXplore, Ideathon, and Brainwave, developing problem-solving and teamwork skills.</p><a href="#competitions">Explore competition records <span aria-hidden="true">→</span></a></article>
        <article class="achievement-card"><span class="achievement-number">02</span><h3>Leadership in IEEE NSBM</h3><p>Active in the IEEE community at NSBM, contributing to student engagement, technical learning, and project collaborations.</p></article>
        <article class="achievement-card"><span class="achievement-number">03</span><h3>Academic &amp; technical growth</h3><p>Building practical software projects across full-stack development, AI, healthcare, and retail while continuing to develop technical skills.</p><a href="#projects">Browse selected projects <span aria-hidden="true">→</span></a></article>
      </div>
    </section>

    <section class="content-section section-shell records-section" id="competitions" aria-labelledby="competitions-title">
      <div class="section-heading"><p class="eyebrow">COMPETITIONS</p><h2 id="competitions-title">Competition certificates</h2></div>
      <div class="record-grid competition-grid">
        <figure class="record-card"><img src="/certificates/techmaths 1st place- team mathsqade, stem competition.jpeg" alt="TechMaths STEM competition first-place certificate" loading="lazy"><figcaption><strong>TechMath Competition</strong><span>1st place · Team MathsQade</span></figcaption></figure>
        <figure class="record-card"><img src="/certificates/Green xtreme - 2nd place- competion.jpeg" alt="Green Xtreme competition second-place certificate" loading="lazy"><figcaption><strong>Green Xtreme</strong><span>2nd place</span></figcaption></figure>
        <figure class="record-card"><img src="/certificates/AlgoXplore competition.png" alt="AlgoXplore competition certificate" loading="lazy"><figcaption><strong>AlgoXplore</strong><span>Competition participation</span></figcaption></figure>
        <figure class="record-card"><img src="/certificates/ideathon -competetion.png" alt="Ideathon competition certificate" loading="lazy"><figcaption><strong>Ideathon</strong><span>Competition participation</span></figcaption></figure>
        <figure class="record-card"><img src="/certificates/jpuraxtreme_2_Participation_certificate-242- competition_page-0001.jpg" alt="JpuraXtreme participation certificate" loading="lazy"><figcaption><strong>JpuraXtreme</strong><span>Competition participation</span></figcaption></figure>
        <figure class="record-card"><img src="/certificates/brainwave competion.jpg" alt="Brainwave competition certificate" loading="lazy"><figcaption><strong>Brainwave</strong><span>Competition participation</span></figcaption></figure>
        <figure class="record-card"><img src="/certificates/coderally competetion.jpg" alt="Coderally competition certificate" loading="lazy"><figcaption><strong>Coderally</strong><span>Competition participation</span></figcaption></figure>
      </div>
    </section>

    <section class="content-section section-shell records-section" id="certificates" aria-labelledby="certificates-title">
      <div class="section-heading"><p class="eyebrow">LEARNING &amp; CREDENTIALS</p><h2 id="certificates-title">Certificates</h2></div>
      <div class="record-grid certificate-grid">
        <figure class="record-card"><img src="/certificates/oracle proffetional advanced it course certification.jpeg" alt="Oracle Professional Advanced IT course certificate" loading="lazy"><figcaption><strong>Oracle Professional Advanced IT Course</strong></figcaption></figure>
        <figure class="record-card"><img src="/certificates/Agile Scrum Master certificate_page-0001.jpg" alt="Agile Scrum Master certificate" loading="lazy"><figcaption><strong>Agile Scrum Master</strong></figcaption></figure>
        <figure class="record-card"><img src="/certificates/python fundimentals certificate_page-0001.jpg" alt="Python Fundamentals certificate" loading="lazy"><figcaption><strong>Python Fundamentals</strong></figcaption></figure>
        <figure class="record-card"><img src="/certificates/navigate github copilote certificate_page-0001.jpg" alt="GitHub Copilot certificate" loading="lazy"><figcaption><strong>GitHub Copilot</strong></figcaption></figure>
        <figure class="record-card"><img src="/certificates/2024 STEM Summit Certificate of Participation workshop_page-0001.jpg" alt="2024 STEM Summit participation certificate" loading="lazy"><figcaption><strong>2024 STEM Summit</strong></figcaption></figure>
        <figure class="record-card"><img src="/certificates/cybersecurity shield 3.0 sliit workshop.png" alt="Cybersecurity Shield 3.0 certificate" loading="lazy"><figcaption><strong>Cybersecurity Shield 3.0</strong></figcaption></figure>
      </div>
    </section>

    <section class="content-section section-shell records-section" id="workshops" aria-labelledby="workshops-title">
      <div class="section-heading"><p class="eyebrow">CONTINUOUS LEARNING</p><h2 id="workshops-title">Workshops</h2></div>
      <div class="record-grid workshop-grid">
        <article class="workshop-card"><img src="/certificates/road to legacy workshop.png" alt="Road to Legacy workshop certificate" loading="lazy"><div class="workshop-content"><h3>Road to Legacy</h3><p>Explored leadership, innovation, and long-term impact in the tech industry.</p></div></article>
        <article class="workshop-card"><img src="/certificates/industry connect session with cms.jpeg" alt="Industry Connect with CMS certificate" loading="lazy"><div class="workshop-content"><h3>Industry Connect with CMS</h3><p>Learned about working in a real-world IT company.</p></div></article>
        <article class="workshop-card"><img src="/certificates/Figmate figma workshop.png" alt="Figma Design workshop certificate" loading="lazy"><div class="workshop-content"><h3>Figma Design Workshop</h3><p>Developed UI/UX thinking and prototyping skills with modern design workflows.</p></div></article>
        <article class="workshop-card"><img src="/certificates/cybersecurity shield 3.0 sliit workshop.png" alt="Cybersecurity Shield 3.0 workshop certificate" loading="lazy"><div class="workshop-content"><h3>Cybersecurity Shield 3.0</h3><p>Learned key principles of digital security, safe practices, and cyber awareness.</p></div></article>
        <article class="workshop-card"><img src="/certificates/math lab workshop.jpg" alt="Math Lab workshop certificate" loading="lazy"><div class="workshop-content"><h3>Math Lab Workshop</h3><p>Strengthened analytical and problem-solving capabilities using technical tools.</p></div></article>
        <article class="workshop-card"><img src="/certificates/create chatbot workshop_page-0001.jpg" alt="Chatbot workshop certificate" loading="lazy"><div class="workshop-content"><h3>Chatbot Workshop</h3><p>Explored practical chatbot concepts and AI interaction flow design.</p></div></article>
      </div>
    </section>

    <section class="content-section section-shell letters-section" id="letters" aria-labelledby="letters-title">
      <div class="section-heading"><p class="eyebrow">RECOGNITION</p><h2 id="letters-title">Appreciation letters</h2><p class="section-description">Recognition for competition participation and a website contribution.</p></div>
      <div class="letter-filters" role="group" aria-label="Filter appreciation letters"><button class="letter-filter-btn active" type="button" data-filter="all" aria-pressed="true">All letters</button><button class="letter-filter-btn" type="button" data-filter="competition" aria-pressed="false">Competition</button><button class="letter-filter-btn" type="button" data-filter="organization" aria-pressed="false">Organization</button></div>
      <div class="letter-grid" id="lettersGrid">
        <article class="letter-card" data-category="competition"><div class="letter-card-heading"><span>COMPETITION</span><span aria-hidden="true">01</span></div><h3>AlgoXplore Appreciation</h3><p>Appreciation letter from HackathonHub for participation and excellence in the AlgoXplore competition.</p><a class="text-link" href="/certificates/appreciation%20letter%20-%20algoexplore.jpeg" target="_blank" rel="noopener noreferrer">View letter <span aria-hidden="true">↗</span></a></article>
        <article class="letter-card" data-category="organization"><div class="letter-card-heading"><span>ORGANIZATION</span><span aria-hidden="true">02</span></div><h3>Mathematics Circle</h3><p>Appreciation letter for contributing to the About Us page of the Statistics and Mathematics Circle website.</p><a class="text-link" href="/certificates/letter%20of%20apreciation%20-%20mathematics%20circle_%20contribute%20to%20develop%20vebsite.jpeg" target="_blank" rel="noopener noreferrer">View letter <span aria-hidden="true">↗</span></a></article>
      </div>
    </section>

    <section class="content-section section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <div class="contact-intro"><p class="eyebrow">LET’S CONNECT</p><h2 id="contact-title">Let’s build<br><span>something meaningful.</span></h2><p>Have a project in mind or a question? Send me a message and I’ll get back to you as soon as possible.</p>
        <div class="contact-details"><a href="mailto:navodhyasenali@gmail.com"><span class="contact-label">EMAIL</span><span>navodhyasenali@gmail.com</span></a><a href="tel:+94 070 55 65 752"><span class="contact-label">PHONE</span><span>+94 070 55 65 752</span></a><p><span class="contact-label">LOCATION</span><span>Sri Lanka</span></p></div>
        <div class="contact-socials"><a href="https://github.com/senali2001" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/navodhya-senali-85a40b332/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
      </div>
      <form class="contact-form" id="contactForm">
        <div class="form-heading"><h3>Send a message</h3><p>Fields marked <span aria-hidden="true">*</span> are required.</p></div>
        <div class="form-row"><div class="form-field"><label for="contactName">Full name <span aria-hidden="true">*</span></label><input id="contactName" type="text" name="name" autocomplete="name" placeholder="Your name" required></div><div class="form-field"><label for="contactEmail">Email address <span aria-hidden="true">*</span></label><input id="contactEmail" type="email" name="email" autocomplete="email" placeholder="you@example.com" required></div></div>
        <div class="form-field"><label for="contactSubject">Subject <span aria-hidden="true">*</span></label><input id="contactSubject" type="text" name="subject" placeholder="What would you like to discuss?" required></div>
        <div class="form-field"><label for="contactMessage">Message <span aria-hidden="true">*</span></label><textarea id="contactMessage" name="message" rows="5" placeholder="Write your message..." required></textarea></div>
        <button class="button button-primary form-submit" type="submit"><span id="submitText">Send Message</span><span aria-hidden="true">→</span></button>
        <p id="formMessage" class="form-message" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>
  <footer class="site-footer"><div class="page-shell"><a class="brand" href="#home"><span class="brand-mark">NS</span><span>Navodhya Senali</span></a><p>Software Engineering Undergraduate · Sri Lanka</p><a href="#home" class="back-to-top">Back to top ↑</a></div></footer>
`;
