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
   FIXTURES
================================ */

function fixturesPage(){

    app.innerHTML = `

        <section class="page-header">

            <small>PUMA CITY FC</small>

            <h1>
                FIXTURES
            </h1>

        </section>

        <div class="filters">

            <button class="filter active">
                UPCOMING
            </button>

            <button class="filter"
                    onclick="resultsPage()">
                RESULTS
            </button>

            <button class="filter">
                TABLE
            </button>

        </div>

        ${fixture("20","SEP","RIVAL FC","PUMA CITY FC","RIVERDALE ARENA","19:00")}

        ${fixture("27","SEP","PUMA CITY FC","SKYTON FC","PUMA CITY STADIUM","18:30")}

        ${fixture("04","OCT","UNITED CITY","PUMA CITY FC","NATIONAL ARENA","20:00")}

        ${fixture("11","OCT","PUMA CITY FC","VALOR FC","PUMA CITY STADIUM","18:30")}

        ${fixture("18","OCT","KINGS FC","PUMA CITY FC","KINGS ARENA","19:00")}

    `;
}


function fixture(day,month,home,away,venue,time){

    return `

        <article class="fixture">

            <div class="fixture-date">

                <strong>${day}</strong>

                <span>${month}</span>

            </div>

            <div class="fixture-teams">

                <strong>
                    ${home}
                    <br>
                    VS
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

            <small>PUMA CITY FC</small>

            <h1>
                RESULTS
            </h1>

        </section>

        ${fixture("12","SEP","PUMA CITY FC","RIVAL FC","PUMA CITY STADIUM","2 — 1")}

        ${fixture("06","SEP","SKYTON FC","PUMA CITY FC","SKYTON ARENA","1 — 1")}

        ${fixture("30","AUG","PUMA CITY FC","VALOR FC","PUMA CITY STADIUM","3 — 0")}

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

    return `

        <article class="product">

            <div class="product-image">
                PC
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

            <h2>
                SAME CLUB.<br>
                BIGGER<br>
                STORIES.
            </h2>

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
