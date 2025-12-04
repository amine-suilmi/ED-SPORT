const champions = {
    "amine": {
        name: "Amine Soulimi",
        image: "amine.jpg",
        category: "Featherweight Champion",
        record: "12 Wins - 1 Loss - 0 Draws",
        age: 24,
        country: "Tunisia",
        description: "A very technical fighter known for agility and strong kicks."
    },

    "omar": {
        name: "Omar Ben Salah",
        image: "omar.jpg",
        category: "Heavyweight Champion",
        record: "21 Wins - 3 Losses",
        age: 28,
        country: "Morocco",
        description: "Powerful striker with an explosive finishing ability."
    },

    "youssef": {
        name: "Youssef Hedi",
        image: "youssef.jpg",
        category: "Lightweight Champion",
        record: "15 Wins - 2 Losses",
        age: 22,
        country: "Algeria",
        description: "Fast, smart, and one of the rising stars of ED SPORT."
    },
    "wissem": {
        name: "wissem ghod",
        image: "wissem.jpg",
        category: "Featherweight Champion",
        record: "100 Wins - 0Loss - 0 Draws",
        age: 24,
        country: "Tunisia",
        description: "A very technical fighter known for agility and strong kicks."
    },
    "ali": {
        name: "ali ghod",
        image: "ali.jpg",
        category: "Featherweight Champion",
        record: "100 Wins - 0Loss - 0 Draws",
        age: 24,
        country: "Tunisia",
        description: "A very technical fighter known for agility and strong kicks."
    },
};

// Generate the champions list
window.onload = () => {
    const list = document.getElementById("championsList");
    if (!list) return;

    Object.keys(champions).forEach(id => {
        const c = champions[id];

        list.innerHTML += `
            <div class="champ-card" onclick="window.location='champion.html?id=${id}'">
                <img src="assets/P-imges/${c.image}">
                <h3>${c.name}</h3>
                <p>${c.category}</p>
            </div>
        `;
    });
};

function toggleSearch() {
  const box = document.getElementById("search-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
  document.getElementById("searchInput").value = "";
  searchChampions();
}

function searchChampions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("championsList");
  list.innerHTML = "";

  Object.keys(champions).forEach(id => {
    const c = champions[id];
    if (
      c.name.toLowerCase().includes(input) ||
      c.country.toLowerCase().includes(input) ||
      c.category.toLowerCase().includes(input)
    ) {
      list.innerHTML += `
        <div class="champ-card" onclick="window.location='champion.html?id=${id}'">
          <img src="assets/P-imges/${c.image}">
          <h3>${c.name}</h3>
          <p class="category">${c.category}</p>
          <p class="country">${c.country}</p>
        </div>
      `;
    }
  });
}
function openMenu() {
  document.getElementById("mobileMenu").style.display = "flex";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.display = "none";
}
