/* =========================================
   PUMA CITY FC — WEBSITE JAVASCRIPT
   ========================================= */

const squad = [
    { name: "Rohan Kapoor", age: 18, nation: "Auravia", flag: "🇦🇺", position: "GK", group: "Goalkeepers" },
    { name: "Victor Hale", age: 25, nation: "Auravia", flag: "🇦🇺", position: "CB", group: "Defenders" },
    { name: "Aaron Bell", age: 24, nation: "Auravia", flag: "🇦🇺", position: "CB", group: "Defenders" },
    { name: "Kai Mercer", age: 21, nation: "Auravia", flag: "🇦🇺", position: "RB", group: "Defenders" },
    { name: "Julian Costa", age: 23, nation: "Portugal", flag: "🇵🇹", position: "RB/LB", group: "Defenders" },
    { name: "Nico Arlen", age: 20, nation: "Auravia", flag: "🇦🇺", position: "CAM/CM", group: "Midfielders" },
    { name: "Mateo Silvan", age: 23, nation: "Auravia", flag: "🇦🇺", position: "CM/CDM", group: "Midfielders" },
    { name: "Daniel Voss", age: 22, nation: "Auravia", flag: "🇦🇺", position: "CDM", group: "Midfielders" },
    { name: "Ethan Cruz", age: 21, nation: "Auravia", flag: "🇦🇺", position: "RW", group: "Forwards" },
    { name: "Alex Riven", age: 19, nation: "Auravia", flag: "🇦🇺", position: "LW/ST", group: "Forwards" },
    { name: "Rishabh Singh", age: 18, nation: "Auravia", flag: "🇦🇺", position: "LW/RW", group: "Forwards" },
    { name: "Aman Choudhary", age: 17, nation: "Auravia", flag: "🇦🇺", position: "GK", group: "Goalkeepers" },
    { name: "Felix Arden", age: 18, nation: "Auravia", flag: "🇦🇺", position: "CB", group: "Defenders" },
    { name: "Rahul Nair", age: 19, nation: "Auravia", flag: "🇦🇺", position: "RB/RM", group: "Defenders" },
    { name: "Dev Malhotra", age: 18, nation: "Auravia", flag: "🇦🇺", position: "CM", group: "Midfielders" },
    { name: "Kunal Shah", age: 18, nation: "Auravia", flag: "🇦🇺", position: "CAM", group: "Midfielders" },
    { name: "Kabir Sharma", age: 17, nation: "Auravia", flag: "🇦🇺", position: "ST/RW", group: "Forwards" },
    { name: "Yuvraj Patel", age: 17, nation: "Auravia", flag: "🇦🇺", position: "CAM", group: "Midfielders" }
];


/* =========================================
   PAGE NAVIGATION
   ========================================= */

function openSection(section) {

    if (section === "home") {
        location.reload();
        return;
    }

    if (section === "squad") {
        renderSquad();
        setActiveNav(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    if (section === "fixtures") {
        showComingSoon("Fixtures");
        setActiveNav(2);
        return;
    }

    if (section === "results") {
        showComingSoon("Results");
        return;
    }

    if (section === "table") {
        showComingSoon("League Table");
        setActiveNav(3);
        return;
    }

    showComingSoon("This section");
}


/* =========================================
   SQUAD PAGE
   ========================================= */

function renderSquad() {

    const main = document.getElementById("home");

    if (!main) return;

    main.innerHTML = `
        <section class="page-hero">

            <div class="hero-label">PUMA CITY FC</div>

            <h1>FIRST
