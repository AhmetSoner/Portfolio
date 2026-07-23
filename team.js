/* ==========================================================================
   AVIATION HUD PORTFOLIO - TEAM DETAIL SUB-PAGE CONTROLLER
   ========================================================================== */

let currentTeamLang = localStorage.getItem("portfolio_lang") || "tr";

function getTeamIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id") || "team-aviation-ai";
}

function getTeam(lang, teamId) {
    const list = PORTFOLIO_DATA?.[lang]?.projectTeams || [];
    return list.find(team => team.id === teamId) || list[0];
}

function loadTeamData(lang, teamId) {
    const team = getTeam(lang, teamId);
    if (!team) return;

    document.title = `${team.name} // Ahmet Soner Güleç`;
    document.getElementById("telemetry-id").textContent = `// TEAM_FILE: ${team.id.toUpperCase()}`;
    document.getElementById("team-title").textContent = team.name;
    document.getElementById("team-role").textContent = team.role;
    document.getElementById("team-period").textContent = team.period;

    const logoWrap = document.getElementById("team-logo-wrap");
    const logo = document.getElementById("team-logo");
    if (team.logo) {
        logo.src = team.logo;
        logo.alt = team.name;
        logoWrap.style.display = "flex";
    } else {
        logo.src = "";
        logo.alt = "";
        logoWrap.style.display = "none";
    }

    const overviewParagraphs = team.overview || [
        team.focus,
        lang === "tr"
            ? "Bu takım altında yürütülen çalışmalar, ana sayfadaki bağımsız proje kartlarında detaylandırılan teknik çıktıların organizasyonel ve operasyonel zeminini oluşturur."
            : "The work carried out under this team forms the organizational and operational basis for the technical outputs detailed in the project cards on the homepage."
    ];
    document.getElementById("team-overview").innerHTML = overviewParagraphs
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");

    const contributions = document.getElementById("team-contributions");
    contributions.innerHTML = "";
    (team.contributions || []).forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        contributions.appendChild(li);
    });

    const outputGrid = document.getElementById("team-output-grid");
    outputGrid.innerHTML = "";
    const detailedOutputs = team.outcomeDetails || (team.outcomes || []).map(item => ({ title: item, text: "" }));
    detailedOutputs.forEach(item => {
        const card = document.createElement("div");
        card.className = "team-output-card";
        card.innerHTML = `
            <i data-lucide="badge-check"></i>
            <div>
                <h3>${item.title}</h3>
                ${item.text ? `<p>${item.text}</p>` : ""}
            </div>
        `;
        outputGrid.appendChild(card);
    });

    renderTeamProjects(lang, team);

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

function renderTeamProjects(lang, team) {
    const container = document.getElementById("team-projects-container");
    if (!container) return;

    container.innerHTML = "";

    const projectIds = team.projectIds || [];
    const projects = (PORTFOLIO_DATA[lang].projects || []).filter(project => projectIds.includes(project.id));

    if (projects.length === 0) {
        container.innerHTML = `
            <div class="empty-team-projects">
                <div class="corner-t-l"></div>
                <div class="corner-b-r"></div>
                <p>${lang === "tr" ? "Bu takım için bağlı proje bilgisi yakında eklenecek." : "Linked project information for this team will be added soon."}</p>
            </div>
        `;
        return;
    }

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.dataset.category = project.category;
        card.addEventListener("click", () => {
            window.location.href = `project.html?id=${project.id}`;
        });

        const categoryName = project.category === "donanim"
            ? (lang === "tr" ? "DONANIM" : "HARDWARE")
            : project.category === "gomulu"
                ? (lang === "tr" ? "GÖMÜLÜ" : "EMBEDDED")
                : project.category === "arge"
                    ? (lang === "tr" ? "AR-GE" : "R&D")
                    : (lang === "tr" ? "YAZILIM" : "SOFTWARE");

        card.innerHTML = `
            <div class="corner-t-l"></div>
            <div class="corner-t-r"></div>
            <div class="corner-b-l"></div>
            <div class="corner-b-r"></div>
            <div class="project-img-wrap">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay-hud">// SYS_${categoryName}</div>
            </div>
            <div class="project-body">
                <h3>${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-tags-row">
                    ${(project.tags || []).slice(0, 4).map(tag => `<span class="project-tag">${tag}</span>`).join("")}
                </div>
                <div class="project-action-hint">
                    ${lang === "tr" ? "PROJE DETAYINI AÇ" : "OPEN PROJECT DETAILS"} <i data-lucide="arrow-right"></i>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function applyTeamPageLanguage(lang) {
    currentTeamLang = lang;
    localStorage.setItem("portfolio_lang", lang);

    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (UI_TRANSLATIONS?.[lang]?.[key]) {
            el.innerHTML = UI_TRANSLATIONS[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    loadTeamData(lang, getTeamIdFromURL());
}

document.addEventListener("DOMContentLoaded", () => {
    applyTeamPageLanguage(currentTeamLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", event => {
            event.preventDefault();
            const selectedLang = btn.getAttribute("data-lang");
            if (selectedLang) {
                localStorage.setItem("portfolio_lang", selectedLang);
                window.location.reload();
            }
        });
    });
});
