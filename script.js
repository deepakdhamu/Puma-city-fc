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

function openSection(page) {
    if(page === "home") {
        location.reload();
        return;
    }

    if(page === "squad") {
        renderSquad();
        setActiveNav(1);
        window.scrollTo(0,0);
        return;
    }

    if(page === "fixtures") {
        showPage("FIXTURES");
        setActiveNav(2);
        return;
    }

    if(page === "table") {
        showPage("LEAGUE TABLE");
        setActiveNav(3);
        return;
    }

    showPage("RESULTS");
}

function renderSquad() {
    const main = document.getElementById("home");

    let html = `
    <section class="page-hero">
        <div class="hero-label">PUMA CITY FC</div>
        <h1>FIRST TEAM<br><span>SQUAD.</span></h1>
        <p class="hero-text">Meet the players representing Puma City FC.</p>
    </section>
    <section class="squad-section">
    `;

    ["Goalkeepers","Defenders","Midfielders","Forwards"].forEach(group => {

        const players = squad.filter(p => p[5] === group);

        html += `
        <div class="squad-group">
            <div class="section-head">
                <h2 class="section-title">${group}</h2>
                <span class="section-link">${players.length} PLAYERS</span>
            </div>
            <div class="player-grid">
        `;

        players.forEach(player => {
            const i = squad.indexOf(player);

            html += `
            <article class="player-card" onclick="openPlayer(${i})">
                <div class="player-number">${String(i+1).padStart(2,"0")}</div>
                <div class="player-avatar">
                    ${player[4] === "GK" ? "GK" : "PC"}
                </div>
                <div class="player-info">
                    <div class="player-position">${player[4]}</div>
                    <h3>${player[0]}</h3>
                    <div class="player-meta">
                        ${player[3]} ${player[2]} • ${player[1]} YRS
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

    html += `</section>`;

    main.innerHTML = html;
}

function openPlayer(i) {
    const p = squad[i];

    document.getElementById("home").innerHTML = `
    <section class="coming-page">

        <div class="hero-label">PUMA CITY FC</div>

        <h1 style="margin-top:15px">
            ${p[0]}<br>
            <span>${p[4]}</span>
        </h1>

        <div class="squad-summary" style="width:100%;margin-top:30px">

            <div>
                <strong>${p[1]}</strong>
                <span>AGE</span>
            </div>

            <div>
                <strong>${p[3]}</strong>
                <span>NATION</span>
            </div>

            <div>
                <strong>${p[4]}</strong>
                <span>POSITION</span>
            </div>

        </div>

        <button class="primary-btn"
            onclick="renderSquad();setActiveNav(1);window.scrollTo(0,0)">
            ← BACK TO SQUAD
        </button>

    </section>
    `;

    window.scrollTo(0,0);
}

function showPage(title) {
    document.getElementById("home").innerHTML = `
    <section class="coming-page">

        <div class="coming-icon">PC</div>

        <div class="hero-label">PUMA CITY FC</div>

        <h1>
            ${title}<br>
            <span>COMING SOON.</span>
        </h1>

        <p>This section is currently being built.</p>

        <button class="primary-btn" onclick="openSection('home')">
            BACK TO HOME
        </button>

    </section>
    `;

    window.scrollTo(0,0);
}

function setActiveNav(index) {
    document.querySelectorAll(".nav-item").forEach((item,i) => {
        item.classList.toggle("active", i === index);
    });
}

function showMenu() {
    showPage("MORE");
                  }
