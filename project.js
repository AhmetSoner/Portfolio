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
                    proj.category === 'arge' ? (lang === 'tr' ? 'AR-GE PROJESİ' : 'R&D PROJECT') :
                    (lang === 'tr' ? 'YAZILIM & SİMÜLASYON' : 'SOFTWARE & SIMULATION');
    document.getElementById("project-category").textContent = catName;

    // Başlık, Özet ve Görsel
    document.getElementById("project-title").textContent = proj.title;
    const applicationNoEl = document.getElementById("project-application-no");
    if (applicationNoEl) {
        if (proj.applicationNo) {
            applicationNoEl.textContent = `${lang === "tr" ? "Proje No" : "Project No"}: ${proj.applicationNo}`;
            applicationNoEl.style.display = "inline-flex";
        } else {
            applicationNoEl.textContent = "";
            applicationNoEl.style.display = "none";
        }
    }
    document.getElementById("project-summary").textContent = proj.summary;
    document.getElementById("project-image").src = proj.detailImage || proj.image;
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

    renderProjectSnapshot(lang, proj);

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

    // Detay Metinleri (Overview, Scientific Merit, Architecture, Risk Management, Analysis, Achievements)
    document.getElementById("project-overview").innerHTML = proj.overview || proj.description;

    const blockMerit = document.getElementById("block-scientific-merit");
    if (proj.scientificMerit) {
        document.getElementById("project-scientific-merit").innerHTML = proj.scientificMerit;
        blockMerit.style.display = "block";
    } else if (blockMerit) {
        blockMerit.style.display = "none";
    }

    document.getElementById("project-architecture").innerHTML = proj.architecture || proj.description;

    const blockRisk = document.getElementById("block-risk-management");
    if (proj.riskManagement) {
        document.getElementById("project-risk-management").innerHTML = proj.riskManagement;
        blockRisk.style.display = "block";
    } else if (blockRisk) {
        blockRisk.style.display = "none";
    }

    document.getElementById("project-analysis").innerHTML = proj.analysis || "";
    document.getElementById("project-achievements").innerHTML = proj.achievements || "";
    enhanceProjectImages();

    // Alt Sistemler Kartları (Subsystems Grid)
    const blockSubsystems = document.getElementById("block-subsystems");
    const subsystemsContainer = document.getElementById("project-subsystems");
    subsystemsContainer.innerHTML = "";
    if (proj.subsystems && proj.subsystems.length > 0) {
        if (blockSubsystems) blockSubsystems.style.display = "block";
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
    } else if (blockSubsystems) {
        blockSubsystems.style.display = "none";
    }

    renderProjectSectionNav(lang);

    // Diğer Projeler Kartları (Related Projects)
    renderRelatedProjects(lang, proj.id);

    // Lucide ikonlarını güncelle
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderProjectSnapshot(lang, proj) {
    const summaryGrid = document.getElementById("project-summary-grid");
    const contributionCard = document.getElementById("project-contribution-card");
    const contributionList = document.getElementById("project-contribution-list");
    if (!summaryGrid || !contributionCard || !contributionList) return;

    const specs = Array.isArray(proj.specs) ? proj.specs : [];
    const pickSpec = (patterns) => {
        const item = specs.find(spec => patterns.some(pattern => spec.name.toLowerCase().includes(pattern)));
        return item ? item.value : "";
    };

    const labels = lang === "tr"
        ? {
            problem: "Problem",
            method: "Yöntem",
            stack: "Teknoloji",
            output: "Çıktı"
        }
        : {
            problem: "Problem",
            method: "Method",
            stack: "Technology",
            output: "Output"
        };

    const summary = proj.technicalSummary || {};
    const fallbackMethod = pickSpec(["topoloji", "mimari", "tasarım", "program", "model", "technology", "design", "validation"]);
    const fallbackOutput = pickSpec(["hedef", "çıktı", "güç", "donanım", "target", "power", "output"]);
    const fallbackStack = (proj.tags || []).slice(0, 4).join(" / ");

    const items = [
        { label: labels.problem, value: summary.problem || proj.summary },
        { label: labels.method, value: summary.method || fallbackMethod || proj.description || proj.summary },
        { label: labels.stack, value: summary.stack || fallbackStack },
        { label: labels.output, value: summary.output || fallbackOutput || proj.title }
    ];

    summaryGrid.innerHTML = items
        .map(item => `<div class="summary-metric"><span>${item.label}</span><p>${item.value}</p></div>`)
        .join("");

    const contributions = proj.myContribution || [];
    if (contributions.length > 0) {
        contributionCard.style.display = "block";
        contributionList.innerHTML = contributions.map(item => `<li>${item}</li>`).join("");
    } else {
        contributionCard.style.display = "none";
        contributionList.innerHTML = "";
    }
}

function enhanceProjectImages() {
    document.querySelectorAll(".project-rich-content img, .related-projects-section img").forEach(img => {
        img.loading = "lazy";
        img.decoding = "async";
    });
}

function renderProjectSectionNav(lang) {
    const nav = document.getElementById("project-section-nav");
    const links = document.getElementById("project-section-nav-links");
    if (!nav || !links) return;

    const labels = lang === "tr"
        ? {
            "block-overview": "Proje Özeti",
            "block-scientific-merit": "Bilimsel Nitelik",
            "block-architecture": "Yöntem ve Mimari",
            "block-subsystems": "Alt Sistemler",
            "block-risk-management": "Teknik Kararlar",
            "block-analysis": "Test ve Doğrulama",
            "block-achievements": "Proje Çıktıları"
        }
        : {
            "block-overview": "Overview",
            "block-scientific-merit": "Scientific Merit",
            "block-architecture": "Method & Architecture",
            "block-subsystems": "Subsystems",
            "block-risk-management": "Design Decisions",
            "block-analysis": "Testing & Verification",
            "block-achievements": "Project Outputs"
        };

    const sectionIds = [
        "block-overview",
        "block-scientific-merit",
        "block-architecture",
        "block-subsystems",
        "block-risk-management",
        "block-analysis",
        "block-achievements"
    ];

    const visibleSections = sectionIds
        .map(id => document.getElementById(id))
        .filter(section => {
            if (!section || section.style.display === "none") return false;
            const content = section.querySelector(".block-text, .subsystems-grid");
            return content && content.textContent.trim().length > 0;
        });

    links.innerHTML = visibleSections
        .map(section => `<a href="#${section.id}">${labels[section.id]}</a>`)
        .join("");

    nav.style.display = visibleSections.length > 1 ? "block" : "none";
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
                        proj.category === 'arge' ? (lang === 'tr' ? 'AR-GE' : 'R&D') :
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
                <img src="${proj.image}" alt="${proj.title}" loading="lazy" decoding="async">
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
    // PC/Mobil tespiti ve gövde sınıfı ekleme (is-mobile/is-desktop)
    const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 1024);
    if (isMobile) {
        document.body.classList.add('is-mobile');
    } else {
        document.body.classList.add('is-desktop');
    }

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
