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
        id: "project-1",
        title: "3 Fazlı BLDC Motor Kontrolcü Devresi",
        category: "donanim",
        summary: "%97.15 verimliliğe ve FOC algoritmasına sahip mikrodenetleyici tabanlı motor sürücü kartı.",
        description: "Fırçasız doğru akım (BLDC) motorların hassas ve verimli kontrolü amacıyla tasarlanmış, Alan Yönelimli Kontrol (FOC) algoritmasını koşan sürücü kartıdır. PSpice ve MATLAB/Simulink ile simüle edilerek parametre optimizasyonu yapılmış, Altium Designer ile en uygun bileşen yerleşimi ve PCB tasarımı tamamlanmıştır. Kısa devre, aşırı akım ve sıcaklık koruma entegrelidir.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        tags: ["Altium Designer", "FOC / Fırçasız Motor", "PSpice", "MATLAB / Simulink"],
        specs: [
          { name: "Verimlilik", value: "97.15%" },
          { name: "Güç Değerleri", value: "2KW / 48V / 42A" },
          { name: "Koruma", value: "Kısa Devre, Aşırı Akım, Sıcaklık Koruma" },
          { name: "Tasarım Yazılımı", value: "Altium Designer" }
        ]
      },
      {
        id: "project-2",
        title: "Yüksek Gerilim İzolasyon İzleme Cihazı",
        category: "donanim",
        summary: "Elektrikli araç batarya paketlerinin şasiye karşı kaçak akım tespitini yapan güvenlik modülü.",
        description: "Elektrikli araçlarda yüksek gerilimli batarya paketlerinin güvenliği için şasiye karşı izolasyon durumunu sürekli denetleyen sistemdir. Bataryanın pozitif (Rp) ve negatif (Rn) kutup izolasyon dirençleri hesaplanır. Ölçülen gerilimler AD8216 fark yükselteciyle yükseltilerek ADC'ye aktarılır. Sistemler arası elektriksel izolasyon AMC1311 sinyal dönüştürücü ve güvenlik röleleri ile sağlanır.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        tags: ["Analog Donanım", "AD8216 Fark Yükselteç", "AMC1311 İzolasyon", "Güvenlik"],
        specs: [
          { name: "Ölçüm Hassasiyeti", value: "MΩ Seviyesinde İzleme" },
          { name: "Yükselteç", value: "AD8216 Fark Yükselteci" },
          { name: "Sinyal Dönüştürücü", value: "AMC1311 Elektriksel İzolasyon" },
          { name: "Güvenlik", value: "Röle Tabanlı Hat Kesme" }
        ]
      },
      {
        id: "project-3",
        title: "Akıllı Batarya Yönetim Sistemi (BMS)",
        category: "gomulu",
        summary: "13S8P konfigürasyonundaki 48V - 50A batarya paketi için BQ76940 tabanlı koruma donanımı.",
        description: "Texas Instruments BQ76940 entegresi tabanlı, 14 bit çözünürlüklü ADC ile hücre gerilimlerini, şönt direnç ile akımı, NTC termistörler ile sıcaklığı izleyen sistemdir. Hücre dengelemesi 47 ohm dirençler üzerinden pasif olarak yapılır. State of Charge (SOC) tahmini Coulomb Sayaç Metodu ile gerçekleştirilir. Tüm algoritmalar STM32F103C8T6 mikrodenetleyicisi üzerinden koşulur.",
        image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=600",
        tags: ["STM32F103C8T6", "BQ76940 BMS", "Coulomb Sayaç (SOC)", "Altium Designer"],
        specs: [
          { name: "Hücre Konfigürasyonu", value: "13S8P (LG INR18650 MJ1)" },
          { name: "Güç Değerleri", value: "48V / 50A Çıkış Kapasitesi" },
          { name: "Mikrodenetleyici", value: "STM32F103C8T6" },
          { name: "Hücre Dengeleme", value: "47 Ohm Pasif Dengeleme" }
        ]
      },
      {
        id: "project-4",
        title: "TÜBİTAK 2209-A Görüntü Tabanlı Kuş Tanıma Sistemi",
        category: "yazilim",
        summary: "Kuş çarpmalarını önlemek amacıyla derin öğrenme tabanlı nesne tespiti yapan yazılım.",
        description: "Kuş çarpmalarının havacılık endüstrisine etkilerini azaltarak uçuş güvenliğini artırmayı amaçlayan araştırma projesidir. Mevcut radar tabanlı sistemlerin sınırlarını aşarak kuşları ayrıntılı tespit etmek amacıyla YOLOv8 ve MobileNetV2 nesne tanıma modelleri kullanılarak görüntü işleme tabanlı bir tespit ve tür tanımlama sistemi geliştirilmiştir. Proje TÜBİTAK tarafından desteklenmiştir.",
        image: "https://images.unsplash.com/photo-1460602594182-8268277697b8?auto=format&fit=crop&q=80&w=600",
        tags: ["YOLOv8 / MobileNetV2", "Python", "Derin Öğrenme", "TÜBİTAK 2209-A"],
        specs: [
          { name: "Nesne Tespit Modeli", value: "YOLOv8 & MobileNetV2" },
          { name: "Uygulama Alanı", value: "Havaalanı Uçuş Güvenliği" },
          { name: "Süreç", value: "10/04/2024 - 10/09/2025" },
          { name: "Destek Türü", value: "TÜBİTAK 2209-A Araştırma Projesi" }
        ]
      },
      {
        id: "project-5",
        title: "INFLOBOT: Yapay Zeka Destekli MRO Robotu",
        category: "gomulu",
        summary: "Uçak bakım süreçlerinde yakıt tankı gibi dar alan muayeneleri için yumuşak robot asistan.",
        description: "Havacılık bakım-onarım (MRO) sektöründe uçak yakıt tankları, uzay araçları ve roket gövdeleri gibi erişimi zor alanlarda hızlı hata tespiti yapabilen yapay zeka destekli yumuşak robottur. Entegre aydınlatma sistemiyle teknisyenlere net görüş sağlar. Proje TEKNOFEST Girişimcilik Yarışması'nda 'En İyi Girişim' seçilmiş ve THY Design Hackathon'da finalist olmuştur.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
        tags: ["Yumuşak Robotik", "Yapay Zeka", "MRO Havacılık", "TEKNOFEST Ödüllü"],
        specs: [
          { name: "Uygulama Alanı", value: "Yakıt Tankı & Ulaşılamaz Bölüm Muayenesi" },
          { name: "Ödül", value: "TEKNOFEST En İyi Girişim Ödülü" },
          { name: "Geliştirici Takım", value: "Tulpar Tharros (Co-Founder)" },
          { name: "Tasarım", value: "Esnek Yumuşak Gövde" }
        ]
      }
    ]
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
        id: "project-1",
        title: "3-Phase BLDC Motor Controller Circuit",
        category: "donanim",
        summary: "Microcontroller-based motor driver board with 97.15% efficiency and FOC algorithm.",
        description: "A driver board running the Field Oriented Control (FOC) algorithm, designed for precise and efficient control of brushless DC (BLDC) motors. Parameter optimization was performed using PSpice and MATLAB/Simulink simulations, and the most optimal component placement and PCB design were completed in Altium Designer. Features integrated short-circuit, over-current, and temperature protection.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        tags: ["Altium Designer", "FOC / Brushless Motor", "PSpice", "MATLAB / Simulink"],
        specs: [
          { name: "Efficiency", value: "97.15%" },
          { name: "Power Ratings", value: "2KW / 48V / 42A" },
          { name: "Protection", value: "Short Circuit, Overcurrent, Temp Protection" },
          { name: "Design Software", value: "Altium Designer" }
        ]
      },
      {
        id: "project-2",
        title: "High Voltage Insulation Monitoring Device",
        category: "donanim",
        summary: "Safety module detecting leakage current to chassis in electric vehicle battery packs.",
        description: "A system that continuously monitors the insulation status relative to the chassis for high-voltage battery pack safety in electric vehicles. The positive (Rp) and negative (Rn) insulation resistances of the battery are calculated. Measured voltages are amplified via the AD8216 difference amplifier and sent to the ADC. Electrical isolation between systems is provided via the AMC1311 signal isolator and safety relays.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        tags: ["Analog Hardware", "AD8216 Diff Amp", "AMC1311 Isolation", "Safety"],
        specs: [
          { name: "Measurement Sensitivity", value: "Monitoring in MΩ Level" },
          { name: "Amplifier", value: "AD8216 Difference Amplifier" },
          { name: "Signal Isolator", value: "AMC1311 Electrical Isolation" },
          { name: "Safety", value: "Relay-Based Line Cut-off" }
        ]
      },
      {
        id: "project-3",
        title: "Smart Battery Management System (BMS)",
        category: "gomulu",
        summary: "BQ76940-based protection hardware for a 48V - 50A battery pack in 13S8P configuration.",
        description: "A system based on the Texas Instruments BQ76940 integrated circuit, monitoring cell voltages with a 14-bit ADC, current with a shunt resistor, and temperature with NTC thermistors. Cell balancing is performed passively via 47-ohm resistors. State of Charge (SOC) estimation is performed using the Coulomb Counting method. All algorithms run on the STM32F103C8T6 microcontroller.",
        image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=600",
        tags: ["STM32F103C8T6", "BQ76940 BMS", "Coulomb Counter (SOC)", "Altium Designer"],
        specs: [
          { name: "Cell Configuration", value: "13S8P (LG INR18650 MJ1)" },
          { name: "Power Ratings", value: "48V / 50A Output Capacity" },
          { name: "Microcontroller", value: "STM32F103C8T6" },
          { name: "Cell Balancing", value: "47 Ohm Passive Balancing" }
        ]
      },
      {
        id: "project-4",
        title: "TÜBİTAK 2209-A Image-Based Bird Recognition System",
        category: "yazilim",
        summary: "Software using deep learning-based object detection to prevent bird strikes in aviation.",
        description: "A research project aimed at increasing flight safety by reducing the impact of bird strikes on the aviation industry. Exceeding the limits of existing radar-based systems to detect birds in detail, an image processing-based detection and species identification system was developed using YOLOv8 and MobileNetV2 object recognition models. The project was supported by TÜBİTAK.",
        image: "https://images.unsplash.com/photo-1460602594182-8268277697b8?auto=format&fit=crop&q=80&w=600",
        tags: ["YOLOv8 / MobileNetV2", "Python", "Deep Learning", "TÜBİTAK 2209-A"],
        specs: [
          { name: "Object Detection Model", value: "YOLOv8 & MobileNetV2" },
          { name: "Application Field", value: "Airport Flight Safety" },
          { name: "Timeline", value: "10/04/2024 - 10/09/2025" },
          { name: "Support Type", value: "TÜBİTAK 2209-A Research Project" }
        ]
      },
      {
        id: "project-5",
        title: "INFLOBOT: AI-Supported MRO Robot",
        category: "gomulu",
        summary: "Soft robot assistant for confined space inspections such as aircraft fuel tanks.",
        description: "An AI-supported soft robot capable of rapid defect detection in hard-to-reach areas such as aircraft fuel tanks, spacecraft, and rocket fuselages in the aviation maintenance, repair, and overhaul (MRO) sector. Its integrated lighting system provides technicians with a clear view. The project was named 'Best Startup' in the TEKNOFEST Entrepreneurship Competition and became a finalist in the THY Design Hackathon.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
        tags: ["Soft Robotics", "Artificial Intelligence", "MRO Aviation", "TEKNOFEST Awarded"],
        specs: [
          { name: "Application Field", value: "Fuel Tank & Confined Space Inspection" },
          { name: "Award", value: "TEKNOFEST Best Startup Award" },
          { name: "Developer Team", value: "Tulpar Tharros (Co-Founder)" },
          { name: "Design", value: "Flexible Soft Body" }
        ]
      }
    ]
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
    title_contact: "İLETİŞİM BAĞLANTI",
    contact_send_signal: "// SİNYAL GÖNDER",
    contact_desc: "Benimle projeler, staj imkanları veya iş birlikleri hakkında görüşmek için aşağıdaki kanalları kullanabilir veya doğrudan mesaj gönderebilirsiniz.",
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
    form_message: "MESAJINIZ (SİNYAL)",
    form_send: "SİNYALİ GÖNDER",
    footer_text: "© 2026 // AHMET SONER GÜLEÇ. TÜM SİSTEMLER AKTİF.",
    modal_specs: "// TEKNİK ÖZELLİKLER",
    modal_close: "Kapat"
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
    title_contact: "CONTACT CONNECTION",
    contact_send_signal: "// SEND SIGNAL",
    contact_desc: "You can use the channels below to discuss projects, internship opportunities, or collaborations, or send a message directly.",
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
    form_message: "YOUR MESSAGE (SIGNAL)",
    form_send: "SEND SIGNAL",
    footer_text: "© 2026 // AHMET SONER GULEC. ALL SYSTEMS ACTIVE.",
    modal_specs: "// TECHNICAL SPECIFICATIONS",
    modal_close: "Close"
  }
};
