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
    github: "https://github.com/LarryVan-engin/AI_website_for_DICOM",
    demo: "https://github.com/LarryVan-engin/AI_website_for_DICOM/tree/main/website/appweb",
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
    github: "https://github.com/LarryVan-engin/DCLP",
    demo: "https://github.com/LarryVan-engin/DCLP/tree/main/main_code/result",
    details: `
      <p>
        An <strong>AI and IoT-based system</strong> for automating vehicle access control via
        <strong>real-time license plate recognition</strong>. The Camera-sensor captures images at entry/exit points,
        sends them to a YOLOv12-powered backend for detection processing, and uses <strong>EasyOCR</strong> to extract plate numbers.
      </p>
      <p>
        <img src="./images/modelYOLO.jpg" alt="YOLOv12 Detection">
        <img src="./images/WebTrafficAI.png" alt="OCR Result">
      </p>
      <ul>
        <li>Fast detection under multiple lighting conditions with <strong>YOLOv12 + EasyOCR</strong>.</li>
        <li>MQTT communication between edge devices and the server for stable data exchange.</li>
        <li>Automated logging with timestamps, captured images, and vehicle classification.</li>
        <li>Recognition speed: <strong>&lt; 1.2s per frame</strong>, accuracy &gt; >95%.</li>
        <li>Web dashboard for monitoring, history review, and system management.</li>
        <li>Supports various vehicle types: cars, trucks, motorcycles.</li>
        <li>Line and zone violation.</li>
      </ul>
      <p>
        <img src="./images/OCR.png" alt="OCR Plate">
        <img src="./images/Violation.png" alt="Violation Detection">
      </p>
      <p>
        <em>Ideal for smart parking and intelligent community management systems where automation,
        speed, and reliability are crucial.</em>
      </p>
    `
  },
  {
    id: 3,
    category: "IoT",
    title: "Smart Warehouse System IoT",
    description: "A project to build a smart warehouse system with Raspberry Pi.",
    image: "./images/IoT.png",
    gallery: ["./images/IoT.png"],
    technologies: ["React", "Node.js", "MongoDB", "Raspberry Pi", "IoT", "Sensors", "MQTT", "Docker"],
    github: "https://github.com/LarryVan-engin/Project_IoT_WareHouse-main",
    demo: "https://github.com/LarryVan-engin/Project_IoT_WareHouse-main/blob/main/README.md",
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
      <img src="https://github.com/user-attachments/assets/20302b7f-14b4-4394-9c93-14b82d467424" alt="Team Image">
      </p>
      <p>
        <em>Developed as a scalable IoT ecosystem enabling efficient, intelligent warehouse automation.</em>
      </p>
    `
  },
  {
    id: 4,
    category: "Web",
    title: "Portfolio",
    description: "Personal portfolio version 1.5",
    image: "./images/Portfolio.png",
    gallery: ["./images/Portfolio.png","./images/contactpanel.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LarryVan-engin/PortFolio",
    demo: "https://drive.google.com/file/d/15eFYCMM8xTv9SXEDkOce881xpSOFK2B2/view?usp=drive_link",
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
        The design emphasized simplicity and user experience, setting the stage for future enhancements.
        Its also contains the contact form version 1 using EmailJS service.
      </p>
      <p>
        <img src="./images/contactpanel.png" alt="Contact Section">
        <img src="https://github.com/user-attachments/assets/ae53c75e-1312-4697-b3a9-b61698d0fdf2" alt="EmailJS Management">
      </p>
      <p>
        <em>Version 1 served as the cornerstone for evolving my web design philosophy — blending creativity and performance.</em>
        Click Live demo to see my CV and project showcase in my first portfolio version.
      </p>
    `
  },
    {
    id: 5,
    category: "SMTP",
    title: "CHICOM SMTP Server",
    description: "Website for user management and UI for commerce.",
    image: "https://github.com/user-attachments/assets/cc8cdc69-a7a1-45ec-a99f-684e2950e628",
    gallery: ["https://github.com/user-attachments/assets/cc8cdc69-a7a1-45ec-a99f-684e2950e628","https://github.com/user-attachments/assets/da71f60e-34a7-4c35-82a2-0980483a6c5e",],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SMTP"],
    github: "https://github.com/LarryVan-engin/IOE/tree/main/CHICOM",
    demo: "https://github.com/LarryVan-engin/IOE/blob/main/CHICOM/2025-10-20%2020-09-54.mp4",
    details: `
      <p>
        <strong>HỆ THỐNG WEB — USER / ADMIN MANAGEMENT & PAYMENT FLOW</strong>
      </p>
      <ul style="list-style-type: none; padding-left: 0;">
        
        <li style="margin-bottom: 20px;">
            <h3>⚙️ 1. CẤU TRÚC THƯ MỤC DỰ ÁN</h3>
            <p><strong>📁 back_end/</strong> (Node.js + Express + MongoDB + Email SMTP)</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em;">
              back_end/
              │
              ├── .env                  # Biến môi trường (DB, JWT, SMTP)
              ├── index.js              # File chính khởi động server
              ├── test_mail.js          # Script kiểm tra gửi mail SMTP
              │
              ├── admin_model/          # Controllers logic
              │   ├── authController.js       # Auth logic
              │   ├── middlewareController.js # JWT & Admin check
              │   └── userController.js       # CRUD user
              │
              ├── routes/               # API Endpoints
              │   ├── auth.js           # /v1/auth
              │   ├── user.js           # /v1/user
              │   ├── order.js          # /v1/order
              │
              ├── user_model/ & models/ # Mongoose Schemas (User, Order)
              └── utils/mailer.js       # Nodemailer config
            </pre>
            <p><strong>🌐 front_end/</strong> (HTML + JS thuần)</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em;">
              front_end/
              │
              ├── admin.html            # Dashboard Admin
              ├── user_management.html  # Quản lý user
              ├── payment_management.html # Quản lý đơn hàng
              ├── user_dashboard.html   # Dashboard User
              ├── payment.html          # Trang thanh toán
              ├── login.html / register.html
              └── js/auth.js            # Xử lý Logic Client
            </pre>
        </li>

        <li style="margin-bottom: 20px;">
            <h3>2. WORKFLOW — LUỒNG HOẠT ĐỘNG</h3>
            <p>Hệ thống hoạt động theo cơ chế xác thực chặt chẽ qua Email:</p>
            <ul>
                <li><strong>Đăng ký:</strong> User đăng ký -> Server lưu "pending" -> Gửi mail báo Admin.</li>
                <li><strong>Duyệt User:</strong> Admin vào trang quản lý -> Accept -> User nhận mail "Active" -> Mới được đăng nhập.</li>
                <li><strong>Thanh toán:</strong> User mua hàng -> Xác nhận thanh toán -> Admin nhận mail -> Admin duyệt đơn -> User nhận OTP.</li>
            </ul>
        </li>

        <li style="margin-bottom: 20px;">
            <h3>🔑 3. CẤU HÌNH (.ENV)</h3>
            <p>Sử dụng App Password của Google cho SMTP:</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em;">
              MONGODB_URL=mongodb+srv://...
              SECRETKEY=your_jwt_secret
              SMTP_HOST=smtp.gmail.com
              SMTP_PORT=465
              SMTP_USER=Sender@gmail.com
              SMTP_PASS=ddfmvevxiqelivva  <-- (App Password 16 ký tự)
              ADMIN_EMAIL=admin@hcmut.edu.vn
            </pre>
        </li>

        <li style="margin-bottom: 30px;">
            <h3>GIAO DIỆN & TEST CASE</h3>
            
            <p><strong>1. Đăng nhập & Đăng ký:</strong></p>
            <p>Giao diện Login:</p>
            <img src="https://github.com/user-attachments/assets/f25143fe-f5c1-4afe-881e-0eebd0d9730d" alt="Login Screen" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            
            <p>Giao diện Đăng ký (Validate dữ liệu chặt chẽ):</p>
            <img src="https://github.com/user-attachments/assets/39d0e389-438c-4f91-b418-6d8ab628a983" alt="Register Screen" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            
            <p>Thông báo đăng ký thành công:</p>
            <img src="https://github.com/user-attachments/assets/34e5c40d-365d-4d72-ba1f-f24b0bb93241" alt="Success Register" style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; margin-bottom: 10px;">

            <p><strong>2. Cơ chế duyệt User:</strong></p>
            <p>Khi chưa được Admin duyệt, User không thể đăng nhập:</p>
            <img src="https://github.com/user-attachments/assets/e7498e59-9977-4255-9bf0-0c2aafc09f9f" alt="Login Failed Pending" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>Email thông báo gửi về Admin:</p>
            <img src="https://github.com/user-attachments/assets/b199a4ca-ba34-4a62-a97a-9096af0f0bd0" alt="Email to Admin" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">

            <p><strong>3. Admin Dashboard:</strong></p>
            <p>Admin quản lý danh sách User (Approve/Reject):</p>
            <img src="https://github.com/user-attachments/assets/4195ae0f-d6f0-4393-acac-480cf47e13b0" alt="Admin User Management" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p><strong>4. Luồng thanh toán (Payment Flow):</strong></p>
            <p>User thực hiện thanh toán và xác nhận:</p>
            <img src="https://github.com/user-attachments/assets/23f8f3fa-5917-4d46-9314-f1bbeceef66e" alt="User Payment" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>Admin nhận Email có đơn hàng mới:</p>
            <img src="https://github.com/user-attachments/assets/26530641-deae-4495-bdfd-c32a332f47b1" alt="Email Order" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>Admin xác nhận đơn hàng trên hệ thống:</p>
            <img src="https://github.com/user-attachments/assets/c68f0442-17df-482e-8023-6c4771cd78c0" alt="Admin Approve Order" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>User nhận được Email kèm mã OTP xác thực:</p>
            <img src="https://github.com/user-attachments/assets/b5f09253-f3c2-42ec-a5cc-5257717b54a6" alt="OTP Email" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
        </li>

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
   Typing Effect for Header
================================ */
function initTypingEffect() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  const texts = ["AI Engineer", "IoT Developer", "Edge AI Developer", "Tech Enthusiast"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; 
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
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

const chatBtn = document.getElementById("chat-btn");
if (chatBtn) {
  chatBtn.addEventListener("click", () => {
    const choice = confirm("💬 Message via Telegram (OK) or Discord (Cancel)?");
    window.open(choice ? "https://t.me/YourTelegramUsername" : "https://discord.gg/YourDiscordInvite", "_blank");
  });
}

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

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (!loader) return;

  loader.classList.add("hide");
  setTimeout(() => loader.remove(), 450);
});

function initBrandOrbit() {
  const brand = document.querySelector(".brand");
  if (!brand) return;

  const ufo = brand.querySelector(".ufo");
  const p1 = brand.querySelector(".planet.p1");
  const p2 = brand.querySelector(".planet.p2");
  const p3 = brand.querySelector(".planet.p3");
  if (!ufo || !p1 || !p2 || !p3) return;

  let t = 0;
  const speed = 0.0035;

  function tick() {
    const rect = brand.getBoundingClientRect();

    const pad = 7;
    const w = rect.width + pad * 2;
    const h = rect.height + pad * 2;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const rx = w / 2 - 10;
    const ry = h / 2 - 10;

    t = (t + speed) % 1;

    const ang = t * Math.PI * 2;
    const x = cx + rx * Math.cos(ang);
    const y = cy + ry * Math.sin(ang);

    ufo.style.left = `${x}px`;
    ufo.style.top = `${y}px`;

    const rot = ang + Math.PI / 2;
    ufo.style.transform = `translate(-50%, -50%) rotate(${rot}rad)`;

    const ang1 = ((t * 1.15) + 0.22) * Math.PI * 2;
    p1.style.left = `${cx + (rx - 16) * Math.cos(ang1)}px`;
    p1.style.top  = `${cy + (ry - 16) * Math.sin(ang1)}px`;

    const ang2 = ((t * 0.82) + 0.58) * Math.PI * 2;
    p2.style.left = `${cx + (rx + 6) * Math.cos(ang2)}px`;
    p2.style.top  = `${cy + (ry + 6) * Math.sin(ang2)}px`;

    const ang3 = ((t * 1.45) + 0.86) * Math.PI * 2;
    p3.style.left = `${cx + (rx - 28) * Math.cos(ang3)}px`;
    p3.style.top  = `${cy + (ry - 28) * Math.sin(ang3)}px`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type='submit']");
    const oldText = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending...";
    }

    try {
      const SERVICE_ID = "service_q7n3ybj";
      const TEMPLATE_ID = "template_r1f5vxu";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);

      alert("Sent! I’ll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Send failed. Please try again later.");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = oldText;
      }
    }
  });
}

function initFloatingImages() {
  const container = document.querySelector('.floating-images');
  if (!container) return;

  const imageSources = [
    'https://github.com/user-attachments/assets/0b9a5396-906b-4246-bf1e-9d9d7d2d3414',
    'https://github.com/user-attachments/assets/635a2835-0478-4995-a633-92a2dce07d79',
    'https://github.com/user-attachments/assets/9de9165b-be6d-413e-a33b-66460eda22f0',
    'https://github.com/user-attachments/assets/e39e1293-c3d1-4f35-953c-b827f076a59b',
    'https://github.com/user-attachments/assets/c978c779-d08d-47a5-894e-f33482cb069a',
    'https://github.com/user-attachments/assets/f237ceec-1613-4fdf-aac3-a13008866808',
    'https://github.com/user-attachments/assets/20302b7f-14b4-4394-9c93-14b82d467424',
    'https://github.com/user-attachments/assets/98089307-65a6-4be7-be59-21a81b266d99',
    'https://github.com/user-attachments/assets/ee962137-3cf2-4b55-a56b-928fc4a9e2d7',
    'https://github.com/user-attachments/assets/a1aec806-f443-402c-8c4d-4022f8a7447d',
    'https://github.com/user-attachments/assets/2adce9cf-4255-4f6e-9c91-b2a6fcf7ee13'
  ];

  /* ===============================
     CONFIG
  ================================ */
  const isMobile = window.innerWidth < 768;

  const MAX_IMAGES = isMobile ? 3 : 6;
  const MAX_LIFE   = isMobile ? 3800 : 5000;
  const FADE_TIME  = 900;

  const MIN_SIZE = isMobile ? 150 : 260;
  const MAX_SIZE = isMobile ? 240 : 520;

  const MOVE_SPEED   = isMobile ? 0.05 : 0.1;
  const SCROLL_FACTOR = isMobile ? 0.15 : 0.35;

  const rand = (a, b) => a + Math.random() * (b - a);

  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  }, { passive: true });

  function viewport() {
    return { w: window.innerWidth, h: window.innerHeight };
  }

  /* ===============================
     CORE SPAWN
  ================================ */
  function spawnImage({ x, y, force = false } = {}) {
    if (container.children.length >= MAX_IMAGES && !force) return;

    const { w, h } = viewport();

    const img = document.createElement('img');
    img.className = 'floating-image';
    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];

    img.loading = "eager";
    img.decoding = "async";
    img.fetchPriority = "high";

    const size = rand(MIN_SIZE, MAX_SIZE);
    img.style.width = `${size}px`;

    if (x == null || y == null) {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { x = -size; y = rand(0, h); }
      if (edge === 1) { x = w + size; y = rand(0, h); }
      if (edge === 2) { x = rand(0, w); y = -size; }
      if (edge === 3) { x = rand(0, w); y = h + size; }
    }

    const dx = rand(-MOVE_SPEED, MOVE_SPEED);
    const dy = rand(-MOVE_SPEED, MOVE_SPEED);
    const rot = rand(-18, 18);
    const baseScale = rand(0.85, 1.05);

    img.style.left = `${x}px`;
    img.style.top  = `${y}px`;
    img.style.transform = `scale(0.75) rotate(${rot}deg)`;

    container.appendChild(img);

    requestAnimationFrame(() => {
      img.classList.add('show');
      img.style.transform = `scale(${baseScale}) rotate(${rot}deg)`;
    });

    let life = 0;
    let last = performance.now();

    function animate(now) {
      const dt = now - last;
      last = now;

      const scrollOffset = scrollY * SCROLL_FACTOR;

      x += dx * dt;
      y += dy * dt + scrollOffset * 0.002;

      img.style.transform = `
        translate(${x}px, ${y}px)
        scale(${baseScale})
        rotate(${rot}deg)
      `;

      life += dt;
      if (life < MAX_LIFE || force) {
        requestAnimationFrame(animate);
      } else {
        img.style.transform = `
          translate(${x}px, ${y}px)
          scale(0.9)
          rotate(${rot}deg)
        `;
        img.classList.remove('show');
        setTimeout(() => img.remove(), FADE_TIME);
      }
    }

    requestAnimationFrame(animate);
  }

  /* ===============================
     AUTO SPAWN LOOP
  ================================ */
  function spawnLoop() {
    spawnImage();
    setTimeout(spawnLoop, rand(350, 1800));
  }
  spawnLoop();

  /* ===============================
     CLICK TO SPAWN
  ================================ */
  window.addEventListener('pointerdown', (e) => {
    // tránh click vào button / link
    if (e.target.closest('a, button, input, textarea')) return;

    spawnImage({
      x: e.clientX,
      y: e.clientY,
      force: true
    });
  }, { passive: true });
}

/* ===============================
   INIT EVERYTHING
================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initThemeToggle();
  initParticles();
  initFadeSections();
  initBrandOrbit();
  initContactForm();
  initTypingEffect();
  // initFloatingImages();

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
