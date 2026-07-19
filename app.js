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

    // 7. Uçak ve Motor Telemetri Simülasyonu
    initEngineTelemetrySimulation();

    // 8. Birincil Uçuş Göstergesi (PFD) Simülasyonu
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
function initPrimaryFlightDisplaySimulation() {
    const canvas = document.getElementById("pfd-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let pitch = 2.0;    // dereceler (pitch)
    let roll = 0.0;     // dereceler (roll)
    let speed = 240.0;  // knot (airspeed)
    let alt = 5000.0;   // feet (altitude)

    function drawPFD() {
        const time = Date.now();
        
        // Değerleri yumuşak hareketlerle dalgalandır (Uçuş hissi ver)
        roll = Math.sin(time / 2500) * 12; // Roll oscillates between -12 and +12 degrees
        pitch = Math.cos(time / 3500) * 5 + 1; // Pitch oscillates between -4 and +6 degrees
        
        speed += (Math.random() - 0.5) * 0.15;
        if (speed < 235) speed = 235;
        if (speed > 245) speed = 245;

        alt += (Math.random() - 0.5) * 1.5;
        if (alt < 4950) alt = 4950;
        if (alt > 5050) alt = 5050;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = 110;
        const cy = 40;
        const aiWidth = 110; // Yapay ufuk ekranının genişliği

        // ------------------------------------------------------------------
        // A. YAPAY UFUK (ATTITUDE INDICATOR)
        // ------------------------------------------------------------------
        ctx.save();
        // Sadece merkez yapay ufuk ekranını kırpıyoruz (Airspeed/Altitude şeritleri üzerine taşmasın)
        ctx.beginPath();
        ctx.rect(cx - aiWidth/2, 0, aiWidth, canvas.height);
        ctx.clip();

        ctx.translate(cx, cy);
        ctx.rotate(roll * Math.PI / 180);
        
        // Yunuslama (pitch) kayma miktarı (1 derece = 2.5 piksel dikey kayma)
        const pitchOffset = pitch * 2.5;

        // Gökyüzü (Derin Mavi HUD Rengi)
        ctx.fillStyle = "#0e417a";
        ctx.fillRect(-150, -150, 300, 150 + pitchOffset);

        // Yeryüzü (Koyu HUD Kahverengi/Gri)
        ctx.fillStyle = "#4a3319";
        ctx.fillRect(-150, pitchOffset, 300, 150 - pitchOffset);

        // Beyaz Ufuk Çizgisi
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-150, pitchOffset);
        ctx.lineTo(150, pitchOffset);
        ctx.stroke();

        // Yunuslama Kademeleri (Pitch Ladder)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.font = "8px Orbitron";
        ctx.lineWidth = 1;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        const pitchLevels = [-20, -15, -10, -5, 5, 10, 15, 20];
        pitchLevels.forEach(level => {
            const y = pitchOffset - (level * 2.5);
            if (y > -80 && y < 80) {
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

                ctx.fillText(Math.abs(level), 18, y);
            }
        });

        ctx.restore();

        // ------------------------------------------------------------------
        // B. UFUK ÜZERİNDEKİ SABİT UÇAK GÖSTERGESİ (W-WINGS)
        // ------------------------------------------------------------------
        ctx.strokeStyle = "#ffaa00"; // Amber renkli uçak sembolü
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        // Sol kanat çubuğu
        ctx.moveTo(cx - 22, cy);
        ctx.lineTo(cx - 10, cy);
        ctx.lineTo(cx - 10, cy + 4);
        // Sağ kanat çubuğu
        ctx.moveTo(cx + 22, cy);
        ctx.lineTo(cx + 10, cy);
        ctx.lineTo(cx + 10, cy + 4);
        // Merkez referans çentiği
        ctx.moveTo(cx - 2, cy - 2);
        ctx.lineTo(cx + 2, cy - 2);
        ctx.stroke();

        // Üst Yatış Pointer'ı (Roll Indicator)
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, 2);
        ctx.lineTo(cx - 4, 8);
        ctx.lineTo(cx + 4, 8);
        ctx.closePath();
        ctx.stroke();

        // ------------------------------------------------------------------
        // C. HIZ ŞERİDİ (AIRSPEED TAPE - SOL BÖLÜM)
        // ------------------------------------------------------------------
        const tapeWidth = 45;
        ctx.fillStyle = "rgba(6, 12, 26, 0.9)";
        ctx.fillRect(0, 0, tapeWidth, canvas.height);
        
        ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(tapeWidth, 0);
        ctx.lineTo(tapeWidth, canvas.height);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "9px Orbitron";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        const startSpeed = Math.floor((speed - 15) / 5) * 5;
        const endSpeed = speed + 15;

        for (let s = startSpeed; s <= endSpeed; s += 5) {
            if (s < 0) continue;
            const y = cy - (s - speed) * 2; // 1 knot = 2px
            if (y >= 0 && y <= canvas.height) {
                const isMajor = s % 10 === 0;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                ctx.beginPath();
                ctx.moveTo(tapeWidth - (isMajor ? 10 : 5), y);
                ctx.lineTo(tapeWidth, y);
                ctx.stroke();

                if (isMajor) {
                    ctx.fillText(s, tapeWidth - 13, y);
                }
            }
        }

        // Hız Okuma Kutusu (Penceresi)
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(2, cy - 8, tapeWidth - 4, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#39ff14"; // Electric Green
        ctx.font = "bold 10px Orbitron";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(Math.round(speed), tapeWidth / 2, cy);

        // ------------------------------------------------------------------
        // D. İRTİFA ŞERİDİ (ALTITUDE TAPE - SAĞ BÖLÜM)
        // ------------------------------------------------------------------
        const altTapeX = canvas.width - 55;
        const altTapeWidth = 55;
        ctx.fillStyle = "rgba(6, 12, 26, 0.9)";
        ctx.fillRect(altTapeX, 0, altTapeWidth, canvas.height);

        ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(altTapeX, 0);
        ctx.lineTo(altTapeX, canvas.height);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "9px Orbitron";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        const startAlt = Math.floor((alt - 150) / 50) * 50;
        const endAlt = alt + 150;

        for (let a = startAlt; a <= endAlt; a += 50) {
            const y = cy - (a - alt) * 0.15; // 10ft = 1.5px
            if (y >= 0 && y <= canvas.height) {
                const isMajor = a % 100 === 0;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                ctx.beginPath();
                ctx.moveTo(altTapeX, y);
                ctx.lineTo(altTapeX + (isMajor ? 10 : 5), y);
                ctx.stroke();

                if (isMajor) {
                    ctx.fillText(a, altTapeX + 13, y);
                }
            }
        }

        // İrtifa Okuma Kutusu (Penceresi)
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(altTapeX + 2, cy - 8, altTapeWidth - 4, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#39ff14"; // Electric Green
        ctx.font = "bold 10px Orbitron";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(Math.round(alt), altTapeX + altTapeWidth / 2, cy);

        // ------------------------------------------------------------------
        // E. ALT BİLGİ ALANI (HEADING/HDG)
        // ------------------------------------------------------------------
        ctx.fillStyle = "rgba(0, 240, 255, 0.95)";
        ctx.font = "bold 8.5px Orbitron";
        ctx.textAlign = "center";
        ctx.fillText(`HDG: 325°`, cx, canvas.height - 4);

        requestAnimationFrame(drawPFD);
    }

    drawPFD();
}
