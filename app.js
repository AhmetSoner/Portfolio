/* ==========================================================================
   AVIATION HUD PORTFOLIO MAIN CONTROLLER (app.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Verileri Yükle ve DOM Elemanlarını Doldur
    initPortfolioData();

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

    // 7. Birincil Uçuş Göstergesi (PFD) Simülasyonu
    initPrimaryFlightDisplaySimulation();
});

/* ==========================================================================
   1. PORTFOLYO VERİ DOLDURMA (DATA BINDING)
   ========================================================================== */
function initPortfolioData() {
    if (typeof PORTFOLIO_DATA === 'undefined') {
        console.error("PORTFOLIO_DATA bulunamadı. Lütfen data.js dosyasını kontrol edin.");
        return;
    }

    const data = PORTFOLIO_DATA;

    // Profil Bilgileri
    document.getElementById("hero-name").textContent = data.profile.name;
    document.getElementById("hero-title").textContent = data.profile.title;
    document.getElementById("hero-subtitle").textContent = data.profile.subTitle;
    document.getElementById("profile-avatar").src = data.profile.avatar;
    document.getElementById("profile-about").textContent = data.profile.about;

    // İletişim Bilgileri
    document.getElementById("profile-github").href = data.profile.socials.github;
    document.getElementById("profile-github").querySelector("span").textContent = data.profile.socials.github.replace("https://", "");
    
    document.getElementById("profile-linkedin").href = data.profile.socials.linkedin;
    document.getElementById("profile-linkedin").querySelector("span").textContent = data.profile.socials.linkedin.replace("https://", "");
    
    document.getElementById("profile-email").href = data.profile.socials.email;
    document.getElementById("profile-email").querySelector("span").textContent = data.profile.socials.email.replace("mailto:", "");

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
                    <span class="node-subtitle">${edu.degree}</span>
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
            <span class="skill-cat-tag">// ${skill.category}</span>
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
    const sweepColor = "rgba(0, 240, 255, 0.08)";
    
    // Sabit radar hedefleri (Uçan "blip"ler)
    const targets = [
        { x: width * 0.35, y: height * 0.4, size: 4, alpha: 0, speed: 0.002, angleOffset: 0.5 },
        { x: width * 0.7, y: height * 0.25, size: 5, alpha: 0, speed: 0.0015, angleOffset: 2.1 },
        { x: width * 0.55, y: height * 0.7, size: 6, alpha: 0, speed: 0.001, angleOffset: 4.3 }
    ];

    function drawRadar() {
        ctx.clearRect(0, 0, width, height);

        // Ekranın tam ortasını radar merkezi yapalım
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.max(width, height) * 0.6;

        ctx.strokeStyle = radarColor;
        ctx.lineWidth = 1;

        // 1. Konsantrik Radar Halkalarını Çiz
        for (let r = 100; r < maxRadius; r += 150) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
            ctx.stroke();
            
            // Halka Mesafe Metinleri (HUD stili)
            ctx.fillStyle = "rgba(0, 240, 255, 0.2)";
            ctx.font = "9px Orbitron";
            ctx.fillText(`R_${Math.round(r)}KM`, centerX + r + 5, centerY - 5);
        }

        // 2. Çapraz Eksen Çizgilerini Çiz
        ctx.beginPath();
        ctx.moveTo(centerX - maxRadius, centerY);
        ctx.lineTo(centerX + maxRadius, centerY);
        ctx.moveTo(centerX, centerY - maxRadius);
        ctx.lineTo(centerX, centerY + maxRadius);
        ctx.stroke();

        // 3. Radar Dönen Tarama Hattını Çiz (Sweeper)
        const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
        sweepGradient.addColorStop(0, "rgba(0, 240, 255, 0.05)");
        sweepGradient.addColorStop(1, "transparent");

        ctx.fillStyle = sweepGradient;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        // Tarama hattının arka ucunu oluşturmak için yelpaze çizelim
        ctx.arc(centerX, centerY, maxRadius, angle, angle + 0.3);
        ctx.lineTo(centerX, centerY);
        ctx.fill();

        // Taramayı gösteren parlak ön çizgi
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(angle + 0.3) * maxRadius,
            centerY + Math.sin(angle + 0.3) * maxRadius
        );
        ctx.stroke();

        // 4. Hedefleri (Blip) Güncelle ve Çiz
        targets.forEach(t => {
            // Hedefleri dairesel rotada yavaşça hareket ettirelim
            t.angleOffset += t.speed;
            t.x = centerX + Math.cos(t.angleOffset) * (maxRadius * 0.4);
            t.y = centerY + Math.sin(t.angleOffset) * (maxRadius * 0.4);

            // Sweeper hattının hedefin üzerinden geçip geçmediğini hesaplayalım
            const dx = t.x - centerX;
            const dy = t.y - centerY;
            const targetAngle = Math.atan2(dy, dx);
            
            // Açıları pozitif aralığa normalize edelim (0 - 2PI)
            let diff = (angle + 0.3 - targetAngle) % (Math.PI * 2);
            if (diff < 0) diff += Math.PI * 2;

            // Eğer tarama çizgisi hedefin yakınındaysa, hedefi parlat
            if (diff < 0.3) {
                t.alpha = 1.0;
            } else {
                // Zamanla solma efekti
                t.alpha -= 0.01;
                if (t.alpha < 0) t.alpha = 0;
            }

            if (t.alpha > 0) {
                // Hedef Blip
                ctx.fillStyle = `rgba(0, 240, 255, ${t.alpha})`;
                ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
                ctx.shadowBlur = 15;
                ctx.beginPath();
                ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Hedef Kare Çerçeve
                ctx.strokeStyle = `rgba(57, 255, 20, ${t.alpha * 0.7})`;
                ctx.lineWidth = 1;
                ctx.shadowBlur = 0;
                ctx.strokeRect(t.x - t.size - 4, t.y - t.size - 4, t.size * 2 + 8, t.size * 2 + 8);
                
                // Hedef Bilgisi Yazısı
                ctx.fillStyle = `rgba(57, 255, 20, ${t.alpha})`;
                ctx.font = "8px Orbitron";
                ctx.fillText(`TRGT_0${targets.indexOf(t) + 1}`, t.x + t.size + 8, t.y - 4);
                ctx.fillText(`ALT:${Math.round(t.alpha * 8200)}FT`, t.x + t.size + 8, t.y + 6);
            }
        });

        // Açıyı döndür
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

        card.innerHTML = `
            <div class="corner-t-l"></div>
            <div class="corner-t-r"></div>
            <div class="corner-b-l"></div>
            <div class="corner-b-r"></div>
            <div class="project-img-wrap">
                <img src="${proj.image}" alt="${proj.title}" loading="lazy">
                <div class="project-overlay-hud">// SYS_${proj.category.toUpperCase()}</div>
            </div>
            <div class="project-body">
                <h3>${proj.title}</h3>
                <p class="project-summary">${proj.summary}</p>
                <div class="project-tags-row">
                    ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
                </div>
                <div class="project-action-hint">
                    AYRINTILARI AÇ <i data-lucide="arrow-right"></i>
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
    document.getElementById("modal-cat").textContent = proj.category.toUpperCase();
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
   7. UÇAK VE MOTOR TELEMETRİ SİMÜLASYONU
   ========================================================================== */
function initEngineTelemetrySimulation() {
    const n1Display = document.getElementById("telemetry-n1");
    const egtDisplay = document.getElementById("telemetry-egt");
    const hydDisplay = document.getElementById("telemetry-hyd");

    if (!n1Display || !egtDisplay || !hydDisplay) return;

    function updateTelemetry() {
        // N1 RPM: 90.5% - 92.5% arası dalgalansın
        const n1 = (90.5 + Math.random() * 2).toFixed(1);
        // EGT Sıcaklık: 615 - 625 °C arası dalgalansın
        const egt = Math.round(615 + Math.random() * 10);
        // Hidrolik Basınç: 2980 - 3020 PSI arası dalgalansın
        const hyd = Math.round(2980 + Math.random() * 40);

        n1Display.textContent = `${n1}%`;
        egtDisplay.textContent = `${egt}°C`;
        hydDisplay.textContent = `${hyd} PSI`;
    }

    // Her 1.5 saniyede bir güncelle
    setInterval(updateTelemetry, 1500);
}

/* ==========================================================================
   8. BİRİNCİL UÇUŞ GÖSTERGESİ (PFD) SİMÜLASYONU
   ========================================================================== */
/* ==========================================================================
   7. BİRİNCİL UÇUŞ GÖSTERGESİ (PFD) SİMÜLASYONU (A320 STYLE - 320x240)
   ========================================================================== */
function initPrimaryFlightDisplaySimulation() {
    const canvas = document.getElementById("pfd-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let pitch = 0.5;    // dereceler (pitch)
    let roll = 0.0;     // dereceler (roll)
    let speed = 142.0;  // knot (Airspeed)
    let alt = 3720.0;   // feet (Altitude)
    let heading = 265;  // derece (Heading)
    
    // Flight Director (FD) sapmaları
    let fdX = 0;
    let fdY = 0;

    function drawPFD() {
        const time = Date.now();
        
        // Değerleri dalgalandır (Uçuş hissi ver)
        roll = Math.sin(time / 2800) * 10; 
        pitch = Math.cos(time / 3600) * 4 + 1.2; 
        
        speed += (Math.random() - 0.5) * 0.1;
        if (speed < 138) speed = 138;
        if (speed > 146) speed = 146;

        alt += (Math.random() - 0.5) * 1.5;
        if (alt < 3680) alt = 3680;
        if (alt > 3760) alt = 3760;

        heading += (Math.random() - 0.5) * 0.05;
        if (heading > 360) heading -= 360;
        if (heading < 0) heading += 360;

        fdX = Math.sin(time / 1800) * 8;
        fdY = Math.cos(time / 2200) * 5;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = 160;       // Merkez X (Canvas genişliği 320)
        const cy = 120;       // Merkez Y (Canvas yüksekliği 240)
        const cy_ai = 115;    // Yapay ufuk merkez Y
        const radius = 52;    // Yapay Ufuk Küre Yarıçapı

        // ==================================================================
        // A. YAPAY UFUK KÜRESİ (ATTITUDE INDICATOR)
        // ==================================================================
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy_ai, radius, 0, Math.PI * 2);
        ctx.clip(); // Küre dışına taşanları kırp

        ctx.translate(cx, cy_ai);
        ctx.rotate(roll * Math.PI / 180);
        
        // Dikey pitch kayması (1 derece = 4.2 piksel)
        const pitchOffset = pitch * 4.2;

        // Gökyüzü (Koyu HUD Mavisi)
        ctx.fillStyle = "#0c2b4d";
        ctx.fillRect(-120, -120, 240, 120 + pitchOffset);

        // Yeryüzü (Koyu Toprak Kahvesi)
        ctx.fillStyle = "#3a2512";
        ctx.fillRect(-120, pitchOffset, 240, 120 - pitchOffset);

        // Beyaz Ufuk Çizgisi
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-120, pitchOffset);
        ctx.lineTo(120, pitchOffset);
        ctx.stroke();

        // Yunuslama Merdiveni (Pitch Ladder)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
        ctx.font = "8px Orbitron";
        ctx.lineWidth = 0.8;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        const pitchLevels = [-20, -10, 10, 20];
        pitchLevels.forEach(level => {
            const y = pitchOffset - (level * 4.2);
            if (y > -radius && y < radius) {
                ctx.beginPath();
                ctx.moveTo(-15, y);
                ctx.lineTo(15, y);
                ctx.stroke();

                // Küçük tırnaklar
                ctx.beginPath();
                ctx.moveTo(-15, y);
                ctx.lineTo(-15, y + (level > 0 ? 3 : -3));
                ctx.moveTo(15, y);
                ctx.lineTo(15, y + (level > 0 ? 3 : -3));
                ctx.stroke();

                ctx.fillText(Math.abs(level), 19, y);
            }
        });

        ctx.restore();

        // ==================================================================
        // B. FLIGHT DIRECTOR (FD) ÇAPRAZI (Yeşil)
        // ==================================================================
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy_ai, radius, 0, Math.PI * 2);
        ctx.clip();

        ctx.strokeStyle = "#39ff14";
        ctx.lineWidth = 1.2;
        
        // Dikey Çizgi
        ctx.beginPath();
        ctx.moveTo(cx + fdX, cy_ai - radius);
        ctx.lineTo(cx + fdX, cy_ai + radius);
        ctx.stroke();

        // Yatay Çizgi
        ctx.beginPath();
        ctx.moveTo(cx - radius, cy_ai + fdY);
        ctx.lineTo(cx + radius, cy_ai + fdY);
        ctx.stroke();
        ctx.restore();

        // ==================================================================
        // C. SABİT UÇAK REFERANS SEMBOLÜ (Airbus Amber Çerçeve)
        // ==================================================================
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4.5;
        drawAircraftWings(ctx, cx, cy_ai);
        
        ctx.strokeStyle = "#ff9900";
        ctx.lineWidth = 2.2;
        drawAircraftWings(ctx, cx, cy_ai);

        // Küre Dış Çerçevesi
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy_ai, radius, 0, Math.PI * 2);
        ctx.stroke();

        // ==================================================================
        // D. HIZ ŞERİDİ (AIRSPEED TAPE - SOL BÖLÜM)
        // ==================================================================
        const speedX = 8;
        const speedW = 46;
        const tapeH = 155;
        const tapeY = 30;

        ctx.fillStyle = "rgba(20, 30, 50, 0.65)";
        ctx.fillRect(speedX, tapeY, speedW, tapeH);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.strokeRect(speedX, tapeY, speedW, tapeH);

        ctx.save();
        ctx.beginPath();
        ctx.rect(speedX, tapeY + 1, speedW, tapeH - 2);
        ctx.clip();

        ctx.fillStyle = "#d1dbed";
        ctx.font = "8.5px Orbitron";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        const startSpeed = Math.floor((speed - 40) / 10) * 10;
        const endSpeed = speed + 40;

        for (let s = startSpeed; s <= endSpeed; s += 10) {
            if (s < 0) continue;
            // 1 knot = 1.6 piksel kayma
            const y = (tapeY + tapeH/2) - (s - speed) * 1.6;
            ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
            ctx.beginPath();
            ctx.moveTo(speedX + speedW - 10, y);
            ctx.lineTo(speedX + speedW, y);
            ctx.stroke();

            ctx.fillText(s, speedX + speedW - 13, y);
        }
        ctx.restore();

        // Hız Okuma Gösterge Kutusu (Cyan)
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(speedX + speedW - 4, cy_ai - 7);
        ctx.lineTo(speedX + speedW - 8, cy_ai - 7);
        ctx.lineTo(speedX + speedW - 13, cy_ai);
        ctx.lineTo(speedX + speedW - 8, cy_ai + 7);
        ctx.lineTo(speedX + speedW - 4, cy_ai + 7);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillRect(speedX + 2, cy_ai - 9, speedW - 16, 18);
        ctx.strokeRect(speedX + 2, cy_ai - 9, speedW - 16, 18);
        
        ctx.fillStyle = "#39ff14";
        ctx.font = "bold 10px Orbitron";
        ctx.textAlign = "center";
        ctx.fillText(Math.round(speed), speedX + (speedW - 12)/2, cy_ai + 1);

        // ==================================================================
        // E. SAĞ İRTİFA ŞERİDİ (ALTITUDE TAPE)
        // ==================================================================
        const altX = canvas.width - 64;
        const altW = 55;

        ctx.fillStyle = "rgba(20, 30, 50, 0.65)";
        ctx.fillRect(altX, tapeY, altW, tapeH);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.strokeRect(altX, tapeY, altW, tapeH);

        ctx.save();
        ctx.beginPath();
        ctx.rect(altX, tapeY + 1, altW, tapeH - 2);
        ctx.clip();

        ctx.fillStyle = "#d1dbed";
        ctx.font = "8.5px Orbitron";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        const startAlt = Math.floor((alt - 400) / 100) * 100;
        const endAlt = alt + 400;

        for (let a = startAlt; a <= endAlt; a += 100) {
            if (a < 0) continue;
            // 10 feet = 0.22 piksel kayma
            const y = (tapeY + tapeH/2) - (a - alt) * 0.22;
            ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
            ctx.beginPath();
            ctx.moveTo(altX, y);
            ctx.lineTo(altX + 10, y);
            ctx.stroke();

            ctx.fillText(a, altX + 14, y);
        }
        ctx.restore();

        // İrtifa Okuma Kutusu
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#39ff14";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(altX - 8, cy_ai - 9, altW + 6, 18);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#39ff14";
        ctx.font = "bold 10px Orbitron";
        ctx.textAlign = "center";
        ctx.fillText(Math.round(alt), altX + altW/2 - 3, cy_ai + 1);

        // ==================================================================
        // F. YATAY PUSULA ŞERİDİ (HEADING TAPE)
        // ==================================================================
        const hdgY = 202;
        const hdgW = 180;
        const hdgX = cx - hdgW/2;
        const hdgH = 16;

        ctx.fillStyle = "rgba(20, 30, 50, 0.65)";
        ctx.fillRect(hdgX, hdgY, hdgW, hdgH);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.strokeRect(hdgX, hdgY, hdgW, hdgH);

        ctx.save();
        ctx.beginPath();
        ctx.rect(hdgX + 1, hdgY + 1, hdgW - 2, hdgH - 2);
        ctx.clip();

        ctx.fillStyle = "#d1dbed";
        ctx.font = "8px Orbitron";
        ctx.textAlign = "center";
        
        const startHdg = Math.floor((heading - 25) / 5) * 5;
        const endHdg = heading + 25;

        for (let h = startHdg; h <= endHdg; h += 5) {
            let normH = (h + 360) % 360;
            // 1 derece = 3.6 piksel yatay kayma
            const x = cx - (heading - h) * 3.6;
            ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
            ctx.beginPath();
            ctx.moveTo(x, hdgY);
            ctx.lineTo(x, hdgY + 5);
            ctx.stroke();

            if (normH % 10 === 0) {
                let lbl = String(normH / 10).padStart(2, '0');
                if (normH === 0) lbl = "N";
                ctx.fillText(lbl, x, hdgY + 13);
            }
        }
        ctx.restore();

        // Sabit Pusula Index İşaretçisi
        ctx.strokeStyle = "#ffaa00";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, hdgY);
        ctx.lineTo(cx, hdgY + 5);
        ctx.stroke();

        ctx.strokeStyle = "#39ff14";
        ctx.fillStyle = "#39ff14";
        ctx.beginPath();
        ctx.moveTo(cx, hdgY + 6);
        ctx.lineTo(cx + 4, hdgY + 10);
        ctx.lineTo(cx, hdgY + 14);
        ctx.lineTo(cx - 4, hdgY + 10);
        ctx.closePath();
        ctx.stroke();

        // ==================================================================
        // G. FMA BİLGİLERİ (FLIGHT MODE ANNUNCIATOR - ÜST PANEL)
        // ==================================================================
        ctx.fillStyle = "#39ff14";
        ctx.font = "8px Orbitron";
        ctx.textAlign = "left";
        ctx.fillText("SPEED", 12, 16);
        
        ctx.fillStyle = "#00f0ff";
        ctx.fillText("G/S", 75, 16);
        ctx.fillText("LOC", 120, 16);

        ctx.fillStyle = "#ffffff";
        ctx.fillText("CAT 3", 175, 11);
        ctx.fillText("DUAL", 175, 21);

        ctx.fillText("AP1+2", 235, 11);
        ctx.fillText("1 FD 2", 235, 21);
        ctx.fillStyle = "#00f0ff";
        ctx.fillText("A/THR", 235, 31);

        requestAnimationFrame(drawPFD);
    }

    function drawAircraftWings(c, x, y) {
        c.beginPath();
        c.moveTo(x - 30, y - 5);
        c.lineTo(x - 15, y - 5);
        c.lineTo(x - 15, y + 2);
        
        c.moveTo(x + 30, y - 5);
        c.lineTo(x + 15, y - 5);
        c.lineTo(x + 15, y + 2);
        
        c.rect(x - 2, y - 7, 4, 4);
        c.stroke();
    }

    drawPFD();
}
