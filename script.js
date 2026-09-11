const squad = [
  ["Rohan Kapoor",18,"Auravia","🇦🇺","GK","Goalkeepers"],
  ["Victor Hale",25,"Auravia","🇦🇺","CB","Defenders"],
  ["Aaron Bell",24,"Auravia","🇦🇺","CB","Defenders"],
  ["Kai Mercer",21,"Auravia","🇦🇺","RB","Defenders"],
  ["Julian Costa",23,"Portugal","🇵🇹","RB/LB","Defenders"],
  ["Nico Arlen",20,"Auravia","🇦🇺","CAM/CM","Midfielders"],
  ["Mateo Silvan",23,"Auravia","🇦🇺","CM/CDM","Midfielders"],
  ["Daniel Voss",22,"Auravia","🇦🇺","CDM","Midfielders"],
  ["Ethan Cruz",21,"Auravia","🇦🇺","RW","Forwards"],
  ["Alex Riven",19,"Auravia","🇦🇺","LW/ST","Forwards"],
  ["Rishabh Singh",18,"Auravia","🇦🇺","LW/RW","Forwards"],
  ["Aman Choudhary",17,"Auravia","🇦🇺","GK","Goalkeepers"],
  ["Felix Arden",18,"Auravia","🇦🇺","CB","Defenders"],
  ["Rahul Nair",19,"Auravia","🇦🇺","RB/RM","Defenders"],
  ["Dev Malhotra",18,"Auravia","🇦🇺","CM","Midfielders"],
  ["Kunal Shah",18,"Auravia","🇦🇺","CAM","Midfielders"],
  ["Kabir Sharma",17,"Auravia","🇦🇺","ST/RW","Forwards"],
  ["Yuvraj Patel",17,"Auravia","🇦🇺","CAM","Midfielders"]
];

function openSection(section) {

  if (section === "home") {
    location.reload();
    return;
  }

  if (section === "squad") {
    renderSquad();
    setActiveNav(1);
    window.scrollTo({top:0, behavior:"smooth"});
    return;
  }

  if (section === "fixtures") {
    showPage("FIXTURES");
    setActiveNav(2);
    return;
  }

  if (section === "results") {
    showPage("RESULTS");
    return;
  }

  if (section === "table") {
    showPage("LEAGUE TABLE");
    setActiveNav(3);
    return;
  }

  showPage("MORE");
}


function renderSquad() {

  const main = document.getElementById("home");

  if (!main) return;

  const groups = [
    "Goalkeepers",
    "Defenders",
    "Midfielders",
    "Forwards"
  ];

  let html = `
    <section class="page-hero">
      <div class="hero-label">PUMA CITY FC</div>
      <h1>FIRST TEAM<br><span>SQUAD.</span></h1>
      <p class="hero-text">
        Meet the players representing Puma City FC.
      </p>
    </section>

    <section class="squad-section">
  `;

  groups.forEach(group => {

    const players = squad.filter(p => p[5] === group);

    html += `
      <div class="squad-group">

        <div class="section-head">
          <h2 class="section-title">${group}</h2>
          <span class="section-link">
            ${players.length} PLAYERS
          </span>
        </div>

        <div class="player-grid">
    `;

    players.forEach((p) => {

      const number = String(squad.indexOf(p) + 1).padStart(2,"0");

      html += `
        <article class="player-card">

          <div class="player-number">
            ${number}
          </div>

          <div class="player-avatar">
            ${p[4] === "GK" ? "GK" : "PC"}
          </div>

          <div class="player-info">

            <div class="player-position">
              ${p[4]}
            </div>

            <h3>${p[0]}</h3>

            <div class="player-meta">
              ${p[3]} ${p[2]} • ${p[1]} YRS
            </div>

          </div>

        </article>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
    </section>
  `;

  main.innerHTML = html;
}


function showPage(title) {

  const main = document.getElementById("home");

  if (!main) return;

  main.innerHTML = `
    <section class="coming-page">

      <div class="coming-icon">PC</div>

      <div class="hero-label">
        PUMA CITY FC
      </div>

      <h1>
        ${title}<br>
        <span>COMING SOON.</span>
      </h1>

      <p>
        This section is currently being built.
      </p>

      <button class="primary-btn"
              onclick="openSection('home')">
        BACK TO HOME
      </button>

    </section>
  `;
}


function setActiveNav(index) {

  const items = document.querySelectorAll(".nav-item");

  items.forEach((item,i) => {
    item.classList.toggle("active", i === index);
  });
}


function showMenu() {

  showPage("MORE");

   }
