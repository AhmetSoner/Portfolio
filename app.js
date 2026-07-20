/* ==========================================================================
   AVIATION HUD PORTFOLIO MAIN CONTROLLER (app.js)
   ========================================================================== */

let currentLang = localStorage.getItem("portfolio_lang") || "tr";

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);
    
    // Verileri yükle
    initPortfolioData();
    
    // HTML'deki data-translate etiketli statik metinleri çevir
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (typeof UI_TRANSLATIONS !== 'undefined' && UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang][key]) {
            el.innerHTML = UI_TRANSLATIONS[lang][key];
        }
    });

    // Dil seçici butonların aktiflik durumunu güncelle
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Lucide ikonlarını yeniden oluştur (çevrilen içerikler ikon içerebilir)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dil sistemini başlat (Bu otomatik olarak initPortfolioData'yı çağıracaktır)
    applyLanguage(currentLang);

    // Dil değiştirme butonlarına olay dinleyicisi ekle
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute("data-lang");
            applyLanguage(selectedLang);
        });
    });

    // 2. Radar Canvas Animasyonunu Başlat
    initRadarCanvas();

    // 3. Web Audio API Ses Sentezleyicisi & Kontrolleri
    initSoundSystem();

    // 4. Proje Filtreleme & Detay Modalı
    initProjectsLogic();

    // 5. Kaydırma Efektleri (Intersection Observer)
    initScrollEffects();

    // 6. Sistem Saati Güncelleyici
    initSystemClock();

    // 7. Estetik Havacılık Geometrik Animasyon (Plexus/Constellation)
    initAestheticAnimation();

    // 8. Sol/Sağ Kenar Plexus Animasyonu (Bağımsız Canvas)
    initMarginAnimation();
});

/* ==========================================================================
   1. PORTFOLYO VERİ DOLDURMA (DATA BINDING)
   ========================================================================== */
function initPortfolioData() {
    if (typeof PORTFOLIO_DATA === 'undefined') {
        console.error("PORTFOLIO_DATA bulunamadı. Lütfen data.js dosyasını kontrol edin.");
        return;
    }

    const data = PORTFOLIO_DATA[currentLang];

    // Profil Bilgileri
    document.getElementById("hero-name").textContent = data.profile.name;
    document.getElementById("hero-title").textContent = data.profile.title;
    document.getElementById("hero-subtitle").textContent = data.profile.subTitle;
    document.getElementById("profile-avatar").src = data.profile.avatar;
    document.getElementById("profile-about").innerHTML = data.profile.about.replace(/\n/g, '<br>');

    // İletişim Bilgileri
    if (document.getElementById("profile-card-github")) {
        document.getElementById("profile-card-github").href = data.profile.socials.github;
    }
    
    if (document.getElementById("profile-card-linkedin")) {
        document.getElementById("profile-card-linkedin").href = data.profile.socials.linkedin;
    }
    
    document.getElementById("profile-email").href = data.profile.socials.email;
    document.getElementById("profile-email").querySelector("span").textContent = data.profile.socials.email.replace("mailto:", "");
    
    if (document.getElementById("profile-phone")) {
        document.getElementById("profile-phone").href = "tel:" + data.profile.socials.phone.replace(/\s+/g, "");
        document.getElementById("profile-phone").querySelector("span").textContent = data.profile.socials.phone;
    }

    // Eğitim Zaman Tüneli
    const eduTimeline = document.getElementById("education-timeline");
    eduTimeline.innerHTML = "";
    data.education.forEach(edu => {
        const node = document.createElement("div");
        node.className = "timeline-node";
        node.innerHTML = `
            <div class="node-header">
                <div>
                    <h4 class="node-title">${edu.institution}</h4>
                    <span class="node-subtitle">${edu.degree} ${edu.gpa ? `<span class="node-gpa">GPA: ${edu.gpa}</span>` : ''}</span>
                </div>
                <span class="node-date">${edu.duration}</span>
            </div>
            <p class="node-desc">${edu.details}</p>
        `;
        eduTimeline.appendChild(node);
    });

    // Deneyim Zaman Tüneli
    const expTimeline = document.getElementById("experience-timeline");
    expTimeline.innerHTML = "";
    data.experience.forEach(exp => {
        const node = document.createElement("div");
        node.className = "timeline-node";
        node.innerHTML = `
            <div class="node-header">
                <div>
                    <h4 class="node-title">${exp.title}</h4>
                    <span class="node-subtitle">${exp.company}</span>
                </div>
                <span class="node-date">${exp.duration}</span>
            </div>
            <p class="node-desc">${exp.details}</p>
        `;
        expTimeline.appendChild(node);
    });

    // Yetenekler Listesi
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = "";
    data.skills.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.innerHTML = `
            <div class="corner-t-l"></div>
            <div class="corner-b-r"></div>
            <div class="skill-meta">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-val-pct">${skill.level}%</span>
            </div>
            <div class="skill-progress-outer">
                <div class="skill-progress-inner" data-level="${skill.level}"></div>
            </div>
        `;
        skillsContainer.appendChild(card);
    });

    // Projeleri Oluştur
    renderProjects(data.projects);
}

/* ==========================================================================
   2. RADAR CANVAS ANİMASYONU
   ========================================================================== */
function initRadarCanvas() {
    const canvas = document.getElementById("radar-canvas");
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Radar Parametreleri
    let angle = 0;
    const radarColor = "rgba(0, 240, 255, 0.15)";
    
    // Sabit radar hedefleri (Uçan "blip"ler)
    const targets = [
        { x: width * 0.35, y: height * 0.4, size: 4, alpha: 0, speed: 0.002, angleOffset: 0.5 },
        { x: width * 0.7, y: height * 0.25, size: 5, alpha: 0, speed: 0.0015, angleOffset: 2.1 },
        { x: width * 0.55, y: height * 0.7, size: 6, alpha: 0, speed: 0.001, angleOffset: 4.3 }
    ];

    function drawRadar() {
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.max(width, height) * 0.6;

        ctx.strokeStyle = radarColor;
        ctx.lineWidth = 1;

        // 1. Konsantrik Radar Halkaları
        for (let r = 100; r < maxRadius; r += 150) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = "rgba(0, 240, 255, 0.2)";
            ctx.font = "9px Orbitron";
            ctx.fillText(`R_${Math.round(r)}KM`, centerX + r + 5, centerY - 5);
        }

        // 2. Çapraz Eksen Çizgileri
        ctx.beginPath();
        ctx.moveTo(centerX - maxRadius, centerY);
        ctx.lineTo(centerX + maxRadius, centerY);
        ctx.moveTo(centerX, centerY - maxRadius);
        ctx.lineTo(centerX, centerY + maxRadius);
        ctx.stroke();

        // 3. Radar Dönen Tarama Hattı
        const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
        sweepGradient.addColorStop(0, "rgba(0, 240, 255, 0.05)");
        sweepGradient.addColorStop(1, "transparent");

        ctx.fillStyle = sweepGradient;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, maxRadius, angle, angle + 0.3);
        ctx.lineTo(centerX, centerY);
        ctx.fill();

        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(angle + 0.3) * maxRadius,
            centerY + Math.sin(angle + 0.3) * maxRadius
        );
        ctx.stroke();

        // 4. Hedef Blip'leri
        targets.forEach(t => {
            t.angleOffset += t.speed;
            t.x = centerX + Math.cos(t.angleOffset) * (maxRadius * 0.4);
            t.y = centerY + Math.sin(t.angleOffset) * (maxRadius * 0.4);

            const dx = t.x - centerX;
            const dy = t.y - centerY;
            const targetAngle = Math.atan2(dy, dx);
            
            let diff = (angle + 0.3 - targetAngle) % (Math.PI * 2);
            if (diff < 0) diff += Math.PI * 2;

            if (diff < 0.3) {
                t.alpha = 1.0;
            } else {
                t.alpha -= 0.01;
                if (t.alpha < 0) t.alpha = 0;
            }

            if (t.alpha > 0) {
                ctx.fillStyle = `rgba(0, 240, 255, ${t.alpha})`;
                ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
                ctx.shadowBlur = 15;
                ctx.beginPath();
                ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.strokeStyle = `rgba(57, 255, 20, ${t.alpha * 0.7})`;
                ctx.lineWidth = 1;
                ctx.shadowBlur = 0;
                ctx.strokeRect(t.x - t.size - 4, t.y - t.size - 4, t.size * 2 + 8, t.size * 2 + 8);
                
                ctx.fillStyle = `rgba(57, 255, 20, ${t.alpha})`;
                ctx.font = "8px Orbitron";
                ctx.fillText(`TRGT_0${targets.indexOf(t) + 1}`, t.x + t.size + 8, t.y - 4);
                ctx.fillText(`ALT:${Math.round(t.alpha * 8200)}FT`, t.x + t.size + 8, t.y + 6);
            }
        });

        angle += 0.005;
        if (angle > Math.PI * 2) angle = 0;

        requestAnimationFrame(drawRadar);
    }

    drawRadar();
}

/* ==========================================================================
   3. WEB AUDIO API SES SİSTEMİ
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initSoundSystem() {
    const toggleBtn = document.getElementById("sound-toggle");
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener("click", () => {
        soundEnabled = !soundEnabled;
        
        if (soundEnabled) {
            toggleBtn.innerHTML = '<i data-lucide="volume-2"></i>';
            toggleBtn.classList.add("active");
            playSynthSound('init');
        } else {
            toggleBtn.innerHTML = '<i data-lucide="volume-x"></i>';
            toggleBtn.classList.remove("active");
        }
        lucide.createIcons(); // Yeniden ikon oluştur
    });

    // Düğmelere ve kartlara hover/click sesleri ata
    const clickableElements = document.querySelectorAll("a, button, .project-card, .filter-btn");
    clickableElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            if (soundEnabled) playSynthSound('hover');
        });
        el.addEventListener("click", () => {
            if (soundEnabled) playSynthSound('click');
        });
    });
}

function playSynthSound(type) {
    try {
        if (!soundEnabled) return;
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Tarayıcı askıya alma durumunu çöz
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1500, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.08);
            
            gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.08);
        } 
        else if (type === 'hover') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
            
            gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.03);
        } 
        else if (type === 'init') {
            // İkili bip sesi (Sistem açılışı)
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);

            setTimeout(() => {
                if (!soundEnabled) return;
                const osc2 = audioCtx.createOscillator();
                const gain2 = audioCtx.createGain();
                osc2.connect(gain2);
                gain2.connect(audioCtx.destination);
                osc2.type = 'triangle';
                osc2.frequency.setValueAtTime(1200, audioCtx.currentTime);
                gain2.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
                osc2.start();
                osc2.stop(audioCtx.currentTime + 0.18);
            }, 120);
        }
    } catch (e) {
        console.warn("Ses sentezleme sırasında bir sorun oluştu:", e);
    }
}

/* ==========================================================================
   4. PROJELER VE MODAL MANTIĞI
   ========================================================================== */
function renderProjects(projectsList) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projectsList.forEach(proj => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.dataset.category = proj.category;
        card.addEventListener("click", () => openProjectModal(proj));

        const catName = proj.category === 'donanim' ? (currentLang === 'tr' ? 'DONANIM' : 'HARDWARE') : 
                        proj.category === 'gomulu' ? (currentLang === 'tr' ? 'GÖMÜLÜ' : 'EMBEDDED') : 
                        (currentLang === 'tr' ? 'YAZILIM' : 'SOFTWARE');

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
                    ${currentLang === 'tr' ? 'AYRINTILARI AÇ' : 'OPEN DETAILS'} <i data-lucide="arrow-right"></i>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Lucide ikonlarını kartlar için yükle
    lucide.createIcons();
}

function initProjectsLogic() {
    // Filtreleme Düğmeleri
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Aktif sınıfını güncelle
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll(".project-card");

            cards.forEach(card => {
                if (filter === "hepsi" || card.dataset.category === filter) {
                    card.style.display = "flex";
                    // Kısa bir animasyon
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

function openProjectModal(proj) {
    const modal = document.getElementById("project-modal");
    
    document.getElementById("modal-img").src = proj.image;
    
    const catName = proj.category === 'donanim' ? (currentLang === 'tr' ? 'DONANIM' : 'HARDWARE') : 
                    proj.category === 'gomulu' ? (currentLang === 'tr' ? 'GÖMÜLÜ' : 'EMBEDDED') : 
                    (currentLang === 'tr' ? 'YAZILIM' : 'SOFTWARE');
                    
    document.getElementById("modal-cat").textContent = catName;
    document.getElementById("modal-title").textContent = proj.title;
    document.getElementById("modal-desc").textContent = proj.description;

    // Teknik Detaylar Tablosu
    const specsTable = document.getElementById("modal-specs-table");
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

    // Modal Etiketleri
    const tagsContainer = document.getElementById("modal-tags-container");
    tagsContainer.innerHTML = "";
    proj.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "project-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Arka plan kaydırmayı engelle

    // Ses çal
    if (soundEnabled) playSynthSound('click');
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Arka plan kaydırmayı geri aç
}

// Global scope'a ekleyelim (HTML onclick çağrıları için)
window.closeProjectModal = closeProjectModal;

/* ==========================================================================
   5. KAYDIRMA VE İNTERAKTİF EFEKTLER (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollEffects() {
    // Bölüm Başlıkları ve Kartların Ekrana Girerken Belirmesi
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                
                // Yetenekler bölümüne girdiğinde bar animasyonlarını tetikle
                if (entry.target.id === "skills") {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));

    // Navigasyon Menüsü Aktif Eleman Takibi
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".hud-nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

function animateSkillBars() {
    const bars = document.querySelectorAll(".skill-progress-inner");
    bars.forEach(bar => {
        const targetLevel = bar.dataset.level;
        bar.style.width = `${targetLevel}%`;
    });
}

/* ==========================================================================
   6. SİSTEM SAATİ GÜNCELLEYİCİ
   ========================================================================== */
function initSystemClock() {
    const timeDisplay = document.getElementById("system-time");
    
    function updateClock() {
        const now = new Date();
        // UTC biçiminde saat gösterimi
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        timeDisplay.textContent = `UTC: ${hours}:${minutes}:${seconds}`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

/* ==========================================================================
   7. ESTETİK GPS UYDU VE YÖRÜNGE ANİMASYONU (GPS CONSTELLATION SIMULATION - SCALED)
   ========================================================================== */
function initAestheticAnimation() {
    const canvas = document.getElementById("aesthetic-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const satelliteCount = 18;  // Toplam uydu sayısı
    const orbitRadius = 117;    // Yörünge yarıçapı (78 x 1.5)
    const earthRadius = 39;     // Dünya yarıçapı (26 x 1.5)
    const focalLength = 300;    // Perspektif derinliği

    // Yörünge düzlemleri (55 derece eğiklik)
    const planes = [
        { inc: 55 * Math.PI / 180, rot: 0 },
        { inc: 55 * Math.PI / 180, rot: 120 * Math.PI / 180 },
        { inc: 55 * Math.PI / 180, rot: 240 * Math.PI / 180 }
    ];

    // Basitleştirilmiş 3D Dünya Kıtaları Koordinatları (Enlem / Boylam)
    const continents = [
        // Avrasya & Afrika
        [
            {lat: 70, lon: 20}, {lat: 60, lon: 10}, {lat: 45, lon: -5},
            {lat: 30, lon: 15}, {lat: 15, lon: 30}, {lat: -25, lon: 30},
            {lat: -30, lon: 25}, {lat: -15, lon: 40}, {lat: 10, lon: 55},
            {lat: 5, lon: 80}, {lat: 25, lon: 90}, {lat: 45, lon: 120},
            {lat: 60, lon: 140}, {lat: 65, lon: 100}, {lat: 50, lon: 60},
            {lat: 65, lon: 40}
        ],
        // Kuzey & Güney Amerika
        [
            {lat: 70, lon: -100}, {lat: 55, lon: -120}, {lat: 40, lon: -125},
            {lat: 30, lon: -115}, {lat: 20, lon: -100}, {lat: 15, lon: -95},
            {lat: 8, lon: -80}, {lat: -5, lon: -75}, {lat: -15, lon: -80},
            {lat: -35, lon: -70}, {lat: -53, lon: -70}, {lat: -45, lon: -50},
            {lat: -25, lon: -45}, {lat: -5, lon: -35}, {lat: 5, lon: -50},
            {lat: 10, lon: -75}, {lat: 25, lon: -80}, {lat: 35, lon: -75},
            {lat: 50, lon: -60}, {lat: 60, lon: -60}, {lat: 70, lon: -75}
        ],
        // Avustralya
        [
            {lat: -15, lon: 115}, {lat: -20, lon: 115}, {lat: -30, lon: 115},
            {lat: -35, lon: 135}, {lat: -30, lon: 145}, {lat: -20, lon: 150},
            {lat: -15, lon: 140}
        ]
    ];

    // Kıta Noktalarını 3D Kartezyen Koordinatlara Çevir
    const earthPoints = continents.map(cont => {
        return cont.map(pt => {
            const latRad = pt.lat * Math.PI / 180;
            const lonRad = pt.lon * Math.PI / 180;
            return {
                x: earthRadius * Math.cos(latRad) * Math.sin(lonRad),
                y: -earthRadius * Math.sin(latRad),
                z: earthRadius * Math.cos(latRad) * Math.cos(lonRad)
            };
        });
    });

    // 3 Boyutlu Perspektif İzdüşüm
    function project3D(x, y, z, cx, cy, globalRot) {
        // Y ekseni etrafında yavaş dönme (Dünya ve yörüngelerin dönüşü)
        const cosY = Math.cos(globalRot);
        const sinY = Math.sin(globalRot);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        const scale = focalLength / (focalLength + z1);
        return {
            x: cx + x1 * scale,
            y: cy + y * scale,
            z: z1,
            scale: scale
        };
    }

    let frame = 0;

    function animate() {
        frame += 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        
        // HAREKETLER YAVAŞLATILDI: 0.004 -> 0.0015 (Dünya dönüşü), 0.0055 -> 0.002 (Uydular)
        const globalRot = frame * 0.0015; 
        const satMoveAngle = frame * 0.002;

        // ==================================================================
        // 1. DÜNYA VE COĞRAFİ KATMANLAR (EARTH GLOBE)
        // ==================================================================
        // Atmosferik parlama aurası
        const aura = ctx.createRadialGradient(cx, cy, 2, cx, cy, earthRadius * 1.6);
        aura.addColorStop(0, "rgba(12, 43, 77, 0.45)");
        aura.addColorStop(0.6, "rgba(0, 240, 255, 0.1)");
        aura.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(cx, cy, earthRadius * 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Dünya Küresi Dış Outline
        ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, earthRadius, 0, Math.PI * 2);
        ctx.stroke();

        // 3D Kıtaların Çizilmesi (Dönen Dünya Görünümü)
        earthPoints.forEach(cont => {
            ctx.beginPath();
            let first = true;
            cont.forEach(pt => {
                const ptProj = project3D(pt.x, pt.y, pt.z, cx, cy, globalRot);
                
                if (first) {
                    ctx.moveTo(ptProj.x, ptProj.y);
                    first = false;
                } else {
                    ctx.lineTo(ptProj.x, ptProj.y);
                }
            });
            ctx.closePath();

            // Holografik kıta dolgu ve kenarlığı (Z derinliğine göre şeffaflık)
            ctx.fillStyle = "rgba(0, 240, 255, 0.05)";
            ctx.strokeStyle = "rgba(0, 240, 255, 0.2)";
            ctx.lineWidth = 0.8;
            ctx.fill();
            ctx.stroke();
        });

        // Dünya Enlem/Boylam Izgarası
        ctx.strokeStyle = "rgba(0, 240, 255, 0.08)";
        for (let r = 10; r < earthRadius; r += 10) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, earthRadius, r * 0.5, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // ==================================================================
        // 2. YÖRÜNGE HATLARI (ORBIT TRACKS)
        // ==================================================================
        planes.forEach((plane) => {
            ctx.strokeStyle = "rgba(0, 240, 255, 0.06)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();

            const points = 72;
            for (let i = 0; i <= points; i++) {
                const theta = (i / points) * 2 * Math.PI;

                const x0 = orbitRadius * Math.cos(theta);
                const y0 = orbitRadius * Math.sin(theta);
                const z0 = 0;

                const cosInc = Math.cos(plane.inc);
                const sinInc = Math.sin(plane.inc);
                const cosRot = Math.cos(plane.rot);
                const sinRot = Math.sin(plane.rot);

                const x1 = x0 * cosRot - y0 * sinRot * cosInc;
                const y1 = x0 * sinRot + y0 * cosRot * cosInc;
                const z1 = y0 * sinInc;

                const pt = project3D(x1, y1, z1, cx, cy, globalRot);

                if (i === 0) {
                    ctx.moveTo(pt.x, pt.y);
                } else {
                    ctx.lineTo(pt.x, pt.y);
                }
            }
            ctx.stroke();
        });

        // ==================================================================
        // 3. UYDU KONUMLANDIRMA (SATELLITE POSITIONING)
        // ==================================================================
        const satellites = [];

        planes.forEach((plane, pIdx) => {
            for (let sIdx = 0; sIdx < 6; sIdx++) {
                // Yavaşlatılmış uydu hareketi
                const theta = (sIdx / 6) * 2 * Math.PI + satMoveAngle;

                const x0 = orbitRadius * Math.cos(theta);
                const y0 = orbitRadius * Math.sin(theta);
                const z0 = 0;

                const cosInc = Math.cos(plane.inc);
                const sinInc = Math.sin(plane.inc);
                const cosRot = Math.cos(plane.rot);
                const sinRot = Math.sin(plane.rot);

                const x1 = x0 * cosRot - y0 * sinRot * cosInc;
                const y1 = x0 * sinRot + y0 * cosRot * cosInc;
                const z1 = y0 * sinInc;

                const pt = project3D(x1, y1, z1, cx, cy, globalRot);
                const id = pIdx * 6 + sIdx + 1;

                satellites.push({
                    x: pt.x,
                    y: pt.y,
                    z: pt.z,
                    scale: pt.scale,
                    id: id,
                    theta: theta
                });
            }
        });

        // ==================================================================
        // 4. UYDULAR ARASI VERİ AĞI (INTER-SATELLITE LINKS - PLEXUS EFFECT)
        // ==================================================================
        ctx.lineWidth = 0.5;
        // Büyüyen ekrana göre bağlantı mesafesi artırıldı: 55 -> 82.5
        const maxDistance = 82.5; 

        for (let i = 0; i < satellites.length; i++) {
            for (let j = i + 1; j < satellites.length; j++) {
                const s1 = satellites[i];
                const s2 = satellites[j];

                const dx = s1.x - s2.x;
                const dy = s1.y - s2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const alpha = (1 - dist / maxDistance) * 0.2;
                    ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(s1.x, s1.y);
                    ctx.lineTo(s2.x, s2.y);
                    ctx.stroke();
                }
            }
        }

        // ==================================================================
        // 5. RADYAL TARAMA / YER BAĞLANTILARI & UYDU HUD BİLGİLERİ
        // ==================================================================
        satellites.forEach((sat) => {
            // Sadece ön yüzdeki uydulardan dünyaya lazer taraması insin
            if (sat.z < 0) {
                const alpha = (1 - Math.abs(sat.z) / 150) * 0.12;
                ctx.strokeStyle = `rgba(57, 255, 20, ${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(sat.x, sat.y);
                ctx.lineTo(cx, cy);
                ctx.stroke();
            }

            // Derinlik ölçeğine göre uydu boyutu
            const size = (sat.z < 0) ? sat.scale * 4.5 : sat.scale * 2.8;

            // Parlak çekirdek (Yeşil)
            ctx.fillStyle = sat.z < 0 ? "#39ff14" : "rgba(57, 255, 20, 0.4)";
            ctx.beginPath();
            ctx.arc(sat.x, sat.y, size / 2, 0, Math.PI * 2);
            ctx.fill();

            // Öndeki uydulara fütüristik çerçeveler ve koordinat ekleme
            if (sat.z < -30) {
                // Mini Hedefleme Kutusu
                ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
                ctx.lineWidth = 0.5;
                ctx.strokeRect(sat.x - size - 1, sat.y - size - 1, size * 2 + 2, size * 2 + 2);

                // Matematiksel enlem ve boylam simülasyonu
                const pseudoLat = (Math.sin(sat.theta + sat.id) * 90);
                const pseudoLon = ((sat.theta * 180 / Math.PI + sat.id * 30) % 360) - 180;

                // Fütüristik HUD verileri
                ctx.fillStyle = "rgba(57, 255, 20, 0.75)";
                ctx.font = "7px monospace";
                ctx.textAlign = "left";
                ctx.fillText(`SV-${String(sat.id).padStart(2, '0')}`, sat.x + size + 4, sat.y - 2);

                ctx.fillStyle = "rgba(0, 240, 255, 0.6)";
                ctx.fillText(`${pseudoLat.toFixed(1)}°${pseudoLat >= 0 ? 'N' : 'S'}`, sat.x + size + 4, sat.y + 5);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   8. SOL / SAĞ KENAR PLEXUS ANİMASYONU (BAĞIMSIZ CANVAS + FARE ETKİLEŞİMİ)
   ========================================================================== */
function initMarginAnimation() {
    const canvas = document.getElementById("margin-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const COUNT = 18;
    let particles = [];

    // Fare konumu (window genelinde izle — canvas pointer-events: none olduğundan)
    let mouse = { x: -9999, y: -9999, active: false };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });
    window.addEventListener("mouseleave", () => { mouse.active = false; });

    function marginWidth() {
        return Math.max(0, (W - 1200) / 2);
    }

    function spawnParticles() {
        particles = [];
        const mw = marginWidth();
        if (mw < 40) return;

        for (let i = 0; i < COUNT; i++) {
            particles.push({
                x: Math.random() * mw,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                baseVx: 0, baseVy: 0,
                r: Math.random() * 1.5 + 0.5,
                side: 'L',
                phase: Math.random() * Math.PI * 2
            });
            particles.push({
                x: W - mw + Math.random() * mw,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                baseVx: 0, baseVy: 0,
                r: Math.random() * 1.5 + 0.5,
                side: 'R',
                phase: Math.random() * Math.PI * 2
            });
        }
        // baseVx/baseVy = ilk hızı sakla
        particles.forEach(p => { p.baseVx = p.vx; p.baseVy = p.vy; });
    }

    window.addEventListener("resize", () => {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
        spawnParticles();
    });

    spawnParticles();

    let tick = 0;
    const REPEL_RADIUS = 120;   // fare itme yarıçapı (px)
    const REPEL_STRENGTH = 2.2; // itme kuvveti çarpanı
    const LINE_RADIUS = 160;    // fareye bağ çizgisi yarıçapı

    function draw() {
        ctx.clearRect(0, 0, W, H);
        tick++;

        const mw = marginWidth();
        if (mw < 40) { requestAnimationFrame(draw); return; }

        // --- Farenin hangi kenarda olduğunu belirle ---
        const mouseInLeft  = mouse.active && mouse.x < mw;
        const mouseInRight = mouse.active && mouse.x > W - mw;
        const mouseInMargin = mouseInLeft || mouseInRight;

        // --- Dikey ince kenar çizgisi (içerik sınırı) ---
        ctx.save();
        ctx.strokeStyle = "rgba(0, 240, 255, 0.06)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 10]);
        ctx.beginPath(); ctx.moveTo(mw, 0); ctx.lineTo(mw, H); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(W - mw, 0); ctx.lineTo(W - mw, H); ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // --- Fare halka efekti (sadece margin bölgesindeyken) ---
        if (mouseInMargin) {
            const pulse = 0.5 + 0.25 * Math.sin(tick * 0.08);
            const outerR = REPEL_RADIUS * 0.45;

            // İç nokta
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 240, 255, ${0.7 + pulse * 0.3})`;
            ctx.fill();

            // Halka
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, outerR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 + pulse * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // İkinci dış halka (daha soluk)
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, outerR * 1.6, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.06 + pulse * 0.05})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
        }

        // --- Parçacık döngüsü ---
        ctx.save();

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Fare itme kuvveti
            if (mouseInMargin) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < REPEL_RADIUS && dist > 0.5) {
                    const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
                    p.vx += (dx / dist) * force * 0.06;
                    p.vy += (dy / dist) * force * 0.06;
                }
            }

            // Hızı yumuşakça taban hıza geri döndür (sürtünme)
            p.vx *= 0.985;
            p.vy *= 0.985;

            // Hareket
            p.x += p.vx;
            p.y += p.vy;

            // Sınır yansıması
            if (p.side === 'L') {
                if (p.x < 0)  { p.x = 0;  p.vx = Math.abs(p.vx) * 0.6; }
                if (p.x > mw) { p.x = mw; p.vx = -Math.abs(p.vx) * 0.6; }
            } else {
                if (p.x < W - mw) { p.x = W - mw; p.vx = Math.abs(p.vx) * 0.6; }
                if (p.x > W)      { p.x = W;       p.vx = -Math.abs(p.vx) * 0.6; }
            }
            if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy) * 0.6; }
            if (p.y > H) { p.y = H; p.vy = -Math.abs(p.vy) * 0.6; }

            // Fareye yakınlığa göre ekstra parlaklık
            const distToMouse = Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2);
            const mousePull   = mouseInMargin && distToMouse < LINE_RADIUS
                ? (1 - distToMouse / LINE_RADIUS) * 0.5
                : 0;
            const glow = 0.45 + 0.3 * Math.sin(tick * 0.025 + p.phase) + mousePull;

            // Parçacık noktası
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r + mousePull * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 240, 255, ${Math.min(glow, 1)})`;
            ctx.fill();

            // Fareye bağlantı çizgisi
            if (mouseInMargin && distToMouse < LINE_RADIUS) {
                const lineAlpha = (1 - distToMouse / LINE_RADIUS) * 0.55;
                ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }

            // Parçacıklar arası bağlantı
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                if (p.side !== q.side) continue;
                const dx = q.x - p.x;
                const dy = q.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = mw * 1.4;
                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.3;
                    ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        }

        ctx.restore();
        requestAnimationFrame(draw);
    }

    draw();
}
