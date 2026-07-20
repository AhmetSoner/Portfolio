const PORTFOLIO_DATA = {
  tr: {
    profile: {
      name: "Ahmet Soner Güleç",
      title: "Uçak Bakım Mühendisi",
      subTitle: "Aviyonik Sistemler | Hava Aracı Bakımı | Elektronik Sistem ve Donanım Tasarımı",
      about: "Eskişehir Teknik Üniversitesi Havacılık Elektrik-Elektronik Bölümü'nden Uçak Bakım Mühendisi / Aviyonik unvanıyla mezun oldum. Mühendislik ve teknolojiye duyduğum ilgi doğrultusunda, teorik bilgiyi pratik uygulamalarla birleştiren projelerde aktif olarak görev alıyorum. Yurt dışı staj ve eğitim süreçlerimde hava araçlarının aviyonik sistem bakımı ve montaj prosedürlerinin yanı sıra mekanik tasarım, PCB donanım tasarımı ve simülasyon/analiz çalışmaları üzerine odaklandım.\n\nKurucu ortağı olduğum Tulpar Tharros bünyesinde yapay zeka destekli havacılık muayene robotu projeleri geliştirirken; alternatif enerjili araçlar üreten Hidroana ekibinde ise elektrik-elektronik alt sistem tasarımı, entegrasyonu ve güç elektroniği konularında aktif roller üstlenerek TEKNOFEST ve Shell Eco-marathon gibi ulusal/uluslararası yarışmalarda dereceler elde ettim. Kurucusu olduğum Havacılıkta Yapay Zeka Araştırmaları Topluluğu bünyesinde ise otonom sistemler, uçuş kontrol yazılımları ve yapay zeka entegrasyonuna odaklanan TUSAŞ LIFT-UP, TÜBİTAK 2209-A ve 2209-B projelerini yöneterek havacılık ve uzay teknolojilerinde yenilikçi çözümler üretmeye devam ediyorum.",
      avatar: "Foto.jpg",
      socials: {
        github: "https://github.com/AhmetSoner",
        linkedin: "https://www.linkedin.com/in/ahmet-soner-gulec",
        email: "mailto:ahmetsonergulec@hotmail.com",
        phone: "+90 553 715 41 69"
      }
    },
    skills: [
      { name: "MATLAB / Simulink", category: "Yazılım & Simülasyon", level: 80 },
      { name: "Python / Gömülü C", category: "Yazılım & Simülasyon", level: 50 },
      { name: "PSIM", category: "Yazılım & Simülasyon", level: 80 },
      { name: "Altium Designer", category: "Donanım & Tasarım", level: 90 },
      { name: "LTspice / PSpice", category: "Donanım & Tasarım", level: 90 },
      { name: "Ansys", category: "Donanım & Tasarım", level: 60 },
      { name: "SolidWorks", category: "Havacılık & Analiz", level: 60 },
      { name: "COMSOL Multiphysics", category: "Havacılık & Analiz", level: 60 },
      { name: "XFLR5 (Aerodinamik)", category: "Havacılık & Analiz", level: 50 }
    ],
    education: [
      {
        institution: "Eskişehir Teknik Üniversitesi",
        degree: "Uçak Bakım Mühendisi / Aviyonik",
        duration: "Eylül 2020 - Mezun",
        gpa: "3.1",
        details: "Eğitimim süresince birçok disiplini kapsayan dersler gördüm:<br><br>• Gaz Türbinli Motorlar<br>• Modern Aviyonik Sistemler<br>• Microişlemciler<br>• Elektrik ve Elektronik<br>• Elektrik Makineleri<br>• Otomatik Uçuş Sistemleri<br>• Seyrüsefer Sistemleri<br>• Sayısal Veri İletimi<br>• Elektronik Gösterge Sistemleri<br>• Elektromanyetik Çevre<br>• Uçak Aerodinamiği<br>• Uçak Yapıları ve Sistemleri<br>• Uçak Malzeme Bilgisi<br>• İnsan Faktörleri<br>• Tahribatsız Muayene Yöntemleri (NDT)<br>• Haberleşme Sistemleri<br><br>Ayrıca, fakülte bünyesindeki SHY-145 onaylı uçak bakım tesislerinde uygulamalı eğitimler aracılığıyla pratik deneyim kazanılmıştır."
      }
    ],
    experience: [
      {
        title: "Kurucu",
        company: "Havacılıkta Yapay Zeka Araştırmaları Topluluğu (Eskişehir, Türkiye)",
        duration: "Ekim 2024 - Devam Ediyor",
        details: "2022 yılında kurulan çok disiplinli topluluk bünyesinde, yapay zeka ve otonom teknolojilerin havacılık ekosistemine entegrasyonuyla sektörel problemlere yenilikçi çözümler üretmeyi amaçlayan Ar-Ge çalışmalarına liderlik etmekteyim. Takımımız bünyesinde 3 TÜBİTAK 2209-A, 2 TÜBİTAK 2209-B ve 2 TUSAŞ LIFT-UP projesi yürütülmüştür.<br><br>• <b>TEKNOFEST FPV Drone Tracking Yarışması:</b> Otonom hedef tespiti, FPV drone takibi ve uçuş kontrol algoritmaları geliştirdim; sensör verisi işleme ve otonom karar mekanizmalarını MATLAB/Simulink ve Python ortamlarında modelleyerek sanal testlerle doğruladım.<br><br>• <b>TUSAŞ LIFT-UP Projesi (KAAN Entegrasyonu):</b> Milli Muharip Uçak KAAN görev bilgisayarı için kritik uçuş performans verilerinin modellenmesi çalışmasında yer aldım. Uçuş El Kitabı (AFM) nomogramlarından elde edilen veri setlerini PyTorch kullanarak Curve Fitting, Yapay Sinir Ağları (YSA) ve Pekiştirmeli Öğrenme mimarileriyle modelledim. KAAN platformundaki aviyonik donanım kısıtlamalarını (işlemci ve bellek yükü) ve doğruluk oranlarını değerlendiren karşılaştırmalı model analizleri gerçekleştirdim.<br><br>• <b>TÜBİTAK 2209-A Projesi (Kuş Tespit Sistemi):</b> Kuş çarpmalarının havacılık endüstrisindeki etkilerini azaltmayı hedefleyen derin öğrenme tabanlı görüntü işleme sistemi geliştirdim. YOLOv8 ve MobileNetV2 modelleriyle havalimanları için gerçek zamanlı kuş tespiti ve sınıflandırma altyapısını kurarak Boeing x ESTÜ Havacılığın Geleceği Yarışması'nda İkincilik Ödülü kazandım."
      },
      {
        title: "Aviyonik Mühendisliği Stajyeri",
        company: "Vilnius Gediminas Teknik Üniversitesi (Vilnius, Litvanya)",
        duration: "Ekim 2023 - Nisan 2024",
        details: "İlk dönemde, uçuşa elverişli olmayan Cessna 310, Cessna 152 ve Airbus A320 gibi uçaklar üzerinde çeşitli teknik görevler gerçekleştirdim. Bu süreçte; kanatlar, uçuş kontrol sistemleri, iniş takımları ve gövde gibi ana bileşenlerin sökülmesi, yeniden monte edilmesi ve kurulumu gibi işlemler yaptım. Ayrıca aviyonik sistemlerin bakımı, onarımı ve işletimi konularında deneyim kazandım. Sonrasında, uygulamalı eğitimimi EASA Part-145 sertifikasına sahip Kyviškės Havaalanı'nda sürdüm. Burada uçuşa elverişli Cessna 172S ve Piper PA-34 uçakları üzerinde çalıştım ve tüm çalışmalar EASA Part-66 lisansına sahip uzmanlar tarafından denetlendi. Son dönemde, insansız hava aracı teknolojileri ve bu sistemlerde kullanılan elektronik altyapılar üzerine yoğunlaştım. Üzerinde çalıştığım kuadrotorun mekanik tasarımını SolidWorks uygulamasını kullanarak gerçekleştirdim; bu süreçte ağırlık dengesi gibi kritik unsurlar için XFLR5 üzerinden hesaplamalar yaptım. Baskı devre kartı tasarımında Altium Designer kullanarak fırçasız motor sürücü devre kartlarını geliştirdim. Bu kartların doğrulama ve performans analizlerini ise PSpice ve Matlab ortamında gerçekleştirdiğim devre simülasyonları ile tamamladım. Uçuş sırasında elektronik kartlar üzerindeki yarı iletken malzemelerin sıcaklık sıcaklık dağılımını değerlendirmek amacıyla COMSOL Multiphysics yazılımı ile termal analizler gerçekleştirdim. Geliştirdiğim sistem, temel uçuş kontrol algoritmalarını destekleyecek şekilde yapılandırıldı. Tasarım sürecinde enerji verimliliği, termal dayanıklılık ve sistem güvenilirliği ön planda tutuldu ve tüm bileşenler bu hedeflere uygun olarak optimize edildi."
      },
      {
        title: "Kurucu Ortak (Co-Founder)",
        company: "Tulpar Tharros Havacılık Topluluğu",
        duration: "Mart 2023 - Eylül 2024",
        details: "Havacılık bakım, onarım ve revizyon (MRO) sektörüne yönelik yenilikçi çözümler üretmek amacıyla kurucu ortağı olduğum Tulpar Tharros ekibi bünyesinde, yapay zeka destekli yumuşak robot \"INFLOBOT\" projesini geliştirdim. İnsan erişiminin zor ve riskli olduğu dar/kapalı alanlardaki denetim verimliliğini artırmak amacıyla robotun 3D gövde tasarımını, elektrik altyapısını ve yazılımını üstlendim; özel aydınlatma ve donanım entegrasyonuyla bakım teknisyenlerine net görüş sağlayarak operasyonel hızı ve iş güvenliğini optimize ettim. Ekibimizin temelini oluşturan bu projeyle THY Design Hackathon'da finalist olduk. Ardından iş modelini ve teknik prototipi geliştirerek TEKNOFEST Girişimcilik Yarışması'nda \"En İyi Girişim\" ödülünü kazanıp kritik finansal destek elde ettik. Yakalanan ivmeyle aktif şirketleşme sürecini başlatarak Take Off İstanbul Uluslararası Girişimcilik Zirvesi'ne katıldım ve INFLOBOT'un havacılık sektöründe ticarileşmesi için stratejik B2B yatırımcı görüşmeleri yürüttüm."
      },
      {
        title: "Elektrik ve Elektronik Birimi Üyesi",
        company: "Hidroana Proje Takımı",
        duration: "Eylül 2022 - Eylül 2025",
        details: "Eskişehir Teknik Üniversitesi'nin 2007 yılında kurulmuş köklü hidrojen enerjili araç projesi Hidroana'nın elektrik biriminde 3 yıl boyunca donanım geliştirme ve Ar-Ge faaliyetlerini aktif olarak yürüttüm. Elektrik ve Elektronik Birimi Üyesi olarak DORLION ve MIDAS araçlarının tüm elektrik-elektronik sistem tasarım ve entegrasyon süreçlerinde görev aldım. Sistem mühendisliği yaklaşımıyla teknik gereksinim analizi ve alt sistem entegrasyonlarını gerçekleştirdim. Güç elektroniği kapsamında; 3 fazlı BLDC motorlar için motor sürücü donanımı, hücre güvenliğini sağlayan Batarya Yönetim Sistemi (BMS) ve elektriksel kaçak tespiti için izolasyon izleme sistemi geliştirerek şematik tasarım, PCB tasarımı, devre simülasyonları ve optimizasyonlarını tamamladım. Geliştirilen bu elektronik kartların yüksek akım ve gerilim altında kararlı çalışması amacıyla termal analizler ve termal yönetim optimizasyonları yürüttüm. Tasarladığımız donanımların araca entegrasyon süreçlerini yöneterek 3 kez TEKNOFEST Verimlilik Yarışması'nda (Türkiye İkinciliği ve Elektronik Sistemler Özel Jüri Ödülü kazanarak) ve 1 kez de küresel Shell Eco-Marathon yarışmasında takımımızı temsil ederek elektrik-elektronik birimi bünyesinde aktif görev aldım. <br><a href='https://hidroana.com' target='_blank' class='timeline-link'>hidroana.com</a>"
      }
    ],
    projects: [
      {
            "id": "project-1",
            "title": "3 Fazlı BLDC Motor Kontrolcü Devresi",
            "category": "donanim",
            "summary": "%97.15 verimliliğe ve FOC algoritmasına sahip mikrodenetleyici tabanlı motor sürücü kartı.",
            "description": "Fırçasız doğru akım (BLDC) motorların hassas ve verimli kontrolü amacıyla tasarlanmış, Alan Yönelimli Kontrol (FOC) algoritmasını koşan sürücü kartıdır. PSpice ve MATLAB/Simulink ile simüle edilerek parametre optimizasyonu yapılmış, Altium Designer ile en uygun bileşen yerleşimi ve PCB tasarımı tamamlanmıştır. Kısa devre, aşırı akım ve sıcaklık koruma entegrelidir.",
            "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "Altium Designer",
                  "FOC / Fırçasız Motor",
                  "PSpice",
                  "MATLAB / Simulink"
            ],
            "specs": [
                  {
                        "name": "Verimlilik",
                        "value": "97.15%"
                  },
                  {
                        "name": "Güç Değerleri",
                        "value": "2KW / 48V / 42A"
                  },
                  {
                        "name": "Koruma",
                        "value": "Kısa Devre, Aşırı Akım, Sıcaklık Koruma"
                  },
                  {
                        "name": "Tasarım Yazılımı",
                        "value": "Altium Designer"
                  }
            ],
            "overview": "Fırçasız Doğru Akım (BLDC) motorların yüksek verimlilik ve hassas tork/hız denetimi ile çalıştırılması için geliştirilmiş mikrodenetleyici tabanlı donanım ve yazılım mimarisidir.",
            "architecture": "Alan Yönelimli Kontrol (Field Oriented Control - FOC) algoritması koşulur. 3 fazlı sinusoidal akım sürücü yapısıyla motor dalga şekilleri pik tork verimliliğine optimize edilmiştir.",
            "subsystems": [
                  {
                        "title": "Power Stage (Güç Katı)",
                        "desc": "6 adet N-Kanal MOSFET ile 3 fazlı H-Köprü topolojisi."
                  },
                  {
                        "title": "Gate Driver (Kapı Sürücü)",
                        "desc": "Yüksek frekanslı anahtarlama için gelişmiş kapı sürücü entegresi."
                  },
                  {
                        "title": "Sensing & Feedback (Algılama)",
                        "desc": "Shunt dirençler üzerinden 3 faz akım okuma ve rotor konum tespiti."
                  },
                  {
                        "title": "Safety & Protection (Koruma)",
                        "desc": "Donanımsal aşırı akım (OCP), aşırı sıcaklık (OTP) ve kısa devre koruması."
                  }
            ],
            "analysis": "PSpice ile anahtarlama kayıpları ve transient analizler, MATLAB/Simulink ile FOC algoritması kontrol döngüsü optimizasyonları, Altium Designer ile katmanlı PCB layout tasarımı yapılmıştır.",
            "achievements": "%97.15 güç dönüştürme verimliliği elde edilmiş, 2KW sürekli güç kapasitesi testlerle doğrulanmıştır."
      },
      {
            "id": "project-2",
            "title": "Yüksek Gerilim İzolasyon İzleme Cihazı",
            "category": "donanim",
            "summary": "Elektrikli araç batarya paketlerinin şasiye karşı kaçak akım tespitini yapan güvenlik modülü.",
            "description": "Elektrikli araçlarda yüksek gerilimli batarya paketlerinin güvenliği için şasiye karşı izolasyon durumunu sürekli denetleyen sistemdir. Bataryanın pozitif (Rp) ve negatif (Rn) kutup izolasyon dirençleri hesaplanır. Ölçülen gerilimler AD8216 fark yükselteciyle yükseltilerek ADC'ye aktarılır. Sistemler arası elektriksel izolasyon AMC1311 sinyal dönüştürücü ve güvenlik röleleri ile sağlanır.",
            "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "Analog Donanım",
                  "AD8216 Fark Yükselteç",
                  "AMC1311 İzolasyon",
                  "Güvenlik"
            ],
            "specs": [
                  {
                        "name": "Ölçüm Hassasiyeti",
                        "value": "MΩ Seviyesinde İzleme"
                  },
                  {
                        "name": "Yükselteç",
                        "value": "AD8216 Fark Yükselteci"
                  },
                  {
                        "name": "Sinyal Dönüştürücü",
                        "value": "AMC1311 Elektriksel İzolasyon"
                  },
                  {
                        "name": "Güvenlik",
                        "value": "Röle Tabanlı Hat Kesme"
                  }
            ],
            "overview": "Elektrikli araçlarda ve yüksek gerilimli batarya paketlerinde (48V ve üzeri) batarya kutup uçlarının şasiye karşı yalıtım direncini sürekli denetleyen kritik emniyet donanımıdır.",
            "architecture": "Düzensiz veya simetrik yalıtım hatalarını tespit edebilmek amacıyla anahtarlamalı direnç şebekesi topolojisi kullanılır. Pozitif (Rp) ve negatif (Rn) yalıtım dirençleri dinamik olarak hesaplanır.",
            "subsystems": [
                  {
                        "title": "Difference Amplifier",
                        "desc": "AD8216 hassas fark yükselteci ile küçük gerilim değişimlerinin ölçülmesi."
                  },
                  {
                        "title": "Galvanic Isolation",
                        "desc": "AMC1311 izole amplifikatör ile yüksek gerilim tarafının düşük gerilim kontrol tarafından elektriksel olarak ayrılması."
                  },
                  {
                        "title": "Safety Relay & Cutoff",
                        "desc": "Tehlikeli izolasyon direnci düşüşünde HV hattını fiziksel olarak kesen güvenlik rölesi."
                  }
            ],
            "analysis": "MΩ seviyesindeki yalıtım direnci sapmaları simüle edilmiş, yüksek gerilim gürültü bastırma testleri tamamlanmıştır.",
            "achievements": "Elektrikli araç şasisine kaçak akım risklerini sıfıra indiren ve Uluslararası Elektroteknik Standartlarına uygun emniyet sistemi."
      },
      {
            "id": "project-3",
            "title": "Akıllı Batarya Yönetim Sistemi (BMS)",
            "category": "gomulu",
            "summary": "13S8P konfigürasyonundaki 48V - 50A batarya paketi için BQ76940 tabanlı koruma donanımı.",
            "description": "Texas Instruments BQ76940 entegresi tabanlı, 14 bit çözünürlüklü ADC ile hücre gerilimlerini, şönt direnç ile akımı, NTC termistörler ile sıcaklığı izleyen sistemdir. Hücre dengelemesi 47 ohm dirençler üzerinden pasif olarak yapılır. State of Charge (SOC) tahmini Coulomb Sayaç Metodu ile gerçekleştirilir. Tüm algoritmalar STM32F103C8T6 mikrodenetleyicisi üzerinden koşulur.",
            "image": "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "STM32F103C8T6",
                  "BQ76940 BMS",
                  "Coulomb Sayaç (SOC)",
                  "Altium Designer"
            ],
            "specs": [
                  {
                        "name": "Hücre Konfigürasyonu",
                        "value": "13S8P (LG INR18650 MJ1)"
                  },
                  {
                        "name": "Güç Değerleri",
                        "value": "48V / 50A Çıkış Kapasitesi"
                  },
                  {
                        "name": "Mikrodenetleyici",
                        "value": "STM32F103C8T6"
                  },
                  {
                        "name": "Hücre Dengeleme",
                        "value": "47 Ohm Pasif Dengeleme"
                  }
            ],
            "overview": "13S8P konfigürasyonundaki 48V / 50A Li-ion batarya paketinin güvenli çalışmasını, hücre ömrünün uzatılmasını ve şarj/deşarj dengesini sağlayan gömülü kontrol donanımıdır.",
            "architecture": "Texas Instruments BQ76940 AFE entegresi ve STM32F103C8T6 ARM Cortex-M3 mikrodenetleyici mimarisi üzerine kurgulanmıştır.",
            "subsystems": [
                  {
                        "title": "AFE (Analog Front End)",
                        "desc": "BQ76940 entegresi ile 13 hücrenin gerilimlerinin 14-bit ADC ile örneklenmesi."
                  },
                  {
                        "title": "Passive Cell Balancing",
                        "desc": "47 Ohm güç dirençleri üzerinden hücreler arası gerilim eşitleme."
                  },
                  {
                        "title": "Current & Temp Monitoring",
                        "desc": "Shunt direnç üzerinden akım okuma ve 4 kanallı NTC termistör sıcaklık izleme."
                  },
                  {
                        "title": "SOC Algorithm",
                        "desc": "Coulomb Counting (Akım Entegrasyonu) yöntemiyle gerçek zamanlı şarj seviyesi tahmini."
                  }
            ],
            "analysis": "Altium Designer ile yüksek akım yolları güç düzlemleri olarak tasarlanmış, termal kamera ile hücre dengeleme dirençlerinin ısınma testleri yapılmıştır.",
            "achievements": "Hidroana elektrikli araç projesinde 3 yıl boyunca kesintisiz ve güvenli batarya yönetimi sağlanmıştır."
      },
      {
            "id": "project-4",
            "title": "TÜBİTAK 2209-A Görüntü Tabanlı Kuş Tanıma Sistemi",
            "category": "gomulu",
            "summary": "Kuş çarpmalarını önlemek amacıyla derin öğrenme tabanlı nesne tespiti yapan yazılım.",
            "description": "Kuş çarpmalarının havacılık endüstrisine etkilerini azaltarak uçuş güvenliğini artırmayı amaçlayan araştırma projesidir. Mevcut radar tabanlı sistemlerin sınırlarını aşarak kuşları ayrıntılı tespit etmek amacıyla YOLOv8 ve MobileNetV2 nesne tanıma modelleri kullanılarak görüntü işleme tabanlı bir tespit ve tür tanımlama sistemi geliştirilmiştir. Proje TÜBİTAK tarafından desteklenmiştir.",
            "image": "https://images.unsplash.com/photo-1460602594182-8268277697b8?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "YOLOv8 / MobileNetV2",
                  "Python",
                  "Derin Öğrenme",
                  "TÜBİTAK 2209-A"
            ],
            "specs": [
                  {
                        "name": "Nesne Tespit Modeli",
                        "value": "YOLOv8 & MobileNetV2"
                  },
                  {
                        "name": "Uygulama Alanı",
                        "value": "Havaalanı Uçuş Güvenliği"
                  },
                  {
                        "name": "Süreç",
                        "value": "10/04/2024 - 10/09/2025"
                  },
                  {
                        "name": "Destek Türü",
                        "value": "TÜBİTAK 2209-A Araştırma Projesi"
                  }
            ],
            "overview": "Havalimanları ve uçuş rotalarında kuş çarpmalarından kaynaklanan hayati emniyet risklerini ve yüksek maliyetli uçak hasarlarını önlemek için geliştirilmiş yapay zeka tabanlı nesne tespit yazılımıdır.",
            "architecture": "Geleneksel radar sistemlerinin küçük kuşları tespit etmedeki yetersizliğini aşmak için derin öğrenme tabanlı görüntü işleme ve sınıflandırma boru hattı (pipeline) kurulmuştur.",
            "subsystems": [
                  {
                        "title": "Detection Engine",
                        "desc": "Real-time nesne tespiti için eğitilmiş YOLOv8 mimarisi."
                  },
                  {
                        "title": "Classification Core",
                        "desc": "Tür seviyesinde yüksek doğruluk için MobileNetV2 evrişimli sinir ağı (CNN)."
                  },
                  {
                        "title": "Camera & Stream Unit",
                        "desc": "Havalimanı çevre kameralarından canlı yayın işleme ve takip modülü."
                  },
                  {
                        "title": "Telemetry Interface",
                        "desc": "Erken uyarı ve rotadaki kuş yoğunluğunu gösteren kule kontrol arayüzü."
                  }
            ],
            "analysis": "Çeşitli hava koşulları (sis, bulut, gece) ve farklı irtifalardaki kuş sürüleri üzerinde %94'ün üzerinde tespit başarısı doğrulanmıştır.",
            "achievements": "TÜBİTAK 2209-A Ulusal Üniversite Öğrencileri Araştırma Projeleri Desteği kazanmış, Boeing x ESTÜ Havacılığın Geleceği Yarışması'nda Türkiye 2.'si olmuştur."
      },
      {
            "id": "project-5",
            "title": "INFLOBOT: Yapay Zeka Destekli MRO Robotu",
            "category": "gomulu",
            "summary": "Uçak bakım süreçlerinde yakıt tankı gibi dar alan muayeneleri için yumuşak robot asistan.",
            "description": "Havacılık bakım-onarım (MRO) sektöründe uçak yakıt tankları, uzay araçları ve roket gövdeleri gibi erişimi zor alanlarda hızlı hata tespiti yapabilen yapay zeka destekli yumuşak robottur. Entegre aydınlatma sistemiyle teknisyenlere net görüş sağlar. Proje TEKNOFEST Girişimcilik Yarışması'nda 'En İyi Girişim' seçilmiş ve THY Design Hackathon'da finalist olmuştur.",
            "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "Yumuşak Robotik",
                  "Yapay Zeka",
                  "MRO Havacılık",
                  "TEKNOFEST Ödüllü"
            ],
            "specs": [
                  {
                        "name": "Uygulama Alanı",
                        "value": "Yakıt Tankı & Ulaşılamaz Bölüm Muayenesi"
                  },
                  {
                        "name": "Ödül",
                        "value": "TEKNOFEST En İyi Girişim Ödülü"
                  },
                  {
                        "name": "Geliştirici Takım",
                        "value": "Tulpar Tharros (Co-Founder)"
                  },
                  {
                        "name": "Tasarım",
                        "value": "Esnek Yumuşak Gövde"
                  }
            ],
            "overview": "Uçak yakıt tankları, kanat içi boşluklar ve uzay aracı gövdeleri gibi teknisyen girişinin imkansız veya hayati risk taşıdığı kapalı alanlarda muayene ve bakım yapan otonom yumuşak robotik sistemdir.",
            "architecture": "Esnek ve eklemsiz yumuşak robotik (Soft Robotics) gövde yapısı sayesinde dar yapılardan kolayca geçer. Üzerindeki kamera ve sensör dizilimiyle yüzey çatlaklarını ve korozyonu yapay zeka ile tespit eder.",
            "subsystems": [
                  {
                        "title": "Soft Robotic Actuation",
                        "desc": "Şişirilebilir ve bükülebilir pnömatik/esnek gövde mekanizması."
                  },
                  {
                        "title": "Inspection Vision Unit",
                        "desc": "Yüksek çözünürlüklü endoskopik kamera ve homojen LED aydınlatma halkası."
                  },
                  {
                        "title": "AI Defect Analysis",
                        "desc": "Yüzey deformasyonlarını ve sızıntıları tanıyan derin öğrenme modeli."
                  },
                  {
                        "title": "Operator Control Station",
                        "desc": "Teknisyenin canlı görüntü alabildiği ve robotu uzaktan komuta ettiği HUD arayüzü."
                  }
            ],
            "analysis": "Dar yakıt tankı mockup'ları içinde manevra kabiliyeti ve çatlak tespit hassasiyeti test edilmiş, geleneksel muayene süresi %65 kısaltılmıştır.",
            "achievements": "TEKNOFEST Girişimcilik Yarışması'nda 'En İyi Girişim' Ödülü kazanılmış, THY Design Hackathon'da finalist olunmuş ve Take Off İstanbul Uluslararası Girişim Zirvesi'nde sergilenmiştir."
      },
      {
            "id": "project-6",
            "title": "Muharip Hava Araçlarında Uçuş Performansı Veri Setinin Makine Öğrenmesi Yöntemleriyle Modellenmesi ve Kıyaslanması",
            "category": "gomulu",
            "summary": "Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ) LIFT UP Programı ve TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri Destek Programı (Proje No: 1999B212502693 / LIFTUP-2025-2026) kapsamında Milli Muharip Uçak (KAAN) aviyonik seyrüsefer sistemleri için yürütülen bu çalışmada; U-Net CNN ve Optik Karakter Tanıma (OCR) ile dijitalleştirilen Uçuş El Kitabı (AFM) nomogram verileri üzerinde Kübik İnterpolasyon, XGBoost ve Tabular Transformer (FT-Transformer) modellerinin NVIDIA Jetson Orin Nano gömülü hedef ortamındaki çıkarım hızı, bellek ayak izi ve tahmin doğruluğu benchmark analizleri gerçekleştirilmiştir.",
            "description": "TUSAŞ (Türk Havacılık ve Uzay Sanayii A.Ş.) LIFT UP Sanayi Odaklı Lisans Bitirme Projeleri Programı kapsamında yürütülen bu çalışmada, muharip hava araçlarında kritik uçuş performans parametrelerinin (Özgül Menzil, İrtifa, Mach Sayısı, Yakıt Akışı, Sürükleme İndeksi vb.) hesaplanmasında kullanılan geleneksel kübik interpolasyon arama tablosu yöntemi ile yapay zeka modelleri (XGBoost ve Tabular Transformer) doğrusal olmayan davranışlar, çıkarım hızı, bellek ayak izi ve işlemci yükü açısından karşılaştırılmıştır.",
            "image": "kaan.jpg",
            "tags": [
                  "TUSAŞ LIFT UP",
                  "MMU KAAN",
                  "Tabular Transformer",
                  "XGBoost",
                  "NVIDIA Jetson Orin Nano",
                  "U-Net / OCR"
            ],
            "specs": [
                  {"name": "Kurum / Sanayi Ortağı", "value": "Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ)"},
                  {"name": "Destek Programları", "value": "TUSAŞ LIFT UP & TÜBİTAK 2209-B Programı"},
                  {"name": "TÜBİTAK Proje No", "value": "1999B212502693"},
                  {"name": "TUSAŞ Proje Kodu", "value": "LIFTUP-2025-2026-AV-06"},
                  {"name": "Sanayi Danışmanı", "value": "Zeynel Abidin AYDOĞAN (TUSAŞ - Havacılık Müh.)"},
                  {"name": "Akademik Danışman", "value": "Doç. Dr. Aziz KABA (ESTÜ Pilotaj)"},
                  {"name": "Proje Ekibi", "value": "Ahmet Soner GÜLEÇ (Lider), Umut ÇÖRDÜK, Ufuk ÖZKAN"},
                  {"name": "En İyi Modeller", "value": "XGBoost (Fit Score: 81.5) & FT-Transformer"},
                  {"name": "Çıkarım Gecikmesi (p95)", "value": "2.30 ms (XGBoost) / 3.05 ms (FT-Transformer)"},
                  {"name": "Hedef Donanım", "value": "NVIDIA Jetson Orin Nano"}
            ],
            "overview": "\n<strong>A. GENEL BİLGİLER VE ARAŞTIRMA ÖNERİSİ ÖZETİ</strong><br>\n• <strong>Başvuru Sahibi:</strong> Ahmet Soner GÜLEÇ (Lisans Tez Öğrencisi - Eskişehir Teknik Üniversitesi, Havacılık Elektrik Elektroniği)<br>\n• <strong>Akademik Danışman:</strong> Doç. Dr. Aziz KABA (Eskişehir Teknik Üniversitesi - Pilotaj Bölümü)<br>\n• <strong>Sanayi Danışmanı:</strong> Zeynel Abidin AYDOĞAN (TUSAŞ - Türk Havacılık ve Uzay Sanayii A.Ş., Havacılık Mühendisliği)<br>\n• <strong>Araştırmanın Yürütüleceği Kurum:</strong> Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ) / ESTÜ Havacılık Araştırma Laboratuvarı<br>\n• <strong>Destek Programı:</strong> TÜBİTAK 2209-B Üniversite Öğrencileri Sanayiye Yönelik Araştırma Projeleri Destek Programı (2025/2. Dönem)<br><br>\n\n<strong>Özet:</strong><br>\nProje, Muharip hava araçlarının (örn: MMU KAAN, F-18) aviyonik sistemlerinde uçuş performans verilerinin depolanması ve hesaplanması amacıyla kullanılan Arama Tablosu (Lookup Table - LUT) yönteminin yarattığı doğruluk kaybı ile aşırı donanım kaynağı tüketimi arasındaki teknik ikilemi; donanım verimliliği yüksek XGBoost ve Tabular Transformer modelleri ile aşmayı hedeflemektedir. Çalışmanın özgün değeri, bu modelleri standart eğitim süreçlerinin ötesine taşıyarak, Sürü Zekası (PSO) tabanlı meta-sezgisel algoritmalar aracılığıyla tahmin doğruluğu ve kaynak verimliliği hedefleri doğrultusunda eş zamanlı optimize eden yenilikçi bir metodoloji sunmasında yatmaktadır.<br><br>\nKAAN için bir vekil platform olarak seçilen F-18 uçağına ait nomogramlar, geliştirilen özelleştirilmiş MATLAB (`DigitizeGraph.m`) ve Python tabanlı çok değişkenli enterpolasyon yöntemleriyle işlenerek kapsamlı bir eğitim veri setine dönüştürülecektir. Elde edilen bu veri seti ile referans Nümerik modelin yanı sıra, PSO ile optimize edilmiş XGBoost ve Transformer modelleri geliştirilecektir. Son aşamada bu modeller; NVIDIA Jetson Orin Nano gibi endüstriyel gömülü sistemler ile Docker simülasyonları üzerinde doğruluk, hız, bellek kullanımı ve model boyutu metriklerine göre kapsamlı kıyaslama testlerine tabi tutulacaktır.\n",
            "scientificMerit": "\n<strong>1. ARAŞTIRMA ÖNERİSİNİN BİLİMSEL NİTELİĞİ</strong><br><br>\n\n<strong>1.1. Amaç ve Hedefler:</strong><br>\nMuharip hava araçlarının uçuş performans verilerinin sayısal modellenmesi sürecinde karşılaşılan temel problem, aviyonik sistemlerin doğası gereği sahip olduğu sınırlı işlem gücü ve bellek kapasitesi gibi donanımsal kısıtlamalardır. Bu kısıtlı ortam, Hava Aracı Uçuş El Kitabı (AFM) dokümanlarındaki grafiksel verilerin entegrasyonunu zorlaştırmaktadır; zira geleneksel enterpolasyon yöntemleri kabul edilemez doğruluk kayıplarına yol açarken, daha karmaşık modellerin entegrasyonu sistemin donanım sınırlarını aşmaktadır.<br>\nBu teknik kısıtı gidermek amacıyla proje; nomogramlardan çok boyutlu veri setleri oluşturulmasını ve bu verilerle XGBoost, Tabular Transformer ve Nümerik yöntemlere dayalı üç farklı modelin geliştirilmesini hedeflemektedir. Kritik bir adım olarak; bu modeller Sürü Zekası (PSO) tabanlı algoritmalarla optimize edilecek, böylece maksimum tahmin doğruluğu ile minimum işlem yükü arasındaki ideal denge sağlanacaktır.<br><br>\n\n<strong>1.2. Yenilikçi Yönü ve Teknolojik Değeri:</strong><br>\nMevcut aviyonik sistemlerde uçuş performansı çoğunlukla arama tabloları veya düşük dereceli polinomsal enterpolasyon yöntemleri kullanılarak yönetilmektedir. Bu yöntemler karmaşık doğrusal olmayan ilişkileri modellemekte yetersiz kalmakta ve doğruluktan ödün vermektedir. Benzerlerinden farklı olarak bu çalışmada modern derin öğrenme mimarileri (Tabular Transformer) ile endüstri standardı XGBoost ve Nümerik yöntemler, tek bir veri seti üzerinde hem doğruluk hem de donanım kaynak tüketimi (çıkarım hızı ms, bellek ayak izi MB) açısından bütüncül bir şekilde kıyaslanmaktadır.<br>\nProje, Türkiye'nin 2030 Sanayi ve Teknoloji Stratejisi’nde “Milli Teknoloji Hamlesi” vizyonu altında tanımlanan Havacılık ve Savunma Sanayii'nin dijital dönüşümü konusunda yer almaktadır. Tasarlanacak modellerin gömülü sistemlerde çalıştırılabilmesi kabiliyetini araştırarak yerli muharip uçakların (TF-X / KAAN) operasyonel çevikliğini artırmayı ve aviyonik yazılım alanında dışa bağımlılığı azaltacak milli bir teknik bilgi birikimi sağlamayı hedeflemektedir.\n",
            "architecture": "\n<strong>2. YÖNTEM VE METODOLOJİ</strong><br><br>\n\n<strong>2.1. Grafik Sayısallaştırma ve Tidy Data Hazırlığı:</strong><br>\n• <strong>MATLAB DigitizeGraph.m Algoritması:</strong> AFM grafik görselleri gri tonlamaya dönüştürülüp sütun sütun taranarak yoğunluk eşiğine göre eğrinin gerçek piksel yolu tespit edilmektedir. Düzgünleştirme (smoothing) filtresi ve piksel koordinatlarından eksen kalibrasyonu (sıfır noktası, ölçek) ile fiziki birimlere (Hız, İrtifa, Ağırlık) dönüştürülmektedir.<br>\n• <strong>Tidy Data Yapısı & Master Tablo:</strong> Dağınık 2-boyutlu eğri verileri meta-verilerle (örn: Irtifa=10000, Agirlik=40000, Motor_Durumu='MIL') etiketlenerek 5-6 boyutlu yapısal bir veri setine dönüştürülmüştür. `scipy.interpolate.griddata` ile ara değer boşlukları doldurularak `.csv` formatında Master Tablo oluşturulmuştur.<br>\n• <strong>Veri Bölünmesi:</strong> Ezberlemeyi (overfitting) önlemek amacıyla sabit random seed kullanılarak %70 Eğitim, %15 Doğrulama ve %15 Test kümelerine ayrılmıştır.<br><br>\n\n<strong>2.2. Referans Nümerik Model (Kübik Spline / Lineer Regresyon):</strong><br>\nGelişmiş modellerle kıyaslama yapmak için Çok Değişkenli Lineer Regresyon ve 3. derece Kübik Spline İnterpolasyon yöntemleri zemin (baseline) referans skoru olarak eğitilmiş; Doğrulama kümesi üzerindeki RMSE, MAE ve $R^2$ skorları belgelenmiştir.<br><br>\n\n<strong>2.3. Sürü Zekası (PSO) Destekli XGBoost Modellemesi:</strong><br>\nXGBoost modelinin hiperparametreleri (`n_estimators`, `max_depth`, `learning_rate`) Parçacık Sürü Optimizasyonu (PSO) meta-sezgisel algoritması ile çok-amaçlı (multi-objective) maliyet fonksiyonuna göre optimize edilmektedir:<br>\n$$\text{Minimize}\\left( W_1 \\cdot \text{RMSE} + W_2 \\cdot \text{Çıkarım Hızı (ms)} + W_3 \\cdot \text{Bellek Kullanımı (MB)} \right)$$<br>\nBu sayede Sürü Zekası algoritması, doğruluk ile donanım kısıtları arasındaki en ideal 'donanımsal olarak optimize edilmiş' XGBoost modelini elde etmektedir.<br><br>\n\n<strong>2.4. Tabular Transformer (FT-Transformer) Mimarisi:</strong><br>\nSayısal ve kategorik giriş özelliklerinin Feature Tokenizer ile öğrenilebilir vektör uzayına taşındığı, örnek düzeyindeki küresel temsili taşıması için bir `[CLS]` tokenının eklendiği derin öğrenme mimarisidir. Transformer Encoder katmanlarında Çok Başlıklı Öz-Dikkat (Multi-Head Self-Attention) mekanizması kullanılarak değişkenler arası karmaşık fiziksel etkileşimler öğrenilmektedir. Model hiperparametreleri (katman sayısı, dikkat başlığı sayısı, embedding boyutu) yine PSO algoritması ve aynı çok-amaçlı maliyet fonksiyonu ile optimize edilmiştir.\n",
            "riskManagement": "\n<strong>3. RİSK YÖNETİMİ VE B PLANLARI</strong><br><br>\n\n<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>\n  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>\n    <tr>\n      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2); width:40%;'>Öngörülen Risk</th>\n      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2); width:60%;'>Alınacak Tedbirler (B Planı)</th>\n    </tr>\n  </thead>\n  <tbody style='font-size:0.9rem; color:var(--text-main);'>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>1. AFM Nomogram Gizlilik Kısıtı: Muharip uçak verilerine erişilememesi.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Metodoloji değişmeyecektir. Açık kaynaklı F-16 uçuş dinamikleri modeli veya NASA DASHlink doğrulanmış uçuş verisi setleri üzerinde uygulanacaktır.</td>\n    </tr>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>2. Model Yetersizliği: Hiperparametre optimizasyonuna rağmen düşük doğruluk.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Veri seti GAN (Generative Adversarial Networks) teknikleriyle sentetik olarak zenginleştirilecek ve modeller yeniden eğitilecektir.</td>\n    </tr>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>3. Gömülü Donanım Uyumsuzluğu / OOM: Cihazda çalışmama veya ani bellek taşması.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Docker konteynerizasyon teknolojisi (<code>--memory=\"512m\"</code>, <code>--cpus=\"0.5\"</code>) kullanılarak gömülü sistem işlemci ve bellek kısıtları sanal olarak simüle edilecektir.</td>\n    </tr>\n  </tbody>\n</table>\n",
            "subsystems": [
                  {
                        "title": "U-Net & OCR Digitization Pipeline",
                        "desc": "AFM grafiklerinden piksellerin U-Net ile segmentasyonu ve OCR ile sayısal eksen okunmasıyla %2 sapma sınırında master veri seti üretimi."
                  },
                  {
                        "title": "Cubic Interpolation Engine",
                        "desc": "Deterministik, açıklanabilir ve türev sürekliliğine sahip 3. derece spline tablo referans hesaplama altyapısı."
                  },
                  {
                        "title": "XGBoost Regression Model",
                        "desc": "En yüksek doğruluk (RMSE: 0.003468, MAE: 0.001372, MAPE: %1.560, R² > 0.99) üreten ve 2.30 ms p95 gecikmeyle çalışan birincil deploy modeli."
                  },
                  {
                        "title": "FT-Transformer Deep Architecture",
                        "desc": "Sayısal ve kategorik değişkenleri ortak token temsil uzayına taşıyarak öz-dikkat (Self-Attention) mekanizması koşan ileri seviye tabular derin öğrenme modeli."
                  },
                  {
                        "title": "NVIDIA Jetson Orin Nano Benchmark Suite",
                        "desc": "NVIDIA Jetson Orin Nano hedef ortamında p50/p95 çıkarım süresi, Peak RSS bellek kullanımı ve CPU yükü ölçümleyen donanım farkındalıklı test yazılımı."
                  }
            ],
            "analysis": "NVIDIA Jetson Orin Nano Hedef Ortam Benchmark Analizi:\n\n• XGBoost: RMSE = 0.003468, MAE = 0.001372, MAPE = %1.560 | p95 Gecikme = 2.30 ms | Peak RAM = 185.2 MiB | Bütünleşik Fit Score = 81.5 (EN YÜKSEK SKOR)\n• FT-Transformer: RMSE = 0.003671, MAE = 0.002044, MAPE = %2.888 | p95 Gecikme = 3.05 ms | Model Boyutu = 0.42 MB | Peak RAM = 482.1 MiB | Fit Score = 77.6\n• Kübik İnterpolasyon: p95 Gecikme = 6.78 ms | Peak RAM = 166.5 MiB (En Düşük RAM) | CPU Avg = %355 | Fit Score = 74.0",
            "achievements": "TUSAŞ LIFT UP 2025-2026 Sanayi Odaklı Lisans Bitirme Projeleri Programı kapsamında desteklenmiş; TUSAŞ Havacılık Mühendisliği Sanayi Danışmanı Zeynel Abidin AYDOĞAN ve ESTÜ Pilotaj Akademik Danışmanı Dr. Aziz KABA kuruluna başarıyla sunulmuştur. Bildiri ve makale olarak yayınlanmış, yerli ve milli aviyonik yazılım yetkinliklerine doğrudan katkı sunmuştur."
      }
],
  },
  en: {
    profile: {
      name: "Ahmet Soner Güleç",
      title: "Aircraft Maintenance Engineer",
      subTitle: "Avionics Systems | Aircraft Maintenance | Electronic System and Hardware Design",
      about: "I graduated from Eskişehir Technical University, Department of Aviation Electrical and Electronics with the title of Aircraft Maintenance Engineer / Avionics. In line with my interest in engineering and technology, I actively participate in projects that combine theoretical knowledge with practical applications. During my internship and training processes abroad, I focused on avionics system maintenance and assembly procedures of aircraft, as well as mechanical design, PCB hardware design, and simulation/analysis studies.\n\nWhile developing AI-supported aviation inspection robot projects within Tulpar Tharros, of which I am a co-founder; I took active roles in electrical-electronic subsystem design, integration, and power electronics in the Hidroana team, which produces alternative energy vehicles, obtaining ranks in national/international competitions such as TEKNOFEST and Shell Eco-marathon.\n\nIn addition, under the Aviation AI Research Society, which I founded, I managed TUSAŞ LIFT-UP, TÜBİTAK 2209-A, and 2209-B projects focusing on autonomous systems, flight control software, and AI integration. With this theoretical background, field experience, and interdisciplinary engineering competencies, I am a determined Aircraft Maintenance Engineer walking towards the future with the goal of producing innovative and high-value-added solutions in aviation and space technologies.",
      avatar: "Foto.jpg",
      socials: {
        github: "https://github.com/AhmetSoner",
        linkedin: "https://www.linkedin.com/in/ahmet-soner-gulec",
        email: "mailto:ahmetsonergulec@hotmail.com",
        phone: "+90 553 715 41 69"
      }
    },
    skills: [
      { name: "MATLAB / Simulink", category: "Software & Simulation", level: 80 },
      { name: "Python / Embedded C", category: "Software & Simulation", level: 50 },
      { name: "PSIM", category: "Software & Simulation", level: 80 },
      { name: "Altium Designer", category: "Hardware & Design", level: 90 },
      { name: "LTspice / PSpice", category: "Hardware & Design", level: 90 },
      { name: "Ansys", category: "Hardware & Design", level: 60 },
      { name: "SolidWorks", category: "Aviation & Analysis", level: 60 },
      { name: "COMSOL Multiphysics", category: "Aviation & Analysis", level: 60 },
      { name: "XFLR5 (Aerodynamics)", category: "Aviation & Analysis", level: 50 }
    ],
    education: [
      {
        institution: "Eskişehir Technical University",
        degree: "Aircraft Maintenance Engineer / Avionics",
        duration: "September 2020 - Graduate",
        gpa: "3.1",
        details: "During my education, I took courses covering many disciplines:<br><br>• Gas Turbine Engines<br>• Modern Avionics Systems<br>• Microprocessors<br>• Electrical & Electronics<br>• Electrical Machines<br>• Automatic Flight Systems<br>• Navigation Systems<br>• Digital Data Transmission<br>• Electronic Display Systems<br>• Electromagnetic Environment<br>• Aircraft Aerodynamics<br>• Aircraft Structures and Systems<br>• Aircraft Materials Science<br>• Human Factors<br>• Non-Destructive Testing (NDT) Methods<br>• Communication Systems<br><br>In addition, practical experience was gained through hands-on training at the SHY-145 approved aircraft maintenance facilities within our faculty."
      }
    ],
    experience: [
      {
        title: "Founder",
        company: "Aviation AI Research Society (Eskişehir, Turkey)",
        duration: "October 2024 - Present",
        details: "Within the multidisciplinary society established in 2022, I lead R&D efforts aimed at integrating AI and autonomous technologies into the aviation ecosystem to provide innovative solutions to sectoral problems. Our team has carried out 3 TÜBİTAK 2209-A, 2 TÜBİTAK 2209-B, and 2 TUSAŞ LIFT-UP projects.<br><br>• <b>TEKNOFEST FPV Drone Tracking Competition:</b> Developed autonomous target detection, FPV drone tracking, and flight control algorithms; modeled sensor data processing and autonomous decision-making mechanisms in MATLAB/Simulink and Python environments, validating them through virtual tests.<br><br>• <b>TUSAŞ LIFT-UP Project (KAAN Integration):</b> Participated in modeling critical flight performance data for the National Combat Aircraft KAAN mission computer. Modelled data sets obtained from Aircraft Flight Manual (AFM) nomograms using PyTorch with Curve Fitting, Artificial Neural Networks (ANN), and Reinforcement Learning architectures. Performed comparative model analyses evaluating avionics hardware constraints (CPU and memory load) and accuracy rates on the KAAN platform.<br><br>• <b>TÜBİTAK 2209-A Project (Bird Detection System):</b> Developed a deep learning-based image processing system aimed at reducing the effects of bird strikes in the aviation industry. Established real-time bird detection and classification infrastructure for airports using YOLOv8 and MobileNetV2 models, winning the Second Prize in the Boeing x ESTU Future of Aviation Competition."
      },
      {
        title: "Avionics Engineering Intern",
        company: "Vilnius Gediminas Technical University (Vilnius, Lithuania)",
        duration: "October 2023 - April 2024",
        details: "In the first period, I performed various technical tasks on non-airworthy aircraft such as Cessna 310, Cessna 152 and Airbus A320. In this process, I performed disassembly, reassembly, and installation operations of main components such as wings, flight control systems, landing gear, and fuselage. I also gained experience in maintenance, repair, and operation of avionics systems. Later, I continued my hands-on training at Kyviškės Airport, which holds EASA Part-145 certification. Here, I worked on airworthy Cessna 172S and Piper PA-34 aircraft, and all works were supervised by experts with EASA Part-66 licenses. In the final period, I focused on unmanned aerial vehicle technologies and the electronic infrastructures used in these systems. I designed the mechanical structure of the quadrotor I worked on using SolidWorks; in this process, I performed calculations via XFLR5 for critical factors like weight balance. Using Altium Designer, I designed and developed brushless motor driver circuit boards. I completed the validation and performance analyses of these boards through circuit simulations in PSpice and Matlab environments. To evaluate the temperature distribution on semiconductor materials on electronic boards during flight, I performed thermal analyses using COMSOL Multiphysics software. The system I developed was structured to support basic flight control algorithms. Energy efficiency, thermal durability, and system reliability were prioritized in the design process, and all components were optimized accordingly."
      },
      {
        title: "Co-Founder",
        company: "Tulpar Tharros Aviation Society",
        duration: "March 2023 - September 2024",
        details: "As a co-founder of the Tulpar Tharros team, established to create innovative solutions for the aviation maintenance, repair, and overhaul (MRO) sector, I developed the AI-supported soft robot \"INFLOBOT\" project. To increase inspection efficiency in narrow/confined spaces where human access is difficult and risky, I undertook the 3D body design, electrical infrastructure, and software of the robot; optimizing operational speed and occupational safety by providing maintenance technicians with a clear view through custom lighting and hardware integration. With this project, which forms the basis of our team, we became finalists in the THY Design Hackathon. Then, by developing the business model and technical prototype, we won the \"Best Startup\" award in the TEKNOFEST Entrepreneurship Competition and obtained critical financial support. With this momentum, I initiated the active incorporation process, participated in the Take Off Istanbul International Entrepreneurship Summit, and conducted strategic B2B investor negotiations for the commercialization of INFLOBOT in the aviation sector."
      },
      {
        title: "Electrical and Electronics Unit Member",
        company: "Hidroana Project Team",
        duration: "September 2022 - September 2025",
        details: "I actively carried out hardware development and R&D activities for 3 years in the electrical unit of Hidroana, Eskisehir Technical University's long-established hydrogen-powered vehicle project founded in 2007. As an Electrical and Electronics Unit Member, I took part in all electrical-electronic system design and integration processes of DORLION and MIDAS vehicles. I performed technical requirement analysis and subsystem integrations using a system engineering approach. Within the scope of power electronics; I developed motor driver hardware for 3-phase BLDC motors, a Battery Management System (BMS) ensuring cell safety, and an insulation monitoring system for electrical leakage detection, completing schematic design, PCB design, circuit simulations, and optimizations. I conducted thermal analyses and thermal management optimizations to ensure these developed electronic boards operate stably under high current and voltage. I managed the integration processes of the designs we developed into the vehicle, actively participating in the electric-electronics unit by representing our team in the TEKNOFEST Efficiency Challenge 3 times (winning Turkey Second Place and the Electronic Systems Special Jury Award) and once in the global Shell Eco-Marathon competition. <br><a href='https://hidroana.com' target='_blank' class='timeline-link'>hidroana.com</a>"
      }
    ],
    projects: [
      {
            "id": "project-1",
            "title": "3-Phase BLDC Motor Controller Circuit",
            "category": "donanim",
            "summary": "Microcontroller-based motor driver board with 97.15% efficiency and FOC algorithm.",
            "description": "A driver board running the Field Oriented Control (FOC) algorithm, designed for precise and efficient control of brushless DC (BLDC) motors. Parameter optimization was performed using PSpice and MATLAB/Simulink simulations, and the most optimal component placement and PCB design were completed in Altium Designer. Features integrated short-circuit, over-current, and temperature protection.",
            "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "Altium Designer",
                  "FOC / Brushless Motor",
                  "PSpice",
                  "MATLAB / Simulink"
            ],
            "specs": [
                  {
                        "name": "Efficiency",
                        "value": "97.15%"
                  },
                  {
                        "name": "Power Ratings",
                        "value": "2KW / 48V / 42A"
                  },
                  {
                        "name": "Protection",
                        "value": "Short Circuit, Overcurrent, Temp Protection"
                  },
                  {
                        "name": "Design Software",
                        "value": "Altium Designer"
                  }
            ],
            "overview": "A microcontroller-based hardware and software architecture developed to operate Brushless DC (BLDC) motors with high efficiency and precise torque/speed control.",
            "architecture": "Runs the Field Oriented Control (FOC) algorithm. Motor waveforms are optimized for peak torque efficiency through a 3-phase sinusoidal current driver topology.",
            "subsystems": [
                  {
                        "title": "Power Stage",
                        "desc": "3-phase H-Bridge topology utilizing 6 N-Channel MOSFETs."
                  },
                  {
                        "title": "Gate Driver",
                        "desc": "Advanced gate driver IC for high-frequency switching."
                  },
                  {
                        "title": "Sensing & Feedback",
                        "desc": "3-phase current sensing via shunt resistors and rotor position detection."
                  },
                  {
                        "title": "Safety & Protection",
                        "desc": "Hardware-level Over-Current (OCP), Over-Temperature (OTP), and Short-Circuit Protection."
                  }
            ],
            "analysis": "Switching losses and transient analyses were conducted in PSpice, FOC algorithm control loop optimizations in MATLAB/Simulink, and multi-layer PCB layout design in Altium Designer.",
            "achievements": "Achieved 97.15% power conversion efficiency and validated a continuous power rating of 2KW through empirical testing."
      },
      {
            "id": "project-2",
            "title": "High Voltage Insulation Monitoring Device",
            "category": "donanim",
            "summary": "Safety module detecting leakage current to chassis in electric vehicle battery packs.",
            "description": "A system that continuously monitors the insulation status relative to the chassis for high-voltage battery pack safety in electric vehicles. The positive (Rp) and negative (Rn) insulation resistances of the battery are calculated. Measured voltages are amplified via the AD8216 difference amplifier and sent to the ADC. Electrical isolation between systems is provided via the AMC1311 signal isolator and safety relays.",
            "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "Analog Hardware",
                  "AD8216 Diff Amp",
                  "AMC1311 Isolation",
                  "Safety"
            ],
            "specs": [
                  {
                        "name": "Measurement Sensitivity",
                        "value": "Monitoring in MΩ Level"
                  },
                  {
                        "name": "Amplifier",
                        "value": "AD8216 Difference Amplifier"
                  },
                  {
                        "name": "Signal Isolator",
                        "value": "AMC1311 Electrical Isolation"
                  },
                  {
                        "name": "Safety",
                        "value": "Relay-Based Line Cut-off"
                  }
            ],
            "overview": "Critical safety hardware that continuously monitors the insulation resistance of battery terminals relative to the chassis in electric vehicles and high-voltage battery packs (48V+).",
            "architecture": "Utilizes a switched resistor network topology to detect both asymmetrical and symmetrical insulation faults. Positive (Rp) and negative (Rn) insulation resistances are dynamically calculated.",
            "subsystems": [
                  {
                        "title": "Difference Amplifier",
                        "desc": "Measurement of minute voltage differentials using the AD8216 precision difference amplifier."
                  },
                  {
                        "title": "Galvanic Isolation",
                        "desc": "Electrical separation of the high-voltage domain from low-voltage control circuits via AMC1311 isolated amplifiers."
                  },
                  {
                        "title": "Safety Relay & Cutoff",
                        "desc": "Safety relay system that physically disconnects the HV bus upon detecting hazardous insulation resistance drops."
                  }
            ],
            "analysis": "Simulated insulation resistance deviations at the MΩ scale and completed high-voltage noise suppression validation tests.",
            "achievements": "Implemented a safety system compliant with International Electrotechnical Commission standards, eliminating current leakage risks to electric vehicle chassis."
      },
      {
            "id": "project-3",
            "title": "Smart Battery Management System (BMS)",
            "category": "gomulu",
            "summary": "BQ76940-based protection hardware for a 48V - 50A battery pack in 13S8P configuration.",
            "description": "A system based on the Texas Instruments BQ76940 integrated circuit, monitoring cell voltages with a 14-bit ADC, current with a shunt resistor, and temperature with NTC thermistors. Cell balancing is performed passively via 47-ohm resistors. State of Charge (SOC) estimation is performed using the Coulomb Counting method. All algorithms run on the STM32F103C8T6 microcontroller.",
            "image": "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "STM32F103C8T6",
                  "BQ76940 BMS",
                  "Coulomb Counter (SOC)",
                  "Altium Designer"
            ],
            "specs": [
                  {
                        "name": "Cell Configuration",
                        "value": "13S8P (LG INR18650 MJ1)"
                  },
                  {
                        "name": "Power Ratings",
                        "value": "48V / 50A Output Capacity"
                  },
                  {
                        "name": "Microcontroller",
                        "value": "STM32F103C8T6"
                  },
                  {
                        "name": "Cell Balancing",
                        "value": "47 Ohm Passive Balancing"
                  }
            ],
            "overview": "Embedded control hardware ensuring safe operation, cell life extension, and charge/discharge balance for a 48V / 50A Li-ion battery pack in 13S8P configuration.",
            "architecture": "Built around the Texas Instruments BQ76940 AFE IC and STM32F103C8T6 ARM Cortex-M3 microcontroller architecture.",
            "subsystems": [
                  {
                        "title": "AFE (Analog Front End)",
                        "desc": "Sampling voltages of 13 cells via 14-bit ADC using the BQ76940 IC."
                  },
                  {
                        "title": "Passive Cell Balancing",
                        "desc": "Inter-cell voltage equalization across 47 Ohm power resistors."
                  },
                  {
                        "title": "Current & Temp Monitoring",
                        "desc": "Current sensing via shunt resistor and 4-channel NTC thermistor temperature tracking."
                  },
                  {
                        "title": "SOC Algorithm",
                        "desc": "Real-time State of Charge estimation using the Coulomb Counting (Current Integration) method."
                  }
            ],
            "analysis": "Designed high-current copper planes in Altium Designer and conducted thermal imaging tests on cell balancing resistors.",
            "achievements": "Provided 3 years of uninterrupted and safe battery management for the Hidroana electric vehicle project."
      },
      {
            "id": "project-4",
            "title": "TÜBİTAK 2209-A Image-Based Bird Recognition System",
            "category": "gomulu",
            "summary": "Software using deep learning-based object detection to prevent bird strikes in aviation.",
            "description": "A research project aimed at increasing flight safety by reducing the impact of bird strikes on the aviation industry. Exceeding the limits of existing radar-based systems to detect birds in detail, an image processing-based detection and species identification system was developed using YOLOv8 and MobileNetV2 object recognition models. The project was supported by TÜBİTAK.",
            "image": "https://images.unsplash.com/photo-1460602594182-8268277697b8?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "YOLOv8 / MobileNetV2",
                  "Python",
                  "Deep Learning",
                  "TÜBİTAK 2209-A"
            ],
            "specs": [
                  {
                        "name": "Object Detection Model",
                        "value": "YOLOv8 & MobileNetV2"
                  },
                  {
                        "name": "Application Field",
                        "value": "Airport Flight Safety"
                  },
                  {
                        "name": "Timeline",
                        "value": "10/04/2024 - 10/09/2025"
                  },
                  {
                        "name": "Support Type",
                        "value": "TÜBİTAK 2209-A Research Project"
                  }
            ],
            "overview": "AI-based object detection software developed to prevent vital safety risks and costly aircraft damage caused by bird strikes at airports and flight paths.",
            "architecture": "Surpassing traditional radar limitations in small bird detection by constructing a deep learning image processing and classification pipeline.",
            "subsystems": [
                  {
                        "title": "Detection Engine",
                        "desc": "YOLOv8 architecture trained for real-time object detection."
                  },
                  {
                        "title": "Classification Core",
                        "desc": "MobileNetV2 convolutional neural network (CNN) for species-level high-accuracy identification."
                  },
                  {
                        "title": "Camera & Stream Unit",
                        "desc": "Live stream processing and tracking module for airport perimeter cameras."
                  },
                  {
                        "title": "Telemetry Interface",
                        "desc": "Tower control interface presenting early warnings and bird density maps."
                  }
            ],
            "analysis": "Validated detection accuracy over 94% under diverse weather conditions (fog, clouds, night) and varying flock altitudes.",
            "achievements": "Awarded TÜBİTAK 2209-A National Undergraduate Research Grant and won 2nd Prize in the Boeing x ESTU Future of Aviation Competition."
      },
      {
            "id": "project-5",
            "title": "INFLOBOT: AI-Supported MRO Robot",
            "category": "gomulu",
            "summary": "Soft robot assistant for confined space inspections such as aircraft fuel tanks.",
            "description": "An AI-supported soft robot capable of rapid defect detection in hard-to-reach areas such as aircraft fuel tanks, spacecraft, and rocket fuselages in the aviation maintenance, repair, and overhaul (MRO) sector. Its integrated lighting system provides technicians with a clear view. The project was named 'Best Startup' in the TEKNOFEST Entrepreneurship Competition and became a finalist in the THY Design Hackathon.",
            "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
            "tags": [
                  "Soft Robotics",
                  "Artificial Intelligence",
                  "MRO Aviation",
                  "TEKNOFEST Awarded"
            ],
            "specs": [
                  {
                        "name": "Application Field",
                        "value": "Fuel Tank & Confined Space Inspection"
                  },
                  {
                        "name": "Award",
                        "value": "TEKNOFEST Best Startup Award"
                  },
                  {
                        "name": "Developer Team",
                        "value": "Tulpar Tharros (Co-Founder)"
                  },
                  {
                        "name": "Design",
                        "value": "Flexible Soft Body"
                  }
            ],
            "overview": "Autonomous soft robotic system performing inspection and maintenance in confined spaces such as aircraft fuel tanks, wing cavities, and rocket fuselages where technician access is hazardous or impossible.",
            "architecture": "Navigates tight structures effortlessly via an unjointed soft robotic body structure. Detects surface cracks and corrosion in real-time using an onboard camera and sensor array powered by AI.",
            "subsystems": [
                  {
                        "title": "Soft Robotic Actuation",
                        "desc": "Inflatable and bendable pneumatic/flexible body mechanism."
                  },
                  {
                        "title": "Inspection Vision Unit",
                        "desc": "High-resolution endoscopic camera and homogeneous LED illumination ring."
                  },
                  {
                        "title": "AI Defect Analysis",
                        "desc": "Deep learning model trained to identify surface deformations and fluid leaks."
                  },
                  {
                        "title": "Operator Control Station",
                        "desc": "HUD interface providing live video telemetry and remote command to technicians."
                  }
            ],
            "analysis": "Tested maneuverability and crack detection sensitivity within aircraft fuel tank mockups, reducing traditional inspection duration by 65%.",
            "achievements": "Won 'Best Startup' Award in TEKNOFEST Entrepreneurship Competition, finalist in THY Design Hackathon, and exhibited at Take Off Istanbul Summit."
      },
      {
            "id": "project-6",
            "title": "Modeling and Comparing the Performance Dataset of a Combat Aircraft Using Machine Learning Methods",
            "category": "gomulu",
            "summary": "Conducted under the Turkish Aerospace Industries (TUSAŞ) LIFT UP Program and TÜBİTAK 2209-B Industry-Oriented Research Projects Support Program (Project No: 1999B212502693 / LIFTUP-2025-2026) for the National Combat Aircraft (KAAN) avionics navigation systems; this project performs hardware latency, memory footprint, and non-linear accuracy benchmark analyses of Cubic Interpolation, XGBoost, and Tabular Transformer (FT-Transformer) models on NVIDIA Jetson Orin Nano edge deployment targets using Aircraft Flight Manual (AFM) nomogram data digitized via U-Net CNN and OCR.",
            "description": "In this study conducted within the TUSAŞ (Turkish Aerospace Industries) LIFT UP Industry-Oriented Graduation Project Program, traditional cubic interpolation lookup table methods used for computing critical flight performance parameters (Specific Range, Altitude, Mach Number, Fuel Flow, Drag Index) in combat aircraft were benchmarked against machine learning models (XGBoost and Tabular Transformer) in terms of non-linear accuracy, inference latency, memory footprint, and CPU utilization.",
            "image": "kaan.jpg",
            "tags": [
                  "TUSAŞ LIFT UP",
                  "MMU KAAN",
                  "Tabular Transformer",
                  "XGBoost",
                  "NVIDIA Jetson Orin Nano",
                  "U-Net / OCR"
            ],
            "specs": [
                  {"name": "Host Institution / Partner", "value": "Turkish Aerospace Industries (TUSAŞ)"},
                  {"name": "Grant Programs", "value": "TUSAŞ LIFT UP & TÜBİTAK 2209-B Program"},
                  {"name": "TÜBİTAK Project No", "value": "1999B212502693"},
                  {"name": "TUSAŞ Project Code", "value": "LIFTUP-2025-2026-AV-06"},
                  {"name": "Industry Advisor", "value": "Zeynel Abidin AYDOĞAN (TUSAŞ - Aerospace Eng.)"},
                  {"name": "Academic Advisor", "value": "Assoc. Prof. Dr. Aziz KABA (ESTÜ Pilotage)"},
                  {"name": "Project Team", "value": "Ahmet Soner GÜLEÇ (Lead), Umut ÇÖRDÜK, Ufuk ÖZKAN"},
                  {"name": "Best Models", "value": "XGBoost (Fit Score: 81.5) & FT-Transformer"},
                  {"name": "Inference Latency (p95)", "value": "2.30 ms (XGBoost) / 3.05 ms (FT-Transformer)"},
                  {"name": "Target Hardware", "value": "NVIDIA Jetson Orin Nano"}
            ],
            "overview": "\n<strong>A. GENERAL INFORMATION & EXECUTIVE SUMMARY</strong><br>\n• <strong>Lead Applicant:</strong> Ahmet Soner GÜLEÇ (Student - Eskişehir Technical University, Avionics Engineering)<br>\n• <strong>Academic Advisor:</strong> Assoc. Prof. Dr. Aziz KABA (Eskişehir Technical University - Dept. of Pilotage)<br>\n• <strong>Industry Advisor:</strong> Zeynel Abidin AYDOĞAN (TUSAŞ - Turkish Aerospace Industries, Aerospace Eng.)<br>\n• <strong>Host Institution:</strong> Turkish Aerospace Industries (TUSAŞ) / ESTÜ Avionics Research Lab<br>\n• <strong>Grant Program:</strong> TÜBİTAK 2209-B Industry-Oriented Research Projects Support Program (2025/2nd Term)<br><br>\n\n<strong>Executive Summary:</strong><br>\nThe project aims to overcome the technical dilemma between accuracy loss and excessive hardware consumption caused by traditional Lookup Table (LUT) methods in fighter aircraft avionics using hardware-efficient XGBoost and Tabular Transformer models. The novelty lies in optimizing these models simultaneously for accuracy and resource efficiency via Particle Swarm Optimization (PSO) multi-objective algorithms.<br><br>\nNomograms of the F-18 aircraft (acting as surrogate for KAAN) are processed using MATLAB (`DigitizeGraph.m`) and Python multi-variable interpolation into a comprehensive training dataset. XGBoost and FT-Transformer models are benchmarked on NVIDIA Jetson Orin Nano and Docker simulation environments across accuracy, latency, RAM, and model size.\n",
            "scientificMerit": "\n<strong>1. SCIENTIFIC MERIT & INNOVATIVE VALUE</strong><br><br>\n\n<strong>1.1. Objectives & Goals:</strong><br>\nFighter aircraft avionics operate under strict hardware constraints (limited CPU power and memory). This project constructs multi-dimensional datasets from AFM nomograms, developing XGBoost, Tabular Transformer, and Numerical baseline models optimized via Particle Swarm Optimization (PSO) to establish the optimal balance between maximum accuracy and minimum computational load.<br><br>\n\n<strong>1.2. Innovation & Technological Value:</strong><br>\nUnlike literature focusing solely on accuracy (RMSE), this study evaluates inference latency (ms), RAM footprint (MB), and accuracy holistically. Aligned with Turkey's 2030 National Technology Initiative in Aerospace & Defense, it enhances operational agility for domestic fighter aircraft (KAAN / TF-X) while building national avionics software expertise.\n",
            "architecture": "\n<strong>2. METHODOLOGY & SYSTEM ARCHITECTURE</strong><br><br>\n\n<strong>2.1. Graph Digitization & Tidy Data Pipeline:</strong><br>\n• <strong>MATLAB DigitizeGraph.m Algorithm:</strong> AFM nomograms are converted to grayscale and scanned column-by-column to locate exact peak pixel paths. Smoothed and calibrated to physical units (Speed, Altitude, Weight).<br>\n• <strong>Tidy Data & Master Table:</strong> Annotated with operational metadata (Altitude=10000, Weight=40000, Engine='MIL') building a 5D structured dataset (.csv) interpolated via `scipy.interpolate.griddata`. Split into 70% Train, 15% Validation, and 15% Test sets.<br><br>\n\n<strong>2.2. Numerical Reference Baseline (Cubic Spline):</strong><br>\nMulti-variable Linear Regression and 3rd-degree Cubic Splines trained to establish a baseline score ($R^2 \\ge 0.80$).<br><br>\n\n<strong>2.3. Particle Swarm Optimization (PSO) XGBoost:</strong><br>\nXGBoost hyperparameters tuned via PSO using a multi-objective cost function:<br>\n$$\text{Minimize}\\left( W_1 \\cdot \text{RMSE} + W_2 \\cdot \text{Latency (ms)} + W_3 \\cdot \text{RAM (MB)} \right)$$<br><br>\n\n<strong>2.4. Tabular Transformer (FT-Transformer):</strong><br>\nContinuous and categorical features projected via Feature Tokenizer and `[CLS]` token through Multi-Head Self-Attention layers. Hyperparameters tuned via PSO multi-objective optimization.\n",
            "riskManagement": "\n<strong>3. RISK MANAGEMENT & CONTINGENCY PLANS</strong><br><br>\n\n<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>\n  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>\n    <tr>\n      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2); width:40%;'>Identified Risk</th>\n      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2); width:60%;'>Contingency Plan (Plan B)</th>\n    </tr>\n  </thead>\n  <tbody style='font-size:0.9rem; color:var(--text-main);'>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>1. AFM Data Secrecy Restriction: Inability to access fighter jet data.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Methodology remains identical. Open-source F-16 flight dynamics or NASA DASHlink verified datasets will be utilized.</td>\n    </tr>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>2. Model Underperformance: Insufficient accuracy despite PSO tuning.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Dataset enriched via Generative Adversarial Networks (GAN) and models retrained.</td>\n    </tr>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>3. Hardware Incompatibility / OOM: Execution crashes or RAM overflows.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Docker containerization (<code>--memory=\"512m\"</code>, <code>--cpus=\"0.5\"</code>) used to virtually simulate hardware limits.</td>\n    </tr>\n  </tbody>\n</table>\n",
            "subsystems": [
                  {
                        "title": "U-Net & OCR Digitization Pipeline",
                        "desc": "Pixel-level curve segmentation via U-Net and numerical axis parsing via OCR producing master datasets within a 2% error threshold."
                  },
                  {
                        "title": "Cubic Interpolation Engine",
                        "desc": "Deterministic, explainable, and derivative-continuous 3rd-degree spline lookup table reference infrastructure."
                  },
                  {
                        "title": "XGBoost Regression Model",
                        "desc": "Primary deployment model producing top accuracy (RMSE: 0.003468, MAE: 0.001372, MAPE: 1.560%, R² > 0.99) operating at 2.30 ms p95 latency."
                  },
                  {
                        "title": "FT-Transformer Deep Architecture",
                        "desc": "Advanced tabular deep learning model projecting continuous and categorical inputs into a shared token space using Self-Attention mechanisms."
                  },
                  {
                        "title": "NVIDIA Jetson Orin Nano Benchmark Suite",
                        "desc": "Hardware-aware benchmarking measuring p50/p95 inference latency, Peak RSS RAM memory footprint, and CPU load on the NVIDIA Jetson Orin Nano target environment."
                  }
            ],
            "analysis": "NVIDIA Jetson Orin Nano Target Hardware Benchmark Analysis:\n\n• XGBoost: RMSE = 0.003468, MAE = 0.001372, MAPE = 1.560% | p95 Latency = 2.30 ms | Peak RAM = 185.2 MiB | Integrated Fit Score = 81.5 (TOP SCORE)\n• FT-Transformer: RMSE = 0.003671, MAE = 0.002044, MAPE = 2.888% | p95 Latency = 3.05 ms | Model Size = 0.42 MB | Peak RAM = 482.1 MiB | Fit Score = 77.6\n• Cubic Interpolation: p95 Latency = 6.78 ms | Peak RAM = 166.5 MiB (Lowest RAM) | CPU Avg = 355% | Fit Score = 74.0",
            "achievements": "Supported under TUSAŞ LIFT UP 2025-2026 Program; successfully presented to Industry Advisor Zeynel Abidin AYDOĞAN (TUSAŞ) and Academic Advisor Dr. Aziz KABA (ESTÜ Pilotage). Published as paper & proceedings, directly advancing national avionics software capabilities."
      }
],
  }
};

const UI_TRANSLATIONS = {
  tr: {
    nav_home: "ANASAYFA",
    nav_about: "HAKKIMDA",
    nav_experience: "DENEYİM",
    nav_skills: "YETENEKLER",
    nav_projects: "PROJELER",
    nav_contact: "İLETİŞİM",
    hero_prefix: "INITIALIZING SYSTEM DATA...",
    hero_btn_projects: "PROJELERİ İNCELE",
    hero_btn_contact: "BAĞLANTI KUR",
    tag_about: "SYS_02 // SEARCH_PROFILE",
    title_about: "HAKKIMDA",
    tag_experience: "SYS_03 // HISTORY_LOG",
    title_experience: "EĞİTİM & DENEYİM",
    col_education: "EĞİTİM",
    col_experience: "DENEYİM & TAKIMLAR",
    tag_skills: "SYS_04 // CALIBRATION_DATA",
    title_skills: "TEKNİK YETENEKLER",
    tag_projects: "SYS_05 // RECORDED_MISSIONS",
    title_projects: "PROJELER",
    tag_contact: "SYS_06 // OPEN_CHANNEL",
    title_contact: "İLETİŞİM",
    contact_send_signal: "",
    contact_desc: "Aviyonik sistemler, gömülü donanım tasarımı, PCB geliştirme veya otonom sistem projelerinde iş teklifleri, kariyer fırsatları ve proje iş birliklerini değerlendirmek için aşağıdaki kanallar üzerinden veya doğrudan mesaj aracılığıyla benimle iletişime geçebilirsiniz.",
    filter_all: "HEPSİ",
    filter_hardware: "DONANIM",
    filter_embedded: "GÖMÜLÜ",
    filter_software: "YAZILIM",
    stat_status: "DURUM:",
    stat_status_val: "GÖREVE HAZIR",
    stat_role: "ROL:",
    stat_role_val: "UÇAK BAKIM MÜH.",
    stat_birth: "DOĞUM TARİHİ:",
    stat_birth_val: "20 Eylül 2001",
    stat_location: "LOKASYON:",
    stat_location_val: "Kocaeli, Türkiye",
    stat_lang: "YABANCI DİL:",
    stat_lang_val: "İngilizce",
    btn_cv: "ÖZGEÇMİŞİ İNDİR",
    form_name: "İSİM / SOYİSİM",
    form_email: "E-POSTA ADRESİ",
    form_message: "MESAJINIZ",
    form_send: "MESAJ GÖNDER",
    footer_text: "© 2026 // AHMET SONER GÜLEÇ",
    modal_specs: "// TEKNİK ÖZELLİKLER",
    modal_close: "Kapat",
    btn_back: "ANA SAYFAYA DÖN",
    heading_specs: "PROJE HAKKINDA",
    heading_overview: "// 01. PROJE ÖZETİ VE MÜHENDİSLİK AMACI",
    heading_architecture: "// 02. SİSTEM MİMARİSİ VE ÇALIŞMA PRENSİBİ",
    heading_subsystems: "// 03. ALT SİSTEMLER VE DONANIM/YAZILIM BİLEŞENLERİ",
    heading_analysis: "// 04. TEST, SİMÜLASYON VE DOĞRULAMA",
    heading_achievements: "// 05. PROJE ÇIKTILARI",
    heading_other_projects: "DİĞER PROJELER"
  },
  en: {
    nav_home: "HOME",
    nav_about: "ABOUT",
    nav_experience: "EXPERIENCE",
    nav_skills: "SKILLS",
    nav_projects: "PROJECTS",
    nav_contact: "CONTACT",
    hero_prefix: "INITIALIZING SYSTEM DATA...",
    hero_btn_projects: "VIEW PROJECTS",
    hero_btn_contact: "GET IN TOUCH",
    tag_about: "SYS_02 // SEARCH_PROFILE",
    title_about: "ABOUT ME",
    tag_experience: "SYS_03 // HISTORY_LOG",
    title_experience: "EDUCATION & EXPERIENCE",
    col_education: "EDUCATION",
    col_experience: "EXPERIENCE & TEAMS",
    tag_skills: "SYS_04 // CALIBRATION_DATA",
    title_skills: "TECHNICAL SKILLS",
    tag_projects: "SYS_05 // RECORDED_MISSIONS",
    title_projects: "PROJECTS",
    tag_contact: "SYS_06 // OPEN_CHANNEL",
    title_contact: "CONTACT",
    contact_send_signal: "",
    contact_desc: "If you would like to discuss job opportunities, career proposals, or project collaborations in avionics systems, embedded hardware design, PCB development, or autonomous systems, feel free to reach out through the channels below or send a direct message.",
    filter_all: "ALL",
    filter_hardware: "HARDWARE",
    filter_embedded: "EMBEDDED",
    filter_software: "SOFTWARE",
    stat_status: "STATUS:",
    stat_status_val: "READY FOR DUTY",
    stat_role: "ROLE:",
    stat_role_val: "AIRCRAFT MAINT. ENG.",
    stat_birth: "DATE OF BIRTH:",
    stat_birth_val: "20 September 2001",
    stat_location: "LOCATION:",
    stat_location_val: "Kocaeli, Turkey",
    stat_lang: "FOREIGN LANG:",
    stat_lang_val: "English",
    btn_cv: "DOWNLOAD CV",
    form_name: "YOUR NAME",
    form_email: "YOUR E-MAIL ADDRESS",
    form_message: "YOUR MESSAGE",
    form_send: "SEND MESSAGE",
    footer_text: "© 2026 // AHMET SONER GULEC",
    modal_specs: "// TECHNICAL SPECIFICATIONS",
    modal_close: "Close",
    btn_back: "BACK TO MAIN PORTFOLIO",
    heading_specs: "ABOUT THE PROJECT",
    heading_overview: "// 01. PROJECT OVERVIEW & ENGINEERING PURPOSE",
    heading_architecture: "// 02. SYSTEM ARCHITECTURE & WORKING LOGIC",
    heading_subsystems: "// 03. SUBSYSTEMS & HARDWARE/SOFTWARE COMPONENTS",
    heading_analysis: "// 04. TESTING, SIMULATION & VERIFICATION",
    heading_achievements: "// 05. ACHIEVEMENTS, AWARDS & OUTPUTS",
    heading_other_projects: "OTHER PROJECTS"
  }
};

/* ==========================================================================
   LIFT UP PROJECT DETAIL ENRICHMENT
   Source package: Lift up/Raporlar
   ========================================================================== */
(function enrichLiftUpProjectDetail() {
  const liftUpContent = {
    tr: {
      applicationNo: "68a5b97874a0f",
      detailImage: "lift-up-edge-ai-benchmark.png",
      summary: "TUSAŞ LIFT UP ve TÜBİTAK 2209-B kapsamında yürütülen bu araştırmada, muharip hava araçlarında Specific Range gibi kritik uçuş performans değerlerinin klasik arama tablosu ve interpolasyon yaklaşımıyla hesaplanması problemi yeniden ele alındı. F-18 AFM/handbook nomogramları U-Net tabanlı eğri segmentasyonu, OCR destekli eksen okuma ve veri temizleme hattıyla 54.620 satırlık yapısal bir veri setine dönüştürüldü. Aynı veri üzerinde kübik spline referansı, XGBoost ve FT-Transformer modelleri eğitilerek doğruluk, gecikme, bellek ayak izi ve gömülü sistem uygulanabilirliği açısından karşılaştırıldı.",
      description: "Bu proje; analog uçuş performans grafiklerinden sayısal, öğrenilebilir ve gömülü sistemlerde çalıştırılabilir bir aviyonik performans tahmin altyapısı üretmeyi amaçlar. Çalışmada önce AFM nomogramlarından altitude, gross weight, drag index, Mach, fuel flow, engine type ve specific range değişkenleri çıkarıldı; ardından klasik 4 boyutlu kübik spline interpolasyon, XGBoost regresyonu ve FT-Transformer mimarisi aynı deney protokolü altında kıyaslandı.",
      tags: [
        "TUSAŞ LIFT UP",
        "TÜBİTAK 2209-B",
        "MMU KAAN",
        "AFM Nomogram Digitization",
        "U-Net / OCR",
        "Cubic Spline Baseline",
        "XGBoost",
        "FT-Transformer",
        "NVIDIA Jetson Orin Nano"
      ],
      specs: [
        { name: "Kurum / Sanayi Ortağı", value: "Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ)" },
        { name: "Destek Programları", value: "TUSAŞ LIFT UP 2025-2026 & TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri" },
        { name: "Sanayi Danışmanı", value: "Zeynel Abidin AYDOĞAN" },
        { name: "Akademik Danışman", value: "Doç. Dr. Aziz KABA" },
        { name: "Proje Ekibi", value: "Ahmet Soner GÜLEÇ (Lider), Umut ÇÖRDÜK, Ufuk ÖZKAN" }
      ],
      overview: `
<strong>A. Projenin Mühendislik Problemi</strong><br><br>
Muharip hava araçlarında uçuş performans büyüklükleri, görev bilgisayarı ve aviyonik yazılım içinde çoğunlukla arama tabloları ve interpolasyon yöntemleri ile temsil edilir. Bu yaklaşım deterministik ve açıklanabilir olsa da tablo çözünürlüğü, bellek maliyeti ve ara noktalardaki doğrusal olmayan davranışlar nedeniyle sınırlıdır. Projenin çıkış noktası tam olarak bu ikilemdi: <strong>yüksek doğruluk</strong>, <strong>düşük gecikme</strong> ve <strong>kısıtlı donanımda çalışabilirlik</strong> aynı anda sağlanabilir mi?<br><br>

<strong>B. Araştırma Kapsamı</strong><br><br>
Çalışma TUSAŞ LIFT UP Sanayi Odaklı Lisans Bitirme Projeleri Programı ve TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri desteğiyle yürütüldü. KAAN hedef platformu için doğrudan gizli/veri erişimi yerine, yöntem geliştirme ve doğrulama amacıyla F-18 uçuş el kitabı/performans nomogramları vekil veri kaynağı olarak ele alındı. Amaç, üreticiye ait ham veri tabanına erişmek değil; yayınlanmış performans grafiklerinde temsil edilen düzeltilmiş uçuş bilgisini sayısal ve modellenebilir bir veri setine dönüştürmekti.<br><br>

<strong>C. Benim Rolüm</strong><br><br>
Proje lideri olarak veri dijitasyonu, modelleme protokolünün kurulması, XGBoost ve FT-Transformer kıyas akışının tasarlanması, NVIDIA Jetson Orin Nano hedef ortam profilinin yorumlanması, teknik raporların hazırlanması ve sanayi/akademik danışman sunumlarının bütünleştirilmesinde aktif rol aldım. Çalışmanın odağı yalnızca model eğitmek değil; aviyonik sistemlerde gerçekçi sayılabilecek kısıtlar altında hangi yaklaşımın neden tercih edileceğini mühendislik gerekçeleriyle ortaya koymaktı.<br><br>

<strong>D. Ortaya Çıkan Ürün</strong><br><br>
Sonuçta analog performans grafiklerinden başlayan süreç; temizlenmiş bir master veri seti, 4 boyutlu kübik spline referans motoru, XGBoost ve FT-Transformer modelleri, full-table raporlar, slice bazlı hata analizleri, nomogram karşılaştırma çıktıları ve Flask/Qt tabanlı tahmin arayüzleriyle uçtan uca bir araştırma prototipine dönüştü.
`,
      scientificMerit: `
<strong>1. Bilimsel Nitelik ve Yenilikçi Yön</strong><br><br>
Bu çalışmanın özgün yönü, uçuş performans tahminini yalnızca "hangi model daha doğru?" sorusuyla ele almamasıdır. Aviyonik sistemlerde doğruluk tek başına yeterli değildir; modelin çalıştığı donanımda ne kadar bellek tükettiği, tekil tahmin gecikmesi, model artefact boyutu ve CPU davranışı da karar kriteridir. Bu nedenle karşılaştırma; RMSE, MAE, MAPE ve R² yanında model boyutu, tahmini gecikme ve RAM ayak iziyle birlikte kuruldu.<br><br>

<strong>1.1. Neden Klasik Yöntem Yetmeyebilir?</strong><br>
Arama tablosu ve interpolasyon yaklaşımı, doğrulanmış veriyi ayrık düğüm noktalarında saklar. Tablo büyüdükçe bellek maliyeti artar; tablo seyrekleştiğinde ise doğrusal olmayan bölgelerde hata büyüyebilir. Özellikle altitude, gross weight, drag index, Mach ve fuel flow değişkenlerinin birlikte etkileştiği performans yüzeylerinde bu etki daha belirgin hale gelir.<br><br>

<strong>1.2. Neden XGBoost?</strong><br>
XGBoost, tabular mühendislik verilerinde güçlü bir baseline olarak seçildi. Ağaç tabanlı gradyan artırma yaklaşımı, düşük çıkarım maliyetiyle doğrusal olmayan ilişkileri yakalayabilir. Proje artefactlarında XGBoost test kümesinde RMSE 0.002592, MAE 0.001089 ve R² 0.999280 değerlerine ulaştı; bu da onu edge inference için en dengeli aday yaptı.<br><br>

<strong>1.3. Neden FT-Transformer?</strong><br>
FT-Transformer, sayısal ve kategorik değişkenleri ortak token uzayında temsil ederek değişkenler arası bağlamsal ilişkileri self-attention ile öğrenir. Bu model, yalnızca tek tek kolon etkilerini değil; örneğin irtifa-Mach-ağırlık-yakıt akışı birlikteliğinin specific range üzerindeki etkisini modelleyebilecek araştırma değeri yüksek bir mimari olarak konumlandırıldı.<br><br>

<strong>1.4. Optimizasyon Mantığı</strong><br>
PSO yaklaşımı, hiperparametre uzayında yalnızca doğruluk değil; gecikme ve model boyutu gibi donanım farkındalıklı maliyetleri de içerecek şekilde tasarlandı. Kullanılan hedef mantığı: J(theta) = w1 * RMSE/RMSE_ref + w2 * latency/latency_ref + w3 * size/size_ref.
`,
      architecture: `
<strong>2. Uçtan Uca Sistem Mimarisi</strong><br><br>

<strong>2.1. Ham Veri ve Nomogram Mantığı</strong><br>
AFM/handbook grafiklerinde yer alan performans eğrileri; CFD, rüzgar tüneli, uçuş testi ve sertifikasyon süreci sonunda üretilmiş düzeltilmiş performans bilgisini temsil eder. Bu nedenle grafiklerden okunan veri, rastgele görsel veri değil; fiziksel olarak anlamlı bir performans yüzeyinin dışavurumudur. Projede bu grafikler sayısallaştırılarak ML modelleri için yapılandırılmış hale getirildi.<br><br>

<strong>2.2. Dijitasyon Hattı</strong><br>
Başlangıçta MATLAB DigitizeGraph ve temel OpenCV eşikleme yaklaşımı değerlendirildi. Ancak yoğun grid çizgileri, üst üste binen metinler ve nomogram eğrilerinin karmaşık yapısı nedeniyle klasik piksel yoğunluğu yöntemi tek başına yeterli görülmedi. Bunun üzerine Python tabanlı bir U-Net segmentasyon hattı kuruldu. Binlerce sentetik uçak performans grafiği ve maske üretilerek model eğitildi; hedef eğriler arka plan grid ve metin gürültüsünden ayrıştırıldı. OCR ile eksen/sayısal değerler okunarak piksel koordinatları fiziksel birimlere dönüştürüldü.<br><br>

<strong>2.3. Master Veri Seti</strong><br>
Veriler Tidy Data prensibiyle tek tabloya indirildi: her değişken bir sütun, her uçuş koşulu bir satır. Nihai CSV, 54.620 satırdan oluştu. Kolonlar: altitude, gross_weight, drag_index, mach, fuel_flow, engine_type ve specific_range. Veri setinde one_engine ve two_engine senaryoları ayrı kategorik özellik olarak tutuldu. İrtifa aralığı 5.000-50.000 ft, gross weight aralığı 30.000-66.000 lb, drag index aralığı 0-300 ve Mach aralığı 0.1069-0.9652 olarak işlendi.<br><br>

<strong>2.4. Referans Nümerik Motor</strong><br>
Klasik yaklaşımı temsil etmek için 4 boyutlu kübik spline interpolasyon motoru geliştirildi. Hesap zinciri sırasıyla Mach -> Specific Range, Drag Index -> Specific Range, Gross Weight -> Specific Range ve Altitude -> Specific Range şeklinde kuruldu. Tridiagonal sistemler Thomas algoritmasıyla O(n) karmaşıklıkta çözüldü; aralık bulma için binary search kullanıldı. Böylece FMS benzeri deterministik ve açıklanabilir baseline elde edildi.<br><br>

<strong>2.5. Öğrenen Modeller</strong><br>
XGBoost tarafında 300 estimator, max_depth 6, learning_rate 0.05, subsample 0.9 ve hist tree_method kullanıldı. FT-Transformer tarafında d_model 64, 3 encoder katmanı, 4 attention head, d_ff 128, dropout 0.1 ve batch_size 128 ile eğitim yapıldı. Her iki model aynı veri bölünmesiyle, aynı hedef değişken olan specific_range üzerinde kıyaslandı.<br><br>

<strong>2.6. Raporlama ve Arayüz</strong><br>
Proje içinde Flask tabanlı "Specific Range Studio" arayüzü, legacy Streamlit arayüzü ve Qt masaüstü uygulaması geliştirildi. Arayüzler; hazır rapor görüntüleme, tekil tahmin, XGBoost/FT-Transformer karşılaştırması, slice bazlı hata analizi, nomogram üretimi ve maliyet fonksiyonu simülasyonu gibi modüller içerir.
`,
      riskManagement: `
<strong>3. Risk Yönetimi ve Teknik Kararlar</strong><br><br>
<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>
  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>
    <tr>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Risk / Belirsizlik</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Uygulanan Çözüm</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Sonuç</th>
    </tr>
  </thead>
  <tbody style='font-size:0.9rem; color:var(--text-main);'>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Muharip uçak ham verilerine erişim kısıtı</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>KAAN hedefi için yöntem geliştirme; F-18 AFM/handbook nomogramlarıyla vekil veri doğrulaması.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Gizli veri gerektirmeyen, tekrarlanabilir araştırma protokolü.</td>
    </tr>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Nomogramlarda grid ve metin gürültüsü</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Klasik eşikleme yerine sentetik veriyle eğitilen U-Net segmentasyon ve OCR destekli eksen okuma.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Hedef eğriler izole edildi; %2 sapma eşiğiyle dijital veri kalitesi izlendi.</td>
    </tr>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Model doğruluğu ile kaynak tüketimi çatışması</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>RMSE/MAE yanında gecikme, model boyutu ve RAM ayak izini içeren donanım farkındalıklı kıyas.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>XGBoost deploy için en dengeli aday, FT-Transformer araştırma mimarisi olarak konumlandı.</td>
    </tr>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>NVIDIA Jetson Orin Nano eğitim için hedeflenmeyen donanım</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Eğitim masaüstü/GPU ortamında, Jetson Orin Nano tarafı yalnızca edge inference ve demo profili olarak tasarlandı.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Gerçekçi edge deployment ayrımı kuruldu.</td>
    </tr>
  </tbody>
</table>
`,
      subsystems: [
        {
          title: "Nomogram Digitization Pipeline",
          desc: "AFM grafiklerinin grid, metin ve eğri katmanlarını ayrıştırmak için U-Net segmentasyon, OCR eksen okuma ve pikselden fiziksel birime dönüşüm hattı kuruldu."
        },
        {
          title: "Synthetic Data Generator",
          desc: "U-Net eğitiminde kullanılmak üzere binlerce uçak performans grafiği ve maske üreten sentetik veri altyapısı geliştirildi."
        },
        {
          title: "Master Dataset Builder",
          desc: "One Engine ve Two Engine kaynakları birleştirilerek 54.620 satırlık combined_specific_range.csv veri seti üretildi."
        },
        {
          title: "4D Cubic Spline Baseline",
          desc: "Mach, drag index, gross weight ve altitude eksenlerinde ardışık spline zinciri; Thomas algoritması ve binary search ile deterministik referans motoru."
        },
        {
          title: "XGBoost Regression Stack",
          desc: "Tabular performans verisinde düşük gecikmeli, yüksek R² değerli ve edge inference için pratik deploy adayı model."
        },
        {
          title: "FT-Transformer Architecture",
          desc: "Sayısal ve kategorik değişkenleri ortak token uzayına taşıyan, self-attention ile değişken etkileşimlerini öğrenen araştırma modeli."
        },
        {
          title: "Specific Range Studio",
          desc: "Flask/Qt/Streamlit arayüzleriyle hazır rapor, tekil tahmin, model karşılaştırması, nomogram ve maliyet simülasyonu modülleri."
        },
        {
          title: "Edge Benchmark Profile",
          desc: "NVIDIA Jetson Orin Nano sınıfı edge-AI hedef ortamında gecikme, RAM ve model boyutu yorumlama hattı."
        }
      ],
      analysis: `
<strong>4. Doğruluk ve Benchmark Sonuçları</strong><br><br>
<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>
  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>
    <tr>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Model</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Test RMSE</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Test MAE</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>R²</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>MAPE</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Model Boyutu</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Tahmini Edge Gecikme</th>
    </tr>
  </thead>
  <tbody style='font-size:0.9rem; color:var(--text-main);'>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>XGBoost</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.002592</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.001089</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.999280</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>%1.399</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>1.855 MB</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.76 ms</td>
    </tr>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>FT-Transformer</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.003907</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.002042</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.998365</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>%3.119</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.417 MB</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>5.12 ms</td>
    </tr>
  </tbody>
</table>

<strong>4.1. Sonuçların Yorumu</strong><br>
XGBoost hem doğruluk hem de gecikme tarafında en dengeli profil olarak öne çıktı. FT-Transformer daha küçük model artefactına sahip olmasına rağmen runtime bellek maliyeti daha yüksek tahmin edildi; buna karşın değişkenler arası bağlamsal ilişkiyi öğrenmesi nedeniyle araştırma değeri yüksek bir mimari olarak değerlendirildi. Kübik spline yaklaşımı ise "model rakibi" olmaktan çok deterministik ve açıklanabilir referans üretim ailesi olarak kullanıldı.<br><br>

<strong>4.2. Slice ve Nomogram Analizi</strong><br>
Full-table raporlar 54.620 satır üzerinde üretildi. Ayrıca altitude, gross_weight ve engine_type dilimlerine göre slice bazlı hata tabloları ve handbook-style nomogram karşılaştırmaları hazırlandı. Bu sayede model performansı yalnızca global metriklerle değil; belirli irtifa/ağırlık bölgelerinde eğri davranışıyla da incelendi.<br><br>

<strong>4.3. Hedef Ortam Mantığı</strong><br>
NVIDIA Jetson Orin Nano profili eğitim için değil, deploy/inference davranışını görünür kılmak için kullanıldı. Eğitim ve ağır raporlama iş istasyonu tarafında; Jetson Orin Nano tarafında temiz veri, model artefactları ve Flask tabanlı tekil tahmin arayüzü çalışacak şekilde ayrıldı. Bu ayrım aviyonik gömülü sistem yaklaşımına daha gerçekçi bir mühendislik çerçevesi sağladı.
`,
      achievements: `
<strong>5. Çıktılar ve Etki</strong><br><br>
Proje; TUSAŞ LIFT UP 2025-2026 ve TÜBİTAK 2209-B desteğiyle yürütülen, sanayi problemiyle doğrudan ilişkili bir araştırma prototipine dönüştü. Çıktılar arasında araştırma önerisi, ara değerlendirme raporu, 1. ve 2. aşama raporları, XGBoost raporu, Tabular Transformer raporu, NVIDIA Jetson Orin Nano hedef ortam benchmark raporu, bildiri/makale taslakları, model artefactları, nomogram çıktıları ve çalıştırılabilir tahmin arayüzleri bulunuyor.<br><br>

Bu çalışma benim için yalnızca bir model eğitme süreci değil, analog bir havacılık bilgisini uçtan uca dijital, doğrulanabilir ve gömülü sistem gerçeklerine duyarlı bir mühendislik hattına dönüştürme deneyimi oldu. Proje boyunca ham performans grafiklerinin nasıl üretildiğini anlamaktan veri dijitasyon mimarisini kurmaya, XGBoost ve FT-Transformer modellerini aynı protokolde kıyaslamaktan NVIDIA Jetson Orin Nano hedef ortamı için gecikme, bellek ve model boyutu yorumlamaya kadar sürecin teknik sorumluluğunu üstlendim. Bu yönüyle çalışma, KAAN benzeri milli platformlarda uçuş performans verisinin yalnızca klasik LUT/interpolasyon yaklaşımıyla değil, donanım farkındalıklı yapay zeka yöntemleriyle de değerlendirilebileceğini gösteren bir araştırma prototipine dönüştü. Kişisel olarak bana en büyük katkısı; veri, model, gömülü sistem ve havacılık mühendisliği gereksinimlerini aynı problem içinde birlikte düşünme refleksi kazandırması oldu. Sanayi açısından ise Milli Teknoloji Hamlesi vizyonuyla uyumlu biçimde, yerli ve milli aviyonik yazılım kabiliyetlerine temas eden; araştırma çıktısını rapor, benchmark, model artefactı ve sunulabilir teknik argüman haline getiren somut bir öğrenme ve üretim zemini sağladı.

<div class="project-output-access">
  <div>
    <span class="visual-kicker">Arayüz Çıktısı</span>
    <strong>Specific Range Studio</strong>
    <p>Projenin çalıştırılabilir yazılım çıktısı; One Engine / Two Engine veri setlerinden temizlenmiş Specific Range verisi üretmek, interpolasyon referansını, XGBoost ve FT-Transformer modellerini eğitmek, model karşılaştırma raporları almak, benchmark sonuçlarını incelemek ve Flask tabanlı tahmin arayüzünü çalıştırmak için hazırlanmış modüler araştırma kod tabanıdır.</p>
  </div>
  <a class="project-output-link" href="https://github.com/ufukzkn/specific-range-studio" target="_blank" rel="noopener noreferrer">
    <i data-lucide="external-link"></i>
    <span>Specific Range Studio’ya Git</span>
  </a>
</div>
`
    },
    en: {
      applicationNo: "68a5b97874a0f",
      summary: "This TUSAŞ LIFT UP and TÜBİTAK 2209-B research project revisits how combat-aircraft flight performance quantities such as Specific Range can be computed beyond classical lookup tables and interpolation. F-18 AFM/handbook nomograms were converted into a 54,620-row structured dataset through U-Net based curve segmentation, OCR-assisted axis parsing, and data cleaning. A cubic spline reference engine, XGBoost, and FT-Transformer were trained and compared across accuracy, latency, memory footprint, model size, and edge deployment feasibility.",
      description: "The project builds an end-to-end avionics performance modeling pipeline: analog AFM nomograms are digitized into altitude, gross weight, drag index, Mach, fuel flow, engine type, and specific range variables; then cubic spline interpolation, XGBoost regression, and FT-Transformer are benchmarked under the same protocol.",
      tags: [
        "TUSAŞ LIFT UP",
        "TÜBİTAK 2209-B",
        "MMU KAAN",
        "AFM Nomogram Digitization",
        "U-Net / OCR",
        "Cubic Spline Baseline",
        "XGBoost",
        "FT-Transformer",
        "NVIDIA Jetson Orin Nano"
      ],
      specs: [
        { name: "Institution / Industry Partner", value: "Turkish Aerospace Industries (TUSAŞ)" },
        { name: "Grant Programs", value: "TUSAŞ LIFT UP 2025-2026 & TÜBİTAK 2209-B Industry-Oriented Research" },
        { name: "Industry Advisor", value: "Zeynel Abidin AYDOĞAN" },
        { name: "Academic Advisor", value: "Assoc. Prof. Dr. Aziz KABA" },
        { name: "Project Team", value: "Ahmet Soner GÜLEÇ (Lead), Umut ÇÖRDÜK, Ufuk ÖZKAN" }
      ],
      overview: `
<strong>A. Engineering Problem</strong><br><br>
Combat-aircraft avionics frequently store and compute flight performance quantities through lookup tables and interpolation. This is deterministic and explainable, but table resolution, memory cost, and nonlinear behavior between grid points create a practical trade-off. The project asks whether high accuracy, low latency, and constrained-hardware deployability can be achieved together.<br><br>

<strong>B. Research Scope</strong><br><br>
The work was conducted under TUSAŞ LIFT UP and TÜBİTAK 2209-B. For method development, F-18 AFM/handbook nomograms were used as a surrogate data source for the KAAN-oriented problem context. The goal was not to access confidential manufacturer databases; it was to transform performance information represented in public/available nomograms into a clean, learnable dataset.<br><br>

<strong>C. My Role</strong><br><br>
As project lead, I worked on the digitization workflow, model comparison protocol, XGBoost and FT-Transformer evaluation, NVIDIA Jetson Orin Nano target-profile interpretation, technical reporting, and integration of academic/industry advisor feedback.<br><br>

<strong>D. Resulting Prototype</strong><br><br>
The pipeline evolved from analog performance charts into a master dataset, a 4D cubic spline reference engine, XGBoost and FT-Transformer models, full-table reports, slice-level error analyses, nomogram comparison outputs, and Flask/Qt prediction interfaces.
`,
      scientificMerit: `
<strong>1. Scientific Merit and Novelty</strong><br><br>
The project does not treat model quality as an accuracy-only question. In avionics, a model must also be evaluated through latency, memory footprint, model size, and CPU behavior. Therefore, RMSE, MAE, MAPE, and R² were interpreted together with edge deployment metrics.<br><br>

<strong>1.1. Lookup Table Limitation</strong><br>
Lookup tables store verified performance data at discrete grid points. Higher resolution increases memory cost; lower resolution can increase interpolation error in nonlinear regions. This becomes more critical when altitude, gross weight, drag index, Mach, and fuel flow interact.<br><br>

<strong>1.2. XGBoost Rationale</strong><br>
XGBoost was selected as a strong tabular baseline. It reached test RMSE 0.002592, MAE 0.001089, and R² 0.999280, making it the most balanced candidate for edge inference.<br><br>

<strong>1.3. FT-Transformer Rationale</strong><br>
FT-Transformer represents numerical and categorical inputs in a shared token space and learns feature interactions through self-attention. It was evaluated as a research-focused architecture for capturing contextual relationships among flight variables.<br><br>

<strong>1.4. Optimization Logic</strong><br>
The PSO objective was structured to combine accuracy, latency, and model size: J(theta) = w1 * RMSE/RMSE_ref + w2 * latency/latency_ref + w3 * size/size_ref.
`,
      architecture: `
<strong>2. End-to-End System Architecture</strong><br><br>
The pipeline starts with AFM/handbook nomograms and turns them into a tabular ML problem. Classical thresholding and MATLAB digitization were evaluated first, but dense grid lines and overlapping text motivated a Python-based U-Net segmentation pipeline. OCR-assisted axis parsing converted curve pixels into physical units.<br><br>

The final dataset contains 54,620 rows with altitude, gross_weight, drag_index, mach, fuel_flow, engine_type, and specific_range columns. A 4D cubic spline baseline computes Specific Range through the chain Mach -> SR, Drag Index -> SR, Gross Weight -> SR, and Altitude -> SR, using Thomas algorithm for tridiagonal systems and binary search for interval localization.<br><br>

XGBoost was trained with 300 estimators, max_depth 6, learning_rate 0.05, and hist tree_method. FT-Transformer used d_model 64, three encoder layers, four attention heads, and a regression head. Reporting interfaces include Flask-based Specific Range Studio, a legacy Streamlit UI, and a Qt desktop tool for prediction, comparison, nomogram generation, and cost simulation.
`,
      riskManagement: `
<strong>3. Risk Management</strong><br><br>
<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>
  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>
    <tr>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Risk</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Mitigation</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Outcome</th>
    </tr>
  </thead>
  <tbody style='font-size:0.9rem; color:var(--text-main);'>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Restricted combat-aircraft raw data</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Use F-18 AFM/handbook nomograms as surrogate data for method development.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Repeatable protocol without confidential data dependency.</td>
    </tr>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Grid/text noise in nomograms</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Switch from thresholding to U-Net segmentation and OCR-assisted parsing.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Curve extraction quality was controlled with a 2% deviation threshold.</td>
    </tr>
    <tr>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Accuracy vs resource trade-off</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Evaluate latency, memory, model size, and accuracy together.</td>
      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>XGBoost emerged as the balanced deployment candidate.</td>
    </tr>
  </tbody>
</table>
`,
      subsystems: [
        { title: "Nomogram Digitization Pipeline", desc: "U-Net segmentation, OCR axis parsing, and pixel-to-physical-unit conversion for AFM performance charts." },
        { title: "Synthetic Data Generator", desc: "Synthetic aircraft performance charts and masks used to train the curve segmentation model." },
        { title: "Master Dataset Builder", desc: "One Engine and Two Engine sources merged into a 54,620-row combined_specific_range.csv dataset." },
        { title: "4D Cubic Spline Baseline", desc: "Deterministic reference engine over Mach, drag index, gross weight, and altitude." },
        { title: "XGBoost Regression Stack", desc: "Low-latency tabular model with strong test accuracy and practical edge deployment behavior." },
        { title: "FT-Transformer Architecture", desc: "Self-attention model that embeds numerical and categorical variables into a shared token space." },
        { title: "Specific Range Studio", desc: "Flask/Qt/Streamlit tools for reports, prediction, comparison, nomogram generation, and cost simulation." },
        { title: "Edge Benchmark Profile", desc: "NVIDIA Jetson Orin Nano edge-AI inference interpretation over latency, RAM, and artifact size." }
      ],
      analysis: `
<strong>4. Accuracy and Benchmark Results</strong><br><br>
<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>
  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>
    <tr>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Model</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Test RMSE</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Test MAE</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>R²</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>MAPE</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Model Size</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Estimated Edge Latency</th>
    </tr>
  </thead>
  <tbody style='font-size:0.9rem; color:var(--text-main);'>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>XGBoost</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.002592</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.001089</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.999280</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>1.399%</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>1.855 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.76 ms</td></tr>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>FT-Transformer</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.003907</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.002042</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.998365</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>3.119%</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.417 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>5.12 ms</td></tr>
  </tbody>
</table>
XGBoost delivered the strongest balance between accuracy and estimated edge latency. FT-Transformer remains valuable as a research architecture for feature interaction modeling, while cubic spline provides the deterministic reference family.
`,
      achievements: `
<strong>5. Outputs and Impact</strong><br><br>
The project produced the TÜBİTAK proposal, interim report, Lift-UP stage reports, XGBoost and Tabular Transformer technical reports, NVIDIA Jetson Orin Nano target benchmark report, paper/proceedings drafts, trained artifacts, nomogram outputs, and executable prediction interfaces.<br><br>
<strong>Technical impact:</strong> An end-to-end path from analog performance graphs to edge-profile inference was built.<br>
<strong>Industry impact:</strong> The work demonstrates how alternatives to lookup-table/interpolation logic can be evaluated under avionics-oriented constraints.<br>
<strong>Personal contribution:</strong> I led the project flow across data pipeline design, model comparison, benchmark interpretation, reporting, and advisor-facing presentation.
`
    }
  };

  Object.assign(UI_TRANSLATIONS.tr, {
    heading_scientific_merit: "// 02. BİLİMSEL NİTELİK VE YENİLİKÇİ YÖN",
    heading_risk_management: "// 05. RİSK YÖNETİMİ VE TEKNİK KARARLAR"
  });

  Object.assign(UI_TRANSLATIONS.en, {
    heading_scientific_merit: "// 02. SCIENTIFIC MERIT & NOVELTY",
    heading_risk_management: "// 05. RISK MANAGEMENT & TECHNICAL DECISIONS"
  });

  liftUpContent.tr.riskManagement = "";
  liftUpContent.en.riskManagement = "";

  liftUpContent.tr.architecture = `
<strong>2. Uçtan Uca Sistem Mimarisi</strong><br><br>

<div class="visual-callout-grid">
  <div class="visual-callout-card">
    <span class="visual-kicker">Girdi</span>
    <strong>AFM / POH nomogramları</strong>
    <p>Performans grafikleri; CFD, rüzgar tüneli, uçuş testi ve sertifikasyon sürecinden geçirilmiş düzeltilmiş uçuş bilgisini temsil eder.</p>
  </div>
  <div class="visual-callout-card">
    <span class="visual-kicker">Dönüşüm</span>
    <strong>Segmentasyon + OCR + kalibrasyon</strong>
    <p>Nomogram eğrileri grid ve metin gürültüsünden ayrıştırıldı; piksel koordinatları fiziksel uçuş değişkenlerine dönüştürüldü.</p>
  </div>
  <div class="visual-callout-card">
    <span class="visual-kicker">Çıktı</span>
    <strong>Model-ready master tablo</strong>
    <p>Altitude, gross weight, drag index, Mach, fuel flow, engine type ve specific range değişkenleri tek veri hattında birleştirildi.</p>
  </div>
</div>

<strong>2.1. Ham Veri ve Nomogram Mantığı</strong><br>
Ham Veri Eldesi raporunda açıklandığı gibi uçuş performans nomogramları, yalnızca teorik çizimler değil; tasarım, CFD, rüzgar tüneli, uçuş testi, standardizasyon ve emniyet marjı adımlarından geçen mühendislik ürünleridir. Bu nedenle grafikten okunan her eğri, arkasında fiziksel bir performans yüzeyi taşır. Projede bu mantık tersine işletildi: nomogramdaki düzeltilmiş/standartlaştırılmış bilgi önce sayısallaştırıldı, ardından sıcaklık, irtifa, ağırlık, drag index ve Mach etkileri veri setinde temsil edilebilir hale getirildi.<br><br>

<div class="project-figure-grid">
  <figure class="project-figure-card">
    <img src="lift-up-ham-veri-nomogram.png" alt="Ham Veri Eldesi raporu - nomogram oluşum süreci">
    <figcaption>Ham Veri Eldesi PDF'inde anlatılan nomogram oluşum zinciri: CFD ve rüzgar tüneli, uçuş testleri, veri standardizasyonu ve grafik üretimi.</figcaption>
  </figure>
  <figure class="project-figure-card">
    <img src="lift-up-ham-veri-method.png" alt="Ham Veri Eldesi raporu - düzeltme katsayıları">
    <figcaption>Ham veriye dönüş mantığı: sıcaklık/irtifa, ağırlık, drag index ve Mach etkilerinin ayrı katsayılarla ele alınması.</figcaption>
  </figure>
</div>

<strong>2.2. Dijitasyon Hattı</strong><br>
İlk denemelerde MATLAB DigitizeGraph ve klasik OpenCV eşikleme yaklaşımı kullanıldı. Ancak AFM grafiklerinde grid çizgileri, eğri etiketleri, eksen yazıları ve birbirine yakın performans eğrileri aynı görsel düzlemde yer aldığı için yalnızca piksel yoğunluğuna dayalı yöntem kararlı sonuç vermedi. Bu nedenle hat iki katmana ayrıldı: önce U-Net tabanlı segmentasyon ile hedef eğri pikselleri izole edildi, sonra OCR/eksen kalibrasyonu ile piksel uzayı fiziksel değişken uzayına çevrildi. Böylece görsel grafik, makine öğrenmesi modelinin okuyabileceği yapısal satırlara dönüştü.<br><br>

<strong>2.3. Master Veri Seti</strong><br>
Veriler Tidy Data prensibiyle tek tabloya indirildi: her değişken bir sütun, her uçuş koşulu bir satır olacak şekilde düzenlendi. Nihai veri seti 54.620 satırdan oluştu. Kolonlar altitude, gross_weight, drag_index, mach, fuel_flow, engine_type ve specific_range olarak standardize edildi. One Engine ve Two Engine senaryoları ayrı kategorik durumlar olarak korundu; böylece model yalnızca eğri şeklini değil motor konfigürasyonunun performans etkisini de öğrenebilir hale geldi.<br><br>

<strong>2.4. Referans Nümerik Motor</strong><br>
Klasik aviyonik yaklaşımı temsil etmek için 4 boyutlu kübik spline interpolasyon motoru kuruldu. Hesap zinciri Mach -> Specific Range, Drag Index -> Specific Range, Gross Weight -> Specific Range ve Altitude -> Specific Range şeklinde ilerledi. Bu katman, makine öğrenmesi modellerine rakip olmaktan çok deterministik referans ailesi olarak kullanıldı; çünkü tablo mantığına sadık, açıklanabilir ve ara değer üretimi için mühendislikte güvenilir bir zemin sağladı.<br><br>

<strong>2.5. Öğrenen Modeller</strong><br>
XGBoost, tabular uçuş performansı verisinde düşük gecikme ve yüksek doğruluk dengesi için seçildi. FT-Transformer ise sayısal ve kategorik değişkenleri ortak token uzayına taşıyarak self-attention ile değişken etkileşimlerini öğrenen akademik mimari adayı olarak konumlandı. Bu ayrım proje anlatısında bilinçli tutuldu: XGBoost pratik/deploy adayı, FT-Transformer araştırma ve ileri modelleme adayı, interpolasyon ise referans üretim ailesidir.<br><br>

<strong>2.6. Raporlama ve Arayüz</strong><br>
Specific Range Studio arayüzü; tekil tahmin, model karşılaştırması, nomogram üretimi, slice bazlı hata incelemesi ve maliyet fonksiyonu simülasyonu için geliştirildi. Böylece sonuçlar yalnızca statik metrik tablosu olarak kalmadı; kullanıcı belirli uçuş koşullarını girip model davranışını XGBoost, FT-Transformer ve referans interpolasyon yaklaşımı arasında karşılaştırabilir hale geldi.
`;

  liftUpContent.tr.analysis = `
<strong>4. Test, Simülasyon ve Doğrulama Sonuçları</strong><br><br>

<div class="visual-callout-grid result-grid">
  <div class="visual-callout-card result-card">
    <span class="visual-kicker">Pratik Kazanan</span>
    <strong>XGBoost</strong>
    <p>2. aşama sonuç raporunda XGBoost; doğruluk, hız ve canlı demo uygulanabilirliği açısından en dengeli ML modeli olarak değerlendirildi.</p>
  </div>
  <div class="visual-callout-card result-card">
    <span class="visual-kicker">Araştırma Odağı</span>
    <strong>FT-Transformer</strong>
    <p>Mevcut ölçümde XGBoost'u geçmese de tabular transformer yaklaşımını temsil ettiği ve ileri çalışma potansiyeli taşıdığı için korundu.</p>
  </div>
  <div class="visual-callout-card result-card">
    <span class="visual-kicker">Referans Ailesi</span>
    <strong>Interpolasyon</strong>
    <p>Kaynak tablo mantığına en yakın, deterministik ve yorumlanabilir referans üretim yöntemi olarak konumlandırıldı.</p>
  </div>
</div>

<div class="project-figure-grid">
  <figure class="project-figure-card">
    <img src="lift-up-sonuc-dogruluk-kaynak.png" alt="Lift-UP 2. aşama sonuç - doğruluk ve kaynak analizi">
    <figcaption>2. aşama sonuç raporu: doğruluk metrikleri ve runtime maliyet bileşenleri XGBoost'un pratik denge avantajını gösteriyor.</figcaption>
  </figure>
  <figure class="project-figure-card">
    <img src="lift-up-sonuc-karar-matrisi.png" alt="Lift-UP 2. aşama sonuç - karar matrisi ve radar grafiği">
    <figcaption>Karar matrisi ve radar grafiği: tek kazanan yerine kullanım rolüne göre model seçimi yapılması gerektiğini gösteren özet analiz.</figcaption>
  </figure>
</div>

<strong>4.1. Ölçülebilir Karşılaştırma</strong><br>
2. aşama sonuç raporunda karşılaştırma yalnızca RMSE, MAE, MAPE ve R² ile sınırlı tutulmadı. Hız, RAM, CPU, model boyutu, yorumlanabilirlik, kurulum kolaylığı, demo uygunluğu ve akademik değer birlikte değerlendirildi. XGBoost bu tabloda düşük hata ve düşük p95 gecikme ile öne çıktı; FT-Transformer daha küçük model dosyasına rağmen runtime bağımlılıkları nedeniyle daha ağır bir inference path'e sahip oldu; interpolasyon ise düşük bellek ve yüksek yorumlanabilirlik avantajıyla referans aile olarak kaldı.<br><br>

<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>
  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>
    <tr>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Yöntem</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>p95 Gecikme</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Peak RSS</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Model Boyutu</th>
      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Rol</th>
    </tr>
  </thead>
  <tbody style='font-size:0.9rem; color:var(--text-main);'>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Interpolasyon</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>6.89 ms</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>166.5 MiB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.64 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Deterministik referans</td></tr>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>XGBoost</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.35 ms</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>318.1 MiB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>1.92 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Pratik tahmin modeli</td></tr>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>FT-Transformer</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.74 ms</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>482.2 MiB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.42 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Araştırma mimarisi</td></tr>
  </tbody>
</table>

<strong>4.2. Sonuç Yorumu</strong><br>
XGBoost, kullanıcıya hızlı cevap üretmesi gereken canlı demo ve edge deployment senaryosunda güvenli varsayılan model olarak öne çıktı. FT-Transformer'ın değeri, mevcut ölçümde en iyi skoru vermesinden çok feature tokenizer, transformer encoder ve self-attention yapısıyla tabular uçuş verisi için ileri mimari denemesi sunmasıdır. İnterpolasyon ise doğruluk yarışında sıfır hatalı model gibi gösterilmedi; referans/tahmini gerçek değer üretimi için ayrı bir rol aldı.<br><br>

<strong>4.3. Sistem Önerisi</strong><br>
Final arayüzde üçlü yapı korunmalıdır: interpolasyon referans değer üretimi için, XGBoost hızlı ve güvenilir ML tahmini için, FT-Transformer ise akademik mimari ve ileri modelleme adayı olarak kullanılmalıdır. Bu rol ayrımı hem mühendislik kararını daha dürüst gösterir hem de projenin araştırma derinliğini güçlendirir.
`;

  liftUpContent.tr.architecture = `
<strong>2. Uçtan Uca Sistem Mimarisi ve Çalışma Prensibi</strong><br><br>

<div class="visual-callout-grid">
  <div class="visual-callout-card"><span class="visual-kicker">Kaynak</span><strong>AFM / handbook nomogramları</strong><p>Specific Range grafikleri, uçuş testi ve standardizasyon süreçlerinden geçmiş mühendislik bilgisini taşır.</p></div>
  <div class="visual-callout-card"><span class="visual-kicker">Dönüşüm</span><strong>Dijitasyon ve veri temizleme</strong><p>Eğri pikselleri, eksen değerleri ve motor/konfigürasyon bilgileri tek ölçülebilir veri hattında birleştirildi.</p></div>
  <div class="visual-callout-card"><span class="visual-kicker">Modelleme</span><strong>Referans model + öğrenen modeller</strong><p>Kübik spline, XGBoost ve FT-Transformer aynı veri üzerinde doğruluk ve gömülü sistem maliyeti açısından kıyaslandı.</p></div>
</div>

<strong>2.1. Ham Veri ve Nomogram Mantığı</strong><br>
Ham Veri Eldesi raporunda anlatıldığı gibi uçuş performans nomogramları, yalnızca teorik çizimler değildir. Süreç önce tasarım ve teorik modelleme ile başlar; CFD analizleri ve rüzgar tüneli testleriyle sürükleme karakteristikleri, drag polar davranışı ve tahmini performans yüzeyleri oluşturulur. Ardından uçuş testlerinde farklı ağırlık, irtifa, sıcaklık, basınç irtifası, güç ayarı ve hız kombinasyonları denenir. Bu ham ölçümlerde rüzgar, nem, pilotaj farkları ve atmosfer koşulları bulunduğu için veriler ISA benzeri standart koşullara indirgenir, normalize edilir ve emniyet marjlarıyla handbook grafiğine dönüştürülür.<br><br>
Bu projede yapılan işlem, bu akışı ters yönde okumaktır: grafikteki standartlaştırılmış Specific Range eğrileri tekrar sayısal veri noktalarına çevrilmiş, ardından sıcaklık/irtifa, ağırlık, drag index ve Mach etkileri veri setinde temsil edilebilir hale getirilmiştir. Ham Veri Eldesi notundaki yaklaşımda sıcaklık ve irtifa etkisi için motor yakıt sarfiyatının <code>sqrt(theta)</code> bağımlılığı, ağırlık etkisi için yaklaşık <code>(W / W_ref)^0.6</code> katsayısı, drag index için parazitik sürükleme katsayısı ve Mach için transonik dalga sürüklemesi dikkate alınır. Özet fikir şudur: grafikten okunan değer, fiziksel etkiler ayrıştırılarak daha ham ve modellenebilir bir forma taşınır.<br><br>
<code>SR_Ham = SR_Grafik / (f_alt × f_mach × f_weight × f_drag)</code><br><br>

<strong>2.2. Dijitasyon Hattı</strong><br>
Lift-UP 1. Aşama raporunda ilk hedef, grafiklerden ham <code>x, y</code> noktalarının güvenilir şekilde çıkarılması olarak tanımlandı. Başlangıçta MATLAB DigitizeGraph ve Python/OpenCV tabanlı klasik görüntü işleme yaklaşımları denendi. Bu yöntemler eğri takibi için hızlı bir başlangıç sağladı; fakat handbook grafiklerinde grid çizgileri, eksen yazıları, eğri etiketleri ve yakın geçen performans eğrileri aynı görsel düzlemde bulunduğu için salt eşikleme her grafikte aynı kararlılığı veremedi.<br><br>
Bu nedenle hat, kontrollü ve doğrulanabilir adımlara ayrıldı. Önce grafik görselleri okunabilir çözünürlüğe getirildi, eğri rengi/kontrastı ve grid yapısı ayrıştırıldı. Ardından eksen kalibrasyonu yapılarak piksel koordinatları fiziksel birimlere çevrildi. Son aşamada her nokta ait olduğu motor senaryosu, drag index, Mach, gross weight ve altitude bilgisiyle etiketlendi. Böylece PDF/handbook görseli, model eğitiminde kullanılabilecek satır-sütun formatına indirildi.<br><br>

<strong>2.3. Master Veri Seti</strong><br>
1. Aşama çıktısında amaç, yalnızca eğri noktalarını çıkarmak değil; bu noktaları makine öğrenmesi modellerinin doğrudan okuyabileceği standart bir tabloya dönüştürmekti. Bu nedenle veri <em>tidy data</em> düzeninde kuruldu: her değişken ayrı sütun, her uçuş koşulu ayrı satır olacak şekilde yapılandırıldı. Nihai master veri seti 54.620 satırdan oluştu ve <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code>, <code>engine_type</code>, <code>specific_range</code> kolonlarıyla standardize edildi.<br><br>
One Engine ve Two Engine senaryoları ayrı motor durumları olarak korundu. Bu tercih önemliydi; çünkü model yalnızca geometrik eğri şeklini değil, motor konfigürasyonunun yakıt akışı ve menzil üzerindeki etkisini de öğrenmeliydi. Veri temizleme adımında tekrar eden/uyumsuz noktalar ayıklandı, eksen kaynaklı ölçek hataları düzeltildi ve öğrenme modelleri için eğitim, doğrulama, test ayrımı yapılabilecek tek bir master tablo elde edildi.<br><br>

<strong>2.4. Referans Nümerik Model</strong><br>
Baseline Model çalışması, klasik lookup table yaklaşımını temsil eden deterministik bir karşılaştırma zemini kurar. Burada amaç ML modelini doğrudan “gerçek” kabul etmek yerine, handbook tablosuna sadık kalabilen bir nümerik referans oluşturmaktır. Referans nümerik model 4 boyutlu kübik spline interpolasyon mantığıyla çalışır: <code>Altitude × Weight × Drag Index × Mach -> Specific Range</code>. Hesap zinciri Mach ekseninden başlayarak drag index, gross weight ve altitude boyutlarında ara değer üretir.<br><br>
Kübik spline yaklaşımı iki veri noktası arasında lineer kırıklar üretmek yerine daha yumuşak geçişler sağlar. Baseline dokümantasyonunda bu yapı lineer interpolasyon, Newton interpolasyonu ve lineer regresyon gibi yöntemlerle karşılaştırılmıştır. Bu katman projede “referans nümerik model” olarak konumlandırıldı; çünkü açıklanabilir, tablo mantığına sadık ve uçuş performansı arama tablolarının mühendislik kullanımına yakındır.<br><br>

<strong>2.5. Öğrenen Modeller</strong><br>
XGBoost, tabular uçuş performansı verisinde güçlü bir pratik model olarak seçildi. XGBoost PDF’inde anlatılan gradyan artırmalı karar ağacı mantığında her ağaç, önceki ağaçların hatasını azaltacak şekilde kurulur; split kazancı gradyan ve Hessian toplamlarıyla değerlendirilir, düzenlileştirme terimleri ise modelin gereksiz karmaşıklığa gitmesini engeller. Bu nedenle XGBoost, az özellikli ama güçlü doğrusal olmayan ilişkiler içeren uçuş performansı tablosu için hızlı ve sağlam bir adaydır.<br><br>
FT-Transformer ise Tabular Transform raporundaki mimariyi takip eder. Sayısal ve kategorik değişkenler feature tokenizer ile ortak bir temsil uzayına taşınır; kategorik değişkenler embedding, sayısal değişkenler ise öğrenilebilir ağırlıklarla token haline gelir. Transformer encoder bloklarında Multi-Head Self-Attention, FFN, residual bağlantılar ve LayerNorm kullanılarak değişkenler arası etkileşim öğrenilir. Bu model mevcut veri ölçeğinde XGBoost’u geçmekten çok, projenin akademik araştırma tarafını güçlendiren ileri mimari aday olarak kullanıldı.<br><br>

<div class="project-figure-grid">
  <figure class="project-figure-card"><img src="lift-up-fig-xgboost-flow.png" alt="XGBoost karar ağacı akışı"><figcaption>XGBoost raporundan: ardışık ağaçların residual hatayı azaltarak nihai tahmini oluşturması.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-fig-xgboost-split.png" alt="XGBoost split gain analizi"><figcaption>XGBoost raporundan: aday bölünmelerin gain, gradient ve Hessian toplamlarıyla değerlendirilmesi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-fig-ft-tokenization.png" alt="FT-Transformer tokenization akışı"><figcaption>Tabular Transform raporundan: kategorik ve sayısal girdilerin Transformer mimarisine taşınması.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-fig-transformer-block.png" alt="Transformer encoder blok yapısı"><figcaption>Tabular Transform raporundan: MHSA, FFN, residual akış ve LayerNorm bileşenleri.</figcaption></figure>
</div>
`;

  liftUpContent.tr.analysis = `
<strong>4. Test, Simülasyon ve Doğrulama Sonuçları</strong><br><br>

<div class="visual-callout-grid result-grid">
  <div class="visual-callout-card result-card"><span class="visual-kicker">Pratik Kazanan</span><strong>XGBoost</strong><p>2. aşama sonuç raporunda XGBoost; doğruluk, hız ve canlı demo uygulanabilirliği açısından en dengeli ML modeli olarak değerlendirildi.</p></div>
  <div class="visual-callout-card result-card"><span class="visual-kicker">Araştırma Odağı</span><strong>FT-Transformer</strong><p>Mevcut ölçümde XGBoost’u geçmese de tabular transformer yaklaşımını temsil ettiği ve ileri çalışma potansiyeli taşıdığı için korundu.</p></div>
  <div class="visual-callout-card result-card"><span class="visual-kicker">Referans Ailesi</span><strong>Interpolasyon</strong><p>Kaynak tablo mantığına en yakın, deterministik ve yorumlanabilir referans üretim yöntemi olarak konumlandırıldı.</p></div>
</div>

<div class="project-figure-grid">
  <figure class="project-figure-card"><img src="lift-up-fig-accuracy-comparison.png" alt="XGBoost ve FT-Transformer doğruluk karşılaştırması"><figcaption>Lift-UP 2. Aşama Sonuç PDF’inden: XGBoost RMSE, MAE ve MAPE metriklerinde FT-Transformer’a göre daha düşük hata verdi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-fig-runtime-cost.png" alt="Runtime maliyet bileşenleri"><figcaption>Lift-UP 2. Aşama Sonuç PDF’inden: latency, memory ve CPU bileşenlerinin normalize edilmiş karşılaştırması.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-fig-decision-matrix.png" alt="Genel karar matrisi"><figcaption>Karar matrisi: doğruluk, hız, RAM, model boyutu, yorumlanabilirlik ve Pi/edge uygunluğu birlikte skorlandı.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-fig-radar-profile.png" alt="Genel profil radar grafiği"><figcaption>Radar profil: XGBoost’un dengeli pratik model, FT-Transformer’ın araştırma adayı, interpolasyonun referans ailesi olduğunu görselleştirir.</figcaption></figure>
</div>

<strong>4.1. Ölçülebilir Karşılaştırma</strong><br>
2. aşama sonuç raporunda karşılaştırma yalnızca RMSE, MAE, MAPE ve R² ile sınırlı tutulmadı. Hız, RAM, CPU, model boyutu, yorumlanabilirlik, kurulum kolaylığı, demo uygunluğu ve akademik değer birlikte değerlendirildi. XGBoost düşük hata ve düşük p95 gecikme ile öne çıktı; FT-Transformer daha küçük model dosyasına rağmen PyTorch tabanlı inference yolu nedeniyle daha yüksek bellek ayak izine sahip oldu; interpolasyon ise düşük bellek ve yüksek yorumlanabilirlik avantajıyla referans aile olarak kaldı.<br><br>

<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>
  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>
    <tr><th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Yöntem</th><th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>p95 Gecikme</th><th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Peak RSS</th><th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Model Boyutu</th><th style='padding:8px; border:1px solid rgba(0,240,255,0.2);'>Rol</th></tr>
  </thead>
  <tbody style='font-size:0.9rem; color:var(--text-main);'>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>Interpolasyon</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>6.89 ms</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>166.5 MiB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.64 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Deterministik referans</td></tr>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>XGBoost</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.35 ms</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>318.1 MiB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>1.92 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Pratik tahmin modeli</td></tr>
    <tr><td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>FT-Transformer</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>2.74 ms</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>482.2 MiB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>0.42 MB</td><td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Araştırma mimarisi</td></tr>
  </tbody>
</table>

<strong>4.2. Sonuç Yorumu</strong><br>
XGBoost, kullanıcıya hızlı cevap üretmesi gereken canlı demo ve edge deployment senaryosunda güvenli varsayılan model olarak öne çıktı. FT-Transformer’ın değeri, mevcut ölçümde en iyi skoru vermesinden çok feature tokenizer, transformer encoder ve self-attention yapısıyla tabular uçuş verisi için ileri mimari denemesi sunmasıdır. İnterpolasyon ise doğruluk yarışında sıfır hatalı model gibi gösterilmedi; referans/tahmini gerçek değer üretimi için ayrı bir rol aldı.<br><br>

<strong>4.3. Sistem Önerisi</strong><br>
Final arayüzde üçlü yapı korunmalıdır: interpolasyon referans değer üretimi için, XGBoost hızlı ve güvenilir ML tahmini için, FT-Transformer ise akademik mimari ve ileri modelleme adayı olarak kullanılmalıdır. Bu rol ayrımı hem mühendislik kararını daha dürüst gösterir hem de projenin araştırma derinliğini güçlendirir. Sonraki teknik iyileştirme hattı; FT-Transformer için daha uzun eğitim, PSO hiperparametre araması, kuantizasyon ve ONNX/TensorRT dönüşümü; XGBoost için model sıkıştırma, ağaç derinliği/estimator dengesi ve CPU thread ayarıdır.
`;

  liftUpContent.tr.subsystems = [
    { title: "Nomogram Kaynak Katmanı", desc: "F-18 AFM/handbook grafiklerinden Specific Range davranışını temsil eden eğriler seçildi; grafiklerin uçuş testi, standardizasyon ve emniyet marjı geçmişi proje anlatısında kaynak veri mantığı olarak kullanıldı." },
    { title: "Dijitasyon ve Kalibrasyon Hattı", desc: "MATLAB DigitizeGraph, Python/OpenCV ve segmentasyon destekli okuma denemeleriyle eğri pikselleri çıkarıldı; eksen kalibrasyonu ile piksel koordinatları Mach, irtifa, ağırlık ve drag index değerlerine dönüştürüldü." },
    { title: "Master Veri Seti", desc: "54.620 satırlık tablo; altitude, gross_weight, drag_index, mach, fuel_flow, engine_type ve specific_range kolonlarıyla standardize edildi. One Engine ve Two Engine senaryoları ayrı kategorik durumlar olarak korundu." },
    { title: "Referans Nümerik Model", desc: "Baseline Model klasöründeki 4 boyutlu kübik spline yaklaşımı, klasik lookup/interpolasyon mantığını temsil eden deterministik referans olarak kuruldu. Bu katman ML modelleri için tahmini gerçek ve mühendislik kıyas zemini sağladı." },
    { title: "XGBoost Modeli", desc: "Gradyan artırmalı karar ağaçlarıyla tabular veride düşük hata ve düşük gecikme hedeflendi. Split gain, gradient/Hessian toplamları ve düzenlileştirme mantığı sayesinde pratik demo ve edge kullanım için en dengeli model rolünü aldı." },
    { title: "FT-Transformer Modeli", desc: "Sayısal ve kategorik değişkenler token uzayına taşındı; Multi-Head Self-Attention, FFN, residual bağlantılar ve LayerNorm ile değişkenler arası etkileşimler öğrenildi. Projede akademik mimari ve ileri araştırma adayı olarak korundu." },
    { title: "Edge Benchmark Ortamı", desc: "Hedef ortam NVIDIA Jetson Orin Nano olarak güncellendi. Karşılaştırmada yalnızca doğruluk değil; p95 latency, Peak RSS, CPU maliyeti, model boyutu ve deploy edilebilirlik birlikte değerlendirildi." },
    { title: "Doğrulama ve Karar Matrisi", desc: "Lift-UP 2. Aşama Sonuç raporundaki doğruluk grafikleri, runtime maliyet grafikleri, karar matrisi ve radar profil ile üç yaklaşım rol bazlı karşılaştırıldı: interpolasyon referans, XGBoost pratik model, FT-Transformer araştırma mimarisi." }
  ];

  const liftUpPaperFigures = `
<div class="project-figure-grid paper-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-01-stage2_plan-p2-i2-381x36.png" alt="Çok amaçlı uygunluk fonksiyonu"><figcaption>Şekil 1. Model seçiminde yalnızca hata değil; hız ve bellek maliyeti de birlikte ele alınarak çok amaçlı uygunluk fonksiyonu tanımlanmıştır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-02-stage2_result-p1-i2-687x97.png" alt="Yöntemlerin rol tablosu"><figcaption>Şekil 2. İnterpolasyon, XGBoost ve FT-Transformer yöntemlerinin projedeki rol ayrımı: referans aile, pratik ML modeli ve akademik mimari adayı.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-03-stage2_result-p1-i3-834x88.png" alt="Ölçüm metrikleri tablosu"><figcaption>Şekil 3. Uçtan uca benchmark tablosu; gecikme, bellek, CPU, model boyutu ve doğruluk metriklerinin birlikte okunmasını sağlar.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-04-stage2_result-p2-i2-542x206.png" alt="Doğruluk karşılaştırması"><figcaption>Şekil 4. XGBoost ve FT-Transformer modellerinin RMSE, MAE, MAPE ve R² metrikleriyle doğruluk karşılaştırması.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-05-stage2_result-p2-i3-562x326.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 5. Normalize runtime maliyeti; latency, memory ve CPU bileşenlerinin gömülü sistem açısından birlikte değerlendirilmesi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-06-stage2_result-p3-i2-538x464.png" alt="Genel profil radar grafiği"><figcaption>Şekil 6. Radar profil grafiği; XGBoost’un dengeli pratik model, FT-Transformer’ın araştırma adayı, interpolasyonun ise referans aile olduğunu gösterir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-07-stage2_result-p3-i3-687x367.png" alt="Genel karar matrisi"><figcaption>Şekil 7. Karar matrisi; doğruluk, hız, RAM, model boyutu, yorumlanabilirlik, kurulum kolaylığı ve edge uygunluğu için mühendislik skorlamasını özetler.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-08-stage2_result-p4-i2-782x167.png" alt="Alan bazlı kazananlar"><figcaption>Şekil 8. Alan bazlı kazananlar tablosu; her yöntemin güçlü olduğu kullanım bağlamını ayrıştırır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-09-xgb-p1-i6-251x78.png" alt="XGBoost optimizasyon hedefi"><figcaption>Şekil 9. XGBoost modelinde amaç fonksiyonu; tahmin hatasının örnekler üzerinden minimize edilmesi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-10-xgb-p2-i1-400x310.png" alt="XGBoost toplamsal ağaç yapısı"><figcaption>Şekil 10. XGBoost’un additive model yapısı; ardışık karar ağaçları residual hatayı azaltarak nihai çıktıyı üretir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-11-xgb-p2-i4-244x71.png" alt="XGBoost düzenlileştirilmiş amaç fonksiyonu"><figcaption>Şekil 11. Eğitim kaybı ve ağaç karmaşıklığı aynı amaç fonksiyonunda birleştirilerek aşırı öğrenme riski kontrol edilir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-12-xgb-p3-i2-362x66.png" alt="Split gain denklemi"><figcaption>Şekil 12. Split gain hesabı; gradyan ve Hessian toplamlarıyla hangi bölünmenin en fazla hata azalımı sağlayacağını belirler.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-13-xgb-p3-i3-314x80.png" alt="İkinci dereceden XGBoost yaklaşımı"><figcaption>Şekil 13. XGBoost optimizasyonunda Taylor açılımı benzeri ikinci dereceden yaklaşım, hızlı ve kararlı ağaç büyütmeye olanak verir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-14-xgb-p3-i5-1046x688.png" alt="XGBoost split gain grafiği"><figcaption>Şekil 14. Aday splitlerin gain, gradient ve Hessian bileşenleriyle karşılaştırılması; en faydalı bölünmenin nasıl seçildiğini görselleştirir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-15-xgb-p5-i3-340x64.png" alt="PSO hız ve konum güncellemesi"><figcaption>Şekil 15. Parçacık Sürü Optimizasyonu güncelleme denklemi; hiperparametre aramasında parçacıkların en iyi çözüme yönelmesini sağlar.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-16-xgb-p6-i2-287x58.png" alt="Çok amaçlı XGBoost maliyet fonksiyonu"><figcaption>Şekil 16. XGBoost için RMSE, çıkarım süresi ve model boyutunun aynı maliyet fonksiyonunda dengelenmesi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-17-xgb-p7-i2-287x58.png" alt="XGBoost optimizasyon maliyeti"><figcaption>Şekil 17. Sistem kısıtlarını içeren alternatif maliyet formu; edge hedef için doğruluk ve kaynak tüketimini birlikte optimize eder.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-18-ft-p1-i2-458x88.png" alt="FT-Transformer attention denklemi"><figcaption>Şekil 18. Self-attention mekanizması; değişken tokenlarının birbirinden ne ölçüde bilgi alacağını hesaplar.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-19-ft-p4-i2-510x140.png" alt="FT-Transformer genel akışı"><figcaption>Şekil 19. Feature tokenizer, transformer encoder ve prediction head akışı; tabular verinin derin modele taşınmasını gösterir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-20-ft-p5-i2-373x49.png" alt="Feature token genel tanımı"><figcaption>Şekil 20. Her özelliğin ortak boyutlu token temsiline dönüştürülmesi; FT-Transformer’ın giriş katmanının temelidir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-21-ft-p5-i7-477x51.png" alt="Sayısal token üretimi"><figcaption>Şekil 21. Sayısal değişkenlerin öğrenilebilir ağırlık ve bias ile token uzayına projeksiyonu.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-22-ft-p5-i8-433x53.png" alt="Kategorik token üretimi"><figcaption>Şekil 22. Kategorik değişkenlerin embedding tabanlı tokenlara dönüştürülmesi; motor tipi gibi ayrık değişkenlerin modele taşınmasını sağlar.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-23-ft-p5-i11-336x46.png" alt="Token dizisi yığınlama"><figcaption>Şekil 23. Tüm özellik tokenlarının tek bir token dizisi halinde yığınlanması; attention katmanı bu dizi üzerinde çalışır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-24-ft-p6-i2-332x65.png" alt="Attention denklemi"><figcaption>Şekil 24. Query, key ve value temsilleri üzerinden self-attention çıktısının hesaplanması.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-25-ft-p6-i8-414x49.png" alt="Q K V projeksiyonları"><figcaption>Şekil 25. Token temsillerinin Q, K ve V projeksiyonlarına ayrılması; çok başlıklı dikkat mekanizmasının hazırlık adımıdır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-26-ft-p6-i9-313x47.png" alt="FFN denklemi"><figcaption>Şekil 26. Feed Forward Network katmanı; attention sonrası her token üzerinde doğrusal olmayan dönüşüm uygular.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-27-ft-p6-i10-367x51.png" alt="FFN ağırlık boyutları"><figcaption>Şekil 27. FFN katmanındaki ağırlık matrislerinin boyutları; model kapasitesi ile hesaplama maliyeti arasındaki ilişkiyi gösterir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-28-ft-p6-i12-368x91.png" alt="Residual ve dropout akışı"><figcaption>Şekil 28. Residual bağlantılar, dropout ve LayerNorm akışı; derin transformer katmanlarında bilgi kaybını ve kararsız eğitimi azaltır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-29-ft-p8-i2-512x280.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 29. Encoder bloğu; MHSA, FFN, residual bağlantılar ve LayerNorm bileşenlerinin blok düzeyindeki organizasyonu.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-30-ft-p8-i3-359x391.png" alt="FT-Transformer mimari şeması"><figcaption>Şekil 30. FT-Transformer mimari şeması; kategorik embedding, sayısal projeksiyon, transformer katmanları ve çıktı başlığını birlikte gösterir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-31-ft-p9-i2-606x91.png" alt="FT-Transformer çok amaçlı maliyet fonksiyonu"><figcaption>Şekil 31. FT-Transformer için hata, çıkarım süresi, model boyutu ve ağırlık katsayılarını birleştiren optimizasyon hedefi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-32-ft-p11-i2-840x464.png" alt="FT-Transformer tokenizasyon görseli"><figcaption>Şekil 32. Kategorik ve sayısal girdilerin transformer tabanlı sınıflandırma/regresyon akışında nasıl temsil edildiğini gösteren genel tokenizasyon görseli.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-33-spline-p2-i2-543x53.png" alt="Kübik spline katsayı denklemi"><figcaption>Şekil 33. Kübik spline interpolasyonda parça fonksiyonları için katsayıların komşu düğüm noktalarından hesaplanması.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-34-spline-p3-i2-480x122.png" alt="Spline tridiagonal sistem"><figcaption>Şekil 34. Spline katsayılarının çözümü için kurulan tridiagonal lineer sistemin kompakt gösterimi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-35-spline-p4-i2-480x141.png" alt="Spline matris sistemi"><figcaption>Şekil 35. Çok düğümlü spline probleminde matris sisteminin genişletilmiş formu.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-36-spline-p4-i3-480x136.png" alt="Spline sınır koşulları"><figcaption>Şekil 36. Spline çözümünde sınır koşulları ve katsayı sürekliliğinin matris formunda gösterimi.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-37-spline-p7-i2-647x70.png" alt="Spline interpolasyon parça fonksiyonu"><figcaption>Şekil 37. Kübik spline parça fonksiyonu; referans nümerik modelin ara değer üretme mantığını matematiksel olarak özetler.</figcaption></figure>
</div>
`;

  liftUpContent.tr.architecture = `
<strong>2. Sistem Mimarisi ve Çalışma Prensibi</strong><br><br>
Bu bölüm, projede ham handbook bilgisinden model çıktısına kadar kurulan hattı bildiri formatında özetler. Çalışmanın temel problemi, muharip hava araçlarında Specific Range gibi kritik performans büyüklüklerinin klasik arama tabloları ve interpolasyonla hesaplanmasıdır. Bu yaklaşım açıklanabilir olsa da ara değer belirsizliği, yüksek boyutlu tablo yönetimi ve gömülü sistem kaynak maliyeti açısından sınırlıdır. Bu nedenle sistem; veri eldesi, dijitasyon, master veri seti, referans nümerik model ve öğrenen modeller olmak üzere beş teknik katmana ayrılmıştır.<br><br>

<strong>2.1. Ham Veri ve Nomogram Mantığı</strong><br>
Ham Veri Eldesi PDF’inde açıklandığı üzere AFM/POH/EFM dokümanlarında görülen performans nomogramları, uçağın tasarım aşamasından sertifikasyona kadar ilerleyen uzun bir veri toplama ve işleme zincirinin ürünüdür. İlk aşamada CFD analizleri ve rüzgar tüneli testleri ile sürükleme karakteristikleri, kaldırma-sürükleme dengesi ve drag polar davranışı tahmin edilir. İkinci aşamada uçuş testleriyle farklı ağırlık, irtifa, sıcaklık, basınç irtifası, güç ayarı ve hız rejimleri için gerçek ölçümler alınır. Üçüncü aşamada ise bu ölçümler rüzgar, nem, pilotaj farkı ve atmosferik sapmalardan arındırılarak standart koşullara indirgenir; mühendislik emniyet marjlarıyla birlikte handbook grafiğine dönüştürülür.<br><br>
Bu nedenle projede nomogram yalnızca “okunacak grafik” olarak ele alınmamıştır; arkasında fiziksel bir performans yüzeyi taşıyan sıkıştırılmış mühendislik temsili olarak değerlendirilmiştir. Grafikten okunan Specific Range değeri, sıcaklık/irtifa, ağırlık, drag index ve Mach etkileriyle ilişkilidir. Ham Veri Eldesi notunda bu geri okuma mantığı <code>SR_Ham = SR_Grafik / (f_alt × f_mach × f_weight × f_drag)</code> biçiminde özetlenmiştir. Böylece grafiğin temsil ettiği düzeltilmiş bilgi, makine öğrenmesi modellerinin kullanabileceği sayısal ve fiziksel değişkenlere ayrıştırılmıştır.<br><br>

<strong>2.2. Dijitasyon Hattı</strong><br>
Lift-UP 1. Aşama PDF’inde dijitasyon için iki alternatif değerlendirilmiştir: MATLAB ortamındaki özelleştirilmiş <code>DigitizeGraph.m</code> yaklaşımı ve Python/OpenCV/NumPy tabanlı özel algoritma. Değerlendirme kriterleri hassasiyet, gürültü giderme başarısı, kullanım kolaylığı ve sonraki veri işleme adımlarıyla entegrasyon olarak belirlenmiştir. İlk plan, grafiklerden ham <code>x, y</code> noktalarını çıkarıp her eğriyi ayrı dosyalar halinde saklamak, ardından bu dosyaları tek master veri setine taşımaktı.<br><br>
Lift-UP 1. Aşama Sonuç PDF’i ise klasik piksel yoğunluğu ve eşikleme yöntemlerinin havacılık nomogramları için tek başına yeterli olmadığını ortaya koymuştur. Yoğun grid çizgileri, eksen yazıları, eğri etiketleri ve birbirine yakın performans eğrileri aynı görüntü düzleminde bulunduğu için süreç Python tarafına taşınmış ve U-Net tabanlı segmentasyon hattı öne çıkarılmıştır. Bu hat önce hedef eğri piksellerini arka plan/grid/metin gürültüsünden ayırır; ardından eksen kalibrasyonu ile piksel uzayını fiziksel birimlere dönüştürür. Böylece görsel nomogram, uçuş değişkenleriyle etiketlenmiş satırlara dönüştürülür.<br><br>

<strong>2.3. Master Veri Seti</strong><br>
1. Aşama dokümanlarında master veri seti, tüm grafiklerden çıkarılan ham eğri dosyalarının birleştirildiği, eksik noktaların matematiksel olarak zenginleştirildiği ve <em>tidy data</em> formatında düzenlendiği ana çıktı olarak tanımlanmıştır. Bu formatta her değişken bir sütun, her gözlem bir satırdır. Projede nihai tablo <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code>, <code>engine_type</code> ve <code>specific_range</code> kolonlarıyla standardize edilmiştir. One Engine ve Two Engine senaryoları ayrı kategorik durumlar olarak korunmuş; çünkü motor konfigürasyonu hem fuel flow hem de Specific Range davranışını doğrudan etkiler.<br><br>
1. Aşama Sonuç PDF’inde veri kalitesi için iki temel kriter öne çıkar: yapısal bütünlük ve dijitalleştirme hassasiyeti. Yapısal bütünlük kapsamında veri setinde boş/NaN değer bırakılmaması, eksik noktaların <code>scipy.interpolate</code> gibi araçlarla tamamlanması ve veri setinin makine öğrenmesine uygun satır-sütun düzeninde tutulması hedeflenmiştir. Dijitalleştirme hassasiyetinde ise AFM grafiğinden seçilen rastgele kontrol noktalarının dijital veri setindeki karşılıklarının orijinal grafikten belirgin şekilde sapmaması beklenmiştir. Bu sayede veri seti yalnızca büyük değil, izlenebilir ve doğrulanabilir hale getirilmiştir.<br><br>

<strong>2.4. Referans Nümerik Model</strong><br>
Referans nümerik model, klasik lookup table yaklaşımının proje içindeki deterministik temsilidir. Baseline Model dokümanlarında kübik spline interpolasyonun seçilme nedeni, lineer interpolasyona göre daha yumuşak geçişler üretmesi ve uçuş performans yüzeyindeki eğriselliği daha iyi temsil etmesidir. Model mantığı <code>Altitude × Gross Weight × Drag Index × Mach -> Specific Range</code> dönüşümü üzerine kuruludur. Çok boyutlu hesap, tek seferde kapalı form bir denklem kurmak yerine ardışık interpolasyonlarla yürütülür.<br><br>
Bu katman öğrenen modellere rakip gibi değil, mühendislik referansı gibi kullanılmıştır. İnterpolasyon; yorumlanabilir, tablo mantığına sadık ve ara değer üretimi için aviyonik uygulamalara yakın bir davranış sunar. Bu nedenle test ekranında “tahmini gerçek” veya referans aile rolünü üstlenir; XGBoost ve FT-Transformer modelleri ise bu referans davranışa göre pratik doğruluk ve kaynak maliyeti açısından kıyaslanır.<br><br>

<strong>2.5. Öğrenen Modeller</strong><br>
XGBoost PDF’i, uçuş performansı tahmininin neden ağaç tabanlı güçlü bir tabular model için uygun olduğunu açıklar. Specific Range; Mach, gross weight, drag index, fuel flow, engine type ve altitude gibi değişkenlerin doğrusal olmayan etkileşimleriyle belirlenir. XGBoost bu uzayı ardışık karar ağaçlarıyla parçalar; her yeni ağaç önceki modelin residual hatasını azaltır. Split seçiminde gradyan ve Hessian toplamlarıyla gain hesabı yapılır, düzenlileştirme terimleriyle gereksiz karmaşıklık engellenir. Bu nedenle XGBoost projede hızlı demo ve edge deployment için en dengeli pratik model rolünü almıştır.<br><br>
Tabular Transform PDF’i ise FT-Transformer’ın neden akademik mimari adayı olarak ele alındığını açıklar. Bu modelde sayısal ve kategorik kolonlar feature tokenizer ile ortak token uzayına taşınır. Ardından Multi-Head Self-Attention katmanları, örneğe bağlı değişken etkileşimlerini öğrenir: irtifa-Mach, irtifa-fuel flow, gross weight-drag index ve engine_type-irtifa ilişkileri sabit kurallarla değil, veriden öğrenilen attention ağırlıklarıyla temsil edilir. Mevcut veri ölçeğinde XGBoost pratik olarak öne çıksa da FT-Transformer, projenin ileri modelleme ve akademik karşılaştırma boyutunu güçlendirmiştir.<br><br>
${liftUpPaperFigures}
`;

  liftUpContent.tr.analysis = `
<strong>4. Test, Simülasyon ve Doğrulama Sonuçları</strong><br><br>
Projenin doğrulama aşamasında interpolasyon, XGBoost ve FT-Transformer yöntemleri aynı deneysel çerçevede uçtan uca karşılaştırıldı. Değerlendirme yalnızca doğruluk metrikleriyle sınırlı tutulmadı; hız, RAM, CPU, model boyutu, yorumlanabilirlik, kurulum zorluğu, demo uygunluğu, akademik değer ve edge deployment beklentileri birlikte ele alındı. Genel sonuç üçlü rol dağılımı şeklinde yorumlandı: interpolasyon veri tablosuna sadık deterministik referans ailesi, XGBoost pratik uygulama ve demo için en dengeli ML modeli, FT-Transformer ise projenin ana akademik mimari odağıdır.<br><br>

<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-02-stage2_result-p1-i2-687x97.png" alt="Yöntemlerin rol karşılaştırması"><figcaption>Şekil 4.1. Yöntem rol tablosu: interpolasyon referans üretimi, XGBoost güçlü tabular ML tahmini, FT-Transformer ise ileri mimari araştırma adayıdır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-03-stage2_result-p1-i3-834x88.png" alt="Uçtan uca benchmark ölçüm tablosu"><figcaption>Şekil 4.2. Ana benchmark tablosu; p95 gecikme, Peak RSS, CPU ortalaması, model boyutu ve hata metrikleri aynı değerlendirme çerçevesinde okunmuştur.</figcaption></figure>
</div>

Raporun problem tanımı, Specific Range tahminini <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code> ve <code>engine_type</code> girdilerinden üretilen doğrusal olmayan bir regresyon problemi olarak ele alır. Bu problemde davranış irtifa, motor konfigürasyonu ve Mach rejimlerine göre değiştiği için yalnızca tek bir hata metriğiyle karar vermek yeterli değildir. Bu nedenle üç yöntemin rolü ayrıştırılmıştır: interpolasyon tahmini gerçek/referans üretimi için, XGBoost pratik ve hızlı tahmin için, FT-Transformer ise değişkenler arası etkileşimleri attention tabanlı öğrenen araştırma modeli olarak kullanılmıştır.<br><br>

<strong>4.1. Doğruluk Analizi</strong><br>
Doğruluk analizinde XGBoost, FT-Transformer’a göre daha düşük RMSE, MAE ve MAPE üretmiştir. Her iki modelde de R² değerinin oldukça yüksek olması, modellerin genel varyansı başarıyla yakaladığını gösterir. Ancak tekil tahmin döndüren bir arayüzde ortalama mutlak hata ve yüzde hata, kullanıcının model güvenilirliğini doğrudan algıladığı metriklerdir. Bu yüzden XGBoost’un MAE ve MAPE avantajı pratik kullanım açısından önemlidir. FT-Transformer’ın doğruluk seviyesi yine güçlüdür; fakat mevcut veri büyüklüğü ve eğitim koşullarında XGBoost’un tabular veri üzerindeki güçlü inductive bias’ı daha dengeli sonuç üretmiştir.<br><br>

<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-04-stage2_result-p2-i2-542x206.png" alt="XGBoost ve FT-Transformer doğruluk karşılaştırması"><figcaption>Şekil 4.3. Doğruluk karşılaştırması: XGBoost, RMSE, MAE ve MAPE metriklerinde daha düşük hata üretirken iki modelin R² değeri birbirine yakın ve yüksektir.</figcaption></figure>
</div>

<strong>4.2. Hız ve Kaynak Analizi</strong><br>
Hız tarafında XGBoost en düşük p95 gecikmeye sahip yöntemdir. FT-Transformer ikinci sırada gelir; interpolasyon ise cache optimizasyonundan sonra makul seviyeye inse de XGBoost’un gerisinde kalır. RAM tarafında interpolasyon en düşük Peak RSS değerini verir; çünkü çalışması için büyük bir runtime bağımlılığına ihtiyaç duymaz. FT-Transformer’ın model dosyası küçük olsa da PyTorch tabanlı inference yolu bellek ayak izini artırır. Bu gözlem raporun önemli çıkarımlarından biridir: edge deployment için yalnızca model dosya boyutu değil, modelin gerçek çalıştırma yolunun RAM ve CPU davranışı da değerlendirilmelidir.<br><br>

<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-05-stage2_result-p2-i3-562x326.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 4.4. Runtime maliyet bileşenleri: latency, memory ve CPU normalize edilerek üç yöntemin gömülü sistem davranışı birlikte karşılaştırılmıştır.</figcaption></figure>
</div>

<strong>4.3. Karar Matrisi</strong><br>
Karar matrisi yalnızca ham metrikleri değil, mühendislik kullanım değerini de dikkate alır. İnterpolasyon yorumlanabilirlikte çok güçlüdür; ancak referans ailesi olduğu için ML modelleriyle aynı doğruluk yarışına sokulması doğru değildir. XGBoost doğruluk, hız, kurulum kolaylığı ve pratik demo dengesiyle öne çıkar. FT-Transformer ise akademik değer ve modelleme potansiyeli açısından güçlüdür; özellikle daha büyük veri, daha uzun eğitim, PSO destekli hiperparametre araması, kuantizasyon ve ONNX/TensorRT dönüşümü gibi iyileştirmelerle ileri çalışmalara açık bir mimari sunar.<br><br>

<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-07-stage2_result-p3-i3-687x367.png" alt="Genel karar matrisi"><figcaption>Şekil 4.5. Genel karar matrisi: doğruluk, hız, RAM, model boyutu, yorumlanabilirlik, kurulum kolaylığı ve edge uygunluğu 1-5 mühendislik skoru ile değerlendirilmiştir.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-06-stage2_result-p3-i2-538x464.png" alt="Genel profil radar grafiği"><figcaption>Şekil 4.6. Genel profil radar grafiği: XGBoost dengeli profil verirken, FT-Transformer araştırma değeri ve küçük model boyutu; interpolasyon ise düşük RAM ve yorumlanabilirlik avantajı taşır.</figcaption></figure>
</div>

<strong>4.4. Alan Bazlı Kazananlar ve Yöntem Yorumu</strong><br>
Raporun alan bazlı değerlendirmesinde doğruluk ve hız kategorilerinde XGBoost öne çıkar. RAM kullanımında interpolasyon, model dosyası boyutunda FT-Transformer, yorumlanabilirlikte interpolasyon, pratik demoda XGBoost, araştırma değerinde ise FT-Transformer güçlü yöntem olarak belirlenmiştir. Bu sonuç, projede tek bir yöntemi mutlak kazanan ilan etmek yerine her yöntemi doğru bağlamda konumlandırmanın daha doğru olduğunu gösterir. İnterpolasyon kaynak verinin üretim mantığına en yakın yöntemdir ve custom input ekranında “tahmini gerçek” değer olarak kullanılabilir. XGBoost canlı demo, hızlı yanıt ve edge senaryosunda güvenli varsayılan modeldir. FT-Transformer ise mevcut ölçümde XGBoost’u geçmese bile tabular transformer yaklaşımının uçuş verisi için nasıl kurulabileceğini gösteren akademik çekirdektir.<br><br>

<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-08-stage2_result-p4-i2-782x167.png" alt="Alan bazlı kazananlar tablosu"><figcaption>Şekil 4.7. Alan bazlı kazananlar: her yöntemin güçlü olduğu alan ayrı ele alınarak sistem önerisinin rol bazlı kurulması sağlanmıştır.</figcaption></figure>
</div>

<strong>4.5. Nihai Değerlendirme ve Sonraki İyileştirmeler</strong><br>
Nihai değerlendirmede XGBoost, pratik sistem açısından en güçlü model olarak konumlanır; FT-Transformer akademik mimari odağı olarak korunur; interpolasyon ise referans üretim ailesi olarak sistemde kalır. Final arayüzünde interpolasyonun kaynak tabloya sadık referans değer üretmesi, XGBoost’un hızlı ve güvenilir ML tahmini sağlaması, FT-Transformer’ın ise ileri modelleme adayını temsil etmesi önerilmiştir. Sonraki iyileştirmeler için cold start ve model yükleme süresi ölçümleri, batch-size senaryoları, hata dağılım histogramları, irtifa ve <code>engine_type</code> kırılımlı metrikler, FT-Transformer için daha uzun eğitim ve PSO araması, daha küçük mimari varyantlar, quantization, ONNX export ve XGBoost için model sıkıştırma ile CPU-thread optimizasyonları önerilmiştir. Böylece proje yalnızca mevcut sonuçları raporlamakla kalmamış, gömülü aviyonik kullanım için sürdürülebilir bir geliştirme yol haritası da üretmiştir.
`;

  liftUpContent.tr.architecture = `
<strong>2. Sistem Mimarisi ve Çalışma Prensibi</strong><br><br>
Bu bölüm, ham handbook bilgisinden model çıktısına kadar kurulan hattı yöntem odaklı açıklar. Sistem beş katmandan oluşur: nomogram kaynak verisi, dijitasyon hattı, master veri seti, referans nümerik model ve öğrenen modeller. Her katman bir sonraki adımın güvenilir çalışabilmesi için ölçülebilir bir ara çıktı üretir.<br><br>

<strong class="method-subtitle">2.1. Ham Veri ve Nomogram Mantığı</strong><br>
AFM/POH/EFM dokümanlarında yer alan Specific Range nomogramları yalnızca görsel grafik değildir; uçak tasarımı, CFD/rüzgar tüneli çalışmaları, uçuş testleri, standart atmosfer düzeltmeleri ve emniyet marjlarıyla oluşturulmuş sıkıştırılmış performans bilgisidir. Bu nedenle grafikten okunan her eğri, farklı irtifa, ağırlık, Mach, drag index ve motor konfigürasyonu altında oluşan fiziksel performans yüzeyinin iki boyutlu izdüşümü olarak ele alınmıştır.<br><br>
Projede nomogram mantığı tersine işletildi: grafikteki eğri noktaları sayısal koordinatlara dönüştürüldü ve uçuş değişkenleriyle ilişkilendirildi. Ham veri geri okuma fikri aşağıdaki formülle temsil edildi:<br>
<div class="formula-block"><span>SR<sub>Ham</sub> = SR<sub>Grafik</sub> / (f<sub>alt</sub> × f<sub>mach</sub> × f<sub>weight</sub> × f<sub>drag</sub>)</span></div>
Bu denklem, standartlaştırılmış grafik değerinden fiziksel etkileri ayrıştırarak daha modellenebilir bir veri temsili elde etme mantığını açıklar.<br><br>

<strong class="method-subtitle">2.2. Dijitasyon Hattı</strong><br>
Dijitasyon hattında MATLAB <code>DigitizeGraph.m</code> ve Python/OpenCV tabanlı görüntü işleme yaklaşımları değerlendirildi. Klasik eşikleme yöntemleri hızlı başlangıç sağlasa da grid çizgileri, eksen yazıları, eğri etiketleri ve yakın geçen performans eğrileri nedeniyle her grafik için kararlı sonuç vermedi. Bu nedenle süreç Python tarafında ön işleme, eğri segmentasyonu, eksen kalibrasyonu, nokta çıkarımı ve fiziksel değişkenlerle etiketleme adımlarına ayrıldı.<br><br>
Bu hattın kritik noktası, piksel koordinatını doğrudan veri kabul etmemektir. Önce hedef eğri arka plan ve grid gürültüsünden ayrılır; sonra eksen ölçekleriyle Mach, altitude, gross weight ve drag index değerlerine dönüştürülür. Böylece görsel nomogram, modelin okuyabileceği yapısal gözlemlere çevrilir.<br><br>

<strong class="method-subtitle">2.3. Master Veri Seti</strong><br>
Dijitasyonla elde edilen eğri noktaları tek bir master veri setinde birleştirildi. Veri <em>tidy data</em> ilkesine göre düzenlendi: her değişken ayrı sütun, her uçuş koşulu ayrı satır olacak şekilde temsil edildi. Nihai şema <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code>, <code>engine_type</code> ve <code>specific_range</code> kolonlarından oluştu. One Engine ve Two Engine senaryoları ayrı motor durumları olarak korundu.<br><br>
Veri kalitesi tarafında amaç yalnızca satır sayısını büyütmek değildi. Boş değerlerin temizlenmesi, eksik noktaların matematiksel interpolasyonla tamamlanması, tutarsız eksen okumalarının kontrol edilmesi ve AFM noktalarıyla dijital veri karşılıklarının doğrulanması hedeflendi. Bu sayede veri seti model eğitimi için kullanılabilir, izlenebilir ve raporlanabilir hale getirildi.<br><br>

<strong class="method-subtitle">2.4. Referans Nümerik Model</strong><br>
Referans nümerik model, klasik lookup table yaklaşımının deterministik temsilidir. Bu katmanda amaç bir ML modeli üretmek değil, handbook tablosuna sadık ve açıklanabilir bir karşılaştırma zemini kurmaktır. Model, <code>Altitude × Gross Weight × Drag Index × Mach -> Specific Range</code> ilişkisini çok boyutlu kübik spline interpolasyonla temsil eder.<br><br>
Kübik spline yaklaşımı lineer interpolasyona göre daha yumuşak geçişler üretir ve performans yüzeyindeki eğriselliği daha iyi korur. Temel parça fonksiyon mantığı aşağıdaki gibi özetlenebilir:<br>
<div class="formula-block"><span>S<sub>i</sub>(x) = a<sub>i</sub> + b<sub>i</sub>(x - x<sub>i</sub>) + c<sub>i</sub>(x - x<sub>i</sub>)<sup>2</sup> + d<sub>i</sub>(x - x<sub>i</sub>)<sup>3</sup></span></div>
Bu referans model, XGBoost ve FT-Transformer sonuçlarının yorumlanmasında “tahmini gerçek” üretim ailesi olarak kullanıldı.<br><br>

<strong class="method-subtitle">2.5. Öğrenen Modeller</strong><br>
XGBoost, tabular uçuş performansı verisinde hızlı ve güçlü bir pratik model olarak seçildi. Model, ardışık karar ağaçlarıyla önceki tahmin hatasını azaltır; her yeni ağaç residual davranışı daha iyi açıklamaya çalışır. Split seçimi gradyan ve Hessian toplamlarına dayalı kazanç hesabıyla yapılır.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-10-xgb-p2-i1-400x310.png" alt="XGBoost toplamsal ağaç yapısı"><figcaption>XGBoost akışı: ardışık karar ağaçları residual hatayı azaltarak nihai Specific Range tahminini oluşturur.</figcaption></figure>
</div>
XGBoost optimizasyonunda kullanılan kayıp ve düzenlileştirme fikri görsel yerine okunabilir formül olarak gösterildi:<br>
<div class="formula-block"><span>L(φ) = Σ l(y<sub>i</sub>, ŷ<sub>i</sub>) + Σ Ω(f<sub>k</sub>)</span></div>
Split kazancı, sol ve sağ alt grupların gradyan/Hessian toplamlarının karşılaştırılmasıyla hesaplanır; daha yüksek gain veren bölünme veri uzayını daha anlamlı iki bölgeye ayırır.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-14-xgb-p3-i5-1046x688.png" alt="XGBoost split gain analizi"><figcaption>Split gain analizi: aday bölünmeler, gain değeri ve gradient/Hessian toplamlarıyla karşılaştırılır.</figcaption></figure>
</div>
FT-Transformer ise akademik mimari adayı olarak ele alındı. Sayısal ve kategorik değişkenler feature tokenizer ile ortak token uzayına taşınır. Ardından Multi-Head Self-Attention katmanları, irtifa-Mach, gross weight-drag index ve engine_type-irtifa gibi örneğe bağlı değişken etkileşimlerini öğrenir.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-19-ft-p4-i2-510x140.png" alt="FT-Transformer genel akışı"><figcaption>FT-Transformer akışı: feature tokenizer, transformer encoder ve prediction head birlikte çalışır.</figcaption></figure>
  <figure class="project-figure-card"><img src="lift-up-paper-fig-29-ft-p8-i2-512x280.png" alt="Transformer encoder blok yapısı"><figcaption>Encoder bloğu: MHSA, FFN, residual bağlantılar ve LayerNorm bileşenlerinden oluşur.</figcaption></figure>
</div>
Self-attention mekanizmasının ana ifadesi de fotoğraf yerine metin formülü olarak verildi:<br>
<div class="formula-block"><span>Attention(Q, K, V) = softmax((QK<sup>T</sup>) / √d<sub>k</sub>) V</span></div>
Bu yapı sayesinde model, kolonlar arasındaki ilişkiyi sabit kurallarla değil, her örneğin bağlamına göre öğrenir. Mevcut veri ölçeğinde XGBoost pratik olarak öne çıksa da FT-Transformer, tabular uçuş performansı verisinin ileri derin öğrenme mimarileriyle nasıl temsil edilebileceğini göstermesi açısından projede korundu.
`;

  Object.entries(liftUpContent).forEach(([lang, content]) => {
    const project = PORTFOLIO_DATA[lang]?.projects?.find(item => item.id === "project-6");
    if (project) {
      Object.assign(project, content);
    }
  });
})();
