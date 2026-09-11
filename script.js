/* =========================================
   PUMA CITY FC — JAVASCRIPT
   ========================================= */

function openSection(section) {

    if (section === "home") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setActiveNav(0);
        return;
    }

    if (section === "squad") {
        alert("Squad section coming next.");
        setActiveNav(1);
        return;
    }

    if (section === "fixtures") {
        alert("Fixtures section coming next.");
        setActiveNav(2);
        return;
    }

    if (section === "results") {
        alert("Results section coming next.");
        return;
    }

    if (section === "table") {
        alert("League Table section coming next.");
        setActiveNav(3);
        return;
    }

    alert("This section is coming soon.");
}


/* ---------- NAVIGATION ---------- */

function setActiveNav(index) {

    const items = document.querySelectorAll(".nav-item");

    items.forEach((item, i) => {

        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }

    });
}


/* ---------- MENU ---------- */

function showMenu() {

    alert(
        "PUMA CITY FC\n\n" +
        "Staff\n" +
        "Kits\n" +
        "Club\n\n" +
        "More sections coming soon."
    );

}
