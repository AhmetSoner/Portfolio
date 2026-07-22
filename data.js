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
      { name: "XFLR5", category: "Havacılık & Analiz", level: 50 }
    ],
    projectTeams: [
      {
        id: "team-aviation-ai",
        name: "Havacılıkta Yapay Zeka Araştırmaları Topluluğu",
        role: "Kurucu / Proje Lideri",
        period: "2024 - Devam Ediyor",
        icon: "brain-circuit",
        logo: "HAYA/Logo.png",
        projectIds: ["project-6", "project-4"],
        focus: "Yapay zeka, otonom sistemler, uçuş kontrol yazılımları ve aviyonik veri modelleme.",
        overview: [
          "Havacılıkta Yapay Zeka Araştırmaları Topluluğu (HAYA), 2022 yılında kurulmuş; havacılık ve uzay bilimleri odaklı, farklı mühendislik disiplinlerini bir araya getiren bir öğrenci ekibidir. Takımın temel amacı, yapay zeka ve geleceğin otonom teknolojilerini havacılık ekosistemine entegre ederek sektördeki problemlere disiplinli, uygulanabilir ve yenilikçi çözümler üretmektir.",
          "HAYA, araştırmalarını yalnızca teorik düzeyde bırakmadan akıllı sistemler tasarlamayı ve bu sistemleri sektöre uygulanabilir sürdürülebilir çıktılara dönüştürmeyi hedefler. Bu vizyon doğrultusunda uçuş güvenliği, performans optimizasyonu, özgün İHA tasarımları, otonom sistemler ve sensör veri analizi gibi kritik alanlarda derin öğrenme algoritmaları ve modelleme yaklaşımları geliştirir.",
          "Geliştirilen akıllı sistemlerin teorik altyapısı, simülasyon ve animasyon uygulamalarıyla test edilerek saha geçerliliği ve donanım uygulanabilirliği açısından değerlendirilir. Farklı bilgi ve deneyime sahip üyelerin bir araya gelmesiyle oluşan ekip, hedefe odaklılığı ve yüksek mühendislik vizyonunu temel ilke olarak benimser.",
          "Kuruluşundan bu yana TÜBİTAK 2209-A, TÜBİTAK 2209-B ve bilimsel araştırma projelerinde çözümler ortaya koyan HAYA, edindiği proje kültürüyle TUSAŞ LIFT-UP Programı kapsamında da akıllı uçuş sistemleri üzerine destek almayı başarmış ve ulusal havacılık platformlarına katma değer sağlamaya devam etmektedir."
        ],
        contributions: [
          "TUSAŞ LIFT-UP, TÜBİTAK 2209-A ve TÜBİTAK 2209-B proje süreçlerinin planlanması",
          "TFX (MMU Kaan) uçağı uçuş performans verisi modelleme ve benchmark çalışmalarının yürütülmesi",
          "TEKNOFEST FPV drone takibi ve kuş tespit sistemi gibi havacılık yapay zekası projelerinde teknik liderlik"
        ],
        outcomes: ["1 TÜBİTAK 2209-A", "1 TÜBİTAK 2209-B", "1 TUSAŞ LIFT-UP"],
        outcomeDetails: [
          {
            title: "TUSAŞ LIFT-UP Programı",
            text: "TUSAŞ LIFT-UP, lisans seviyesindeki bitirme ve araştırma projelerini sanayi problemleriyle eşleştiren, öğrencilerin Türk Havacılık ve Uzay Sanayii ekosistemiyle doğrudan temas kurmasını sağlayan sanayi odaklı bir programdır. HAYA kapsamında yürütülen LIFT-UP projesinde, TFX (MMU Kaan) uçağı gibi modern muharip hava aracı platformlarında performans verisinin nasıl modellenebileceği, klasik lookup table ve interpolasyon yaklaşımlarına alternatif makine öğrenmesi yöntemleriyle incelendi. Bu çıktı, takımın yalnızca akademik üretim yapan bir topluluk olmadığını; sanayi ihtiyacı, danışman geri bildirimi, raporlama disiplini ve uygulanabilir prototip beklentisiyle proje yönetebildiğini gösterdi."
          },
          {
            title: "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği",
            text: "TÜBİTAK 2209-A, üniversite öğrencilerinin akademik danışman eşliğinde araştırma kültürü kazanmasını, bilimsel yöntemle problem tanımlamasını ve proje çıktısı üretebilmesini destekleyen ulusal bir programdır. HAYA için 2209-A süreci; fikir geliştirme, literatür okuma, yöntem seçimi, deney planı oluşturma ve akademik rapor yazımı gibi adımların takım kültürüne yerleşmesini sağladı. Bu destek, topluluğun yapay zeka ve havacılık eksenindeki projelerini yalnızca yarışma odaklı değil, bilimsel temeli olan araştırma çıktılarına dönüştürmesi açısından kritik bir kazanım oldu."
          },
          {
            title: "TÜBİTAK 2209-B Sanayiye Yönelik Araştırma Projeleri Desteği",
            text: "TÜBİTAK 2209-B, öğrenci projelerinin sanayi kuruluşlarıyla ilişkilendirilmesini ve gerçek sektör ihtiyaçlarına temas eden araştırma çıktılarına dönüşmesini hedefleyen bir destek programıdır. 2209-B kapsamındaki çalışmalar, HAYA'nın geliştirdiği teknik fikirleri yalnızca laboratuvar veya simülasyon ortamında bırakmayıp uygulanabilirlik, maliyet, doğrulama, sistem entegrasyonu ve sanayi beklentileriyle birlikte ele almasını sağladı. Bu yönüyle 2209-B deneyimi, milli teknoloji hamlesiyle uyumlu olarak yerli havacılık problemlerine öğrenci seviyesinde nitelikli mühendislik katkısı sunma pratiği kazandırdı."
          }
        ]
      },
      {
        id: "team-tulpar-tharros",
        name: "Tulpar Tharros Havacılık Topluluğu",
        role: "Kurucu",
        period: "2023 - 2024",
        icon: "bot",
        logo: "TTT/LOGO.png?v=3",
        projectIds: ["project-5"],
        focus: "Havacılık bakım, onarım ve revizyon süreçleri için yapay zeka destekli robotik denetim sistemleri.",
        overview: [
          "2023 yılı Mart ayında kurulan TT takımı ismini, Türk mitolojisinde yer alan kanatlı at figürü “Tulpar” ve cesaret, azim, heves; hedeflerini gerçekleştirmek için motive edici güç gibi anlamlara sahip Grekçe “Tharros” kelimelerinden almaktadır. Takım; çeşitli takım ve projelerde bulunmuş, Uçak Gövde ve Motor Bakımı, Havacılık Elektrik Elektroniği ve Fizik bölümlerinde öğrenim gören öğrencilerden oluşmaktadır.",
          "Takımın amacı, Havacılık ve Uzay Bilimleri kapsamında teknolojik ve bilimsel çalışmalara yönelerek gerek sektörel gerek akademik anlamda özgün ve yaratıcı fikirler üretmek ve bu fikirleri hayata geçirmektir.",
          "Havacılık ve farklı bilim dallarından gelen öğrenciler olarak, çeşitli proje ve yarışmalarda kendi düşüncelerimizi ifade etmek; bu fikirlerin hayata geçirilme sürecinde Ar-Ge ve üretim safhalarında bizzat bulunarak pratik ve teorik çözümlerle sektöre ve bilimsel araştırmalara katkı sunmak temel hedefimizdir. Akademik ve kültürel yatırımlarımız, sürekli merakımız ve üretme isteğimizle ülkemizin geleceğine mühendis, teknisyen veya bilim insanı olarak hizmet etmeyi değerli görüyoruz.",
          "Takım; Eskişehir Teknik Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi üçüncü sınıfta öğrenim gören beş öğrenciden oluşmuştur. Her üye farklı alanlarda çeşitli yeteneklere sahip olup belirli araştırma alanlarında takıma destek vermiştir. Ekip üyelerinin yalnızca kendi ilgi alanlarıyla sınırlı kalmaması, takımı ilgilendiren her konuda söz söyleyebilmesi; proaktif, adaptif ve hızlı aksiyon alabilen bir çalışma kültürü oluşturmuştur."
        ],
        contributions: [
          "INFLOBOT projesinde 3D gövde tasarımı, elektrik altyapısı ve yazılım geliştirme",
          "Dar/kapalı alanlarda bakım teknisyenlerine görüş ve operasyon güvenliği sağlayan sistem entegrasyonu",
          "Teknik prototip, iş modeli ve yatırımcı görüşmeleriyle ticarileşme sürecine katkı"
        ],
        outcomes: ["THY Design Hackathon Finalisti", "TEKNOFEST En İyi Girişim", "Take Off Istanbul"],
        outcomeDetails: [
          {
            title: "THY Design Hackathon Finalisti",
            text: "Tulpar Tharros ekibi, havacılık bakım ve denetim süreçlerine yönelik robotik çözüm fikrini THY Design Hackathon sürecinde finalist seviyesine taşıdı. Bu süreçte fikir yalnızca teknik bir prototip olarak değil; kullanıcı ihtiyacı, operasyonel güvenlik, bakım ortamı ve uygulanabilir ürün senaryosu üzerinden değerlendirildi."
          },
          {
            title: "TEKNOFEST En İyi Girişim",
            text: "TEKNOFEST Girişim Yarışması kapsamında Tulpar Tharros, havacılık bakım alanında dar ve kapalı bölgelerde çalışanlara destek olabilecek yapay zeka destekli robotik denetim yaklaşımıyla En İyi Girişim başarısı elde etti. Bu derece, projenin yalnızca mühendislik fikri olarak değil; ticarileşme potansiyeli, saha problemiyle uyumu ve girişim değeri açısından da karşılık bulduğunu gösterdi."
          },
          {
            title: "Take Off Istanbul",
            text: "Take Off Istanbul süreci, Tulpar Tharros fikrinin uluslararası girişim ekosistemi içinde anlatılmasına ve yatırımcı/mentor perspektifiyle değerlendirilmesine imkan verdi. Takım için bu çıktı; teknik çözümün iş modeli, pazar ihtiyacı ve havacılık bakım sektöründeki uygulanabilirlik tarafını güçlendiren önemli bir deneyim oldu."
          }
        ]
      },
      {
        id: "team-hidroana",
        name: "Hidroana Proje Takımı",
        role: "Elektrik Birimi Üyesi",
        period: "2022 - 2025",
        icon: "zap",
        logo: "Hidroana/hidro logo.png",
        focus: "Hidrojen enerjili araçlarda güç elektroniği uygulamaları ve sistem entegrasyonu.",
        overview: [
          "Hidroana, Eskişehir Teknik Üniversitesi'nin hidrojen enerjili araç projesidir. 2007 yılında kurulmuş, 17 yıllık bir proje kültürüne sahip olan takım; alternatif enerjili araç projeleri alanında Türkiye'nin öncü ekiplerinden biri olduğunu göstermiştir. Tamamı gönüllü mühendislik öğrencilerinden oluşan ekipte Malzeme Bilimi ve Mühendisliği, Elektrik-Elektronik Mühendisliği, Bilgisayar Mühendisliği, Kimya Mühendisliği ve Makine Mühendisliği gibi farklı disiplinlerden öğrenciler yer almaktadır.",
          "Takımın temel amacı, hidrojen enerjisinin hem ülkemizde hem de dünya genelinde alternatif bir enerji kaynağı olarak kullanımını artırmak ve yaygınlaştırmaktır. Bu amaç doğrultusunda Hidroana, her zaman daha iyisini yapmayı hedefleyen; ulusal ve uluslararası projelerde mükemmellik standardını benimseyen bir çalışma anlayışıyla hareket eder. Hidrojen enerjisinin sürdürülebilir ve etkili şekilde kullanılmasını sağlamak, bu alanda öncü ve örnek alınan bir grup olmak takımın en büyük hedeflerinden biridir.",
          "Proje yapısı, görevlerin iş bölümü esasına göre paylaşılması ve araştırma-geliştirme ağırlıklı çalışmalar yürütülmesi üzerine kuruludur. Bu yaklaşım sayesinde hidrojenin günlük hayatta kullanımına katkı sağlamak, alternatif enerji teknolojilerinin yaygınlaşmasına destek olmak ve daha temiz bir dünya hedefi için somut mühendislik çıktıları üretmek amaçlanmaktadır. Ekip, bu vizyonu gerçekleştirmek için sürekli gelişmeyi ve kendi alanında adını duyurmuş bir grup olmayı hedefler.",
          "Shell Eco-marathon, dünyanın en prestijli öğrenci inovasyon yarışmalarından biri olarak 38 yıldır Avrupa, Amerika ve Asya kıtalarında düzenlenmektedir. Yarışma kapsamında dünyanın farklı bölgelerinden gelen üniversite öğrencileri, kendi tasarladıkları ve ürettikleri enerji tasarruflu araçlarla en az enerjiyle en uzun mesafeyi kat etmek için yarışır. Yaratıcı tasarımları ve teknik yeterlilikleriyle en yüksek verimlilik değerlerine ulaşan takımlar ödüllendirilir. Hidroana, Shell Eco-marathon Europe ve Shell Eco-marathon Türkiye organizasyonlarına düzenli olarak katılım sağlayan bir takımdır.",
          "TEKNOFEST kapsamında TÜBİTAK tarafından düzenlenen Efficiency Challenge Elektrikli Araç Yarışları, üniversite ve lise öğrencilerinin elektrikli araçlarını en verimli şekilde tasarlayıp yarıştırdığı önemli bir etkinliktir. Hidromobil ve elektromobil kategorileri bulunan bu yarışmada Hidroana, 2008 yılından beri hidromobil kategorisinde yer almaktadır. Yarışmanın temel amacı, alternatif enerji ile çalışan araçlara yönelik yerli üretimi artırmak, katma değeri yüksek ürünlerin geliştirilmesini desteklemek ve alternatif enerji kaynakları konusunda ülke genelinde farkındalık oluşturmaktır."
        ],
        contributions: [
          "DORLION ve MIDAS araçlarının elektrik-elektronik alt sistem tasarım ve entegrasyonu",
          "Güç elektroniği, dijital/analog sistem tasarımı ve donanım optimizasyonu çalışmaları",
          "PCB tasarımı, devre simülasyonu, termal analiz ve yarışma saha entegrasyonu"
        ],
        outcomes: ["TEKNOFEST Efficiency Challenge İkinciliği", "TEKNOFEST Efficiency Challenge Özel Jüri Ödülü", "Shell Eco-Marathon Finalisti"],
        outcomeDetails: [
          {
            title: "TEKNOFEST Efficiency Challenge İkinciliği",
            text: "TEKNOFEST Efficiency Challenge Elektrikli Araç Yarışları, TÜBİTAK yürütücülüğünde düzenlenen ve öğrencilerin tasarlayıp ürettiği elektrikli araçların verimlilik, teknik uygunluk, güvenlik ve yarış performansı üzerinden değerlendirildiği önemli bir mühendislik yarışmasıdır. Hidroana, hidromobil kategorisinde geliştirdiği hidrojen yakıt hücreli araçla bu yarışmada ikincilik elde ederek yalnızca pist performansını değil; enerji yönetimi, araç entegrasyonu, elektriksel güvenlik ve sistem verimliliği konularındaki mühendislik yetkinliğini de göstermiştir."
          },
          {
            title: "TEKNOFEST Efficiency Challenge Özel Jüri Ödülü",
            text: "Özel Jüri Ödülü, yarışma derecesinden bağımsız olarak teknik yaklaşımı, tasarım kalitesi, yenilikçi çözüm üretme becerisi ve takımın mühendislik olgunluğu açısından dikkat çeken projelere verilen bir takdirdir. Hidroana'nın bu ödülü alması; güç elektroniği, dijital/analog sistem tasarımı, izolasyon izleme, batarya ve hidrojen altyapısı gibi alt sistemlerde ortaya koyduğu bütünleşik mühendislik yaklaşımının jüri tarafından ayrıca değerli bulunduğunu gösterir."
          },
          {
            title: "Shell Eco-Marathon Finalisti",
            text: "Shell Eco-marathon, öğrencilerin kendi tasarladıkları enerji tasarruflu araçlarla en az enerjiyle en uzun mesafeyi kat etmeyi hedeflediği uluslararası bir inovasyon yarışmasıdır. Bu yarışmada finalist olmak; aracın yalnızca konsept düzeyinde kalmadığını, teknik denetimlerden geçebilecek seviyede geliştirildiğini ve enerji verimliliği odağında uluslararası rekabete uygun bir mühendislik çıktısına dönüştüğünü gösterir. Hidroana için bu süreç, hidrojen enerjili araç teknolojisini global öğrenci inovasyon ekosisteminde temsil etme açısından önemli bir kazanımdır."
          }
        ]
      }
    ],
    education: [
      {
        institution: "Eskişehir Teknik Üniversitesi",
        degree: "Uçak Bakım Mühendisi / Aviyonik",
        duration: "Eylül 2020 - Mezun",
        gpa: "3.1",
        details: "Lisans Eğitimim süresince birçok disiplini kapsayan dersler gördüm. Bu derslere örnek olarak :<br><br>• Gaz Türbinli Motorlar<br>• Modern Aviyonik Sistemler<br>• Microişlemciler<br>• Elektrik ve Elektronik<br>• Elektrik Makineleri<br>• Otomatik Uçuş Sistemleri<br>• Seyrüsefer Sistemleri<br>• Sayısal Veri İletimi<br>• Elektronik Gösterge Sistemleri<br>• Elektromanyetik Çevre<br>• Uçak Aerodinamiği<br>• Uçak Yapıları ve Sistemleri<br>• Uçak Malzeme Bilgisi<br>• İnsan Faktörleri<br>• Tahribatsız Muayene Yöntemleri (NDT)<br>• Haberleşme Sistemleri<br><br>Ayrıca, fakülte bünyesindeki SHY-145 onaylı uçak bakım tesislerinde uygulamalı eğitimler aracılığıyla pratik deneyim kazandım."
      }
    ],
    experience: [
      {
        title: "Araştırma Görevlisi",
        company: "Eskişehir Teknik Üniversitesi (Eskişehir, Türkiye)",
        duration: "Ekim 2025 - Haziran 2026",
        details: "İŞKUR Gençlik Programı kapsamında, Eskişehir Teknik Üniversitesi bünyesinde kurulan Havacılıkta Yapay Zeka Araştırmaları Laboratuvarı'nda araştırma görevlisi olarak çalıştım. Bu süreçte insansız hava araçları ve aviyonik sistemler için uçuş kontrol algoritmaları geliştirme, sensör verilerinin işlenmesi, uçuş durumunun yorumlanması ve otonom karar verme mekanizmalarının kurgulanması üzerine çalışmalar yürüttüm.<br><br>MATLAB/Simulink ve Python ortamlarını kullanarak hava aracı sistem davranışlarının modellenmesine katkı sağladım; geliştirilen yazılım ve kontrol yaklaşımlarının sanal ortamda test edilmesi, doğrulama analizlerinin yapılması ve sonuçların teknik olarak yorumlanması süreçlerinde yer aldım. Ayrıca yapay zeka destekli havacılık uygulamalarını destekleyebilecek elektronik kartların tasarım, doğrulama ve entegrasyon süreçlerinde görev alarak sensör, işlemci ve uçuş kontrol altyapılarının birlikte çalışmasına yönelik donanım geliştirme çalışmalarına katkı sundum."
      },
      {
        title: "Aviyonik Mühendisliği Stajyeri",
        company: "Vilnius Gediminas Teknik Üniversitesi (Vilnius, Litvanya)",
        duration: "Ekim 2023 - Nisan 2024",
        details: "İlk dönemde, uçuşa elverişli olmayan Cessna 310, Cessna 152 ve Airbus A320 gibi uçaklar üzerinde çeşitli teknik eğitimler aldım. Bu süreçte; kanatlar, uçuş kontrol sistemleri, iniş takımları ve gövde gibi ana bileşenlerin sökülmesi, yeniden monte edilmesi ve kurulumu gibi işlerde yer aldım. Ayrıca aviyonik sistemlerin bakımı, onarımı ve işletimi konularında deneyim kazandım. Sonrasında, uygulamalı eğitimimi EASA Part-145 sertifikasına sahip Kyviškės Havaalanı'nda sürdüm. Burada uçuşa elverişli Cessna 172S ve Piper PA-34 uçakları üzerinde çalıştım ve tüm çalışmalar EASA Part-66 lisansına sahip uzmanlar tarafından denetlendi.<br><br>Son dönemde, insansız hava aracı teknolojileri ve bu sistemlerde kullanılan elektronik altyapılar üzerine yoğunlaştım. Üzerinde çalıştığım kuadrotorun mekanik tasarımını SolidWorks uygulamasını kullanarak gerçekleştirdim; bu süreçte ağırlık dengesi gibi kritik unsurlar için XFLR5 üzerinden hesaplamalar yaptım. Baskı devre kartı tasarımında Altium Designer kullanarak fırçasız motor sürücü devre kartlarını geliştirdim. Bu kartların doğrulama ve performans analizlerini ise PSpice ve Matlab ortamında gerçekleştirdiğim devre simülasyonları ile tamamladım. Uçuş sırasında elektronik kartlar üzerindeki yarı iletken malzemelerin sıcaklık sıcaklık dağılımını değerlendirmek amacıyla COMSOL Multiphysics yazılımı ile termal analizler gerçekleştirdim. Geliştirdiğim sistem, temel uçuş kontrol algoritmalarını destekleyecek şekilde yapılandırıldı. Tasarım sürecinde enerji verimliliği, termal dayanıklılık ve sistem güvenilirliği ön planda tutuldu ve tüm bileşenler bu hedeflere uygun olarak optimize edildi.<div class='internship-files'><span class='internship-files-title'>Staj Dosyaları</span><a href='Staj/Internship%20Program.pdf' target='_blank'>Internship Program</a><a href='Staj/Study%20Pages-%20October%201.pdf' target='_blank'>Study Pages - October</a><a href='Staj/Study%20Pages-%20November%202.pdf' target='_blank'>Study Pages - November</a><a href='Staj/Study%20Pages-%20December%203.pdf' target='_blank'>Study Pages - December</a><a href='Staj/Study%20Pages-%20January%204.pdf' target='_blank'>Study Pages - January</a><a href='Staj/Study%20Pages-%20Laboratory%205.pdf' target='_blank'>Study Pages - Laboratory</a></div>"
      }
    ],
    projects: [
      {
          "id": "project-1",
          "title": "48 V / 50 A Üç Fazlı BLDC Motor Sürücü Kartı (Vol.1)",
          "category": "donanim",
          "summary": "Hidrojen enerjili araç güç aktarma sistemi için geliştirilen Vol.1 BLDC motor sürücü kartı; 48 V DC baradan 50 A nominal akım ve 2.5 kW güç seviyesinde üç fazlı motor kontrolü hedefleyen, STM32F446RET6 tabanlı bir güç elektroniği tasarımıdır. Kart; MOSFET yarım köprü katları, IRS2186 kapı sürücüleri, INA229 ölçüm hattı, Hall sensörü geri beslemesi, çok kademeli DC/DC besleme mimarisi ve akım/sıcaklık güvenli mod algoritmalarıyla ele alınmıştır.",
          "description": "Vol.1 motor sürücü çalışması, üç fazlı BLDC motorun hız, yön, akım ve sıcaklık geri beslemeleriyle güvenli biçimde sürülmesi için tasarlanan güç kartını açıklar. Word teknik tasarım dosyasındaki topoloji seçimi, 48 V / 50 A güç hedefi, MOSFET ve gate-driver seçimi, DC-link kondansatör hesabı, STM32 tabanlı kontrol algoritması, Proteus simülasyonları, Altium PCB çalışmaları, prototip testleri, verim hesabı, koruma algoritmaları ve malzeme listesi bu sayfaya aktarılmıştır.",
          "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
          "tags": [
                    "BLDC Motor Sürücü",
                    "STM32F446RET6",
                    "IRS2186",
                    "INA229",
                    "Altium Designer",
                    "Proteus"
          ],
          "specs": [
                    {
                              "name": "Proje / Versiyon",
                              "value": "Üç Fazlı BLDC Motor Sürücü Kartı - Vol.1"
                    },
                    {
                              "name": "Hedef Güç",
                              "value": "2.5 kW / 48 V / 50 A nominal çalışma"
                    },
                    {
                              "name": "Güç Topolojisi",
                              "value": "Üç fazlı köprü, 12 adet N-kanal MOSFET güç katı"
                    },
                    {
                              "name": "Kontrolcü",
                              "value": "STM32F446RET6 ARM Cortex-M4, 180 MHz"
                    },
                    {
                              "name": "Sürücü / Ölçüm",
                              "value": "IRS2186 gate driver, INA229 akım-gerilim-güç ölçümü"
                    },
                    {
                              "name": "Tasarım ve Doğrulama",
                              "value": "Altium Designer PCB, Proteus simülasyon, osiloskop/prototip testleri"
                    }
          ],
          "overview": "<p>Bu sayfa, Kartlar / sürücü vol1 klasöründeki Motor Sürücü Teknik Tasarım Vol.1 dokümanının içeriği temel alınarak hazırlanmıştır. Çalışma; üç fazlı BLDC motorun 48 V DC hat üzerinde yüksek akım, güvenli anahtarlama, Hall sensörü geri beslemesi ve mikrodenetleyici tabanlı PWM kontrolüyle sürülmesini hedefleyen ilk sürücü kartı versiyonunu anlatır.</p><h4>4.1.Devre Tasarımı</h4><strong class=\"method-subtitle\">4.1.1.Motor sürücü devresinin tasarım adımları</strong><br><strong class=\"method-subtitle\">A) Topoloji seçimi</strong><br><p>Topoloji seçiminde, yüksek güç uygulamalarına uygun ve enerji kaybını minimize ederek daha yüksek verimlilik sağlayan Üç fazlı köprü (Three-Phase Bridge) Topolojisine karar verildi. Özellikle fırçasız (brushless) üç fazlı DC motorlar için ideal olan bu topoloji, motorun her üç fazının (A fazı, B fazı, C fazı) ayrı ayrı kontrol edilmesine olanak tanır ve motorun dönüş yönünü ve hızını hassas bir şekilde ayarlamayı sağlar.</p><strong class=\"method-subtitle\">B) Voltaj ve Akım değerlerinin belirlenmesi</strong><br><p>Motor nominal 2500 watt olarak hesaplandığından, motor sürücüsü nominal 48 V çalışma voltajında ​​ve nominal 50 A çalışma akımında çalışacak şekilde tasarlanmıştır. Bu değer motorun ihtiyaçlarını karşılayan bir değerdir. Aynı zamanda motor sürücüsünün yaşayacağı anlık gerilim ve akım değerleri de dikkate alınmaktadır. Kart, bu değerler dikkate alındığında anlık 100A değerine dayanacak şekilde tasarlanmıştır. Kullanılan MOSFET’leri değiştirirseniz kartın kaldırabileceği güç değeri de değişecektir.</p><strong class=\"method-subtitle\">C) Frekans değeri</strong><br><p>Motorun istenen maksimum hızı, tepki zamanı ve hız kontrol hassasiyeti, çalışma frekansının belirlenmesinde rol oynamaktadır. Daha yüksek frekanslar genellikle daha hızlı tepki süreleri sağlar, ancak aynı zamanda güç kaybı ve ısınma gibi faktörleri de etkileyebilir. Ayrıca, motor sürücüsünün frekansı, motorun tipi, uygulama gereksinimleri, verimlilik, ısı yönetimi ve EMC faktörleri göz önünde bulundurularak dikkatlice seçilmiştir.</p><strong class=\"method-subtitle\">4.1.2.Tasarlanan devrenin analitik ifadesi (Evirici, kontrol kartı, vb.)</strong><br><p>Tasarlanan devrenin teorik temellerini, matematiksel modellerini ve çalışma prensiplerini “Kontrol Kartı” adı altında gerçekleştirilmiştir. Kartın tasarımı sürecinde kontrol algoritmaları, geri besleme döngüleri, çıkış sinyalleri (PWM sinyalleri), sensör verilerinin İşlenmesi ve Zamanlama ve Sinyal İşleme başlıkları altında simülasyon, analiz ve optimizasyon çalışmaları gerçekleştirilmiştir.</p><strong class=\"method-subtitle\">4.1.3.Malzeme seçimi (Entegre, transistör, direnç, bobin, kapasitör, vb.)</strong><br><p>Malzeme seçiminde motor sürücüsünde kullanılan gömülü bileşenlerin veri föyüne göre, pasif bileşenlerin maksimum ve minimum yükleri göz önünde bulundurularak referans gerilim ve akım bölücü gibi yerlerde kullanılan komponentlerin ise toleranslarının en düşük olacak şekilde seçilmiştir. Üretim kolaylığı ve yer tasarrufu açısından soğutucu blokların dışındaki tüm devre elemanları yüzeye monte edilen (SMD) devre elemanları olarak kullanılmaktadır.</p><strong class=\"method-subtitle\">A) Kondansatör</strong><br><p>Kondansatör seçiminde kullanım alanının maksimum gerilim değeri, minimum kapasite gereksinimi, çalışma sıcaklığı ve anlık olarak uğrayacağı maksimum akım dikkate alınmıştır. Kondansatörün arızalanması durumunda herhangi bir sorunla karşılaşmamak için daha küçük değerli birden fazla kondansatörün paralel bağlanmasına karar verilmiştir.</p><strong class=\"method-subtitle\">B) Direnç</strong><br><p>Dirençler üzerinden geçen akıma göre Watt değerleri dikkate alınmıştır. Ayrıca, referans olarak kullanılan dirençlerde düşük toleranslı olunmasına ve bilgi föyü verilerine göre uygun direnç değerinin seçilmesine karar verilmiştir.</p><strong class=\"method-subtitle\">C) Bobin</strong><br><p>Bobin seçimi, kullanılan DA/DA dönüştürücünün bilgi föyüne bağlı kalınarak, kullanılan bobinden geçecek maksimum akıma göre yapılmıştır. Motor sürücüsünde elektriksel gürültüyü en aza indirgemek için kullanılan bobinler için SMT teknolojisine sahip bobinler seçilmiştir.</p><strong class=\"method-subtitle\">D) MOSFET seçimi</strong><br><p>MOSFET seçiminde, motor sürücünün uğrayacağı maksimum gerilim ve akım değerleri dikkate alınmıştır. Ani akım artışlarına karşı emniyet katsayısı 2 olarak alınmıştır. Aynı zamanda motor sürücü verimini ve ısıyı korumak için MOSFET’ in iç direnci fiyat-performans kriterleri içerisinde olabildiğince düşük seçilmiştir.</p><strong class=\"method-subtitle\">E) MOSFET sürücü</strong><br><p>IRS2186 hem yüksek katmanlı hem de düşük katmanlı MOSFET'leri sürebilmesi ve 4A gibi nispeten yüksek akımlarda çalışabilmesi nedeniyle tercih edilmiştir. Çıkış sinyali olarak 6.8V ile 20V arasında değerler verebilmektedir. Piyasadaki benzer ürünlerle karşılaştırıldığında 170ns gibi normal anahtarlama süresine sahiptir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim1.png\" alt=\"E) MOSFET sürücü\"><figcaption>Şekil V1.1. E) MOSFET sürücü.</figcaption></figure></div><strong class=\"method-subtitle\">4.1.3.6. Mikro kontrolcü</strong><br><p>STM32F446RET6 mikrodenetleyicisinin:</p><p>ARM Cortex-M4 tabanlı bir mikrodenetleyici olup yüksek işlem gücü sunması ve bu şekilde motor control algoritmalarını hızlı bir şekilde işleyebilmesi,</p><p>Çok sayıda Dalga Genişlik Modülü kanalına sahip olup motor sürücülerinde gerekli olan yüksek çözünürlüğü ve hassas sinyalleri üretme yeteneğine sahip olması,</p><p>Çok sayıda zamanlayıcı ve sayıcıya sahip olup hassas bir şekilde kontrol edilmesine olanak tanıması,</p><p>ART, SPI, I2C, CAN ve USB gibi çeşitli haberleşme protokollerini desteklemesi,</p><p>Düşük güç tüketimi sayesinde batarya ile çalışan enerji verimliliğinin önemli olduğu projelerde büyük bir avantaj sağlaması,</p><p>Özelliklerine sahip olması ile, motor sürücü devremiz için ideal bir mikrodenetleyicidir. Bu nedenle, motor kontrol uygulamasında güvenilir ve verimli bir çözüm sağlamak için tercih edilmiştir.</p><strong class=\"method-subtitle\">4.1.4.Parametre hesabı (Eleman değerleri)</strong><br><strong class=\"method-subtitle\">A) Kondansatörler</strong><br><p>Motor kontrolcü devresinde çeşitli kapasitörler bulunmaktadır.</p><strong class=\"method-subtitle\">1) Filtreleme Kondansatörleri</strong><br><p>Filtreleme kondansatörlerin değerlerini hesaplarken, güç kaynağından veya bir güç elektroniği devresinden gelen dalgalı voltajı düzeltmek veya istenmeyen frekans bileşenlerini azaltmaya yönelik kullanılan yüksek ve düşük bant filtre kondansatör hesaplamaları göz önünde bulundurulmuştur. Çalışılan frekans değerinde 100 nF ve 1 uF değerinde çok katmanlı seramik kondansatörler kullanılmıştır. Bu değerdeki kapasitörler, gerektiği yerde paralel bağlanıp kapasitans değeri istenilen değere yükseltilmiştir (4.7 uF, 10 uF gibi).</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim2.png\" alt=\"1) Filtreleme Kondansatörleri\"><figcaption>Şekil V1.2. 1) Filtreleme Kondansatörleri.</figcaption></figure></div><strong class=\"method-subtitle\">2) DC-Link Kondansatörleri</strong><br><p>DC tarafındaki dalgalanmaları azaltmak, DC voltajını stabilize etmek ve yüksek akım taleplerinde enerji sağlaması için kullanılmıştır. Büyük kondansatörlere ve düşük ESR (Eşdeğer Seri Direnç) değerlerine sahip olacak şekilde seçim yapılmıştır.</p><p>C: Kapasitans (Farad)</p><p>P: Sistem gücü (Watt)</p><p>dc: Dönüşüm verimi (Efficiency)</p><p>fsw: Anahtarlama frekansı (Hz)</p><p>V_{dc}: DC-Link voltajı (Volt)</p><p>Vp(max)​: DC-Link voltajının izin verilen maksimum dalgalanma miktarı (Volt)</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim3.png\" alt=\"2) DC-Link Kondansatörleri\"><figcaption>Şekil V1.3. 2) DC-Link Kondansatörleri.</figcaption></figure></div><p>Bu hesaplamaya bağlı kalınarak, 470 uF değerinde 8 adet (yüksek kapasitans değerleri sunması için) Alüminyum Elektrolitik kondansatör paralel bağlanılarak devrede kullanılmıştır. ESR (Equivalent Series Resistance) değerini düşürmek ve kartın uzun ömürlü olmasi icin kondansatörler parallel bağlanmıştır.</p><p>Bu hesaplama, temel bir yaklaşım sunmaktadır. Ancak, gerçek dünya uygulamalarında termal yönetim, dalgalanma akımları ve kondansatörlerin ömrü gibi faktörler de dikkate alınmalıdır. Bu nedenle, hesaplanan değerin üzerinde bir kapasitans seçilmiştir.</p><strong class=\"method-subtitle\">B) Bobinler</strong><br><p>Bobinin endüktans değeri, devredeki akım değişim hızına ve istenen enerji depolama kapasitesine bağlı olarak seçildi. Örneğin, bir DC/DA dönüştürücü devresinde, istenen çıkış voltajındaki dalgalanmaları azaltmak için endüktans değeri, veri föyünde bulunan üretici referans değerlerine göre seçilmiştir. Bu referans değerleri arasında nominal akım, endüktans değeri, maksimum akım sınırı gibi faktörler bulunmaktadır.</p><strong class=\"method-subtitle\">4.1.5.Güç modülü ve kontrol ünitesi hakkında bilgiler</strong><br><strong class=\"method-subtitle\">A) Kontrol ünitesi</strong><br><p>STM32 ailesine ait olan bu mikrodenetleyici, ARM Cortex-M4 çekirdeği üzerinde çalışmaktadır. Motor kontrolü uygulamalarında STM32F446RET6 kullanılırken, özellikle PID kontrol algoritmaları, hız ve konum geri beslemesi gibi karmaşık işlemleri rahatlıkla gerçekleştirilebilir. Ayrıca, Düşük güç tüketimi ile enerji verimliliği sağlaması, geniş kod ve veri depolama kapasitesi sunması ve STM32 ailesi geniş bir geliştirme ekosistemine sahip olması yönüyle bu işlemciyi seçme nedenlerimiz arasındadır.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Özellik</th><th>Değer</th></tr></thead><tbody><tr><td>Mikrodenetleyici Çekirdeği</td><td>ARM Cortex-M4</td></tr><tr><td>Çalışma Frekansı</td><td>180 MHz</td></tr><tr><td>Çalışma Gerilimi</td><td>1.7 V - 3.6 V, uygulamada 3.3 V</td></tr><tr><td>Flash Bellek</td><td>512 KB</td></tr><tr><td>SRAM</td><td>128 KB</td></tr><tr><td>GPIO</td><td>LQFP64 paket üzerinde 114 pin ailesi</td></tr><tr><td>Zamanlayıcı</td><td>11 adet timer</td></tr><tr><td>ADC</td><td>12-bit, 3 adet, 16 kanal</td></tr><tr><td>DAC</td><td>12-bit, 2 adet</td></tr><tr><td>İletişim Arayüzleri</td><td>USART, SPI, I2C, CAN, USB</td></tr><tr><td>Operasyon Sıcaklık Aralığı</td><td>-40°C ila +85°C</td></tr><tr><td>Paket</td><td>LQFP64, UFQFPN64, WLCSP64</td></tr><tr><td>Güç Tüketimi</td><td>108 μA/MHz çalışma modu; düşük güç modları destekli</td></tr></tbody></table></div><strong class=\"method-subtitle\">B) Güç modülü</strong><br><p>Motor sürücüde kullanılmak üzere IXTH230N10T N-Kanal MOSFET seçilmiştir. Bu MOSFET, yüksek ve sürekli anahtarlama akım değerlerine sahiptir. 200A sürekli akım altında çalışabilir iken anlık 500A tepe değerlerinde çalışabilir ve 100V gerilim değerine sahiptir. Motor kontrol aşamasında fazla güç harcama ile karşılaşılması durumunda bu MOSFET’ler dayanabilecektir. V_GS = 10V için R_DS (on) değeri 0.019 ohm olarak belirlenmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim4.png\" alt=\"B) Güç modülü\"><figcaption>Şekil V1.4. B) Güç modülü.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim5.png\" alt=\"B) Güç modülü\"><figcaption>Şekil V1.5. B) Güç modülü.</figcaption></figure></div>",
          "architecture": "<p>PCB ve güç katı tasarımı; yüksek akım taşıyan yolların genişliği, bakır döküm alanları, bootstrap ve bypass kapasitörlerinin sürücü entegrelerine yakın yerleşimi, DC-link kondansatörlerin enerji tamponlama görevi ve çok kademeli besleme hattının kararlılığı üzerinden ele alınmıştır.</p><h4>4.4.Baskılı Devre Çalışmaları</h4><p>PCB tasarımında, gelişmiş analiz ve simülasyon araçları sunması ve tasarım hatalarını minimize etme imkanı sağlaması yönüyle Altium Designer kullanılması tercih edilmiştir.</p><p>PCB Düzeni ve Şema Tasarımı</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim29.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.1. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim30.jpg\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.2. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><p>STM32 mikrodenetleyicinin güç gereksinimlerini doğru bir şekilde karşılayacak güç hatları tasarlanmıştır. Bunun yanı sıra güç ve toprak hatları mümkün olduğunca kısa ve geniş tutulmuştur. Osilatörlerin ve saat sinyallerinin. Hatları mümkün olduğunca kısa ve düzgündür. PCB tasarımında elektromanyetik uyumluluk için belirli standartlar dikkate alınmıştır. Üretim sürecini kolaylaştıracak ve maliyetleri düşürmek için standart bilesen boyutları ve montaj yönergelerine uygunluk sağlanmıştır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim31.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.3. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim32.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.4. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><p>PCB 2D Görünümü Gerber Dosyası</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim33.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.5. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><p>PCB 3D Görüntüsü</p><p>Katmanlı PCB'lerde, ısıyı yaymak bileşenler ve yollar nedeniyle daha zor olmaktadır. Bakır, ısıyı mükemmel bir şekilde ileten bir malzemedir. Bu yüzden Motor sürücü IC'ye iyi termal bağlantılarla yollara mümkün olduğunca fazla katı bakır dökülerek yapılmıştır. Her iki dış katmana da bakır dökerek ve bu dökmeleri çok sayıda via ile birleştirmek, ısıyı bileşenlerin kesildiği alanlarda yaymaya yardımcı olmaktadır. Motor sürücü IC'ye giren ve çıkan akım büyük olduğundan PCB yollarının genişliği dikkatlice düşünülmüştür. Yol ne kadar genişse, direnci o kadar düşüktür. Yollarda, direncin aşırı güç dağılmasına neden olacak kadar küçük olmamasına dikkat edilmiştir, çünkü bu durum yolun ısınmasına yol açabilir.</p><p>Bypass kapasitörleri ve bootstrap kapasitörü mümkün olan en yakın yerde entegrenin güç pinlerine yerleştirilmiştir ve yakınlarda büyük kapasitörler bulunmaktadır.</p><h4>4.5.Üretim Çalışmaları/Aşamaları</h4><strong class=\"method-subtitle\">Üretim Çalışmaları/Aşamaları</strong><br><p>Kartın tamamen üretilmesinden önce, kartın prototipi yapılıp, isterleri karşılayıp karşılamadığı test edilmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim34.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.6. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Daha küçük boyutta ve daha düşük güçte çalışabilecek bir prototip yaparak, aynı motorda test edilmiştir. Uzun sureli nominal koşullarda çalışmanın yanında, prototip olmasına rağmen yüksek güç tüketim aşamalarında da çalışmayı sürdürerek asil kartın sahip olduğu güvenlik marjini hesaplanmıştır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim35.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.7. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Simülasyon aşamasında kaydettiğimiz verilerin aynisini, prototip kontrolcüde de elde etmeyi basardık. Bu sayede kontrolcünün nominal durumlarda MOSFET kapı açma kapama esnasında herhangi bir sorun olmadığı görülmüştür.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim36.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.8. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Test sonucunda, ekstrem koşullarda, MOSFET kapı kısmında bir gurultu olduğu fark edilmiştir. Fakat gurultunun, MOSFET in sahip olduğu maksimum marjinden düşük ve motorun fazlarına herhangi yanlış anahtarlama yapmadığından sadece aşırı ısınmaya yönelik soğutucu alüminyum bloklar kullanılarak sorun çözülmüştür.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim37.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.9. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>MOSFET kısmında herhangi bir silkinti olmadan fazlara gerekli gerilimi verdiği görülmüştür. MOSFET in sahip olduğu Flyback diyotun doğru şekilde boşaltma yaptığı doğrulanmıştır.</p><strong class=\"method-subtitle\">Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi</strong><br><p>Güç elektroniği bileşenleri yüksek güçlerde çalışmaktadır. Bu yüzden PCB tasarımında ve kutulamada termal yönetim stratejileri kullanılmıştır. Bu, ısı emiciler, soğutucular, ve uygun hava akışı sağlamak için kutu ve kart tasarımını içermektedir.</p><p>Bu koşullar dikkate alındığında kartın 12x25x25 cm boyutlarinda olmasi gerektiğine karar verilmiştir.</p><p>Kullanılan elektronik bileşenlerin güvenliği de kritik önem taşımaktadır., aşırı akım, aşırı voltaj ve kısa devre gibi durumlarda bileşenleri ve aracın diğer sistemlerini koruyacak bir kutu tasarımı yapılmıştır. Çok sayıda kablo ve bağlantı kullanıldığından. Kutu tasarımında bu kabloların yönetimi ve düzenlenmesi için uygun alan ve bağlantı noktaları sağlanmıştır. Ayrıca kutu, erişilebilir bir yerde bulunmasına ve montaj, sökme ve yeniden montaj işlemleri kolaylıkla yapılabilir olmasına dikkat edilmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim38.jpg\" alt=\"Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi\"><figcaption>Şekil V1.10. Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi.</figcaption></figure></div>",
          "subsystems": [
                    {
                              "title": "Üç Fazlı Güç Katı",
                              "desc": "A/B/C fazlarını süren yüksek ve düşük taraf MOSFET katları; motorun yön ve hız kontrolü için ana anahtarlama mimarisini oluşturur."
                    },
                    {
                              "title": "Gate Driver ve Bootstrap",
                              "desc": "IRS2186 tabanlı yüksek/düşük taraf sürüş hattı, bootstrap ve izole DC/DC desteğiyle MOSFET kapı gerilimini güvenli aralıkta tutar."
                    },
                    {
                              "title": "STM32 Kontrol Birimi",
                              "desc": "STM32F446RET6, PWM üretimi, Hall sensörü konum okuma, RPM hesabı, yön kontrolü ve güvenli mod kararlarını yürütür."
                    },
                    {
                              "title": "Ölçüm ve Koruma",
                              "desc": "INA229 üzerinden akım, gerilim, güç ve sıcaklık izlenir; aşırı akım veya aşırı sıcaklık durumunda motor güvenli moda alınır."
                    },
                    {
                              "title": "Besleme Mimarisi",
                              "desc": "48 V girişten 45 V, 15 V, 5 V ve 3.3 V hatlarına inen regülatör zinciri güç katı ve kontrol elektroniğini besler."
                    },
                    {
                              "title": "PCB ve Termal Tasarım",
                              "desc": "Altium Designer ile yüksek akım yolları, bakır döküm, via geçişleri, bileşen yerleşimi ve kutulama/soğutma gereksinimleri tasarlanmıştır."
                    }
          ],
          "analysis": "<p>Doğrulama ve güvenlik değerlendirmesi; prototip testleri, MOSFET kapı sinyali gözlemleri, buck dönüştürücü simülasyonları, güç kaybı hesabı, nominal verim yorumu, aşırı akım ve aşırı sıcaklık durumunda sistemi güvenli moda alan algoritmalar üzerinden yapılmıştır.</p><h4>4.6.Motor Sürücü Verimliliği</h4><strong class=\"method-subtitle\">Güç kaybı hesabı (En yüksek güç talebinde)</strong><br><p>Motor sürücü devresinin güç tüketimini hesaplamak için birkaç bileşenin güç tüketimini dikkate alınmıştır.</p><p>Toplamda 12 MOSFET bulunmaktadır ve her bir MOSFET'in güç kaybı, üzerinden geçen akıma ve iç direnç değerine bağlı olarak hesaplanmıştır. Bu hesaplamalar sonucunda, her bir MOSFET'in yaklaşık 47.5 watt güç kaybına neden olduğu belirlenmiştir. Toplamda 12 MOSFET bulunduğundan, MOSFET'lerin toplam güç kaybı 570 watt olarak hesaplanmıştır.</p><p>Ayrıca, her bir MOSFET sürücü devresi 80 watt güç tüketmektedir. Devrede toplamda 6 MOSFET sürücü bulunduğundan, bu sürücülerin toplam güç tüketimi 480 watt olarak belirlenmiştir.</p><p>Mikrodenetleyici olarak kullanılan STM32F446RET6'nın güç tüketimi ise 0.064 watt olarak hesaplanmıştır. Bu mikrodenetleyici, düşük güç tüketimi ve yüksek performansı ile motor kontrol uygulamaları için idealdir.</p><p>Pasif bileşenler ve diğer devre elemanlarının güç tüketimi ise yaklaşık 10 watt olarak tahmin edilmiştir. Bu bileşenler, devredeki enerji kayıplarının küçük bir kısmını oluşturur ancak yine de toplam güç tüketimi üzerinde etkisi vardır.</p><p>Sonuç olarak, motorun nominal gücü 2500 watt olarak belirlenmiş ve diğer bileşenlerin güç tüketimleri de dikkate alındığında, toplam güç tüketimi yaklaşık 3560 watt olarak hesaplanmıştır. 3560 watt, devrenin en kötü koşullardaki (maksimum) güç tüketimini yansıtmaktadır. Gerçek çalışma koşullarında, motor ve diğer bileşenler her zaman maksimum güç tüketimi ile çalışmayabilir, bu nedenle gerçek güç tüketimi daha düşük olabilir.</p><strong class=\"method-subtitle\">Yüzde verim değeri (Nominal güç talebinde)</strong><br><p>Motorun nominal olarak 48V ve 50A olarak tasarlandığı düşünüldüğünde, güç hesaplaması P=V.I formülü kullanılarak 2400 Watt olarak belirlenmiştir. Bu değer, motorun çalışma koşullarında sağlanan güç miktarını ifade eder. Ancak devrede kullanılan MOSFETlerin doğal bir direnci bulunmaktadır ve bu da 40 Watt gibi bir kayba yol açmaktadır. Bu kayıp yüzdesel olarak hesaplandığında, (40 / 2400) * 100 ≈ %1,67 gibi bir değere denk gelir.</p><h4>4.7.Motor Sürücü Koruması</h4><p>Motor sürücüde aşırı akım koruması ve aşırı sıcaklık koruması yapan algoritma vardır. Aşırı akım veya sıcaklık durumunda motora giden güç kesilmektedir ve sistem güvenli moda girmektedir.</p><strong class=\"method-subtitle\">Akım değerini ölçen algoritma</strong><br><p>Aşırı akım koruma algoritmasında INA229 entegresinden SPI haberleşme protokolü aracılığıyla akım verisi alınır. Ölçülen akım değerinin, akım sınırını geçmesi durumunda sistem güvenli moda girmektedir ve motor çalışmayı durdurmaktadır. Aşırı akım koruma algoritmasında gürültüden vb. sebeplerden dolayı anlık yanlış okunan veriler olması durumunda ise ufak bir kontrol fonksiyonu eklenmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim39.png\" alt=\"Akım değerini ölçen algoritma\"><figcaption>Şekil V1.1. Akım değerini ölçen algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Sıcaklık Değerini ölçen algoritma</strong><br><p>Aşırı sıcaklık koruması yapan algoritma, sıcaklık verilerini INA229 entegresinden alır. Sıcaklığın, güvenlik sınırını geçmesi durumunda sistem güvenli moda alınır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim40.png\" alt=\"Sıcaklık Değerini ölçen algoritma\"><figcaption>Şekil V1.2. Sıcaklık Değerini ölçen algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma</strong><br><p>Bu algoritma, sistemin güvenlik moduna alındığı zaman devreye giren algoritmadır. Algoritma, temelinde 3 kısımdan oluşmaktadır. 1. bölümde motor çalışırken, sıcaklık, akım ve sistemi açık tutan “enable” tuşunun kontrolü yapılır. Bir sorun olmaması durumunda motor çalışmaya devam eder. Bir sorun olması durumunda ise algoritmanın 2. kısmına geçilir. Algoritmanın bu kısmına geçildikten sonra motor çalışmayı durdurur. 2. bölümde motora giden güç kesilir. Bu bölümde tek kontrol edilen şey pilotun pedala basıp basmadığıdır. Eğer pilot pedala basıp motoru döndürmek istiyorsa algoritma 2. bölümden çıkmaz ve motor hiçbir zaman dönmez. Pilot pedala basmaz ise algoritma 3. kısıma geçer. Bu bölümde sistemdeki tüm kontroller yapılır ve sistemde her şeyin düzgün çalıştığından emin olunur. Bir sorun olması durumunda o sorun çözülene kadar sistem güvenli modda kalmaya devam eder ve motor dönmez. Akım değerinin, sıcaklık değerinin ve sistemi başlatan “enable” tuşunun açık olması durumunda sistem güvenli moddan çıkar ve motor eskisi gibi dönmeye başlar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim41.png\" alt=\"Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma\"><figcaption>Şekil V1.3. Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma.</figcaption></figure></div><h4>4.8.Malzeme Listesi</h4><p>Dokümanda tablo olarak verilen ana bileşenler ve kartın teknik çıktıları aşağıda tablo formatında düzenlenmiştir. Sponsorlar tarafından karşılanan çok sayıdaki pasif komponent, konnektör ve yardımcı devre elemanı ayrı kalemler yerine tasarım bütünlüğü içinde değerlendirilmiştir.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Komponent</th><th>Görev / Açıklama</th><th>Referans</th><th>Adet</th></tr></thead><tbody><tr><td>TL783</td><td>Yüksek gerilim ayarlanabilir regülatör</td><td>VR1</td><td>1</td></tr><tr><td>173950336</td><td>4.75-36 V giriş, 3.3 V çıkış, 0.5 A çıkış</td><td>U2</td><td>1</td></tr><tr><td>173010578</td><td>8-28 V giriş, 5 V çıkış, 1 A çıkış</td><td>U1</td><td>1</td></tr><tr><td>IXTH200N10T</td><td>100 V N-kanal MOSFET, yüksek akım güç anahtarı</td><td>Q1-Q12</td><td>12</td></tr><tr><td>B0505S-1WR3</td><td>İzole DC/DC dönüştürücü modül</td><td>PS1-PS3</td><td>3</td></tr><tr><td>STM32F446RET6</td><td>ARM Cortex-M4 tabanlı ana kontrolcü</td><td>U3</td><td>1</td></tr><tr><td>LM2596HV</td><td>3 A düşürücü voltaj regülatörü</td><td>IC4</td><td>1</td></tr><tr><td>IRS21867S</td><td>Yüksek ve düşük taraf MOSFET sürücü</td><td>IC1-IC3</td><td>3</td></tr><tr><td>INA229</td><td>85 V, 20-bit hassas akım/gerilim/güç ölçüm entegresi</td><td>U4</td><td>1</td></tr></tbody></table></div><p>Takım tarafından tasarlanan ve prototiplenen motor sürücü kartının temel teknik özellikleri aşağıdaki tabloda özetlenmiştir.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Özellik</th><th>Değer / Açıklama</th></tr></thead><tbody><tr><td>Anahtar eleman</td><td>IXTH200N10T N-kanal MOSFET</td></tr><tr><td>Sürücü entegresi</td><td>IRS2186 / IRS21867S yüksek ve düşük taraf MOSFET sürücü</td></tr><tr><td>Kontrolcü</td><td>STM32F446RET6, ARM Cortex-M4, 180 MHz</td></tr><tr><td>Kontrol yaklaşımı</td><td>Kapalı döngü, Hall sensörü geri beslemeli BLDC komütasyon ve PWM kontrol</td></tr><tr><td>Koruma</td><td>80 A sigorta, INA229 tabanlı akım/sıcaklık izleme, güvenli mod algoritması</td></tr><tr><td>Güç / Gerilim / Akım</td><td>2.5 kW / 48 V / 50 A; anlık yüksek akım dayanımı dikkate alınmış tasarım</td></tr><tr><td>PCB / kutu</td><td>200 x 150 mm PCB; 120 x 250 x 250 mm donanım kutusu yaklaşımı</td></tr><tr><td>Raporlanan verim</td><td>%90</td></tr></tbody></table></div>",
          "achievements": "<h4>Malzeme Listesi ve Teknik Çıktılar</h4><p>Word dokümanında tablo halinde verilen malzeme listesi ve prototip teknik çıktıları aşağıda siteye okunabilir tablo formatında aktarılmıştır.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Komponent</th><th>Görev / Açıklama</th><th>Referans</th><th>Adet</th></tr></thead><tbody><tr><td>TL783</td><td>Yüksek gerilim ayarlanabilir regülatör</td><td>VR1</td><td>1</td></tr><tr><td>173950336</td><td>4.75-36 V giriş, 3.3 V çıkış, 0.5 A çıkış</td><td>U2</td><td>1</td></tr><tr><td>173010578</td><td>8-28 V giriş, 5 V çıkış, 1 A çıkış</td><td>U1</td><td>1</td></tr><tr><td>IXTH200N10T</td><td>100 V N-kanal MOSFET, yüksek akım güç anahtarı</td><td>Q1-Q12</td><td>12</td></tr><tr><td>B0505S-1WR3</td><td>İzole DC/DC dönüştürücü modül</td><td>PS1-PS3</td><td>3</td></tr><tr><td>STM32F446RET6</td><td>ARM Cortex-M4 tabanlı ana kontrolcü</td><td>U3</td><td>1</td></tr><tr><td>LM2596HV</td><td>3 A düşürücü voltaj regülatörü</td><td>IC4</td><td>1</td></tr><tr><td>IRS21867S</td><td>Yüksek ve düşük taraf MOSFET sürücü</td><td>IC1-IC3</td><td>3</td></tr><tr><td>INA229</td><td>85 V, 20-bit hassas akım/gerilim/güç ölçüm entegresi</td><td>U4</td><td>1</td></tr></tbody></table></div><p>Bu teknik özet, Vol.1 kartının güç elektroniği, kontrol, koruma ve mekanik kutulama kararlarını tek bakışta gösterir.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Özellik</th><th>Değer / Açıklama</th></tr></thead><tbody><tr><td>Anahtar eleman</td><td>IXTH200N10T N-kanal MOSFET</td></tr><tr><td>Sürücü entegresi</td><td>IRS2186 / IRS21867S yüksek ve düşük taraf MOSFET sürücü</td></tr><tr><td>Kontrolcü</td><td>STM32F446RET6, ARM Cortex-M4, 180 MHz</td></tr><tr><td>Kontrol yaklaşımı</td><td>Kapalı döngü, Hall sensörü geri beslemeli BLDC komütasyon ve PWM kontrol</td></tr><tr><td>Koruma</td><td>80 A sigorta, INA229 tabanlı akım/sıcaklık izleme, güvenli mod algoritması</td></tr><tr><td>Güç / Gerilim / Akım</td><td>2.5 kW / 48 V / 50 A; anlık yüksek akım dayanımı dikkate alınmış tasarım</td></tr><tr><td>PCB / kutu</td><td>200 x 150 mm PCB; 120 x 250 x 250 mm donanım kutusu yaklaşımı</td></tr><tr><td>Raporlanan verim</td><td>%90</td></tr></tbody></table></div>",
          "detailImage": "vol1/Resim29.png",
          "teamIds": [
                    "team-hidroana"
          ],
          "scientificMerit": "<p>Kontrol tarafında amaç, yalnızca MOSFET kapılarına PWM üretmek değil; motorun yönünü, hızını, dakikadaki devir sayısını, akımını ve sıcaklığını izleyerek güvenli çalışma durumunu yazılımsal olarak yönetmektir. Bu nedenle STM32F446RET6, INA229 ölçüm entegresi, Hall sensörü konum bilgisi ve güvenli mod mantığı aynı kontrol mimarisinde birleştirilmiştir.</p><h4>4.2.Kontrol Algoritması</h4><strong class=\"method-subtitle\">Sürücü kontrolünün konsepti ve türü (analog/dijital kontrol, FOC, DTC, V/f kontrol, vb.)</strong><br><p>Sürücünün kontrolü STM32F446RET6 işlemcisi tarafından yapılmaktadır. İşlemci STM32CUBE IDE isimli program vasıtasıyla kodlanmıştır. STM32F446RET6’nın tercih edilmesinin sebebi 180MHz gibi yüksek bir hızda çalışmasıdır.</p><p>Algoritmaya ilk olarak, sürücülere PWM sinyalleri sağlayıp motoru döndürerek başlanmıştır. Algoritma temel anlamda motorun istenilen yönde ve hızda dönmesi, hızı ve sıcaklığı hesaplaması, yüksek akım ve sıcaklık koruması gibi gerekli güvenlik önlemlerinin alınması işlemlerini gerçekleştirmek üzere tasarlanmıştır. Kontrolcü üzerinde, akım, voltaj, sıcaklık ve güç değerlerini okumakta olan Texas Instruments’in INA229 entegresi bulunmaktadır. INA229 ile STM32F446RET6 SPI haberleşme protokolü kullanarak haberleşmektedir.</p><strong class=\"method-subtitle\">PWM sinyallerinin oluşturulduğu algoritma</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim6.png\" alt=\"PWM sinyallerinin oluşturulduğu algoritma\"><figcaption>Şekil V1.1. PWM sinyallerinin oluşturulduğu algoritma.</figcaption></figure></div><p>Bu algoritma, motorun istenilen fazlarına sinyal verilmesini sağlar. A_H,…,C_H olarak belirtilen kısımlar yüksek taraflara PWM sinyallerinin verildiği kısımlardır. Bu kısımlara 0 ile 100 arasında bir değer girilir. Bu değere görev döngüsü denmektedir. A_L,…,C_L olarak belirtilen kısımlar düşük taraflara verilen voltajı belirler. Bu kısımların 1 olması durumunda gerekli voltaj sağlanır ve anahtarlama yapılmış olur. 0 olması durumunda voltaj verilmez ve anahtarlama yapılmaz.</p><strong class=\"method-subtitle\">Motorun saat yönünün tersine dönmesini sağlayan algoritma</strong><br><p>Bu algoritma motorun saat yönünün tersine dönmesini sağlar. Başlangıçta yer alan fonksiyon pedaldan gelen değere göre bir görev döngüsü değeri belirler. Bu değer 0 ile 100 arasındadır ve motorun ne kadar hızlı döneceğini belirler. “motor_state” değişkeni, motorun o anki konumunu söyleyen bir değişkendir. Algoritma içerisinde motorun anlık konumuna göre A,B veya C fazlarının yüksek veya düşük taraflarına gerekli sinyal ve voltaj gönderilir. Fazlara voltaj uygulandıkça motor dönmeye başlar ve motor döndükçe “motor_state” değişkeni motorun anlık konumuna göre değişir. Bu böyle devam eder ve motor saat yönünün tersinde dönmeye başlar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim7.png\" alt=\"Motorun saat yönünün tersine dönmesini sağlayan algoritma\"><figcaption>Şekil V1.2. Motorun saat yönünün tersine dönmesini sağlayan algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Dakikadaki devir sayısını hesaplayan algoritma</strong><br><p>Bu algoritma, sistemin başladığı andan itibaren dakikadaki devir sayısını hesaplamaktadır. Bunun için motorun konumu bilinmelidir ve motorun anlık konumu, motorda bulunan Hall sensörleri tarafından gelen bilgiler ile belirlenir. Algoritma temelde, motorun bir tam tur attığı zamanı hesaplamaktadır. Algoritmada ilk olarak motorun anlık konumu hesaplanır. Bu değer kaydedilir. Daha sonrasında zaman ilerledikçe motorun yeni konumu ile eski konumu farklı mı diye kontrol edilir. Farklı olması durumunda bu işlem böyle 6 defa devam eder. 6 defa devam etmesinin sebebi ise, motorun içinde bulunan Hall sensörlerinin verdiği değerlere göre, motorun yalnızca 6 farklı konumda bulunabileceğidir. 6. işlemin sonunda aradan geçen zaman işlemcinin saatini kullanarak hesaplanır. Süre mikro saniye cinsinden hesaplanır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim8.png\" alt=\"Dakikadaki devir sayısını hesaplayan algoritma\"><figcaption>Şekil V1.3. Dakikadaki devir sayısını hesaplayan algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Kontrol Blok Şeması</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim9.png\" alt=\"Kontrol Blok Şeması\"><figcaption>Şekil V1.4. Kontrol Blok Şeması.</figcaption></figure></div><h4>4.3. Simülasyon Calışmaları</h4><strong class=\"method-subtitle\">Simülasyon parametreleri (örnekleme zamanı, çözünürlük zamanı, vb.)</strong><br><p>Simülasyon çalışmalarında Proteus yazılımı kullanılmış olup. Motora giden faz beslemelerinin simüle edilmiş hali aşağıdaki görselde MOSFET sürücü devre olarak yapılmıştır.</p><p>Örnekleme zamanı, simülasyonun doğruluğunu ve performansını etkileyen önemli bir parametredir. Kontrol algoritmasının çalışması için yeterince küçük bir örnekleme zamanı secilmistir.</p><p>Mikrodenetleyici tabanlı kontrol: 100 µs - 1 ms (10 kHz - 1 kHz)</p><p>Yüksek hassasiyetli kontrol: 10 µs - 100 µs (100 kHz - 10 kHz)</p><p>Çözünürlük zamanı, simülasyonun zaman adımının ne kadar küçük olacağını belirler. Daha küçük zaman adımları daha hassas sonuçlar sağlar ancak simülasyon süresini uzatır. Bu, örnekleme zamanının 10-100 katı kadar küçük bir değer seçilerek belirlenmiştir.</p><p>Yüksek çözünürlük: 1 µs - 10 µs (1 MHz - 100 kHz)</p><p>Düşük çözünürlük: 10 µs - 100 µs (100 kHz - 10 kHz)</p><p> Örnekleme Zamanı: 0.001 saniye (1ms)</p><p> Çözünürlük Zamanı: 0.0001 saniye (0.1ms)</p><p> Simülasyon Süresi: 10 saniye</p><p> Başlangıç Hızı: 0 RPM</p><p> Yük Ataleti: 0.01 kg·m²</p><p> Zaman Adımları: 0.0001 saniye (0.1ms)</p><strong class=\"method-subtitle\">Şematik çizim</strong><br><strong class=\"method-subtitle\">Half Bridge MOSFET Katmanı</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim10.png\" alt=\"Half Bridge MOSFET Katmanı\"><figcaption>Şekil V1.5. Half Bridge MOSFET Katmanı.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim11.png\" alt=\"Half Bridge MOSFET Katmanı\"><figcaption>Şekil V1.6. Half Bridge MOSFET Katmanı.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim12.png\" alt=\"Half Bridge MOSFET Katmanı\"><figcaption>Şekil V1.7. Half Bridge MOSFET Katmanı.</figcaption></figure></div><p>Yukarıdaki görsellerde görünen MOSFET blokları motor sürücünün güç çıkışı yani motorun üç faz besleme çıkışlarıdır. A High, B High, C High ve A Low, Low,C Low olmak üzere altı farklı çıkış vardır. Motor konumuna göre STM32F446RET6 kontrolcüsünden gerekli giriş sinyalleri alınarak MOSFET sürücülerine, ordan da MOSFET’ lere iletilir. Bu sinyallere göre MOSFET’ler iletime geçer veya iletimi keser.</p><strong class=\"method-subtitle\">Ana Güç Kapasitörleri</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim13.png\" alt=\"Ana Güç Kapasitörleri\"><figcaption>Şekil V1.8. Ana Güç Kapasitörleri.</figcaption></figure></div><p>DC-link kondansatörleri, motor sürücüsünün performansını, verimliliğini ve güvenilirliğini artırmada kritik bir rol oynar. Gerilim dalgalanmalarını azaltarak, enerji depolayarak, gerilim dengeleyerek, EMI/RFI filtreleyerek ve ısı yönetimini iyileştirerek motor sürücüsünün daha stabil, verimli ve uzun ömürlü olmasını sağlarlar.</p><strong class=\"method-subtitle\">+48 Vin / +45 Vout TL783</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim14.png\" alt=\"+48 Vin / +45 Vout TL783\"><figcaption>Şekil V1.9. +48 Vin / +45 Vout TL783.</figcaption></figure></div><p>TL783, yüksek giriş gerilimlerinden düşük çıkış gerilimlerine sabit bir şekilde regülasyon sağlamak için kullanılan güvenilir ve çok yönlü bir voltaj regülatörüdür. Geniş voltaj aralığı, ayarlanabilir çıkış gerilimi ve koruma özellikleri sayesinde kartta regülatör kısmında yer almaktadır.</p><strong class=\"method-subtitle\">+45 Vin / +15 Vout LM2596HV</strong><br><p>LM2596HV, yüksek giriş voltajlarını düşük çıkış voltajlarına verimli bir şekilde düşüren voltaj regülatörüdür. Geniş giriş voltaj aralığı, ayarlanabilir çıkış voltajı, yüksek çıkış akımı ve koruma özelliklerinden dolayı +15V gerilim elde etmek için bu regülatörü kullanılmıştır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim15.png\" alt=\"+45 Vin / +15 Vout LM2596HV\"><figcaption>Şekil V1.10. +45 Vin / +15 Vout LM2596HV.</figcaption></figure></div><strong class=\"method-subtitle\">+15 Vin / +5 Vout WPME-FDSM</strong><br><p>WPME-FDSM, geniş giriş voltaj aralığı (8V- 28V) ve sabit 5V çıkış voltajı ile çeşitli elektronik uygulamalarda kullanılabilen verimli ve güvenilir bir voltaj regülatörüdür. THT montaj tekniği ve SIP-3 form faktörü sayesinde kompakt ve dayanıklı bir yapıya sahiptir. Maksimum 1A çıkış akımı sağlayarak +3.3V regülatörü için güvenli bir çalışma ortamı sunar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim16.png\" alt=\"+15 Vin / +5 Vout WPME-FDSM\"><figcaption>Şekil V1.11. +15 Vin / +5 Vout WPME-FDSM.</figcaption></figure></div><strong class=\"method-subtitle\">+5 Vin / +3.3 Vout WPME-FDSM</strong><br><p>THT montaj tekniği ve SIP-3 form faktörü sayesinde kompakt ve dayanıklı bir yapıya sahiptir. STM32 mikrokontrolcu için gereken 3.3 V gerilim değerini mümkün olan en az gürültü ile sağlamaktadır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim18.png\" alt=\"+5 Vin / +3.3 Vout WPME-FDSM\"><figcaption>Şekil V1.12. +5 Vin / +3.3 Vout WPME-FDSM.</figcaption></figure></div><strong class=\"method-subtitle\">Izole +15 Vin / +15 Vout B0505S-1WR3</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim19.png\" alt=\"Izole +15 Vin / +15 Vout B0505S-1WR3\"><figcaption>Şekil V1.13. Izole +15 Vin / +15 Vout B0505S-1WR3.</figcaption></figure></div><p>Bootstrap devresi, bir güç anahtarlama devresindeki yüksek taraf sürücüsünün (high-side driver) kapı (gate) voltajını sağlamak için kullanılmıştır. Bootstrap kondansatörü, bu devrede kullanılan ana bileşenlerden biridir ve yüksek taraf sürücüsünün çalışması için gerekli olan voltajı geçici olarak depolar. Bu kondansatör, düşük taraf anahtarlama transistörünün açık olduğu sürede şarj olur ve daha sonra yüksek taraf transistörünün kapısını sürmek için bu depolanan enerjiyi kullanır. Fakat bazı ekstrem koşullarda fazla yük çekmesi sonucunda anahtarlama elemanını sürecek kapasitör yeterli gerilimi sağlamayabilir. Bu durumu önlemek amacı ile, kondansatöre bağlı izole DA/DA dönüştürücü kullanılmasına karar verilmiştir.</p><strong class=\"method-subtitle\">Hall Efekt Sensörleri</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim20.png\" alt=\"Hall Efekt Sensörleri\"><figcaption>Şekil V1.14. Hall Efekt Sensörleri.</figcaption></figure></div><strong class=\"method-subtitle\">Güç ve Kullanıcı Ledleri</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim21.png\" alt=\"Güç ve Kullanıcı Ledleri\"><figcaption>Şekil V1.15. Güç ve Kullanıcı Ledleri.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim22.png\" alt=\"Güç ve Kullanıcı Ledleri\"><figcaption>Şekil V1.16. Güç ve Kullanıcı Ledleri.</figcaption></figure></div><strong class=\"method-subtitle\">STM32F446RET6</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim23.png\" alt=\"STM32F446RET6\"><figcaption>Şekil V1.17. STM32F446RET6.</figcaption></figure></div><strong class=\"method-subtitle\">Simülasyon adımları</strong><br><strong class=\"method-subtitle\">MOSFET Kapı Sinyali</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim24.jpg\" alt=\"MOSFET Kapı Sinyali\"><figcaption>Şekil V1.18. MOSFET Kapı Sinyali.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim25.png\" alt=\"MOSFET Kapı Sinyali\"><figcaption>Şekil V1.19. MOSFET Kapı Sinyali.</figcaption></figure></div><p>PWM sinyali, MOSFET'in anahtarlama döngüsünü belirler. N-kanallı MOSFET'lerde genellikle gate terminaline yüksek bir voltaj uygulanarak MOSFET açılır. Yani, ne kadar süreyle MOSFET açık (iletim durumunda) olacak ve ne kadar süreyle kapalı (kesim durumunda) olacağı, gerilimin uygulanma süresine bağlıdır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim26.png\" alt=\"MOSFET Kapı Sinyali\"><figcaption>Şekil V1.20. MOSFET Kapı Sinyali.</figcaption></figure></div><strong class=\"method-subtitle\">48 V / 15 V Buck Converter</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim27.png\" alt=\"48 V / 15 V Buck Converter\"><figcaption>Şekil V1.21. 48 V / 15 V Buck Converter.</figcaption></figure></div><strong class=\"method-subtitle\">15 / 5V DA-DA Voltaj Düşürücü</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim28.png\" alt=\"15 / 5V DA-DA Voltaj Düşürücü\"><figcaption>Şekil V1.22. 15 / 5V DA-DA Voltaj Düşürücü.</figcaption></figure></div><p>Giriş gerilimi anahtarlama transistorünün kontrolü ile endüktöre iletilir. Bu transistor, genellikle bir PWM sinyali ile sürülerek açılıp kapanır. Anahtarlama sırasında, endüktör üzerinde bir manyetik alan oluşturulur. Bu manyetik alan, endüktörde depolanan enerjiyi temsil eder. Endüktör üzerinde depolanan manyetik enerji, anahtarlama transistorünün kapalı olduğu zamanlarda çıkış devresine aktarılır. Endüktör üzerinde oluşan manyetik alanın bozulmasıyla (anahtarlama ile), endüktörden çıkan enerji, çıkış gerilimini oluşturur.</p>"
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
            "title": "HAVAALANLARI İÇİN DERİN ÖĞRENME TABANLI KUŞ TESPİT SİSTEMİ",
            "category": "gomulu",
            "summary": "Havaalanlarında kuş çarpması riskini azaltmak için geliştirilen bu TÜBİTAK 2209-A araştırma projesinde, pist ve havaalanı çevresindeki kuş hareketlerini görüntü tabanlı olarak algılayabilecek bir derin öğrenme hattı kuruldu. YOLOv8n modeli kullanılarak kuşların görüntü içinde tespit edilmesi, tür seviyesinde sınıflandırılması ve güven değeriyle birlikte yorumlanması hedeflendi. Çalışma; veri seti hazırlama, Roboflow tabanlı etiketleme, augmentation, model eğitimi ve performans doğrulama adımlarını kapsayan uçtan uca bir yapay zeka uygulaması olarak geliştirildi. Elde edilen yaklaşım, radar tabanlı sistemlerin sağlayamadığı görsel tür bilgisiyle havaalanı erken ikaz altyapılarını destekleyebilecek bir karar destek katmanı sunmaktadır.",
            "description": "Kuş çarpmalarının uçuş emniyeti, operasyon sürekliliği ve bakım maliyetleri üzerindeki etkisini azaltmak amacıyla geliştirilen bu çalışmada, radar tabanlı sistemlerin tür, renk, boyut ve tekil kuş takibi konusundaki sınırlamalarını tamamlayacak görüntü tabanlı bir derin öğrenme hattı tasarlanmıştır. Proje önerisi YOLOv8 ve MobileNetV2 entegrasyonunu hedeflerken, tez çalışmasında Roboflow ile hazırlanan veri seti üzerinde YOLOv8n modeli eğitilmiş, performans çıktıları precision, recall, F1 ve mAP metrikleriyle değerlendirilmiştir.",
            "image": "bird-detection-airport-cover.png",
            "detailImage": "bird-detection-airport-cover.png",
            "tags": [
                  "YOLOv8n",
                  "Roboflow",
                  "Python",
                  "Derin Öğrenme",
                  "TÜBİTAK 2209-A"
            ],
            "specs": [
                  {
                        "name": "Nesne Tespit Modeli",
                        "value": "YOLOv8n"
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
                  },
                  {
                        "name": "Proje No",
                        "value": "1919B012323737"
                  },
                  {
                        "name": "Ekip",
                        "value": "Onur Can DURUKAN, Hakan HAMİTOĞLU, Elif Dila GÖNEN, Ahmet Soner GÜLEÇ"
                  }
            ],
            "overview": "<p>Bu proje, havaalanları ve uçuş çevresinde kuş çarpması riskini azaltmak için geliştirilen derin öğrenme tabanlı bir kuş tespit sistemidir. TÜBİTAK 2209-A desteğiyle yürütülen çalışmanın çıkış noktası, kuş çarpmalarının yalnızca uçak gövdesi ve motorları için değil; pilot, yolcu, operasyon sürekliliği ve bakım maliyetleri için de ciddi bir emniyet problemi oluşturmasıdır. Proje dosyasında ve tezde kullanılan verilere göre kuş çarpmaları havacılık sektöründe yıllık 1,21 milyar doların üzerinde maliyete yol açmakta; ICAO IBIS verileri 2016-2021 arasında 273.343 kuş çarpması olayının raporlandığını göstermektedir.</p><p>Çalışmanın temel problemi, mevcut radar tabanlı sistemlerin kuşların türünü, rengini, tahmini boyutunu, sayısını ve tekil davranışını ayrıntılı biçimde ifade etmekte sınırlı kalmasıdır. Radar sistemleri mesafe ve hava koşulları bakımından avantajlı olsa da küçük hedefleri ayrıştırma, tek başına uçan kuşları takip etme ve tür seviyesinde zarar tahmini üretme noktasında yetersizdir. Proje önerisinde aktarılan literatür değerlendirmesinde sürü takibinde başarının yaklaşık yüzde 40-80 aralığında, tekil kuş takibinde ise yaklaşık yüzde 30 seviyesinde kalabildiği vurgulanmıştır.</p><p>Bu nedenle proje, radar yaklaşımının yerine yalnızca yeni bir sistem koymayı değil; görüntü tabanlı derin öğrenme çıktılarıyla radarın sağlayamadığı ayrıntıyı tamamlamayı hedeflemiştir. Kamera veya çevre görüntülerinden kuş tespiti yapabilen, tespit edilen kuşu tür seviyesinde yorumlayabilen ve ileride radar uzaklık bilgisiyle birleştirildiğinde daha detaylı ikaz/zarar tahmini üretebilecek bir karar destek hattı tasarlanmıştır.</p>",
            "scientificMerit": "<p>Projenin özgün değeri, kuş çarpması problemini yalnızca 'hedef var/yok' yaklaşımıyla değil, görüntü üzerinden tür, konum, yoğunluk ve risk yorumuna taşımaya çalışmasıdır. Proje önerisinde araştırma sorusu 'Kuş çarpmalarını azaltmak için görüntü tabanlı bir kuş tanıma sistemi nasıl geliştirilebilir?' şeklinde kurulmuş; YOLOv8 ve MobileNetV2 gibi modellerin kuş tespiti ve tür belirleme başarısı, havacılık güvenliğine sağlayabileceği katkı üzerinden ele alınmıştır.</p><p>Başlangıç tasarımında iki aşamalı bir mimari öngörülmüştür: YOLOv8 ile görüntüde kuş nesnesinin hızlı tespiti, ardından yüzde 50 güven eşiğinin üzerinde algılanan kuşların MobileNetV2 benzeri hafif bir sınıflandırıcıya aktarılması. MobileNetV2 seçimi; düşük hesaplama maliyeti, düşük bellek kullanımı, mobil/gömülü sistemlere uygunluk ve hızlı sınıflandırma avantajları nedeniyle değerlendirilmiştir. Tez uygulamasında ise veri setinin ölçeği ve gerçek zamanlı çalışma beklentisi dikkate alınarak YOLOv8'in en hafif alt modeli olan YOLOv8n üzerinden eğitim ve test hattı kurulmuştur.</p>",
            "architecture": "<p>Sistem mimarisi veri toplama, veri temizleme, etiketleme, veri artırma, YOLOv8 formatına dışa aktarım, model eğitimi, çıkarım testi ve sonuç değerlendirme adımlarından oluşur. Proje önerisinde İstanbul Havalimanı çevresinde görülen kuş türleri, İGA çevre/sürdürülebilirlik çalışmaları, FAA Wildlife Strike verileri ve açık veri kaynakları dikkate alınarak öncelikli tür skalasının belirlenmesi hedeflenmiştir. Tez uygulamasında seçilen kuş türleri Martı (Seagull), Leylek (Stork), Kartal (Eagle), Doğan (Falcon), Güvercin (Pigeon), Baykuş (Owl) ve Karga (Crow) olarak belirlenmiştir.</p><p>Veri seti Roboflow üzerinde oluşturulmuştur. Bird_Detection adlı object detection projesine her tür için yaklaşık 200 görsel yüklenmiş, görseller tür bazında organize edilmiş ve her kuş nesnesi bounding box ile etiketlenmiştir. Etiketleme sürecinde doğru sınıf ataması, nesne sınırlarının net çizilmesi ve görseldeki tüm hedef kuşların işaretlenmesi temel kalite kriterleri olarak kullanılmıştır. Hatalı etiketlenmiş verilerin modelin yanlış pozitif ve yanlış negatif oranını artırabileceği dikkate alınarak veri temizliği ve etiket tutarlılığı özellikle önemsenmiştir.</p><p>Veri setinin saha koşullarına daha dayanıklı hale gelmesi için augmentation uygulanmıştır. Görseller saat yönünde ve ters yönde 90 derece döndürülmüş, ayrıca -15 ile +15 derece arasında rastgele döndürme yapılmıştır. Parlaklık değerleri yüzde 25 artırılıp azaltılarak farklı ışık koşulları temsil edilmiş, 1.25 kata kadar blur uygulanarak düşük kaliteli veya bulanık kamera görüntüleri simüle edilmiş, görsellerin yüzde 5'ine kadar rastgele gürültü eklenerek sensör ve çevre kaynaklı bozulmalara karşı dayanıklılık hedeflenmiştir.</p><p>İyileştirilen veri seti Roboflow üzerinden YOLOv8 PyTorch formatında dışa aktarılmıştır. Çıktı yapısı train, valid ve test dizinlerinden oluşmuş; veri seti yaklaşık yüzde 70 eğitim, yüzde 20 doğrulama ve yüzde 10 test olacak şekilde bölünmüştür. Bu yapı, modelin yalnızca eğitim verisini ezberlemesini değil, doğrulama ve test verilerinde de genelleme kabiliyetinin ölçülmesini sağlamıştır.</p><p>Model eğitimi Anaconda ortamında Ultralytics YOLOv8 ve PyTorch ekosistemiyle yürütülmüştür. Python 3.8 tabanlı ortam hazırlanmış, ultralytics paketi kurulmuş ve Roboflow tarafından üretilen data.yaml dosyası üzerinden eğitim başlatılmıştır. Kullanılan model önceden eğitilmiş yolov8n.pt nano modelidir; eğitim 100 epoch ve 640x640 giriş görüntü boyutu mantığıyla kurgulanmıştır. Eğitim sırasında epoch, loss, mAP ve süre değerleri izlenmiş; sonuçlar YOLO eğitim çıktıları üzerinden değerlendirilmiştir.</p><p>Eğitim tamamlandıktan sonra model inference aşamasında test görselleri üzerinde denenmiştir. Tezde örnek çıktılar olarak leylek için 0.95, martı için 0.89, karga için 0.80 ve doğan için 0.86 güven değerleriyle doğru tahminler raporlanmıştır. Bu örnekler, modelin farklı kuş türlerini ayırt edebildiğini ve havaalanı çevresinde erken ikaz sistemine girdi sağlayabilecek görsel tespit çıktıları üretebildiğini göstermiştir.</p><h4>Yapay Zeka ile Yaklaşım</h4><p>Tezde 2. bölümden itibaren proje, geleneksel kuş çarpması önleme yöntemlerinin yanına yapay zeka tabanlı bir görsel algılama katmanı ekleme fikri üzerinden ilerler. İnsan gözünün yorumlama, örüntü tanıma ve karar verme kabiliyetinden ilham alan yapay zeka yaklaşımı; görüntüdeki kuşu yalnızca fark etmekle kalmayıp türünü, konumunu ve potansiyel riskini yorumlayabilecek bir sistem altyapısı kurmayı hedefler. Bu nedenle model seçiminde gerçek zamanlı çalışma, küçük nesne tespiti, farklı kuş türlerini ayırabilme ve saha koşullarına uyum sağlama kriterleri öne çıkarılmıştır.</p><p>Radar sistemleri havaalanı çevresinde menzil ve hava koşullarına dayanıklılık açısından avantajlıdır; fakat tür ayrımı, renk/biçim bilgisi, tekil kuş davranışı ve görsel doğrulama konusunda sınırlı kalabilir. Görüntü tabanlı derin öğrenme yaklaşımı bu boşluğu tamamlamak için seçilmiştir. Kamera görüntüsü üzerinden çalışan YOLO mimarisi, sahnede birden fazla nesneyi tek geçişte bulabildiği için pist çevresi gibi hızlı karar gerektiren ortamlarda uygun bir aday olarak değerlendirilmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-yolo-detection-overview.png\" alt=\"YOLO kuş tespiti örneği\"><figcaption>Şekil 2.1. YOLO ile kuş tespiti örneği.</figcaption></figure></div><p>Bu görsel, sistemin beklenen nihai davranışını temsil eder: model görüntüdeki kuşları sınırlayıcı kutularla işaretler ve her tespit için güven değeri üretir. Bu çıktı, havaalanı çevresindeki kuş hareketlerinin operatöre veya ileride otomatik ikaz sistemine aktarılabileceği karar verisi haline gelir. Tezde YOLO'nun tercih edilme nedeni de burada ortaya çıkar; model görüntüyü bölgelere ayırıp nesne konumu ve sınıf bilgisini birlikte ürettiği için kuş tespiti gibi hız-duyarlılık dengesinin önemli olduğu problemlerde kullanılabilir.</p><h4>CNN ve YOLO Mantığı</h4><p>Tezde CNN yapısı, görüntülerden otomatik özellik çıkarabilen katmanlı bir derin öğrenme mimarisi olarak açıklanır. Konvolüsyon katmanları kenar, doku, şekil ve parça ilişkilerini öğrenirken; pooling katmanları gereksiz ayrıntıyı azaltır ve modelin daha genel örüntülerle çalışmasını sağlar. Bu yapı kuş tespiti probleminde önemlidir; çünkü farklı kuş türleri renk, kanat formu, gövde oranı ve duruş bakımından birbirine benzeyebilir. Modelin yalnızca piksel ezberlemesi değil, kuşa ait ayırt edici görsel özellikleri öğrenmesi gerekir.</p><p>YOLO yaklaşımı bu CNN tabanlı özellik çıkarımını gerçek zamanlı nesne tespitiyle birleştirir. Görüntüyü tek seferde işler, hedef nesnenin sınıfını ve bounding box koordinatlarını aynı anda üretir. Bu nedenle iki aşamalı, daha yavaş tespit sistemlerine göre saha uygulamalarında daha pratik bir çözüm sunar. Tezde YOLOv8 ailesi içinde nano modelin seçilmesi, daha düşük hesaplama maliyeti ve hızlı çıkarım potansiyeli nedeniyle yapılmıştır; bu seçim havaalanı çevresinde ileride kamera veya gömülü donanım üzerinde çalışabilecek bir sistem fikriyle uyumludur.</p><h4>Roboflow Veri Hattı ve Etiketleme</h4><p>Veri seti oluşturma bölümünde Roboflow, görsellerin tek bir proje altında toplanması, sınıfların yönetilmesi, bounding box etiketlerinin hazırlanması ve YOLOv8 formatına dışa aktarım yapılması için kullanılmıştır. Bu araç, veri seti hazırlama sürecini yalnızca dosya toplama aşaması olmaktan çıkarıp izlenebilir bir makine öğrenmesi veri hattına dönüştürmüştür.</p><p>Veri hattında her görsel önce sınıf bilgisiyle düzenlenmiş, ardından kuş nesnesinin sınırları bounding box mantığıyla işaretlenmiştir. Bu aşama modelin hem konum hem de tür bilgisini öğrenmesini sağladığı için projenin en kritik kalite adımlarından biri olarak ele alınmıştır.</p><p>Veri seti farklı tür, açı, duruş ve arka plan koşullarını kapsayacak şekilde hazırlanmıştır. Augmentation adımında döndürme, parlaklık değişimi, bulanıklık ve gürültü ekleme gibi işlemler uygulanarak modelin yalnızca ideal görsellere değil, saha koşullarına daha yakın görüntülere de dayanıklı hale gelmesi hedeflenmiştir.</p><h4>YOLOv8 Eğitimi ve Çıkarım</h4><p>Veri seti Roboflow üzerinden YOLOv8 PyTorch formatında dışa aktarılmış, train/valid/test klasör yapısı ile eğitim sürecine hazır hale getirilmiştir. Eğitim ortamı Anaconda, Python, Ultralytics ve PyTorch üzerine kurulmuş; GPU desteği kullanılarak eğitim süresinin kısaltılması hedeflenmiştir. YOLOv8n modeli, önceden eğitilmiş ağırlıklar üzerinden başlatıldığı için sınırlı veriyle daha verimli öğrenme yapılmasına olanak sağlamıştır.</p><p>Bu aşamada modelin öğrenmesi yalnızca doğruluk metriğiyle değil; eğitim kayıpları, doğrulama başarımı ve inference çıktılarıyla takip edilmiştir. Eğitim tamamlandıktan sonra model test görselleri üzerinde çalıştırılmış ve farklı kuş türleri için güven değerleri üretilmiştir.</p><div class=\"project-figure-grid\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-falcon-inference.png\" alt=\"Doğan tahmin sonucu\"><figcaption>Şekil 2.8. Doğan sınıfı için 0.86 güven değerli tahmin.</figcaption></figure></div><p>Tahmin örnekleri, modelin yalnızca kuş varlığını değil, tür bilgisini de üretebildiğini göstermektedir. Kalan Doğan tahmin örneği, modelin farklı kuş formlarında tür bilgisini güven değeriyle birlikte üretebildiğini ve havaalanı kuş riski değerlendirmesinde kullanılabilecek bir temel sunduğunu gösterir. Bununla birlikte güven değerleri sınıflara göre değiştiği için operasyonel kullanımda alarm eşiğinin sabit değil, saha riskine göre ayarlanabilir olması gerekir.</p>",
            "subsystems": [
                  {
                        "title": "Veri Toplama ve Tür Önceliklendirme",
                        "desc": "İstanbul Havalimanı çevresi, FAA Wildlife Strike verileri ve açık görsel kaynakları üzerinden kuş türleri ve risk öncelikleri belirlendi."
                  },
                  {
                        "title": "Roboflow Etiketleme Hattı",
                        "desc": "Görseller Roboflow üzerinde etiketlendi, bounding box yapıları oluşturuldu, veri seti temizleme ve augmentation adımları uygulandı."
                  },
                  {
                        "title": "YOLOv8n Tespit Modeli",
                        "desc": "Hafif ve hızlı YOLOv8n modeli, kuş nesnelerini gerçek zamanlı tespit etmeye uygun temel derin öğrenme motoru olarak eğitildi."
                  },
                  {
                        "title": "İkaz ve Entegrasyon Mantığı",
                        "desc": "Görüntü tabanlı tespit çıktılarının ileride radar uzaklık bilgisi, kamera sistemi veya İHA entegrasyonu ile daha detaylı ikaz sistemine dönüştürülmesi hedeflendi."
                  }
            ],
            "analysis": "<p>Tezde model performansı karışıklık matrisi, precision-confidence eğrisi, recall-confidence eğrisi, precision-recall eğrisi, F1 eğrisi, etiket dağılımı ve genel eğitim sonuçları üzerinden değerlendirilmiştir. Karışıklık matrisi, modelin bazı türlerde güçlü ayrım yaptığını, bazı benzer türlerde ise karışma yaşadığını göstermiştir. Seagull sınıfında 99 örnek doğru sınıflandırılmış, 6 örnek Stork olarak karıştırılmıştır. Falcon sınıfında 29 doğru sınıflandırmaya karşılık 9 örnek Pigeon, 4 örnek Seagull olarak tahmin edilmiştir. Crow sınıfında 28 doğru tahmine karşılık yalnızca 1 yanlış sınıflandırma görülmüş, Pigeon sınıfında ise 34 doğru tahmin yanında Seagull ve Falcon ile karışmalar oluşmuştur.</p><p>Background sınıfında model yalnızca 7 örneği doğru tanımlayabilmiş ve bu sınıfta diğer kuş sınıflarıyla karışmalar yaşanmıştır. Bu sonuç, kuş tespit sistemlerinde yalnızca hedef tür görsellerinin değil, boş pist, gökyüzü, terminal çevresi, çim alan ve hareketli arka plan gibi negatif örneklerin de veri setinde güçlü şekilde temsil edilmesi gerektiğini göstermektedir. Havaalanı uygulamalarında yanlış pozitif ikazların operasyonu gereksiz meşgul etmemesi, yanlış negatiflerin ise gerçek kuş riskini kaçırmaması için bu denge kritik önemdedir.</p><p>Precision-confidence değerlendirmesinde modelin yüksek güven seviyelerinde çok isabetli sonuçlar verdiği görülmüştür. Tüm sınıfların ortalama eğrisi 0.973 güven seviyesinde yüzde 100 kesinliğe ulaşmıştır. Crow sınıfı yüksek güven değerlerinde güçlü performans göstermiş; Stork ve Owl sınıflarında düşük güven seviyelerinde daha zayıf kesinlik görülse de güven arttıkça belirgin iyileşme oluşmuştur. Bu sonuç, ikaz eşiğinin operasyonel senaryoya göre seçilmesi gerektiğini göstermektedir.</p><p>Recall-confidence değerlendirmesinde modelin düşük güven eşiklerinde pozitif örnekleri daha iyi yakaladığı, güven eşiği yükseldikçe recall değerinin düştüğü görülmüştür. Tüm sınıfların ortalaması için 0.97 recall seviyesi raporlanmıştır. Kuş çarpması gibi emniyet kritik bir problemde recall değerinin yüksek tutulması önemlidir; çünkü sistemin kuşu kaçırması, yanlış pozitif üretmesinden daha riskli sonuçlar doğurabilir.</p><p>Precision-recall grafiğinde Crow için 0.931, Eagle için 0.919 ve Owl için 0.945 gibi yüksek ortalama precision değerleri elde edilmiştir. Pigeon sınıfında 0.727 değeriyle daha düşük performans gözlenmiştir. Tüm sınıflar için ortalama precision-recall değeri 0.875 olarak verilmiştir. Bu değer, modelin genel olarak türleri kapsama ve doğru sınıflandırma konusunda başarılı bir temel sunduğunu; ancak türler arası benzerlik ve veri dengesizliği nedeniyle bazı sınıflarda iyileştirme gerektiğini göstermektedir.</p><p>F1 eğrisinde maksimum F1 skoru 0.78 seviyesine ulaşmış ve optimum güven eşiği yaklaşık 0.449 olarak yorumlanmıştır. Bu nokta, precision ve recall arasında en dengeli çalışma bölgesini temsil eder. Crow, Eagle ve Falcon gibi sınıflarda F1 eğrilerinin daha güçlü ve tutarlı olması, modelin bazı sınıflarda oldukça kararlı çalışabildiğini göstermiştir. Eşik optimizasyonu, havaalanı ikaz sisteminin hassasiyetini operasyonel ihtiyaca göre ayarlamak için önemli bir araçtır.</p><p>Genel eğitim sonuçlarında train/box_loss yaklaşık 1.4 seviyesinden 0.8 seviyesine düşmüş, train/cls_loss yaklaşık 3.5 seviyesinden 1'in altına inmiş, train/dfl_loss ise 1.7 seviyesinden yaklaşık 1.1 seviyesine gerilemiştir. Doğrulama kayıplarında eğitim kayıplarına paralel düşüş görülmesi, modelin yalnızca eğitim verisini ezberlemediğini ve doğrulama setinde de benzer performans gösterebildiğini düşündürmektedir. Precision değeri eğitim başında yaklaşık 0.3 iken son iterasyonlarda 0.8'in üzerine çıkmış, recall yaklaşık 0.3 seviyesinden 0.75 seviyesine ilerlemiştir. mAP50 yaklaşık 0.85'e, daha zorlu mAP50-95 metriği ise yaklaşık 0.60 seviyesine ulaşmıştır.</p><p>Sonuç olarak tez, geleneksel kuş çarpması önleme yaklaşımlarına ek olarak görüntü analizi ve yapay zeka tabanlı yeni bir yaklaşımın uygulanabilir olduğunu göstermiştir. YOLO mimarisi hedef nesneleri tespit etmekte başarılı sonuçlar üretmiş; daha iyi kamera sistemleri, daha büyük ve dengeli veri setleri, radar mesafe bilgisi ve eşik optimizasyonu ile bu yapının daha hafif, daha ucuz, daha az enerji tüketen ve bakım/işletme açısından verimli bir havaalanı kuş ikaz sistemine dönüşebileceği ortaya konmuştur.</p><div class=\"project-figure-grid\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-confusion-matrix.png\" alt=\"YOLOv8 karışıklık matrisi\"><figcaption>Şekil 4.1. Modelin sınıf bazlı karışıklık matrisi.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-precision-confidence.png\" alt=\"Precision-confidence eğrisi\"><figcaption>Şekil 4.2. Güven eşiğine göre kesinlik değişimi.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-recall-confidence.png\" alt=\"Recall-confidence eğrisi\"><figcaption>Şekil 4.3. Güven eşiğine göre duyarlılık değişimi.</figcaption></figure></div><p>Bu görseller sonuçların yalnızca tek bir başarı yüzdesinden ibaret olmadığını gösterir. Karışıklık matrisi hangi türlerin güçlü ayrıldığını, hangi türlerin birbirine karıştığını ortaya koyar. Precision-confidence eğrisi güven eşiği yükseldikçe modelin daha seçici hale geldiğini; recall-confidence eğrisi ise eşik yükseldikçe bazı gerçek kuşların kaçırılabileceğini gösterir. Havaalanı uygulamalarında bu denge önemlidir: düşük eşik daha fazla uyarı üretirken kuş kaçırma riskini azaltır, yüksek eşik yanlış alarmı azaltırken bazı hedefleri kaçırabilir.</p><div class=\"project-figure-grid\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-pr-curve.png\" alt=\"Precision-recall eğrisi\"><figcaption>Şekil 4.4. Precision-recall eğrisi.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-f1-curve.png\" alt=\"F1 eğrisi\"><figcaption>Şekil 4.5. F1-confidence eğrisi.</figcaption></figure></div><p>PR eğrisi modelin farklı sınıflarda kesinlik ve duyarlılık dengesini nasıl kurduğunu özetlerken, F1 eğrisi bu iki metriğin ortak dengesini verir. Tez sonuçlarında maksimum F1 değerinin yaklaşık 0.78 seviyesine ulaşması, modelin kuş türleri arasında anlamlı bir sınıflandırma kabiliyeti kazandığını gösterir. Eğitim sürecinde kutu kaybı, sınıflandırma kaybı ve DFL kaybının düşmesi; precision, recall ve mAP değerlerinin ise yükselmesi, modelin düzenli biçimde iyileştiğini destekler.</p>",
            "achievements": "<p>Proje, TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği kapsamında desteklenmiş ve 1919B012323737 proje numarasıyla yürütülmüştür. Proje önerisi aşamasında veri seti hazırlama, veri ön işleme, model eğitimi, optimizasyon/hiperparametre çalışmaları ve test iş paketleri tanımlanmış; tez aşamasında bu yapı YOLOv8n tabanlı uygulanabilir bir tespit modeline dönüştürülmüştür.</p><p>Çalışma, havacılık güvenliği alanında görüntü tabanlı yapay zeka sistemlerinin radar tabanlı erken uyarı yaklaşımlarını nasıl tamamlayabileceğini göstermiştir. Kişisel katkı açısından proje; veri hattı oluşturma, derin öğrenme modeli eğitme, performans metriklerini yorumlama ve havacılık emniyeti problemine mühendislik perspektifiyle yaklaşma deneyimi kazandırmıştır.</p>"
      },
      {
          "id": "project-5",
          "title": "INFLOBOT: Yapay Zeka Destekli Şişirilebilir Yumuşak MRO Robotu",
          "category": "arge",
          "summary": "Tulpar Tharros takımı kapsamında geliştirilen INFLOBOT, uçak yakıt tankları ve benzeri dar bakım alanlarında teknisyenin erişemediği bölgeleri incelemek için tasarlanmış yapay zeka destekli, şişirilebilir yumuşak robot konseptidir. Proje; aydınlatma, görüntüleme, CO2 ile yönlendirme, oksijen desteği ve hasar tespiti bileşenlerini tek bir bakım asistanında birleştirir. Amaç, MRO süreçlerinde zaman ve iş gücü kaybını azaltırken teknisyen güvenliğini, sürdürülebilirliği ve bakım doğruluğunu artırmaktır.",
          "description": "INFLOBOT; Turkish Airlines & Turkish Technic Design Hackathon, TEKNOFEST Girişimcilik ve sürdürülebilir havacılık çalışmalarında olgunlaştırılan, uçak yakıt tankı gibi kapalı ve karmaşık alanlarda muayene/bakım sürecini kolaylaştırmayı hedefleyen bir yumuşak robotik projesidir. Geleneksel sert robotlardan farklı olarak esnek, şişirilebilir ve bio-inspired bir gövde kurgusuna sahiptir. Kamera, sensör, LED aydınlatma, CO2 yönlendirme kanalları ve oksijen destek hattı ile teknisyene hem görüş hem de güvenli çalışma desteği sağlar.",
          "image": "inflobot-figures/images.jpg",
          "detailImage": "inflobot-figures/images.jpg",
          "teamIds": [
                    "team-tulpar-tharros"
          ],
          "tags": [
                    "Soft Robotics",
                    "Inflatable Robot",
                    "MRO Aviation",
                    "Teknofest",
                    "THY Design Hackathon"
          ],
          "specs": [
                    {
                              "name": "Kurum / Proje Takımı",
                              "value": "Tulpar Tharros Havacılık Topluluğu"
                    },
                    {
                              "name": "Destek Programları",
                              "value": "Turkish Airlines & Turkish Technic Design Hackathon 2023 ve TEKNOFEST Girişimcilik Yarışması"
                    },
                    {
                              "name": "Sanayi Bağlamı",
                              "value": "Uçak yakıt tanklarının detaylı kontrolü ve MRO süreçlerinde dar alan muayenesi"
                    },
                    {
                              "name": "Proje Rolüm",
                              "value": "Kurucu ekip üyesi; elektrik-elektronik, sistem mimarisi ve 3B kompresör destek ünitesi tasarımı"
                    },
                    {
                              "name": "Proje Ekibi",
                              "value": "Ahmet Soner GÜLEÇ, Özgür KURT, İltemir Taha BİNALİ, Sühan Göktuğ AYDEMİR, Bahadır SARIKARAMAN"
                    }
          ],
          "overview": "<p>INFLOBOT, Tulpar Tharros Havacılık Topluluğu kapsamında uçak yakıt tankları ve benzeri dar bakım hacimleri için geliştirilen yapay zeka destekli, şişirilebilir yumuşak robot konseptidir. Proje, havacılık bakım-onarım süreçlerinde sürdürülebilirliği yalnızca çevresel bir başlık olarak değil; daha verimli iş akışı, daha az bekleme süresi, daha düşük iş gücü kaybı ve daha güvenli bakım ortamı oluşturma hedefi olarak ele alır.</p><p>Takım olarak hem sektörel hem de akademik düzeyde havacılığın içinde bulunduğumuz için, sürdürülebilirliği mevcut yöntemleri tamamen yıkmak yerine iyi çalışan fakat yetersiz kalan bakım pratiklerini yenilemek ve geliştirmek olarak yorumladık. Bu bakış açısı UN SDG 8, 9 ve 12 hedefleriyle de ilişkilidir: sorumlu üretim, yenilikçi sanayi altyapısı ve ekonomik verimlilik aynı problem içinde birlikte düşünülmüştür.</p><p>Teknik geziler, staj deneyimleri ve araştırmalar sonucunda bakım süreçlerinde zamanın diğer tüm süreçleri etkileyen ana parametre olduğu görüldü. Base bakım, line bakım ve inspection süreçlerinde bazı dar alan kontrolleri uzun hazırlık, bekleme ve mola döngüleri oluşturarak verimi düşürmektedir. Bu nedenle TEI, THY/Turkish Technic, Pegasus ve benzeri havacılık bakım pratikleri incelenmiş; özellikle uçak yakıt tankı kontrolü, stabilizer görsel muayenesi, FPB/aviyonik kompartıman kontrolü ve boroskopik muayene gibi kaçınılmaz süreçler üzerinde durulmuştur.</p><p>INFLOBOT'un çıkış noktası, bu kaçınılmaz bakım süreçlerini daha güvenli ve daha verimli hale getirmektir. Proje; teknisyenin görüşünü ve erişimini artıran, dar alanlarda mekanik temas riskini azaltan, aydınlatma ve oksijen desteği sağlayabilen, kamera/sensör verisiyle hasar tespitini destekleyen soft robotics tabanlı bir MRO asistanı olarak kurgulanmıştır.</p>",
          "scientificMerit": "<p>Yakıt tankı bakımında tespit edilen temel problemler dört ana başlıkta toplanır: aydınlatma yetersizliği, tank boyutu ve erişilebilirlik, havalandırma zorunluluğu, maske kullanımı ve oksijen eksikliği. Bunlara ek olarak panik/hipoksi gibi acil durumlarda tahliye zorluğu, statik elektrik veya elektrik arkı kaynaklı patlama riski, bakım boyunca verilmesi gereken molalar ve tamamen otonom robotlarda hata tespiti yapılsa bile bakım uygulaması için tekrar teknisyene ihtiyaç duyulması gibi ek sorunlar da saha gözlemlerinde öne çıkmıştır.</p><p>Aydınlatma problemi, yakıt tankı içinde yerleşik ışık bulunmaması ve bataryalı aydınlatmaların yetersiz kalmasıyla başlar. Dışarıdan çekilen kablolu aydınlatma sistemleri bir yandan görüş sağlar; fakat zaten dar olan tank içinde yer ve erişim problemi oluşturur, teknisyenin eliyle taşıması gereken ek ekipman sayısını artırır ve çalışma kabiliyetini düşürür.</p><p>Tank boyutu ve erişilebilirlik problemi, kanat geometrisinin uç kısımlara doğru daralmasıyla daha kritik hale gelir. Bazı bölgelerde teknisyenin çalışması zorlaşırken bazı noktalarda gözle muayene neredeyse imkansız hale gelir. Dar hacimde çalışmak aynı zamanda kablo, valf, boru ve bağlantı elemanlarına istemeden zarar verme riskini artırır.</p><p>Havalandırma ve oksijen güvenliği de bakım süresini doğrudan etkiler. Yakıt tankına giriş öncesinde zehirlenme, patlama ve yangın riskini azaltmak için LEL değerinin güvenli seviyeye düşmesi beklenir; kaynaklarda bu sürecin tank büyüklüğüne göre 8-12 saatten 12-24 saate kadar uzayabildiği belirtilir. Oksijen miktarı 19,5-23,5 aralığının dışına çıktığında baş ağrısı, mide bulantısı, uyuşukluk ve konuşma bozukluğu gibi hipoksi belirtileri oluşabilir. Bu nedenle maske kullanımı, hava desteği ve mola süreleri bakım prosesinin ayrılmaz parçası haline gelir.</p><p>Bu problemler ışığında tam otonom, sert gövdeli robotlar yeterli çözüm olarak görülmemiştir. Yakıt tankı gibi hassas bir ortamda robotun yalnızca hata tespit etmesi değil, yüzeye ve iç donanıma zarar vermeden hareket etmesi, teknisyenin çalışmasını desteklemesi ve gerektiğinde yarı otonom şekilde yönlendirilmesi gerekir. Bu nedenle soft/inflatable robot yaklaşımı, düşük temas riski, esnek gövde yapısı ve dar alanlara uyum kabiliyeti nedeniyle projenin ana teknik tercihi olmuştur.</p>",
          "architecture": "<h4>Yakıt Tankı Yapısı ve Mevcut Bakım Yöntemi</h4><p>Uçakta ana yakıt tankı 1, ana yakıt tankı 2, merkez yakıt tankı ve dalgalanma tankı gibi farklı tank bölgeleri bulunur. Ana yakıt tankları kanat kutusu içinde, merkez tank gövde ve kanat kökü çevresinde, dalgalanma tankı ise aşırı basınç değişimlerine karşı koruyucu bir hacim olarak yer alır. Ana tanklara kanat altındaki erişim panellerinden, merkez tanka ise gövde içinden girilir. Erişim panelleri kelepçe yüzükle sabitlenir; alüminyum conta hem sızdırmazlık hem de elektrostatik bağ sağlar. Kanat nervürleri tankı bölmelere ayırır ve nervürlerdeki cut-out noktaları bitişik hacimler arasında geçiş imkanı verir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim4.png\" alt=\"Uçak yakıt tankları yerleşimi\"><figcaption>Uçak yakıt tankları, yakıt hatları ve kanat içi tank bölgeleri.</figcaption></figure></div><p>Bu şema, yakıt tanklarının yalnızca tek bir kapalı hacim olmadığını; kanat içi ana tanklar, merkez tank ve dalgalanma tankı gibi farklı görevleri olan bölgelere ayrıldığını gösterir. INFLOBOT fikrinde bu yapı kritik önemdedir, çünkü robotun erişmesi gereken bölgeler nervürler, geçiş boşlukları ve daralan kanat geometrisi nedeniyle insan hareketi için kısıtlı alanlar oluşturur.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim3.png\" alt=\"Yakıt tankı nervür ve cut-out yapısı\"><figcaption>Yakıt tankı içinde nervürler, cut-out geçişleri ve yakıt giriş/çıkış bölgeleri.</figcaption></figure></div><p>Nervürler tankı bölmelere ayırırken cut-out açıklıkları bakım personelinin ve muayene ekipmanlarının geçiş noktalarını belirler. Bu geçişlerin dar ve düzensiz olması, klasik sert gövdeli robotların veya elde taşınan ekipmanların kullanımını zorlaştırır. Bu nedenle projede esnek, şişirilebilir ve düşük temas riskli bir robot mimarisi tercih edilmiştir.</p><p>Günümüzde uygulanan bakım yöntemi, teknisyenin yakıt tankı içine girerek çatlak, kablo hasarı, korozyon ve benzeri bulguları kontrol etmesine dayanır. Bunun için önce yakıt boşaltılır, ilgili elektrik sistemleri kapatılır, tank içindeki artık ve zehirli gazlar için temiz hava pompalanır, ardından teknisyen kişisel koruyucu donanımla içeri girer. Dışarıda iletişim ve acil durum için bir destek ekibi bekler. Bu yöntem emniyet açısından zorunlu olsa da havalandırma süresi, insan hatası, dar hacim ve inceleme yetersizliği nedeniyle zaman ve iş gücü kaybı oluşturur.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim2.png\" alt=\"Yakıt tankı içinde bakım yapan teknisyen\"><figcaption>Yakıt tankı içinde bakım yapan teknisyen ve dar alan çalışma koşulları.</figcaption></figure></div><p>Görsel, bakım teknisyeninin sınırlı hareket alanı içinde hem görüş hem de erişim problemiyle çalıştığını açıkça gösterir. Maske, hortum, kablo, aydınlatma ve el aletleri teknisyenin hareket kabiliyetini azaltır; bu da hem bakım süresini uzatır hem de yakıt tankı içindeki kablo, valf ve boru gibi hassas bileşenlere temas riskini artırır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim7.png\" alt=\"Yakıt tankı bakım prosedürü şeması\"><figcaption>Geleneksel yakıt tankı bakımında teknisyen, destek personeli, hava hattı ve aydınlatma düzeni.</figcaption></figure></div><p>Mevcut prosedürde teknisyen içeride çalışırken dışarıdaki personel güvenlik ve iletişim desteği sağlar. Spark-proof lamba, hava hattı ve alet kutusu gibi ekipmanlar operasyonu mümkün kılar; ancak aynı zamanda dar hacimde ek karmaşıklık yaratır. INFLOBOT, bu yükün bir kısmını robotik destek ünitesine taşıyarak görsel muayene, aydınlatma ve hava desteğini daha bütünleşik hale getirmeyi hedefler.</p><h4>Çözüm Kararı: Bio-inspired Soft Robot</h4><p>Yapılan araştırmalar sonucunda, tespit edilen problemlere en uygun tasarımın doğadan esinlenen bir soft robot olduğuna karar verilmiştir. Bu yapı, çizgili kaslardaki sarkomer ve omurga sistemine benzer şekilde uzayıp kısalabilen, farklı noktalardan şişirilerek yönlendirilebilen bir vine/inflatable robot mantığına dayanır. Yumuşak ve şişirilebilir doku, yangın ve darbe/temas kaynaklı riskleri azaltırken robotun dar alanlarda daha uyumlu hareket etmesini sağlar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim1.png\" alt=\"INFLOBOT modül özeti\"><figcaption>INFLOBOT modül mantığı: oksijen desteği, aydınlatma, detaylı kontrol, hareket kabiliyeti ve acil durum desteği.</figcaption></figure></div><p>Bu modül kurgusunda robot tek bir göreve sıkışmaz; yakıt tankı bakımında tekrarlayan birden fazla problemi aynı sistem mimarisi içinde ele alır. Aydınlatma teknisyenin görüşünü artırır, oksijen desteği çalışma sürekliliğine katkı sağlar, hareket kabiliyeti dar hacimlere erişimi kolaylaştırır, detaylı kontrol modülü kamera/sensör tabanlı gözlem üretir ve acil durum desteği tahliye veya yönlendirme senaryolarını güçlendirir.</p><p>Soft robot hareketi, geleneksel robotlardaki yüzey teması yerine şişme ve uzama prensibiyle gerçekleşir. Basınçlı hava veya uygun akışkan, makaraya sarılı esnek tüpü ileri doğru uzatır; basınç azaltıldığında yapı kısalır. Bu prensip sayesinde robot sert, yapışkan veya sivri yüzeylerde daha düşük temas riskiyle hareket edebilir, dikey yönlenme ve mekanik-elektronik kontrol kombinasyonu kazanabilir, başlangıç boyutuna göre çok daha uzun mesafelere erişebilir ve başlangıç boyutundan daha dar boşluklara girebilir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim9.png\" alt=\"Soft robot şişerek uzama prensibi\"><figcaption>Soft/vine robotun basınçla uzama, everting motion ve yönlenme prensibi.</figcaption></figure></div><p>Şişerek uzama prensibi, robotun çevreye sürtünerek ilerlemesi yerine gövdenin uçtan dışa doğru açılması mantığına dayanır. Böylece robot, yakıt tankı gibi hassas yüzeylerde daha kontrollü temas kurabilir. İç basınç, uzama miktarı ve yönlendirme kanalları birlikte yönetildiğinde sistem hem ileri hareket hem de dar bölgelerde yön değiştirme kabiliyeti kazanır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim10.png\" alt=\"Soft robot yüzey ve engel testleri\"><figcaption>Soft robotun farklı yüzeylerde ve dar boşluklarda hareket edebilme örnekleri.</figcaption></figure></div><p>Bu test görselleri, soft robot yaklaşımının yapışkan kağıt, yapıştırıcı, çivi ve dar boşluk gibi zorlayıcı temas koşullarında neden avantajlı olduğunu anlatır. Yakıt tankı içinde de benzer şekilde keskin kenarlar, bağlantı elemanları, borular ve kablo demetleri bulunur. Bu nedenle malzeme esnekliği ve temas güvenliği, tasarım kararının merkezinde tutulmuştur.</p><h4>TA-8 ve TS-5 Tasarım Varyasyonları</h4><p>INFLOBOT iki tamamlayıcı varyasyon üzerinden düşünülmüştür. TA-8 modeli, temel olarak aydınlatma ve hava desteği problemi için geliştirilmiştir. Sekiz adet uzama kolu, omurgalı sabit hava ve aydınlatma ünitesi, eklemlerde konumlanan ışıklandırma sistemi ve orta bölümden geçen oksijen desteği ile teknisyenin yakıt tankı içindeki çalışma kabiliyetini artırmayı hedefler. Modelin havalı desteklerle kendi kendine ayakta durabilmesi ve yarı otonom şekilde yönlendirilebilmesi teknisyenin ellerini ve görüşünü rahatlatır.</p><p>TS-5 modeli ise tank boyutu ve erişilebilirlik problemine odaklanır. Beş adet şişerek uzayabilen extension arm ile hareket kabiliyeti elde eder; kamera, yönlendirme sistemi, sensörler ve isteğe bağlı UV/ışıklandırma donanımlarıyla kanat uçlarına doğru daralan alanlarda hasar tespiti yapmayı hedefler. Bu sayede yalnızca genel görsel muayene değil, nokta atışı hasar tespiti ve insan kaynaklı dış hasar riskinin azaltılması amaçlanır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim8.png\" alt=\"Kamera destekli soft robot yönlendirme\"><figcaption>Kamera ucuyla engel, hedef ve yönlenme durumlarını izleyen soft robot örneği.</figcaption></figure></div><p>Kamera destekli uç yapı, robotun yalnızca ilerleyen bir hortum gibi çalışmamasını; hedef, engel ve yön bilgisi üreten bir muayene platformuna dönüşmesini sağlar. Bu mantık TS-5 modelinde daralan kanat bölgelerinde çatlak, kablo hasarı, korozyon veya yabancı madde gibi bulguların görsel olarak incelenmesi için temel alınmıştır.</p><p>TA-8 ve TS-5 modellerinde şişirme işlemi için dış kollarda CO2 kullanımı önerilmiştir. CO2’nin yanıcı olmaması, soğutucu ve boğucu özellikleri, yakıt tankı gibi riskli ortamlarda avantaj sağlar. CFC ve HCFC gibi gazlara kıyasla daha çevre dostu bir seçenek olarak değerlendirilmesi de sürdürülebilirlik yaklaşımıyla uyumludur.</p><h4>Malzeme, Donanım ve Kompresör Destek Ünitesi</h4><p>TS-5 ve TA-8 modellerinin uzama kollarında TPE/TPU tabanlı esnek gövde yaklaşımı benimsenmiştir. Termoplastik elastomerlerin esnekliği, yumuşak yapısı, kimyasal direnci ve aşınma dayanımı soft robotik için uygun özellikler sunar. TPE’nin farklı malzemelerle kompozit hale getirilebilmesi, örneğin Mica ile yalıtkan ve daha rijit bir yapı kazanabilmesi, tasarımın dayanım ve güvenlik tarafında esnek seçenekler oluşturur.</p><p>Donanım tarafında kamera/boroskop, sensörler, LED/OLED aydınlatma, güvenli kablolama, kumandalı kontrol sistemi ve oksijen destek hattı birlikte ele alınmıştır. TA-8 üzerindeki subap aracılığıyla orta bölümden geçen hava desteği teknisyene ulaştırılır; bu sayede hipoksi riski azaltılır ve hava almak için verilmesi gereken molaların kısaltılması hedeflenir. Aynı aydınlatma yapısı, panik atak veya acil tahliye durumunda havaalanlarındaki kesikli yaklaşma ışıklarına benzer yönlendirici bir destek de sağlayabilir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim5.png\" alt=\"Kompresör destek ünitesi üst görünüş\"><figcaption>INFLOBOT için tasarlanan kompresör destek ünitesinin üst görünüş 3B modeli.</figcaption></figure></div><p>Üst görünüş tasarımı, basınç üretimi, akış yönlendirme, hortum bağlantıları ve kontrol bileşenlerinin tek bir taşınabilir destek ünitesinde toplanmasını gösterir. Bu ünite robotun sahadaki çalışabilirliğini belirleyen kritik alt sistemdir; çünkü şişirilebilir gövdenin hareketi, basınç kararlılığı ve güvenli akış kontrolü doğrudan bu dış destekle ilişkilidir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim6.png\" alt=\"Kompresör destek ünitesi dış gövde\"><figcaption>Operatör paneli, hava giriş/çıkış bağlantıları ve zamanlayıcı bölümüyle kompresör destek ünitesi.</figcaption></figure></div><p>Dış gövde modelinde operatörün sistemi takip edebileceği panel, hava giriş/çıkış bağlantıları ve zamanlayıcı mantığı öne çıkar. Böylece INFLOBOT, yalnızca robotik bir uç eleman olarak değil; basınç, kontrol, aydınlatma ve hava desteğini birlikte yöneten tamamlayıcı bir bakım sistemi olarak düşünülmüştür.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/inflobot-soft-robot-animation.gif\" alt=\"INFLOBOT animasyon\"><figcaption>INFLOBOT çalışma/hareket konseptinin animasyon gösterimi.</figcaption></figure></div>",
          "subsystems": [
                    {
                              "title": "TA-8 Bakım Destek Kolu",
                              "desc": "Yakıt tankı içinde aydınlatma, oksijen desteği ve yönlendirilebilir uzanma kabiliyeti sağlayan ana soft robot konsepti."
                    },
                    {
                              "title": "TS-5 Dar Alan Muayene Başlığı",
                              "desc": "Kanat ucu, FPB, aviyonik kompartıman ve motor çevresi gibi daha küçük hacimlerde kamera/sensörle görsel muayene yapmaya odaklanan modül."
                    },
                    {
                              "title": "CO2 Basınç ve Yönlendirme Sistemi",
                              "desc": "Farklı kanalların kontrollü basınçlandırılmasıyla robotun uzamasını ve yön değiştirmesini sağlayan pnömatik hareket altyapısı."
                    },
                    {
                              "title": "Görüntüleme ve Yapay Zeka Katmanı",
                              "desc": "Kamera, sensör ve ileride hasar/korozyon/çatlak tespiti yapabilecek görüntü analizi yazılımı için veri toplama katmanı."
                    }
          ],
          "analysis": "<p>TEKNOFEST Girişimcilik dosyasında INFLOBOT, büyüyen MRO pazarına yönelik yenilikçi bir bakım teknolojisi olarak konumlandırılır. Global hava aracı MRO pazarının 2022 yılında yaklaşık 85 milyar dolar, 2027 projeksiyonunda yaklaşık 109 milyar dolar seviyesinde olduğu; Türkiye'nin bu pazardan yaklaşık yüzde 2,3 pay aldığı belirtilir. Ürün için ilk hedef pazar, Türkiye'deki yerli bakım-onarım şirketleri ve Turkish Technic gibi SHY-145 onaylı bakım kuruluşlarıdır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/inflobot-market-mro.png\" alt=\"MRO pazar büyüklüğü grafiği\"><figcaption>Şekil 3.1. MRO pazar büyüklüğü ve bakım kategorileri.</figcaption></figure></div><p>INFLOBOT'un pazar yaklaşımı TAM/SAM/SOM mantığıyla kurulmuştur. Toplam pazar tüm bakım-onarım ekosistemini kapsar; ulaşılabilir pazar, ürünün kullanılabileceği motor, hat ve üs/ağır bakım gibi kategorilere odaklanır; elde edilebilir pazar ise yerli bakım şirketleriyle başlanıp kalite, yetki ve onay süreçleri tamamlandıktan sonra global pazara açılma hedefiyle tanımlanır. İş modeli tarafında ürün satışı, servis sözleşmesi, kiralama/abonelik ve kompresör/CO2 tüpü/aparat gibi çapraz satış kalemleri düşünülmüştür.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/inflobot-competition-table.png\" alt=\"INFLOBOT rakip analizi\"><figcaption>Şekil 3.2. Solunum, boroskop ve aydınlatma çözümlerine karşı INFLOBOT karşılaştırması.</figcaption></figure></div><p>Rakip analizi, INFLOBOT'un doğrudan tek bir rakiple değil; solunum aygıtları, oksijen tüpleri, boroskop sistemleri ve aydınlatma elemanları gibi farklı bakım yardımcılarıyla dolaylı rekabet ettiğini gösterir. Bu ekipmanların her biri belirli bir problemi çözer; INFLOBOT'un iddiası ise dar alanda hareket, aydınlatma, görsel muayene, oksijen desteği ve hasar tespitini aynı platformda birleştirebilmesidir.</p>",
          "achievements": "<p>INFLOBOT, Tulpar Tharros takımının havacılık bakım süreçlerine yönelik en güçlü ürünleşme denemelerinden biridir. Turkish Airlines & Turkish Technic Design Hackathon'da yakıt tanklarının detaylı kontrolü problemi için finalist seviyesinde sunulmuş; TEKNOFEST Girişimcilik yarışması dosyasında ise ürün, pazar, rakip analizi, iş modeli ve pazara giriş stratejisiyle birlikte girişim fikri olarak olgunlaştırılmıştır.</p><p>Benim açımdan proje, havacılık bakım tecrübesiyle elektrik-elektronik sistem tasarımı ve robotik ürün geliştirme bakışını birleştirdi. Özellikle 3B kompresör destek ünitesi, sensör/kamera/aydınlatma yerleşimi, basınçlı akış mantığı ve yapay zeka destekli hasar tespiti fikri; bir bakım problemini yalnızca mekanik tasarım olarak değil, uçtan uca sistem mimarisi olarak düşünmemi sağladı.</p>"
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
      { name: "XFLR5", category: "Aviation & Analysis", level: 50 }
    ],
    projectTeams: [
      {
        id: "team-aviation-ai",
        name: "Aviation AI Research Society",
        role: "Founder / Project Lead",
        period: "2024 - Present",
        icon: "brain-circuit",
        logo: "HAYA/Logo.png",
        projectIds: ["project-6", "project-4"],
        focus: "Artificial intelligence, autonomous systems, flight control software, and avionics data modeling.",
        overview: [
          "Aviation AI Research Society (HAYA) was founded in 2022 as a multidisciplinary student team focused on aviation and space sciences. Its main purpose is to integrate artificial intelligence and future autonomous technologies into the aviation ecosystem and produce disciplined, applicable, and innovative solutions for sectoral problems.",
          "HAYA aims to move beyond purely theoretical research by designing intelligent systems and transforming them into sustainable outputs that can be applied in the field. In line with this vision, the team develops deep learning algorithms and modeling approaches in critical areas such as flight safety, performance optimization, original UAV designs, autonomous systems, and sensor data analysis.",
          "The theoretical foundations of the developed intelligent systems are tested through simulation and animation environments, then evaluated in terms of field validity and hardware applicability. Bringing together members with different knowledge and experience, the team adopts goal orientation and a strong engineering vision as core principles.",
          "Since its foundation, HAYA has produced solutions within TÜBİTAK 2209-A, TÜBİTAK 2209-B, and scientific research project processes. With this project culture, the team has also received support through the TUSAŞ LIFT-UP Program for intelligent flight systems and continues to create added value for national aviation platforms."
        ],
        contributions: [
          "Planning TUSAŞ LIFT-UP, TÜBİTAK 2209-A, and TÜBİTAK 2209-B project workflows",
          "Leading TFX (MMU Kaan) aircraft flight performance data modeling and benchmark studies",
          "Technical leadership in aviation AI projects such as TEKNOFEST FPV drone tracking and bird detection"
        ],
        outcomes: ["1 TÜBİTAK 2209-A", "1 TÜBİTAK 2209-B", "1 TUSAŞ LIFT-UP"],
        outcomeDetails: [
          {
            title: "TUSAŞ LIFT-UP Program",
            text: "TUSAŞ LIFT-UP is an industry-oriented program that connects undergraduate graduation and research projects with real aviation problems and gives students direct exposure to the Turkish Aerospace ecosystem. Within HAYA, the LIFT-UP project examined how performance data for modern combat aircraft platforms such as the TFX (MMU Kaan) can be modeled with machine learning alternatives to classical lookup-table and interpolation workflows. This output showed that the team could manage a project with industrial expectations, advisor feedback, disciplined reporting, and an applicable prototype mindset."
          },
          {
            title: "TÜBİTAK 2209-A Undergraduate Research Project Support",
            text: "TÜBİTAK 2209-A supports undergraduate students in gaining research culture, defining problems through scientific methodology, and producing academic outputs under advisor guidance. For HAYA, the 2209-A process helped embed literature review, method selection, experimental planning, and academic reporting into the team culture. It became a critical step in turning aviation AI ideas into research-based outputs rather than only competition-oriented prototypes."
          },
          {
            title: "TÜBİTAK 2209-B Industry-Oriented Research Project Support",
            text: "TÜBİTAK 2209-B aims to connect student projects with industrial organizations and transform them into research outputs that address real sector needs. For HAYA, this experience encouraged the team to evaluate technical ideas through applicability, cost, validation, system integration, and industrial expectations. In that sense, 2209-B strengthened the team's ability to contribute to national aviation problems in line with the national technology initiative."
          }
        ]
      },
      {
        id: "team-tulpar-tharros",
        name: "Tulpar Tharros Aviation Society",
        role: "Founder",
        period: "2023 - 2024",
        icon: "bot",
        logo: "TTT/LOGO.png?v=3",
        projectIds: ["project-5"],
        focus: "AI-supported robotic inspection systems for aviation maintenance, repair, and overhaul processes.",
        overview: [
          "Founded in March 2023, TT takes its name from “Tulpar”, the winged horse figure in Turkic mythology, and the Greek word “Tharros”, which refers to courage, determination, enthusiasm, and the motivating force behind achieving goals. The team brought together students from Aircraft Airframe and Powerplant Maintenance, Aviation Electrical and Electronics, and Physics who had taken part in different teams and projects.",
          "The team's aim was to focus on technological and scientific studies within aviation and space sciences, producing original and creative ideas with both sectoral and academic value and turning them into real outputs.",
          "As students from aviation and different scientific disciplines, our main goal was to express our ideas through projects and competitions, take part directly in R&D and production phases, and contribute to the sector and scientific research with practical and theoretical solutions.",
          "The team consisted of five third-year students from Eskişehir Technical University Faculty of Aviation and Space Sciences. Each member supported the team with different capabilities and research interests. The fact that members were not limited only to their own fields created a proactive, adaptive, and fast-moving team culture."
        ],
        contributions: [
          "3D body design, electrical infrastructure, and software development for the INFLOBOT project",
          "System integration for safer inspection in narrow and confined maintenance areas",
          "Contributing to prototype development, business modeling, and investor-facing commercialization work"
        ],
        outcomes: ["THY Design Hackathon Finalist", "TEKNOFEST Best Startup", "Take Off Istanbul"],
        outcomeDetails: [
          {
            title: "THY Design Hackathon Finalist",
            text: "Tulpar Tharros carried its robotic solution idea for aviation maintenance and inspection processes to the finalist stage in the THY Design Hackathon. The idea was evaluated not only as a technical prototype, but also through user needs, operational safety, maintenance environments, and applicable product scenarios."
          },
          {
            title: "TEKNOFEST Best Startup",
            text: "Within the TEKNOFEST Entrepreneurship Competition, Tulpar Tharros achieved Best Startup recognition with an AI-supported robotic inspection approach designed to support personnel in narrow and confined aviation maintenance areas. This result showed that the project had value not only as an engineering idea, but also in terms of commercialization potential, field relevance, and startup impact."
          },
          {
            title: "Take Off Istanbul",
            text: "The Take Off Istanbul process enabled the Tulpar Tharros idea to be presented within an international startup ecosystem and evaluated from investor and mentor perspectives. For the team, this strengthened the business model, market-need framing, and applicability of the technical solution in aviation maintenance."
          }
        ]
      },
      {
        id: "team-hidroana",
        name: "Hidroana Project Team",
        role: "Electrical Unit Member",
        period: "2022 - 2025",
        icon: "zap",
        logo: "Hidroana/hidro logo.png",
        focus: "Power electronics applications and system integration for hydrogen-powered vehicles.",
        overview: [
          "Hidroana is Eskişehir Technical University's hydrogen-powered vehicle project. Founded in 2007, the team has built a 17-year project culture and has become one of Turkey's pioneering student teams in alternative-energy vehicle projects. The team is composed entirely of volunteer engineering students from disciplines such as Materials Science and Engineering, Electrical and Electronics Engineering, Computer Engineering, Chemical Engineering, and Mechanical Engineering.",
          "The team's main purpose is to increase and popularize the use of hydrogen energy as an alternative energy source both in Turkey and globally. In line with this purpose, Hidroana works with a mindset that constantly aims to improve and adopts a standard of excellence in national and international projects. One of the team's largest goals is to enable the sustainable and effective use of hydrogen energy and become a pioneering group in this field.",
          "The project structure is based on sharing responsibilities through task division and carrying out research-and-development-oriented work. Through this approach, the team aims to contribute to the daily-life use of hydrogen, support the spread of alternative energy technologies, and produce concrete engineering outputs for a cleaner world.",
          "Shell Eco-marathon is one of the world's most prestigious student innovation competitions and has been held for 38 years across Europe, America, and Asia. In this competition, university students race with energy-efficient vehicles they design and manufacture themselves, aiming to travel the longest distance with the least amount of energy. Hidroana regularly participates in Shell Eco-marathon Europe and Shell Eco-marathon Turkey events.",
          "The TÜBİTAK Efficiency Challenge Electric Vehicle Races, held within TEKNOFEST, are major competitions where university and high-school students design and race electric vehicles for maximum efficiency. Hidroana has competed in the hydromobile category since 2008. The event aims to increase domestic production in alternative-energy vehicles, support high-value product development, and raise national awareness of alternative energy sources."
        ],
        contributions: [
          "Electrical-electronic subsystem design and integration for DORLION and MIDAS vehicles",
          "Power electronics, digital/analog system design, and hardware optimization studies",
          "PCB design, circuit simulation, thermal analysis, and race-site system integration"
        ],
        outcomes: ["TEKNOFEST Efficiency Challenge 2nd Place", "TEKNOFEST Efficiency Challenge Special Jury Award", "Shell Eco-Marathon Finalist"],
        outcomeDetails: [
          {
            title: "TEKNOFEST Efficiency Challenge 2nd Place",
            text: "TEKNOFEST Efficiency Challenge Electric Vehicle Races are TÜBİTAK-led engineering competitions where student-built electric vehicles are evaluated through efficiency, technical compliance, safety, and race performance. Competing in the hydromobile category with a hydrogen fuel-cell vehicle, Hidroana achieved second place and demonstrated strong engineering capability in energy management, vehicle integration, electrical safety, and system efficiency."
          },
          {
            title: "TEKNOFEST Efficiency Challenge Special Jury Award",
            text: "The Special Jury Award recognizes projects that stand out beyond ranking through technical approach, design quality, innovative problem solving, and engineering maturity. For Hidroana, this award reflects the value of its integrated engineering work across power electronics, digital/analog system design, isolation monitoring, battery infrastructure, and hydrogen vehicle systems."
          },
          {
            title: "Shell Eco-Marathon Finalist",
            text: "Shell Eco-marathon is an international innovation competition where students design and build energy-efficient vehicles to travel the longest distance with the least amount of energy. Becoming a finalist shows that the vehicle reached a level beyond concept, passed key technical expectations, and became a competitive engineering output focused on energy efficiency. For Hidroana, this process was an important opportunity to represent hydrogen-powered vehicle technology within the global student innovation ecosystem."
          }
        ]
      }
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
        title: "Research Assistant",
        company: "Eskişehir Technical University (Eskişehir, Turkey)",
        duration: "October 2025 - June 2026",
        details: "Within the İŞKUR Youth Program, I worked as a research assistant at the Aviation AI Research Laboratory established at Eskişehir Technical University. During this period, I contributed to flight control algorithm development for unmanned aerial vehicles and avionics systems, sensor data processing, flight-state interpretation, and the design of autonomous decision-making workflows.<br><br>Using MATLAB/Simulink and Python, I supported the modeling of aircraft system behavior and took part in virtual testing, verification analysis, and technical interpretation of developed control and software approaches. I also contributed to the design, validation, and integration of electronic boards supporting AI-assisted aviation applications, particularly in relation to sensors, processing units, and flight-control infrastructure."
      },
      {
        title: "Avionics Engineering Intern",
        company: "Vilnius Gediminas Technical University (Vilnius, Lithuania)",
        duration: "October 2023 - April 2024",
        details: "In the first period, I performed various technical tasks on non-airworthy aircraft such as Cessna 310, Cessna 152 and Airbus A320. In this process, I performed disassembly, reassembly, and installation operations of main components such as wings, flight control systems, landing gear, and fuselage. I also gained experience in maintenance, repair, and operation of avionics systems. Later, I continued my hands-on training at Kyviškės Airport, which holds EASA Part-145 certification. Here, I worked on airworthy Cessna 172S and Piper PA-34 aircraft, and all works were supervised by experts with EASA Part-66 licenses. In the final period, I focused on unmanned aerial vehicle technologies and the electronic infrastructures used in these systems. I designed the mechanical structure of the quadrotor I worked on using SolidWorks; in this process, I performed calculations via XFLR5 for critical factors like weight balance. Using Altium Designer, I designed and developed brushless motor driver circuit boards. I completed the validation and performance analyses of these boards through circuit simulations in PSpice and Matlab environments. To evaluate the temperature distribution on semiconductor materials on electronic boards during flight, I performed thermal analyses using COMSOL Multiphysics software. The system I developed was structured to support basic flight control algorithms. Energy efficiency, thermal durability, and system reliability were prioritized in the design process, and all components were optimized accordingly.<div class='internship-files'><span class='internship-files-title'>Internship Files</span><a href='Staj/Internship%20Program.pdf' target='_blank'>Internship Program</a><a href='Staj/Study%20Pages-%20October%201.pdf' target='_blank'>Study Pages - October</a><a href='Staj/Study%20Pages-%20November%202.pdf' target='_blank'>Study Pages - November</a><a href='Staj/Study%20Pages-%20December%203.pdf' target='_blank'>Study Pages - December</a><a href='Staj/Study%20Pages-%20January%204.pdf' target='_blank'>Study Pages - January</a><a href='Staj/Study%20Pages-%20Laboratory%205.pdf' target='_blank'>Study Pages - Laboratory</a></div>"
      }
    ],
    projects: [
      {
          "id": "project-1",
          "title": "48 V / 50 A Three-Phase BLDC Motor Driver Board (Vol.1)",
          "category": "donanim",
          "summary": "Vol.1 is a 48 V, 50 A, 2.5 kW three-phase BLDC motor driver board designed for an electric/hydrogen vehicle drivetrain. It combines a MOSFET bridge power stage, IRS2186 gate drivers, STM32F446RET6 control, INA229 measurement, Hall-sensor feedback, DC/DC rails, simulations, PCB layout, prototype tests, and current/temperature protection logic.",
          "description": "This page transfers the full technical design narrative of the Vol.1 BLDC driver document into the portfolio: topology selection, component choice, parameter calculations, control algorithm, simulation work, PCB design, production tests, efficiency estimation, protection algorithms, and bill of materials.",
          "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
          "tags": [
                    "BLDC Motor Driver",
                    "STM32F446RET6",
                    "IRS2186",
                    "INA229",
                    "Altium Designer",
                    "Proteus"
          ],
          "specs": [
                    {
                              "name": "Project / Version",
                              "value": "Three-Phase BLDC Motor Driver Board - Vol.1"
                    },
                    {
                              "name": "Power Target",
                              "value": "2.5 kW / 48 V / 50 A nominal operation"
                    },
                    {
                              "name": "Power Topology",
                              "value": "Three-phase bridge with 12 N-channel MOSFETs"
                    },
                    {
                              "name": "Controller",
                              "value": "STM32F446RET6 ARM Cortex-M4, 180 MHz"
                    },
                    {
                              "name": "Driver / Sensing",
                              "value": "IRS2186 gate driver and INA229 measurement line"
                    },
                    {
                              "name": "Design and Validation",
                              "value": "Altium Designer PCB, Proteus simulation, oscilloscope/prototype testing"
                    }
          ],
          "overview": "<p>This project page is based on the Vol.1 motor-driver technical design document. It explains the first BLDC driver version as a 48 V, high-current three-phase motor controller with STM32-based PWM control, Hall feedback, MOSFET bridge switching, and current/temperature protection.</p><h4>4.1.Devre Tasarımı</h4><strong class=\"method-subtitle\">4.1.1.Motor sürücü devresinin tasarım adımları</strong><br><strong class=\"method-subtitle\">A) Topoloji seçimi</strong><br><p>Topoloji seçiminde, yüksek güç uygulamalarına uygun ve enerji kaybını minimize ederek daha yüksek verimlilik sağlayan Üç fazlı köprü (Three-Phase Bridge) Topolojisine karar verildi. Özellikle fırçasız (brushless) üç fazlı DC motorlar için ideal olan bu topoloji, motorun her üç fazının (A fazı, B fazı, C fazı) ayrı ayrı kontrol edilmesine olanak tanır ve motorun dönüş yönünü ve hızını hassas bir şekilde ayarlamayı sağlar.</p><strong class=\"method-subtitle\">B) Voltaj ve Akım değerlerinin belirlenmesi</strong><br><p>Motor nominal 2500 watt olarak hesaplandığından, motor sürücüsü nominal 48 V çalışma voltajında ​​ve nominal 50 A çalışma akımında çalışacak şekilde tasarlanmıştır. Bu değer motorun ihtiyaçlarını karşılayan bir değerdir. Aynı zamanda motor sürücüsünün yaşayacağı anlık gerilim ve akım değerleri de dikkate alınmaktadır. Kart, bu değerler dikkate alındığında anlık 100A değerine dayanacak şekilde tasarlanmıştır. Kullanılan MOSFET’leri değiştirirseniz kartın kaldırabileceği güç değeri de değişecektir.</p><strong class=\"method-subtitle\">C) Frekans değeri</strong><br><p>Motorun istenen maksimum hızı, tepki zamanı ve hız kontrol hassasiyeti, çalışma frekansının belirlenmesinde rol oynamaktadır. Daha yüksek frekanslar genellikle daha hızlı tepki süreleri sağlar, ancak aynı zamanda güç kaybı ve ısınma gibi faktörleri de etkileyebilir. Ayrıca, motor sürücüsünün frekansı, motorun tipi, uygulama gereksinimleri, verimlilik, ısı yönetimi ve EMC faktörleri göz önünde bulundurularak dikkatlice seçilmiştir.</p><strong class=\"method-subtitle\">4.1.2.Tasarlanan devrenin analitik ifadesi (Evirici, kontrol kartı, vb.)</strong><br><p>Tasarlanan devrenin teorik temellerini, matematiksel modellerini ve çalışma prensiplerini “Kontrol Kartı” adı altında gerçekleştirilmiştir. Kartın tasarımı sürecinde kontrol algoritmaları, geri besleme döngüleri, çıkış sinyalleri (PWM sinyalleri), sensör verilerinin İşlenmesi ve Zamanlama ve Sinyal İşleme başlıkları altında simülasyon, analiz ve optimizasyon çalışmaları gerçekleştirilmiştir.</p><strong class=\"method-subtitle\">4.1.3.Malzeme seçimi (Entegre, transistör, direnç, bobin, kapasitör, vb.)</strong><br><p>Malzeme seçiminde motor sürücüsünde kullanılan gömülü bileşenlerin veri föyüne göre, pasif bileşenlerin maksimum ve minimum yükleri göz önünde bulundurularak referans gerilim ve akım bölücü gibi yerlerde kullanılan komponentlerin ise toleranslarının en düşük olacak şekilde seçilmiştir. Üretim kolaylığı ve yer tasarrufu açısından soğutucu blokların dışındaki tüm devre elemanları yüzeye monte edilen (SMD) devre elemanları olarak kullanılmaktadır.</p><strong class=\"method-subtitle\">A) Kondansatör</strong><br><p>Kondansatör seçiminde kullanım alanının maksimum gerilim değeri, minimum kapasite gereksinimi, çalışma sıcaklığı ve anlık olarak uğrayacağı maksimum akım dikkate alınmıştır. Kondansatörün arızalanması durumunda herhangi bir sorunla karşılaşmamak için daha küçük değerli birden fazla kondansatörün paralel bağlanmasına karar verilmiştir.</p><strong class=\"method-subtitle\">B) Direnç</strong><br><p>Dirençler üzerinden geçen akıma göre Watt değerleri dikkate alınmıştır. Ayrıca, referans olarak kullanılan dirençlerde düşük toleranslı olunmasına ve bilgi föyü verilerine göre uygun direnç değerinin seçilmesine karar verilmiştir.</p><strong class=\"method-subtitle\">C) Bobin</strong><br><p>Bobin seçimi, kullanılan DA/DA dönüştürücünün bilgi föyüne bağlı kalınarak, kullanılan bobinden geçecek maksimum akıma göre yapılmıştır. Motor sürücüsünde elektriksel gürültüyü en aza indirgemek için kullanılan bobinler için SMT teknolojisine sahip bobinler seçilmiştir.</p><strong class=\"method-subtitle\">D) MOSFET seçimi</strong><br><p>MOSFET seçiminde, motor sürücünün uğrayacağı maksimum gerilim ve akım değerleri dikkate alınmıştır. Ani akım artışlarına karşı emniyet katsayısı 2 olarak alınmıştır. Aynı zamanda motor sürücü verimini ve ısıyı korumak için MOSFET’ in iç direnci fiyat-performans kriterleri içerisinde olabildiğince düşük seçilmiştir.</p><strong class=\"method-subtitle\">E) MOSFET sürücü</strong><br><p>IRS2186 hem yüksek katmanlı hem de düşük katmanlı MOSFET'leri sürebilmesi ve 4A gibi nispeten yüksek akımlarda çalışabilmesi nedeniyle tercih edilmiştir. Çıkış sinyali olarak 6.8V ile 20V arasında değerler verebilmektedir. Piyasadaki benzer ürünlerle karşılaştırıldığında 170ns gibi normal anahtarlama süresine sahiptir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim1.png\" alt=\"E) MOSFET sürücü\"><figcaption>Şekil V1.1. E) MOSFET sürücü.</figcaption></figure></div><strong class=\"method-subtitle\">4.1.3.6. Mikro kontrolcü</strong><br><p>STM32F446RET6 mikrodenetleyicisinin:</p><p>ARM Cortex-M4 tabanlı bir mikrodenetleyici olup yüksek işlem gücü sunması ve bu şekilde motor control algoritmalarını hızlı bir şekilde işleyebilmesi,</p><p>Çok sayıda Dalga Genişlik Modülü kanalına sahip olup motor sürücülerinde gerekli olan yüksek çözünürlüğü ve hassas sinyalleri üretme yeteneğine sahip olması,</p><p>Çok sayıda zamanlayıcı ve sayıcıya sahip olup hassas bir şekilde kontrol edilmesine olanak tanıması,</p><p>ART, SPI, I2C, CAN ve USB gibi çeşitli haberleşme protokollerini desteklemesi,</p><p>Düşük güç tüketimi sayesinde batarya ile çalışan enerji verimliliğinin önemli olduğu projelerde büyük bir avantaj sağlaması,</p><p>Özelliklerine sahip olması ile, motor sürücü devremiz için ideal bir mikrodenetleyicidir. Bu nedenle, motor kontrol uygulamasında güvenilir ve verimli bir çözüm sağlamak için tercih edilmiştir.</p><strong class=\"method-subtitle\">4.1.4.Parametre hesabı (Eleman değerleri)</strong><br><strong class=\"method-subtitle\">A) Kondansatörler</strong><br><p>Motor kontrolcü devresinde çeşitli kapasitörler bulunmaktadır.</p><strong class=\"method-subtitle\">1) Filtreleme Kondansatörleri</strong><br><p>Filtreleme kondansatörlerin değerlerini hesaplarken, güç kaynağından veya bir güç elektroniği devresinden gelen dalgalı voltajı düzeltmek veya istenmeyen frekans bileşenlerini azaltmaya yönelik kullanılan yüksek ve düşük bant filtre kondansatör hesaplamaları göz önünde bulundurulmuştur. Çalışılan frekans değerinde 100 nF ve 1 uF değerinde çok katmanlı seramik kondansatörler kullanılmıştır. Bu değerdeki kapasitörler, gerektiği yerde paralel bağlanıp kapasitans değeri istenilen değere yükseltilmiştir (4.7 uF, 10 uF gibi).</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim2.png\" alt=\"1) Filtreleme Kondansatörleri\"><figcaption>Şekil V1.2. 1) Filtreleme Kondansatörleri.</figcaption></figure></div><strong class=\"method-subtitle\">2) DC-Link Kondansatörleri</strong><br><p>DC tarafındaki dalgalanmaları azaltmak, DC voltajını stabilize etmek ve yüksek akım taleplerinde enerji sağlaması için kullanılmıştır. Büyük kondansatörlere ve düşük ESR (Eşdeğer Seri Direnç) değerlerine sahip olacak şekilde seçim yapılmıştır.</p><p>C: Kapasitans (Farad)</p><p>P: Sistem gücü (Watt)</p><p>dc: Dönüşüm verimi (Efficiency)</p><p>fsw: Anahtarlama frekansı (Hz)</p><p>V_{dc}: DC-Link voltajı (Volt)</p><p>Vp(max)​: DC-Link voltajının izin verilen maksimum dalgalanma miktarı (Volt)</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim3.png\" alt=\"2) DC-Link Kondansatörleri\"><figcaption>Şekil V1.3. 2) DC-Link Kondansatörleri.</figcaption></figure></div><p>Bu hesaplamaya bağlı kalınarak, 470 uF değerinde 8 adet (yüksek kapasitans değerleri sunması için) Alüminyum Elektrolitik kondansatör paralel bağlanılarak devrede kullanılmıştır. ESR (Equivalent Series Resistance) değerini düşürmek ve kartın uzun ömürlü olmasi icin kondansatörler parallel bağlanmıştır.</p><p>Bu hesaplama, temel bir yaklaşım sunmaktadır. Ancak, gerçek dünya uygulamalarında termal yönetim, dalgalanma akımları ve kondansatörlerin ömrü gibi faktörler de dikkate alınmalıdır. Bu nedenle, hesaplanan değerin üzerinde bir kapasitans seçilmiştir.</p><strong class=\"method-subtitle\">B) Bobinler</strong><br><p>Bobinin endüktans değeri, devredeki akım değişim hızına ve istenen enerji depolama kapasitesine bağlı olarak seçildi. Örneğin, bir DC/DA dönüştürücü devresinde, istenen çıkış voltajındaki dalgalanmaları azaltmak için endüktans değeri, veri föyünde bulunan üretici referans değerlerine göre seçilmiştir. Bu referans değerleri arasında nominal akım, endüktans değeri, maksimum akım sınırı gibi faktörler bulunmaktadır.</p><strong class=\"method-subtitle\">4.1.5.Güç modülü ve kontrol ünitesi hakkında bilgiler</strong><br><strong class=\"method-subtitle\">A) Kontrol ünitesi</strong><br><p>STM32 ailesine ait olan bu mikrodenetleyici, ARM Cortex-M4 çekirdeği üzerinde çalışmaktadır. Motor kontrolü uygulamalarında STM32F446RET6 kullanılırken, özellikle PID kontrol algoritmaları, hız ve konum geri beslemesi gibi karmaşık işlemleri rahatlıkla gerçekleştirilebilir. Ayrıca, Düşük güç tüketimi ile enerji verimliliği sağlaması, geniş kod ve veri depolama kapasitesi sunması ve STM32 ailesi geniş bir geliştirme ekosistemine sahip olması yönüyle bu işlemciyi seçme nedenlerimiz arasındadır.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Feature</th><th>Value</th></tr></thead><tbody><tr><td>Microcontroller Core</td><td>ARM Cortex-M4</td></tr><tr><td>Operating Frequency</td><td>180 MHz</td></tr><tr><td>Operating Voltage</td><td>1.7 V - 3.6 V, typically 3.3 V</td></tr><tr><td>Flash Memory</td><td>512 KB</td></tr><tr><td>SRAM</td><td>128 KB</td></tr><tr><td>GPIO</td><td>114-pin family in LQFP64 package</td></tr><tr><td>Timers</td><td>11 timers</td></tr><tr><td>ADC</td><td>12-bit, 3 units, 16 channels</td></tr><tr><td>DAC</td><td>12-bit, 2 units</td></tr><tr><td>Communication Interfaces</td><td>USART, SPI, I2C, CAN, USB</td></tr><tr><td>Temperature Range</td><td>-40°C to +85°C</td></tr><tr><td>Package</td><td>LQFP64, UFQFPN64, WLCSP64</td></tr><tr><td>Power Consumption</td><td>108 μA/MHz active mode with low-power modes</td></tr></tbody></table></div><strong class=\"method-subtitle\">B) Güç modülü</strong><br><p>Motor sürücüde kullanılmak üzere IXTH230N10T N-Kanal MOSFET seçilmiştir. Bu MOSFET, yüksek ve sürekli anahtarlama akım değerlerine sahiptir. 200A sürekli akım altında çalışabilir iken anlık 500A tepe değerlerinde çalışabilir ve 100V gerilim değerine sahiptir. Motor kontrol aşamasında fazla güç harcama ile karşılaşılması durumunda bu MOSFET’ler dayanabilecektir. V_GS = 10V için R_DS (on) değeri 0.019 ohm olarak belirlenmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim4.png\" alt=\"B) Güç modülü\"><figcaption>Şekil V1.4. B) Güç modülü.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim5.png\" alt=\"B) Güç modülü\"><figcaption>Şekil V1.5. B) Güç modülü.</figcaption></figure></div>",
          "architecture": "<h4>4.4.Baskılı Devre Çalışmaları</h4><p>PCB tasarımında, gelişmiş analiz ve simülasyon araçları sunması ve tasarım hatalarını minimize etme imkanı sağlaması yönüyle Altium Designer kullanılması tercih edilmiştir.</p><p>PCB Düzeni ve Şema Tasarımı</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim29.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.1. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim30.jpg\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.2. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><p>STM32 mikrodenetleyicinin güç gereksinimlerini doğru bir şekilde karşılayacak güç hatları tasarlanmıştır. Bunun yanı sıra güç ve toprak hatları mümkün olduğunca kısa ve geniş tutulmuştur. Osilatörlerin ve saat sinyallerinin. Hatları mümkün olduğunca kısa ve düzgündür. PCB tasarımında elektromanyetik uyumluluk için belirli standartlar dikkate alınmıştır. Üretim sürecini kolaylaştıracak ve maliyetleri düşürmek için standart bilesen boyutları ve montaj yönergelerine uygunluk sağlanmıştır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim31.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.3. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim32.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.4. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><p>PCB 2D Görünümü Gerber Dosyası</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim33.png\" alt=\"4.4.Baskılı Devre Çalışmaları\"><figcaption>Şekil V1.5. 4.4.Baskılı Devre Çalışmaları.</figcaption></figure></div><p>PCB 3D Görüntüsü</p><p>Katmanlı PCB'lerde, ısıyı yaymak bileşenler ve yollar nedeniyle daha zor olmaktadır. Bakır, ısıyı mükemmel bir şekilde ileten bir malzemedir. Bu yüzden Motor sürücü IC'ye iyi termal bağlantılarla yollara mümkün olduğunca fazla katı bakır dökülerek yapılmıştır. Her iki dış katmana da bakır dökerek ve bu dökmeleri çok sayıda via ile birleştirmek, ısıyı bileşenlerin kesildiği alanlarda yaymaya yardımcı olmaktadır. Motor sürücü IC'ye giren ve çıkan akım büyük olduğundan PCB yollarının genişliği dikkatlice düşünülmüştür. Yol ne kadar genişse, direnci o kadar düşüktür. Yollarda, direncin aşırı güç dağılmasına neden olacak kadar küçük olmamasına dikkat edilmiştir, çünkü bu durum yolun ısınmasına yol açabilir.</p><p>Bypass kapasitörleri ve bootstrap kapasitörü mümkün olan en yakın yerde entegrenin güç pinlerine yerleştirilmiştir ve yakınlarda büyük kapasitörler bulunmaktadır.</p><h4>4.5.Üretim Çalışmaları/Aşamaları</h4><strong class=\"method-subtitle\">Üretim Çalışmaları/Aşamaları</strong><br><p>Kartın tamamen üretilmesinden önce, kartın prototipi yapılıp, isterleri karşılayıp karşılamadığı test edilmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim34.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.6. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Daha küçük boyutta ve daha düşük güçte çalışabilecek bir prototip yaparak, aynı motorda test edilmiştir. Uzun sureli nominal koşullarda çalışmanın yanında, prototip olmasına rağmen yüksek güç tüketim aşamalarında da çalışmayı sürdürerek asil kartın sahip olduğu güvenlik marjini hesaplanmıştır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim35.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.7. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Simülasyon aşamasında kaydettiğimiz verilerin aynisini, prototip kontrolcüde de elde etmeyi basardık. Bu sayede kontrolcünün nominal durumlarda MOSFET kapı açma kapama esnasında herhangi bir sorun olmadığı görülmüştür.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim36.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.8. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Test sonucunda, ekstrem koşullarda, MOSFET kapı kısmında bir gurultu olduğu fark edilmiştir. Fakat gurultunun, MOSFET in sahip olduğu maksimum marjinden düşük ve motorun fazlarına herhangi yanlış anahtarlama yapmadığından sadece aşırı ısınmaya yönelik soğutucu alüminyum bloklar kullanılarak sorun çözülmüştür.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim37.jpg\" alt=\"Üretim Çalışmaları/Aşamaları\"><figcaption>Şekil V1.9. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>MOSFET kısmında herhangi bir silkinti olmadan fazlara gerekli gerilimi verdiği görülmüştür. MOSFET in sahip olduğu Flyback diyotun doğru şekilde boşaltma yaptığı doğrulanmıştır.</p><strong class=\"method-subtitle\">Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi</strong><br><p>Güç elektroniği bileşenleri yüksek güçlerde çalışmaktadır. Bu yüzden PCB tasarımında ve kutulamada termal yönetim stratejileri kullanılmıştır. Bu, ısı emiciler, soğutucular, ve uygun hava akışı sağlamak için kutu ve kart tasarımını içermektedir.</p><p>Bu koşullar dikkate alındığında kartın 12x25x25 cm boyutlarinda olmasi gerektiğine karar verilmiştir.</p><p>Kullanılan elektronik bileşenlerin güvenliği de kritik önem taşımaktadır., aşırı akım, aşırı voltaj ve kısa devre gibi durumlarda bileşenleri ve aracın diğer sistemlerini koruyacak bir kutu tasarımı yapılmıştır. Çok sayıda kablo ve bağlantı kullanıldığından. Kutu tasarımında bu kabloların yönetimi ve düzenlenmesi için uygun alan ve bağlantı noktaları sağlanmıştır. Ayrıca kutu, erişilebilir bir yerde bulunmasına ve montaj, sökme ve yeniden montaj işlemleri kolaylıkla yapılabilir olmasına dikkat edilmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim38.jpg\" alt=\"Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi\"><figcaption>Şekil V1.10. Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi.</figcaption></figure></div>",
          "subsystems": [
                    {
                              "title": "Three-Phase Power Stage",
                              "desc": "High-side and low-side MOSFET stages drive A/B/C motor phases."
                    },
                    {
                              "title": "Gate Driver and Bootstrap",
                              "desc": "IRS2186-based gate drive with bootstrap and isolated DC/DC support."
                    },
                    {
                              "title": "STM32 Control Unit",
                              "desc": "PWM generation, Hall position reading, RPM calculation, direction logic, and safe-mode decisions."
                    },
                    {
                              "title": "Measurement and Protection",
                              "desc": "INA229 current, voltage, power, and temperature monitoring with over-current/over-temperature shutdown logic."
                    },
                    {
                              "title": "Power Rails",
                              "desc": "Regulated rails from 48 V down to 45 V, 15 V, 5 V, and 3.3 V."
                    },
                    {
                              "title": "PCB and Thermal Design",
                              "desc": "Altium layout with high-current routing, copper pour, via stitching, and enclosure/thermal considerations."
                    }
          ],
          "analysis": "<h4>4.6.Motor Sürücü Verimliliği</h4><strong class=\"method-subtitle\">Güç kaybı hesabı (En yüksek güç talebinde)</strong><br><p>Motor sürücü devresinin güç tüketimini hesaplamak için birkaç bileşenin güç tüketimini dikkate alınmıştır.</p><p>Toplamda 12 MOSFET bulunmaktadır ve her bir MOSFET'in güç kaybı, üzerinden geçen akıma ve iç direnç değerine bağlı olarak hesaplanmıştır. Bu hesaplamalar sonucunda, her bir MOSFET'in yaklaşık 47.5 watt güç kaybına neden olduğu belirlenmiştir. Toplamda 12 MOSFET bulunduğundan, MOSFET'lerin toplam güç kaybı 570 watt olarak hesaplanmıştır.</p><p>Ayrıca, her bir MOSFET sürücü devresi 80 watt güç tüketmektedir. Devrede toplamda 6 MOSFET sürücü bulunduğundan, bu sürücülerin toplam güç tüketimi 480 watt olarak belirlenmiştir.</p><p>Mikrodenetleyici olarak kullanılan STM32F446RET6'nın güç tüketimi ise 0.064 watt olarak hesaplanmıştır. Bu mikrodenetleyici, düşük güç tüketimi ve yüksek performansı ile motor kontrol uygulamaları için idealdir.</p><p>Pasif bileşenler ve diğer devre elemanlarının güç tüketimi ise yaklaşık 10 watt olarak tahmin edilmiştir. Bu bileşenler, devredeki enerji kayıplarının küçük bir kısmını oluşturur ancak yine de toplam güç tüketimi üzerinde etkisi vardır.</p><p>Sonuç olarak, motorun nominal gücü 2500 watt olarak belirlenmiş ve diğer bileşenlerin güç tüketimleri de dikkate alındığında, toplam güç tüketimi yaklaşık 3560 watt olarak hesaplanmıştır. 3560 watt, devrenin en kötü koşullardaki (maksimum) güç tüketimini yansıtmaktadır. Gerçek çalışma koşullarında, motor ve diğer bileşenler her zaman maksimum güç tüketimi ile çalışmayabilir, bu nedenle gerçek güç tüketimi daha düşük olabilir.</p><strong class=\"method-subtitle\">Yüzde verim değeri (Nominal güç talebinde)</strong><br><p>Motorun nominal olarak 48V ve 50A olarak tasarlandığı düşünüldüğünde, güç hesaplaması P=V.I formülü kullanılarak 2400 Watt olarak belirlenmiştir. Bu değer, motorun çalışma koşullarında sağlanan güç miktarını ifade eder. Ancak devrede kullanılan MOSFETlerin doğal bir direnci bulunmaktadır ve bu da 40 Watt gibi bir kayba yol açmaktadır. Bu kayıp yüzdesel olarak hesaplandığında, (40 / 2400) * 100 ≈ %1,67 gibi bir değere denk gelir.</p><h4>4.7.Motor Sürücü Koruması</h4><p>Motor sürücüde aşırı akım koruması ve aşırı sıcaklık koruması yapan algoritma vardır. Aşırı akım veya sıcaklık durumunda motora giden güç kesilmektedir ve sistem güvenli moda girmektedir.</p><strong class=\"method-subtitle\">Akım değerini ölçen algoritma</strong><br><p>Aşırı akım koruma algoritmasında INA229 entegresinden SPI haberleşme protokolü aracılığıyla akım verisi alınır. Ölçülen akım değerinin, akım sınırını geçmesi durumunda sistem güvenli moda girmektedir ve motor çalışmayı durdurmaktadır. Aşırı akım koruma algoritmasında gürültüden vb. sebeplerden dolayı anlık yanlış okunan veriler olması durumunda ise ufak bir kontrol fonksiyonu eklenmiştir.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim39.png\" alt=\"Akım değerini ölçen algoritma\"><figcaption>Şekil V1.1. Akım değerini ölçen algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Sıcaklık Değerini ölçen algoritma</strong><br><p>Aşırı sıcaklık koruması yapan algoritma, sıcaklık verilerini INA229 entegresinden alır. Sıcaklığın, güvenlik sınırını geçmesi durumunda sistem güvenli moda alınır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim40.png\" alt=\"Sıcaklık Değerini ölçen algoritma\"><figcaption>Şekil V1.2. Sıcaklık Değerini ölçen algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma</strong><br><p>Bu algoritma, sistemin güvenlik moduna alındığı zaman devreye giren algoritmadır. Algoritma, temelinde 3 kısımdan oluşmaktadır. 1. bölümde motor çalışırken, sıcaklık, akım ve sistemi açık tutan “enable” tuşunun kontrolü yapılır. Bir sorun olmaması durumunda motor çalışmaya devam eder. Bir sorun olması durumunda ise algoritmanın 2. kısmına geçilir. Algoritmanın bu kısmına geçildikten sonra motor çalışmayı durdurur. 2. bölümde motora giden güç kesilir. Bu bölümde tek kontrol edilen şey pilotun pedala basıp basmadığıdır. Eğer pilot pedala basıp motoru döndürmek istiyorsa algoritma 2. bölümden çıkmaz ve motor hiçbir zaman dönmez. Pilot pedala basmaz ise algoritma 3. kısıma geçer. Bu bölümde sistemdeki tüm kontroller yapılır ve sistemde her şeyin düzgün çalıştığından emin olunur. Bir sorun olması durumunda o sorun çözülene kadar sistem güvenli modda kalmaya devam eder ve motor dönmez. Akım değerinin, sıcaklık değerinin ve sistemi başlatan “enable” tuşunun açık olması durumunda sistem güvenli moddan çıkar ve motor eskisi gibi dönmeye başlar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim41.png\" alt=\"Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma\"><figcaption>Şekil V1.3. Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma.</figcaption></figure></div><h4>4.8.Malzeme Listesi</h4><p>Dokümanda tablo olarak verilen ana bileşenler ve kartın teknik çıktıları aşağıda tablo formatında düzenlenmiştir. Sponsorlar tarafından karşılanan çok sayıdaki pasif komponent, konnektör ve yardımcı devre elemanı ayrı kalemler yerine tasarım bütünlüğü içinde değerlendirilmiştir.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Component</th><th>Role / Description</th><th>Reference</th><th>Qty</th></tr></thead><tbody><tr><td>TL783</td><td>High-voltage adjustable regulator</td><td>VR1</td><td>1</td></tr><tr><td>173950336</td><td>4.75-36 V input, 3.3 V output, 0.5 A output</td><td>U2</td><td>1</td></tr><tr><td>173010578</td><td>8-28 V input, 5 V output, 1 A output</td><td>U1</td><td>1</td></tr><tr><td>IXTH200N10T</td><td>100 V N-channel MOSFET high-current power switch</td><td>Q1-Q12</td><td>12</td></tr><tr><td>B0505S-1WR3</td><td>Isolated DC/DC converter module</td><td>PS1-PS3</td><td>3</td></tr><tr><td>STM32F446RET6</td><td>ARM Cortex-M4 main controller</td><td>U3</td><td>1</td></tr><tr><td>LM2596HV</td><td>3 A buck voltage regulator</td><td>IC4</td><td>1</td></tr><tr><td>IRS21867S</td><td>High-side / low-side MOSFET driver</td><td>IC1-IC3</td><td>3</td></tr><tr><td>INA229</td><td>85 V, 20-bit precision current/voltage/power monitor</td><td>U4</td><td>1</td></tr></tbody></table></div><p>Takım tarafından tasarlanan ve prototiplenen motor sürücü kartının temel teknik özellikleri aşağıdaki tabloda özetlenmiştir.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Feature</th><th>Value / Description</th></tr></thead><tbody><tr><td>Switching device</td><td>IXTH200N10T N-channel MOSFET</td></tr><tr><td>Driver IC</td><td>IRS2186 / IRS21867S high-side and low-side MOSFET driver</td></tr><tr><td>Controller</td><td>STM32F446RET6, ARM Cortex-M4, 180 MHz</td></tr><tr><td>Control approach</td><td>Closed-loop Hall-feedback BLDC commutation and PWM control</td></tr><tr><td>Protection</td><td>80 A fuse, INA229 current/temperature monitoring, safe-mode algorithm</td></tr><tr><td>Power / Voltage / Current</td><td>2.5 kW / 48 V / 50 A with transient current margin</td></tr><tr><td>PCB / enclosure</td><td>200 x 150 mm PCB; 120 x 250 x 250 mm enclosure approach</td></tr><tr><td>Reported efficiency</td><td>90%</td></tr></tbody></table></div>",
          "achievements": "<h4>Bill of Materials and Technical Outputs</h4><p>The tabular bill of materials and prototype output summary from the document are transferred below in a readable site format.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Component</th><th>Role / Description</th><th>Reference</th><th>Qty</th></tr></thead><tbody><tr><td>TL783</td><td>High-voltage adjustable regulator</td><td>VR1</td><td>1</td></tr><tr><td>173950336</td><td>4.75-36 V input, 3.3 V output, 0.5 A output</td><td>U2</td><td>1</td></tr><tr><td>173010578</td><td>8-28 V input, 5 V output, 1 A output</td><td>U1</td><td>1</td></tr><tr><td>IXTH200N10T</td><td>100 V N-channel MOSFET high-current power switch</td><td>Q1-Q12</td><td>12</td></tr><tr><td>B0505S-1WR3</td><td>Isolated DC/DC converter module</td><td>PS1-PS3</td><td>3</td></tr><tr><td>STM32F446RET6</td><td>ARM Cortex-M4 main controller</td><td>U3</td><td>1</td></tr><tr><td>LM2596HV</td><td>3 A buck voltage regulator</td><td>IC4</td><td>1</td></tr><tr><td>IRS21867S</td><td>High-side / low-side MOSFET driver</td><td>IC1-IC3</td><td>3</td></tr><tr><td>INA229</td><td>85 V, 20-bit precision current/voltage/power monitor</td><td>U4</td><td>1</td></tr></tbody></table></div><p>This technical summary presents the power electronics, control, protection, and enclosure decisions of the Vol.1 board.</p><div class=\"hud-table-wrap\"><table class=\"hud-benchmark-table\"><thead><tr><th>Feature</th><th>Value / Description</th></tr></thead><tbody><tr><td>Switching device</td><td>IXTH200N10T N-channel MOSFET</td></tr><tr><td>Driver IC</td><td>IRS2186 / IRS21867S high-side and low-side MOSFET driver</td></tr><tr><td>Controller</td><td>STM32F446RET6, ARM Cortex-M4, 180 MHz</td></tr><tr><td>Control approach</td><td>Closed-loop Hall-feedback BLDC commutation and PWM control</td></tr><tr><td>Protection</td><td>80 A fuse, INA229 current/temperature monitoring, safe-mode algorithm</td></tr><tr><td>Power / Voltage / Current</td><td>2.5 kW / 48 V / 50 A with transient current margin</td></tr><tr><td>PCB / enclosure</td><td>200 x 150 mm PCB; 120 x 250 x 250 mm enclosure approach</td></tr><tr><td>Reported efficiency</td><td>90%</td></tr></tbody></table></div>",
          "detailImage": "vol1/Resim29.png",
          "teamIds": [
                    "team-hidroana"
          ],
          "scientificMerit": "<h4>4.2.Kontrol Algoritması</h4><strong class=\"method-subtitle\">Sürücü kontrolünün konsepti ve türü (analog/dijital kontrol, FOC, DTC, V/f kontrol, vb.)</strong><br><p>Sürücünün kontrolü STM32F446RET6 işlemcisi tarafından yapılmaktadır. İşlemci STM32CUBE IDE isimli program vasıtasıyla kodlanmıştır. STM32F446RET6’nın tercih edilmesinin sebebi 180MHz gibi yüksek bir hızda çalışmasıdır.</p><p>Algoritmaya ilk olarak, sürücülere PWM sinyalleri sağlayıp motoru döndürerek başlanmıştır. Algoritma temel anlamda motorun istenilen yönde ve hızda dönmesi, hızı ve sıcaklığı hesaplaması, yüksek akım ve sıcaklık koruması gibi gerekli güvenlik önlemlerinin alınması işlemlerini gerçekleştirmek üzere tasarlanmıştır. Kontrolcü üzerinde, akım, voltaj, sıcaklık ve güç değerlerini okumakta olan Texas Instruments’in INA229 entegresi bulunmaktadır. INA229 ile STM32F446RET6 SPI haberleşme protokolü kullanarak haberleşmektedir.</p><strong class=\"method-subtitle\">PWM sinyallerinin oluşturulduğu algoritma</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim6.png\" alt=\"PWM sinyallerinin oluşturulduğu algoritma\"><figcaption>Şekil V1.1. PWM sinyallerinin oluşturulduğu algoritma.</figcaption></figure></div><p>Bu algoritma, motorun istenilen fazlarına sinyal verilmesini sağlar. A_H,…,C_H olarak belirtilen kısımlar yüksek taraflara PWM sinyallerinin verildiği kısımlardır. Bu kısımlara 0 ile 100 arasında bir değer girilir. Bu değere görev döngüsü denmektedir. A_L,…,C_L olarak belirtilen kısımlar düşük taraflara verilen voltajı belirler. Bu kısımların 1 olması durumunda gerekli voltaj sağlanır ve anahtarlama yapılmış olur. 0 olması durumunda voltaj verilmez ve anahtarlama yapılmaz.</p><strong class=\"method-subtitle\">Motorun saat yönünün tersine dönmesini sağlayan algoritma</strong><br><p>Bu algoritma motorun saat yönünün tersine dönmesini sağlar. Başlangıçta yer alan fonksiyon pedaldan gelen değere göre bir görev döngüsü değeri belirler. Bu değer 0 ile 100 arasındadır ve motorun ne kadar hızlı döneceğini belirler. “motor_state” değişkeni, motorun o anki konumunu söyleyen bir değişkendir. Algoritma içerisinde motorun anlık konumuna göre A,B veya C fazlarının yüksek veya düşük taraflarına gerekli sinyal ve voltaj gönderilir. Fazlara voltaj uygulandıkça motor dönmeye başlar ve motor döndükçe “motor_state” değişkeni motorun anlık konumuna göre değişir. Bu böyle devam eder ve motor saat yönünün tersinde dönmeye başlar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim7.png\" alt=\"Motorun saat yönünün tersine dönmesini sağlayan algoritma\"><figcaption>Şekil V1.2. Motorun saat yönünün tersine dönmesini sağlayan algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Dakikadaki devir sayısını hesaplayan algoritma</strong><br><p>Bu algoritma, sistemin başladığı andan itibaren dakikadaki devir sayısını hesaplamaktadır. Bunun için motorun konumu bilinmelidir ve motorun anlık konumu, motorda bulunan Hall sensörleri tarafından gelen bilgiler ile belirlenir. Algoritma temelde, motorun bir tam tur attığı zamanı hesaplamaktadır. Algoritmada ilk olarak motorun anlık konumu hesaplanır. Bu değer kaydedilir. Daha sonrasında zaman ilerledikçe motorun yeni konumu ile eski konumu farklı mı diye kontrol edilir. Farklı olması durumunda bu işlem böyle 6 defa devam eder. 6 defa devam etmesinin sebebi ise, motorun içinde bulunan Hall sensörlerinin verdiği değerlere göre, motorun yalnızca 6 farklı konumda bulunabileceğidir. 6. işlemin sonunda aradan geçen zaman işlemcinin saatini kullanarak hesaplanır. Süre mikro saniye cinsinden hesaplanır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim8.png\" alt=\"Dakikadaki devir sayısını hesaplayan algoritma\"><figcaption>Şekil V1.3. Dakikadaki devir sayısını hesaplayan algoritma.</figcaption></figure></div><strong class=\"method-subtitle\">Kontrol Blok Şeması</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim9.png\" alt=\"Kontrol Blok Şeması\"><figcaption>Şekil V1.4. Kontrol Blok Şeması.</figcaption></figure></div><h4>4.3. Simülasyon Calışmaları</h4><strong class=\"method-subtitle\">Simülasyon parametreleri (örnekleme zamanı, çözünürlük zamanı, vb.)</strong><br><p>Simülasyon çalışmalarında Proteus yazılımı kullanılmış olup. Motora giden faz beslemelerinin simüle edilmiş hali aşağıdaki görselde MOSFET sürücü devre olarak yapılmıştır.</p><p>Örnekleme zamanı, simülasyonun doğruluğunu ve performansını etkileyen önemli bir parametredir. Kontrol algoritmasının çalışması için yeterince küçük bir örnekleme zamanı secilmistir.</p><p>Mikrodenetleyici tabanlı kontrol: 100 µs - 1 ms (10 kHz - 1 kHz)</p><p>Yüksek hassasiyetli kontrol: 10 µs - 100 µs (100 kHz - 10 kHz)</p><p>Çözünürlük zamanı, simülasyonun zaman adımının ne kadar küçük olacağını belirler. Daha küçük zaman adımları daha hassas sonuçlar sağlar ancak simülasyon süresini uzatır. Bu, örnekleme zamanının 10-100 katı kadar küçük bir değer seçilerek belirlenmiştir.</p><p>Yüksek çözünürlük: 1 µs - 10 µs (1 MHz - 100 kHz)</p><p>Düşük çözünürlük: 10 µs - 100 µs (100 kHz - 10 kHz)</p><p> Örnekleme Zamanı: 0.001 saniye (1ms)</p><p> Çözünürlük Zamanı: 0.0001 saniye (0.1ms)</p><p> Simülasyon Süresi: 10 saniye</p><p> Başlangıç Hızı: 0 RPM</p><p> Yük Ataleti: 0.01 kg·m²</p><p> Zaman Adımları: 0.0001 saniye (0.1ms)</p><strong class=\"method-subtitle\">Şematik çizim</strong><br><strong class=\"method-subtitle\">Half Bridge MOSFET Katmanı</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim10.png\" alt=\"Half Bridge MOSFET Katmanı\"><figcaption>Şekil V1.5. Half Bridge MOSFET Katmanı.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim11.png\" alt=\"Half Bridge MOSFET Katmanı\"><figcaption>Şekil V1.6. Half Bridge MOSFET Katmanı.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim12.png\" alt=\"Half Bridge MOSFET Katmanı\"><figcaption>Şekil V1.7. Half Bridge MOSFET Katmanı.</figcaption></figure></div><p>Yukarıdaki görsellerde görünen MOSFET blokları motor sürücünün güç çıkışı yani motorun üç faz besleme çıkışlarıdır. A High, B High, C High ve A Low, Low,C Low olmak üzere altı farklı çıkış vardır. Motor konumuna göre STM32F446RET6 kontrolcüsünden gerekli giriş sinyalleri alınarak MOSFET sürücülerine, ordan da MOSFET’ lere iletilir. Bu sinyallere göre MOSFET’ler iletime geçer veya iletimi keser.</p><strong class=\"method-subtitle\">Ana Güç Kapasitörleri</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim13.png\" alt=\"Ana Güç Kapasitörleri\"><figcaption>Şekil V1.8. Ana Güç Kapasitörleri.</figcaption></figure></div><p>DC-link kondansatörleri, motor sürücüsünün performansını, verimliliğini ve güvenilirliğini artırmada kritik bir rol oynar. Gerilim dalgalanmalarını azaltarak, enerji depolayarak, gerilim dengeleyerek, EMI/RFI filtreleyerek ve ısı yönetimini iyileştirerek motor sürücüsünün daha stabil, verimli ve uzun ömürlü olmasını sağlarlar.</p><strong class=\"method-subtitle\">+48 Vin / +45 Vout TL783</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim14.png\" alt=\"+48 Vin / +45 Vout TL783\"><figcaption>Şekil V1.9. +48 Vin / +45 Vout TL783.</figcaption></figure></div><p>TL783, yüksek giriş gerilimlerinden düşük çıkış gerilimlerine sabit bir şekilde regülasyon sağlamak için kullanılan güvenilir ve çok yönlü bir voltaj regülatörüdür. Geniş voltaj aralığı, ayarlanabilir çıkış gerilimi ve koruma özellikleri sayesinde kartta regülatör kısmında yer almaktadır.</p><strong class=\"method-subtitle\">+45 Vin / +15 Vout LM2596HV</strong><br><p>LM2596HV, yüksek giriş voltajlarını düşük çıkış voltajlarına verimli bir şekilde düşüren voltaj regülatörüdür. Geniş giriş voltaj aralığı, ayarlanabilir çıkış voltajı, yüksek çıkış akımı ve koruma özelliklerinden dolayı +15V gerilim elde etmek için bu regülatörü kullanılmıştır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim15.png\" alt=\"+45 Vin / +15 Vout LM2596HV\"><figcaption>Şekil V1.10. +45 Vin / +15 Vout LM2596HV.</figcaption></figure></div><strong class=\"method-subtitle\">+15 Vin / +5 Vout WPME-FDSM</strong><br><p>WPME-FDSM, geniş giriş voltaj aralığı (8V- 28V) ve sabit 5V çıkış voltajı ile çeşitli elektronik uygulamalarda kullanılabilen verimli ve güvenilir bir voltaj regülatörüdür. THT montaj tekniği ve SIP-3 form faktörü sayesinde kompakt ve dayanıklı bir yapıya sahiptir. Maksimum 1A çıkış akımı sağlayarak +3.3V regülatörü için güvenli bir çalışma ortamı sunar.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim16.png\" alt=\"+15 Vin / +5 Vout WPME-FDSM\"><figcaption>Şekil V1.11. +15 Vin / +5 Vout WPME-FDSM.</figcaption></figure></div><strong class=\"method-subtitle\">+5 Vin / +3.3 Vout WPME-FDSM</strong><br><p>THT montaj tekniği ve SIP-3 form faktörü sayesinde kompakt ve dayanıklı bir yapıya sahiptir. STM32 mikrokontrolcu için gereken 3.3 V gerilim değerini mümkün olan en az gürültü ile sağlamaktadır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim18.png\" alt=\"+5 Vin / +3.3 Vout WPME-FDSM\"><figcaption>Şekil V1.12. +5 Vin / +3.3 Vout WPME-FDSM.</figcaption></figure></div><strong class=\"method-subtitle\">Izole +15 Vin / +15 Vout B0505S-1WR3</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim19.png\" alt=\"Izole +15 Vin / +15 Vout B0505S-1WR3\"><figcaption>Şekil V1.13. Izole +15 Vin / +15 Vout B0505S-1WR3.</figcaption></figure></div><p>Bootstrap devresi, bir güç anahtarlama devresindeki yüksek taraf sürücüsünün (high-side driver) kapı (gate) voltajını sağlamak için kullanılmıştır. Bootstrap kondansatörü, bu devrede kullanılan ana bileşenlerden biridir ve yüksek taraf sürücüsünün çalışması için gerekli olan voltajı geçici olarak depolar. Bu kondansatör, düşük taraf anahtarlama transistörünün açık olduğu sürede şarj olur ve daha sonra yüksek taraf transistörünün kapısını sürmek için bu depolanan enerjiyi kullanır. Fakat bazı ekstrem koşullarda fazla yük çekmesi sonucunda anahtarlama elemanını sürecek kapasitör yeterli gerilimi sağlamayabilir. Bu durumu önlemek amacı ile, kondansatöre bağlı izole DA/DA dönüştürücü kullanılmasına karar verilmiştir.</p><strong class=\"method-subtitle\">Hall Efekt Sensörleri</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim20.png\" alt=\"Hall Efekt Sensörleri\"><figcaption>Şekil V1.14. Hall Efekt Sensörleri.</figcaption></figure></div><strong class=\"method-subtitle\">Güç ve Kullanıcı Ledleri</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim21.png\" alt=\"Güç ve Kullanıcı Ledleri\"><figcaption>Şekil V1.15. Güç ve Kullanıcı Ledleri.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim22.png\" alt=\"Güç ve Kullanıcı Ledleri\"><figcaption>Şekil V1.16. Güç ve Kullanıcı Ledleri.</figcaption></figure></div><strong class=\"method-subtitle\">STM32F446RET6</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim23.png\" alt=\"STM32F446RET6\"><figcaption>Şekil V1.17. STM32F446RET6.</figcaption></figure></div><strong class=\"method-subtitle\">Simülasyon adımları</strong><br><strong class=\"method-subtitle\">MOSFET Kapı Sinyali</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim24.jpg\" alt=\"MOSFET Kapı Sinyali\"><figcaption>Şekil V1.18. MOSFET Kapı Sinyali.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim25.png\" alt=\"MOSFET Kapı Sinyali\"><figcaption>Şekil V1.19. MOSFET Kapı Sinyali.</figcaption></figure></div><p>PWM sinyali, MOSFET'in anahtarlama döngüsünü belirler. N-kanallı MOSFET'lerde genellikle gate terminaline yüksek bir voltaj uygulanarak MOSFET açılır. Yani, ne kadar süreyle MOSFET açık (iletim durumunda) olacak ve ne kadar süreyle kapalı (kesim durumunda) olacağı, gerilimin uygulanma süresine bağlıdır.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim26.png\" alt=\"MOSFET Kapı Sinyali\"><figcaption>Şekil V1.20. MOSFET Kapı Sinyali.</figcaption></figure></div><strong class=\"method-subtitle\">48 V / 15 V Buck Converter</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim27.png\" alt=\"48 V / 15 V Buck Converter\"><figcaption>Şekil V1.21. 48 V / 15 V Buck Converter.</figcaption></figure></div><strong class=\"method-subtitle\">15 / 5V DA-DA Voltaj Düşürücü</strong><br><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"vol1/Resim28.png\" alt=\"15 / 5V DA-DA Voltaj Düşürücü\"><figcaption>Şekil V1.22. 15 / 5V DA-DA Voltaj Düşürücü.</figcaption></figure></div><p>Giriş gerilimi anahtarlama transistorünün kontrolü ile endüktöre iletilir. Bu transistor, genellikle bir PWM sinyali ile sürülerek açılıp kapanır. Anahtarlama sırasında, endüktör üzerinde bir manyetik alan oluşturulur. Bu manyetik alan, endüktörde depolanan enerjiyi temsil eder. Endüktör üzerinde depolanan manyetik enerji, anahtarlama transistorünün kapalı olduğu zamanlarda çıkış devresine aktarılır. Endüktör üzerinde oluşan manyetik alanın bozulmasıyla (anahtarlama ile), endüktörden çıkan enerji, çıkış gerilimini oluşturur.</p>"
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
            "title": "DEEP LEARNING BASED BIRD DETECTION SYSTEM FOR AIRPORTS",
            "category": "gomulu",
            "summary": "This TÜBİTAK 2209-A research project develops an image-based deep learning pipeline to reduce bird-strike risk around airports and runway environments. Using YOLOv8n, the system aims to detect birds in camera imagery, classify them at species level, and interpret each detection with a confidence value. The work covers dataset preparation, Roboflow-based annotation, augmentation, model training, and performance validation as an end-to-end AI application. The resulting approach can support airport early warning workflows by adding visual species-level information that radar-based systems cannot provide alone.",
            "description": "This project was developed to reduce the impact of bird strikes on flight safety, operational continuity, and maintenance costs. It designs an image-based deep learning pipeline to complement radar-based systems, which are limited in identifying bird species, color, size, count, and single-bird behavior. While the proposal targeted a YOLOv8 and MobileNetV2 integration, the thesis phase trained and evaluated a YOLOv8n model on a Roboflow-prepared dataset using precision, recall, F1, and mAP metrics.",
            "image": "bird-detection-airport-cover.png",
            "detailImage": "bird-detection-airport-cover.png",
            "tags": [
                  "YOLOv8n",
                  "Roboflow",
                  "Python",
                  "Deep Learning",
                  "TÜBİTAK 2209-A"
            ],
            "specs": [
                  {
                        "name": "Object Detection Model",
                        "value": "YOLOv8n"
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
                  },
                  {
                        "name": "Project No",
                        "value": "1919B012323737"
                  },
                  {
                        "name": "Team",
                        "value": "Onur Can DURUKAN, Hakan HAMİTOĞLU, Elif Dila GÖNEN, Ahmet Soner GÜLEÇ"
                  }
            ],
            "overview": "<p>This project is a deep learning-based bird detection system developed to reduce bird-strike risk around airports and flight paths. Supported by TÜBİTAK 2209-A, the work starts from the fact that bird strikes are not only a structural and engine-damage problem, but also a major safety, operational continuity, and maintenance-cost issue. According to the proposal and thesis, bird strikes create an annual cost exceeding 1.21 billion USD for aviation, and ICAO IBIS data reported 273,343 bird-strike events between 2016 and 2021.</p><p>The core problem is that radar-based systems remain limited in expressing bird species, color, estimated size, quantity, and individual behavior. Radar has advantages in range and weather independence, but struggles with small target discrimination, single-bird tracking, and species-level risk estimation. The proposal highlights that radar tracking performance may vary around 40-80 percent for flocks and remain around 30 percent for a single bird.</p><p>Therefore, the project does not aim to simply replace radar, but to complement it with image-based deep learning outputs. The intended system detects birds from camera imagery, interprets them at species level, and can later be combined with radar distance data to create richer warning and risk-estimation logic.</p>",
            "scientificMerit": "<p>The original value of the project is its attempt to move the bird-strike problem beyond a simple target/no-target approach and toward visual interpretation of species, location, density, and risk. The proposal frames the research question as: how can an image-based bird recognition system be developed to reduce bird strikes? It evaluates the potential of YOLOv8 and MobileNetV2 models for bird detection and species identification in relation to aviation safety.</p><p>The initial design proposed a two-stage architecture: fast bird detection with YOLOv8, followed by species classification with a lightweight classifier such as MobileNetV2 for detections above a 50 percent confidence threshold. MobileNetV2 was considered due to its low computational cost, low memory usage, embedded/mobile suitability, and fast classification capability. In the thesis implementation, considering dataset scale and real-time requirements, YOLOv8n was selected and trained as the practical core model.</p>",
            "architecture": "<p>The system architecture consists of data collection, data cleaning, annotation, augmentation, export to YOLOv8 format, model training, inference testing, and performance evaluation. The proposal prioritized bird species around Istanbul Airport using IGA environmental studies, FAA Wildlife Strike data, and open visual sources. In the thesis implementation, the selected classes were Seagull, Stork, Eagle, Falcon, Pigeon, Owl, and Crow.</p><p>The dataset was created on Roboflow as an object detection project named Bird_Detection. Approximately 200 images per species were uploaded, organized by species, and annotated with bounding boxes. During annotation, correct class assignment, clear object boundaries, and marking all target birds in each image were treated as core quality criteria. Since incorrect labels can directly increase false positives and false negatives, data cleaning and label consistency were emphasized.</p><p>Augmentation was applied to make the dataset more robust to field conditions. Images were rotated 90 degrees clockwise and counterclockwise, with additional random rotation between -15 and +15 degrees. Brightness was increased or decreased by 25 percent to represent different lighting conditions, blur up to 1.25x simulated low-quality camera imagery, and random noise up to 5 percent simulated sensor and environmental degradation.</p><p>The improved dataset was exported from Roboflow in YOLOv8 PyTorch format. The output structure contained train, valid, and test directories, with an approximate split of 70 percent training, 20 percent validation, and 10 percent testing. This enabled the model's generalization capability to be evaluated beyond the training data.</p><p>Model training was carried out in an Anaconda environment using Ultralytics YOLOv8 and PyTorch. A Python 3.8 environment was prepared, the ultralytics package was installed, and training was launched using the Roboflow-generated data.yaml file. The selected model was the pretrained yolov8n.pt nano model; training was structured around 100 epochs and 640x640 input images. During training, epoch, loss, mAP, and time values were monitored and the outputs were used for evaluation.</p><p>After training, the model was tested through inference on sample images. The thesis reported correct predictions with confidence values of 0.95 for stork, 0.89 for seagull, 0.80 for crow, and 0.86 for falcon. These examples show that the model could distinguish multiple bird species and produce visual detection outputs that could feed an airport early warning system.</p><h4>Artificial Intelligence Approach</h4><p>From Chapter 2 onward, the thesis frames the project as an image-based AI layer that complements traditional bird-strike mitigation methods. The system aims to detect birds, identify their species, localize them in the frame, and produce confidence values that can later support an airport warning workflow.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-yolo-detection-overview.png\" alt=\"YOLO bird detection example\"><figcaption>Figure 2.1. YOLO bird detection example.</figcaption></figure></div><p>CNN-based feature extraction was used as the conceptual foundation, while YOLO was selected because it can detect object location and class in a single pass. This makes YOLOv8n a practical candidate for real-time airport perimeter monitoring, where speed and detection sensitivity must be balanced.</p><h4>Roboflow Dataset Pipeline</h4><p>Roboflow was used to organize images, manage classes, annotate birds with bounding boxes, augment the dataset, and export it in YOLOv8 PyTorch format.</p><p>The dataset was prepared to include different species, viewpoints, poses, and backgrounds. Rotation, brightness changes, blur, and noise were applied so the model could become more robust to field-like camera and lighting conditions.</p><h4>YOLOv8 Training and Inference</h4><p>The model was trained with Ultralytics YOLOv8 and PyTorch in an Anaconda environment. The pretrained YOLOv8n model was used as a lightweight baseline suitable for real-time inference.</p><div class=\"project-figure-grid\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-falcon-inference.png\" alt=\"Falcon inference\"><figcaption>Figure 2.8. Falcon prediction with 0.86 confidence.</figcaption></figure></div><p>The model was then evaluated through inference examples and performance curves, keeping the page focused on the outputs that best explain how the system works and how well it performs.</p>",
            "subsystems": [
                  {
                        "title": "Data Collection and Species Prioritization",
                        "desc": "Bird species and risk priorities were determined using Istanbul Airport context, FAA Wildlife Strike data, and open visual datasets."
                  },
                  {
                        "title": "Roboflow Annotation Pipeline",
                        "desc": "Images were annotated in Roboflow, bounding boxes were created, and dataset cleaning and augmentation steps were applied."
                  },
                  {
                        "title": "YOLOv8n Detection Model",
                        "desc": "The lightweight YOLOv8n model was trained as the real-time deep learning engine for bird object detection."
                  },
                  {
                        "title": "Warning and Integration Logic",
                        "desc": "The image-based detection output was designed to be extended into a warning system with radar distance data, camera systems, or UAV integration."
                  }
            ],
            "analysis": "<p>The thesis evaluated model performance using confusion matrix, precision-confidence, recall-confidence, precision-recall, F1 curve, label distribution, and overall training result plots. The confusion matrix showed strong separation in some species and confusion in visually similar classes. For Seagull, 99 samples were classified correctly while 6 were confused with Stork. For Falcon, 29 correct classifications were reported, while 9 samples were predicted as Pigeon and 4 as Seagull. Crow achieved 28 correct predictions with only 1 misclassification, while Pigeon had 34 correct predictions with some confusion against Seagull and Falcon.</p><p>The background class was weaker, with only 7 samples correctly identified and confusion with bird classes. This indicates that airport bird detection datasets should include not only target bird images, but also strong negative examples such as empty runway, sky, terminal surroundings, grass fields, and moving backgrounds. In an airport warning system, reducing both unnecessary false alarms and missed real bird risks is operationally important.</p><p>In the precision-confidence analysis, the model produced highly accurate outputs at high confidence levels. The average curve across classes reached 100 percent precision at 0.973 confidence. Crow performed strongly at high confidence values, while Stork and Owl were weaker at low confidence values but improved as confidence increased. This shows that the warning threshold should be selected according to the operational scenario.</p><p>In the recall-confidence analysis, the model captured positive examples better at low confidence thresholds, while recall decreased as the confidence threshold increased. The average recall level across classes reached 0.97. In a safety-critical bird-strike problem, high recall is especially valuable because missing an actual bird risk can be more dangerous than producing a false alarm.</p><p>The precision-recall curve reported high average precision values of 0.931 for Crow, 0.919 for Eagle, and 0.945 for Owl. Pigeon was weaker at 0.727. The average precision-recall value across all classes was 0.875, indicating a successful baseline while also showing that visually similar species and data imbalance require further improvement.</p><p>The F1 curve reached a maximum score of 0.78 at an optimal confidence threshold around 0.449. This point represents the most balanced operating region between precision and recall. Stronger F1 behavior in classes such as Crow, Eagle, and Falcon showed that the model can be stable for several species. Threshold optimization is therefore an important tool for adapting the warning system's sensitivity to operational needs.</p><p>In the overall training results, train/box_loss decreased from about 1.4 to 0.8, train/cls_loss decreased from about 3.5 to below 1, and train/dfl_loss decreased from about 1.7 to about 1.1. Validation losses followed a similar downward trend, suggesting that the model was not simply memorizing the training set. Precision increased from about 0.3 to above 0.8, recall improved from about 0.3 to 0.75, mAP50 reached about 0.85, and the stricter mAP50-95 metric reached about 0.60.</p><p>Overall, the thesis showed that image analysis and AI can provide a feasible complementary approach to traditional bird-strike mitigation methods. The YOLO architecture produced successful target detections, and with better cameras, larger balanced datasets, radar distance integration, and threshold optimization, the system can evolve into a lighter, cheaper, lower-power, and operationally useful airport bird warning system.</p><div class=\"project-figure-grid\"><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-confusion-matrix.png\" alt=\"YOLOv8 confusion matrix\"><figcaption>Figure 4.1. Class-level confusion matrix.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-precision-confidence.png\" alt=\"Precision-confidence curve\"><figcaption>Figure 4.2. Precision versus confidence threshold.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-recall-confidence.png\" alt=\"Recall-confidence curve\"><figcaption>Figure 4.3. Recall versus confidence threshold.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-pr-curve.png\" alt=\"Precision-recall curve\"><figcaption>Figure 4.4. Precision-recall curve.</figcaption></figure><figure class=\"project-figure-card\"><img src=\"bird-detection-figures/fig-f1-curve.png\" alt=\"F1 curve\"><figcaption>Figure 4.5. F1-confidence curve.</figcaption></figure></div><p>These plots show the model behavior beyond a single accuracy number. The confusion matrix reveals class-level strengths and confusions, while confidence curves show the trade-off between reducing false alarms and avoiding missed bird detections. The PR and F1 curves summarize the operating point, while the reported training metrics show decreasing losses with improving precision, recall, and mAP values.</p>",
            "achievements": "<p>The project was supported under the TÜBİTAK 2209-A University Students Research Projects Support Program with project number 1919B012323737. In the proposal phase, the work packages covered dataset preparation, preprocessing, model training, optimization/hyperparameter tuning, and testing; in the thesis phase, this structure was turned into a practical YOLOv8n-based detection model.</p><p>The study demonstrated how image-based AI systems can complement radar-based early warning approaches in aviation safety. Personally, the project provided experience in building data pipelines, training deep learning models, interpreting performance metrics, and approaching an aviation safety problem from an engineering perspective.</p>"
      },
      {
          "id": "project-5",
          "title": "INFLOBOT: AI-Supported Inflatable Soft MRO Robot",
          "category": "arge",
          "summary": "INFLOBOT is an AI-supported inflatable soft robot concept developed within Tulpar Tharros for aircraft fuel-tank and confined-space inspection. It combines illumination, visual sensing, CO2-based steering channels, oxygen support, and future defect-detection logic to reduce MRO time, technician risk, and workforce loss.",
          "description": "Developed through the Turkish Airlines & Turkish Technic Design Hackathon and TEKNOFEST Entrepreneurship process, INFLOBOT is a bio-inspired soft robotic maintenance assistant for aircraft fuel tanks and other confined aviation structures.",
          "image": "inflobot-figures/images.jpg",
          "detailImage": "inflobot-figures/images.jpg",
          "teamIds": [
                    "team-tulpar-tharros"
          ],
          "tags": [
                    "Soft Robotics",
                    "Inflatable Robot",
                    "MRO Aviation",
                    "TEKNOFEST",
                    "THY Design Hackathon"
          ],
          "specs": [
                    {
                              "name": "Organization / Team",
                              "value": "Tulpar Tharros Aviation Society"
                    },
                    {
                              "name": "Support Programs",
                              "value": "Turkish Airlines & Turkish Technic Design Hackathon 2023 and TEKNOFEST Entrepreneurship Competition"
                    },
                    {
                              "name": "Industry Context",
                              "value": "Detailed aircraft fuel-tank inspection and confined-space MRO workflows"
                    },
                    {
                              "name": "My Role",
                              "value": "Co-founder; electrical-electronic systems, system architecture, and 3D compressor support-unit design"
                    },
                    {
                              "name": "Project Team",
                              "value": "Ahmet Soner GÜLEÇ, Özgür KURT, İltemir Taha BİNALİ, Sühan Göktuğ AYDEMİR, Bahadır SARIKARAMAN"
                    }
          ],
          "overview": "<p>INFLOBOT is an AI-supported inflatable soft robot concept developed within Tulpar Tharros for aircraft fuel-tank and confined-space inspection. The project frames sustainability in aviation not only as an environmental topic, but also as a way to create safer, faster, and more efficient maintenance workflows.</p><p>Technical tours, internships, and research showed that time is a key parameter affecting base maintenance, line maintenance, and inspection processes. Fuel-tank inspection, stabilizer GVI, FPB/avionics compartment inspection, and borescope inspection were analyzed as unavoidable but time-consuming processes that can be improved rather than replaced completely.</p>",
          "scientificMerit": "<p>The main fuel-tank maintenance problems are insufficient lighting, tank size and accessibility, ventilation, mask usage, and oxygen deficiency. Additional risks include emergency evacuation under panic or hypoxia, static/electrical arc risks, mandatory pauses, and the need for technician intervention even when autonomous systems can detect faults.</p><p>For this reason, rigid fully autonomous robots were not considered sufficient. The selected approach is a bio-inspired inflatable soft robot that can extend, shorten, and steer through pressure-controlled channels while reducing contact-related damage risks.</p>",
          "architecture": "<h4>Fuel Tank Structure and Current Method</h4><p>Aircraft fuel tanks are divided into wing-box, center and surge tank regions. Access panels, ribs and cut-outs define where technicians and inspection tools can move, which makes visual inspection a confined-space problem rather than a simple camera task.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim4.png\" alt=\"Aircraft fuel tank layout\"><figcaption>Aircraft fuel tank layout and fuel transfer paths.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim3.png\" alt=\"Fuel tank rib and cut-out structure\"><figcaption>Ribs, cut-outs and fuel inlet/outlet regions inside the tank.</figcaption></figure></div><p>Current inspection requires fuel drainage, electrical isolation, ventilation, PPE usage, tank entry, and external safety support. The method is necessary, but it creates long waiting periods, ergonomic difficulty, and contact risk for sensitive cables, valves and pipes.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim2.png\" alt=\"Technician inside a fuel tank\"><figcaption>Technician working inside a narrow aircraft fuel tank volume.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim7.png\" alt=\"Fuel tank maintenance setup\"><figcaption>Traditional tank inspection setup with lighting, air line and safety support.</figcaption></figure></div><h4>Bio-inspired Soft Robot Decision</h4><p>The selected concept is a vine/inflatable soft robot inspired by sarcomere and spine-like structures. It extends through pressure, changes direction through differentiated channels, and adapts to confined aircraft structures with lower contact risk.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim1.png\" alt=\"INFLOBOT module summary\"><figcaption>INFLOBOT module logic: oxygen support, lighting, detailed inspection, mobility and emergency support.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim9.png\" alt=\"Soft robot extension principle\"><figcaption>Pressure-driven extension and eversion principle of a vine robot.</figcaption></figure></div><p>The soft body does not depend on rigid wheels or tracks. Instead, internal pressure extends the body from the tip, allowing the system to pass through tight spaces with reduced surface damage risk.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim10.png\" alt=\"Soft robot surface tests\"><figcaption>Soft robot behavior on difficult surfaces and narrow gaps.</figcaption></figure></div><h4>TA-8 and TS-5 Variants</h4><p>TA-8 focuses on lighting and oxygen support, while TS-5 focuses on confined-space visual inspection through extension arms, camera/lens systems, sensors and directed control.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim8.png\" alt=\"Camera-guided soft robot\"><figcaption>Camera-guided soft robot motion and target/obstacle view.</figcaption></figure></div><h4>Material, Hardware and Compressor Support Unit</h4><p>The design uses flexible TPE/TPU-like material logic, camera and sensor payloads, LED/OLED lighting, safe routing, a control interface, and a compressor support unit for pressure management.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim5.png\" alt=\"Compressor support unit top view\"><figcaption>Top-view 3D model of the compressor support unit.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/Resim6.png\" alt=\"Compressor support unit exterior\"><figcaption>Exterior model with operator panel and air connections.</figcaption></figure></div><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/inflobot-soft-robot-animation.gif\" alt=\"INFLOBOT animation\"><figcaption>Animated concept of the INFLOBOT motion logic.</figcaption></figure></div>",
          "subsystems": [
                    {
                              "title": "TA-8 Support Arm",
                              "desc": "Main soft robotic support concept for lighting, oxygen support, and steerable extension in fuel tanks."
                    },
                    {
                              "title": "TS-5 Inspection Head",
                              "desc": "Compact camera/sensor inspection concept for wing tips, FPB, avionics compartments, and tight areas."
                    },
                    {
                              "title": "CO2 Steering System",
                              "desc": "Pneumatic actuation infrastructure that extends and steers the robot through controlled pressure channels."
                    },
                    {
                              "title": "Vision and AI Layer",
                              "desc": "Camera and sensor data layer intended for future crack, corrosion, leak, and deformation detection."
                    }
          ],
          "analysis": "<p>The TEKNOFEST Entrepreneurship file positioned INFLOBOT inside the growing aircraft MRO market. It cited a global MRO market of about 85 billion USD in 2022 and a 2027 projection of about 109 billion USD, with Turkey holding around 2.3 percent of the market.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/inflobot-market-mro.png\" alt=\"MRO market chart\"><figcaption>Figure 3.1. MRO market size and categories.</figcaption></figure></div><p>The project competes indirectly with breathing devices, oxygen cylinders, borescopes, and lighting equipment. INFLOBOT's value proposition is combining movement, inspection, illumination, oxygen support, and defect-detection potential in a single platform.</p><div class=\"project-figure-grid inline-figure-flow\"><figure class=\"project-figure-card\"><img src=\"inflobot-figures/inflobot-competition-table.png\" alt=\"INFLOBOT competitor analysis\"><figcaption>Figure 3.2. Competitor comparison.</figcaption></figure></div>",
          "achievements": "<p>INFLOBOT was presented as a finalist-level solution in the Turkish Airlines & Turkish Technic Design Hackathon and developed as an entrepreneurship-oriented product file for TEKNOFEST. Personally, it combined my aviation maintenance background with electronics, 3D design, robotic systems thinking, and AI-supported inspection concepts.</p>"
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
    nav_project_teams: "PROJE TAKIMLARI",
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
    col_experience: "DENEYİM",
    tag_skills: "SYS_04 // CALIBRATION_DATA",
    title_skills: "TEKNİK YETENEKLER",
    tag_project_teams: "SYS_05 // TEAM_REGISTRY",
    title_project_teams: "PROJE TAKIMLARI",
    tag_gallery: "SYS_06 // VISUAL_ARCHIVE",
    title_gallery: "GALERİ",
    gallery_empty_title: "FOTOĞRAFLAR YAKINDA EKLENECEK",
    gallery_empty_desc: "Proje takımları, yarışmalar, sunumlar ve saha çalışmalarına ait görseller bu alanda galeri formatında gösterilecek.",
    tag_projects: "SYS_07 // RECORDED_MISSIONS",
    title_projects: "PROJELER",
    tag_contact: "SYS_08 // OPEN_CHANNEL",
    title_contact: "İLETİŞİM",
    contact_send_signal: "",
    contact_desc: "Aviyonik sistemler, gömülü donanım tasarımı, PCB geliştirme veya otonom sistem projelerinde iş teklifleri, kariyer fırsatları ve proje iş birliklerini değerlendirmek için aşağıdaki kanallar üzerinden veya doğrudan mesaj aracılığıyla benimle iletişime geçebilirsiniz.",
    filter_all: "HEPSİ",
    filter_hardware: "DONANIM",
    filter_embedded: "GÖMÜLÜ",
    filter_research: "AR-GE",
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
    back_to_portfolio: "PORTFOLYOYA DÖN",
    heading_team_overview: "// 01. TAKIM ÖZETİ",
    heading_team_role: "// 02. ROL VE SORUMLULUKLAR",
    heading_team_outputs: "// 03. ÇIKTILAR VE DERECELER",
    heading_team_projects: "TAKIM KAPSAMINDAKİ PROJELER",
    team_role_label: "Rol",
    team_period_label: "Dönem",
    team_intro_pdf: "TAKIM TANITIM PDF'İ",
    heading_specs: "PROJE HAKKINDA",
    heading_overview: "// 01. PROJE ÖZETİ",
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
    nav_project_teams: "PROJECT TEAMS",
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
    col_experience: "EXPERIENCE",
    tag_skills: "SYS_04 // CALIBRATION_DATA",
    title_skills: "TECHNICAL SKILLS",
    tag_project_teams: "SYS_05 // TEAM_REGISTRY",
    title_project_teams: "PROJECT TEAMS",
    tag_gallery: "SYS_06 // VISUAL_ARCHIVE",
    title_gallery: "GALLERY",
    gallery_empty_title: "PHOTOS WILL BE ADDED SOON",
    gallery_empty_desc: "Images from project teams, competitions, presentations, and field work will be displayed here in a gallery layout.",
    tag_projects: "SYS_07 // RECORDED_MISSIONS",
    title_projects: "PROJECTS",
    tag_contact: "SYS_08 // OPEN_CHANNEL",
    title_contact: "CONTACT",
    contact_send_signal: "",
    contact_desc: "If you would like to discuss job opportunities, career proposals, or project collaborations in avionics systems, embedded hardware design, PCB development, or autonomous systems, feel free to reach out through the channels below or send a direct message.",
    filter_all: "ALL",
    filter_hardware: "HARDWARE",
    filter_embedded: "EMBEDDED",
    filter_research: "R&D",
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
    back_to_portfolio: "BACK TO PORTFOLIO",
    heading_team_overview: "// 01. TEAM OVERVIEW",
    heading_team_role: "// 02. ROLE & RESPONSIBILITIES",
    heading_team_outputs: "// 03. OUTPUTS & ACHIEVEMENTS",
    heading_team_projects: "PROJECTS UNDER THIS TEAM",
    team_role_label: "Role",
    team_period_label: "Period",
    team_intro_pdf: "TEAM INTRO PDF",
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
<strong class="overview-subtitle">A. Projenin Problemi</strong><br><br>
Muharip hava araçlarında uçuş performans büyüklükleri, görev bilgisayarı ve aviyonik yazılım içinde çoğunlukla arama tabloları ve interpolasyon yöntemleri ile temsil edilir. Bu yaklaşım deterministik ve açıklanabilir olsa da tablo çözünürlüğü, bellek maliyeti ve ara noktalardaki doğrusal olmayan davranışlar nedeniyle sınırlıdır. Projenin çıkış noktası tam olarak bu ikilemdi: <strong>yüksek doğruluk</strong>, <strong>düşük gecikme</strong> ve <strong>kısıtlı donanımda çalışabilirlik</strong> aynı anda sağlanabilir mi?<br><br>
Bu soru özellikle Specific Range gibi operasyonel kararları etkileyen performans değerlerinde önemlidir. Çünkü model yalnızca masaüstü ortamında iyi sonuç vermemeli; aynı zamanda aviyonik sistemlerde beklenen hızlı yanıt, düşük bellek kullanımı ve açıklanabilir karar gerekçesi beklentilerine de yaklaşmalıdır. Bu nedenle çalışma, klasik LUT/interpolasyon mantığını tamamen yok saymak yerine onu referans aile olarak koruyup, XGBoost ve FT-Transformer gibi öğrenen modellerle birlikte değerlendiren karşılaştırmalı bir sistem olarak tasarlandı.<br><br>

<strong class="overview-subtitle">B. Araştırma Kapsamı</strong><br><br>
Çalışma TUSAŞ LIFT UP Sanayi Odaklı Lisans Bitirme Projeleri Programı ve TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri desteğiyle yürütüldü. KAAN hedef platformu için doğrudan gizli/veri erişimi yerine, yöntem geliştirme ve doğrulama amacıyla F-18 uçuş el kitabı/performans nomogramları vekil veri kaynağı olarak ele alındı. Amaç, üreticiye ait ham veri tabanına erişmek değil; yayınlanmış performans grafiklerinde temsil edilen düzeltilmiş uçuş bilgisini sayısal ve modellenebilir bir veri setine dönüştürmekti.<br><br>
Bu kapsamda çalışma veri eldesinden model karşılaştırmasına kadar genişledi: nomogram mantığı incelendi, eğri dijitasyonu ve eksen kalibrasyonu yapıldı, One Engine / Two Engine senaryoları master veri setinde birleştirildi, referans nümerik model kuruldu ve aynı veri üzerinde XGBoost ile FT-Transformer modelleri kıyaslandı. Son aşamada sonuçlar yalnızca hata metrikleriyle değil; gecikme, bellek ayak izi, model boyutu ve gömülü sisteme aktarılabilirlik açısından yorumlandı.<br><br>

<strong class="overview-subtitle">C. Benim Rolüm</strong><br><br>
Proje lideri olarak veri dijitasyonu, modelleme protokolünün kurulması, XGBoost ve FT-Transformer kıyas akışının tasarlanması, NVIDIA Jetson Orin Nano hedef ortam profilinin yorumlanması, teknik raporların hazırlanması ve sanayi/akademik danışman sunumlarının bütünleştirilmesinde aktif rol aldım. Çalışmanın odağı yalnızca model eğitmek değil; aviyonik sistemlerde gerçekçi sayılabilecek kısıtlar altında hangi yaklaşımın neden tercih edileceğini mühendislik gerekçeleriyle ortaya koymaktı.<br><br>

<strong class="overview-subtitle">D. Ortaya Çıkan Ürün</strong><br><br>
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
Bu bölüm, projede ham uçuş performans dokümanından çalışan tahmin arayüzüne kadar kurulan hattı açıklar. Amaç yalnızca bir makine öğrenmesi modeli eğitmek değil; nomogramdaki analog mühendislik bilgisini temiz veri setine, referans nümerik modele, öğrenen modellere ve gömülü sistemde yorumlanabilir benchmark sonuçlarına dönüştüren uçtan uca bir sistem kurmaktır. Bu yüzden mimari veri kaynağı, dijitasyon, veri standardizasyonu, referans hesaplama ve öğrenen model katmanları olarak ayrılmıştır.<br><br>

<strong class="method-subtitle">2.1. Ham Veri ve Nomogram Mantığı</strong><br>
AFM/POH/EFM nomogramları, uçağın performans davranışını pilotun veya mühendisin hızlı okuyabileceği grafiklere sıkıştırır. Bu grafikler doğrudan ham sensör verisi değildir; tasarım hesapları, CFD/rüzgar tüneli çalışmaları, uçuş testleri, atmosfer düzeltmeleri ve emniyet marjlarından geçerek oluşturulur. Bu nedenle Specific Range eğrileri, aslında irtifa, Mach, gross weight, drag index, fuel flow ve motor konfigürasyonu arasındaki çok değişkenli fiziksel ilişkinin iki boyutlu gösterimidir.<br><br>
Bu projede nomogram, makine öğrenmesi için veri kaynağına dönüştürüldü. Bunun için önce grafikteki eğrinin temsil ettiği fiziksel büyüklük anlaşıldı; ardından standartlaştırılmış grafik değerini etkileyen faktörler ayrıştırıldı. Sıcaklık/irtifa motor verimini, ağırlık indüklenmiş sürüklemeyi, drag index parazitik sürüklemeyi, Mach ise özellikle transonik bölgede dalga sürüklemesini etkiler. Bu nedenle ham veri mantığı aşağıdaki ilişkiyle ifade edildi:<br>
<div class="formula-block"><span>SR<sub>Ham</sub> = SR<sub>Grafik</sub> / (f<sub>alt</sub> × f<sub>mach</sub> × f<sub>weight</sub> × f<sub>drag</sub>)</span></div>
Bu formül, grafikten okunan Specific Range değerinin tek başına model girdisi olmadığını; arkasındaki uçuş koşullarıyla birlikte anlam kazandığını gösterir. Böylece nomogram yalnızca görsel kaynak değil, modelleme hattının fiziksel dayanağı olarak kullanıldı.<br><br>

<strong class="method-subtitle">2.2. Dijitasyon Hattı</strong><br>
Dijitasyon hattının görevi, görsel nomogramı güvenilir sayısal noktalara dönüştürmektir. İlk aşamada MATLAB <code>DigitizeGraph.m</code> ve Python/OpenCV tabanlı klasik görüntü işleme yöntemleri değerlendirildi. Bu yöntemler eğri takibi için hızlı prototip sağladı; ancak havacılık grafiklerinde yoğun grid çizgileri, eksen metinleri, eğri etiketleri ve birbirine yakın geçen çizgiler bulunduğu için salt eşikleme yöntemi kararlı olmadı. Bu yüzden süreç, tek bir “görüntüyü oku” adımı yerine kontrollü alt adımlara ayrıldı.<br><br>
Ön işleme aşamasında grafik okunabilir çözünürlüğe getirildi, kontrast ve gürültü davranışı incelendi. Eğri ayırma aşamasında hedef eğri piksellerinin grid/metin arka planından ayrılması amaçlandı. Eksen kalibrasyonunda piksel koordinatlarının hangi Mach, altitude, gross weight veya drag index değerine karşılık geldiği belirlendi. Son olarak çıkarılan her nokta motor senaryosu ve uçuş koşuluyla etiketlendi. Bu yapı sayesinde model eğitimi, belirsiz bir görsel okuma işlemi yerine izlenebilir bir veri dönüşüm hattına dayandırıldı.<br><br>

<strong class="method-subtitle">2.3. Master Veri Seti</strong><br>
Dijitasyon çıktıları tek başına yeterli değildir; farklı grafiklerden gelen noktaların aynı şemada birleşmesi gerekir. Bu nedenle master veri seti <em>tidy data</em> düzeninde kuruldu: her satır bir uçuş koşulunu, her sütun bir değişkeni temsil eder. Kullanılan standart kolonlar <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code>, <code>engine_type</code> ve <code>specific_range</code> oldu. One Engine ve Two Engine senaryoları ayrı kategorik bilgi olarak tutuldu; çünkü motor konfigürasyonu hem yakıt akışı hem de menzil davranışı üzerinde doğrudan etkilidir.<br><br>
Bu katmanda veri temizleme, eksik nokta tamamlama ve tutarlılık kontrolleri yapıldı. Eksik/boş değerlerin bırakılmaması, eksen kaynaklı okuma hatalarının kontrol edilmesi ve AFM üzerinden rastgele seçilen kontrol noktalarıyla sayısal karşılıkların doğrulanması hedeflendi. Master veri seti bu nedenle yalnızca “çok satırlı CSV” değil; model kıyasının adil yapılmasını sağlayan ortak deney zemini oldu.<br><br>

<strong class="method-subtitle">2.4. Referans Nümerik Model</strong><br>
Referans nümerik model, klasik arama tablosu yaklaşımının projedeki deterministik karşılığıdır. Bu modelin amacı XGBoost veya FT-Transformer gibi öğrenen modellerle yarışmak değil; handbook mantığına sadık, açıklanabilir ve ara değer üretebilen bir kıyas zemini sağlamaktır. Çok boyutlu ilişki <code>Altitude × Gross Weight × Drag Index × Mach -> Specific Range</code> biçiminde ele alındı ve kübik spline interpolasyonla temsil edildi.<br><br>
Kübik spline kullanılmasının nedeni, lineer interpolasyonun iki nokta arasında kırıklı ve keskin geçişler üretmesidir. Uçuş performansı yüzeyleri ise genellikle daha yumuşak değişir; bu nedenle spline ara değerlerde daha fiziksel bir geçiş sağlar. Temel parça fonksiyon şu şekilde gösterilebilir:<br>
<div class="formula-block"><span>S<sub>i</sub>(x) = a<sub>i</sub> + b<sub>i</sub>(x - x<sub>i</sub>) + c<sub>i</sub>(x - x<sub>i</sub>)<sup>2</sup> + d<sub>i</sub>(x - x<sub>i</sub>)<sup>3</sup></span></div>
Burada amaç, komşu veri noktaları arasında hem değer sürekliliğini hem de eğim davranışını korumaktır. Bu model arayüzde “referans/tahmini gerçek” değer üretimi için kullanıldı; öğrenen modellerin tahminleri bu zemine göre yorumlandı.<br><br>

<strong class="method-subtitle">2.5. Öğrenen Modeller</strong><br>
XGBoost, tabular uçuş performansı verisinde güçlü bir pratik model olduğu için seçildi. Specific Range davranışı her bölgede aynı değildir; örneğin yüksek irtifa, farklı Mach aralığı veya motor konfigürasyonu modelin göreceği ilişkiyi değiştirir. XGBoost bu uzayı karar ağaçlarıyla parçalara ayırır ve her yeni ağaç önceki ağaçların bıraktığı residual hatayı azaltmaya çalışır. Bu nedenle az sayıda fiziksel değişken içeren fakat doğrusal olmayan tabular problemlerde yüksek doğruluk ve düşük gecikme dengesi sağlar.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-10-xgb-p2-i1-400x310.png" alt="XGBoost toplamsal ağaç yapısı"><figcaption>Şekil 2.1. XGBoost toplamsal ağaç yapısı.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu görsel XGBoost’un toplamsal öğrenme mantığını gösterir. İlk ağaç genel eğilimi öğrenir, sonraki ağaçlar kalan residual hatalara odaklanır ve sonuçlar toplanarak nihai Specific Range tahmini elde edilir. Bu yapı, farklı uçuş rejimlerinde değişen doğrusal olmayan davranışı tek bir kapalı form denklem yazmadan öğrenmek için kullanıldı.</p>
XGBoost’un eğitim hedefi yalnızca hatayı azaltmak değildir; model karmaşıklığını da kontrol etmek gerekir. Bu yüzden kayıp fonksiyonu ve düzenlileştirme terimi birlikte düşünülür:<br>
<div class="formula-block"><span>L(φ) = Σ l(y<sub>i</sub>, ŷ<sub>i</sub>) + Σ Ω(f<sub>k</sub>)</span></div>
İlk terim tahmin hatasını, ikinci terim ağaçların karmaşıklığını temsil eder. Böylece model eğitim verisini ezberlemek yerine daha genellenebilir ve deploy edilebilir bir yapı üretir.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-14-xgb-p3-i5-1046x688.png" alt="XGBoost split gain analizi"><figcaption>Şekil 2.2. XGBoost split gain analizi.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu görsel, XGBoost’ta bir karar ağacının nereden bölüneceğine nasıl karar verildiğini açıklar. Her aday split için sol ve sağ alt grupların gradient/Hessian toplamları hesaplanır; hata azalımı ve düzenlileştirme etkisi birlikte değerlendirilir. En yüksek gain veren split, veri uzayını en anlamlı iki parçaya ayırdığı için seçilir.</p>

FT-Transformer, tabular verilerde transformer mimarisinin değişkenler arası etkileşimleri öğrenme gücünü test etmek için kullanıldı. Sayısal değişkenler ve kategorik değişkenler önce ortak bir token uzayına taşınır. Böylece altitude, Mach, drag index, gross weight, fuel flow ve engine_type aynı mimari içinde karşılaştırılabilir temsillere dönüşür. Bu özellikle uçuş performansı gibi etkileşimli problemlerde değerlidir; çünkü model yalnızca tek tek kolonların etkisini değil, kolonların birlikte oluşturduğu bağlamı da öğrenir.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-19-ft-p4-i2-510x140.png" alt="FT-Transformer genel akışı"><figcaption>Şekil 2.3. FT-Transformer genel veri akışı.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu görsel FT-Transformer’ın genel veri akışını gösterir. Feature tokenizer ham sayısal ve kategorik girdileri token temsillerine dönüştürür; transformer encoder bu tokenlar arasındaki ilişkileri öğrenir; prediction head ise son temsilden Specific Range tahminini üretir. Bu yapı, uçuş değişkenlerinin birbirine bağlı etkilerini tek mimari içinde modellemek için kullanıldı.</p>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="lift-up-paper-fig-29-ft-p8-i2-512x280.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 2.4. Transformer encoder blok yapısı.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu görsel encoder bloğunun içini gösterir. Multi-Head Self-Attention tokenlar arasındaki ilişki ağırlıklarını hesaplar, FFN katmanı bu temsilleri doğrusal olmayan biçimde işler, residual bağlantılar bilgi akışını korur, LayerNorm ise eğitimi kararlı hale getirir. Bu bileşenler FT-Transformer’ın kolonlar arası bağlamı öğrenmesini sağlar.</p>
Self-attention mekanizmasının özeti aşağıdaki denklemdir:<br>
<div class="formula-block"><span>Attention(Q, K, V) = softmax((QK<sup>T</sup>) / √d<sub>k</sub>) V</span></div>
Bu denklemde <code>Q</code>, <code>K</code> ve <code>V</code> tokenlardan türetilen sorgu, anahtar ve değer temsilleridir. Pratik anlamı şudur: model her uçuş koşulu için hangi değişkenin hangi değişkenle daha ilişkili olduğunu öğrenir. Mevcut sonuçlarda XGBoost daha güçlü pratik denge vermiş olsa da FT-Transformer, projenin akademik tarafında “tabular uçuş verisi transformer ile nasıl modellenir?” sorusuna cevap veren ana mimari olarak korundu.
`;

  liftUpContent.tr.overview = `
<strong class="overview-subtitle">B. Giriş ve Problem Alanı</strong><br><br>
Havacılık endüstrisi yüksek teknoloji yoğunluğu, stratejik etkisi ve ekonomik büyüklüğü nedeniyle modern dünyanın en kritik sektörlerinden biridir. Savunma havacılığı ise uzun geliştirme döngüleri, yüksek Ar-Ge maliyetleri ve görev kritik sistem isterleriyle öne çıkar. Muharip hava araçlarında görev başarısı yalnızca aerodinamik kabiliyetlere değil; farklı irtifa, hız, ağırlık, sürükleme ve motor konfigürasyonu koşullarındaki uçuş performans parametrelerini doğru hesaplayabilen aviyonik yazılımlara da bağlıdır.<br><br>
Bu hesaplamalar geleneksel olarak arama tabloları ve çok değişkenli interpolasyon yöntemleriyle yapılır. Arama tabloları deterministik, izlenebilir ve mühendislik açısından açıklanabilir olmaları nedeniyle avantajlıdır; ancak değişken sayısı arttıkça tablo çözünürlüğü ve bellek maliyeti büyür. Tablo seyrekleştiğinde ise özellikle doğrusal olmayan uçuş bölgelerinde interpolasyon hatası artabilir. Bu nedenle çalışmada, klasik referans yaklaşım korunarak XGBoost ve Tabular Transformer modellerinin aynı veri seti üzerinde doğruluk ve donanım maliyeti bakımından nasıl davrandığı araştırılmıştır.<br><br>

<strong class="overview-subtitle">C. Araştırma Yaklaşımı</strong><br><br>
Çalışmanın veri kaynağı olarak F-18 uçağına ait performans nomogramları kullanılmıştır. Bu grafikler doğrudan ham uçuş verisi değil; CFD, rüzgar tüneli, uçuş testi ve standart atmosfer düzeltmeleriyle oluşturulmuş performans bilgisinin kullanıcıya sunulan grafik karşılığıdır. Projenin amacı üreticiye ait gizli ham veri tabanına erişmek değil, açık performans grafiklerinde temsil edilen düzeltilmiş uçuş bilgisini sayısal ve modellenebilir bir veri setine dönüştürmektir.<br><br>
Bu kapsamda nomogramlar dijitize edilmiş, U-Net tabanlı eğri segmentasyonu ve OCR destekli eksen okuma yaklaşımıyla yapısal veri elde edilmiş, master veri seti oluşturulmuş, kübik interpolasyon referansı kurulmuş ve aynı veri üzerinde XGBoost ile Tabular Transformer modelleri eğitilmiştir. Modeller yalnızca RMSE, MAE, MAPE ve R² ile değil; çıkarım gecikmesi, bellek kullanımı, CPU yükü, model boyutu ve hedef ortam uygunluğu ile birlikte değerlendirilmiştir.
`;

  liftUpContent.tr.architecture = `
<strong>2. Materyal ve Metot</strong><br><br>
Uçuş performans parametrelerinin makine öğrenmesiyle modellenebilmesi için önce güvenilir ve karşılaştırılabilir bir veri zemini oluşturuldu. Açık kaynaklı muharip uçak ham performans veri tabanlarına erişim sınırlı olduğundan, çalışma F-18 performans nomogramlarının sayısallaştırılmasıyla başlatıldı. Bu grafik tabanlı bilgi, dijitasyon ve denormalizasyon adımlarıyla çok boyutlu veri setlerine dönüştürüldü. Ardından kübik interpolasyon, XGBoost ve Tabular Transformer aynı giriş değişkenleri ve aynı hedef çıktı üzerinden karşılaştırılabilir hale getirildi.<br><br>

<strong class="method-subtitle">2.1. Nomogram Dijitasyonu ve Veri Seti Oluşturma</strong><br><br>
Veri kaynağı olarak F-18 Hava Aracı Uçuş El Kitabı performans grafikleri kullanıldı. F-18 platformu, yöntem geliştirme sürecinde açık erişilebilir grafik tabanlı performans verisi sağladığı için seçildi. Uygulama parametresi olarak özgül menzil ele alındı; ancak kurulan yöntem farklı uçuş performans parametrelerine de uygulanabilecek genel bir dijitasyon yaklaşımı sunar.<br><br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="word-article-fig-10.png" alt="F-18 özgül menzil nomogramı"><figcaption>Şekil 2.1. F-18 özgül menzil nomogramı.</figcaption></figure>
</div>
<p class="figure-detail-text">Nomogram, farklı uçuş koşullarında özgül menzil davranışını grafik olarak temsil eden ana veri kaynağıdır. Bu grafik doğrudan ham uçuş testi tablosu değil; uçuş testi, mühendislik düzeltmeleri ve standartlaştırılmış performans bilgisiyle oluşturulan bir mühendislik gösterimidir. Projede bu görselin amacı, KAAN benzeri platformlarda gizli performans verilerine erişmeden açık kaynaklı bir vekil platform üzerinden veri üretim ve modelleme hattını kanıtlamaktır.</p>
Klasik piksel yoğunluğu, eşikleme ve temel görüntü işleme yöntemleri ilk aşamada incelendi. Ancak yoğun ızgara çizgileri, eksen yazıları, eğri etiketleri ve arka plan gürültüsü nedeniyle hedef performans eğrilerini güvenilir biçimde ayırmakta yetersiz kaldıkları görüldü. Bu nedenle Python ortamında U-Net tabanlı bir segmentasyon mimarisi kullanıldı.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="word-article-fig-11.png" alt="U-Net tabanlı eğri segmentasyon mimarisi"><figcaption>Şekil 2.2. U-Net tabanlı eğri segmentasyon mimarisi.</figcaption></figure>
</div>
<p class="figure-detail-text">U-Net mimarisi grafik görüntüsündeki hedef eğriyi arka plan bileşenlerinden piksel düzeyinde ayırmak için kullanıldı. Kodlayıcı bölüm görüntüden kenar, çizgi ve yoğunluk bilgilerini çıkarırken; çözücü bölüm bu temsilleri tekrar görüntü boyutuna taşıyarak her pikseli eğri veya arka plan olarak sınıflandırır. Atlama bağlantıları, grafiklerdeki ince eğri yapılarını koruduğu için bu problemde özellikle faydalıdır.</p>
Segmentasyon sonrası elde edilen grafik parçalarında eksen değerleri ve sayısal etiketler OCR ile okunmuştur. U-Net hedef eğrileri ayırırken OCR, bu eğrilerin fiziksel koordinat sistemine taşınmasını sağlar. Böylece yoğun ızgara çizgileri ve metin bindirmeleri arasında kalan performans eğrileri sayısal veri üretimine uygun hale getirilmiştir.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="word-article-fig-12.png" alt="Segmentasyon sonrası hedef performans eğrileri"><figcaption>Şekil 2.3. Segmentasyon sonrası ayrıştırılan hedef eğriler.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu çıktı, arka plandan ayrıştırılan eğri bilgisinin model veri hattına girmeden önceki ara aşamasını temsil eder. Ayrıştırılan eğriler üzerinde örnekleme yapılır, piksel koordinatları eksen kalibrasyonu ile Mach, irtifa, brüt ağırlık ve drag index gibi fiziksel değişkenlere dönüştürülür.</p>
Elde edilen veri seti <em>tidy data</em> prensibine göre düzenlenmiştir. Her değişken bir sütun, her gözlem bir satır olarak temsil edilmiştir. Dijitalleştirme kalitesi için temel doğrulama ölçütü, AFM grafiklerinden seçilen kontrol noktaları ile dijital karşılıkları arasındaki sapmanın %2 sınırını aşmamasıdır.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="word-article-fig-13.png" alt="Master veri seti örneği"><figcaption>Şekil 2.4. Master veri seti örnek satırları.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu tablo, grafik tabanlı performans bilgisinin makine öğrenmesi modellerine verilebilecek yapısal forma dönüştüğünü gösterir. Altitude, gross weight, drag index, Mach number, specific range ve fuel flow gibi kolonlar modelleme hattının ortak veri şemasını oluşturur.</p>

<strong class="method-subtitle">2.2. Modelleme Yöntemleri</strong><br><br>
Veri seti oluşturulduktan sonra çalışma üç hesaplama yaklaşımıyla yürütülmüştür. İlk yaklaşım, mevcut tablo tabanlı aviyonik hesaplama mantığını temsil eden kübik interpolasyondur. Diğer iki yaklaşım ise aynı veri seti üzerinde eğitilen XGBoost ve Tabular Transformer modelleridir. Böylece geleneksel nümerik yöntem ve makine öğrenmesi modelleri aynı giriş değişkenleri üzerinden adil biçimde karşılaştırılmıştır.<br><br>
Kübik interpolasyon referans yöntem olarak kullanılmıştır. Bunun nedeni deterministik, açıklanabilir, düşük hesaplama maliyetine sahip ve mühendislik doğrulamasına uygun olmasıdır. Kübik interpolasyon, doğrusal interpolasyona kıyasla uçuş performans eğrilerindeki yumuşak değişimi daha iyi temsil eder.<br>
<div class="formula-block"><span>S<sub>i</sub>(x) = a<sub>i</sub> + b<sub>i</sub>(x-x<sub>i</sub>) + c<sub>i</sub>(x-x<sub>i</sub>)<sup>2</sup> + d<sub>i</sub>(x-x<sub>i</sub>)<sup>3</sup></span></div>
XGBoost, gradyan artırmalı karar ağaçlarına dayanan güçlü bir tabular model olarak seçilmiştir. Model giriş uzayını karar bölgelerine ayırır ve her yeni ağaç önceki hataları azaltacak şekilde eğitilir. Bu yapı; Mach, irtifa, ağırlık, sürükleme ve motor konfigürasyonu gibi değişkenlerin doğrusal olmayan etkilerini yakalamak için kullanılmıştır.<br><br>
Tabular Transformer ise değişkenler arasındaki bağlamsal ilişkileri attention mekanizmasıyla öğrenebilmesi nedeniyle ikinci öğrenen model olarak değerlendirilmiştir. Bu mimaride kategorik değişkenler embedding, sürekli değişkenler ise normalizasyon/projeksiyon adımlarıyla ortak temsil uzayına taşınır.<br>
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="word-article-fig-15.png" alt="FT-Transformer genel akışı"><figcaption>Şekil 2.5. FT-Transformer genel akışı.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-16.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 2.6. Transformer encoder blok yapısı.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-17.png" alt="Kategorik ve sürekli değişkenlerin birlikte işlendiği mimari"><figcaption>Şekil 2.7. Kategorik ve sürekli değişkenlerin birlikte işlendiği Transformer mimarisi.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu görseller Tabular Transformer hattının neden kullanıldığını açıklar. Feature tokenizer, sayısal ve kategorik girdileri ortak token temsillerine dönüştürür; transformer encoder bu tokenlar arasındaki ilişkileri self-attention ile öğrenir; çıktı başlığı ise özgül menzil tahminini üretir. Motor konfigürasyonu kategorik değişken olarak, Mach sayısı, irtifa, brüt ağırlık ve sürükleme indeksi ise sürekli değişkenler olarak ele alınmıştır.</p>

<strong class="method-subtitle">2.3. Model Değerlendirme ve Hedef Ortam Karşılaştırması</strong><br><br>
Modeller yalnızca tahmin doğruluğuyla değil, düşük kaynaklı hedef ortamda çalışabilirlikleriyle de değerlendirilmiştir. Karşılaştırmada hata metrikleri ile birlikte çıkarım gecikmesi, tepe bellek kullanımı, CPU yükü, model artefakt boyutu ve bütünleşik uygunluk skoru dikkate alınmıştır. Böylece çalışma, en düşük hata değerini veren modeli seçmek yerine doğruluk-donanım verimliliği dengesini değerlendiren bir mühendislik çerçevesi sunmuştur.
<div class="project-figure-grid inline-figure-flow">
  <figure class="project-figure-card"><img src="word-article-fig-18.png" alt="Benchmark metrik açıklamaları"><figcaption>Şekil 2.8. Benchmark metriklerinin anlamı.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-19.png" alt="Yöntemlerin benchmark tablosu"><figcaption>Şekil 2.9. Yöntemlerin hedef ortam benchmark tablosu.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-21.png" alt="Benchmark ölçüm sonuçları"><figcaption>Şekil 2.10. Ölçüm sonuçlarının özet tablosu.</figcaption></figure>
</div>
<p class="figure-detail-text">Bu tablolar, doğruluk metrikleri ile donanım metriklerinin birlikte okunması gerektiğini gösterir. RMSE, MAE, MAPE ve R² tahmin başarısını ölçerken; p95 gecikme, CPU kullanımı, Peak RSS ve model boyutu gerçek sistemde çalıştırılabilirliği temsil eder. Bu yüzden model seçimi yalnızca en küçük hata değerine değil, NVIDIA Jetson Orin Nano gibi hedef gömülü ortamda sürdürülebilir kaynak kullanımına göre yorumlanmıştır.</p>
`;

  liftUpContent.tr.analysis = `
<strong>3. Bulgular ve Tartışma</strong><br><br>
Kübik interpolasyon, XGBoost ve FT-Transformer modelleri; tahmin doğruluğu, çıkarım gecikmesi, bellek kullanımı, işlemci yükü, model boyutu ve bütünleşik hedef ortam uygunluğu açısından karşılaştırıldı. Sonuçlar, tek bir yöntemin tüm ölçütlerde aynı anda üstün olmadığını; yöntem seçiminin kullanım amacı, donanım kısıtı ve açıklanabilirlik ihtiyacına göre yapılması gerektiğini gösterdi.<br><br>
Doğruluk sonuçlarında XGBoost, FT-Transformer’a göre daha düşük RMSE, MAE ve MAPE değerleri üretmiştir. XGBoost için RMSE 0,003468, MAE 0,001372 ve MAPE %1,560 olarak elde edilirken; FT-Transformer için bu değerler sırasıyla 0,003671, 0,002044 ve %2,888 olarak raporlanmıştır. R² değerlerinin her iki modelde yüksek olması genel eğilimin başarıyla öğrenildiğini; hata büyüklükleri açısından ise XGBoost’un daha güvenilir pratik tahmin modeli olduğunu göstermektedir.<br>
<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="word-article-fig-20.png" alt="XGBoost ve FT-Transformer doğruluk karşılaştırması"><figcaption>Şekil 3.1. XGBoost ve FT-Transformer doğruluk karşılaştırması.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-22.png" alt="Hedef runtime ve kaynak özeti"><figcaption>Şekil 3.2. Hedef runtime ve kaynak özeti.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-23.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 3.3. Runtime maliyet bileşenleri.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-01.png" alt="Fit Score karşılaştırması"><figcaption>Şekil 3.4. Maliyet tabanlı Fit Score karşılaştırması.</figcaption></figure>
</div>
<p class="figure-detail-text">Benchmark sonuçları XGBoost’un yalnızca doğruluk açısından değil, çıkarım hızı açısından da dengeli bir çözüm sunduğunu göstermektedir. XGBoost en düşük p95 gecikme değerini üretirken, FT-Transformer kabul edilebilir hız sunmasına rağmen daha yüksek bellek ayak izine sahiptir. İnterpolasyon ise RAM tarafında avantajlıdır; fakat CPU maliyeti ve gecikme profili nedeniyle pratik sistem değerlendirmesinde tek başına en iyi seçenek değildir.</p>
Fit Score sonuçları bütünleşik değerlendirmede XGBoost’un en dengeli aday olduğunu göstermiştir. XGBoost 81,5 ile en yüksek skoru alırken, FT-Transformer 77,6 ve interpolasyon 74,0 seviyesinde kalmıştır. Bu sonuç, hata metrikleri ve hedef ortam maliyetleri birlikte değerlendirildiğinde XGBoost’un pratik uygulama için en uygun model olduğunu destekler.<br>
<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="word-article-fig-02.png" alt="Yöntemlerin proje içindeki rol dağılımı"><figcaption>Şekil 3.5. Yöntemlerin proje içindeki rol dağılımı.</figcaption></figure>
</div>
<p class="figure-detail-text">Rol dağılımı, üç yöntemin birbirinin yerine doğrudan konmadığını; her birinin proje içinde farklı bir mühendislik görevini temsil ettiğini açıklar. İnterpolasyon tahmini gerçek ve deterministik referans ailesi olarak, XGBoost pratik tahmin ve demo modeli olarak, FT-Transformer ise akademik araştırma mimarisi olarak konumlandırılmıştır.</p>
<div class="project-figure-grid result-paper-flow">
  <figure class="project-figure-card"><img src="word-article-fig-03.png" alt="Genel karar matrisi"><figcaption>Şekil 3.6. Genel karar matrisi.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-04.png" alt="Genel profil radar grafiği"><figcaption>Şekil 3.7. Genel profil radar grafiği.</figcaption></figure>
  <figure class="project-figure-card"><img src="word-article-fig-05.png" alt="Kriterlere göre öne çıkan yöntemler"><figcaption>Şekil 3.8. Kriterlere göre öne çıkan yöntemler.</figcaption></figure>
</div>
<p class="figure-detail-text">Karar matrisi ve radar grafiği, XGBoost’un doğruluk, hız, kurulum kolaylığı ve hedef ortam uygunluğu açısından dengeli profil sunduğunu gösterir. İnterpolasyon açıklanabilirlik ve düşük RAM kullanımı açısından güçlüdür; ancak referans yöntem olduğu için doğrudan doğruluk yarışına sokulmamalıdır. FT-Transformer model boyutu ve araştırma değeri açısından öne çıkar; fakat bellek kullanımı ve runtime bağımlılıkları nedeniyle mevcut haliyle doğrudan pratik deploy modeli değil, ileri optimizasyon adayıdır.</p>
Bu bulgulara göre model seçimi tek bir metriğe indirgenmemelidir. Mevcut performans tablolarına sadık, açıklanabilir ve doğrulanabilir referans değer üretmek için interpolasyon ailesi uygundur. Düşük hata, hızlı çıkarım ve uygulanabilir demo sistemi için XGBoost en güçlü adaydır. Tabular Transformer ise uçuş performans verilerinde attention tabanlı ilişkilerin incelenmesi için değerli bir araştırma hattı sunmaktadır.
`;

  liftUpContent.tr.achievements = `
<strong>4. Sonuçlar ve Proje Çıktıları</strong><br><br>
Bu çalışma, muharip hava araçlarında uçuş performans parametrelerinin hesaplanmasında kullanılan geleneksel tablo/interpolasyon yaklaşımının modern makine öğrenmesi modelleriyle doğruluk ve donanım verimliliği açısından karşılaştırılabileceğini göstermiştir. F-18 performans grafiklerinden elde edilen özgül menzil verileri sayısallaştırılmış, çok boyutlu veri setlerine dönüştürülmüş ve aynı veri seti üzerinde kübik interpolasyon, XGBoost ve Tabular Transformer modelleri değerlendirilmiştir.<br><br>
Elde edilen bulgular, kübik interpolasyonun deterministik ve açıklanabilir yapısıyla referans üretimi için değerli olduğunu; XGBoost’un düşük hata değerleri, kısa çıkarım süresi ve düşük kaynaklı hedef ortamda dengeli kaynak kullanımıyla en uygulanabilir pratik çözümü sunduğunu ortaya koymuştur. Tabular Transformer mevcut koşullarda XGBoost’u geçememiş olsa da, değişkenler arası ilişkileri dikkat mekanizmasıyla temsil edebilmesi nedeniyle ileri çalışmalar için önemli bir mimari aday olarak değerlendirilmiştir.<br><br>
Çalışmanın temel katkısı, aviyonik performans hesaplamalarında yalnızca doğruluk odaklı değil; çıkarım hızı, bellek kullanımı, işlemci yükü ve model boyutu gibi donanım-farkındalıklı ölçütleri de içeren bütünleşik bir model seçimi çerçevesi sunmasıdır. Bu yönüyle çalışma, yerli muharip hava aracı projelerinde aviyonik yazılım, gömülü yapay zekâ ve performans modelleme alanlarında milli teknik bilgi birikimini güçlendirecek bir ön değerlendirme sağlamaktadır.<br><br>
<div class="project-output-access">
  <div>
    <span class="visual-kicker">Arayüz Çıktısı</span>
    <strong>Specific Range Studio</strong>
    <p>Makale içeriğinde anlatılan veri işleme, model eğitimi, karşılaştırma, benchmark ve tekil tahmin akışlarının çalıştırılabilir yazılım çıktısıdır. Repo; veri yükleme, ön işleme, XGBoost/FT-Transformer eğitimi, interpolasyon referansı, rapor üretimi ve Flask tabanlı tahmin arayüzü modüllerini içerir.</p>
  </div>
  <a class="project-output-link" href="https://github.com/ufukzkn/specific-range-studio" target="_blank" rel="noopener noreferrer">
    <i data-lucide="external-link"></i>
    <span>Specific Range Studio’ya Git</span>
  </a>
</div>
`;

  Object.entries(liftUpContent).forEach(([lang, content]) => {
    const project = PORTFOLIO_DATA[lang]?.projects?.find(item => item.id === "project-6");
    if (project) {
      Object.assign(project, content);
    }
  });
})();
