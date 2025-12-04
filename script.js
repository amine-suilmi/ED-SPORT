// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking any link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT (Debounced for speed)
// ==========================================
const navbar = document.getElementById("navbar");
let scrollTimeout = null;

window.addEventListener("scroll", () => {
    if (scrollTimeout) return;

    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");

        scrollTimeout = null;
    }, 60);
});

// ==========================================
// ACTIVE NAV LINK (highlight as user scrolls)
// ==========================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) scrollTopBtn.classList.add("visible");
    else scrollTopBtn.classList.remove("visible");
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================================
// COUNTDOWN TIMER
// ==========================================
function updateCountdown() {
    const eventDate = new Date("December 28, 2025 00:00:00").getTime();
    const now = Date.now();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = `
            <h3 style="color: var(--primary-gold); font-size: 1.6rem; font-weight: 800;">
                The Championship Has Started!
            </h3>`;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // run immediately

// ==========================================
// FORM VALIDATION
// ==========================================
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = ["fullName", "email", "phone", "country", "category"];
    let valid = true;

    fields.forEach(id => {
        const input = document.getElementById(id);
        const error = input.nextElementSibling;

        if (error && error.classList.contains("error-message")) {
            error.remove();
        }

        if (!input.value.trim()) {
            valid = false;
            const message = document.createElement("p");
            message.classList.add("error-message");
            message.textContent = "This field is required";
            input.insertAdjacentElement("afterend", message);
        }
    });

    if (!valid) return;

    alert("Registration submitted successfully!");
    registerForm.reset();
});

