/* ==========================================================================
   AVIATION HUD PORTFOLIO - PROJECT DETAIL SUB-PAGE CONTROLLER (project.js)
   ========================================================================== */

let currentProjectLang = localStorage.getItem("portfolio_lang") || "tr";
let activeProjectId = "project-1";

// URL'den id parametresini oku
function getProjectIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id || "project-1";
}

function loadProjectData(lang, projectId) {
    if (typeof PORTFOLIO_DATA === "undefined" || !PORTFOLIO_DATA[lang]) {
        console.error("PORTFOLIO_DATA bulunamadı.");
        return;
    }

    const projectsList = PORTFOLIO_DATA[lang].projects;
    let proj = projectsList.find(p => p.id === projectId);

    // Eğer ID ile proje bulunamazsa ilk projeye düş
    if (!proj) {
        proj = projectsList[0];
    }

    activeProjectId = proj.id;

    // Sayfa Başlığı ve Telemetri
    document.title = `${proj.title} // Ahmet Soner Güleç`;
    document.getElementById("telemetry-id").textContent = `// MISSION_FILE: ${proj.id.toUpperCase()}`;
    document.getElementById("project-status-tag").textContent = `// FILE_ID: ${proj.id.toUpperCase()} // STATUS: ACTIVE_DATA`;

    // Kategori Rozeti
    const catName = proj.category === 'donanim' ? (lang === 'tr' ? 'DONANIM TASARIMI' : 'HARDWARE DESIGN') : 
                    proj.category === 'gomulu' ? (lang === 'tr' ? 'GÖMÜLÜ SİSTEMLER' : 'EMBEDDED SYSTEMS') : 
                    (lang === 'tr' ? 'YAZILIM & SİMÜLASYON' : 'SOFTWARE & SIMULATION');
    document.getElementById("project-category").textContent = catName;

    // Başlık, Özet ve Görsel
    document.getElementById("project-title").textContent = proj.title;
    document.getElementById("project-summary").textContent = proj.summary;
    document.getElementById("project-image").src = proj.image;
    document.getElementById("project-image").alt = proj.title;
    document.getElementById("project-img-hud").textContent = `// STREAM: ${proj.id.toUpperCase()} // HIGH_RES_RENDER`;

    // Etiketler
    const tagsContainer = document.getElementById("project-tags");
    tagsContainer.innerHTML = "";
    proj.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "project-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Teknik Özellikler Tablosu
    const specsTable = document.getElementById("project-specs-table");
    specsTable.innerHTML = "";
    proj.specs.forEach(spec => {
        const item = document.createElement("div");
        item.className = "spec-item";
        item.innerHTML = `
            <span class="spec-name">${spec.name}</span>
            <span class="spec-value">${spec.value}</span>
        `;
        specsTable.appendChild(item);
    });

    // Detay Metinleri (Overview, Architecture, Analysis, Achievements)
    document.getElementById("project-overview").innerHTML = proj.overview || proj.description;
    document.getElementById("project-architecture").innerHTML = proj.architecture || proj.description;
    document.getElementById("project-analysis").innerHTML = proj.analysis || "";
    document.getElementById("project-achievements").innerHTML = proj.achievements || "";

    // Alt Sistemler Kartları (Subsystems Grid)
    const subsystemsContainer = document.getElementById("project-subsystems");
    subsystemsContainer.innerHTML = "";
    if (proj.subsystems && proj.subsystems.length > 0) {
        proj.subsystems.forEach(sub => {
            const card = document.createElement("div");
            card.className = "subsystem-card";
            card.innerHTML = `
                <div class="corner-t-l"></div>
                <div class="corner-b-r"></div>
                <h4>${sub.title}</h4>
                <p>${sub.desc}</p>
            `;
            subsystemsContainer.appendChild(card);
        });
    }

    // Diğer Projeler Kartları (Related Projects)
    renderRelatedProjects(lang, proj.id);

    // Lucide ikonlarını güncelle
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderRelatedProjects(lang, currentId) {
    const container = document.getElementById("related-projects-container");
    if (!container) return;
    container.innerHTML = "";

    const otherProjects = PORTFOLIO_DATA[lang].projects.filter(p => p.id !== currentId);

    otherProjects.forEach(proj => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.dataset.category = proj.category;
        
        const catName = proj.category === 'donanim' ? (lang === 'tr' ? 'DONANIM' : 'HARDWARE') : 
                        proj.category === 'gomulu' ? (lang === 'tr' ? 'GÖMÜLÜ' : 'EMBEDDED') : 
                        (lang === 'tr' ? 'YAZILIM' : 'SOFTWARE');

        card.addEventListener("click", () => {
            window.location.href = `project.html?id=${proj.id}`;
        });

        card.innerHTML = `
            <div class="corner-t-l"></div>
            <div class="corner-t-r"></div>
            <div class="corner-b-l"></div>
            <div class="corner-b-r"></div>
            <div class="project-img-wrap">
                <img src="${proj.image}" alt="${proj.title}" loading="lazy">
                <div class="project-overlay-hud">// SYS_${catName}</div>
            </div>
            <div class="project-body">
                <h3>${proj.title}</h3>
                <p class="project-summary">${proj.summary}</p>
                <div class="project-tags-row">
                    ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
                </div>
                <div class="project-action-hint">
                    ${lang === 'tr' ? 'AYRINTILARI AÇ' : 'OPEN DETAILS'} <i data-lucide="arrow-right"></i>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function applySubPageLanguage(lang) {
    currentProjectLang = lang;
    localStorage.setItem("portfolio_lang", lang);

    // Statik etiketleri çevir
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (typeof UI_TRANSLATIONS !== 'undefined' && UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang][key]) {
            el.innerHTML = UI_TRANSLATIONS[lang][key];
        }
    });

    // Dil buton aktifliği
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Proje verisini giydir
    const pid = getProjectIdFromURL();
    loadProjectData(lang, pid);
}

document.addEventListener("DOMContentLoaded", () => {
    const pid = getProjectIdFromURL();
    applySubPageLanguage(currentProjectLang);

    // Dil seçici tıklama dinleyicileri
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute("data-lang");
            applySubPageLanguage(selectedLang);
        });
    });
});
