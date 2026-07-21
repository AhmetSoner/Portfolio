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
    document.getElementById("team-status-tag").textContent = `// FILE_ID: ${team.id.toUpperCase()} // STATUS: ACTIVE_TEAM`;
    document.getElementById("team-category").textContent = lang === "tr" ? "PROJE TAKIMI" : "PROJECT TEAM";
    document.getElementById("team-title").textContent = team.name;
    document.getElementById("team-summary").textContent = team.focus;
    document.getElementById("team-role").textContent = team.role;
    document.getElementById("team-period").textContent = team.period;

    document.getElementById("team-overview").innerHTML = `
        <p>${team.focus}</p>
        <p>${lang === "tr"
            ? "Bu takım altında yürütülen çalışmalar, ana sayfadaki bağımsız proje kartlarında detaylandırılan teknik çıktıların organizasyonel ve operasyonel zeminini oluşturur."
            : "The work carried out under this team forms the organizational and operational basis for the technical outputs detailed in the project cards on the homepage."}</p>
    `;

    const outcomes = document.getElementById("team-outcomes");
    outcomes.innerHTML = "";
    (team.outcomes || []).forEach(item => {
        const tag = document.createElement("span");
        tag.className = "project-tag";
        tag.textContent = item;
        outcomes.appendChild(tag);
    });

    const contributions = document.getElementById("team-contributions");
    contributions.innerHTML = "";
    (team.contributions || []).forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        contributions.appendChild(li);
    });

    const outputGrid = document.getElementById("team-output-grid");
    outputGrid.innerHTML = "";
    (team.outcomes || []).forEach(item => {
        const card = document.createElement("div");
        card.className = "team-output-card";
        card.innerHTML = `<i data-lucide="badge-check"></i><span>${item}</span>`;
        outputGrid.appendChild(card);
    });

    renderRelatedTeams(lang, team.id);

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

function renderRelatedTeams(lang, activeId) {
    const container = document.getElementById("related-teams-container");
    if (!container) return;

    container.innerHTML = "";
    (PORTFOLIO_DATA[lang].projectTeams || [])
        .filter(team => team.id !== activeId)
        .forEach(team => {
            const card = document.createElement("article");
            card.className = "project-team-card";
            card.addEventListener("click", () => {
                window.location.href = `team.html?id=${team.id}`;
            });
            card.innerHTML = `
                <div class="corner-t-l"></div>
                <div class="corner-b-r"></div>
                <div class="team-card-header">
                    <div class="team-icon-wrap"><i data-lucide="${team.icon || 'users'}"></i></div>
                    <div>
                        <span class="team-role">${team.role}</span>
                        <h3>${team.name}</h3>
                    </div>
                </div>
                <div class="team-period">// ${team.period}</div>
                <p class="team-focus">${team.focus}</p>
                <div class="project-action-hint team-action-hint">
                    ${lang === "tr" ? "TAKIM DETAYINI AÇ" : "OPEN TEAM DETAILS"} <i data-lucide="arrow-right"></i>
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
            applyTeamPageLanguage(btn.getAttribute("data-lang"));
        });
    });
});
