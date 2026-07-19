const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmet Soner Güleç",
    title: "Uçak Bakım Mühendisi",
    subTitle: "Aviyonik Sistemler | Hava Aracı Bakımı | Sistem ve Donanım Tasarımı",
    about: "Havacılık ve uzay teknolojilerine meraklı, aviyonik sistemler, uçuş sistemleri bakımı, sistem ve donanım tasarımı konularında kendimi geliştiren bir Uçak Bakım Mühendisiyim. TEKNOFEST gibi yarışmalarda aktif rol alarak takım çalışması ve aviyonik sistemler üzerinde deneyim kazandım.",
    avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300&h=300",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:ornek@eposta.com"
    }
  },
  skills: [
    { name: "C / C++", category: "Yazılım", level: 90 },
    { name: "Python", category: "Yazılım", level: 80 },
    { name: "Altium Designer", category: "Donanım", level: 85 },
    { name: "STM32 & ARM Cortex", category: "Gömülü Sistem", level: 85 },
    { name: "MATLAB / Simulink", category: "Analiz", level: 75 },
    { name: "Aviyonik Haberleşme (CAN, SPI, UART)", category: "Haberleşme", level: 90 },
    { name: "RTOS (Real-Time OS)", category: "Gömülü Sistem", level: 70 },
    { name: "Lehimleme & Laboratuvar Cihazları", category: "Pratik", level: 95 }
  ],
  education: [
    {
      institution: "Havacılık ve Uzay Bilimleri Üniversitesi",
      degree: "Havacılık Elektrik-Elektronik Mühendisliği (Lisans)",
      duration: "2023 - Devam Ediyor",
      details: "Gömülü sistemler, uçuş kontrol teorisi, haberleşme sistemleri ve elektromanyetik teorileri üzerine yoğunlaşan akademik eğitim."
    }
  ],
  experience: [
    {
      title: "Aviyonik Takım Kaptanı / Donanım Tasarımcısı",
      company: "TEKNOFEST İHA Takımı",
      duration: "2024 - Devam Ediyor",
      details: "İnsansız Hava Aracının (İHA) uçuş kontrol kartı (Autopilot) ve güç dağıtım ünitesi (PDB) tasarımlarının yapılması, STM32 mikrodenetleyici tabanlı gömülü kodların yazılması."
    },
    {
      title: "Gömülü Sistemler Stajyeri",
      company: "Savunma Sanayii / Havacılık Firması",
      duration: "Temmuz 2025 - Ağustos 2025",
      details: "Aviyonik haberleşme protokolleri (CAN Bus, ARINC 429) üzerinde çalışma, telemetri verilerinin görselleştirilmesi için arayüz geliştirilmesi."
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "STM32 Tabanlı İHA Uçuş Kontrol Kartı (Otopilot)",
      category: "donanim",
      summary: "6 eksenli IMU, barometrik basınç sensörü ve GPS modülünü bir araya getiren özgün aviyonik kart tasarımı.",
      description: "İHA'ların otopilot yazılımlarını çalıştırabilmesi için Altium Designer kullanılarak 4 katmanlı bir PCB tasarlanmıştır. Güç beslemesindeki parazitleri engellemek için filtreler eklenmiş ve RF haberleşme modülü için empedans uyumlulaması yapılmıştır. Kart üzerinde STM32F4 serisi MCU bulunmaktadır.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
      tags: ["Altium Designer", "STM32", "PCB Tasarımı", "Aviyonik"],
      specs: [
        { name: "MCU", value: "STM32F407VGT6" },
        { name: "Sensörler", value: "MPU6050 (IMU), MS5611 (Barometre)" },
        { name: "Katman Sayısı", value: "4 Katmanlı PCB" },
        { name: "Protokoller", value: "SPI, I2C, UART, CAN" }
      ]
    },
    {
      id: "project-2",
      title: "Yer Kontrol İstasyonu Telemetri Arayüzü",
      category: "yazilim",
      summary: "Uçuş telemetri verilerini gerçek zamanlı olarak gösteren ve haritada iz takibi yapan Python-Qt arayüzü.",
      description: "İHA'dan gelen telemetri paketlerini çözerek (hız, irtifa, batarya seviyesi, yönelim, konum vb.) yer kontrol bilgisayarında görselleştiren yazılımdır. Gelen verileri SQLite veritabanına kaydeder ve uçuş sonrasında geriye dönük grafik analiz imkanı sunar.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      tags: ["Python", "PyQt5", "Seri Haberleşme", "Veri Analizi"],
      specs: [
        { name: "Haberleşme", value: "RF Telemetri (433MHz / 57600bps)" },
        { name: "Grafik Kütüphanesi", value: "PyQtGraph & Matplotlib" },
        { name: "Veri Tabanı", value: "SQLite" }
      ]
    },
    {
      id: "project-3",
      title: "Akıllı Batarya Yönetim Modülü (BMS)",
      category: "gomulu",
      summary: "4S LiPo piller için hücre dengeleme, akım/voltaj takibi ve CAN Bus üzerinden durum raporlama kartı.",
      description: "Uçuş güvenliği için kritik olan batarya sağlığını izlemek amacıyla tasarlanmış gömülü sistem projesidir. MCU, pillerin anlık akım ve sıcaklık değerlerini ADC üzerinden okuyup koruma algoritmalarını işletir. Kritik durumlarda gücü keser ve CAN veri yolu üzerinden otopilota uyarı gönderir.",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=600",
      tags: ["Gömülü C", "STM32", "LiPo BMS", "Güç Elektroniği"],
      specs: [
        { name: "Desteklenen Pil", value: "4S - 6S LiPo" },
        { name: "Güvenlik Limitleri", value: "Aşırı Akım, Kısa Devre, Aşırı Sıcaklık" },
        { name: "İletişim Hızı", value: "CAN Bus 250 Kbps" }
      ]
    }
  ]
};
