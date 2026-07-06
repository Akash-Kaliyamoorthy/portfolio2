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
    outcomeIsPlaceholder: true
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
    outcomeIsPlaceholder: true
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
    outcomeIsPlaceholder: true
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
    outcomeIsPlaceholder: true
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
    outcomeIsPlaceholder: false
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
    outcomeIsPlaceholder: false
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
    outcomeIsPlaceholder: true
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
    outcomeIsPlaceholder: true
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
    '.contact-right, .resume-text, .resume-actions, ' +
    '.skill-group'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards in grids
    if (el.classList.contains('project-card') ||
        el.classList.contains('service-card') ||
        el.classList.contains('cert-card')) {
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

    <p style="margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
      From: ${p.org}
    </p>
  `;
}

function openModal(projectKey) {
  const content = buildModalContent(projectKey);
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

  card.addEventListener('click', () => openModal(projectKey));

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(projectKey);
    }
  });
});

// Also wire project CTAs to stop propagation and open modal
document.querySelectorAll('.project-cta').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project-card');
    if (card) openModal(card.dataset.project);
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

  // Simulate form submission (replace with actual form handler like Formspree)
  const submitBtn = document.getElementById('contact-submit');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Sending…';
  submitBtn.disabled = true;

  setTimeout(() => {
    formSuccess.style.display = 'block';
    contactForm.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 1200);
});

/* ---- Active nav link on scroll ---- */
function setupActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

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
    threshold: 0.35,
    rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-height').trim()} 0px 0px 0px`
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

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  setupActiveNavLinks();
  setupSmoothScrollOffset();
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
