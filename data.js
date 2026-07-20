const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmet Soner Güleç",
    title: "Uçak Bakım Mühendisi",
    subTitle: "Aviyonik Sistemler | Hava Aracı Bakımı | Sistem ve Donanım Tasarımı",
    about: "Eskişehir Teknik Üniversitesi Havacılık Elektrik-Elektronik Bölümü'nden Uçak Bakım Mühendisi / Aviyonik unvanıyla mezun oldum. Eğitimim süresince Gaz Türbinli Motorlar, Modern Aviyonik Sistemler, Mikroişlemciler, Otomatik Uçuş Kontrol ve Seyrüsefer Sistemleri, Uçak Aerodinamiği ile Tahribatsız Muayene Yöntemleri (NDT) gibi kritik alanlarda teorik derslerin yanı sıra üniversitemiz bünyesindeki SHY-145 onaylı uçak bakım tesislerinde uygulamalı eğitimler alarak pratik deneyim kazandım.\n\nMühendislik ve teknolojiye duyduğum ilgi doğrultusunda, teorik bilgiyi pratik uygulamalarla birleştiren projelerde aktif olarak görev alıyorum. Vilnius Gediminas Teknik Üniversitesi bünyesindeki staj sürecimde; Cessna 310, Cessna 152 ve Airbus A320 gibi uçaklar üzerinde aviyonik sistemlerin söküm, montaj, bakım ve test prosedürlerini uyguladım. Ardından uygulamalı eğitimimi EASA Part-145 sertifikalı Kyviškės Havaalanı'nda sürdürerek uçuşa elverişli Cessna 172S ve Piper PA-34 uçakları üzerinde EASA Part-66 lisanslı uzmanlar denetiminde çalıştım. Sonrasında ise insansız hava araçlarının mekanik tasarımlarını, fırçasız motor sürücü kartlarının baskı devre tasarımlarını, bu kartların fonksiyonel devre simülasyonlarını ve uçuş esnasındaki sıcaklık dağılımlarını değerlendirmek üzere termal analizlerini gerçekleştirdim.\n\nKurucu ortağı olduğum Tulpar Tharros topluluğu ile geliştirdiğimiz yapay zeka destekli havacılık MRO robotu INFLOBOT projesiyle TEKNOFEST Girişimcilik Yarışması'nda 'En İyi Girişim' ödülüne layık görüldük, Take Off Startup Summit'te finale kaldık ve THY Design Hackathon'da finalist olma başarısı gösterdik. Hidrojen-elektrik hibrit teknolojisiyle çalışan alternatif enerjili araçlar geliştiren Hidroana proje takımında, DORLION ve MIDAS araçlarının elektrik-elektronik sistemlerini sistem mühendisliği yaklaşımıyla geliştirerek TEKNOFEST Verimlilik Yarışması'nda Türkiye ikinciliği ve 'Elektronik Sistemler Özel Jüri Ödülü'nün yanı sıra Shell Eco-marathon Europe & Africa ve TEKNOFEST elektrikli araç yarışlarında finalistlikler kazandık.\n\nAyrıca kurucusu olduğum Havacılıkta Yapay Zeka Araştırmaları topluluğu bünyesinde, havacılık endüstrisinde kuş çarpmalarının etkilerini azaltmayı amaçlayan derin öğrenme tabanlı TÜBİTAK 2209-A araştırma projesini ve bir muharip hava aracının performans veri setini makine öğrenmesiyle modelleyen TUSAŞ Lift Up ve TÜBİTAK 2209-B projelerini başarıyla yürüttüm. Bu görüntü tabanlı kuş tanıma sistemi projemizle Boeing x Eskişehir Teknik Üniversitesi 'Havacılığın Geleceği Yarışması'nda ikincilik ödülü kazandım. Edindiğim bu teorik altyapı, saha deneyimi ve disiplinler arası mühendislik yetkinlikleriyle; havacılık ve uzay teknolojilerinde sınırları zorlayan, yenilikçi ve yüksek katma değerli çözümler üretme hedefiyle geleceğe yürüyen kararlı bir Uçak Bakım Mühendisiyim.",
    avatar: "Foto.jpg",
    socials: {
      github: "https://github.com/AhmetSoner",
      linkedin: "https://www.linkedin.com/in/ahmet-soner-gulec",
      email: "mailto:ahmetsonergulec@hotmail.com",
      phone: "+90 553 715 41 69"
    }
  },
  skills: [
    { name: "MATLAB / Simulink", category: "Yazılım & Simülasyon", level: 90 },
    { name: "Python / Gömülü C", category: "Yazılım & Simülasyon", level: 85 },
    { name: "PSIM", category: "Yazılım & Simülasyon", level: 75 },
    { name: "Altium Designer", category: "Donanım & Tasarım", level: 95 },
    { name: "LTspice / PSpice", category: "Donanım & Tasarım", level: 88 },
    { name: "Ansys", category: "Donanım & Tasarım", level: 70 },
    { name: "SolidWorks", category: "Havacılık & Analiz", level: 90 },
    { name: "COMSOL Multiphysics", category: "Havacılık & Analiz", level: 82 },
    { name: "XFLR5 (Aerodinamik)", category: "Havacılık & Analiz", level: 78 }
  ],
  education: [
    {
      institution: "Eskişehir Teknik Üniversitesi",
      degree: "Uçak Bakım Mühendisi / Aviyonik",
      duration: "Eylül 2020 - Mezun",
      gpa: "3.1",
      details: "Gaz Türbinli Motorlar, Modern Aviyonik Sistemler, Mikroişlemciler, Elektrik ve Elektronik Sistemler, Otomatik Uçuş Sistemleri, Navigasyon Sistemleri, Uçak Aerodinamiği, Tahribatsız Muayene Yöntemleri (NDT) gibi konularda teorik ve laboratuvar eğitimi. Üniversite bünyesindeki SHY-145 onaylı uçak bakım tesislerinde pratik/uygulamalı deneyim."
    }
  ],
  experience: [
    {
      title: "Aviyonik Mühendisliği Stajyeri",
      company: "Vilnius Gediminas Teknik Üniversitesi (Vilnius, Litvanya)",
      duration: "Ekim 2023 - Nisan 2024",
      details: "İlk dönemde, uçuşa elverişli olmayan Cessna 310, Cessna 152 ve Airbus A320 gibi uçaklar üzerinde çeşitli teknik görevler gerçekleştirdim. Bu süreçte; kanatlar, uçuş kontrol sistemleri, iniş takımları ve gövde gibi ana bileşenlerin sökülmesi, yeniden monte edilmesi ve kurulumu gibi işlemler yaptım. Ayrıca aviyonik sistemlerin bakımı, onarımı ve işletimi konularında deneyim kazandım. Sonrasında, uygulamalı eğitimimi EASA Part-145 sertifikasına sahip Kyviškės Havaalanı'nda sürdürdüm. Burada uçuşa elverişli Cessna 172S ve Piper PA-34 uçakları üzerinde çalıştım ve tüm çalışmalar EASA Part-66 lisansına sahip uzmanlar tarafından denetlendi. Son dönemde, insansız hava aracı teknolojileri ve bu sistemlerde kullanılan elektronik altyapılar üzerine yoğunlaştım. Üzerinde çalıştığım kuadrotorun mekanik tasarımını SolidWorks uygulamasını kullanarak gerçekleştirdim; bu süreçte ağırlık dengesi gibi kritik unsurlar için XFLR5 üzerinden hesaplamalar yaptım. Baskı devre kartı tasarımında Altium Designer kullanarak fırçasız motor sürücü devre kartlarını geliştirdim. Bu kartların doğrulama ve performans analizlerini ise PSpice ve Matlab ortamında gerçekleştirdiğim devre simülasyonları ile tamamladım. Uçuş sırasında elektronik kartlar üzerindeki yarı iletken malzemelerin sıcaklık sıcaklık dağılımını değerlendirmek amacıyla COMSOL Multiphysics yazılımı ile termal analizler gerçekleştirdim. Geliştirdiğim sistem, temel uçuş kontrol algoritmalarını destekleyecek şekilde yapılandırıldı. Tasarım sürecinde enerji verimliliği, termal dayanıklılık ve sistem güvenilirliği ön planda tutuldu ve tüm bileşenler bu hedeflere uygun olarak optimize edildi."
    },
    {
      title: "Elektrik ve Elektronik Birimi Üyesi",
      company: "Hidroana Proje Takımı",
      duration: "Eylül 2022 - Eylül 2025",
      details: "Eskişehir Teknik Üniversitesi'nin 2007 yılında kurulmuş köklü hidrojen enerjili araç projesi Hidroana'nın elektrik biriminde 3 yıl boyunca donanım geliştirme ve Ar-Ge faaliyetlerini aktif olarak yürüttüm. Elektrik ve Elektronik Birimi Üyesi olarak DORLION ve MIDAS araçlarının tüm elektrik-elektronik sistem tasarım ve entegrasyon süreçlerinde görev aldım. Sistem mühendisliği yaklaşımıyla teknik gereksinim analizi ve alt sistem entegrasyonlarını gerçekleştirdim. Güç elektroniği kapsamında; 3 fazlı BLDC motorlar için motor sürücü donanımı, hücre güvenliğini sağlayan Batarya Yönetim Sistemi (BMS) ve elektriksel kaçak tespiti için izolasyon izleme sistemi geliştirerek şematik tasarım, PCB tasarımı, devre simülasyonları ve optimizasyonlarını tamamladım. Geliştirilen bu elektronik kartların yüksek akım ve gerilim altında kararlı çalışması amacıyla termal analizler ve termal yönetim optimizasyonları yürüttüm. Tasarladığımız donanımların araca entegrasyon süreçlerini yöneterek 3 kez TEKNOFEST Verimlilik Yarışması'nda (Türkiye İkinciliği ve Elektronik Sistemler Özel Jüri Ödülü kazanarak) ve 1 kez de küresel Shell Eco-Marathon yarışmasında takımımızı temsil ederek elektrik-elektronik birimi bünyesinde aktif görev aldım. <br><a href='https://hidroana.com' target='_blank' class='timeline-link'>hidroana.com</a>"
    },
    {
      title: "Kurucu Ortak (Co-Founder)",
      company: "Tulpar Tharros Havacılık Topluluğu",
      duration: "Mart 2023 - Eylül 2024",
      details: "Havacılık bilimi alanında teknik ve bilimsel araştırmalar yürütmek üzere kurulan topluluğun kurucu ortaklığı. Havacılık MRO sektörü için geliştirilen yapay zeka destekli yumuşak robot INFLOBOT projesinin yürütülmesi. TEKNOFEST Girişimcilik Yarışması'nda 'En İyi Girişim' ödülü ve THY Design Hackathon Finalistliği."
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
};
