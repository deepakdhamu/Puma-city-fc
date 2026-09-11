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

      <div class="hero-label">
        PUMA CITY FC
      </div>

      <h1>
        FIRST TEAM<br>
        <span>SQUAD.</span>
      </h1>

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

          <h2 class="section-title">
            ${group}
          </h2>

          <span class="section-link">
            ${players.length} PLAYERS
          </span>

        </div>

        <div class="player-grid">
    `;


    players.forEach(p => {

      const index = squad.indexOf(p);
      const number = String(index + 1).padStart(2,"0");

      html += `
        <article
          class="player-card"
          onclick="openPlayer(${index})"
          style="cursor:pointer"
        >

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

            <h3>
              ${p[0]}
            </h3>

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


/* =========================================
   PLAYER PROFILE
========================================= */

function openPlayer(index) {

  const player = squad[index];

  if (!player) return;

  const number = String(index + 1).padStart(2,"0");

  const main = document.getElementById("home");

  main.innerHTML = `

    <section class="coming-page">

      <div
        style="
          width:100%;
          padding:28px 0 10px;
        "
      >

        <div class="hero-label">
          PUMA CITY FC
        </div>

        <div
          style="
            margin-top:20px;
            color:var(--green);
            font-size:13px;
            font-weight:900;
            letter-spacing:2px;
          "
        >
          PLAYER ${number}
        </div>

        <h1
          style="
            font-size:42px;
            line-height:.95;
            margin-top:10px;
          "
        >
          ${player[0]}
        </h1>

        <div
          style="
            margin-top:18px;
            display:inline-block;
            padding:7px 11px;
            border-radius:8px;
            background:rgba(33,219,160,.12);
            color:var(--green);
            font-size:11px;
            font-weight:900;
          "
        >
          ${player[4]}
        </div>

      </div>


      <div
        style="
          width:100%;
          margin-top:25px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
        "
      >

        <div
          style="
            padding:18px;
            border:1px solid var(--line);
            border-radius:16px;
            background:rgba(255,255,255,.035);
          "
        >
          <small style="color:var(--muted)">
            AGE
          </small>

          <strong
            style="
              display:block;
              margin-top:7px;
              font-size:24px;
              color:var(--green);
            "
          >
            ${player[1]}
          </strong>
        </div>


        <div
          style="
            padding:18px;
            border:1px solid var(--line);
            border-radius:16px;
            background:rgba(255,255,255,.035);
          "
        >
          <small style="color:var(--muted)">
            NATION
          </small>

          <strong
            style="
              display:block;
              margin-top:7px;
              font-size:16px;
            "
          >
            ${player[3]} ${player[2]}
          </strong>
        </div>

      </div>


      <div
        style="
          width:100%;
          margin-top:14px;
          padding:20px;
          border:1px solid var(--line);
          border-radius:18px;
          background:rgba(255,255,255,.035);
        "
      >

        <div
          style="
            color:var(--green);
            font-size:10px;
            font-weight:900;
            letter-spacing:2px;
          "
        >
          SEASON STATS
        </div>

        <div
          style="
            margin-top:18px;
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:12px;
            text-align:center;
          "
        >

          <div>
            <strong style="font-size:21px">
              —
            </strong>
            <small
              style="
                display:block;
                color:var(--muted);
                margin-top:5px;
                font-size:8px;
              "
            >
              APPEARANCES
            </small>
          </div>

          <div>
            <strong style="font-size:21px">
              —
            </strong>
            <small
              style="
                display:block;
                color:var(--muted);
                margin-top:5px;
                font-size:8px;
              "
            >
              GOALS
            </small>
          </div>

          <div>
            <strong style="font-size:21px">
              —
            </strong>
            <small
              style="
                display:block;
                color:var(--muted);
                margin-top:5px;
                font-size:8px;
              "
            >
              ASSISTS
            </small>
          </div>

        </div>

      </div>


      <button
        class="primary-btn"
        onclick="renderSquad(); setActiveNav(1); window.scrollTo({top:0,behavior:'smooth'});"
        style="margin-top:25px"
      >
        ← BACK TO SQUAD
      </button>

    </section>

  `;

  window.scrollTo({top:0, behavior:"smooth"});
}


/* =========================================
   OTHER PAGES
========================================= */

function showPage(title) {

  const main = document.getElementById("home");

  if (!main) return;

  main.innerHTML = `

    <section class="coming-page">

      <div class="coming-icon">
        PC
      </div>

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

      <button
        class="primary-btn"
        onclick="openSection('home')"
      >
        BACK TO HOME
      </button>

    </section>

 
