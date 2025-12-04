/* referees.js
   Data + rendering + utilities for referees pages
   - provides "referees" object
   - provides renderRefereeList(), searchReferees()
   - includes openMenu(), closeMenu(), toggleSearch()
*/

// -----------------------
// Sample referees "database"
// -----------------------
const referees = {
  "ali": {
    name: "Ali Mansouri",
    image: "ali.jpg",
    license: "EDR-4532A",
    level: "A",
    experience: 7,
    events: 122,
    age: 34,
    country: "Tunisia",
    idnum: "REF-0110",
    description: "Experienced referee known for fast decisions and fair judgment. Certified for international competitions."
  },

  "karim": {
    name: "Karim Ben Omar",
    image: "karim.jpg",
    license: "EDR-1023B",
    level: "B",
    experience: 5,
    events: 98,
    age: 30,
    country: "Morocco",
    idnum: "REF-0104",
    description: "Specialized in international competitions with great match control and athlete safety focus."
  },

  "amine": {
    name: "Amine Rahmani",
    image: "amine_referee.jpg",
    license: "EDR-8841X",
    level: "A",
    experience: 9,
    events: 165,
    age: 38,
    country: "Algeria",
    idnum: "REF-0057",
    description: "Senior referee and educator. Pioneer in ED SPORT arbitration and mentor to junior referees."
  }
};

// -----------------------
// Render list
// -----------------------
function renderRefereeList() {
  const list = document.getElementById("refereesList");
  if (!list) return;

  list.innerHTML = ''; // reset

  Object.keys(referees).forEach(id => {
    const r = referees[id];

    const el = document.createElement('div');
    el.className = 'ref-card';
    el.onclick = () => window.location = `referee.html?id=${id}`;

    el.innerHTML = `
      <div class="ref-photo"><img src="assets/R-imges/${r.image}" alt="${r.name}"></div>
      <div class="ref-info">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="ref-name">${r.name}</div>
          <div class="ref-badge">${r.level}</div>
        </div>

        <div class="ref-meta">
          <div>License: ${r.license}</div>
          <div>Events: ${r.events}</div>
          <div>${r.country}</div>
        </div>

        <div class="ref-desc">${r.description}</div>
      </div>
    `;

    list.appendChild(el);
  });
}

// auto-render if container exists
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    renderRefereeList();
  });
}

// -----------------------
// Search (live)
 // -----------------------
function searchReferees() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  const q = input.value.trim().toLowerCase();

  const list = document.getElementById("refereesList");
  if (!list) return;

  list.innerHTML = '';

  Object.keys(referees).forEach(id => {
    const r = referees[id];
    const hay = `${r.name} ${r.country} ${r.license} ${r.description}`.toLowerCase();
    if (!q || hay.includes(q)) {
      const el = document.createElement('div');
      el.className = 'ref-card';
      el.onclick = () => window.location = `referee.html?id=${id}`;

      el.innerHTML = `
        <div class="ref-photo"><img src="assets/R-imges/${r.image}" alt="${r.name}"></div>
        <div class="ref-info">
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="ref-name">${r.name}</div>
            <div class="ref-badge">${r.level}</div>
          </div>

          <div class="ref-meta">
            <div>License: ${r.license}</div>
            <div>Events: ${r.events}</div>
            <div>${r.country}</div>
          </div>

          <div class="ref-desc">${r.description}</div>
        </div>
      `;

      list.appendChild(el);
    }
  });
}

// -----------------------
// Menu + Search toggles (mobile-friendly)
// -----------------------
function openMenu() {
  const m = document.getElementById('mobileMenu');
  if (!m) return;
  m.style.display = 'flex';
}

function closeMenu() {
  const m = document.getElementById('mobileMenu');
  if (!m) return;
  m.style.display = 'none';
}

function toggleSearch() {
  const s = document.getElementById('search-box');
  if (!s) return;
  s.style.display = s.style.display === 'block' ? 'none' : 'block';

  // focus input when opened
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    if (input && s.style.display === 'block') input.focus();
  }, 120);
}

// Close mobile menu when clicking outside (optional)
document.addEventListener('click', (e) => {
  const mobile = document.getElementById('mobileMenu');
  const menuIcon = e.target.closest('.menu-icon');
  if (!mobile) return;
  if (mobile.style.display === 'flex' && !e.target.closest('#mobileMenu') && !menuIcon) {
    mobile.style.display = 'none';
  }
});

