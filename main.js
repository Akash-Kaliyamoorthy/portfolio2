/* =============================================
   K. AKASH PORTFOLIO — MAIN JAVASCRIPT
   ============================================= */

'use strict';

/* ---- Case Study Data ---- */
const projects = {
  travel: {
    title: 'Travel Tech Platform',
    category: 'UI/UX · Mobile App',
    org: 'Infotact Solutions — Internship',
    image: 'project_travel_tech.jpg',
    imageAlt: 'Travel Tech Platform app interface',
    tags: ['UI/UX Design', 'Mobile App', 'Internship'],
    overview: 'A comprehensive trip planning and navigation platform designed during my internship at Infotact Solutions. The goal was to create a seamless end-to-end experience for travellers planning and navigating complex multi-destination journeys.',
    problem: 'Travellers faced friction when planning trips — fragmented tools, confusing navigation flows, and an overwhelming amount of information presented without clear hierarchy. Users needed a single, intuitive interface that reduced cognitive load at every decision point.',
    process: 'Started with user flow mapping to identify key traveller decision points. Developed low-fidelity wireframes exploring multiple layout approaches, tested hierarchy with peer reviews, and iterated through to high-fidelity screens in Figma. Focused specifically on reducing tap depth and surfacing the right contextual information at each stage of a trip.',
    tools: ['Figma', 'Adobe XD', 'User Flow Mapping', 'Wireframing', 'High-fidelity Prototyping'],
    outcome: '[ADD OUTCOME METRIC] — Designed end-to-end UX flow reducing decision friction for trip planning. [ADD SPECIFIC USABILITY TEST RESULTS IF AVAILABLE]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  nexus: {
    title: 'Nexus Home App',
    category: 'UI/UX · Mobile App',
    org: 'Infotact Solutions — Internship',
    image: 'project_nexus_home.jpg',
    imageAlt: 'Nexus Home smart home control app interface',
    tags: ['UI/UX Design', 'Mobile App', 'Smart Home'],
    overview: 'A smart home control application designed to give users intuitive, centralised control over their home\'s connected devices. Designed at Infotact Solutions with an emphasis on structured layout and strong visual hierarchy.',
    problem: 'Smart home apps often overwhelm users with dense device lists and inconsistent control patterns. The challenge was making control of multiple device types feel unified, scannable, and fast — especially in high-frequency use scenarios like arriving home or setting scenes.',
    process: 'Analysed competing smart home apps to identify common hierarchy failures. Developed a card-based layout system with consistent device control patterns. Created Figma prototypes testing two navigation models — tab-based vs. contextual rooms — before settling on a rooms-first architecture that matched users\' mental models.',
    tools: ['Figma', 'Adobe XD', 'Component Design', 'Interactive Prototyping'],
    outcome: '[ADD OUTCOME METRIC] — Designed structured interface improving navigation clarity across multiple device types. [ADD USABILITY FEEDBACK IF AVAILABLE]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  hypedrop: {
    title: 'HypeDrop — E-commerce App UI',
    category: 'UI/UX · E-commerce',
    org: 'Zaalima Development — Internship',
    image: 'project_hypedrop.jpg',
    imageAlt: 'HypeDrop e-commerce app — accessible product browsing interface',
    tags: ['UI/UX Design', 'E-commerce', 'Accessibility'],
    overview: 'An e-commerce mobile application UI focused specifically on usability and accessibility. Designed during my internship at Zaalima Development, with the goal of making the shopping experience genuinely accessible and conversion-optimised across a broad user base.',
    problem: 'Many e-commerce apps sacrifice accessibility for visual density — small tap targets, poor colour contrast, and cluttered product grids that make it harder for users with different abilities or lower digital literacy to shop with confidence. HypeDrop needed to solve this without feeling "simplified" or reduced in functionality.',
    process: 'Applied WCAG accessibility guidelines from the wireframing stage, not as an afterthought. Designed with minimum 44px tap targets, accessible colour contrast ratios (tested with Figma contrast plugins), and clear visual feedback for all interactive states. Developed a clean product card system that prioritises key decision-making information.',
    tools: ['Figma', 'Adobe XD', 'Accessibility Audit', 'Component System Design'],
    outcome: '[ADD OUTCOME METRIC] — Designed accessible UI improving usability across diverse user segments. [ADD USABILITY TEST RESULTS IF AVAILABLE]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  vitallink: {
    title: 'VitalLink — Healthcare Platform',
    category: 'UI/UX · Healthcare',
    org: 'Zaalima Development — Internship',
    image: 'project_vitallink.jpg',
    imageAlt: 'VitalLink healthcare platform — patient dashboard and scheduling UI',
    tags: ['UI/UX Design', 'Healthcare', 'Accessibility', 'Trust Design'],
    overview: 'A healthcare platform UI designed during my internship at Zaalima Development, focused on creating a trustworthy, accessible interface for patients managing their health data, appointments, and medical records.',
    problem: 'Healthcare UI has an unusually high standard of clarity — because confusing interfaces don\'t just frustrate users, they can cause real harm. The challenge was designing a platform where patients of varying digital literacy feel confident navigating their health information, booking appointments, and understanding their data.',
    process: 'Prioritised trust signals throughout — clear information architecture, consistent iconography, and calm, clinical colour choices that avoid alarm without sacrificing urgency where needed. Mapped out core patient journeys (viewing results, booking appointments, messaging care team) and designed each flow to completion before connecting them. Conducted peer-review usability checks at hi-fi stage.',
    tools: ['Figma', 'Adobe XD', 'Information Architecture', 'User Journey Mapping', 'Accessibility Testing'],
    outcome: '[ADD OUTCOME METRIC] — Designed accessible healthcare UI reducing navigational confusion for patients. [ADD USABILITY RESULTS IF AVAILABLE]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  rubelix: {
    title: 'RubeElix — Brand Identity',
    category: 'Branding · Identity Design',
    org: 'Startup Branding Project',
    image: null,
    imageAlt: null,
    tags: ['Brand Identity', 'Graphic Design', 'Startup'],
    overview: 'A complete brand identity system designed for RubeElix, a startup looking to establish a distinctive visual presence and build meaningful connection with their target audience.',
    problem: 'RubeElix lacked a coherent visual identity — their early materials were inconsistent and failed to communicate their brand personality clearly, resulting in weak audience recognition and low engagement with their content.',
    process: 'Conducted brand discovery sessions to identify core values, target audience, and competitive positioning. Developed logo concepts exploring multiple visual directions before refining the final mark. Built out a complete identity system including logo variations, typography, colour palette, brand voice guidelines, and application templates for social media and marketing materials.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy', 'Typography System', 'Colour Theory'],
    outcome: '30% improvement in audience connection following brand identity implementation. [ADD PROJECT SCREENSHOT — brand guidelines and application visuals]',
    outcomeIsPlaceholder: false,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  aura: {
    title: 'Aura Pvt. Ltd — Brand Identity',
    category: 'Branding · Identity Design',
    org: 'Startup Branding Project',
    image: null,
    imageAlt: null,
    tags: ['Brand Identity', 'Graphic Design', 'Startup'],
    overview: 'A brand identity refresh and visual system designed for Aura Pvt. Ltd, with the goal of strengthening their online presence and increasing customer engagement.',
    problem: 'Aura Pvt. Ltd had an existing brand that wasn\'t resonating with their online audience — engagement metrics were low, and their digital presence lacked the visual consistency and appeal needed to build customer trust and conversion at scale.',
    process: 'Audited existing brand materials and digital presence to identify key inconsistency points. Developed a refined brand identity maintaining elements of brand equity while introducing stronger visual hierarchy, a more cohesive colour system, and modernised typography. Created a comprehensive application system including social media templates, digital marketing assets, and updated brand guidelines.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Brand Audit', 'Social Media Design System'],
    outcome: '30% increase in online customer engagement following brand identity implementation. [ADD PROJECT SCREENSHOT — brand materials and social media applications]',
    outcomeIsPlaceholder: false,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  social: {
    title: 'Social Media Campaign Assets',
    category: 'Graphic Design · Social Media',
    org: 'Academy Innova World — Internship',
    image: null,
    imageAlt: null,
    tags: ['Graphic Design', 'Social Media', 'Campaign'],
    overview: 'A sustained library of social media creatives and campaign assets produced during my internship at Academy Innova World — covering multiple formats, platforms, and campaign themes.',
    problem: 'Producing high-volume social content at quality requires both design system thinking (consistency, template scalability) and creative flexibility (fresh executions that don\'t feel templated). The challenge was building a visual system that enabled fast production without sacrificing brand coherence.',
    process: 'Built a reusable component library and template system in Canva and Photoshop to enable consistent, fast creative production. Designed assets across multiple formats (square, story, landscape) and campaign types. Maintained visual consistency across all touchpoints while adapting tone and composition for different content themes.',
    tools: ['Photoshop', 'Illustrator', 'Canva', 'Premiere Pro'],
    outcome: '[ADD OUTCOME METRIC — engagement data, reach, or campaign performance if available] [ADD PROJECT SCREENSHOT — sample social media creatives]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' }
    ]
  },
  expense: {
    title: 'Daily Expense Tracker',
    category: 'Product Design · Web Development',
    org: 'Personal Project',
    image: null,
    imageAlt: null,
    tags: ['Product Design', 'Web App', 'Full-cycle', 'Personal Project'],
    overview: 'A personal project exploring the complete design-to-code cycle. Built a daily expense tracking web application — from initial product thinking and UX design through to front-end implementation — as a way of strengthening both design and development fluency simultaneously.',
    problem: 'Existing expense tracking apps either over-engineer the data view (dashboards no one actually reads daily) or under-invest in the entry experience (friction-heavy forms that kill habit formation). The goal was to design and build something genuinely usable and quick to interact with every day.',
    process: 'Defined core user jobs-to-be-done: fast expense logging, clear daily/weekly totals, and minimal friction. Sketched wireframes, designed hi-fi screens in Figma, then implemented the design in HTML, CSS, and JavaScript — personally managing the handoff between design intent and code reality. This cross-disciplinary process significantly deepened my appreciation of implementation constraints in design decisions.',
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    outcome: '[ADD OUTCOME METRIC] — Completed full design-to-code cycle end-to-end. [ADD LIVE LINK or GITHUB REPO LINK if available] [ADD PROJECT SCREENSHOT]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'github', label: 'GitHub Link', url: 'https://github.com/Akash-Kaliyamoorthy' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'figma', label: 'Figma Link', url: '#' }
    ]
  }
};

/* ---- Certification Data ---- */
const certs = {
  uiux: {
    title: 'Advanced UI/UX Design Industry Professional',
    company: 'Devsindia',
    image: null,
    description: 'An industry-aligned professional certification covering advanced UI/UX design practice — from research and wireframing through to high-fidelity design and portfolio-ready case study presentation.',
    postUrl: '#'
  },
  aifund: {
    title: 'AI Fundamentals',
    company: 'IBM SkillBuild',
    image: null,
    description: 'Foundational certification covering core artificial intelligence concepts, applications, and ethical considerations — building the AI literacy behind several of my applied AI internship projects.',
    postUrl: '#'
  },
  aws: {
    title: 'Cloud Foundations & Machine Learning',
    company: 'AWS Academy',
    image: null,
    description: 'A foundational course covering cloud computing concepts and introductory machine learning on AWS — supporting the technical side of my design-plus-tech skill set.',
    postUrl: '#'
  },
  flutter: {
    title: 'Mobile App Development using Flutter',
    company: 'Infosys Springboard',
    image: null,
    description: 'A hands-on course in building cross-platform mobile applications with Flutter, connecting UI design decisions directly to real front-end implementation.',
    postUrl: '#'
  },
  databricks: {
    title: 'Databricks for Generative AI Fundamentals',
    company: 'Simplilearn Skillup',
    image: null,
    description: 'An introductory certification on the Databricks platform and its application to generative AI workflows and data pipelines.',
    postUrl: '#'
  },
  dtp: {
    title: 'Diploma in Desktop Publishing',
    company: 'Isysway Technologies',
    image: null,
    description: 'A comprehensive diploma covering desktop publishing and graphic design fundamentals — one of the earliest formal foundations of my graphic design practice.',
    postUrl: '#'
  },
  careeredge: {
    title: 'Career Edge — Young Professional',
    company: 'TCS iON',
    image: null,
    description: 'A professional-readiness certification covering workplace communication, employability skills, and industry professionalism.',
    postUrl: '#'
  }
};

/* ---- Experience Data ---- */
const experiences = {
  infotact: {
    role: 'UI/UX Design Intern',
    company: 'Infotact Solutions',
    duration: '3 Months',
    certImage: null,
    description: 'Designed low- and high-fidelity wireframes for web and mobile applications in Figma, conducting user research and building empathy maps to uncover real user needs. Led the design of the Travel Tech platform, reworking the trip-planning and navigation flow, and shipped the Nexus Home smart-home interface with a strong, structured visual hierarchy. Built interactive prototypes and refined every screen through iterative feedback.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  zaalima: {
    role: 'UI/UX Design Intern',
    company: 'Zaalima Development',
    duration: '3 Months',
    certImage: null,
    description: 'Designed production-ready UI screens for real-world applications using Figma and Adobe Creative Suite. Worked across two products — HypeDrop, an e-commerce app, and VitalLink, a healthcare platform — with a consistent focus on usability and accessibility. Created full user flows, wireframes, and high-fidelity designs aligned with industry standards, collaborating closely with the team to deliver scalable, user-centred solutions.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  academy: {
    role: 'Graphic Designer Intern',
    company: 'Academy Innova World',
    duration: '4 Months',
    certImage: null,
    description: 'Designed social media creatives, posters, and marketing materials using Adobe Photoshop and Illustrator. Developed visually engaging assets aligned with brand identity and campaign goals, delivering creative work within deadline across multiple concurrent campaigns for the studio\'s clients.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  edunet: {
    role: 'AI & Data Analytics Intern',
    company: 'Edunet Foundation — AICTE & Shell Skills4Future',
    duration: '4 Weeks',
    certImage: null,
    description: 'Designed and built an EV Charging Assistant chatbot to help users navigate EV-related queries, implementing conversational logic and structured response handling. Applied AI and data-processing concepts to improve the accuracy and clarity of user interactions.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  vois: {
    role: 'Cybersecurity & Generative AI Intern',
    company: 'VOIS for Tech & Edunet Foundation',
    duration: '4 Weeks',
    certImage: null,
    description: 'Developed an AI-based Network Intrusion Detection System to flag suspicious network activity. Applied machine learning and cybersecurity concepts for anomaly detection, analysing network traffic patterns to improve threat-identification accuracy.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  im1b: {
    role: 'AI for Sustainability Intern',
    company: '1M1B — One Million for One Billion',
    duration: '4 Weeks',
    certImage: null,
    description: 'Applied AI concepts to sustainability challenges including climate change and waste management. Built AI chatbots for problem-solving and user interaction, and worked on mini-projects and case studies integrating AI with real-world environmental solutions.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  logirtha: {
    role: 'Java Development Intern',
    company: 'Logirtha Technologies Pvt. Ltd.',
    duration: '2 Weeks',
    certImage: null,
    description: 'Developed a console-based Student Management System using Core Java, implementing OOP concepts including encapsulation and modular design. Applied exception handling and input validation to improve program stability.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  agnirva: {
    role: 'Software Development Intern',
    company: 'Agnirva',
    duration: '8 Weeks',
    certImage: null,
    description: 'Contributed to a structured Software Capstone Project following SDLC practices, participating in requirement analysis, coding, testing, and debugging phases as part of a collaborative development team.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  },
  armada: {
    role: 'Sensors & IoT Intern',
    company: 'Armada Industrial Automations',
    duration: '2 Weeks',
    certImage: null,
    description: 'Gained hands-on experience with sensors and IoT systems used in industrial automation, working with microcontrollers and embedded systems for data collection and monitoring, and exploring IoT applications in automation and efficiency.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
      { type: 'project', label: 'Project Link', url: '#' }
    ]
  }
};

/* ---- DOM References ---- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-link');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

/* ---- Sticky Navbar ---- */
function handleNavScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ---- Mobile Menu ---- */
function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  requestAnimationFrame(() => {
    mobileMenu.classList.add('open');
  });
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 400);
}

hamburger.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

mobileClose.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ---- Scroll Reveal Animations ---- */
function setupRevealAnimations() {
  const targets = document.querySelectorAll(
    '.section-header, .about-image-col, .about-text-col, ' +
    '.service-card, .project-card, .stat-item, ' +
    '.testimonial-placeholder, .cert-card, .contact-left, ' +
    '.contact-right, .timeline-item, .explore-card, .linkedin-feature'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards in grids
    if (el.classList.contains('project-card') ||
        el.classList.contains('service-card') ||
        el.classList.contains('cert-card') ||
        el.classList.contains('explore-card')) {
      const siblings = Array.from(el.parentElement.children).filter(
        child => child.classList.contains(el.classList[0])
      );
      const idx = siblings.indexOf(el);
      el.classList.add(`reveal-delay-${Math.min(idx + 1, 6)}`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ---- Modal / Case Study ---- */
const linkIcons = {
  figma: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M5.5 1a2.25 2.25 0 0 0 0 4.5h2.25V1H5.5Z" fill="currentColor" opacity=".55"/><path d="M5.5 5.5a2.25 2.25 0 1 0 2.25 2.25V5.5H5.5Z" fill="currentColor" opacity=".8"/><path d="M7.75 1H10a2.25 2.25 0 1 1 0 4.5H7.75V1Z" fill="currentColor" opacity=".4"/><circle cx="10" cy="9.75" r="2.25" fill="currentColor" opacity=".65"/><path d="M5.5 10a2.25 2.25 0 1 0 2.25-2.25H5.5V10Z" fill="currentColor"/></svg>',
  github: '<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.64.76 2.04.58.06-.45.24-.76.44-.94-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.94.72a6.7 6.7 0 0 1 3.53 0c1.35-.91 1.94-.72 1.94-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.64 3.29-3.21 3.46.25.22.48.65.48 1.31v1.94c0 .19.13.41.49.34A7 7 0 0 0 8 1Z" fill="currentColor"/></svg>',
  demo: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="2" width="13" height="9" rx="1.3" stroke="currentColor" stroke-width="1.3"/><path d="M4.5 14h6M7.5 11v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  linkedin: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M4.6 6.8v4.3M4.6 4.9v.4M7.4 6.8v4.3M7.4 8.4c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v2.7" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  project: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M6 4V2.8a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8V4M2 4h11v7.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M2 6.8h11" stroke="currentColor" stroke-width="1.3"/></svg>'
};

function buildLinksHTML(links) {
  if (!links || !links.length) return '';
  const buttons = links.slice(0, 3).map(l => {
    const placeholder = !l.url || l.url === '#';
    const icon = linkIcons[l.type] || '';
    const cls = placeholder ? 'modal-link-btn is-placeholder' : 'modal-link-btn';
    const target = placeholder ? '' : ' target="_blank" rel="noopener noreferrer"';
    return `<a href="${l.url || '#'}" class="${cls}"${target} aria-label="${l.label}${placeholder ? ' — add your link' : ''}">${icon}<span>${l.label}</span></a>`;
  }).join('');
  return `<div class="modal-links">${buttons}</div>`;
}

function buildModalContent(projectKey) {
  const p = projects[projectKey];
  if (!p) return '';

  const heroHTML = p.image
    ? `<div class="modal-hero-img"><img src="${p.image}" alt="${p.imageAlt}" loading="lazy" /></div>`
    : `<div class="modal-hero-placeholder">[ADD PROJECT SCREENSHOT — ${p.title} visuals]</div>`;

  const toolPills = p.tools.map(t => `<span class="modal-tool">${t}</span>`).join('');
  const tagPills = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  const outcomeClass = p.outcomeIsPlaceholder ? '' : '';
  const outcomeIcon = p.outcomeIsPlaceholder ? '📌' : '✦';

  return `
    ${heroHTML}
    <div class="modal-tags">${tagPills}</div>
    <h2 class="modal-title" id="modal-title">${p.title}</h2>

    <div class="modal-section">
      <h3 class="modal-section-title">Overview</h3>
      <p>${p.overview}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">The Problem</h3>
      <p>${p.problem}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Process &amp; Approach</h3>
      <p>${p.process}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Tools Used</h3>
      <div class="modal-tools">${toolPills}</div>
    </div>

    <div class="modal-outcome-box">
      <span class="modal-outcome-icon">${outcomeIcon}</span>
      <p class="modal-outcome-text"><strong>Outcome:</strong> ${p.outcome}</p>
    </div>

    ${buildLinksHTML(p.links)}

    <p style="margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
      From: ${p.org}
    </p>
  `;
}

function buildCertModalContent(certKey) {
  const c = certs[certKey];
  if (!c) return '';

  const heroHTML = c.image
    ? `<div class="modal-hero-img"><img src="${c.image}" alt="${c.title} certificate" loading="lazy" /></div>`
    : `<div class="modal-hero-placeholder">[ADD CERTIFICATE IMAGE — ${c.title}]</div>`;

  return `
    ${heroHTML}
    <h2 class="modal-title" id="modal-title">${c.title}</h2>
    <div class="modal-cert-meta">
      <span class="modal-cert-company">${c.company}</span>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">About this Certification</h3>
      <p>${c.description}</p>
    </div>

    <div class="modal-links">
      <a href="${c.postUrl}" class="modal-link-btn${c.postUrl === '#' ? ' is-placeholder' : ''}"${c.postUrl !== '#' ? ' target="_blank" rel="noopener noreferrer"' : ''} aria-label="View the post about this certification">
        ${linkIcons.linkedin}<span>View Post</span>
      </a>
    </div>
  `;
}

function buildExperienceModalContent(expKey) {
  const x = experiences[expKey];
  if (!x) return '';

  const heroHTML = x.certImage
    ? `<div class="modal-hero-img"><img src="${x.certImage}" alt="${x.company} completion certificate" loading="lazy" /></div>`
    : `<div class="modal-hero-placeholder">[ADD COMPLETION CERTIFICATE — ${x.company}]</div>`;

  return `
    ${heroHTML}
    <h2 class="modal-title" id="modal-title">${x.role}</h2>
    <div class="modal-cert-meta">
      <span class="modal-cert-company">${x.company}</span>
      <span class="modal-exp-duration">${x.duration}</span>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">About this Role</h3>
      <p>${x.description}</p>
    </div>

    ${buildLinksHTML(x.links)}
  `;
}

function openModal(key, kind) {
  let content;
  if (kind === 'cert') {
    content = buildCertModalContent(key);
  } else if (kind === 'experience') {
    content = buildExperienceModalContent(key);
  } else {
    content = buildModalContent(key);
  }
  if (!content) return;
  modalContent.innerHTML = content;
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Focus modal for accessibility
  setTimeout(() => {
    modalClose.focus();
  }, 100);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Wire up project cards
document.querySelectorAll('.project-card').forEach(card => {
  const projectKey = card.dataset.project;

  card.addEventListener('click', () => openModal(projectKey, 'project'));

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(projectKey, 'project');
    }
  });
});

// Also wire project CTAs to stop propagation and open modal
document.querySelectorAll('.project-cta').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project-card');
    if (card) openModal(card.dataset.project, 'project');
  });
});

// Wire up certification "View Details" buttons
document.querySelectorAll('.cert-view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.cert-card');
    if (card) openModal(card.dataset.cert, 'cert');
  });
});

// Wire up Experience cards (timeline + "also explored" grid)
document.querySelectorAll('.timeline-card[data-exp], .explore-card[data-exp]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.exp, 'experience'));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.dataset.exp, 'experience');
    }
  });
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});

/* ---- Contact Form ---- */
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subjectSelect = document.getElementById('contact-subject');
  const message = document.getElementById('contact-message').value.trim();

  formSuccess.style.display = 'none';
  formError.style.display = 'none';

  if (!name || !email || !message) {
    formError.style.display = 'block';
    formError.textContent = 'Please fill in all required fields correctly.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formError.style.display = 'block';
    formError.textContent = 'Please enter a valid email address.';
    return;
  }

  // Build a mailto link so the message opens directly in the visitor's own
  // mail client, addressed to K. Akash, with their details and message
  // pre-filled (mailto can't set the "from" address itself — that's always
  // whichever account the visitor's mail app sends as — so it's included
  // in the body instead for context).
  const subjectText = subjectSelect.options[subjectSelect.selectedIndex]?.text || '';
  const mailSubject = subjectSelect.value
    ? `Portfolio Inquiry — ${subjectText}`
    : `Portfolio Inquiry from ${name}`;
  const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:akashkaliyamoorthy4@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const submitBtn = document.getElementById('contact-submit');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Opening your mail app…';
  submitBtn.disabled = true;

  window.location.href = mailtoLink;

  setTimeout(() => {
    formSuccess.style.display = 'block';
    formSuccess.textContent = '✓ Your mail app should now be open with your message ready to send.';
    contactForm.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 600);
});

/* ---- Active nav link on scroll ---- */
function setupActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');
  const navH = getComputedStyle(document.documentElement).getPropertyValue('--nav-height').trim() || '72px';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    // A thin detection band just below the fixed nav, instead of a percentage
    // of the whole section — percentage thresholds never fire for sections
    // taller than the viewport (e.g. Projects with many cards).
    threshold: 0,
    rootMargin: `-${navH} 0px -65% 0px`
  });

  sections.forEach(s => observer.observe(s));
}

/* ---- Smooth scroll offset for fixed nav ---- */
function setupSmoothScrollOffset() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
}

/* ---- Lazy image error handling ---- */
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.display = 'none';
  });
});

/* ---- Custom Cursor ---- */
function setupCustomCursor() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-ring-label');
  if (!dot || !ring) return;

  document.body.classList.add('has-custom-cursor');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let active = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    if (!active) {
      active = true;
      document.body.classList.add('cursor-active');
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverMap = [
    { selector: '.project-card', text: 'View' },
    { selector: '.cert-card', text: 'Details' },
    { selector: '.timeline-card, .explore-card', text: 'View' },
    { selector: 'a, button', text: '' }
  ];

  hoverMap.forEach(({ selector, text }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('ring-hover');
        label.textContent = text;
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('ring-hover');
        label.textContent = '';
      });
    });
  });
}

/* ---- Hero Canvas: generative particle network + video handoff ---- */
function setupHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const hero = document.getElementById('hero');
  const video = document.getElementById('hero-video');

  // If a real background video file is present and can play, let it take over
  // (canvas keeps running underneath at low opacity as a subtle texture either way)
  if (video) {
    video.addEventListener('playing', () => video.classList.add('is-playing'));
    video.play().catch(() => { /* file not present yet — canvas carries the visual */ });
  }

  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, dpr;
  let particles = [];
  let mouseX = null, mouseY = null;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.offsetWidth;
    h = hero.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(60, Math.round((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    const linkDist = 130;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      if (mouseX !== null) {
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          p.x += (dx / dist) * 0.6;
          p.y += (dy / dist) * 0.6;
        }
      }
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < linkDist) {
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.12 * (1 - dist / linkDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.fillStyle = 'rgba(129, 140, 248, 0.7)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reducedMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });
  hero.addEventListener('mouseleave', () => { mouseX = null; mouseY = null; });

  step();
  if (reducedMotion) {
    // Draw a single static frame instead of a running loop
    setTimeout(() => {}, 0);
  }
}

/* ---- Skill Tile 3D Tilt + Spotlight ---- */
function setupTiltCards() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.skill-tile:not(.tile-soft)').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 6;
      const rotateX = (0.5 - py) * 6;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ---- Skills Category Filter ---- */
function setupSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const tiles = document.querySelectorAll('.skill-tile');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      tiles.forEach(tile => {
        const matches = filter === 'all' || tile.dataset.category === filter;
        tile.classList.toggle('tile-hidden', !matches);
      });
    });
  });
}

/* ---- Scroll Progress Bar ---- */
function setupScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ---- Project Category Filter ---- */
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category === filter;
        if (matches) {
          // Bring back into grid flow immediately, then fade/scale in
          card.classList.remove('filter-hidden');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => card.classList.remove('filtering-out'));
          });
        } else {
          // Fade out first, then pull out of grid flow so remaining
          // visible cards reflow up to fill the gap
          card.classList.add('filtering-out');
          setTimeout(() => card.classList.add('filter-hidden'), 300);
        }
      });
    });
  });
}

/* ---- Floating Scroll-to-Top ---- */
function setupScrollTopButton() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 480);
  }, { passive: true });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  setupActiveNavLinks();
  setupSmoothScrollOffset();
  setupCustomCursor();
  setupHeroCanvas();
  setupTiltCards();
  setupSkillsFilter();
  setupProjectFilters();
  setupScrollTopButton();
  setupScrollProgress();
});

// Active nav link style
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--text-primary) !important;
  }
  .nav-links a.active::after {
    transform: scaleX(1) !important;
  }
`;
document.head.appendChild(style);
