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
            "summary": "Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ) LIFT UP Programı ve TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri Destek Programı (Proje No: 1999B212502693 / LIFTUP-2025-2026) kapsamında Milli Muharip Uçak (KAAN) aviyonik seyrüsefer sistemleri için yürütülen bu çalışmada; U-Net CNN ve Optik Karakter Tanıma (OCR) ile dijitalleştirilen Uçuş El Kitabı (AFM) nomogram verileri üzerinde Kübik İnterpolasyon, XGBoost ve Tabular Transformer (FT-Transformer) modellerinin Raspberry Pi 3 gömülü hedef ortamındaki çıkarım hızı, bellek ayak izi ve tahmin doğruluğu benchmark analizleri gerçekleştirilmiştir.",
            "description": "TUSAŞ (Türk Havacılık ve Uzay Sanayii A.Ş.) LIFT UP Sanayi Odaklı Lisans Bitirme Projeleri Programı kapsamında yürütülen bu çalışmada, muharip hava araçlarında kritik uçuş performans parametrelerinin (Özgül Menzil, İrtifa, Mach Sayısı, Yakıt Akışı, Sürükleme İndeksi vb.) hesaplanmasında kullanılan geleneksel kübik interpolasyon arama tablosu yöntemi ile yapay zeka modelleri (XGBoost ve Tabular Transformer) doğrusal olmayan davranışlar, çıkarım hızı, bellek ayak izi ve işlemci yükü açısından karşılaştırılmıştır.",
            "image": "kaan.jpg",
            "tags": [
                  "TUSAŞ LIFT UP",
                  "MMU KAAN",
                  "Tabular Transformer",
                  "XGBoost",
                  "Raspberry Pi 3 Edge Benchmark",
                  "U-Net / OCR"
            ],
            "specs": [
                  {"name": "Kurum / Sanayi Ortağı", "value": "Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ)"},
                  {"name": "Destek Programları", "value": "TUSAŞ LIFT UP & TÜBİTAK 2209-B Programı"},
                  {"name": "TÜBİTAK Proje No", "value": "1999B212502693"},
                  {"name": "TUSAŞ Proje Kodu", "value": "LIFTUP-2025-2026-AV-06"},
                  {"name": "Sanayi Danışmanı", "value": "Zeynel Abidin AYDOĞAN (TUSAŞ - Havacılık Müh.)"},
                  {"name": "Akademik Danışman", "value": "Doç. Dr. Aziz KABA (ESTÜ Pilotaj)"},
                  {"name": "Proje Ekibi", "value": "Ahmet Soner GÜLEÇ (Lider), Umut ÇÖRDÜK, Ufuk ÖZKAN, Sema ÜNAL"},
                  {"name": "En İyi Modeller", "value": "XGBoost (Fit Score: 81.5) & FT-Transformer"},
                  {"name": "Çıkarım Gecikmesi (p95)", "value": "2.30 ms (XGBoost) / 3.05 ms (FT-Transformer)"},
                  {"name": "Hedef Donanım", "value": "Raspberry Pi 3 (ARM Cortex-A53, 1GB RAM Edge)"}
            ],
            "overview": "\n<strong>A. GENEL BİLGİLER VE ARAŞTIRMA ÖNERİSİ ÖZETİ</strong><br>\n• <strong>Başvuru Sahibi:</strong> Ahmet Soner GÜLEÇ (Lisans Tez Öğrencisi - Eskişehir Teknik Üniversitesi, Havacılık Elektrik Elektroniği)<br>\n• <strong>Akademik Danışman:</strong> Doç. Dr. Aziz KABA (Eskişehir Teknik Üniversitesi - Pilotaj Bölümü)<br>\n• <strong>Sanayi Danışmanı:</strong> Zeynel Abidin AYDOĞAN (TUSAŞ - Türk Havacılık ve Uzay Sanayii A.Ş., Havacılık Mühendisliği)<br>\n• <strong>Araştırmanın Yürütüleceği Kurum:</strong> Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ) / ESTÜ Havacılık Araştırma Laboratuvarı<br>\n• <strong>Destek Programı:</strong> TÜBİTAK 2209-B Üniversite Öğrencileri Sanayiye Yönelik Araştırma Projeleri Destek Programı (2025/2. Dönem)<br><br>\n\n<strong>Özet:</strong><br>\nProje, Muharip hava araçlarının (örn: MMU KAAN, F-18) aviyonik sistemlerinde uçuş performans verilerinin depolanması ve hesaplanması amacıyla kullanılan Arama Tablosu (Lookup Table - LUT) yönteminin yarattığı doğruluk kaybı ile aşırı donanım kaynağı tüketimi arasındaki teknik ikilemi; donanım verimliliği yüksek XGBoost ve Tabular Transformer modelleri ile aşmayı hedeflemektedir. Çalışmanın özgün değeri, bu modelleri standart eğitim süreçlerinin ötesine taşıyarak, Sürü Zekası (PSO) tabanlı meta-sezgisel algoritmalar aracılığıyla tahmin doğruluğu ve kaynak verimliliği hedefleri doğrultusunda eş zamanlı optimize eden yenilikçi bir metodoloji sunmasında yatmaktadır.<br><br>\nKAAN için bir vekil platform olarak seçilen F-18 uçağına ait nomogramlar, geliştirilen özelleştirilmiş MATLAB (`DigitizeGraph.m`) ve Python tabanlı çok değişkenli enterpolasyon yöntemleriyle işlenerek kapsamlı bir eğitim veri setine dönüştürülecektir. Elde edilen bu veri seti ile referans Nümerik modelin yanı sıra, PSO ile optimize edilmiş XGBoost ve Transformer modelleri geliştirilecektir. Son aşamada bu modeller; Raspberry Pi 3 ve NVIDIA Jetson gibi endüstriyel gömülü sistemler ile Docker simülasyonları üzerinde doğruluk, hız, bellek kullanımı ve model boyutu metriklerine göre kapsamlı kıyaslama testlerine tabi tutulacaktır.\n",
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
                        "title": "Raspberry Pi 3 Edge Benchmark Suite",
                        "desc": "ARM Cortex-A53 işlemci üzerinde p50/p95 çıkarım süresi, Peak RSS bellek kullanımı ve CPU yükü ölçümleyen donanım farkındalıklı test yazılımı."
                  }
            ],
            "analysis": "Raspberry Pi 3 Hedef Ortam Benchmark Analizi:\n\n• XGBoost: RMSE = 0.003468, MAE = 0.001372, MAPE = %1.560 | p95 Gecikme = 2.30 ms | Peak RAM = 185.2 MiB | Bütünleşik Fit Score = 81.5 (EN YÜKSEK SKOR)\n• FT-Transformer: RMSE = 0.003671, MAE = 0.002044, MAPE = %2.888 | p95 Gecikme = 3.05 ms | Model Boyutu = 0.42 MB | Peak RAM = 482.1 MiB | Fit Score = 77.6\n• Kübik İnterpolasyon: p95 Gecikme = 6.78 ms | Peak RAM = 166.5 MiB (En Düşük RAM) | CPU Avg = %355 | Fit Score = 74.0",
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
            "summary": "Conducted under the Turkish Aerospace Industries (TUSAŞ) LIFT UP Program and TÜBİTAK 2209-B Industry-Oriented Research Projects Support Program (Project No: 1999B212502693 / LIFTUP-2025-2026) for the National Combat Aircraft (KAAN) avionics navigation systems; this project performs hardware latency, memory footprint, and non-linear accuracy benchmark analyses of Cubic Interpolation, XGBoost, and Tabular Transformer (FT-Transformer) models on Raspberry Pi 3 edge deployment targets using Aircraft Flight Manual (AFM) nomogram data digitized via U-Net CNN and OCR.",
            "description": "In this study conducted within the TUSAŞ (Turkish Aerospace Industries) LIFT UP Industry-Oriented Graduation Project Program, traditional cubic interpolation lookup table methods used for computing critical flight performance parameters (Specific Range, Altitude, Mach Number, Fuel Flow, Drag Index) in combat aircraft were benchmarked against machine learning models (XGBoost and Tabular Transformer) in terms of non-linear accuracy, inference latency, memory footprint, and CPU utilization.",
            "image": "kaan.jpg",
            "tags": [
                  "TUSAŞ LIFT UP",
                  "MMU KAAN",
                  "Tabular Transformer",
                  "XGBoost",
                  "Raspberry Pi 3 Edge Benchmark",
                  "U-Net / OCR"
            ],
            "specs": [
                  {"name": "Host Institution / Partner", "value": "Turkish Aerospace Industries (TUSAŞ)"},
                  {"name": "Grant Programs", "value": "TUSAŞ LIFT UP & TÜBİTAK 2209-B Program"},
                  {"name": "TÜBİTAK Project No", "value": "1999B212502693"},
                  {"name": "TUSAŞ Project Code", "value": "LIFTUP-2025-2026-AV-06"},
                  {"name": "Industry Advisor", "value": "Zeynel Abidin AYDOĞAN (TUSAŞ - Aerospace Eng.)"},
                  {"name": "Academic Advisor", "value": "Assoc. Prof. Dr. Aziz KABA (ESTÜ Pilotage)"},
                  {"name": "Project Team", "value": "Ahmet Soner GÜLEÇ (Lead), Umut ÇÖRDÜK, Ufuk ÖZKAN, Sema ÜNAL"},
                  {"name": "Best Models", "value": "XGBoost (Fit Score: 81.5) & FT-Transformer"},
                  {"name": "Inference Latency (p95)", "value": "2.30 ms (XGBoost) / 3.05 ms (FT-Transformer)"},
                  {"name": "Target Hardware", "value": "Raspberry Pi 3 (ARM Cortex-A53, 1GB RAM Edge)"}
            ],
            "overview": "\n<strong>A. GENERAL INFORMATION & EXECUTIVE SUMMARY</strong><br>\n• <strong>Lead Applicant:</strong> Ahmet Soner GÜLEÇ (Student - Eskişehir Technical University, Avionics Engineering)<br>\n• <strong>Academic Advisor:</strong> Assoc. Prof. Dr. Aziz KABA (Eskişehir Technical University - Dept. of Pilotage)<br>\n• <strong>Industry Advisor:</strong> Zeynel Abidin AYDOĞAN (TUSAŞ - Turkish Aerospace Industries, Aerospace Eng.)<br>\n• <strong>Host Institution:</strong> Turkish Aerospace Industries (TUSAŞ) / ESTÜ Avionics Research Lab<br>\n• <strong>Grant Program:</strong> TÜBİTAK 2209-B Industry-Oriented Research Projects Support Program (2025/2nd Term)<br><br>\n\n<strong>Executive Summary:</strong><br>\nThe project aims to overcome the technical dilemma between accuracy loss and excessive hardware consumption caused by traditional Lookup Table (LUT) methods in fighter aircraft avionics using hardware-efficient XGBoost and Tabular Transformer models. The novelty lies in optimizing these models simultaneously for accuracy and resource efficiency via Particle Swarm Optimization (PSO) multi-objective algorithms.<br><br>\nNomograms of the F-18 aircraft (acting as surrogate for KAAN) are processed using MATLAB (`DigitizeGraph.m`) and Python multi-variable interpolation into a comprehensive training dataset. XGBoost and FT-Transformer models are benchmarked on Raspberry Pi 3, NVIDIA Jetson, and Docker simulation environments across accuracy, latency, RAM, and model size.\n",
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
                        "title": "Raspberry Pi 3 Edge Benchmark Suite",
                        "desc": "Hardware-aware benchmarking measuring p50/p95 inference latency, Peak RSS RAM memory footprint, and CPU load on ARM Cortex-A53."
                  }
            ],
            "analysis": "Raspberry Pi 3 Target Hardware Benchmark Analysis:\n\n• XGBoost: RMSE = 0.003468, MAE = 0.001372, MAPE = 1.560% | p95 Latency = 2.30 ms | Peak RAM = 185.2 MiB | Integrated Fit Score = 81.5 (TOP SCORE)\n• FT-Transformer: RMSE = 0.003671, MAE = 0.002044, MAPE = 2.888% | p95 Latency = 3.05 ms | Model Size = 0.42 MB | Peak RAM = 482.1 MiB | Fit Score = 77.6\n• Cubic Interpolation: p95 Latency = 6.78 ms | Peak RAM = 166.5 MiB (Lowest RAM) | CPU Avg = 355% | Fit Score = 74.0",
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
    heading_specs: "// TEKNİK ÖZELLİKLER & PARAMETRELER",
    heading_overview: "// 01. PROJE ÖZETİ VE MÜHENDİSLİK AMACI",
    heading_architecture: "// 02. SİSTEM MİMARİSİ VE ÇALIŞMA PRENSİBİ",
    heading_subsystems: "// 03. ALT SİSTEMLER VE DONANIM/YAZILIM BİLEŞENLERİ",
    heading_analysis: "// 04. TEST, SİMÜLASYON VE DOĞRULAMA",
    heading_achievements: "// 05. BAŞARILAR, DERECELER VE ÇIKTILAR",
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
    heading_specs: "// TECHNICAL SPECIFICATIONS & PARAMETERS",
    heading_overview: "// 01. PROJECT OVERVIEW & ENGINEERING PURPOSE",
    heading_architecture: "// 02. SYSTEM ARCHITECTURE & WORKING LOGIC",
    heading_subsystems: "// 03. SUBSYSTEMS & HARDWARE/SOFTWARE COMPONENTS",
    heading_analysis: "// 04. TESTING, SIMULATION & VERIFICATION",
    heading_achievements: "// 05. ACHIEVEMENTS, AWARDS & OUTPUTS",
    heading_other_projects: "OTHER PROJECTS"
  }
};
