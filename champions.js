const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTReZv3suTrntXt79WoTjom9_KiqIEGMyqblek0nNQ12XSx8ohzfHTg4hagIMi6Cg5Cuom2vMQHZLt7/pub?output=csv";
let champions = {};

fetch(sheetURL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").filter(r => r.trim() !== ""); // remove empty rows

    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");

      const id = cols[0]; 

      champions[id] = {
        name: cols[1],
        image: cols[2],
        category: cols[3],
        record: cols[4],
        age: cols[5],
        country: cols[6],
        description: cols[7]
      };
    }

    generateChampions();
  })
  .catch(err => {
    console.error("Sheet Load Error:", err);
  });

function generateChampions() {
  const list = document.getElementById("championsList");
  list.innerHTML = "";

  Object.keys(champions).forEach(id => {
    const c = champions[id];

    list.innerHTML += `
      <div class="champ-card" onclick="window.location='champion.html?id=${id}'">
        <img src="assets/P-imges/${c.image}">
        <h3>${c.name}</h3>
        <p>${c.category}</p>
        <p>${c.country}</p>
      </div>
    `;
  });
}

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


