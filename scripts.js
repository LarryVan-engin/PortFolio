/* ===============================
   PROJECT DATA (KEPT ORIGINAL)
================================ */
const projectsData = [
  {
    id: 1,
    category: "AI",
    title: "Website using AI in DICOM image",
    description: "Using AI in DICOM image. Deployed on web with Django framework.",
    image: "./images/ban3.gif",
    gallery: ["./images/ban3.gif"],
    technologies: ["Django", "DICOM", "U-Net"],
    github: "https://github.com/LarryVan-engin",
    demo: "#",
    details: `
      <p>
        This project applies <strong>Deep Learning for medical image segmentation</strong> using the
        <strong>U-Net architecture</strong> to process DICOM (Digital Imaging and Communications in Medicine) files.
        The system automatically identifies and isolates specific brain regions to help doctors visualize anomalies
        such as tumors or lesions in MRI/CT scans.
      </p>
      <p>
        <img src="./images/free-DICOM-viewers.gif" alt="Original DICOM">
        <img src="./images/AIDICOM.jpg" alt="AI Mask Result">
      </p>
      <ul>
        <li>Preprocessing: anonymization, intensity normalization, and contrast enhancement.</li>
        <li>Model training with customized U-Net for precise tissue segmentation.</li>
        <li>Flask web interface for real-time visualization of AI segmentation masks.</li>
        <li>Achieved average <strong>IoU ≈ 0.89</strong> and built an open-source demo web app.</li>
      </ul>
      <p>
        <em>This research project contributes to advancing AI-assisted medical diagnostics,
        combining accuracy, interpretability, and practical use in healthcare.</em>
      </p>
    `
  },
  {
    id: 2,
    category: "AI",
    title: "Traffic Violation Detection System",
    description: "Detecting traffic violations using computer vision and deep learning.",
    image: "./images/Traffic.png",
    gallery: ["./images/Traffic.png"],
    technologies: ["YOLOv12", "OpenCV", "Python", "EasyOCR", "DeepSort", "SORT", "Bytetrack", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/LarryVan-engin",
    demo: "#",
    details: `
      <p>
        An <strong>AI and IoT-based system</strong> for automating vehicle access control via
        <strong>real-time license plate recognition</strong>. The ESP32-CAM captures images at entry/exit points,
        sends them to a YOLOv12-powered backend for detection, and uses <strong>OCR</strong> to extract plate numbers.
      </p>
      <p>
        <img src="./images/modelYOLO.jpg" alt="YOLOv12 Detection">
        <img src="./images/WebAIYOLO.png" alt="OCR Result">
      </p>
      <ul>
        <li>Fast detection under multiple lighting conditions with <strong>YOLOv12 + Tesseract OCR</strong>.</li>
        <li>MQTT communication between edge devices and the server for stable data exchange.</li>
        <li>Automated logging with timestamps, captured images, and vehicle classification.</li>
        <li>Recognition speed: <strong><1.2s per frame</strong>, accuracy >95%.</li>
      </ul>
      <p>
        <em>Ideal for smart parking and intelligent community management systems where automation,
        speed, and reliability are crucial.</em>
      </p>
    `
  },
  {
    id: 3,
    category: "Smart Warehouse",
    title: "Smart Warehouse System IoT",
    description: "A project to build a smart warehouse system with Raspberry Pi.",
    image: "./images/IoT.png",
    gallery: ["./images/IoT.png"],
    technologies: ["React", "Node.js", "MongoDB", "Raspberry Pi", "IoT", "Sensors", "MQTT", "Docker"],
    github: "https://github.com/LarryVan-engin",
    demo: "#",
    details: `
      <p>
        A complete <strong>IoT-based warehouse management system</strong> designed for real-time monitoring
        and environmental control. Sensors track temperature, humidity, and light, while RFID modules
        handle goods and staff identification.
      </p>
      <p>
        <img src="./images/Warehouse-empty-animation.gif" alt="IoT Dashboard">
        <img src="./images/Diagram_2.png" alt="Sensors Network">
      </p>
      <ul>
        <li>Real-time monitoring dashboard built with MQTT and WebSocket.</li>
        <li>RFID-based authentication and access control for goods and personnel.</li>
        <li>Automatic alerts when environmental thresholds are exceeded.</li>
        <li>Remote control for devices (fans, lights, alarms) via dashboard.</li>
        <li>Expandable architecture for cloud or large-scale logistics integration.</li>
      </ul>
      <p>
        <em>Developed as a scalable IoT ecosystem enabling efficient, intelligent warehouse automation.</em>
      </p>
    `
  },
  {
    id: 4,
    category: "Web",
    title: "Portfolio V1",
    description: "Personal portfolio version 1.5",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
    gallery: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LarryVan-engin",
    demo: "#",
    details: `
      <p>
        The initial version of my personal portfolio, built purely with <strong>HTML, CSS, and JavaScript</strong>.
        This version focused on clarity, responsive design, and creative presentation.
        It laid the groundwork for the current <strong>Glassmorphism</strong> aesthetic and modern architecture.
      </p>
      <ul>
        <li>Fully responsive static design for all screen sizes.</li>
        <li>Lightweight animations and scroll effects.</li>
        <li>Optimized SEO and accessibility structure.</li>
      </ul>
      <p>
        <em>Version 1 served as the cornerstone for evolving my web design philosophy — blending creativity and performance.</em>
      </p>
    `
  }
];

// Hiệu ứng fade từng dòng About
const about = document.querySelector('.about-text');
if (about) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) about.classList.add('visible');
    });
  }, { threshold: 0.3 });
  observer.observe(about);
}

/* ===============================
   RENDER PROJECTS
================================ */
function renderProjects(filtered = "all") {
  const grid = document.getElementById("portfolio-grid");
  grid.innerHTML = "";

  const list = filtered === "all" ? projectsData : projectsData.filter(p => p.category === filtered);
  list.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.id = project.id;
    card.innerHTML = `
      <img src="${project.image}" class="project-image" loading="lazy"/>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
      </div>`;
    grid.appendChild(card);
  });

  attachCardClicks();
}

/* ===============================
   MODAL DETAILS
================================ */
function attachCardClicks() {
  const cards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-image");
  const modalDesc = document.getElementById("modal-desc");
  const modalGallery = document.getElementById("modal-gallery");
  const modalGitHub = document.getElementById("modal-github");
  const modalDemo = document.getElementById("modal-demo");
  const closeBtn = document.querySelector(".close-btn");

  cards.forEach(card => {
    card.addEventListener("mousemove", e => tiltCard(e, card));
    card.addEventListener("mouseleave", () => resetTilt(card));

    card.addEventListener("click", () => {
      const project = projectsData.find(p => p.id == card.dataset.id);
      if (!project) return;

      modalTitle.textContent = project.title;
      modalImg.src = project.image;
      modalDesc.innerHTML = project.details;

      modalGallery.innerHTML = "";
      project.gallery.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = img;
        thumb.loading = "lazy";
        thumb.addEventListener("click", () => (modalImg.src = img));
        modalGallery.appendChild(thumb);
      });

      modalGitHub.href = project.github;
      modalDemo.href = project.demo;

      modal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
}

/* ===============================
   3D TILT EFFECT
================================ */
function tiltCard(e, card) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / 20).toFixed(2);
  const rotateY = ((x - centerX) / 20).toFixed(2);
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}
function resetTilt(card) {
  card.style.transform = "rotateX(0) rotateY(0) scale(1)";
}

/* ===============================
   FILTER BUTTONS
================================ */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ===============================
   THEME TOGGLE
================================ */
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle-btn");
  const icon = document.getElementById("theme-icon");
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    icon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* ===============================
   CHAT BUTTON
================================ */
document.getElementById("chat-btn").addEventListener("click", () => {
  const choice = confirm("💬 Message via Telegram (OK) or Discord (Cancel)?");
  if (choice)
    window.open("https://t.me/YourTelegramUsername", "_blank");
  else
    window.open("https://discord.gg/YourDiscordInvite", "_blank");
});

/* ===============================
   FLOATING PARTICLE LIGHTS
================================ */
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const particleCount = 60;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.color = `rgba(164,125,244,${Math.random() * 0.6 + 0.2})`;
      this.vx = Math.random() * 0.5 - 0.25;
      this.vy = Math.random() * 0.5 - 0.25;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  canvas.style.position = "fixed";
  canvas.style.inset = 0;
  canvas.style.zIndex = "0";
  canvas.style.pointerEvents = "none";
}

/* ===============================
   INTERSECTION OBSERVER FADE
================================ */
function initFadeSections() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-section').forEach(sec => observer.observe(sec));
}

/* ===============================
   INIT EVERYTHING
================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initThemeToggle();
  initParticles();
  initFadeSections();

  // ScrollReveal animations
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.section-title', {
      delay: 200,
      duration: 800,
      origin: 'bottom',
      distance: '40px',
      easing: 'ease-out',
      opacity: 0,
    });

    ScrollReveal().reveal('.project-card', {
      interval: 150,
      distance: '60px',
      origin: 'bottom',
      duration: 1000,
      opacity: 0,
      easing: 'ease-in-out',
    });
  }
});
