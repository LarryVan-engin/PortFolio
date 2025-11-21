// DATA
const projectsData = [
    {
        id: 1,
        category: "AI",
        title: "Website using AI in DICOM image",
        description: "Ứng dụng web sử dụng AI để phân tích ảnh y tế.",
        image: "./images/ban3.gif",
        technologies: ["React", "NodeJS", "MongoDB"]
    },
    {
        id: 2,
        category: "AI",
        title: "Traffic Violation Detection System",
        description: "Phát hiện vi phạm giao thông bằng AI.",
        image: "./images/WebAIYOLO.png",
        technologies: ["YOLOv12", "OpenCV", "Python"]
    },
    {
        id: 3,
        category: "Web",
        title: "Portfolio V1",
        description: "Portfolio cá nhân phiên bản 1.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

function renderProjects(filtered = "all") {
    const grid = document.getElementById("portfolio-grid");
    grid.innerHTML = "";

    const list = filtered === "all"
        ? projectsData
        : projectsData.filter(p => p.category === filtered);

    list.forEach(project => {
        const item = `
        <article class="project-card" data-id="${project.id}">
            <img src="${project.image}" class="project-image"/>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(t => `<span class="tag">${t}</span>`).join("")}
                </div>
            </div>
        </article>`;

        grid.innerHTML += item;
    });

    observeCards();
    attachCardClicks();
}

// SCROLL REVEAL
function observeCards() {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("visible");
        });
    }, { threshold: 0.2 });

    cards.forEach(c => observer.observe(c));
}

// FILTER BUTTONS
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
    });
});

/* SPLIT TEXT ANIMATION */
document.querySelectorAll(".split").forEach(el => {
    const text = el.innerText;
    el.innerHTML = text.split("").map(c => `<span>${c}</span>`).join("");
});

/* RIPPLE EFFECT */
document.body.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.top = e.clientY + "px";
    ripple.style.left = e.clientX + "px";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});



// MODAL POPUP
function attachCardClicks() {
    const cards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            const p = projectsData.find(x => x.id == id);

            modalImg.src = p.image;
            modalTitle.textContent = p.title;
            modalDesc.textContent = p.description;

            modal.style.display = "flex";
        });
    });

    document.querySelector(".close-btn").onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
}

/* SCROLL PROGRESS BAR */
/* SCROLL PROGRESS BAR */
window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scroll-progress");
    if (scrollProgress) {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / pageHeight) * 100;
        scrollProgress.style.width = progress + "%";
    }
});

/* PAGE TRANSITION FADE-IN */
document.body.style.opacity = 0;
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = 1;
});

/* PAGE LOADER */
window.addEventListener("load", () => {
    const pageLoader = document.getElementById("page-loader");
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.style.opacity = "0";
            setTimeout(() => {
                pageLoader.style.display = "none";
            }, 600);
        }, 300);
    }
});

/* ALWAYS SCROLL TO TOP ON REFRESH */
window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, 10);
});


/* PARTICLE BACKGROUND */
const canvas = document.getElementById("particles-bg");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createParticles() {
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 3 + 1,
                dx: (Math.random() - 0.5) * 0.8,
                dy: (Math.random() - 0.5) * 0.8
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.7)";
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        }
        requestAnimationFrame(drawParticles);
    }

    createParticles();
    drawParticles();

    window.addEventListener("resize", () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    });
}


/* ================================
   PAGE TRANSITION FADE-IN
================================ */
document.body.style.opacity = 0;
window.onload = () => {
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = 1;
};
/* TYPING EFFECT */
const typingText = [
    "AI Enthusiast",
    "Automation Developer",
    "Computer Vision Researcher",
    "AIoT Developer",
    "Networking and Telecommunications Engineer"
];

let tIndex = 0, charIndex = 0;

function typing() {
    if (charIndex < typingText[tIndex].length) {
        document.getElementById("typing").innerHTML += typingText[tIndex][charIndex];
        charIndex++;
        setTimeout(typing, 80);
    } else {
        setTimeout(() => {
            document.getElementById("typing").innerHTML = "";
            charIndex = 0;
            tIndex = (tIndex + 1) % typingText.length;
            typing();
        }, 1200);
    }
}
typing();

/* SMOOTH CONTROLLED SCROLL */
let isScrolling = false;

window.addEventListener("wheel", (e) => {
    if (isScrolling) return; // chặn spam cuộn

    isScrolling = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    const scrollAmount = window.innerHeight * 0.4; // ↓ giảm tốc độ tại đây

    window.scrollBy({
        top: scrollAmount * direction,
        behavior: "smooth"
    });

    setTimeout(() => {
        isScrolling = false;
    }, 600);
});

/* THEME TOGGLE */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const themeIcon = document.getElementById("theme-icon");

    if (!themeToggleBtn || !themeIcon) {
        console.error("Theme toggle button or icon not found");
        return;
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            themeIcon.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "☀️";
    } else {
        themeIcon.textContent = "🌙";
    }
}

// Initialize theme toggle when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
    initThemeToggle();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => renderProjects());
