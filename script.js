const app = document.getElementById("app");

const players = [
    ["01","Rohan Kapoor","GK","Auravia","🇦🇺"],
    ["02","Victor Hale","CB","Auravia","🇦🇺"],
    ["03","Aaron Bell","CB","Auravia","🇦🇺"],
    ["04","Kai Mercer","RB","Auravia","🇦🇺"],
    ["05","Julian Costa","RB/LB","Portugal","🇵🇹"],
    ["06","Nico Arlen","CAM/CM","Auravia","🇦🇺"],
    ["07","Mateo Silvan","CM/CDM","Auravia","🇦🇺"],
    ["08","Daniel Voss","CDM","Auravia","🇦🇺"],
    ["09","Ethan Cruz","RW","Auravia","🇦🇺"],
    ["10","Alex Riven","LW/ST","Auravia","🇦🇺"],
    ["11","Rishabh Singh","LW/RW","Auravia","🇦🇺"],
    ["12","Aman Choudhary","GK","Auravia","🇦🇺"],
    ["13","Felix Arden","CB","Auravia","🇦🇺"],
    ["14","Rahul Nair","RB/RM","Auravia","🇦🇺"],
    ["15","Dev Malhotra","CM","Auravia","🇦🇺"],
    ["16","Kunal Shah","CAM","Auravia","🇦🇺"],
    ["17","Kabir Sharma","ST/RW","Auravia","🇦🇺"],
    ["18","Yuvraj Patel","CAM","Auravia","🇦🇺"]
];

function openPage(page){

    closeMenu();

    document.querySelectorAll(".nav-item").forEach(x=>{
        x.classList.remove("active");
    });

    if(page === "home"){
        document.querySelectorAll(".nav-item")[0].classList.add("active");
        homePage();
    }

    else if(page === "squad"){
        document.querySelectorAll(".nav-item")[1].classList.add("active");
        squadPage();
    }

    else if(page === "fixtures"){
        document.querySelectorAll(".nav-item")[2].classList.add("active");
        fixturesPage();
    }

    else if(page === "shop"){
        document.querySelectorAll(".nav-item")[3].classList.add("active");
        shopPage();
    }

    else if(page === "news"){
        newsPage();
    }

    else if(page === "about"){
        aboutPage();
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* ================================
   HOME
================================ */

function homePage(){

    app.innerHTML = `

        <section class="hero">

            <div class="hero-image-placeholder">
                <span>PCFC</span>
            </div>

            <div class="hero-content">

                <div class="hero-label">
                    PUMA CITY FC
                </div>

                <h1>
                    FOOTBALL<br>
                    <span>BEYOND</span><br>
                    LIMITS.
                </h1>

                <p class="hero-sub">
                    Skill. Unity. Ambition.
                    One club, one vision, one city.
                </p>

                <div class="hero-buttons">

                    <button class="btn btn-light"
                            onclick="openPage('about')">
                        OUR CLUB →
                    </button>

                    <button class="btn btn-primary"
                            onclick="openPage('squad')">
                        MEET THE TEAM →
                    </button>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="section-head">

                <div>
                    <div class="section-kicker">
                        NEXT MATCH
                    </div>

                    <h2 class="section-title">
                        Matchday
                    </h2>
                </div>

                <span class="view-all">
                    18 SEP 2026
                </span>

            </div>

            <div class="match-card">

                <div class="match-top">

                    <span class="match-label">
                        LEGEND LEAGUE
                    </span>

                    <span class="match-date">
                        19:30 LOCAL
                    </span>

                </div>

                <div class="teams">

                    <div>
                        <div class="team-badge">PC</div>
                        <div class="team-name">
                            PUMA CITY FC
                        </div>
                    </div>

                    <div class="vs">
                        VS
                    </div>

                    <div>
                        <div class="team-badge">RF</div>
                        <div class="team-name">
                            RIVAL FC
                        </div>
                    </div>

                </div>

                <div class="match-info">
                    PUMA CITY STADIUM<br>
                    18 SEPTEMBER 2026
                </div>

                <button class="match-button"
                        onclick="openPage('fixtures')">
                    MATCH PREVIEW →
                </button>

            </div>

        </section>


        <section class="section">

            <div class="section-head">

                <div>
                    <div class="section-kicker">
                        LATEST
                    </div>

                    <h2 class="section-title">
                        Club News
                    </h2>
                </div>

                <button class="view-all"
                        onclick="openPage('news')">
                    VIEW ALL →
                </button>

            </div>

            <article class="news-card"
                     onclick="openPage('news')">

                <div class="news-image">
                    PCFC
                </div>

                <div class="news-body">

                    <span class="news-tag">
                        CLUB NEWS
                    </span>

                    <span class="news-date">
                        10 SEP 2026
                    </span>

                    <h3>
                        Puma City FC Ready For A New Chapter
                    </h3>

                    <p>
                        The squad looks stronger as we prepare
                        for the next stage of the Legend League.
                    </p>

                </div>

            </article>

        </section>


        <section class="section section-dark">

            <div class="section-head">

                <div>
                    <div class="section-kicker">
                        THE CLUB
                    </div>

                    <h2 class="section-title">
                        By The Numbers
                    </h2>
                </div>

            </div>

            <div class="stats">

                <div class="stat">
                    <strong>2026</strong>
                    <span>FOUNDED</span>
                </div>

                <div class="stat">
                    <strong>01</strong>
                    <span>CLUB</span>
                </div>

                <div class="stat">
                    <strong>18</strong>
                    <span>PLAYERS</span>
                </div>

            </div>

        </section>


        <div class="sponsor">

            <span>
                OFFICIAL MAIN PARTNER
            </span>

            <strong>
                VERTEX LABS
            </strong>

        </div>

    `;
}


/* ================================
   SQUAD
================================ */

function squadPage(){

    app.innerHTML = `

        <section class="page-header">

            <small>PUMA CITY FC</small>

            <h1>
                FIRST TEAM<br>
                SQUAD
            </h1>

        </section>

        <div class="filters">

            <button class="filter active"
                    onclick="filterPlayers('ALL',this)">
                ALL
            </button>

            <button class="filter"
                    onclick="filterPlayers('GK',this)">
                GOALKEEPERS
            </button>

            <button class="filter"
                    onclick="filterPlayers('DEF',this)">
                DEFENDERS
            </button>

            <button class="filter"
                    onclick="filterPlayers('MID',this)">
                MIDFIELDERS
            </button>

            <button class="filter"
                    onclick="filterPlayers('FWD',this)">
                FORWARDS
            </button>

        </div>

        <div class="players" id="players"></div>

    `;

    renderPlayers("ALL");
}


function getGroup(position){

    if(position === "GK") return "GK";

    if(
        position === "CB" ||
        position === "RB" ||
        position === "RB/LB" ||
        position === "RB/RM"
    ){
        return "DEF";
    }

    if(
        position === "CAM" ||
        position === "CAM/CM" ||
        position === "CM/CDM" ||
        position === "CDM" ||
        position === "CM"
    ){
        return "MID";
    }

    return "FWD";
}


function renderPlayers(filter){

    const box = document.getElementById("players");

    if(!box) return;

    const list = players.filter(p=>{
        return filter === "ALL" || getGroup(p[2]) === filter;
    });

    box.innerHTML = list.map((p)=>`

        <article class="player"
                 onclick="playerProfile('${p[1]}')">

            <div class="player-number">
                ${p[0]}
            </div>

            <div class="player-photo">
                ${p[2] === "GK" ? "GK" : "PC"}
            </div>

            <div class="player-info">

                <h3>${p[1]}</h3>

                <p>
                    ${p[4]} ${p[3]} • ${p[2]}
                </p>

            </div>

            <div class="player-arrow">
                →
            </div>

        </article>

    `).join("");
}


function filterPlayers(filter,button){

    document.querySelectorAll(".filter").forEach(x=>{
        x.classList.remove("active");
    });

    button.classList.add("active");

    renderPlayers(filter);
}


/* ================================
   PLAYER PROFILE
================================ */

function playerProfile(name){

    const p = players.find(x=>x[1] === name);

    if(!p) return;

    app.innerHTML = `

        <section class="page-header">

            <small>PUMA CITY FC • PLAYER</small>

            <h1>
                ${p[1]}
            </h1>

        </section>

        <section class="section">

            <div class="player-photo"
                 style="
                    width:100%;
                    height:300px;
                    font-size:60px;
                 ">
                ${p[2] === "GK" ? "GK" : "PC"}
            </div>

            <div class="stats"
                 style="margin-top:15px">

                <div class="stat">
                    <strong>${p[0]}</strong>
                    <span>NUMBER</span>
                </div>

                <div class="stat">
                    <strong>${p[2]}</strong>
                    <span>POSITION</span>
                </div>

                <div class="stat">
                    <strong>${p[4]}</strong>
                    <span>NATION</span>
                </div>

            </div>

            <div style="margin-top:20px">

                <button class="match-button"
                        onclick="squadPage()">
                    ← BACK TO SQUAD
                </button>

            </div>

        </section>

    `;

    window.scrollTo(0,0);
}

/* ================================
   FIXTURES & LEAGUE
================================ */

const leagueTeams = [
    "Puma City FC",
    "Tomashi Warriors",
    "Rising Sunset Coast",
    "Real South Tike",
    "Zenith FC",
    "Eastern Fire Range"
];

const leagueFixtures = [

    // MATCHDAY 1 — 23 AUG
    ["1","23 AUG","Puma City FC","Zenith FC","Puma City Stadium","19:30"],
    ["1","23 AUG","Eastern Fire Range","Tomashi Warriors","Eastern Fire Range Stadium","19:30"],
    ["1","23 AUG","Rising Sunset Coast","Real South Tike","Sunset Coast Stadium","19:30"],

    // MATCHDAY 2 — 29 AUG
    ["2","29 AUG","Eastern Fire Range","Zenith FC","Eastern Fire Range Stadium","19:30"],
    ["2","29 AUG","Puma City FC","Rising Sunset Coast","Puma City Stadium","19:30"],
    ["2","29 AUG","Tomashi Warriors","Real South Tike","Tomashi Stadium","19:30"],

    // MATCHDAY 3 — 05 SEP
    ["3","05 SEP","Tomashi Warriors","Puma City FC","Tomashi Stadium","19:30"],
    ["3","05 SEP","Eastern Fire Range","Real South Tike","Eastern Fire Range Stadium","19:30"],
    ["3","05 SEP","Zenith FC","Rising Sunset Coast","Zenith Arena","19:30"],

    // MATCHDAY 4 — 11 SEP
    ["4","11 SEP","Eastern Fire Range","Rising Sunset Coast","Eastern Fire Range Stadium","19:30"],
    ["4","11 SEP","Real South Tike","Puma City FC","South Tike Stadium","19:30"],
    ["4","11 SEP","Zenith FC","Tomashi Warriors","Zenith Arena","19:30"],

    // MATCHDAY 5 — 18 SEP
    ["5","18 SEP","Rising Sunset Coast","Tomashi Warriors","Sunset Coast Stadium","19:30"],
    ["5","18 SEP","Real South Tike","Zenith FC","South Tike Stadium","19:30"],
    ["5","18 SEP","Eastern Fire Range","Puma City FC","Eastern Fire Range Stadium","19:30"],

    // MATCHDAY 6 — 24 SEP
    ["6","24 SEP","Rising Sunset Coast","Eastern Fire Range","Sunset Coast Stadium","19:30"],
    ["6","24 SEP","Puma City FC","Real South Tike","Puma City Stadium","19:30"],
    ["6","24 SEP","Tomashi Warriors","Zenith FC","Tomashi Stadium","19:30"],

    // MATCHDAY 7 — 01 OCT
    ["7","01 OCT","Real South Tike","Eastern Fire Range","South Tike Stadium","19:30"],
    ["7","01 OCT","Puma City FC","Tomashi Warriors","Puma City Stadium","19:30"],
    ["7","01 OCT","Rising Sunset Coast","Zenith FC","Sunset Coast Stadium","19:30"],

    // MATCHDAY 8 — 07 OCT
    ["8","07 OCT","Real South Tike","Rising Sunset Coast","South Tike Stadium","19:30"],
    ["8","07 OCT","Zenith FC","Puma City FC","Zenith Arena","19:30"],
    ["8","07 OCT","Tomashi Warriors","Eastern Fire Range","Tomashi Stadium","19:30"],

    // MATCHDAY 9 — 14 OCT
    ["9","14 OCT","Tomashi Warriors","Rising Sunset Coast","Tomashi Stadium","19:30"],
    ["9","14 OCT","Zenith FC","Real South Tike","Zenith Arena","19:30"],
    ["9","14 OCT","Puma City FC","Eastern Fire Range","Puma City Stadium","19:30"],

    // MATCHDAY 10 — 20 OCT
    ["10","20 OCT","Zenith FC","Eastern Fire Range","Zenith Arena","19:30"],
    ["10","20 OCT","Real South Tike","Tomashi Warriors","South Tike Stadium","19:30"],
    ["10","20 OCT","Rising Sunset Coast","Puma City FC","Sunset Coast Stadium","19:30"],

    // MATCHDAY 11 — 27 OCT
    ["11","27 OCT","Rising Sunset Coast","Tomashi Warriors","Sunset Coast Stadium","19:30"],
    ["11","27 OCT","Eastern Fire Range","Puma City FC","Eastern Fire Range Stadium","19:30"],
    ["11","27 OCT","Real South Tike","Zenith FC","South Tike Stadium","19:30"],

    // MATCHDAY 12 — 02 NOV
    ["12","02 NOV","Tomashi Warriors","Real South Tike","Tomashi Stadium","19:30"],
    ["12","02 NOV","Eastern Fire Range","Zenith FC","Eastern Fire Range Stadium","19:30"],
    ["12","02 NOV","Puma City FC","Rising Sunset Coast","Puma City Stadium","19:30"],

    // MATCHDAY 13 — 09 NOV
    ["13","09 NOV","Rising Sunset Coast","Real South Tike","Sunset Coast Stadium","19:30"],
    ["13","09 NOV","Eastern Fire Range","Tomashi Warriors","Eastern Fire Range Stadium","19:30"],
    ["13","09 NOV","Puma City FC","Zenith FC","Puma City Stadium","19:30"],

    // MATCHDAY 14 — 15 NOV
    ["14","15 NOV","Eastern Fire Range","Real South Tike","Eastern Fire Range Stadium","19:30"],
    ["14","15 NOV","Tomashi Warriors","Puma City FC","Tomashi Stadium","19:30"],
    ["14","15 NOV","Zenith FC","Rising Sunset Coast","Zenith Arena","19:30"],

    // MATCHDAY 15 — 22 NOV
    ["15","22 NOV","Zenith FC","Tomashi Warriors","Zenith Arena","19:30"],
    ["15","22 NOV","Real South Tike","Puma City FC","South Tike Stadium","19:30"],
    ["15","22 NOV","Eastern Fire Range","Rising Sunset Coast","Eastern Fire Range Stadium","19:30"],

    // MATCHDAY 16 — 28 NOV
    ["16","28 NOV","Puma City FC","Tomashi Warriors","Puma City Stadium","19:30"],
    ["16","28 NOV","Rising Sunset Coast","Zenith FC","Sunset Coast Stadium","19:30"],
    ["16","28 NOV","Real South Tike","Eastern Fire Range","South Tike Stadium","19:30"],

    // MATCHDAY 17 — 05 DEC
    ["17","05 DEC","Tomashi Warriors","Zenith FC","Tomashi Stadium","19:30"],
    ["17","05 DEC","Rising Sunset Coast","Eastern Fire Range","Sunset Coast Stadium","19:30"],
    ["17","05 DEC","Puma City FC","Real South Tike","Puma City Stadium","19:30"],

    // MATCHDAY 18 — 11 DEC
    ["18","11 DEC","Zenith FC","Real South Tike","Zenith Arena","19:30"],
    ["18","11 DEC","Puma City FC","Eastern Fire Range","Puma City Stadium","19:30"],
    ["18","11 DEC","Tomashi Warriors","Rising Sunset Coast","Tomashi Stadium","19:30"],

    // MATCHDAY 19 — 18 DEC
    ["19","18 DEC","Zenith FC","Eastern Fire Range","Zenith Arena","19:30"],
    ["19","18 DEC","Real South Tike","Tomashi Warriors","South Tike Stadium","19:30"],
    ["19","18 DEC","Rising Sunset Coast","Puma City FC","Sunset Coast Stadium","19:30"],

    // MATCHDAY 20 — 24 DEC
    ["20","24 DEC","Real South Tike","Rising Sunset Coast","South Tike Stadium","19:30"],
    ["20","24 DEC","Tomashi Warriors","Eastern Fire Range","Tomashi Stadium","19:30"],
    ["20","24 DEC","Zenith FC","Puma City FC","Zenith Arena","19:30"]
];


function fixturesPage(){

    app.innerHTML = `

        <section class="page-header">

            <small>AURAVIA LEGEND LEAGUE</small>

            <h1>
                FIXTURES
            </h1>

        </section>

        <div class="filters">

            <button class="filter active"
                    onclick="fixturesPage()">
                FIXTURES
            </button>

            <button class="filter"
                    onclick="resultsPage()">
                RESULTS
            </button>

            <button class="filter"
                    onclick="tablePage()">
                TABLE
            </button>

        </div>

        <div id="fixture-list"></div>

    `;

    const box = document.getElementById("fixture-list");

    box.innerHTML = leagueFixtures.map(f => {

        const [md,date,home,away,venue,time] = f;

        return `

            <div class="matchday-label">
                MATCHDAY ${md}
                <span>${date}</span>
            </div>

            ${fixture(md,date,home,away,venue,time)}

        `;

    }).join("");
}


function fixture(md,date,home,away,venue,time){

    const isPuma =
        home === "Puma City FC" ||
        away === "Puma City FC";

    return `

        <article class="fixture ${isPuma ? "puma-fixture" : ""}">

            <div class="fixture-date">

                <strong>
                    ${date.split(" ")[0]}
                </strong>

                <span>
                    ${date.split(" ")[1]}
                </span>

            </div>

            <div class="fixture-teams">

                <strong>
                    ${home}
                    <br>
                    <span class="fixture-vs">VS</span>
                    <br>
                    ${away}
                </strong>

                <span>
                    ${venue} • ${time}
                </span>

            </div>

            <div class="fixture-arrow">
                →
            </div>

        </article>

    `;
}


/* ================================
   RESULTS
================================ */

function resultsPage(){

    app.innerHTML = `

        <section class="page-header">

            <small>AURAVIA LEGEND LEAGUE</small>

            <h1>
                RESULTS
            </h1>

        </section>

        <div class="filters">

            <button class="filter"
                    onclick="fixturesPage()">
                FIXTURES
            </button>

            <button class="filter active">
                RESULTS
            </button>

            <button class="filter"
                    onclick="tablePage()">
                TABLE
            </button>

        </div>

        <section class="section">

            <div class="news-card">

                <div class="news-body">

                    <span class="news-tag">
                        SEASON 2026
                    </span>

                    <h3>
                        RESULTS WILL APPEAR HERE
                    </h3>

                    <p>
                        Match results will be added
                        after each Legend League game.
                    </p>

                </div>

            </div>

        </section>

    `;
}


/* ================================
   POINTS TABLE
================================ */

function tablePage(){

    app.innerHTML = `

        <section class="page-header">

            <small>AURAVIA LEGEND LEAGUE</small>

            <h1>
                LEAGUE<br>
                TABLE
            </h1>

        </section>

        <div class="filters">

            <button class="filter"
                    onclick="fixturesPage()">
                FIXTURES
            </button>

            <button class="filter"
                    onclick="resultsPage()">
                RESULTS
            </button>

            <button class="filter active">
                TABLE
            </button>

        </div>

        <section class="section">

            <div class="table-wrap">

                <table class="league-table">

                    <thead>

                        <tr>
                            <th>#</th>
                            <th>TEAM</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GD</th>
                            <th>PTS</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${leagueTeams.map((team,index)=>`

                            <tr class="${team === "Puma City FC" ? "puma-row" : ""}">

                                <td>${index + 1}</td>
                                <td>${team}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td><strong>0</strong></td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </section>

    `;
     }

/* ================================
   NEWS
================================ */

function newsPage(){

    app.innerHTML = `

        <section class="page-header">

            <small>PUMA CITY FC</small>

            <h1>
                LATEST<br>
                NEWS
            </h1>

        </section>

        <section class="section">

            ${newsCard(
                "CLUB NEWS",
                "10 SEP 2026",
                "Puma City FC Ready For A New Chapter"
            )}

            ${newsCard(
                "STADIUM",
                "08 SEP 2026",
                "Home Ground Ready For A Big Season"
            )}

            ${newsCard(
                "TEAM NEWS",
                "06 SEP 2026",
                "The Squad Continues To Push Forward"
            )}

        </section>

    `;
}


function newsCard(tag,date,title){

    return `

        <article class="news-card">

            <div class="news-image">
                PCFC
            </div>

            <div class="news-body">

                <span class="news-tag">
                    ${tag}
                </span>

                <span class="news-date">
                    ${date}
                </span>

                <h3>
                    ${title}
                </h3>

                <p>
                    Latest updates from around
                    Puma City FC.
                </p>

            </div>

        </article>

    `;
}


/* ================================
   SHOP
================================ */

function shopPage(){

    app.innerHTML = `

        <section class="page-header">

            <small>PUMA CITY FC</small>

            <h1>
                CLUB<br>
                SHOP
            </h1>

        </section>

        <div class="filters">

            <button class="filter active">
                KITS
            </button>

            <button class="filter">
                TRAINING
            </button>

            <button class="filter">
                ACCESSORIES
            </button>

        </div>

        ${product("HOME JERSEY","2026/27","₹2,499")}

        ${product("AWAY JERSEY","2026/27","₹2,499")}

        ${product("THIRD JERSEY","2026/27","₹2,499")}

        <section class="section">

            <div class="news-image"
                 style="height:160px;border-radius:12px">
                WEAR THE PRIDE
            </div>

        </section>

    `;
}


function product(name,season,price){

    let image = "";

    if(name === "HOME JERSEY"){
        image = "Home-kit.png";
    }

    else if(name === "AWAY JERSEY"){
        image = "Away-kit.png";
    }

    else if(name === "THIRD JERSEY"){
        image = "Third-kit.png";
    }

    return `

        <article class="product">

            <div class="product-image">
                <img src="${image}" alt="${name}">
            </div>

            <div class="product-info">

                <h3>
                    ${name}
                </h3>

                <p>
                    PUMA CITY FC • ${season}
                </p>

                <strong>
                    ${price}
                </strong>

            </div>

            <div class="product-arrow">
                →
            </div>

        </article>

    `;
}


/* ================================
   ABOUT
================================ */

function aboutPage(){

    app.innerHTML = `

        <div class="about-visual">

    <img src="Stadium.png" alt="Puma City Stadium">

    <div class="about-visual-overlay">
        <h2>
            SAME CLUB.<br>
            BIGGER<br>
            STORIES.
        </h2>
    </div>

</div>

        <section class="about-copy">

            <div class="section-kicker">
                PUMA CITY FC
            </div>

            <h2>
                A CLUB BUILT<br>
                FOR GREATNESS.
            </h2>

            <p>
                Puma City FC is driven by passion,
                football and ambition. Our journey
                is about more than matches — it is
                about building a community and
                creating something worth believing in.
            </p>

            <div class="about-stats">

                <div class="stat">
                    <strong>2026</strong>
                    <span>FOUNDED</span>
                </div>

                <div class="stat">
                    <strong>01</strong>
                    <span>CLUB</span>
                </div>

                <div class="stat">
                    <strong>18</strong>
                    <span>PLAYERS</span>
                </div>

            </div>

        </section>

    `;
}


/* ================================
   MENU
================================ */

function toggleMenu(){

    const menu =
        document.getElementById("menuOverlay");

    menu.classList.toggle("open");
}


function closeMenu(){

    document
        .getElementById("menuOverlay")
        .classList.remove("open");
}


/* ================================
   START
================================ */

homePage();
