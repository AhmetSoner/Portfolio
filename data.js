const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmet Soner Güleç",
    title: "Uçak Bakım Mühendisi",
    subTitle: "Aviyonik Sistemler | Hava Aracı Bakımı | Sistem ve Donanım Tasarımı",
    about: "Eskişehir Teknik Üniversitesi Havacılık Elektrik-Elektronik Bölümü mezunuyum. Eğitimim boyunca Gaz Türbinli Motorlar, Modern Aviyonik Sistemler, Mikroişlemciler, Otomatik Uçuş Kontrol ve Navigasyon Sistemleri, Aerodinamik ile Tahribatsız Muayene Yöntemleri (NDT) gibi kritik alanlarda hem teorik hem de fakültemiz bünyesindeki SHY-145 onaylı hava aracı bakım tesislerinde pratik ve uygulamalı eğitimler aldım.\n\nÜniversite hayatımın başından itibaren havacılık ve uzay teknolojilerine duyduğum derin merak ve hevesle kendimi sürekli geliştirerek; aviyonik sistemler, uçuş kontrol yazılımları, sistem ve donanım tasarımı konularında uzmanlaştım. Vilnius Gediminas Teknik Üniversitesi bünyesindeki stajyerlik sürecimde Airbus A320 ve Cessna 172 uçaklarının navigasyon, otopilot ve kokpit gösterge sistemlerinin bakım ve test prosedürlerinde aktif rol aldım. Havacılıkta Yapay Zeka Araştırmaları Laboratuvarı'nda İHA sistem tasarımı ve donanım geliştirme projeleri yürüttüm.\n\nYönetici ve üye olarak katlığım takımlarla birlikte TEKNOFEST, Shell Eco-marathon, Boeing Havacılığın Geleceği Yarışması ve THY/Turkish Technic Hackathon gibi prestijli organizasyonlarda ikincilikler ve finalistlikler dahil olmak üzere birçok önemli başarıya imza attım. Altium Designer, MATLAB/Simulink, SolidWorks, COMSOL Multiphysics ve Ansys gibi elektrik, elektronik ve mekanik analiz/çizim programlarını profesyonel seviyede kullanarak aviyonik kart tasarımları, otopilot sistemleri ve 3D mekanik modellemeler gerçekleştiren, çok disiplinli çalışma yeteneğine sahip vizyoner bir Uçak Bakım Mühendisiyim.",
    avatar: "Foto.jpg",
    socials: {
      github: "https://github.com/AhmetSoner",
      linkedin: "https://www.linkedin.com/in/ahmet-soner-g%C3%BCle%C3%A7-1a0525227/",
      email: "mailto:ahmetsonergulec@hotmail.com"
    }
  },
  skills: [
    { name: "MATLAB / Simulink", category: "Yazılım & Simülasyon", level: 90 },
    { name: "Python / Gömülü C", category: "Yazılım & Simülasyon", level: 85 },
    { name: "PSIM", category: "Yazılım & Simülasyon", level: 75 },
    { name: "Altium Designer", category: "Donanım & Tasarım", level: 95 },
    { name: "LTspice / PSpice", category: "Donanım & Tasarım", level: 85 },
    { name: "Ansys", category: "Donanım & Tasarım", level: 70 },
    { name: "SolidWorks", category: "Havacılık & Analiz", level: 90 },
    { name: "COMSOL Multiphysics", category: "Havacılık & Analiz", level: 80 },
    { name: "XFLR5 (Aerodinamik)", category: "Havacılık & Analiz", level: 75 }
  ],
  education: [
    {
      institution: "Eskişehir Teknik Üniversitesi",
      degree: "Havacılık Elektrik Elektroniği (Lisans)",
      duration: "Eylül 2020 - Haziran 2026",
      details: "GPA: 3.1. Gaz Türbinli Motorlar, Modern Aviyonik Sistemler, Mikroişlemciler, Otomatik Uçuş ve Seyrüsefer Sistemleri, Uçak Aerodinamiği, Tahribatsız Muayene Yöntemleri (NDT) gibi konularda teorik ve laboratuvar eğitimi. Fakülte bünyesindeki SHY-145 onaylı hava aracı bakım tesislerinde pratik/uygulamalı eğitimler."
    }
  ],
  experience: [
    {
      title: "Proje Görevlisi",
      company: "Havacılıkta Yapay Zeka Araştırmaları Laboratuvarı",
      duration: "Ekim 2024 - Devam Ediyor",
      details: "İnsansız hava araçları ve aviyonik sistemler için uçuş kontrol algoritmaları geliştirmek; sensör verilerinin işlenmesi ve otonom karar mekanizmalarını yönetmek. MATLAB/Simulink ve Python ortamlarını kullanarak modelleme, simülasyon ve sanal test analizleri yapmak. Yapay zeka sistemlerini destekleyecek PCB (Altium Designer) tasarımlarını yürütmek."
    },
    {
      title: "Uçak Bakım Mühendisliği Stajyeri",
      company: "Vilnius Gediminas Teknik Üniversitesi (Vilnius, Litvanya)",
      duration: "Ekim 2023 - Nisan 2024",
      details: "Airbus A320 ve Cessna 172 uçaklarında navigasyon, otopilot ve uçuş gösterge sistemlerinin söküm, montaj ve test prosedürlerinin uygulanması. SolidWorks ile quadcopter drone mekanik tasarımı, XFLR5 ile sabit kanatlı İHA airfoil analizi. MATLAB ve COMSOL kullanarak ısıl davranış ve sistem performansı doğrulama simülasyonları."
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "TUSAŞ LIFT-UP: Uçuş Performans Modellemesi",
      category: "yazilim",
      summary: "Muharip bir hava aracının performans veri setinin makine öğrenmesi yöntemleriyle modellenmesi.",
      description: "Muharip bir hava aracına ait uçuş performans veri seti, Python ve makine öğrenmesi yöntemleri kullanılarak modellenmiş ve farklı algoritmalarla kıyaslanmıştır. Bu proje TÜBİTAK 2209-B kapsamında desteklenmektedir.",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600",
      tags: ["Python", "Makine Öğrenmesi", "TUSAŞ", "TÜBİTAK 2209-B"],
      specs: [
        { name: "Veri Kümesi", value: "Muharip Uçak Uçuş Verileri" },
        { name: "Dil / Kütüphane", value: "Python / Scikit-learn, Pandas" },
        { name: "Destek", value: "TÜBİTAK 2209-B / TUSAŞ" }
      ]
    },
    {
      id: "project-2",
      title: "TÜBİTAK 2209-A: Derin Öğrenme Tabanlı Kuş Tespit ve Uyarı Sistemi",
      category: "yazilim",
      summary: "Kuş çarpmalarının havacılık endüstrisine etkilerini azaltmak için derin öğrenme modeli.",
      description: "Havaalanlarında kuş çarpmalarını engellemek amacıyla derin öğrenme tabanlı nesne tespiti yapan, gerçek zamanlı görüntü işleme ve erken uyarı sistemidir. TÜBİTAK 2209-A kapsamında geliştirilmiştir.",
      image: "https://images.unsplash.com/photo-1460602594182-8268277697b8?auto=format&fit=crop&q=80&w=600",
      tags: ["Derin Öğrenme", "Python", "Görüntü İşleme", "TÜBİTAK 2209-A"],
      specs: [
        { name: "Yöntem", value: "CNN / YOLO Nesne Tespiti" },
        { name: "Haberleşme", value: "UART / Wi-Fi Arayüzü" },
        { name: "Destek", value: "TÜBİTAK 2209-A" }
      ]
    },
    {
      id: "project-3",
      title: "INFLOBOT: Yapay Zeka Destekli MRO Robotu",
      category: "gomulu",
      summary: "Havacılık MRO (Bakım-Onarım-Revizyon) sektörü için yapay zeka tabanlı yumuşak robotik sistem.",
      description: "Uçak bileşenlerinin dar alanlarındaki muayene ve bakım işlemleri için geliştirilmiş, yapay zeka destekli, esnek ve yumuşak robotik koldan oluşan MRO asistan sistemidir.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
      tags: ["Yapay Zeka", "Robotik", "MRO Havacılık", "STM32"],
      specs: [
        { name: "Denetleyici", value: "STM32F4 / ARM Cortex" },
        { name: "Uygulama Alanı", value: "Dar Alan Muayenesi (MRO)" },
        { name: "Algoritmalar", value: "Yumuşak Robotik Kinematiği" }
      ]
    },
    {
      id: "project-4",
      title: "BLDC Motor Sürücü Kartı (2KW / 48V / 42A)",
      category: "donanim",
      summary: "%97.15 verimlilik oranına ve FOC algoritmasına sahip yüksek güçlü motor sürücüsü.",
      description: "İHA ve robotik sistemlerde kullanılmak üzere tasarlanmış, Field Oriented Control (FOC) algoritmasını destekleyen, Altium Designer ile çizilmiş 4 katmanlı güç elektroniği kartıdır.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
      tags: ["Altium Designer", "FOC Kontrol", "BLDC Sürücü", "PCB Tasarımı"],
      specs: [
        { name: "Güç Değerleri", value: "2KW / 48V / 42A" },
        { name: "Verimlilik", value: "97.15%" },
        { name: "Yazılım Arayüzü", value: "STM32 FOC SDK" }
      ]
    },
    {
      id: "project-5",
      title: "Akıllı Batarya Yönetim Sistemi (BMS)",
      category: "gomulu",
      summary: "13S8P konfigürasyonundaki 48V-50A batarya paketi için BQ76940 tabanlı koruma kartı.",
      description: "Coulomb Counter ile yüksek hassasiyetli akım takibi yapabilen, pasif dengelemeli ve aşırı sıcaklık/akım koruma algoritmalarına sahip akıllı batarya yönetim kartıdır.",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=600",
      tags: ["Gömülü Sistem", "BMS", "BQ76940", "Güç Yönetimi"],
      specs: [
        { name: "Konfigürasyon", value: "13S8P Li-ion / LiPo" },
        { name: "Haberleşme", value: "I2C / CAN Bus" },
        { name: "Akım Hassasiyeti", value: "Coulomb Counting" }
      ]
    },
    {
      id: "project-6",
      title: "Hassas İzolasyon İzleme Sistemi",
      category: "donanim",
      summary: "Pozitif ve negatif elektrik hatlarındaki izolasyon dirençlerini anlık takip eden donanım.",
      description: "Elektrikli ve hibrit araç/havacılık güç hatlarındaki kaçakları tespit etmek amacıyla, hassas fark yükselteçleri kullanılarak tasarlanmış yüksek voltaj güvenlik kartıdır.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
      tags: ["Altium Designer", "Analog Tasarım", "İzolasyon Takip", "Güvenlik"],
      specs: [
        { name: "Hassasiyet", value: "MΩ Düzeyi Kaçak Tespiti" },
        { name: "Devre Elemanları", value: "Hassas Op-Amp / Fark Yükselteç" },
        { name: "Çıkış", value: "Analog / CAN Bildirim" }
      ]
    }
  ]
};
