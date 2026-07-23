const PORTFOLIO_DATA = {
  tr: {
    profile: {
      name: "Ahmet Soner Güleç",
      title: "Uçak Bakım Mühendisi",
      subTitle: "Aviyonik Sistemler | Hava Aracı Bakımı | Elektronik Sistem ve Donanım Tasarımı",
      about: "Eskişehir Teknik Üniversitesi Havacılık Elektrik ve Elektronik Bölümü’nden Uçak Bakım Mühendisi / Aviyonik unvanıyla mezun oldum. Teorik bilgiyi pratik mühendislik uygulamalarıyla birleştirme hedefim doğrultusunda; yurt dışı staj ve eğitim süreçlerimde hava araçlarının aviyonik sistem bakımı ve montaj prosedürlerinin yanı sıra mekanik tasarım, PCB donanım tasarımı ve simülasyon/analiz çalışmaları üzerine kapsamlı deneyim kazandım.\n\n Proje odaklı çalışma disiplinimle, kurucusu olduğum Tulpar Tharros Proje Takımı bünyesinde yapay zeka destekli havacılık muayene robotunu geliştirdim. Alternatif enerjili araçlar tasarlayan Hidroana ekibinde elektrik-elektronik alt sistem entegrasyonu ve güç elektroniği süreçlerini üstlenerek TEKNOFEST ve Shell Eco-marathon gibi ulusal ve uluslararası yarışmalarda dereceler elde ettim. Ayrıca kurucusu olduğum Havacılıkta Yapay Zeka Araştırmaları Topluluğu (HAYA) çatısı altında; otonom sistemler, uçuş kontrol yazılımları ve yapay zeka entegrasyonuna odaklanan TUSAŞ LIFT-UP, TÜBİTAK 2209-A ve 2209-B projelerini yöneterek havacılık ve uzay teknolojilerinde yenilikçi çözümler üretmeye devam ediyorum.",
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
        role: "Kurucu",
        period: "2022 - Devam Ediyor",
        icon: "brain-circuit",
        logo: "HAYA/Logo.png",
        projectIds: ["project-6", "project-4"],
        focus: "Yapay zeka, otonom sistemler, uçuş kontrol yazılımları ve aviyonik veri modelleme.",
        overview: [
          "Havacılıkta Yapay Zeka Araştırmaları Topluluğu (HAYA), 2022 yılında kurulmuş; havacılık ve uzay bilimleri odağında farklı mühendislik disiplinlerini bir araya getiren yenilikçi bir araştırma topluluğudur. Topluluğun temel amacı; yapay zeka ve otonom teknolojileri havacılık ekosistemine entegre ederek sektördeki karmaşık problemlere disiplinlerarası, uygulanabilir ve sürdürülebilir çözümler üretmektir. Bu vizyon doğrultusunda HAYA; uçuş güvenliği, performans optimizasyonu, özgün İHA tasarımları, otonom sistemler ve sensör veri analizi gibi kritik alanlarda derin öğrenme algoritmaları ve gelişmiş modelleme yaklaşımları geliştirmektedir.",
          "Geliştirilen akıllı sistemlerin teorik altyapısı, simülasyon ve animasyon uygulamalarıyla test edilerek saha geçerliliği ve donanım entegrasyonu açısından kapsamlı biçimde değerlendirilmektedir. Farklı teknik yetkinliklere sahip üyelerin oluşturduğu bu dinamik yapı, yüksek mühendislik vizyonunu ve hedefe odaklılığı temel ilke edinmiştir. Kuruluşundan bu yana güçlü bir proje kültürü oluşturan HAYA; TÜBİTAK 2209-A, TÜBİTAK 2209-B ve TUSAŞ LIFT-UP programları kapsamında akıllı uçuş sistemleri üzerine destekler kazanarak ulusal havacılık ve uzay platformlarına katma değer sağlamaya devam etmektedir."
        ],
        contributions: [
          "TUSAŞ LIFT-UP, TÜBİTAK 2209-A ve TÜBİTAK 2209-B proje süreçlerinin planlanması",
          "TFX (KAAN) uçağı uçuş performans verisi modelleme ve benchmark çalışmalarının yürütülmesi",
          "TEKNOFEST FPV drone takibi ve kuş tespit sistemi gibi havacılık yapay zekası projelerinde teknik liderlik"
        ],
        outcomes: ["1 TÜBİTAK 2209-A", "1 TÜBİTAK 2209-B", "1 TUSAŞ LIFT-UP"],
        outcomeDetails: [
          {
            title: "TUSAŞ LIFT-UP Programı",
            text: "TUSAŞ LIFT-UP Programı, lisans düzeyindeki araştırma projelerini sanayinin doğrudan ihtiyaçlarıyla buluşturan ve öğrencileri Türk Havacılık ve Uzay Sanayii ekosistemine dahil eden stratejik bir programdır. HAYA bünyesinde yürüttüğümüz LIFT-UP projesinde, KAAN (TFX) gibi modern muharip hava aracı platformlarının performans verilerini; klasik lookup table ve interpolasyon yöntemlerinin ötesine geçerek alternatif makine öğrenmesi algoritmalarıyla modelledik. Bu çalışma, topluluğumuzun yalnızca teorik ve akademik üretimle sınırlı kalmadığını; sanayi beklentileri, danışman geri bildirimleri, raporlama disiplini ve uygulanabilir prototipler doğrultusunda uçtan uca proje yönetme kabiliyetini kanıtlamıştır."
          },
          {
            title: "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği",
            text: "TÜBİTAK 2209-A Programı, lisans öğrencilerinin akademik danışmanlar rehberliğinde araştırma kültürü edinmelerini, bilimsel metodolojilerle problem tanımlamalarını ve nitelikli araştırma çıktıları üretmelerini teşvik eden ulusal bir destek mekanizmasıdır. HAYA bünyesinde yürüttüğümüz 2209-A süreci; fikir geliştirme, literatür taraması, yöntem seçimi, deney tasarımı ve akademik raporlama gibi kritik adımların takım kültürümüze köklü bir şekilde yerleşmesini sağlamıştır. Bu destek, yapay zeka ve havacılık odağındaki projelerimizi yalnızca yarışma odaklı çıktılardan öteye taşıyarak, bilimsel temeli güçlü araştırma ve geliştirme faaliyetlerine dönüştürmemizde kilit bir rol oynamıştır."
          },
          {
            title: "TÜBİTAK 2209-B Sanayiye Yönelik Araştırma Projeleri Desteği",
            text: "TÜBİTAK 2209-B Sanayiye Yönelik Lisans Araştırma Projeleri Destek Programı, öğrenci projelerinin doğrudan sanayi kuruluşlarıyla eşleşmesini ve sektörün gerçek ihtiyaçlarına yanıt veren Ar-Ge çıktılarına dönüşmesini hedefleyen stratejik bir mekanizmadır. HAYA bünyesinde yürüttüğümüz 2209-B çalışmaları; geliştirdiğimiz teknik çözümleri simülasyon ve laboratuvar ortamının ötesine taşıyarak uygulanabilirlik, maliyet optimizasyonu, sistem entegrasyonu ve saha doğrulama süreçleriyle bütünleşik bir şekilde ele almamızı sağladı. Bu süreç, Milli Teknoloji Hamlesi vizyonu doğrultusunda yerli havacılık ekosisteminin problemlerine nitelikli, sanayi standartlarında ve uygulanabilir mühendislik çözümleri sunma yetkinliği kazandırmıştır."
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
        focus: "Havacılık bakım, onarım ve revizyon süreçleri için yapay zeka destekli robotik sistemler.",
        overview: [
          "Mart 2023’te kurulan Tulpar Tharros Takımı (TTT); ismini Türk mitolojisindeki kanatlı at figürü \"Tulpar\" ile cesaret, azim ve motivasyon anlamlarına gelen Grekçe \"Tharros\" kelimelerinden almaktadır. Uçak Gövde-Motor Bakımı, Havacılık Elektrik ve Elektroniği ile Fizik bölümlerinde öğrenim gören multidisipliner bir öğrenci ekibinden oluşan takım; farklı yetkinlikleri bir araya getirerek proaktif, adaptif ve hızlı aksiyon alabilen dinamik bir çalışma kültürü benimsemiştir. Takım üyelerinin yalnızca kendi uzmanlık alanlarıyla sınırlı kalmayıp projenin tüm süreçlerine katılım sağlaması, hem teorik hem de pratik çözümlerde yüksek bir uyum ve esneklik sunmaktadır.",
          "Takımın temel amacı; Havacılık ve Uzay Bilimleri odağında teknolojik ve bilimsel çalışmalara yönelerek hem sektörel hem de akademik alanda özgün ve uygulanabilir fikirler geliştirmektir. Ar-Ge’den üretim safhasına kadar tüm süreçlerde bizzat yer alarak çeşitli yarışma ve projelerde yerli teknoloji üretimine katkı sunmayı hedefleyen ekip; sürekli merakı, akademik birikimi ve üretme isteğiyle ülkemizin geleceğine donanımlı mühendisler, teknik uzmanlar ve bilim insanları olarak hizmet etme vizyonunu taşımaktadır."
        ],
        contributions: [
          "INFLOBOT projesinde 3D gövde tasarımını, elektrik altyapısını ve yazılımını geliştirme",
          "Dar/kapalı alanlarda bakım teknisyenlerine görüş ve operasyon güvenliği sağlayan sistem entegrasyonu",
          "Teknik prototip, iş modeli ve yatırımcı görüşmeleriyle ticarileşme sürecine katkı"
        ],
        outcomes: ["THY Design Hackathon 2023 Finalisti", "TEKNOFEST Girişim Yarışması 2023 En İyi Girişim", "Take Off Istanbul"],
        outcomeDetails: [
          {
            title: "THY Design Hackathon 2023 Finalisti",
            text: "Türk Hava Yolları tarafından düzenlenen THY Design Hackathon; havacılık sektöründeki operasyonel süreçleri iyileştirmek, kullanıcı deneyimini artırmak ve bakım/denetim aşamalarına yenilikçi, insan odaklı tasarım çözümleri getirmek amacıyla gerçekleştirilen prestijli bir yarışmadır. Tulpar Tharros Takımı olarak, havacılık bakım ve denetim süreçlerini otomatize eden robotik çözüm fikriyle bu organizasyonda finalist olma başarısını gösterdik. Yarışma boyunca projemiz; yalnızca teknik bir prototip veya algoritma olarak değil; hangarsal bakım ortamının zorlu şartları, operasyonel güvenlik (Safety), iş ergonomisi, kullanıcı ihtiyaçları ve uçtan uca uygulanabilir bir ürün senaryosu çerçevesinde detaylıca değerlendirildi. Bu süreç, ekibimize fikri mülkiyet ve prototip aşamasından gerçek bir saha ürününe dönüşüm metodolojisini kazandırmıştır."
          },
          {
            title: "TEKNOFEST Girişim Yarışması 2023 En İyi Girişim",
            text: "TEKNOFEST Girişim Yarışması; Türkiye'nin milli teknoloji ekosisteminde geliştirilen yenilikçi projelerin ticarileşme potansiyelini, iş modellerini, pazardaki karşılıklarını ve sürdürülebilir ölçeklenebilirliklerini değerlendiren prestijli bir programdır. Tulpar Tharros Takımı olarak, havacılık bakım ve onarım sektöründe dar, erişimi zor ve kapalı alanlarda görev yapan bakım personeline destek vermek üzere geliştirdiği yapay zeka destekli robotik denetim sistemiyle bu organizasyonda \"En İyi Girişim\" ödülüne layık görülmüştür. Bu başarı; projemizin yalnızca teorik bir mühendislik fikri veya prototip seviyesinde olmadığını, havacılık sektörünün doğrudan saha problemlerine çözüm üreten, yüksek ticarileşme potansiyeline ve pazar değerine sahip bütüncül bir girişim olduğunu kanıtlamıştır. Girişimcilik süreci ekibimize, teknik çözümleri yatırımcı ve pazar odaklı bir vizyonla yeniden kurgulama yetkinliği kazandırmıştır. Süreç çıktısı olarak; havacılık bakım pazarının analizi (TAM-SAM-SOM), birim maliyet ve ROI (yatırım geri dönüş) hesaplamaları, müşteri doğrulama (customer validation) çalışmaları ve yatırımcı sunumu (pitch deck) süreçleri başarıyla tamamlanmıştır. Böylece Ar-Ge aşamasındaki yapay zeka ve robotik altyapımız, ticarileşmeye hazır, sürdürülebilir bir iş modeline dönüştürülmüştür."
          },
          {
            title: "Take Off Istanbul",
            text: "Take Off Istanbul; küresel teknoloji girişimlerini, uluslararası yatırımcıları, mentörleri ve sanayi liderlerini bir araya getiren Doğu Avrupa ve Orta Doğu bölgesinin en prestijli uluslararası girişimcilik zirvelerinden biridir. Tulpar Tharros Takımı olarak, havacılık bakım ve denetim süreçlerine yönelik yapay zeka destekli robotik çözümünü bu global sahnede sunma ve uluslararası girişim ekosisteminde temsil etme fırsatı yakalamıştır. Bu süreçte projemiz; yalnızca yerel bir mühendislik fikri olarak değil, küresel havacılık MRO (Bakım-Onarım-Yenileme) pazarının ihtiyaçları, uluslararası regülasyonlar, yatırımcı perspektifi ve ölçeklenebilir pazar stratejileri çerçevesinde kritik bir süzgeçten geçirilmiştir."
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
        projectIds: ["project-1", "project-2", "project-3"],
        focus: "Hidrojen enerjili araçlarda güç elektroniği uygulamaları ve sistem entegrasyonu.",
        overview: [
          "2007 yılında kurulan Hidroana; Eskişehir Teknik Üniversitesi bünyesinde 17 yılı aşkın köklü bir proje kültürüne sahip, Türkiye’nin alternatif enerjili araçlar alanındaki öncü öğrenci takımlarından biridir. Elektrik-Elektronik, Makine, Malzeme, Kimya ve Bilgisayar Mühendisliği gibi farklı disiplinlerden gönüllü öğrencileri bir araya getiren ekip; iş bölümü ve Ar-Ge odaklı çalışma disipliniyle hidrojen enerjisinin sürdürülebilir, etkili ve yaygın bir alternatif enerji kaynağı olarak kullanılmasına öncülük etmektedir. Temiz bir geleceğe somut mühendislik çıktılarıyla katkı sunmayı hedefleyen Hidroana, ulusal ve uluslararası platformlarda yüksek mükemmellik standartlarını benimseyen dinamik bir yapıya sahiptir.",
          "Takım, bu vizyon doğrultusunda dünyanın en prestijli öğrenci inovasyon organizasyonlarından biri olan ve minimum enerjiyle maksimum verimliliği hedefleyen Shell Eco-marathon (Europe & Türkiye) yarışmalarına düzenli katılım göstermektedir. Aynı zamanda TEKNOFEST kapsamında TÜBİTAK tarafından düzenlenen Efficiency Challenge Elektrikli Araç Yarışları’nın Hidromobil kategorisinde 2008 yılından bu yana aralıksız yer almaktadır. Hidroana; katıldığı bu prestijli organizasyonlar aracılığıyla alternatif enerjili araç teknolojilerinde yerli üretimi ve katma değerli ürün gelişimini desteklemekte, yerli havacılık ve otomotiv ekosistemine nitelikli mühendislik farkındalığı kazandırmaya devam etmektedir."
        ],
        contributions: [
          "DORLION ve MIDAS araçlarının elektrik-elektronik alt sistem tasarım ve entegrasyonu",
          "Güç elektroniği, dijital/analog sistem tasarımı ve donanım optimizasyonu çalışmaları",
          "PCB tasarımı, devre simülasyonu, termal analiz ve yarışma saha entegrasyonu"
        ],
        outcomes: ["2023 Uluslararası Elektrikli Araç Yarışları Hidromobil İkinciliği", "2023 TEKNOFEST Uluslararası Elektrikli Araç Yarışları Özel Jüri Ödülü", "Shell Eco-Marathon Finalisti"],
        outcomeDetails: [
          {
            title: "2023 Uluslararası Elektrikli Araç Yarışları Hidromobil İkinciliği",
            text: "TÜBİTAK yürütücülüğünde düzenlenen TEKNOFEST Elektrikli Araç Yarışları; alternatif enerji kaynaklarının araç teknolojilerine entegrasyonunu teşvik eden, yerli üretimi ve yüksek verimlilik odaklı mühendislik çözümlerini hedefleyen Türkiye\'nin en prestijli elektrikli araç organizasyonudur. Yarışma kapsamında araçlar; yalnızca tur zamanı veya pist hızı üzerinden değil; birim enerjiyle kat edilen mesafe, batarya/yakıt hücresi yönetim sistemleri, telemetri, elektriksel güvenlik regülasyonlarına uygunluk ve yerlilik oranı gibi zorlu teknik kriterler üzerinden değerlendirilmektedir. Hidroana ekibimiz, Hidromobil (hidrojen enerjili araç) kategorisinde geliştirdiği özgün araçla bu organizasyonda Türkiye İkincisi olma başarısını göstermiştir. Elde edilen bu derece; ekibimizin hidrojen yakıt hücresi entegrasyonu, güç elektroniği, motor sürücü tasarımları, araç içi haberleşme protokolleri ve telemetri veri analizi konularındaki yüksek mühendislik yetkinliğini doğrudan sahada doğrulamıştır. Süreç çıktısı olarak; değişken sürüş koşullarında minimum enerji tüketimi sağlayan optimize edilmiş enerji yönetim algoritmaları, uluslararası güvenlik standartlarına uygun yüksek voltajlı elektriksel mimari ve pist verileriyle doğrulanan yüksek verimli bir alt sistem entegrasyonu elde edilmiştir."
          },
          {
            title: "2023 TEKNOFEST Uluslararası Elektrikli Araç Yarışları Özel Jüri Ödülü",
            text: "Özel Jüri Ödülü, yarışma derecesinden bağımsız olarak teknik yaklaşımı, tasarım kalitesi, yenilikçi çözüm üretme becerisi ve takımın mühendislik olgunluğu açısından dikkat çeken projelere verilen bir takdirdir. Hidroana\'nın bu ödülü alması; güç elektroniği, dijital/analog sistem tasarımı, izolasyon izleme, batarya ve hidrojen altyapısı gibi alt sistemlerde ortaya koyduğu bütünleşik mühendislik yaklaşımının jüri tarafından ayrıca değerli bulunduğunu gösterir."
          },
          {
            title: "Shell Eco-Marathon Finalisti",
            text: "Shell Eco-marathon; 35 yılı aşkın süredir Avrupa, Amerika ve Asya kıtalarında düzenlenen, dünyanın dört bir yanından üniversite ekiplerinin en az enerjiyle en uzun mesafeyi kat etmek için yarıştığı en prestijli uluslararası inovasyon ve verimlilik organizasyonudur. Yarışmada finalist olmak; geliştirilen aracın yalnızca bir tasarım veya konsept olarak kalmadığını, araç güvenliği, mekanik dayanım, elektriksel izolasyon, telemetri ve hidrojen yakıt sistemi standartlarını kapsayan son derece katı uluslararası Teknik Kontrol (Technical Inspection) süreçlerini eksiksiz geçtiğini kanıtlar. Hidroana ekibimiz, hidrojen enerjili özgün aracıyla bu zorlu süreçleri başarıyla tamamlayarak global finalistler arasında yerini almıştır.\n\nBu süreç, ekibimize hidrojen teknolojilerini uluslararası emniyet ve verimlilik normlarına uygun şekilde geliştirme ve küresel ölçekte rekabet edebilme yetkinliği kazandırmıştır. Süreç çıktısı olarak; hidrojen yakıt hücresi verimliliğini maksimuma çıkaran aerodinamik ve elektronik optimizasyonlar, uluslararası güvenlik prosedürlerine uygun tescilli sistem mimarisi ve Avrupa’nın önde gelen mühendislik takımlarıyla aynı kulvarda yarışarak elde edilen küresel bir vizyon kazanılmıştır."
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
        details: "Lisans eğitimim dahilinde teorik altyapımı ve pratik becerilerimi şekillendiren başlıca dersler şunlardır:<br><br>• Gaz Türbinli Motorlar<br>• Modern Aviyonik Sistemler<br>• Microişlemciler<br>• Elektrik ve Elektronik<br>• Elektrik Makineleri<br>• Otomatik Uçuş Sistemleri<br>• Seyrüsefer Sistemleri<br>• Sayısal Veri İletimi<br>• Elektronik Gösterge Sistemleri<br>• Elektromanyetik Çevre<br>• Uçak Aerodinamiği<br>• Uçak Yapıları ve Sistemleri<br>• Uçak Malzeme Bilgisi<br>• İnsan Faktörleri<br>• Tahribatsız Muayene Yöntemleri (NDT)<br>• Haberleşme Sistemleri<br><br>Ayrıca, fakülte bünyesindeki SHY-145 onaylı uçak bakım tesislerinde gerçekleştirdiğim uygulamalı eğitimler sayesinde; havacılık standartlarına uygun bakım, onarım ve kontrol süreçlerinde doğrudan saha deneyimi elde ettim."
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
        details: "İlk dönemde, uçuşa elverişli olmayan Cessna 310, Cessna 152 ve Airbus A320 hava araçları üzerinde teknik eğitimler alarak kanat, gövde, iniş takımları ve uçuş kontrol sistemlerinin söküm, montaj ve kurulum süreçlerinde aktif yer aldım; aviyonik sistemlerin bakım, onarım ve işletimi konularında pratik deneyim kazandım. Uygulamalı eğitimlerimin devamında, EASA Part-145 sertifikasına sahip Kyviškės Havaalanı’nda uçuşa elverişli Cessna 172S ve Piper PA-34 uçakları üzerinde çalıştım ve tüm bu operasyonları EASA Part-66 lisanslı uzmanların denetiminde başarıyla gerçekleştirdim.<br><br>Son dönemde, insansız hava aracı teknolojileri ve bu sistemlerde kullanılan elektronik altyapılar üzerine yoğunlaştım. Üzerinde çalıştığım kuadrotorun mekanik tasarımını SolidWorks uygulamasını kullanarak gerçekleştirdim; bu süreçte ağırlık dengesi gibi kritik unsurlar için XFLR5 üzerinden hesaplamalar yaptım. Baskı devre kartı tasarımında Altium Designer kullanarak fırçasız motor sürücü devre kartlarını geliştirdim. Bu kartların doğrulama ve performans analizlerini ise PSpice ve Matlab ortamında gerçekleştirdiğim devre simülasyonları ile tamamladım. Uçuş sırasında elektronik kartlar üzerindeki yarı iletken malzemelerin sıcaklık sıcaklık dağılımını değerlendirmek amacıyla COMSOL Multiphysics yazılımı ile termal analizler gerçekleştirdim. Geliştirdiğim sistem, temel uçuş kontrol algoritmalarını destekleyecek bir mimaride kurgulanmış olup; tasarım sürecinde enerji verimliliği, termal dayanıklılık ve yüksek sistem güvenilirliği ön planda tutularak tüm bileşenler bu hedefler doğrultusunda optimize edilmiştir.<div class='internship-files'><span class='internship-files-title'>Staj Dosyaları</span><a href='Staj/Internship%20Program.pdf' target='_blank'>Internship Program</a><a href='Staj/Study%20Pages-%20October%201.pdf' target='_blank'>Study Pages - October</a><a href='Staj/Study%20Pages-%20November%202.pdf' target='_blank'>Study Pages - November</a><a href='Staj/Study%20Pages-%20December%203.pdf' target='_blank'>Study Pages - December</a><a href='Staj/Study%20Pages-%20January%204.pdf' target='_blank'>Study Pages - January</a><a href='Staj/Study%20Pages-%20Laboratory%205.pdf' target='_blank'>Study Pages - Laboratory</a></div>"
      }
    ],
    projects: [
      {
          "id": "project-1",
          "title": "48 V / 50 A Üç Fazlı BLDC Motor Sürücü Kartı (Vol.1)",
          "category": "guc-elektronigi",
          "summary": "Hidrojen enerjili araç güç aktarma sistemi için geliştirilen Vol.1 BLDC motor sürücü kartı; 48 V DC baradan 50 A nominal akım ve 2.5 kW güç seviyesinde üç fazlı motor kontrolü hedefleyen, STM32F446RET6 tabanlı bir güç elektroniği tasarımıdır. Kart; MOSFET yarım köprü katları, IRS2186 kapı sürücüleri, INA229 ölçüm hattı, Hall sensörü geri beslemesi, çok kademeli DC/DC besleme mimarisi ve akım/sıcaklık güvenli mod algoritmalarıyla ele alınmıştır.",
          "description": "Vol.1 motor sürücü çalışması, üç fazlı BLDC motorun hız, yön, akım ve sıcaklık geri beslemeleriyle güvenli biçimde sürülmesi için tasarlanan güç kartını açıklar. Word teknik tasarım dosyasındaki topoloji seçimi, 48 V / 50 A güç hedefi, MOSFET ve gate-driver seçimi, DC-link kondansatör hesabı, STM32 tabanlı kontrol algoritması, Proteus simülasyonları, Altium PCB çalışmaları, prototip testleri, verim hesabı, koruma algoritmaları ve malzeme listesi bu sayfaya aktarılmıştır.",
          "image": "vol1/Resim33.png",
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
          "overview": "<p>Bu sayfa, Kartlar / sürücü vol1 klasöründeki Motor Sürücü Teknik Tasarım Vol.1 dokümanının içeriği temel alınarak hazırlanmıştır. Çalışma; üç fazlı BLDC motorun 48 V DC hat üzerinde yüksek akım, güvenli anahtarlama, Hall sensörü geri beslemesi ve mikrodenetleyici tabanlı PWM kontrolüyle sürülmesini hedefleyen ilk sürücü kartı versiyonunu anlatır.</p><h4>4.1.Devre Tasarımı</h4><strong class='method-subtitle'>4.1.1.Motor sürücü devresinin tasarım adımları</strong><br><strong class='method-subtitle'>A) Topoloji seçimi</strong><br><p>Topoloji seçiminde, yüksek güç uygulamalarına uygun ve enerji kaybını minimize ederek daha yüksek verimlilik sağlayan Üç fazlı köprü (Three-Phase Bridge) Topolojisine karar verildi. Özellikle fırçasız (brushless) üç fazlı DC motorlar için ideal olan bu topoloji, motorun her üç fazının (A fazı, B fazı, C fazı) ayrı ayrı kontrol edilmesine olanak tanır ve motorun dönüş yönünü ve hızını hassas bir şekilde ayarlamayı sağlar.</p><strong class='method-subtitle'>B) Voltaj ve Akım değerlerinin belirlenmesi</strong><br><p>Motor nominal 2500 watt olarak hesaplandığından, motor sürücüsü nominal 48 V çalışma voltajında ​​ve nominal 50 A çalışma akımında çalışacak şekilde tasarlanmıştır. Bu değer motorun ihtiyaçlarını karşılayan bir değerdir. Aynı zamanda motor sürücüsünün yaşayacağı anlık gerilim ve akım değerleri de dikkate alınmaktadır. Kart, bu değerler dikkate alındığında anlık 100A değerine dayanacak şekilde tasarlanmıştır. Kullanılan MOSFET’leri değiştirirseniz kartın kaldırabileceği güç değeri de değişecektir.</p><strong class='method-subtitle'>C) Frekans değeri</strong><br><p>Motorun istenen maksimum hızı, tepki zamanı ve hız kontrol hassasiyeti, çalışma frekansının belirlenmesinde rol oynamaktadır. Daha yüksek frekanslar genellikle daha hızlı tepki süreleri sağlar, ancak aynı zamanda güç kaybı ve ısınma gibi faktörleri de etkileyebilir. Ayrıca, motor sürücüsünün frekansı, motorun tipi, uygulama gereksinimleri, verimlilik, ısı yönetimi ve EMC faktörleri göz önünde bulundurularak dikkatlice seçilmiştir.</p><strong class='method-subtitle'>4.1.2.Tasarlanan devrenin analitik ifadesi (Evirici, kontrol kartı, vb.)</strong><br><p>Tasarlanan devrenin teorik temellerini, matematiksel modellerini ve çalışma prensiplerini “Kontrol Kartı” adı altında gerçekleştirilmiştir. Kartın tasarımı sürecinde kontrol algoritmaları, geri besleme döngüleri, çıkış sinyalleri (PWM sinyalleri), sensör verilerinin İşlenmesi ve Zamanlama ve Sinyal İşleme başlıkları altında simülasyon, analiz ve optimizasyon çalışmaları gerçekleştirilmiştir.</p><strong class='method-subtitle'>4.1.3.Malzeme seçimi (Entegre, transistör, direnç, bobin, kapasitör, vb.)</strong><br><p>Malzeme seçiminde motor sürücüsünde kullanılan gömülü bileşenlerin veri föyüne göre, pasif bileşenlerin maksimum ve minimum yükleri göz önünde bulundurularak referans gerilim ve akım bölücü gibi yerlerde kullanılan komponentlerin ise toleranslarının en düşük olacak şekilde seçilmiştir. Üretim kolaylığı ve yer tasarrufu açısından soğutucu blokların dışındaki tüm devre elemanları yüzeye monte edilen (SMD) devre elemanları olarak kullanılmaktadır.</p><strong class='method-subtitle'>A) Kondansatör</strong><br><p>Kondansatör seçiminde kullanım alanının maksimum gerilim değeri, minimum kapasite gereksinimi, çalışma sıcaklığı ve anlık olarak uğrayacağı maksimum akım dikkate alınmıştır. Kondansatörün arızalanması durumunda herhangi bir sorunla karşılaşmamak için daha küçük değerli birden fazla kondansatörün paralel bağlanmasına karar verilmiştir.</p><strong class='method-subtitle'>B) Direnç</strong><br><p>Dirençler üzerinden geçen akıma göre Watt değerleri dikkate alınmıştır. Ayrıca, referans olarak kullanılan dirençlerde düşük toleranslı olunmasına ve bilgi föyü verilerine göre uygun direnç değerinin seçilmesine karar verilmiştir.</p><strong class='method-subtitle'>C) Bobin</strong><br><p>Bobin seçimi, kullanılan DA/DA dönüştürücünün bilgi föyüne bağlı kalınarak, kullanılan bobinden geçecek maksimum akıma göre yapılmıştır. Motor sürücüsünde elektriksel gürültüyü en aza indirgemek için kullanılan bobinler için SMT teknolojisine sahip bobinler seçilmiştir.</p><strong class='method-subtitle'>D) MOSFET seçimi</strong><br><p>MOSFET seçiminde, motor sürücünün uğrayacağı maksimum gerilim ve akım değerleri dikkate alınmıştır. Ani akım artışlarına karşı emniyet katsayısı 2 olarak alınmıştır. Aynı zamanda motor sürücü verimini ve ısıyı korumak için MOSFET’ in iç direnci fiyat-performans kriterleri içerisinde olabildiğince düşük seçilmiştir.</p><strong class='method-subtitle'>E) MOSFET sürücü</strong><br><p>IRS2186 hem yüksek katmanlı hem de düşük katmanlı MOSFET'leri sürebilmesi ve 4A gibi nispeten yüksek akımlarda çalışabilmesi nedeniyle tercih edilmiştir. Çıkış sinyali olarak 6.8V ile 20V arasında değerler verebilmektedir. Piyasadaki benzer ürünlerle karşılaştırıldığında 170ns gibi normal anahtarlama süresine sahiptir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim1.png' alt='E) MOSFET sürücü'><figcaption>Şekil 1. E) MOSFET sürücü.</figcaption></figure></div><strong class='method-subtitle'>4.1.3.6. Mikro kontrolcü</strong><br><p>STM32F446RET6 mikrodenetleyicisinin:</p><p>ARM Cortex-M4 tabanlı bir mikrodenetleyici olup yüksek işlem gücü sunması ve bu şekilde motor control algoritmalarını hızlı bir şekilde işleyebilmesi,</p><p>Çok sayıda Dalga Genişlik Modülü kanalına sahip olup motor sürücülerinde gerekli olan yüksek çözünürlüğü ve hassas sinyalleri üretme yeteneğine sahip olması,</p><p>Çok sayıda zamanlayıcı ve sayıcıya sahip olup hassas bir şekilde kontrol edilmesine olanak tanıması,</p><p>ART, SPI, I2C, CAN ve USB gibi çeşitli haberleşme protokollerini desteklemesi,</p><p>Düşük güç tüketimi sayesinde batarya ile çalışan enerji verimliliğinin önemli olduğu projelerde büyük bir avantaj sağlaması,</p><p>Özelliklerine sahip olması ile, motor sürücü devremiz için ideal bir mikrodenetleyicidir. Bu nedenle, motor kontrol uygulamasında güvenilir ve verimli bir çözüm sağlamak için tercih edilmiştir.</p><strong class='method-subtitle'>4.1.4.Parametre hesabı (Eleman değerleri)</strong><br><strong class='method-subtitle'>A) Kondansatörler</strong><br><p>Motor kontrolcü devresinde çeşitli kapasitörler bulunmaktadır.</p><strong class='method-subtitle'>1) Filtreleme Kondansatörleri</strong><br><p>Filtreleme kondansatörlerin değerlerini hesaplarken, güç kaynağından veya bir güç elektroniği devresinden gelen dalgalı voltajı düzeltmek veya istenmeyen frekans bileşenlerini azaltmaya yönelik kullanılan yüksek ve düşük bant filtre kondansatör hesaplamaları göz önünde bulundurulmuştur. Çalışılan frekans değerinde 100 nF ve 1 uF değerinde çok katmanlı seramik kondansatörler kullanılmıştır. Bu değerdeki kapasitörler, gerektiği yerde paralel bağlanıp kapasitans değeri istenilen değere yükseltilmiştir (4.7 uF, 10 uF gibi).</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim2.png' alt='1) Filtreleme Kondansatörleri'><figcaption>Şekil 2. 1) Filtreleme Kondansatörleri.</figcaption></figure></div><strong class='method-subtitle'>2) DC-Link Kondansatörleri</strong><br><p>DC tarafındaki dalgalanmaları azaltmak, DC voltajını stabilize etmek ve yüksek akım taleplerinde enerji sağlaması için kullanılmıştır. Büyük kondansatörlere ve düşük ESR (Eşdeğer Seri Direnç) değerlerine sahip olacak şekilde seçim yapılmıştır.</p><p>C: Kapasitans (Farad)</p><p>P: Sistem gücü (Watt)</p><p>dc: Dönüşüm verimi (Efficiency)</p><p>fsw: Anahtarlama frekansı (Hz)</p><p>V_{dc}: DC-Link voltajı (Volt)</p><p>Vp(max)​: DC-Link voltajının izin verilen maksimum dalgalanma miktarı (Volt)</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim3.png' alt='2) DC-Link Kondansatörleri'><figcaption>Şekil 3. 2) DC-Link Kondansatörleri.</figcaption></figure></div><p>Bu hesaplamaya bağlı kalınarak, 470 uF değerinde 8 adet (yüksek kapasitans değerleri sunması için) Alüminyum Elektrolitik kondansatör paralel bağlanılarak devrede kullanılmıştır. ESR (Equivalent Series Resistance) değerini düşürmek ve kartın uzun ömürlü olmasi icin kondansatörler parallel bağlanmıştır.</p><p>Bu hesaplama, temel bir yaklaşım sunmaktadır. Ancak, gerçek dünya uygulamalarında termal yönetim, dalgalanma akımları ve kondansatörlerin ömrü gibi faktörler de dikkate alınmalıdır. Bu nedenle, hesaplanan değerin üzerinde bir kapasitans seçilmiştir.</p><strong class='method-subtitle'>B) Bobinler</strong><br><p>Bobinin endüktans değeri, devredeki akım değişim hızına ve istenen enerji depolama kapasitesine bağlı olarak seçildi. Örneğin, bir DC/DA dönüştürücü devresinde, istenen çıkış voltajındaki dalgalanmaları azaltmak için endüktans değeri, veri föyünde bulunan üretici referans değerlerine göre seçilmiştir. Bu referans değerleri arasında nominal akım, endüktans değeri, maksimum akım sınırı gibi faktörler bulunmaktadır.</p><strong class='method-subtitle'>4.1.5.Güç modülü ve kontrol ünitesi hakkında bilgiler</strong><br><strong class='method-subtitle'>A) Kontrol ünitesi</strong><br><p>STM32 ailesine ait olan bu mikrodenetleyici, ARM Cortex-M4 çekirdeği üzerinde çalışmaktadır. Motor kontrolü uygulamalarında STM32F446RET6 kullanılırken, özellikle PID kontrol algoritmaları, hız ve konum geri beslemesi gibi karmaşık işlemleri rahatlıkla gerçekleştirilebilir. Ayrıca, Düşük güç tüketimi ile enerji verimliliği sağlaması, geniş kod ve veri depolama kapasitesi sunması ve STM32 ailesi geniş bir geliştirme ekosistemine sahip olması yönüyle bu işlemciyi seçme nedenlerimiz arasındadır.</p><div class='hud-table-wrap'><table class='hud-benchmark-table'><thead><tr><th>Özellik</th><th>Değer</th></tr></thead><tbody><tr><td>Mikrodenetleyici Çekirdeği</td><td>ARM Cortex-M4</td></tr><tr><td>Çalışma Frekansı</td><td>180 MHz</td></tr><tr><td>Çalışma Gerilimi</td><td>1.7 V - 3.6 V, uygulamada 3.3 V</td></tr><tr><td>Flash Bellek</td><td>512 KB</td></tr><tr><td>SRAM</td><td>128 KB</td></tr><tr><td>GPIO</td><td>LQFP64 paket üzerinde 114 pin ailesi</td></tr><tr><td>Zamanlayıcı</td><td>11 adet timer</td></tr><tr><td>ADC</td><td>12-bit, 3 adet, 16 kanal</td></tr><tr><td>DAC</td><td>12-bit, 2 adet</td></tr><tr><td>İletişim Arayüzleri</td><td>USART, SPI, I2C, CAN, USB</td></tr><tr><td>Operasyon Sıcaklık Aralığı</td><td>-40°C ila +85°C</td></tr><tr><td>Paket</td><td>LQFP64, UFQFPN64, WLCSP64</td></tr><tr><td>Güç Tüketimi</td><td>108 μA/MHz çalışma modu; düşük güç modları destekli</td></tr></tbody></table></div><strong class='method-subtitle'>B) Güç modülü</strong><br><p>Motor sürücüde kullanılmak üzere IXTH230N10T N-Kanal MOSFET seçilmiştir. Bu MOSFET, yüksek ve sürekli anahtarlama akım değerlerine sahiptir. 200A sürekli akım altında çalışabilir iken anlık 500A tepe değerlerinde çalışabilir ve 100V gerilim değerine sahiptir. Motor kontrol aşamasında fazla güç harcama ile karşılaşılması durumunda bu MOSFET’ler dayanabilecektir. V_GS = 10V için R_DS (on) değeri 0.019 ohm olarak belirlenmiştir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim4.png' alt='B) Güç modülü'><figcaption>Şekil 4. B) Güç modülü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim5.png' alt='B) Güç modülü'><figcaption>Şekil 5. B) Güç modülü.</figcaption></figure></div>",
          "architecture": "<p>PCB ve güç katı tasarımı; yüksek akım taşıyan yolların genişliği, bakır döküm alanları, bootstrap ve bypass kapasitörlerinin sürücü entegrelerine yakın yerleşimi, DC-link kondansatörlerin enerji tamponlama görevi ve çok kademeli besleme hattının kararlılığı üzerinden ele alınmıştır.</p><h4>4.4.Baskılı Devre Çalışmaları</h4><p>PCB tasarımında, gelişmiş analiz ve simülasyon araçları sunması ve tasarım hatalarını minimize etme imkanı sağlaması yönüyle Altium Designer kullanılması tercih edilmiştir.</p><p>PCB Düzeni ve Şema Tasarımı</p><p>STM32 mikrodenetleyicinin güç gereksinimlerini doğru bir şekilde karşılayacak güç hatları tasarlanmıştır. Bunun yanı sıra güç ve toprak hatları mümkün olduğunca kısa ve geniş tutulmuştur. Osilatörlerin ve saat sinyallerinin. Hatları mümkün olduğunca kısa ve düzgündür. PCB tasarımında elektromanyetik uyumluluk için belirli standartlar dikkate alınmıştır. Üretim sürecini kolaylaştıracak ve maliyetleri düşürmek için standart bilesen boyutları ve montaj yönergelerine uygunluk sağlanmıştır.</p><p>PCB 2D Görünümü Gerber Dosyası</p><p>PCB 3D Görüntüsü</p><p>Katmanlı PCB'lerde, ısıyı yaymak bileşenler ve yollar nedeniyle daha zor olmaktadır. Bakır, ısıyı mükemmel bir şekilde ileten bir malzemedir. Bu yüzden Motor sürücü IC'ye iyi termal bağlantılarla yollara mümkün olduğunca fazla katı bakır dökülerek yapılmıştır. Her iki dış katmana da bakır dökerek ve bu dökmeleri çok sayıda via ile birleştirmek, ısıyı bileşenlerin kesildiği alanlarda yaymaya yardımcı olmaktadır. Motor sürücü IC'ye giren ve çıkan akım büyük olduğundan PCB yollarının genişliği dikkatlice düşünülmüştür. Yol ne kadar genişse, direnci o kadar düşüktür. Yollarda, direncin aşırı güç dağılmasına neden olacak kadar küçük olmamasına dikkat edilmiştir, çünkü bu durum yolun ısınmasına yol açabilir.</p><p>Bypass kapasitörleri ve bootstrap kapasitörü mümkün olan en yakın yerde entegrenin güç pinlerine yerleştirilmiştir ve yakınlarda büyük kapasitörler bulunmaktadır.</p><h4>4.5.Üretim Çalışmaları/Aşamaları</h4><strong class='method-subtitle'>Üretim Çalışmaları/Aşamaları</strong><br><p>Kartın tamamen üretilmesinden önce, kartın prototipi yapılıp, isterleri karşılayıp karşılamadığı test edilmiştir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim34.jpg' alt='Üretim Çalışmaları/Aşamaları'><figcaption>Şekil 5. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Daha küçük boyutta ve daha düşük güçte çalışabilecek bir prototip yaparak, aynı motorda test edilmiştir. Uzun sureli nominal koşullarda çalışmanın yanında, prototip olmasına rağmen yüksek güç tüketim aşamalarında da çalışmayı sürdürerek asil kartın sahip olduğu güvenlik marjini hesaplanmıştır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim35.jpg' alt='Üretim Çalışmaları/Aşamaları'><figcaption>Şekil 6. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Simülasyon aşamasında kaydettiğimiz verilerin aynisini, prototip kontrolcüde de elde etmeyi basardık. Bu sayede kontrolcünün nominal durumlarda MOSFET kapı açma kapama esnasında herhangi bir sorun olmadığı görülmüştür.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim36.jpg' alt='Üretim Çalışmaları/Aşamaları'><figcaption>Şekil 7. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>Test sonucunda, ekstrem koşullarda, MOSFET kapı kısmında bir gurultu olduğu fark edilmiştir. Fakat gurultunun, MOSFET in sahip olduğu maksimum marjinden düşük ve motorun fazlarına herhangi yanlış anahtarlama yapmadığından sadece aşırı ısınmaya yönelik soğutucu alüminyum bloklar kullanılarak sorun çözülmüştür.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim37.jpg' alt='Üretim Çalışmaları/Aşamaları'><figcaption>Şekil 8. Üretim Çalışmaları/Aşamaları.</figcaption></figure></div><p>MOSFET kısmında herhangi bir silkinti olmadan fazlara gerekli gerilimi verdiği görülmüştür. MOSFET in sahip olduğu Flyback diyotun doğru şekilde boşaltma yaptığı doğrulanmıştır.</p><strong class='method-subtitle'>Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi</strong><br><p>Güç elektroniği bileşenleri yüksek güçlerde çalışmaktadır. Bu yüzden PCB tasarımında ve kutulamada termal yönetim stratejileri kullanılmıştır. Bu, ısı emiciler, soğutucular, ve uygun hava akışı sağlamak için kutu ve kart tasarımını içermektedir.</p><p>Bu koşullar dikkate alındığında kartın 12x25x25 cm boyutlarinda olmasi gerektiğine karar verilmiştir.</p><p>Kullanılan elektronik bileşenlerin güvenliği de kritik önem taşımaktadır., aşırı akım, aşırı voltaj ve kısa devre gibi durumlarda bileşenleri ve aracın diğer sistemlerini koruyacak bir kutu tasarımı yapılmıştır. Çok sayıda kablo ve bağlantı kullanıldığından. Kutu tasarımında bu kabloların yönetimi ve düzenlenmesi için uygun alan ve bağlantı noktaları sağlanmıştır. Ayrıca kutu, erişilebilir bir yerde bulunmasına ve montaj, sökme ve yeniden montaj işlemleri kolaylıkla yapılabilir olmasına dikkat edilmiştir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim38.jpg' alt='Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi'><figcaption>Şekil 9. Motor sürücü kutusunun gösterilmesi ve boyutları hakkında bilgi verilmesi.</figcaption></figure></div>",
          "subsystems": [],
          "analysis": "<p>Doğrulama ve güvenlik değerlendirmesi; prototip testleri, MOSFET kapı sinyali gözlemleri, buck dönüştürücü simülasyonları, güç kaybı hesabı, nominal verim yorumu, aşırı akım ve aşırı sıcaklık durumunda sistemi güvenli moda alan algoritmalar üzerinden yapılmıştır.</p><h4>4.6.Motor Sürücü Verimliliği</h4><strong class='method-subtitle'>Güç kaybı hesabı (En yüksek güç talebinde)</strong><br><p>Motor sürücü devresinin güç tüketimini hesaplamak için birkaç bileşenin güç tüketimini dikkate alınmıştır.</p><p>Toplamda 12 MOSFET bulunmaktadır ve her bir MOSFET'in güç kaybı, üzerinden geçen akıma ve iç direnç değerine bağlı olarak hesaplanmıştır. Bu hesaplamalar sonucunda, her bir MOSFET'in yaklaşık 47.5 watt güç kaybına neden olduğu belirlenmiştir. Toplamda 12 MOSFET bulunduğundan, MOSFET'lerin toplam güç kaybı 570 watt olarak hesaplanmıştır.</p><p>Ayrıca, her bir MOSFET sürücü devresi 80 watt güç tüketmektedir. Devrede toplamda 6 MOSFET sürücü bulunduğundan, bu sürücülerin toplam güç tüketimi 480 watt olarak belirlenmiştir.</p><p>Mikrodenetleyici olarak kullanılan STM32F446RET6'nın güç tüketimi ise 0.064 watt olarak hesaplanmıştır. Bu mikrodenetleyici, düşük güç tüketimi ve yüksek performansı ile motor kontrol uygulamaları için idealdir.</p><p>Pasif bileşenler ve diğer devre elemanlarının güç tüketimi ise yaklaşık 10 watt olarak tahmin edilmiştir. Bu bileşenler, devredeki enerji kayıplarının küçük bir kısmını oluşturur ancak yine de toplam güç tüketimi üzerinde etkisi vardır.</p><p>Sonuç olarak, motorun nominal gücü 2500 watt olarak belirlenmiş ve diğer bileşenlerin güç tüketimleri de dikkate alındığında, toplam güç tüketimi yaklaşık 3560 watt olarak hesaplanmıştır. 3560 watt, devrenin en kötü koşullardaki (maksimum) güç tüketimini yansıtmaktadır. Gerçek çalışma koşullarında, motor ve diğer bileşenler her zaman maksimum güç tüketimi ile çalışmayabilir, bu nedenle gerçek güç tüketimi daha düşük olabilir.</p><strong class='method-subtitle'>Yüzde verim değeri (Nominal güç talebinde)</strong><br><p>Motorun nominal olarak 48V ve 50A olarak tasarlandığı düşünüldüğünde, güç hesaplaması P=V.I formülü kullanılarak 2400 Watt olarak belirlenmiştir. Bu değer, motorun çalışma koşullarında sağlanan güç miktarını ifade eder. Ancak devrede kullanılan MOSFETlerin doğal bir direnci bulunmaktadır ve bu da 40 Watt gibi bir kayba yol açmaktadır. Bu kayıp yüzdesel olarak hesaplandığında, (40 / 2400) * 100 ≈ %1,67 gibi bir değere denk gelir.</p><h4>4.7.Motor Sürücü Koruması</h4><p>Motor sürücüde aşırı akım koruması ve aşırı sıcaklık koruması yapan algoritma vardır. Aşırı akım veya sıcaklık durumunda motora giden güç kesilmektedir ve sistem güvenli moda girmektedir.</p><strong class='method-subtitle'>Akım değerini ölçen algoritma</strong><br><p>Aşırı akım koruma algoritmasında INA229 entegresinden SPI haberleşme protokolü aracılığıyla akım verisi alınır. Ölçülen akım değerinin, akım sınırını geçmesi durumunda sistem güvenli moda girmektedir ve motor çalışmayı durdurmaktadır. Aşırı akım koruma algoritmasında gürültüden vb. sebeplerden dolayı anlık yanlış okunan veriler olması durumunda ise ufak bir kontrol fonksiyonu eklenmiştir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim39.png' alt='Akım değerini ölçen algoritma'><figcaption>Şekil 1. Akım değerini ölçen algoritma.</figcaption></figure></div><strong class='method-subtitle'>Sıcaklık Değerini ölçen algoritma</strong><br><p>Aşırı sıcaklık koruması yapan algoritma, sıcaklık verilerini INA229 entegresinden alır. Sıcaklığın, güvenlik sınırını geçmesi durumunda sistem güvenli moda alınır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim40.png' alt='Sıcaklık Değerini ölçen algoritma'><figcaption>Şekil 2. Sıcaklık Değerini ölçen algoritma.</figcaption></figure></div><strong class='method-subtitle'>Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma</strong><br><p>Bu algoritma, sistemin güvenlik moduna alındığı zaman devreye giren algoritmadır. Algoritma, temelinde 3 kısımdan oluşmaktadır. 1. bölümde motor çalışırken, sıcaklık, akım ve sistemi açık tutan “enable” tuşunun kontrolü yapılır. Bir sorun olmaması durumunda motor çalışmaya devam eder. Bir sorun olması durumunda ise algoritmanın 2. kısmına geçilir. Algoritmanın bu kısmına geçildikten sonra motor çalışmayı durdurur. 2. bölümde motora giden güç kesilir. Bu bölümde tek kontrol edilen şey pilotun pedala basıp basmadığıdır. Eğer pilot pedala basıp motoru döndürmek istiyorsa algoritma 2. bölümden çıkmaz ve motor hiçbir zaman dönmez. Pilot pedala basmaz ise algoritma 3. kısıma geçer. Bu bölümde sistemdeki tüm kontroller yapılır ve sistemde her şeyin düzgün çalıştığından emin olunur. Bir sorun olması durumunda o sorun çözülene kadar sistem güvenli modda kalmaya devam eder ve motor dönmez. Akım değerinin, sıcaklık değerinin ve sistemi başlatan “enable” tuşunun açık olması durumunda sistem güvenli moddan çıkar ve motor eskisi gibi dönmeye başlar.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim41.png' alt='Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma'><figcaption>Şekil 3. Aşırı akım veya sıcaklık durumunda sistemi güvenli moda alan algoritma.</figcaption></figure></div><h4>4.8.Malzeme Listesi</h4><p>Malzeme listesi, tüm satın alma kalemlerini tek tek yığmak yerine kartın ana mühendislik bloklarını gösterecek şekilde sadeleştirildi. Bu yapı; güç anahtarlama, kontrol, ölçüm, koruma ve besleme hatlarının hangi bileşen gruplarıyla kurulduğunu daha okunabilir hale getirir.</p><div class='hud-table-wrap '><table class='hud-benchmark-table'><thead><tr><th>Bileşen Grubu</th><th>Tasarımda Kullanımı</th></tr></thead><tbody><tr><td>Güç anahtarlama katı</td><td>IXTH200N10T MOSFET ailesi ve üç fazlı köprü yapısı</td></tr><tr><td>Gate sürüş hattı</td><td>IRS2186 / IRS21867S yüksek ve düşük taraf sürücüleri</td></tr><tr><td>Kontrol birimi</td><td>STM32F446RET6 ARM Cortex-M4 mikrodenetleyici</td></tr><tr><td>Ölçüm ve koruma</td><td>INA229 akım, gerilim, güç ve sıcaklık izleme hattı</td></tr><tr><td>Besleme zinciri</td><td>TL783, LM2596HV, izole DC/DC ve 5 V / 3.3 V regülatörler</td></tr><tr><td>Yardımcı bileşenler</td><td>Direnç, kondansatör, indüktör, konnektör, LED ve pasif filtre elemanları</td></tr></tbody></table></div><p>Takım tarafından tasarlanan ve prototiplenen motor sürücü kartının teknik çıktı tablosu aşağıdaki gibidir.</p><div class='hud-table-wrap bldc-output-table'><table class='hud-benchmark-table'><thead><tr><th>Özellik</th><th>Değer/Açıklama</th></tr></thead><tbody><tr><td>Anahtar</td><td>IXTH200N10T</td></tr><tr><td>Sürücü Entegresi</td><td>IRS2186</td></tr><tr><td>Kontrolcü Entegresi</td><td>STM32F446RET6</td></tr><tr><td>Kontrol Algoritması</td><td>Kapalı Döngü</td></tr><tr><td>Koruma Devresi</td><td>80 Amper Sigorta</td></tr><tr><td>Elektrik Devre Tasarımı</td><td>https://drive.google.com/drive/folders/1wGStn39v0P4p8lhwLE1O9xsp7bxvO1Vs</td></tr><tr><td>Baskı Devre Kartı Tasarımı</td><td>https://drive.google.com/drive/folders/1wGStn39v0P4p8lhwLE1O9xsp7bxvO1Vs</td></tr><tr><td>Baskı Devre Kartı Üretimi</td><td>Kart, takım tarafından tasarlanıp üretici tarafından üretilmiştir. Dizgi işlemleri yine takım tarafından yapılmıştır.</td></tr><tr><td>Yazılım Algoritması</td><td>https://drive.google.com/file/d/1m-uZoBatOImtPA3g9t1bNuGejM1-A806/view?usp=drive_link</td></tr><tr><td>Simülasyon Çalışmaları</td><td>https://drive.google.com/drive/folders/1daJZh62l2uDtyko0J7pKTum_-fOd2yW3</td></tr><tr><td>Deneysel Çalışmalar</td><td>https://drive.google.com/drive/folders/1gFA6QfE45RP-FTSr6GWQxGa0K6CliWwN</td></tr><tr><td>Boyut (PCB / Donanım Kutusu)</td><td>200 x 150 mm PCB, 120 x 250 x 250 cm kutu</td></tr><tr><td>Güç / Akım / Gerilim</td><td>2.5 kW / 48 V / 50 A</td></tr><tr><td>Verim</td><td>%90</td></tr></tbody></table></div>",
          "achievements": "<p>Bu projenin sonunda yalnızca bir devre şeması değil, çalıştırılabilir ve test edilebilir bir BLDC motor sürücü kartı ortaya çıkarıldı. 48 V hat üzerinde 50 A nominal çalışma hedefi için üç fazlı güç katı, STM32 tabanlı kontrol algoritması, Hall sensörü geri beslemesi, akım/sıcaklık izleme ve güvenli moda alma mantığı aynı sistemde birleştirildi.</p><p>Çalışma; Altium Designer üzerinde PCB tasarımı, Proteus ortamında sürüş ve besleme simülasyonları, prototip kart üretimi, osiloskop ile kapı sinyali doğrulaması, kutulama ve termal yönetim kararlarıyla uçtan uca bir güç elektroniği geliştirme pratiği kazandırdı. Vol.1 çıktısı, sonraki motor kontrolcü revizyonları için gerçek testlerden öğrenilmiş bir referans kart ve tasarım altyapısı oluşturdu.</p><div class='project-output-access'><div><span class='visual-kicker'>// DESIGN_ARCHIVE</span><strong>Tasarım Dosyaları</strong><p>BLDC_2024, BLDC_2024_STM_UNIT ve MC330335-MC33039 2024 tasarım klasörleri repo içinde erişilebilir hale getirildi. Bu çıktı; şema, PCB ve kontrol birimi tasarım dosyalarının sonraki revizyonlarda yeniden incelenebilmesi için arşiv niteliği taşır.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%202024' target='_blank' rel='noopener noreferrer'>Tasarım Dosyalarını Aç<i data-lucide='external-link'></i></a></div>",
          "detailImage": "vol1/Resim33.png",
          "teamIds": [
                    "team-hidroana"
          ],
          "scientificMerit": "<p>Kontrol tarafında amaç, yalnızca MOSFET kapılarına PWM üretmek değil; motorun yönünü, hızını, dakikadaki devir sayısını, akımını ve sıcaklığını izleyerek güvenli çalışma durumunu yazılımsal olarak yönetmektir. Bu nedenle STM32F446RET6, INA229 ölçüm entegresi, Hall sensörü konum bilgisi ve güvenli mod mantığı aynı kontrol mimarisinde birleştirilmiştir.</p><h4>4.2.Kontrol Algoritması</h4><strong class='method-subtitle'>Sürücü kontrolünün konsepti ve türü (analog/dijital kontrol, FOC, DTC, V/f kontrol, vb.)</strong><br><p>Sürücünün kontrolü STM32F446RET6 işlemcisi tarafından yapılmaktadır. İşlemci STM32CUBE IDE isimli program vasıtasıyla kodlanmıştır. STM32F446RET6’nın tercih edilmesinin sebebi 180MHz gibi yüksek bir hızda çalışmasıdır.</p><p>Algoritmaya ilk olarak, sürücülere PWM sinyalleri sağlayıp motoru döndürerek başlanmıştır. Algoritma temel anlamda motorun istenilen yönde ve hızda dönmesi, hızı ve sıcaklığı hesaplaması, yüksek akım ve sıcaklık koruması gibi gerekli güvenlik önlemlerinin alınması işlemlerini gerçekleştirmek üzere tasarlanmıştır. Kontrolcü üzerinde, akım, voltaj, sıcaklık ve güç değerlerini okumakta olan Texas Instruments’in INA229 entegresi bulunmaktadır. INA229 ile STM32F446RET6 SPI haberleşme protokolü kullanarak haberleşmektedir.</p><strong class='method-subtitle'>PWM sinyallerinin oluşturulduğu algoritma</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim6.png' alt='PWM sinyallerinin oluşturulduğu algoritma'><figcaption>Şekil 1. PWM sinyallerinin oluşturulduğu algoritma.</figcaption></figure></div><p>Bu algoritma, motorun istenilen fazlarına sinyal verilmesini sağlar. A_H,…,C_H olarak belirtilen kısımlar yüksek taraflara PWM sinyallerinin verildiği kısımlardır. Bu kısımlara 0 ile 100 arasında bir değer girilir. Bu değere görev döngüsü denmektedir. A_L,…,C_L olarak belirtilen kısımlar düşük taraflara verilen voltajı belirler. Bu kısımların 1 olması durumunda gerekli voltaj sağlanır ve anahtarlama yapılmış olur. 0 olması durumunda voltaj verilmez ve anahtarlama yapılmaz.</p><strong class='method-subtitle'>Motorun saat yönünün tersine dönmesini sağlayan algoritma</strong><br><p>Bu algoritma motorun saat yönünün tersine dönmesini sağlar. Başlangıçta yer alan fonksiyon pedaldan gelen değere göre bir görev döngüsü değeri belirler. Bu değer 0 ile 100 arasındadır ve motorun ne kadar hızlı döneceğini belirler. “motor_state” değişkeni, motorun o anki konumunu söyleyen bir değişkendir. Algoritma içerisinde motorun anlık konumuna göre A,B veya C fazlarının yüksek veya düşük taraflarına gerekli sinyal ve voltaj gönderilir. Fazlara voltaj uygulandıkça motor dönmeye başlar ve motor döndükçe “motor_state” değişkeni motorun anlık konumuna göre değişir. Bu böyle devam eder ve motor saat yönünün tersinde dönmeye başlar.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim7.png' alt='Motorun saat yönünün tersine dönmesini sağlayan algoritma'><figcaption>Şekil 2. Motorun saat yönünün tersine dönmesini sağlayan algoritma.</figcaption></figure></div><strong class='method-subtitle'>Dakikadaki devir sayısını hesaplayan algoritma</strong><br><p>Bu algoritma, sistemin başladığı andan itibaren dakikadaki devir sayısını hesaplamaktadır. Bunun için motorun konumu bilinmelidir ve motorun anlık konumu, motorda bulunan Hall sensörleri tarafından gelen bilgiler ile belirlenir. Algoritma temelde, motorun bir tam tur attığı zamanı hesaplamaktadır. Algoritmada ilk olarak motorun anlık konumu hesaplanır. Bu değer kaydedilir. Daha sonrasında zaman ilerledikçe motorun yeni konumu ile eski konumu farklı mı diye kontrol edilir. Farklı olması durumunda bu işlem böyle 6 defa devam eder. 6 defa devam etmesinin sebebi ise, motorun içinde bulunan Hall sensörlerinin verdiği değerlere göre, motorun yalnızca 6 farklı konumda bulunabileceğidir. 6. işlemin sonunda aradan geçen zaman işlemcinin saatini kullanarak hesaplanır. Süre mikro saniye cinsinden hesaplanır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim8.png' alt='Dakikadaki devir sayısını hesaplayan algoritma'><figcaption>Şekil 3. Dakikadaki devir sayısını hesaplayan algoritma.</figcaption></figure></div><strong class='method-subtitle'>Kontrol Blok Şeması</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim9.png' alt='Kontrol Blok Şeması'><figcaption>Şekil 4. Kontrol Blok Şeması.</figcaption></figure></div><h4>4.3. Simülasyon Calışmaları</h4><strong class='method-subtitle'>Simülasyon parametreleri (örnekleme zamanı, çözünürlük zamanı, vb.)</strong><br><p>Simülasyon çalışmalarında Proteus yazılımı kullanılmış olup. Motora giden faz beslemelerinin simüle edilmiş hali aşağıdaki görselde MOSFET sürücü devre olarak yapılmıştır.</p><p>Örnekleme zamanı, simülasyonun doğruluğunu ve performansını etkileyen önemli bir parametredir. Kontrol algoritmasının çalışması için yeterince küçük bir örnekleme zamanı secilmistir.</p><p>Mikrodenetleyici tabanlı kontrol: 100 µs - 1 ms (10 kHz - 1 kHz)</p><p>Yüksek hassasiyetli kontrol: 10 µs - 100 µs (100 kHz - 10 kHz)</p><p>Çözünürlük zamanı, simülasyonun zaman adımının ne kadar küçük olacağını belirler. Daha küçük zaman adımları daha hassas sonuçlar sağlar ancak simülasyon süresini uzatır. Bu, örnekleme zamanının 10-100 katı kadar küçük bir değer seçilerek belirlenmiştir.</p><p>Yüksek çözünürlük: 1 µs - 10 µs (1 MHz - 100 kHz)</p><p>Düşük çözünürlük: 10 µs - 100 µs (100 kHz - 10 kHz)</p><p> Örnekleme Zamanı: 0.001 saniye (1ms)</p><p> Çözünürlük Zamanı: 0.0001 saniye (0.1ms)</p><p> Simülasyon Süresi: 10 saniye</p><p> Başlangıç Hızı: 0 RPM</p><p> Yük Ataleti: 0.01 kg·m²</p><p> Zaman Adımları: 0.0001 saniye (0.1ms)</p><strong class='method-subtitle'>Şematik çizim</strong><br><strong class='method-subtitle'>Half Bridge MOSFET Katmanı</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim10.png' alt='Half Bridge MOSFET Katmanı'><figcaption>Şekil 5. Half Bridge MOSFET Katmanı.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim11.png' alt='Half Bridge MOSFET Katmanı'><figcaption>Şekil 6. Half Bridge MOSFET Katmanı.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim12.png' alt='Half Bridge MOSFET Katmanı'><figcaption>Şekil 7. Half Bridge MOSFET Katmanı.</figcaption></figure></div><p>Yukarıdaki görsellerde görünen MOSFET blokları motor sürücünün güç çıkışı yani motorun üç faz besleme çıkışlarıdır. A High, B High, C High ve A Low, Low,C Low olmak üzere altı farklı çıkış vardır. Motor konumuna göre STM32F446RET6 kontrolcüsünden gerekli giriş sinyalleri alınarak MOSFET sürücülerine, ordan da MOSFET’ lere iletilir. Bu sinyallere göre MOSFET’ler iletime geçer veya iletimi keser.</p><strong class='method-subtitle'>Ana Güç Kapasitörleri</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim13.png' alt='Ana Güç Kapasitörleri'><figcaption>Şekil 8. Ana Güç Kapasitörleri.</figcaption></figure></div><p>DC-link kondansatörleri, motor sürücüsünün performansını, verimliliğini ve güvenilirliğini artırmada kritik bir rol oynar. Gerilim dalgalanmalarını azaltarak, enerji depolayarak, gerilim dengeleyerek, EMI/RFI filtreleyerek ve ısı yönetimini iyileştirerek motor sürücüsünün daha stabil, verimli ve uzun ömürlü olmasını sağlarlar.</p><strong class='method-subtitle'>+48 Vin / +45 Vout TL783</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim14.png' alt='+48 Vin / +45 Vout TL783'><figcaption>Şekil 9. +48 Vin / +45 Vout TL783.</figcaption></figure></div><p>TL783, yüksek giriş gerilimlerinden düşük çıkış gerilimlerine sabit bir şekilde regülasyon sağlamak için kullanılan güvenilir ve çok yönlü bir voltaj regülatörüdür. Geniş voltaj aralığı, ayarlanabilir çıkış gerilimi ve koruma özellikleri sayesinde kartta regülatör kısmında yer almaktadır.</p><strong class='method-subtitle'>+45 Vin / +15 Vout LM2596HV</strong><br><p>LM2596HV, yüksek giriş voltajlarını düşük çıkış voltajlarına verimli bir şekilde düşüren voltaj regülatörüdür. Geniş giriş voltaj aralığı, ayarlanabilir çıkış voltajı, yüksek çıkış akımı ve koruma özelliklerinden dolayı +15V gerilim elde etmek için bu regülatörü kullanılmıştır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim15.png' alt='+45 Vin / +15 Vout LM2596HV'><figcaption>Şekil 10. +45 Vin / +15 Vout LM2596HV.</figcaption></figure></div><strong class='method-subtitle'>+15 Vin / +5 Vout WPME-FDSM</strong><br><p>WPME-FDSM, geniş giriş voltaj aralığı (8V- 28V) ve sabit 5V çıkış voltajı ile çeşitli elektronik uygulamalarda kullanılabilen verimli ve güvenilir bir voltaj regülatörüdür. THT montaj tekniği ve SIP-3 form faktörü sayesinde kompakt ve dayanıklı bir yapıya sahiptir. Maksimum 1A çıkış akımı sağlayarak +3.3V regülatörü için güvenli bir çalışma ortamı sunar.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim16.png' alt='+15 Vin / +5 Vout WPME-FDSM'><figcaption>Şekil 11. +15 Vin / +5 Vout WPME-FDSM.</figcaption></figure></div><strong class='method-subtitle'>+5 Vin / +3.3 Vout WPME-FDSM</strong><br><p>THT montaj tekniği ve SIP-3 form faktörü sayesinde kompakt ve dayanıklı bir yapıya sahiptir. STM32 mikrokontrolcu için gereken 3.3 V gerilim değerini mümkün olan en az gürültü ile sağlamaktadır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim18.png' alt='+5 Vin / +3.3 Vout WPME-FDSM'><figcaption>Şekil 12. +5 Vin / +3.3 Vout WPME-FDSM.</figcaption></figure></div><strong class='method-subtitle'>Izole +15 Vin / +15 Vout B0505S-1WR3</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim19.png' alt='Izole +15 Vin / +15 Vout B0505S-1WR3'><figcaption>Şekil 13. Izole +15 Vin / +15 Vout B0505S-1WR3.</figcaption></figure></div><p>Bootstrap devresi, bir güç anahtarlama devresindeki yüksek taraf sürücüsünün (high-side driver) kapı (gate) voltajını sağlamak için kullanılmıştır. Bootstrap kondansatörü, bu devrede kullanılan ana bileşenlerden biridir ve yüksek taraf sürücüsünün çalışması için gerekli olan voltajı geçici olarak depolar. Bu kondansatör, düşük taraf anahtarlama transistörünün açık olduğu sürede şarj olur ve daha sonra yüksek taraf transistörünün kapısını sürmek için bu depolanan enerjiyi kullanır. Fakat bazı ekstrem koşullarda fazla yük çekmesi sonucunda anahtarlama elemanını sürecek kapasitör yeterli gerilimi sağlamayabilir. Bu durumu önlemek amacı ile, kondansatöre bağlı izole DA/DA dönüştürücü kullanılmasına karar verilmiştir.</p><strong class='method-subtitle'>Hall Efekt Sensörleri</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim20.png' alt='Hall Efekt Sensörleri'><figcaption>Şekil 14. Hall Efekt Sensörleri.</figcaption></figure></div><strong class='method-subtitle'>Güç ve Kullanıcı Ledleri</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim21.png' alt='Güç ve Kullanıcı Ledleri'><figcaption>Şekil 15. Güç ve Kullanıcı Ledleri.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim22.png' alt='Güç ve Kullanıcı Ledleri'><figcaption>Şekil 16. Güç ve Kullanıcı Ledleri.</figcaption></figure></div><strong class='method-subtitle'>STM32F446RET6</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim23.png' alt='STM32F446RET6'><figcaption>Şekil 17. STM32F446RET6.</figcaption></figure></div><strong class='method-subtitle'>Simülasyon adımları</strong><br><strong class='method-subtitle'>MOSFET Kapı Sinyali</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim24.jpg' alt='MOSFET Kapı Sinyali'><figcaption>Şekil 18. MOSFET Kapı Sinyali.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim25.png' alt='MOSFET Kapı Sinyali'><figcaption>Şekil 19. MOSFET Kapı Sinyali.</figcaption></figure></div><p>PWM sinyali, MOSFET'in anahtarlama döngüsünü belirler. N-kanallı MOSFET'lerde genellikle gate terminaline yüksek bir voltaj uygulanarak MOSFET açılır. Yani, ne kadar süreyle MOSFET açık (iletim durumunda) olacak ve ne kadar süreyle kapalı (kesim durumunda) olacağı, gerilimin uygulanma süresine bağlıdır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim26.png' alt='MOSFET Kapı Sinyali'><figcaption>Şekil 20. MOSFET Kapı Sinyali.</figcaption></figure></div><strong class='method-subtitle'>48 V / 15 V Buck Converter</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim27.png' alt='48 V / 15 V Buck Converter'><figcaption>Şekil 21. 48 V / 15 V Buck Converter.</figcaption></figure></div><strong class='method-subtitle'>15 / 5V DA-DA Voltaj Düşürücü</strong><br><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol1/Resim28.png' alt='15 / 5V DA-DA Voltaj Düşürücü'><figcaption>Şekil 22. 15 / 5V DA-DA Voltaj Düşürücü.</figcaption></figure></div><p>Giriş gerilimi anahtarlama transistorünün kontrolü ile endüktöre iletilir. Bu transistor, genellikle bir PWM sinyali ile sürülerek açılıp kapanır. Anahtarlama sırasında, endüktör üzerinde bir manyetik alan oluşturulur. Bu manyetik alan, endüktörde depolanan enerjiyi temsil eder. Endüktör üzerinde depolanan manyetik enerji, anahtarlama transistorünün kapalı olduğu zamanlarda çıkış devresine aktarılır. Endüktör üzerinde oluşan manyetik alanın bozulmasıyla (anahtarlama ile), endüktörden çıkan enerji, çıkış gerilimini oluşturur.</p>"
},
      {
            "id": "project-2",
            "title": "Elektrikli Araçlar İçin İzolasyon İzleme Cihazı",
            "category": "guc-elektronigi",
            "summary": "Bu proje, Hidroana hidrojen enerjili aracının 48 V DC ana güç hattında batarya kutupları ile şasi arasındaki elektriksel izolasyon direncini gerçek zamanlı izlemek amacıyla geliştirilmiştir. Sistem, asimetrik ve simetrik kaçak durumlarını tespit edebilen anahtarlamalı direnç köprüsü (Electric Bridge Switch) ve izole ölçüm mimarisine dayanır. AD8216 fark yükselteci ve AMC1311 izole aktarım entegreleri sayesinde yüksek gerilim tarafı ile kontrol elektroniği arasında tam galvanik izolasyon sağlanarak araç ve kullanıcı güvenliği üst seviyeye taşınmıştır.",
            "description": "Bu proje, yüksek gerilim sınıfında ele alınan bir sistem değil; 48 V seviyesinde çalışan hidrojen enerjili araç güç hattında güvenli izolasyon takibi yapmak için tasarlanmış bir izleme kartıdır. Amaç, bataryanın pozitif ve negatif terminallerinin şasiye karşı izolasyon dirençlerini ölçmek, olası kaçak yolları erken tespit etmek ve kontrol kartına sayısallaştırılabilir güvenilir bir ölçüm bilgisi aktarmaktır.",
            "image": "isolation/ev-isolation-cover.jpg",
            "tags": [
                  "48 V Araç Güvenliği",
                  "İzolasyon İzleme",
                  "AD8216 Fark Yükselteci",
                  "AMC1311 İzole Ölçüm",
                  "team-hidroana"
            ],
            "specs": [
                  {
                        "name": "Çalışma Bağlamı",
                        "value": "48 V Hidrojen Enerjili Araç Güç Hattı"
                  },
                  {
                        "name": "Ölçülen Büyüklük",
                        "value": "Rp ve Rn Şasi İzolasyon Dirençleri"
                  },
                  {
                        "name": "Analog Ölçüm",
                        "value": "AD8216 Fark Yükselteci ve ADC Girişi"
                  },
                  {
                        "name": "Elektriksel Ayrım",
                        "value": "AMC1311, Opto İzolatör ve İzole DC-DC"
                  }
            ],
            "overview": "<p>İzolasyon takip cihazı, aracın 48 V batarya hattı ile şasi arasındaki yalıtım durumunu izlemek için tasarlandı. Batarya pozitif ucu, batarya negatif ucu ve şasi arasında istenmeyen kaçak yollar oluştuğunda hem kullanıcı güvenliği hem de elektronik sistemlerin kararlılığı etkilenebilir. Bu nedenle kart, kaçak akımı doğrudan yorumlamak yerine şasiye karşı eşdeğer izolasyon dirençlerini hesaplayan ölçülebilir bir analog model üzerine kuruldu.</p><p>Referans alınan modern izolasyon izleme yaklaşımında ölçüm, sıcak taraf için ayrı bir izole besleme zorunluluğu doğurmadan soğuk taraftan beslenen izole amplifikatörler ve izole anahtarlar üzerinden yapılır. Bu mantık, mevcut güç dönüşüm veya şarj protokolü mikrodenetleyicisine eklenebilen bir tanı fonksiyonu gibi düşünülebilir. Bizim uygulamamızda bu yaklaşım 400 V sınıfı EV bataryası için değil, 48 V Hidroana araç güç hattı için ölçeklenmiştir.</p><p>Projede pozitif terminal ile şasi arasındaki izolasyon direnci Rp, negatif terminal ile şasi arasındaki izolasyon direnci ise Rn olarak ele alındı. Ölçüm devresi, bilinen dirençler ve röle ile değiştirilen iki farklı ölçüm durumu üzerinden UP1, UN1, UP2 ve UN2 gerilimlerini üretir. Bu gerilimler analog yükseltme ve izolasyon katlarından geçirilerek kontrol kartı tarafında ADC ile okunabilir hale getirilir.</p>",
            "architecture": "<h4>Teknik Arka Plan ve Güvenlik İhtiyacı</h4><p>Elektrikli araçların yaygınlaşması, hızlı şarj sistemlerinin gelişmesi ve güneş enerjisi sistemlerinin daha erişilebilir hale gelmesi, güvenli DC enerji aktarımına olan ihtiyacı artırdı. Referans tasarımlarda bu problem genellikle 400 V seviyesindeki EV bataryaları, daha yüksek gerilimli hızlı şarj hatları ve 1 kV seviyesine çıkabilen PV string inverter hatları üzerinden anlatılır. Bu sistemlerde kullanıcıyı korumak için DC hatlarının koruyucu toprağa karşı yüksek dirençli yollarla izole kalması gerekir; izolasyon zayıfladığında kaçak akım artar ve güvenlik riski oluşur.</p><p>Bizim kartımız bu yüksek gerilim seviyelerinde çalışan bir araç için değil, 48 V Hidroana güç hattı için tasarlandı. Yine de kullanılan tanı mantığı aynıdır: batarya hattı ile şasi arasındaki izolasyon bariyerinin sağlıklı çalışıp çalışmadığını izlemek, direnç değeri yeterli değilse kontrol sistemine güvenli aksiyon aldırabilecek bir ölçüm bilgisi üretmek. Bu nedenle tasarımda izolasyon bariyerinin düzgün çalışmasının izlenmesi, yalnızca ölçüm doğruluğu değil, araç güvenliği açısından da temel gereksinim olarak ele alındı.</p><h4>Soğuk Taraftan Beslenen İzole Ölçüm Yaklaşımı</h4><p>Referans alınan yeni nesil yaklaşım, sıcak tarafta ayrı bir izole besleme gerektirmeden izole ölçüm yapılmasını hedefler. İzole amplifikatörler ve izole anahtarlar sayesinde ölçüm devresi soğuk taraftan beslenebilir; izolasyon izleme fonksiyonu da mevcut güç dönüşüm, batarya yönetimi veya şarj protokolü mikrodenetleyicisine eklenebilir. Bu yaklaşım kartı daha sade, daha kompakt ve sistem mimarisine daha kolay entegre edilebilir hale getirir.</p><h4>Yöntem Seçimi: AC Enjeksiyon ve Electric Bridge Switch</h4><p>İzolasyon izleme için iki yaygın yöntem öne çıkar: AC akım enjeksiyonu ve electric bridge switch. AC enjeksiyon yönteminde kare dalga benzeri bir sinyal, DC hatları ile koruyucu toprak arasındaki RC devreye bir RC filtre veya transformatör üzerinden enjekte edilir. Empedans, kondansatörün şarj ve deşarj davranışından hesaplanır. Bu yöntemin avantajı izolasyon kapasitansından daha az etkilenmesidir; fakat güvenilir ve hassas bir tasarım elde etmek zordur ve enjeksiyon devresini DC hatlarından ayırmak için hacimli bir transformatör gerekebilir.</p><p>Electric bridge switch yöntemi, IEC 61851-23 gibi güvenlik standartlarında önerilen daha doğrudan bir yaklaşımdır. Bu yöntemde bilinen bir direnç dalı, izolasyon bariyeri üzerine kontrollü olarak anahtarlanır. Normal koşulda DC hattı ile şasi arasında kaçak yol olmadığı için direnç köprüsünden anlamlı bir akım akmaz; bu durum izolasyonun sağlıklı olduğunu gösterir. İzolasyon bozulduğunda ise direnç dalı üzerinden ölçülebilir bir gerilim oluşur ve bu gerilimden izolasyon direnci hesaplanır.</p><p>Electric bridge DC izolasyon izleme yapısı sade ve doğru bir ölçüm sağlar; büyük transformatör gerektirmez ve normal çalışmada izolasyon bariyeri üzerinde yalnızca kısa süreli ve küçük güç kayıpları oluşturur. Bu nedenle endüstriyel düşük gerilim dağıtım sistemleri yanında HEV/EV sistemlerinde de yaygın kullanılan bir yöntemdir. Güvenlik açısından direnç dalının devrede kalma süresi sınırlı tutulmalıdır; referans yaklaşımda bu sürenin 10 saniyenin altında kalması önerilir. Çünkü direnç dalı aktifken izolasyon bariyeri ölçüm amacıyla kontrollü biçimde yüklenmiş olur.</p><h4>SP/SN Anahtarları ve Direnç Dalları</h4><p>Referans tasarımda pozitif taraf anahtarı SP ve negatif taraf anahtarı SN olarak adlandırılır. Bu anahtarlar, bilinen yüksek dirençli bölücü dalları sırasıyla DC+ ile PE/şasi ve DC- ile PE/şasi arasına bağlar. RstP ve RstN, yüksek hassasiyetli direnç dallarıdır; RinAMC ise izole amplifikatörün girişinde ölçüm gerilimini ölçekleyen algılama direnci gibi davranır. Bizim devremizde aynı mantık, 48 V batarya hattı ve şasi referansı için röle/anahtarlama ağı, AD8216 ölçüm katı ve AMC1311 izole aktarım yapısıyla uyarlanmıştır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='isolation/1.jpeg' alt='EV/HEV Güç Dönüşüm Sistemlerinde İzolasyon Bariyer Seviyeleri'><figcaption>Şekil 2. EV/HEV Güç Dönüşüm Sistemlerinde İzolasyon Bariyer Seviyeleri (PFC, DC-DC Birincil, DC-DC İkincil ve PE Toprak Hatları).</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='isolation/3.jpeg' alt='İzolasyon İzleme Cihazı Entegrasyonu'><figcaption>Şekil 3. İzolasyon İzleme Cihazının (IMD) Güç Hattı, Koruyucu Toprak (PE) ve Kontrol Ünitesi İle Entegrasyon Şeması.</figcaption></figure></div><p>Ölçüm sırasında iki direnç dalı aynı anda değil, farklı zamanlarda devreye alınır. SP kapalıyken SN açık tutulur ve pozitif direnç dalı üzerinden VP izolasyon gerilimi ölçülür. SN kapalıyken SP açık tutulur ve negatif direnç dalı üzerinden VN izolasyon gerilimi ölçülür. İzolasyon bariyeri sağlıklıysa MOhm mertebesindeki Riso değerleri nedeniyle çok küçük bir akım oluşur ve izole amplifikatör girişinde küçük bir sinyal görülür. Bariyer zayıfladığında Iiso artar; bu da AMC3330/AMC1311 benzeri izole ölçüm katında daha yüksek giriş sinyali anlamına gelir.</p><h4>Kirchhoff Denklemleri ve İzolasyon Direnci Hesabı</h4><p>SP kapalı ve SN açıkken kaçak akım, direnç dalı üzerinde VP olarak adlandırılan izolasyon gerilimini oluşturur. Kirchhoff gerilim kanununa göre <code>Iiso * RisoN - VDC + VP = 0</code> yazılır. Buradan <code>VP = VDC - Iiso * RisoN</code> elde edilir. Aynı durumda izolasyon bariyeri üzerinden akan akım, ölçülen VP gerilimi ve direnç dalı üzerinden ifade edilir. VP değeri izole amplifikatör girişinde VinP olarak ölçeklenmiş halde okunduğu için gerçek VP gerilimi <code>VP = VinP * (RstP + RinAMC) / RinAMC</code> bağıntısıyla hesaplanır.</p><p>Ters ölçüm durumunda SP açılır, SN kapatılır. Bu eşdeğer devrede DC bağlantı polaritesi değiştiği için VDC işareti ve Iiso yönü de değişir. Bu durumda <code>Iiso * RisoP + VDC + VN = 0</code> ve <code>VN = -VDC - Iiso * RisoP</code> bağıntıları yazılır. VN gerilimi de izole ölçüm katında ölçeklenmiş olarak okunduğundan <code>VN = VinN * (RstN + RinAMC) / RinAMC</code> ile gerçek izolasyon gerilimine dönüştürülür.</p><div class='formula-block'><code>Iiso * RisoN - VDC + VP = 0</code><br><code>VP = VDC - Iiso * RisoN</code><br><code>VP = VinP * (RstP + RinAMC) / RinAMC</code><br><code>Iiso * RisoP + VDC + VN = 0</code><br><code>VN = -VDC - Iiso * RisoP</code><br><code>VN = VinN * (RstN + RinAMC) / RinAMC</code></div><p>SP ve SN ölçüm durumlarından elde edilen VP ve VN değerleri birlikte kullanıldığında DC hatları ile şasi arasındaki izolasyon dirençleri hesaplanır. RstP ve RstN eşit kabul edilirse formül sadeleşir ve RisoP/RisoN değerleri doğrudan VDC, VP, VN, Rst ve RinAMC üzerinden bulunur. Negatif taraftaki ölçümde izole amplifikatör girişinde görülen izolasyon geriliminin polaritesi, pozitif direnç dalı devredeyken görülen polaritenin tersidir; bu nedenle bipolar giriş aralığına sahip izole ölçüm yapıları bu yöntem için uygundur.</p><div class='formula-block'><code>RisoP = -((RinAMC + Rst) * (VDC + VN - VP)) / VN</code><br><code>RisoN = ((RinAMC + Rst) * (VDC + VN - VP)) / VP</code></div><h4>Devre Tasarımı</h4><p>Elektrikli araçlarda besleme kaynağı, seri ve paralel bağlı batarya gruplarından oluşan batarya paketidir. Bu nedenle batarya paketi ile araç şasisi arasında yüksek performanslı bir elektriksel izolasyon gerekir. İzolasyon zayıfladığında kaçak akımlar hem sistemi hem de kullanıcıyı etkileyebilir; bu yüzden batarya paketi ile şasi arasındaki izolasyonun gerçek zamanlı izlenmesi ve sayısal bir direnç değeri olarak hesaplanması hedeflenmiştir.</p><p>Şematikte HV_POS ve HV_NEG, 48 V batarya hattının pozitif ve negatif uçlarını temsil eder. GND_i ise araç şasisini ifade eder. Ölçüm devresinde R16, R17, R36, R21, R22 ve R37 dirençleri 250 kOhm ve 1 W olarak seçilmiştir; R19 ve R20 ise 500 Ohm değerindedir. Bu direnç ağı, röle durumlarına göre batarya uçları ile şasi arasındaki kaçak yolun ölçülebilir hale gelmesini sağlar. RELAY_SIGNAL pini R16 direncini aktif veya pasif yapmak için kullanılır. Ölçüm yapılmadığı anlarda RELAY_POS ve RELAY_NEG röleleri batarya ile ölçüm devresi arasındaki bağlantıyı keserek devreyi güvenli durumda bırakır.</p><p>AD8216, 3 V/V kazançlı bir amplifikatör olarak R19 ve R20 üzerinden toplanan ölçüm gerilimlerini yaklaşık üç kat büyütür. Bu büyütülmüş sinyaller ADC_IN+ ve ADC_IN- hatları üzerinden kontrol kartına gönderilir. Böylece analog ölçüm seviyesi mikrodenetleyicinin ADC girişleri için daha okunabilir bir aralığa taşınır ve izolasyon direnci hesabı kontrol kartı tarafında yapılabilir.</p><p>Kontrol kartı ile izolasyon kartının toprak referansları farklı olduğu için analog sinyal doğrudan taşınmaz. Bu ayrım için AMC1311 izole amplifikatör kullanılır. AMC1311 diferansiyel çıkış verdiğinden, tek uçlu sinyal oluşturmak için fark alıcı opamp katı kullanılır. Röleleri sürmek için opto izolatörler tercih edilmiştir; bu sayede kontrol sinyalleri ile izolasyon ölçüm tarafı arasında elektriksel ayrım korunur. İzolasyon ve kontrol kartı arasındaki besleme ayrımı için izole DC-DC dönüştürücü, bağlantı için ise molex yapısı kullanılmıştır.</p><h4>Bekleme Süresi, İzolasyon Kapasitansı ve Güç Kaybı</h4><p>İzolasyon bariyeri sağlıklı çalışırken veya asimetrik izolasyon hatası oluştuğunda, DC hatlarının şasiye göre sahip olduğu statik kapasitans izolasyon geriliminin oturma süresini etkiler. Direnç dalı anahtarlanır anahtarlanmaz gerilim nihai değerine ulaşmaz; bu nedenle direnç dalı devreye alındıktan sonra ADC ölçümü yapılmadan önce bekleme süresi bırakılır. Bu durum özellikle izolasyon kapasitansı yüksek sistemlerde toplam ölçüm hızını düşürür.</p><p>Referans modelde zaman sabiti <code>tau = (RisoP || RstP) * CisoP</code> şeklinde ifade edilir. Örneğin 10 nF izolasyon kapasitansı, 68.1 kOhm RstP ve 10 MOhm RisoP için zaman sabiti yaklaşık 676 us olur. Ölçümün nihai değerin yaklaşık yüzde 95'ine ulaşması için anahtar kapandıktan sonra en az <code>3tau</code> beklemek önerilir. Daha düşük direnç dalı değeri kullanılırsa oturma süresi hızlanır; fakat anahtarlanan dal üzerinden geçen akım ve güç kaybı artar.</p><div class='formula-block'><code>tau = (RisoP || RstP) * CisoP</code><br><code>Ist = VBus / (RstP + RinAMC)</code></div><p>Bu yüzden direnç bölücü dalı tasarlanırken ölçüm hızı, güç kaybı, maksimum izin verilen akım ve ADC çözünürlüğü birlikte değerlendirilir. 48 V araç uygulamamızda bu referans mantık daha düşük bara gerilimine ölçeklenir; amaç, izolasyon bariyerini gereksiz yere yüklemeden kaçak direnci güvenilir şekilde okumaktır.</p>",
            "subsystems": [
                  {
                        "title": "Anahtarlamalı Direnç Ağı",
                        "desc": "S rölesi açık ve kapalı durumlarında farklı ölçüm noktaları oluşturarak Rp ve Rn izolasyon dirençlerinin hesaplanmasını sağlar."
                  },
                  {
                        "title": "AD8216 Ölçüm Katı",
                        "desc": "Pozitif ve negatif terminal tarafındaki küçük gerilim farklarını ADC seviyesine taşımak için kullanılır."
                  },
                  {
                        "title": "AMC1311 İzole Aktarım",
                        "desc": "İzolasyon kartı ile kontrol kartı referanslarını ayırarak analog ölçüm bilgisinin güvenli şekilde aktarılmasını sağlar."
                  },
                  {
                        "title": "Opto İzolatör ve Röle Sürme",
                        "desc": "Ölçüm durumlarını değiştiren rölelerin kontrol tarafıyla galvanik bağı azaltılarak sürülmesini sağlar."
                  }
            ],
            "analysis": "<h4>Simülasyon ve Doğrulama</h4><p>Devre MATLAB Simscape ortamında kurularak çalışması test edildi. Doğrulama yaklaşımı iki ana kaçak senaryo üzerinden yürütüldü: negatif terminalde 250 kOhm seviyesinde izolasyon kaçağı ve pozitif terminalde 250 kOhm seviyesinde izolasyon kaçağı. Negatif terminal kaçağı oluşturulduğunda hesaplanan izolasyon direnci yaklaşık 249.7 kOhm, pozitif terminal kaçağı oluşturulduğunda ise yaklaşık 250.5 kOhm elde edildi. Bu sonuçlar, matematiksel modelin ve anahtarlamalı ölçüm yönteminin hedeflenen kaçak direncini pratik olarak takip edebildiğini gösterdi.</p><p>Simülasyonun temel amacı, yalnızca devrenin çalıştığını göstermek değil; röle durumları, bilinen dirençler, izole ölçüm katı ve ADC'ye giden sinyal zinciri arasında tutarlı bir ilişki kurmaktı. Ölçüm sırasında anahtarlanan direnç dalının çalışma süresinin kısa tutulması gerekir; çünkü direnç dalı devredeyken izolasyon bariyeri bilinçli olarak ölçüm amacıyla yüklenir. Bu yüzden yazılım tarafında anahtarlama, bekleme, ADC okuma ve tekrar açma sırası güvenli bir zamanlama içinde kurgulanmalıdır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='isolation/PROJECT.png' alt='AMC3330 ve TLV6001 İzole Ölçüm Katı Simülasyon Şematiği'><figcaption>Şekil 7. AMC3330 Diferansiyel İzole Amplifikatör, Gerilim Bölücü Ağı ve TLV6001 Fark Yükselteci Katı Simülasyon Şematiği.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='isolation/4.jpeg' alt='Çift Yönlü Anahtarlamalı Köprü Mimarisi'><figcaption>Şekil 4. Çift Yönlü Anahtarlamalı Köprü (Switched Bridge Switch) Mimarisi; SP/SN TPSI2140 Katı Hal Anahtarları ve AMC3330/AMC1311 İzole Ölçüm Katı.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='isolation/6.jpeg' alt='Pozitif Anahtar (SP) Kapalı Durumu Ölçümü'><figcaption>Şekil 5. Pozitif Anahtar (SP) Kapalı Durumunda İzolasyon Gerilimi (VP), Kaçak Akım (Iiso > 0) Yönü ve İzole Amplifikatör Giriş Sinyali (VinP) Eşdeğer Devresi.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='isolation/5.jpeg' alt='Negatif Anahtar (SN) Kapalı Durumu Ölçümü'><figcaption>Şekil 6. Negatif Anahtar (SN) Kapalı Durumunda İzolasyon Gerilimi (VN), Kaçak Akım (Iiso < 0) Yönü ve İzole Amplifikatör Giriş Sinyali (VinN) Eşdeğer Devresi.</figcaption></figure></div><h4>PCB ve İzolasyon Seviyeleri</h4><p>Kart tasarımında üç ayrı seviye gözetildi: 48 V batarya hattı, şasi referansı ve düşük gerilim kontrol tarafı. Tüm elektriksel donanımlar bu seviyelerin birbirini doğrudan etkilemeyeceği şekilde ayrıldı. Bu ayrım, aracın güç hattındaki kaçak ihtimalinin kontrol elektroniğine taşınmaması ve ölçümün kendi referansında güvenilir kalması için kritik görüldü.</p>",
            "achievements": "<p>Bu proje sonunda 48 V hidrojen enerjili araç güç hattı için, batarya kutuplarının şasiye karşı izolasyon durumunu hesaplayabilen bir analog ölçüm mimarisi ortaya çıkarıldı. Çalışma; Kirchhoff tabanlı denklem modeli, Equations dosyasında türetilen RisoP/RisoN bağıntıları, AD8216 ölçüm katı, AMC1311 izole sinyal aktarımı, opto izolatörlü röle sürme ve Simscape doğrulamasıyla kartın tasarım kararlarını teknik olarak gerekçelendirdi.</p><div class='project-output-access'><div><span class='visual-kicker'>// SOURCE_FILES</span><strong>İzolasyon Kaynak Dosyaları</strong><p>İzolasyon PDF'i, Equations Word dosyası ve kartın çalışma prensibini anlatan PNG görselleri erişilebilir hale getirildi.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/isolation' target='_blank' rel='noopener noreferrer'>Kaynak Dosyaları Aç<i data-lucide='external-link'></i></a></div>"
      },
      {
            "id": "project-3",
            "title": "48 V / 42 A Üç Fazlı BLDC Motor Sürücü Kartı (Vol.2)",
            "category": "guc-elektronigi",
            "summary": "Hidroana hidrojen enerjili araç güç aktarma sistemi için geliştirilen Vol.2 motor sürücü; 48 V nominal besleme, 2 kW güç seviyesi ve 42 A çalışma akımı hedefiyle tasarlanmış, modüler güç kartı, kontrol kartı ve regülatör kartından oluşan ikinci nesil BLDC sürücü mimarisidir.",
            "description": "Vol.2 sürücü çalışması, önceki Vol.1 kartta elde edilen saha ve test deneyimlerinin ardından güvenilirlik, termal yönetim, EMI davranışı, galvanik izolasyon ve üretilebilirlik açısından yeniden ele alınan üç fazlı BLDC motor kontrol sistemidir. Tasarımda FDB0260N1007L MOSFET, UCC21520DWR izole gate driver, ACS758 Hall etkili akım sensörü, STM32F446RET6 kontrol birimi, CAN/RS485 haberleşme, dört katmanlı PCB ve aktif soğutmalı kutulama birlikte değerlendirilmiştir.",
            "image": "vol2/3d-bldc-on.png",
            "detailImage": "vol2/3d-bldc-on.png",
            "tags": [
                  "BLDC Motor Sürücü Vol.2",
                  "UCC21520DWR",
                  "FDB0260N1007L",
                  "STM32F446RET6",
                  "Altium Designer",
                  "Hidroana"
            ],
            "specs": [
                  {
                        "name": "Proje Takımı",
                        "value": "Hidroana Proje Takımı"
                  },
                  {
                        "name": "Güç Hedefi",
                        "value": "2 kW / 48 V / 42 A"
                  },
                  {
                        "name": "Topoloji",
                        "value": "Üç Fazlı Yarım Köprü Evirici"
                  },
                  {
                        "name": "Kontrolcü",
                        "value": "STM32F446RET6"
                  }
            ],
            "overview": "<p>Vol.2 motor sürücü sistemi, yüksek akımı taşıyan güç kartı ile modüler kontrol ve regülatör kartlarından oluşan ikinci nesil bir BLDC sürücü mimarisi olarak tasarlandı. Amaç, hidrojen enerjili aracın güç aktarma hattında motorun yön, hız, akım ve güvenlik durumlarını daha kararlı biçimde yönetmek; önceki tasarımda görülen parazit, ölçüm, termal dağılım ve sürüş kararsızlığı problemlerini azaltmaktı.</p><p>Bu revizyonda güç kartı; MOSFET sürücü birimi, üç fazlı evirici, DC bara kapasitörleri, Hall etkili akım sensörleri, güç giriş terminalleri ve motor faz çıkışlarından oluşacak şekilde yapılandırıldı. Kontrol kartı ise motordan alınan konum bilgisi, gerilim bilgisi ve akım sensörü verileriyle PWM üretimini yapan STM32F446RET6 mikrodenetleyici, CAN/RS485 haberleşme modülleri ve sistem güvenliğini destekleyen çevre birimlerini içerir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/blok-semasi.png' alt='Vol.2 motor sürücü genel blok şeması'><figcaption>Şekil 1. Vol.2 motor sürücü sisteminin genel blok şeması.</figcaption></figure></div>",
            "architecture": "<h4>4.1. Devre Tasarımı</h4><p>Motor sürücünün çalışma aralığı nominal 2 kW olarak belirlendiği için sistem 48 V nominal besleme gerilimi ve 40 A sürekli çalışma akımı esas alınarak tasarlandı. Kalkış, ani yüklenme ve geçici rejimlerde oluşabilecek akım artışları dikkate alınarak güç devresinin anlık 100 A seviyesine dayanabilecek güvenlik payıyla tasarlanması hedeflendi.</p><h4>Güç Kartı ve Topoloji Seçimi</h4><p>Güç katında üç fazlı yarım köprü evirici topolojisi kullanıldı. Bu yapı, BLDC motorun A, B ve C fazlarının bağımsız sürülmesine imkan verir. Her fazda üst ve alt kolda MOSFET anahtarları yer alır; bu sayede motor fazlarına simetrik ve senkronize enerji iletimi sağlanır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/topoloji.png' alt='Üç fazlı yarım köprü topolojisi'><figcaption>Şekil 2. Güç kartında kullanılan üç fazlı yarım köprü evirici topolojisi.</figcaption></figure></div><h4>Anahtarlama Elemanı</h4><p>Anahtarlama elemanı olarak FDB0260N1007L N-kanal MOSFET tercih edildi. Bu MOSFET; 100 V üst çalışma gerilimi, 260 A maksimum akım kapasitesi, düşük iletim direnci ve D2PAK-7 yüzey montaj paketiyle yüksek güçlü motor sürücü uygulamaları için uygundur. Her anahtarlama pozisyonunda iki MOSFET paralel kullanılarak akım taşıma kapasitesi artırıldı ve termal yük paylaştırıldı.</p><p>MOSFET seçiminde düşük Crss değeri ve düşük Crss/Ciss oranı özellikle dikkate alındı. Böylece önceki tasarımlarda görülen Miller etkisi kaynaklı yanlış tetiklenme davranışlarının azaltılması hedeflendi.</p><h4>MOSFET Sürücü ve Gate Yapısı</h4><p>MOSFET sürücü entegresi olarak UCC21520DWR seçildi. Entegre, izole high-side ve low-side çıkışları, yüksek kaynak/emme akımı kapasitesi ve programlanabilir ölü zaman özelliğiyle yarım köprü sürücü yapısı için uygundur.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/kapi-surucu.png' alt='UCC21520DWR gate sürücü şematiği'><figcaption>Şekil 3. UCC21520DWR tabanlı MOSFET gate sürücü devresi.</figcaption></figure></div><p>High-side MOSFET’in doğru anahtarlanabilmesi için bootstrap beslemesi ve izole DC-DC destekli sürüş altyapısı değerlendirildi. İki paralel MOSFET için toplam gate yükü 168 nC olarak alınmış, sürücü entegresinin çevrim başına tüketimi de hesaba katılarak minimum bootstrap kapasitörü yaklaşık 366 nF olarak bulunmuştur. Pratik tasarımda 4.7 uF / 50 V / X7R seramik kapasitör kullanıldı.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/r1se0512.png' alt='İzole DC-DC dönüştürücü sürücü beslemesi'><figcaption>Şekil 4. Gate sürücü beslemesi için kullanılan izole DC-DC dönüştürücü yapısı.</figcaption></figure></div><h4>DC Bara, Kuplaj ve Akım Ölçümü</h4><p>DC bara, batarya ile anahtarlama elemanları arasında yer alarak yüksek frekanslı akım ripple’larını sönümlemek, gerilim dalgalanmalarını azaltmak ve dv/dt ile di/dt kaynaklı parazitik etkileri sınırlamak için tasarlandı. Güç kartında 9 adet 470 uF / 100 V kapasitör kullanılarak toplam 4230 uF bulk kapasitans elde edildi.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/kuplaj-kapasitorleri.png' alt='MOSFET kuplaj kapasitörleri'><figcaption>Şekil 5. MOSFET drain-source hattına yakın konumlandırılan kuplaj kapasitörleri.</figcaption></figure></div><p>Önceki tasarımda shunt direnç ve Kelvin bağlantısı kaynaklı ölçüm/iz yolu problemleri yaşandığı için Vol.2 tasarımında Hall etkisi tabanlı ACS758 akım sensörü kullanıldı. Bu yaklaşım temassız ve izolasyonlu ölçüm sağladığı için yüksek akım yollarında güvenilirliği artırır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/akim-sensoru.png' alt='ACS758 akım sensörü devresi'><figcaption>Şekil 6. Hall etkisi tabanlı ACS758 akım sensörü bağlantısı.</figcaption></figure></div><h4>Kontrol, Haberleşme ve Regülasyon</h4><p>Kontrol kartı STM32F446RET6 mikrodenetleyicisi etrafında oluşturuldu. Kart; Hall sensörü konum bilgisini, akım sensörü verisini, gerilim bilgilerini ve sürücü durumlarını okuyarak 6 adım trapezoidal komutasyon için PWM sinyallerini üretir. CAN ve RS485 modülleri, araç içi haberleşme ve test altyapısı için sisteme dahil edilmiştir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/kontrol-karti.png' alt='STM32 kontrol kartı şematiği'><figcaption>Şekil 7. STM32F446RET6 tabanlı kontrol kartı şematiği.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/can-modulu.png' alt='CAN haberleşme modülü'><figcaption>Şekil 8. Araç içi haberleşme için kullanılan CAN modülü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/rs485-modulu.png' alt='RS485 haberleşme modülü'><figcaption>Şekil 9. Test ve haberleşme altyapısını destekleyen RS485 modülü.</figcaption></figure></div><p>Regülatör kartı, batarya geriliminden kontrol ve sürüş devrelerinin ihtiyaç duyduğu düşük gerilim seviyelerini üretmek için ayrı bir modül olarak tasarlandı. Bu modülerlik, güç kartından gelebilecek elektriksel ve termal etkilerin kontrol elektroniği üzerindeki etkisini azaltır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/regulator-karti.png' alt='Regülatör kartı şematiği'><figcaption>Şekil 10. Vol.2 sürücü sisteminde kullanılan regülatör kartı.</figcaption></figure></div>",
            "subsystems": [],
            "analysis": "<h4>4.3. Simülasyon Çalışmaları</h4><p>Vol.2 tasarımında sürücü davranışı MATLAB/Simulink ve PSpice ortamları birlikte kullanılarak test edildi. MATLAB tarafında motor parametreleri, komutasyon mantığı ve S-fonksiyon tabanlı sürücü algoritması modellenirken; PSpice tarafında MOSFET sürücü devresi, akım/voltaj okuma ve anahtarlama kayıpları incelendi.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/matlab-pspice-cosim.png' alt='MATLAB ve PSpice ortak simülasyon yapısı'><figcaption>Şekil 11. MATLAB-PSpice ortak simülasyon altyapısı.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/komutasyon-modeli.png' alt='6 adım komutasyon modeli'><figcaption>Şekil 12. 6 adım trapezoidal komutasyon modelinin simülasyon yapısı.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/mosfet-surucu-devresi.png' alt='MOSFET sürücü simülasyonu'><figcaption>Şekil 13. MOSFET sürücü devresinin PSpice simülasyonu.</figcaption></figure></div><p>Akım ve voltaj okuma simülasyonları, sensör çıktılarının kontrol kartına doğru şekilde taşınmasını ve koruma algoritmalarının güvenilir veriyle çalışmasını hedefledi. Anahtarlama kaybı çalışmaları ise MOSFET iletim ve geçiş kayıplarının ısıl davranışa etkisini değerlendirmek için kullanıldı.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/akim-voltaj-okuma.png' alt='Akım ve voltaj okuma simülasyonu'><figcaption>Şekil 14. Akım ve voltaj okuma hattının simülasyon çıktısı.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/anahtarlama-kaybi.png' alt='Anahtarlama kaybı simülasyonu'><figcaption>Şekil 15. Anahtarlama kaybı hesabı için kullanılan simülasyon çıktısı.</figcaption></figure></div><h4>4.3.1. Simülasyon Sonuçlarının Yorumu</h4><p>Simülasyon sonuçları, Vol.2 sürücü kartında gate sürüş hattının yalnızca çalışıp çalışmadığını görmek için değil; anahtarlama kenarlarının ne kadar kontrollü oluştuğunu, bootstrap beslemesinin high-side MOSFET’i kararlı şekilde sürebildiğini ve seçilen frekans değerlerinde gate geriliminin güvenli seviyede kalıp kalmadığını doğrulamak için kullanıldı. Bu nedenle sonuçlar; gate direnci, bootstrap direnci, bootstrap diyodu, gate-source kapasitesi, pull-down direnci ve 25 kHz / 50 kHz anahtarlama frekansı gibi değişkenler üzerinden karşılaştırmalı olarak okundu.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/sim-sonuc-bootstrap-5ohm-gate.png' alt='Bootstrap direnci ile gate pini gerilimi'><figcaption>Şekil 16. Bootstrap direnciyle elde edilen gate pini gerilimi.</figcaption></figure></div><p>Bootstrap hattındaki direnç denemeleri, high-side sürücünün kapı gerilimini yeterli seviyeye çıkarırken ani akım darbelerini de kontrol altında tutmayı hedefledi. 5 ohm bootstrap direnciyle yapılan denemede gate sinyalinin yaklaşık 12 V seviyesine oturduğu ve tekrarlı anahtarlamada formunu koruduğu görüldü. Bu çıktı, bootstrap kondansatörünün şarj davranışının gate sürüş gereksinimini karşılayabildiğini ve sürücü entegresinin high-side anahtarı güvenli şekilde açıp kapatabildiğini gösterdi.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/sim-sonuc-bootstrap-5ohm-current.png' alt='Bootstrap direnci ile bootstrap akımı'><figcaption>Şekil 17. Bootstrap direnci altında bootstrap akımının incelenmesi.</figcaption></figure></div><p>Bootstrap akımı tarafında yapılan ölçüm, seçilen direnç değerinin yalnızca gate gerilimine değil, sürücü besleme hattındaki ani yüklenmeye de etkisini gösterdi. Dirençsiz durumda daha sert akım geçişleri oluşabilirken, seri direnç kullanımı bootstrap diyodu ve kondansatör üzerindeki zorlanmayı azaltan daha kontrollü bir şarj profili sağlar. Bu nedenle simülasyon sonuçları, bootstrap hattının korunması ve tekrarlı PWM altında kararlı kalması için seri direnç kullanımını destekleyen bir doğrulama adımı olarak değerlendirildi.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/sim-sonuc-gate-diode-10k.png' alt='Gate diyodu ve pull-down direnci simülasyonu'><figcaption>Şekil 18. Gate diyodu ve 10 kOhm pull-down direnciyle gate gerilimi.</figcaption></figure></div><p>Gate diyodu ve pull-down direnci denemeleri, MOSFET’in kapanma davranışını iyileştirmek için yapıldı. Gate üzerinde kalan yükün hızlı ve kontrollü boşaltılması, shoot-through riskini azaltır ve alt-üst MOSFET çiftlerinde ölü zamanın daha anlamlı çalışmasına yardım eder. 10 kOhm pull-down direnciyle birlikte gate diyodu kullanımı, gate’in pasif durumda kararsız kalmasını önleyen ve anahtarlama sonrası kapı gerilimini güvenli seviyeye çeken bir yapı olarak yorumlandı.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/sim-sonuc-gate-source-10n.png' alt='Gate-source kapasitesi simülasyonu'><figcaption>Şekil 19. 10 nF gate-source kapasitesi ile anahtarlama geçişi.</figcaption></figure></div><p>Gate-source kapasitesi denemelerinde amaç, gate sinyalindeki ani sıçramaları ve parazitik salınımları bastırmaktı. Kapasite eklenmediğinde gate hattı daha keskin ve gürültüye açık davranırken, 10 nF seviyesindeki kapasite anahtarlama kenarını yumuşatarak daha okunabilir bir geçiş karakteri sağladı. Bu tercih, hızlı anahtarlamanın getirdiği kayıp artışı ile EMI ve güvenilirlik ihtiyacı arasında dengeli bir nokta arayışının parçası olarak ele alındı.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/sim-sonuc-25khz-10ohm.png' alt='25 kHz 10 ohm gate direnci simülasyon sonucu'><figcaption>Şekil 20. 25 kHz anahtarlamada 10 ohm gate direnci sonucu.</figcaption></figure></div><p>25 kHz anahtarlama frekansında 10 ohm gate direnciyle elde edilen sonuç, gate geriliminin sürüş seviyesine daha kontrollü yükseldiğini ve PWM çevrimi içerisinde yeterli süre kararlı kaldığını gösterdi. Bu test, motor kontrolünde seçilecek gate direncinin anahtarlama hızını, MOSFET kayıplarını ve gate hattındaki salınım miktarını doğrudan etkilediğini gösteren temel karşılaştırmalardan biri oldu.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/sim-sonuc-50khz-10ohm.png' alt='50 kHz 10 ohm gate direnci simülasyon sonucu'><figcaption>Şekil 21. 50 kHz anahtarlamada 10 ohm gate direnci sonucu.</figcaption></figure></div><p>50 kHz denemesi, aynı gate sürüş kararlarının daha yüksek frekansta nasıl davrandığını görmek için kullanıldı. Frekans yükseldiğinde anahtarlama periyodu kısaldığı için gate’in tam açılma-kapanma aralığı daha kritik hale gelir; bu da sürücü kayıpları, ısıl yük ve sinyal kararlılığı açısından daha zorlayıcı bir senaryo oluşturur. Sonuçlar, 25 kHz ve 50 kHz bölgelerinde gate direnci ve yardımcı eleman seçimlerinin birlikte ele alınması gerektiğini; Vol.2 kartında yalnızca şematik doğruluğun değil, gerçek anahtarlama davranışının da tasarım girdisi olarak kullanıldığını ortaya koydu.</p><p>Bu simülasyon setinin genel çıktısı, Vol.2 sürücü mimarisinde gate sürüşünün ayrı bir optimizasyon problemi olarak ele alınması gerektiğidir. Bootstrap hattı high-side sürüş sürekliliği için, gate diyodu ve pull-down direnci güvenli kapanma için, gate-source kapasitesi ise parazitik salınımları azaltmak için değerlendirilmiştir. Böylece kart tasarımı; verim, EMI, koruma ve termal güvenilirlik arasında dengelenmiş daha uygulanabilir bir BLDC sürücü platformuna taşınmıştır.</p><h4>4.4. PCB Tasarımı ve Üretim Verileri</h4><p>PCB tasarımında Altium Designer kullanıldı. Vol.2 kart mimarisi, önceki iki katlı yaklaşımdan farklı olarak dört katmanlı FR4 PCB yapısına taşındı. Bu tercih; güç yollarının, hassas sinyal hatlarının ve toprak düzleminin daha kontrollü yerleşmesini sağladı. Böylece EMI seviyesi azaltıldı, akım dağılımı iyileştirildi ve kartın termal davranışı daha dengeli hale getirildi.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/3d-bldc-on.png' alt='Güç kartı 3D ön görünüm'><figcaption>Şekil 22. Güç kartının Altium Designer 3D ön görünümü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/3d-bldc-arka.png' alt='Güç kartı 3D arka görünüm'><figcaption>Şekil 23. Güç kartının Altium Designer 3D arka görünümü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/2d-bldc.png' alt='Güç kartı 2D PCB görünümü'><figcaption>Şekil 24. Güç kartının 2D PCB yerleşim görünümü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/3d-kontrolcu-on.png' alt='Kontrolcü kartı 3D ön görünüm'><figcaption>Şekil 25. Kontrolcü kartının 3D ön görünümü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/3d-regulator-on.png' alt='Regülatör kartı 3D görünüm'><figcaption>Şekil 26. Regülatör kartının 3D görünümü.</figcaption></figure></div><h4>4.5. Üretim ve Test Süreci</h4><p>Üretim dosyaları Gerber, NC Drill, BOM ve Pick & Place çıktıları olarak hazırlandı. Lehimleme öncesinde boş PCB’ler görsel olarak kontrol edildi; kırık yol, kısa devre izi, pad hizasızlığı ve üretim hatası olup olmadığı incelendi.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/pcb-bldc-on.jpg' alt='Güç kartı boş PCB ön yüz'><figcaption>Şekil 27. Güç kartı boş PCB ön yüzü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/pcb-bldc-arka.jpg' alt='Güç kartı boş PCB arka yüz'><figcaption>Şekil 28. Güç kartı boş PCB arka yüzü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/pcb-kontrolcu-on.jpg' alt='Kontrolcü kartı boş PCB ön yüz'><figcaption>Şekil 29. Kontrolcü kartı boş PCB ön yüzü.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/lehimleme-1.jpg' alt='Vol.2 kart lehimleme süreci'><figcaption>Şekil 30. Vol.2 kartların lehimleme ve montaj süreci.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/lehimleme-3.jpg' alt='Lehimlenmiş Vol.2 sürücü kartı'><figcaption>Şekil 31. Lehimleme sonrası Vol.2 sürücü kartı.</figcaption></figure></div><p>Deneme kartı üzerinde gate sinyalleri ve ripple davranışı incelendi. Bu testler, gerçek kartta karşılaşılabilecek anahtarlama kararsızlıklarını erken aşamada görmek ve gate sürüş kararlarını doğrulamak için kullanıldı.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/deneme-gate.jpg' alt='Deneme kartı gate sinyali testi'><figcaption>Şekil 32. Deneme kartı üzerinde gate sinyali testi.</figcaption></figure></div><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='vol2/deneme-ripple.jpg' alt='Deneme kartı ripple testi'><figcaption>Şekil 33. Deneme kartı üzerinde ripple gözlemi.</figcaption></figure></div><h4>4.6. Verimlilik ve Koruma</h4><p>Verimlilik hesabında MOSFET iletim kaybı, anahtarlama kaybı, Coss kaybı, DC bara kapasitör kayıpları, izole DC-DC dönüştürücü kayıpları ve MLCC kapasitör kayıpları birlikte değerlendirildi. 2 kW çıkış gücü için teorik verim yaklaşık %97.15 olarak yorumlandı.</p><p>Koruma tarafında UCC21520’nin programlanabilir dead-time özelliğiyle shoot-through riski azaltıldı. UVLO özelliği, sürücü beslemesi eşik altına düştüğünde çıkışların pasif kalmasını sağlar. ACS758 akım sensörü üzerinden alınan ölçümlerle, herhangi bir fazda akımın belirlenen eşiği aşması durumunda sürücünün güvenli moda alınması hedeflendi.</p><h4>4.7. Optimizasyon ve Tasarım Denemeleri</h4><p>Vol.2 geliştirme sürecinde tasarım klasöründe tutulan denemeler, kartın tek bir çizim kararıyla değil; güç kartı, kontrol birimi ve regülatör kartı arasında yapılan mimari ayrıştırmalarla olgunlaştığını gösterir. BLDC_2024 arşivi yüksek akım taşıyan ana güç kartı denemelerini, BLDC_2024_STM_UNIT arşivi STM32 tabanlı kontrol biriminin ayrı modül olarak ele alınmasını, Regulator arşivi ise sürücü ve kontrol elektroniğinin besleme kararlılığını sağlamak için yapılan regülasyon çalışmalarını temsil eder.</p><p>Bu ayrıştırma, optimizasyonun yalnızca verim hesabı üzerinden yapılmadığını; üretilebilirlik, test edilebilirlik, arıza izolasyonu, gürültü bağışıklığı ve termal yönetim gibi pratik mühendislik ölçütleriyle birlikte yürütüldüğünü gösterir. Güç yollarının kontrol sinyallerinden ayrılması, regülatörün ayrı bir kart olarak ele alınması ve kontrol kartının bağımsız test edilebilir hale getirilmesi; Vol.2 mimarisini yarışma ve saha koşullarına daha uygun, müdahale edilebilir ve geliştirilebilir bir platforma dönüştürdü.</p><h4>4.10. Vol.1 - Vol.2 Karşılaştırması</h4><div class='hud-table-wrap bldc-output-table'><table class='hud-benchmark-table'><thead><tr><th>Özellik</th><th>Vol.1</th><th>Vol.2</th></tr></thead><tbody><tr><td>Anahtar</td><td>IXTH200N10T</td><td>FDB0260N1007L</td></tr><tr><td>Sürücü Entegresi</td><td>IRS21867S</td><td>UCC21520DW</td></tr><tr><td>Kontrolcü</td><td>STM32F446RET6</td><td>STM32F446RET6</td></tr><tr><td>Kontrol Algoritması</td><td>6 adım trapezoidal</td><td>6 adım trapezoidal</td></tr><tr><td>Koruma</td><td>80 A sigorta</td><td>UVLO, galvanik izolasyon, shoot-through koruması, 60 A sigorta</td></tr><tr><td>PCB</td><td>2 katlı FR4</td><td>4 katlı FR4</td></tr><tr><td>Boyut</td><td>200 x 150 mm PCB</td><td>250 x 140 mm güç PCB, 80 x 37 mm kontrolcü PCB, 50 x 50 mm regülatör PCB</td></tr><tr><td>Güç</td><td>2.5 kW / 48 V / 50 A</td><td>2 kW / 48 V / 42 A</td></tr><tr><td>Verim</td><td>%90</td><td>%97.15</td></tr></tbody></table></div>",
            "achievements": "<p>Vol.2 projesi sonunda Hidroana aracı için daha modüler, daha güvenilir ve üretilebilirliği daha yüksek bir motor sürücü altyapısı ortaya çıkarıldı. Güç kartı, kontrol kartı ve regülatör kartının ayrılması; hem test edilebilirliği hem de arıza durumunda müdahale edilebilirliği artırdı.</p><p>Bu çalışma, Vol.1’den gelen deneyimi doğrudan Vol.2 mimarisine taşıdı: shunt yerine Hall etkili akım sensörü kullanılması, 4 katlı PCB’ye geçilmesi, ground-loop mesafesinin kısaltılması, UCC21520 tabanlı izole gate sürüşü, UVLO ve shoot-through korumalarının eklenmesi kartı yarışma şartlarına daha uygun hale getirdi.</p><div class='project-output-access'><div><span class='visual-kicker'>// BILL_OF_MATERIAL</span><strong>BOM Listesi</strong><p>Güç kartı, kontrol kartı ve regülatör kartı için hazırlanan malzeme listeleri ve ilgili bileşen dokümanları erişilebilir hale getirildi.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%20Vol2%20%C3%87%C4%B1kt%C4%B1lar/BOM%20Listesi' target='_blank' rel='noopener noreferrer'>BOM Listesine Git<i data-lucide='external-link'></i></a></div><div class='project-output-access'><div><span class='visual-kicker'>// RESEARCH_ARCHIVE</span><strong>Literatür</strong><p>Gate driver, MOSFET, akım ölçümü, DC-link, EMI, termal analiz, snubber ve yerleşim kararlarında kullanılan teknik kaynaklar arşivlendi.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%20Vol2%20%C3%87%C4%B1kt%C4%B1lar/Literat%C3%BCr' target='_blank' rel='noopener noreferrer'>Literatüre Git<i data-lucide='external-link'></i></a></div><div class='project-output-access'><div><span class='visual-kicker'>// DESIGN_FILES</span><strong>Tasarım Dosyaları</strong><p>Vol.2 kart tasarımı için erişilebilir tasarım arşivi eklendi. GitHub tekil dosya sınırını aşan büyük arşivler için klasörde bilgilendirme notu bulunur.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%20Vol2%20%C3%87%C4%B1kt%C4%B1lar/Tasar%C4%B1m' target='_blank' rel='noopener noreferrer'>Tasarım Dosyalarına Git<i data-lucide='external-link'></i></a></div><div class='project-output-access'><div><span class='visual-kicker'>// SIMULATION_FILES</span><strong>Simülasyon Dosyaları</strong><p>MATLAB/Simulink ve PSpice ortamlarında kullanılan temiz simülasyon kaynakları erişilebilir hale getirildi.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%20Vol2%20%C3%87%C4%B1kt%C4%B1lar/Simulasyon' target='_blank' rel='noopener noreferrer'>Simülasyon Dosyalarına Git<i data-lucide='external-link'></i></a></div><div class='project-output-access'><div><span class='visual-kicker'>// ALGORITHM_FILES</span><strong>Algoritma Dosyaları</strong><p>STM32 tabanlı motor kontrol yazılımı ve sürücü algoritması proje çıktısı olarak arşivlendi.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%20Vol2%20%C3%87%C4%B1kt%C4%B1lar/Algoritma' target='_blank' rel='noopener noreferrer'>Algoritma Dosyalarına Git<i data-lucide='external-link'></i></a></div><div class='project-output-access'><div><span class='visual-kicker'>// MOTOR_PARAMETERS</span><strong>Motor Parametreleri</strong><p>BLDC sürücünün MATLAB/Simulink ve PSpice modellemelerinde kullanılan motor tasarım verileri burada tutulur. Dosyada 2.5 kW / 51 V hedef motor, 52 kutuplu dış rotorlu yapı, stator-rotor ölçüleri, sargı düzeni, faz direnci, endüktanslar, tork sabiti, geri EMK sabiti, kayıp ve verim değerleri gibi sürücü tasarımına doğrudan girdi olan parametreler yer alır.</p></div><a class='project-output-link' href='https://github.com/AhmetSoner/Portfolio/tree/main/Kartlar/BLDC%20S%C3%BCr%C3%BCc%C3%BC%20Vol2%20%C3%87%C4%B1kt%C4%B1lar/Motor%20Parametreleri' target='_blank' rel='noopener noreferrer'>Motor Parametrelerine Git<i data-lucide='external-link'></i></a></div>"
      },
      {
            "id": "project-4",
          "pdfFile": "bird-strike/bird-strike-project-paper.pdf",
          "pdfTitle": "Havaalanları İçin Derin Öğrenme Tabanlı Kuş Tespit ve İkaz Sistemi Raporu (PDF)",
            "title": "Havaalanları İçin Derin Öğrenme Tabanlı Kuş Tespit Sistemi (TÜBİTAK 2209-A)",
            "category": "havacilik-ai",
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
            "architecture": "<p>Sistem mimarisi veri toplama, veri temizleme, etiketleme, veri artırma, YOLOv8 formatına dışa aktarım, model eğitimi, çıkarım testi ve sonuç değerlendirme adımlarından oluşur. Proje önerisinde İstanbul Havalimanı çevresinde görülen kuş türleri, İGA çevre/sürdürülebilirlik çalışmaları, FAA Wildlife Strike verileri ve açık veri kaynakları dikkate alınarak öncelikli tür skalasının belirlenmesi hedeflenmiştir. Tez uygulamasında seçilen kuş türleri Martı (Seagull), Leylek (Stork), Kartal (Eagle), Doğan (Falcon), Güvercin (Pigeon), Baykuş (Owl) ve Karga (Crow) olarak belirlenmiştir.</p><p>Veri seti Roboflow üzerinde oluşturulmuştur. Bird_Detection adlı object detection projesine her tür için yaklaşık 200 görsel yüklenmiş, görseller tür bazında organize edilmiş ve her kuş nesnesi bounding box ile etiketlenmiştir. Etiketleme sürecinde doğru sınıf ataması, nesne sınırlarının net çizilmesi ve görseldeki tüm hedef kuşların işaretlenmesi temel kalite kriterleri olarak kullanılmıştır. Hatalı etiketlenmiş verilerin modelin yanlış pozitif ve yanlış negatif oranını artırabileceği dikkate alınarak veri temizliği ve etiket tutarlılığı özellikle önemsenmiştir.</p><p>Veri setinin saha koşullarına daha dayanıklı hale gelmesi için augmentation uygulanmıştır. Görseller saat yönünde ve ters yönde 90 derece döndürülmüş, ayrıca -15 ile +15 derece arasında rastgele döndürme yapılmıştır. Parlaklık değerleri yüzde 25 artırılıp azaltılarak farklı ışık koşulları temsil edilmiş, 1.25 kata kadar blur uygulanarak düşük kaliteli veya bulanık kamera görüntüleri simüle edilmiş, görsellerin yüzde 5'ine kadar rastgele gürültü eklenerek sensör ve çevre kaynaklı bozulmalara karşı dayanıklılık hedeflenmiştir.</p><p>İyileştirilen veri seti Roboflow üzerinden YOLOv8 PyTorch formatında dışa aktarılmıştır. Çıktı yapısı train, valid ve test dizinlerinden oluşmuş; veri seti yaklaşık yüzde 70 eğitim, yüzde 20 doğrulama ve yüzde 10 test olacak şekilde bölünmüştür. Bu yapı, modelin yalnızca eğitim verisini ezberlemesini değil, doğrulama ve test verilerinde de genelleme kabiliyetinin ölçülmesini sağlamıştır.</p><p>Model eğitimi Anaconda ortamında Ultralytics YOLOv8 ve PyTorch ekosistemiyle yürütülmüştür. Python 3.8 tabanlı ortam hazırlanmış, ultralytics paketi kurulmuş ve Roboflow tarafından üretilen data.yaml dosyası üzerinden eğitim başlatılmıştır. Kullanılan model önceden eğitilmiş yolov8n.pt nano modelidir; eğitim 100 epoch ve 640x640 giriş görüntü boyutu mantığıyla kurgulanmıştır. Eğitim sırasında epoch, loss, mAP ve süre değerleri izlenmiş; sonuçlar YOLO eğitim çıktıları üzerinden değerlendirilmiştir.</p><p>Eğitim tamamlandıktan sonra model inference aşamasında test görselleri üzerinde denenmiştir. Tezde örnek çıktılar olarak leylek için 0.95, martı için 0.89, karga için 0.80 ve doğan için 0.86 güven değerleriyle doğru tahminler raporlanmıştır. Bu örnekler, modelin farklı kuş türlerini ayırt edebildiğini ve havaalanı çevresinde erken ikaz sistemine girdi sağlayabilecek görsel tespit çıktıları üretebildiğini göstermiştir.</p><h4>Yapay Zeka ile Yaklaşım</h4><p>Tezde 2. bölümden itibaren proje, geleneksel kuş çarpması önleme yöntemlerinin yanına yapay zeka tabanlı bir görsel algılama katmanı ekleme fikri üzerinden ilerler. İnsan gözünün yorumlama, örüntü tanıma ve karar verme kabiliyetinden ilham alan yapay zeka yaklaşımı; görüntüdeki kuşu yalnızca fark etmekle kalmayıp türünü, konumunu ve potansiyel riskini yorumlayabilecek bir sistem altyapısı kurmayı hedefler. Bu nedenle model seçiminde gerçek zamanlı çalışma, küçük nesne tespiti, farklı kuş türlerini ayırabilme ve saha koşullarına uyum sağlama kriterleri öne çıkarılmıştır.</p><p>Radar sistemleri havaalanı çevresinde menzil ve hava koşullarına dayanıklılık açısından avantajlıdır; fakat tür ayrımı, renk/biçim bilgisi, tekil kuş davranışı ve görsel doğrulama konusunda sınırlı kalabilir. Görüntü tabanlı derin öğrenme yaklaşımı bu boşluğu tamamlamak için seçilmiştir. Kamera görüntüsü üzerinden çalışan YOLO mimarisi, sahnede birden fazla nesneyi tek geçişte bulabildiği için pist çevresi gibi hızlı karar gerektiren ortamlarda uygun bir aday olarak değerlendirilmiştir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='bird-detection-figures/fig-yolo-detection-overview.png' alt='YOLO kuş tespiti örneği'><figcaption>Şekil 2.1. YOLO ile kuş tespiti örneği.</figcaption></figure></div><p>Bu görsel, sistemin beklenen nihai davranışını temsil eder: model görüntüdeki kuşları sınırlayıcı kutularla işaretler ve her tespit için güven değeri üretir. Bu çıktı, havaalanı çevresindeki kuş hareketlerinin operatöre veya ileride otomatik ikaz sistemine aktarılabileceği karar verisi haline gelir. Tezde YOLO'nun tercih edilme nedeni de burada ortaya çıkar; model görüntüyü bölgelere ayırıp nesne konumu ve sınıf bilgisini birlikte ürettiği için kuş tespiti gibi hız-duyarlılık dengesinin önemli olduğu problemlerde kullanılabilir.</p><h4>CNN ve YOLO Mantığı</h4><p>Tezde CNN yapısı, görüntülerden otomatik özellik çıkarabilen katmanlı bir derin öğrenme mimarisi olarak açıklanır. Konvolüsyon katmanları kenar, doku, şekil ve parça ilişkilerini öğrenirken; pooling katmanları gereksiz ayrıntıyı azaltır ve modelin daha genel örüntülerle çalışmasını sağlar. Bu yapı kuş tespiti probleminde önemlidir; çünkü farklı kuş türleri renk, kanat formu, gövde oranı ve duruş bakımından birbirine benzeyebilir. Modelin yalnızca piksel ezberlemesi değil, kuşa ait ayırt edici görsel özellikleri öğrenmesi gerekir.</p><p>YOLO yaklaşımı bu CNN tabanlı özellik çıkarımını gerçek zamanlı nesne tespitiyle birleştirir. Görüntüyü tek seferde işler, hedef nesnenin sınıfını ve bounding box koordinatlarını aynı anda üretir. Bu nedenle iki aşamalı, daha yavaş tespit sistemlerine göre saha uygulamalarında daha pratik bir çözüm sunar. Tezde YOLOv8 ailesi içinde nano modelin seçilmesi, daha düşük hesaplama maliyeti ve hızlı çıkarım potansiyeli nedeniyle yapılmıştır; bu seçim havaalanı çevresinde ileride kamera veya gömülü donanım üzerinde çalışabilecek bir sistem fikriyle uyumludur.</p><h4>Roboflow Veri Hattı ve Etiketleme</h4><p>Veri seti oluşturma bölümünde Roboflow, görsellerin tek bir proje altında toplanması, sınıfların yönetilmesi, bounding box etiketlerinin hazırlanması ve YOLOv8 formatına dışa aktarım yapılması için kullanılmıştır. Bu araç, veri seti hazırlama sürecini yalnızca dosya toplama aşaması olmaktan çıkarıp izlenebilir bir makine öğrenmesi veri hattına dönüştürmüştür.</p><p>Veri hattında her görsel önce sınıf bilgisiyle düzenlenmiş, ardından kuş nesnesinin sınırları bounding box mantığıyla işaretlenmiştir. Bu aşama modelin hem konum hem de tür bilgisini öğrenmesini sağladığı için projenin en kritik kalite adımlarından biri olarak ele alınmıştır.</p><p>Veri seti farklı tür, açı, duruş ve arka plan koşullarını kapsayacak şekilde hazırlanmıştır. Augmentation adımında döndürme, parlaklık değişimi, bulanıklık ve gürültü ekleme gibi işlemler uygulanarak modelin yalnızca ideal görsellere değil, saha koşullarına daha yakın görüntülere de dayanıklı hale gelmesi hedeflenmiştir.</p><h4>YOLOv8 Eğitimi ve Çıkarım</h4><p>Veri seti Roboflow üzerinden YOLOv8 PyTorch formatında dışa aktarılmış, train/valid/test klasör yapısı ile eğitim sürecine hazır hale getirilmiştir. Eğitim ortamı Anaconda, Python, Ultralytics ve PyTorch üzerine kurulmuş; GPU desteği kullanılarak eğitim süresinin kısaltılması hedeflenmiştir. YOLOv8n modeli, önceden eğitilmiş ağırlıklar üzerinden başlatıldığı için sınırlı veriyle daha verimli öğrenme yapılmasına olanak sağlamıştır.</p><p>Bu aşamada modelin öğrenmesi yalnızca doğruluk metriğiyle değil; eğitim kayıpları, doğrulama başarımı ve inference çıktılarıyla takip edilmiştir. Eğitim tamamlandıktan sonra model test görselleri üzerinde çalıştırılmış ve farklı kuş türleri için güven değerleri üretilmiştir.</p><div class='project-figure-grid'><figure class='project-figure-card'><img src='bird-detection-figures/fig-falcon-inference.png' alt='Doğan tahmin sonucu'><figcaption>Şekil 2.8. Doğan sınıfı için 0.86 güven değerli tahmin.</figcaption></figure></div><p>Tahmin örnekleri, modelin yalnızca kuş varlığını değil, tür bilgisini de üretebildiğini göstermektedir. Kalan Doğan tahmin örneği, modelin farklı kuş formlarında tür bilgisini güven değeriyle birlikte üretebildiğini ve havaalanı kuş riski değerlendirmesinde kullanılabilecek bir temel sunduğunu gösterir. Bununla birlikte güven değerleri sınıflara göre değiştiği için operasyonel kullanımda alarm eşiğinin sabit değil, saha riskine göre ayarlanabilir olması gerekir.</p>",
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
            "analysis": "<p>Tezde model performansı karışıklık matrisi, precision-confidence eğrisi, recall-confidence eğrisi, precision-recall eğrisi, F1 eğrisi, etiket dağılımı ve genel eğitim sonuçları üzerinden değerlendirilmiştir. Karışıklık matrisi, modelin bazı türlerde güçlü ayrım yaptığını, bazı benzer türlerde ise karışma yaşadığını göstermiştir. Seagull sınıfında 99 örnek doğru sınıflandırılmış, 6 örnek Stork olarak karıştırılmıştır. Falcon sınıfında 29 doğru sınıflandırmaya karşılık 9 örnek Pigeon, 4 örnek Seagull olarak tahmin edilmiştir. Crow sınıfında 28 doğru tahmine karşılık yalnızca 1 yanlış sınıflandırma görülmüş, Pigeon sınıfında ise 34 doğru tahmin yanında Seagull ve Falcon ile karışmalar oluşmuştur.</p><p>Background sınıfında model yalnızca 7 örneği doğru tanımlayabilmiş ve bu sınıfta diğer kuş sınıflarıyla karışmalar yaşanmıştır. Bu sonuç, kuş tespit sistemlerinde yalnızca hedef tür görsellerinin değil, boş pist, gökyüzü, terminal çevresi, çim alan ve hareketli arka plan gibi negatif örneklerin de veri setinde güçlü şekilde temsil edilmesi gerektiğini göstermektedir. Havaalanı uygulamalarında yanlış pozitif ikazların operasyonu gereksiz meşgul etmemesi, yanlış negatiflerin ise gerçek kuş riskini kaçırmaması için bu denge kritik önemdedir.</p><p>Precision-confidence değerlendirmesinde modelin yüksek güven seviyelerinde çok isabetli sonuçlar verdiği görülmüştür. Tüm sınıfların ortalama eğrisi 0.973 güven seviyesinde yüzde 100 kesinliğe ulaşmıştır. Crow sınıfı yüksek güven değerlerinde güçlü performans göstermiş; Stork ve Owl sınıflarında düşük güven seviyelerinde daha zayıf kesinlik görülse de güven arttıkça belirgin iyileşme oluşmuştur. Bu sonuç, ikaz eşiğinin operasyonel senaryoya göre seçilmesi gerektiğini göstermektedir.</p><p>Recall-confidence değerlendirmesinde modelin düşük güven eşiklerinde pozitif örnekleri daha iyi yakaladığı, güven eşiği yükseldikçe recall değerinin düştüğü görülmüştür. Tüm sınıfların ortalaması için 0.97 recall seviyesi raporlanmıştır. Kuş çarpması gibi emniyet kritik bir problemde recall değerinin yüksek tutulması önemlidir; çünkü sistemin kuşu kaçırması, yanlış pozitif üretmesinden daha riskli sonuçlar doğurabilir.</p><p>Precision-recall grafiğinde Crow için 0.931, Eagle için 0.919 ve Owl için 0.945 gibi yüksek ortalama precision değerleri elde edilmiştir. Pigeon sınıfında 0.727 değeriyle daha düşük performans gözlenmiştir. Tüm sınıflar için ortalama precision-recall değeri 0.875 olarak verilmiştir. Bu değer, modelin genel olarak türleri kapsama ve doğru sınıflandırma konusunda başarılı bir temel sunduğunu; ancak türler arası benzerlik ve veri dengesizliği nedeniyle bazı sınıflarda iyileştirme gerektiğini göstermektedir.</p><p>F1 eğrisinde maksimum F1 skoru 0.78 seviyesine ulaşmış ve optimum güven eşiği yaklaşık 0.449 olarak yorumlanmıştır. Bu nokta, precision ve recall arasında en dengeli çalışma bölgesini temsil eder. Crow, Eagle ve Falcon gibi sınıflarda F1 eğrilerinin daha güçlü ve tutarlı olması, modelin bazı sınıflarda oldukça kararlı çalışabildiğini göstermiştir. Eşik optimizasyonu, havaalanı ikaz sisteminin hassasiyetini operasyonel ihtiyaca göre ayarlamak için önemli bir araçtır.</p><p>Genel eğitim sonuçlarında train/box_loss yaklaşık 1.4 seviyesinden 0.8 seviyesine düşmüş, train/cls_loss yaklaşık 3.5 seviyesinden 1'in altına inmiş, train/dfl_loss ise 1.7 seviyesinden yaklaşık 1.1 seviyesine gerilemiştir. Doğrulama kayıplarında eğitim kayıplarına paralel düşüş görülmesi, modelin yalnızca eğitim verisini ezberlemediğini ve doğrulama setinde de benzer performans gösterebildiğini düşündürmektedir. Precision değeri eğitim başında yaklaşık 0.3 iken son iterasyonlarda 0.8'in üzerine çıkmış, recall yaklaşık 0.3 seviyesinden 0.75 seviyesine ilerlemiştir. mAP50 yaklaşık 0.85'e, daha zorlu mAP50-95 metriği ise yaklaşık 0.60 seviyesine ulaşmıştır.</p><p>Sonuç olarak tez, geleneksel kuş çarpması önleme yaklaşımlarına ek olarak görüntü analizi ve yapay zeka tabanlı yeni bir yaklaşımın uygulanabilir olduğunu göstermiştir. YOLO mimarisi hedef nesneleri tespit etmekte başarılı sonuçlar üretmiş; daha iyi kamera sistemleri, daha büyük ve dengeli veri setleri, radar mesafe bilgisi ve eşik optimizasyonu ile bu yapının daha hafif, daha ucuz, daha az enerji tüketen ve bakım/işletme açısından verimli bir havaalanı kuş ikaz sistemine dönüşebileceği ortaya konmuştur.</p><div class='project-figure-grid'><figure class='project-figure-card'><img src='bird-detection-figures/fig-confusion-matrix.png' alt='YOLOv8 karışıklık matrisi'><figcaption>Şekil 4.1. Modelin sınıf bazlı karışıklık matrisi.</figcaption></figure><figure class='project-figure-card'><img src='bird-detection-figures/fig-precision-confidence.png' alt='Precision-confidence eğrisi'><figcaption>Şekil 4.2. Güven eşiğine göre kesinlik değişimi.</figcaption></figure><figure class='project-figure-card'><img src='bird-detection-figures/fig-recall-confidence.png' alt='Recall-confidence eğrisi'><figcaption>Şekil 4.3. Güven eşiğine göre duyarlılık değişimi.</figcaption></figure></div><p>Bu görseller sonuçların yalnızca tek bir başarı yüzdesinden ibaret olmadığını gösterir. Karışıklık matrisi hangi türlerin güçlü ayrıldığını, hangi türlerin birbirine karıştığını ortaya koyar. Precision-confidence eğrisi güven eşiği yükseldikçe modelin daha seçici hale geldiğini; recall-confidence eğrisi ise eşik yükseldikçe bazı gerçek kuşların kaçırılabileceğini gösterir. Havaalanı uygulamalarında bu denge önemlidir: düşük eşik daha fazla uyarı üretirken kuş kaçırma riskini azaltır, yüksek eşik yanlış alarmı azaltırken bazı hedefleri kaçırabilir.</p><div class='project-figure-grid'><figure class='project-figure-card'><img src='bird-detection-figures/fig-pr-curve.png' alt='Precision-recall eğrisi'><figcaption>Şekil 4.4. Precision-recall eğrisi.</figcaption></figure><figure class='project-figure-card'><img src='bird-detection-figures/fig-f1-curve.png' alt='F1 eğrisi'><figcaption>Şekil 4.5. F1-confidence eğrisi.</figcaption></figure></div><p>PR eğrisi modelin farklı sınıflarda kesinlik ve duyarlılık dengesini nasıl kurduğunu özetlerken, F1 eğrisi bu iki metriğin ortak dengesini verir. Tez sonuçlarında maksimum F1 değerinin yaklaşık 0.78 seviyesine ulaşması, modelin kuş türleri arasında anlamlı bir sınıflandırma kabiliyeti kazandığını gösterir. Eğitim sürecinde kutu kaybı, sınıflandırma kaybı ve DFL kaybının düşmesi; precision, recall ve mAP değerlerinin ise yükselmesi, modelin düzenli biçimde iyileştiğini destekler.</p>",
            "achievements": "<p>Proje, TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği kapsamında desteklenmiş ve 1919B012323737 proje numarasıyla yürütülmüştür. Proje önerisi aşamasında veri seti hazırlama, veri ön işleme, model eğitimi, optimizasyon/hiperparametre çalışmaları ve test iş paketleri tanımlanmış; tez aşamasında bu yapı YOLOv8n tabanlı uygulanabilir bir tespit modeline dönüştürülmüştür.</p><p>Çalışma, havacılık güvenliği alanında görüntü tabanlı yapay zeka sistemlerinin radar tabanlı erken uyarı yaklaşımlarını nasıl tamamlayabileceğini göstermiştir. Kişisel katkı açısından proje; veri hattı oluşturma, derin öğrenme modeli eğitme, performans metriklerini yorumlama ve havacılık emniyeti problemine mühendislik perspektifiyle yaklaşma deneyimi kazandırmıştır.</p>"
      },
      {
          "id": "project-5",
          "title": "INFLOBOT: Yapay Zeka Destekli Şişirilebilir Yumuşak MRO Robotu",
          "category": "robotik",
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
          "architecture": "<h4>Yakıt Tankı Yapısı ve Mevcut Bakım Yöntemi</h4><p>Uçakta ana yakıt tankı 1, ana yakıt tankı 2, merkez yakıt tankı ve dalgalanma tankı gibi farklı tank bölgeleri bulunur. Ana yakıt tankları kanat kutusu içinde, merkez tank gövde ve kanat kökü çevresinde, dalgalanma tankı ise aşırı basınç değişimlerine karşı koruyucu bir hacim olarak yer alır. Ana tanklara kanat altındaki erişim panellerinden, merkez tanka ise gövde içinden girilir. Erişim panelleri kelepçe yüzükle sabitlenir; alüminyum conta hem sızdırmazlık hem de elektrostatik bağ sağlar. Kanat nervürleri tankı bölmelere ayırır ve nervürlerdeki cut-out noktaları bitişik hacimler arasında geçiş imkanı verir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim4.png' alt='Uçak yakıt tankları yerleşimi'><figcaption>Şekil 1. Uçak yakıt tankları, yakıt hatları ve kanat içi tank bölgeleri.</figcaption></figure></div><p>Bu şema, yakıt tanklarının yalnızca tek bir kapalı hacim olmadığını; kanat içi ana tanklar, merkez tank ve dalgalanma tankı gibi farklı görevleri olan bölgelere ayrıldığını gösterir. INFLOBOT fikrinde bu yapı kritik önemdedir, çünkü robotun erişmesi gereken bölgeler nervürler, geçiş boşlukları ve daralan kanat geometrisi nedeniyle insan hareketi için kısıtlı alanlar oluşturur.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim3.png' alt='Yakıt tankı nervür ve cut-out yapısı'><figcaption>Şekil 2. Yakıt tankı içinde nervürler, cut-out geçişleri ve yakıt giriş/çıkış bölgeleri.</figcaption></figure></div><p>Nervürler tankı bölmelere ayırırken cut-out açıklıkları bakım personelinin ve muayene ekipmanlarının geçiş noktalarını belirler. Bu geçişlerin dar ve düzensiz olması, klasik sert gövdeli robotların veya elde taşınan ekipmanların kullanımını zorlaştırır. Bu nedenle projede esnek, şişirilebilir ve düşük temas riskli bir robot mimarisi tercih edilmiştir.</p><p>Günümüzde uygulanan bakım yöntemi, teknisyenin yakıt tankı içine girerek çatlak, kablo hasarı, korozyon ve benzeri bulguları kontrol etmesine dayanır. Bunun için önce yakıt boşaltılır, ilgili elektrik sistemleri kapatılır, tank içindeki artık ve zehirli gazlar için temiz hava pompalanır, ardından teknisyen kişisel koruyucu donanımla içeri girer. Dışarıda iletişim ve acil durum için bir destek ekibi bekler. Bu yöntem emniyet açısından zorunlu olsa da havalandırma süresi, insan hatası, dar hacim ve inceleme yetersizliği nedeniyle zaman ve iş gücü kaybı oluşturur.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim2.png' alt='Yakıt tankı içinde bakım yapan teknisyen'><figcaption>Şekil 3. Yakıt tankı içinde bakım yapan teknisyen ve dar alan çalışma koşulları.</figcaption></figure></div><p>Görsel, bakım teknisyeninin sınırlı hareket alanı içinde hem görüş hem de erişim problemiyle çalıştığını açıkça gösterir. Maske, hortum, kablo, aydınlatma ve el aletleri teknisyenin hareket kabiliyetini azaltır; bu da hem bakım süresini uzatır hem de yakıt tankı içindeki kablo, valf ve boru gibi hassas bileşenlere temas riskini artırır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim7.png' alt='Yakıt tankı bakım prosedürü şeması'><figcaption>Şekil 4. Geleneksel yakıt tankı bakımında teknisyen, destek personeli, hava hattı ve aydınlatma düzeni.</figcaption></figure></div><p>Mevcut prosedürde teknisyen içeride çalışırken dışarıdaki personel güvenlik ve iletişim desteği sağlar. Spark-proof lamba, hava hattı ve alet kutusu gibi ekipmanlar operasyonu mümkün kılar; ancak aynı zamanda dar hacimde ek karmaşıklık yaratır. INFLOBOT, bu yükün bir kısmını robotik destek ünitesine taşıyarak görsel muayene, aydınlatma ve hava desteğini daha bütünleşik hale getirmeyi hedefler.</p><h4>Çözüm Kararı: Bio-inspired Soft Robot</h4><p>Yapılan araştırmalar sonucunda, tespit edilen problemlere en uygun tasarımın doğadan esinlenen bir soft robot olduğuna karar verilmiştir. Bu yapı, çizgili kaslardaki sarkomer ve omurga sistemine benzer şekilde uzayıp kısalabilen, farklı noktalardan şişirilerek yönlendirilebilen bir vine/inflatable robot mantığına dayanır. Yumuşak ve şişirilebilir doku, yangın ve darbe/temas kaynaklı riskleri azaltırken robotun dar alanlarda daha uyumlu hareket etmesini sağlar.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim1.png' alt='INFLOBOT modül özeti'><figcaption>Şekil 5. INFLOBOT modül mantığı: oksijen desteği, aydınlatma, detaylı kontrol, hareket kabiliyeti ve acil durum desteği.</figcaption></figure></div><p>Bu modül kurgusunda robot tek bir göreve sıkışmaz; yakıt tankı bakımında tekrarlayan birden fazla problemi aynı sistem mimarisi içinde ele alır. Aydınlatma teknisyenin görüşünü artırır, oksijen desteği çalışma sürekliliğine katkı sağlar, hareket kabiliyeti dar hacimlere erişimi kolaylaştırır, detaylı kontrol modülü kamera/sensör tabanlı gözlem üretir ve acil durum desteği tahliye veya yönlendirme senaryolarını güçlendirir.</p><p>Soft robot hareketi, geleneksel robotlardaki yüzey teması yerine şişme ve uzama prensibiyle gerçekleşir. Basınçlı hava veya uygun akışkan, makaraya sarılı esnek tüpü ileri doğru uzatır; basınç azaltıldığında yapı kısalır. Bu prensip sayesinde robot sert, yapışkan veya sivri yüzeylerde daha düşük temas riskiyle hareket edebilir, dikey yönlenme ve mekanik-elektronik kontrol kombinasyonu kazanabilir, başlangıç boyutuna göre çok daha uzun mesafelere erişebilir ve başlangıç boyutundan daha dar boşluklara girebilir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim9.png' alt='Soft robot şişerek uzama prensibi'><figcaption>Şekil 6. Soft/vine robotun basınçla uzama, everting motion ve yönlenme prensibi.</figcaption></figure></div><p>Şişerek uzama prensibi, robotun çevreye sürtünerek ilerlemesi yerine gövdenin uçtan dışa doğru açılması mantığına dayanır. Böylece robot, yakıt tankı gibi hassas yüzeylerde daha kontrollü temas kurabilir. İç basınç, uzama miktarı ve yönlendirme kanalları birlikte yönetildiğinde sistem hem ileri hareket hem de dar bölgelerde yön değiştirme kabiliyeti kazanır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim10.png' alt='Soft robot yüzey ve engel testleri'><figcaption>Şekil 7. Soft robotun farklı yüzeylerde ve dar boşluklarda hareket edebilme örnekleri.</figcaption></figure></div><p>Bu test görselleri, soft robot yaklaşımının yapışkan kağıt, yapıştırıcı, çivi ve dar boşluk gibi zorlayıcı temas koşullarında neden avantajlı olduğunu anlatır. Yakıt tankı içinde de benzer şekilde keskin kenarlar, bağlantı elemanları, borular ve kablo demetleri bulunur. Bu nedenle malzeme esnekliği ve temas güvenliği, tasarım kararının merkezinde tutulmuştur.</p><h4>TA-8 ve TS-5 Tasarım Varyasyonları</h4><p>INFLOBOT iki tamamlayıcı varyasyon üzerinden düşünülmüştür. TA-8 modeli, temel olarak aydınlatma ve hava desteği problemi için geliştirilmiştir. Sekiz adet uzama kolu, omurgalı sabit hava ve aydınlatma ünitesi, eklemlerde konumlanan ışıklandırma sistemi ve orta bölümden geçen oksijen desteği ile teknisyenin yakıt tankı içindeki çalışma kabiliyetini artırmayı hedefler. Modelin havalı desteklerle kendi kendine ayakta durabilmesi ve yarı otonom şekilde yönlendirilebilmesi teknisyenin ellerini ve görüşünü rahatlatır.</p><p>TS-5 modeli ise tank boyutu ve erişilebilirlik problemine odaklanır. Beş adet şişerek uzayabilen extension arm ile hareket kabiliyeti elde eder; kamera, yönlendirme sistemi, sensörler ve isteğe bağlı UV/ışıklandırma donanımlarıyla kanat uçlarına doğru daralan alanlarda hasar tespiti yapmayı hedefler. Bu sayede yalnızca genel görsel muayene değil, nokta atışı hasar tespiti ve insan kaynaklı dış hasar riskinin azaltılması amaçlanır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim8.png' alt='Kamera destekli soft robot yönlendirme'><figcaption>Şekil 8. Kamera ucuyla engel, hedef ve yönlenme durumlarını izleyen soft robot örneği.</figcaption></figure></div><p>Kamera destekli uç yapı, robotun yalnızca ilerleyen bir hortum gibi çalışmamasını; hedef, engel ve yön bilgisi üreten bir muayene platformuna dönüşmesini sağlar. Bu mantık TS-5 modelinde daralan kanat bölgelerinde çatlak, kablo hasarı, korozyon veya yabancı madde gibi bulguların görsel olarak incelenmesi için temel alınmıştır.</p><p>TA-8 ve TS-5 modellerinde şişirme işlemi için dış kollarda CO2 kullanımı önerilmiştir. CO2’nin yanıcı olmaması, soğutucu ve boğucu özellikleri, yakıt tankı gibi riskli ortamlarda avantaj sağlar. CFC ve HCFC gibi gazlara kıyasla daha çevre dostu bir seçenek olarak değerlendirilmesi de sürdürülebilirlik yaklaşımıyla uyumludur.</p><h4>Malzeme, Donanım ve Kompresör Destek Ünitesi</h4><p>TS-5 ve TA-8 modellerinin uzama kollarında TPE/TPU tabanlı esnek gövde yaklaşımı benimsenmiştir. Termoplastik elastomerlerin esnekliği, yumuşak yapısı, kimyasal direnci ve aşınma dayanımı soft robotik için uygun özellikler sunar. TPE’nin farklı malzemelerle kompozit hale getirilebilmesi, örneğin Mica ile yalıtkan ve daha rijit bir yapı kazanabilmesi, tasarımın dayanım ve güvenlik tarafında esnek seçenekler oluşturur.</p><p>Donanım tarafında kamera/boroskop, sensörler, LED/OLED aydınlatma, güvenli kablolama, kumandalı kontrol sistemi ve oksijen destek hattı birlikte ele alınmıştır. TA-8 üzerindeki subap aracılığıyla orta bölümden geçen hava desteği teknisyene ulaştırılır; bu sayede hipoksi riski azaltılır ve hava almak için verilmesi gereken molaların kısaltılması hedeflenir. Aynı aydınlatma yapısı, panik atak veya acil tahliye durumunda havaalanlarındaki kesikli yaklaşma ışıklarına benzer yönlendirici bir destek de sağlayabilir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim5.png' alt='Kompresör destek ünitesi üst görünüş'><figcaption>Şekil 9. INFLOBOT için tasarlanan kompresör destek ünitesinin üst görünüş 3B modeli.</figcaption></figure></div><p>Üst görünüş tasarımı, basınç üretimi, akış yönlendirme, hortum bağlantıları ve kontrol bileşenlerinin tek bir taşınabilir destek ünitesinde toplanmasını gösterir. Bu ünite robotun sahadaki çalışabilirliğini belirleyen kritik alt sistemdir; çünkü şişirilebilir gövdenin hareketi, basınç kararlılığı ve güvenli akış kontrolü doğrudan bu dış destekle ilişkilidir.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/Resim6.png' alt='Kompresör destek ünitesi dış gövde'><figcaption>Şekil 10. Operatör paneli, hava giriş/çıkış bağlantıları ve zamanlayıcı bölümüyle kompresör destek ünitesi.</figcaption></figure></div><p>Dış gövde modelinde operatörün sistemi takip edebileceği panel, hava giriş/çıkış bağlantıları ve zamanlayıcı mantığı öne çıkar. Böylece INFLOBOT, yalnızca robotik bir uç eleman olarak değil; basınç, kontrol, aydınlatma ve hava desteğini birlikte yöneten tamamlayıcı bir bakım sistemi olarak düşünülmüştür.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/inflobot-soft-robot-animation.gif' alt='INFLOBOT animasyon'><figcaption>Şekil 11. INFLOBOT çalışma/hareket konseptinin animasyon gösterimi.</figcaption></figure></div>",
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
          "analysis": "<p>TEKNOFEST Girişimcilik dosyasında INFLOBOT, büyüyen MRO pazarına yönelik yenilikçi bir bakım teknolojisi olarak konumlandırılır. Global hava aracı MRO pazarının 2022 yılında yaklaşık 85 milyar dolar, 2027 projeksiyonunda yaklaşık 109 milyar dolar seviyesinde olduğu; Türkiye'nin bu pazardan yaklaşık yüzde 2,3 pay aldığı belirtilir. Ürün için ilk hedef pazar, Türkiye'deki yerli bakım-onarım şirketleri ve Turkish Technic gibi SHY-145 onaylı bakım kuruluşlarıdır.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/inflobot-market-mro.png' alt='MRO pazar büyüklüğü grafiği'><figcaption>Şekil 3.1. MRO pazar büyüklüğü ve bakım kategorileri.</figcaption></figure></div><p>INFLOBOT'un pazar yaklaşımı TAM/SAM/SOM mantığıyla kurulmuştur. Toplam pazar tüm bakım-onarım ekosistemini kapsar; ulaşılabilir pazar, ürünün kullanılabileceği motor, hat ve üs/ağır bakım gibi kategorilere odaklanır; elde edilebilir pazar ise yerli bakım şirketleriyle başlanıp kalite, yetki ve onay süreçleri tamamlandıktan sonra global pazara açılma hedefiyle tanımlanır. İş modeli tarafında ürün satışı, servis sözleşmesi, kiralama/abonelik ve kompresör/CO2 tüpü/aparat gibi çapraz satış kalemleri düşünülmüştür.</p><div class='project-figure-grid inline-figure-flow'><figure class='project-figure-card'><img src='inflobot-figures/inflobot-competition-table.png' alt='INFLOBOT rakip analizi'><figcaption>Şekil 3.2. Solunum, boroskop ve aydınlatma çözümlerine karşı INFLOBOT karşılaştırması.</figcaption></figure></div><p>Rakip analizi, INFLOBOT'un doğrudan tek bir rakiple değil; solunum aygıtları, oksijen tüpleri, boroskop sistemleri ve aydınlatma elemanları gibi farklı bakım yardımcılarıyla dolaylı rekabet ettiğini gösterir. Bu ekipmanların her biri belirli bir problemi çözer; INFLOBOT'un iddiası ise dar alanda hareket, aydınlatma, görsel muayene, oksijen desteği ve hasar tespitini aynı platformda birleştirebilmesidir.</p>",
          "achievements": "<p>INFLOBOT, Tulpar Tharros takımının havacılık bakım süreçlerine yönelik en güçlü ürünleşme denemelerinden biridir. Turkish Airlines & Turkish Technic Design Hackathon'da yakıt tanklarının detaylı kontrolü problemi için finalist seviyesinde sunulmuş; TEKNOFEST Girişimcilik yarışması dosyasında ise ürün, pazar, rakip analizi, iş modeli ve pazara giriş stratejisiyle birlikte girişim fikri olarak olgunlaştırılmıştır.</p><p>Benim açımdan proje, havacılık bakım tecrübesiyle elektrik-elektronik sistem tasarımı ve robotik ürün geliştirme bakışını birleştirdi. Özellikle 3B kompresör destek ünitesi, sensör/kamera/aydınlatma yerleşimi, basınçlı akış mantığı ve yapay zeka destekli hasar tespiti fikri; bir bakım problemini yalnızca mekanik tasarım olarak değil, uçtan uca sistem mimarisi olarak düşünmemi sağladı.</p>"
},
      {
            "id": "project-6",
            "title": "Muharip Hava Araçlarında Uçuş Performansı Veri Setinin Makine Öğrenmesi Yöntemleriyle Modellenmesi ve Kıyaslanması",
            "category": "havacilik-ai",
            "summary": "Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ) LIFT UP Programı ve TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri Destek Programı (Proje No: 1999B212502693 / LIFTUP-2025-2026) kapsamında Milli Muharip Uçak (KAAN) aviyonik seyrüsefer sistemleri için yürütülen bu çalışmada; U-Net CNN ve Optik Karakter Tanıma (OCR) ile dijitalleştirilen Uçuş El Kitabı (AFM) nomogram verileri üzerinde Kübik İnterpolasyon, XGBoost ve Tabular Transformer (FT-Transformer) modellerinin NVIDIA Jetson Orin Nano gömülü hedef ortamındaki çıkarım hızı, bellek ayak izi ve tahmin doğruluğu benchmark analizleri gerçekleştirilmiştir.",
            "description": "TUSAŞ (Türk Havacılık ve Uzay Sanayii A.Ş.) LIFT UP Sanayi Odaklı Lisans Bitirme Projeleri Programı kapsamında yürütülen bu çalışmada, muharip hava araçlarında kritik uçuş performans parametrelerinin (Özgül Menzil, İrtifa, Mach Sayısı, Yakıt Akışı, Sürükleme İndeksi vb.) hesaplanmasında kullanılan geleneksel kübik interpolasyon arama tablosu yöntemi ile yapay zeka modelleri (XGBoost ve Tabular Transformer) doğrusal olmayan davranışlar, çıkarım hızı, bellek ayak izi ve işlemci yükü açısından karşılaştırılmıştır.",
            "image": "kaan.jpg",
            "tags": [
                  "TUSAŞ LIFT UP",
                  "KAAN",
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
            "overview": "\n<strong>A. GENEL BİLGİLER VE ARAŞTIRMA ÖNERİSİ ÖZETİ</strong><br>\n• <strong>Başvuru Sahibi:</strong> Ahmet Soner GÜLEÇ (Lisans Tez Öğrencisi - Eskişehir Teknik Üniversitesi, Havacılık Elektrik Elektroniği)<br>\n• <strong>Akademik Danışman:</strong> Doç. Dr. Aziz KABA (Eskişehir Teknik Üniversitesi - Pilotaj Bölümü)<br>\n• <strong>Sanayi Danışmanı:</strong> Zeynel Abidin AYDOĞAN (TUSAŞ - Türk Havacılık ve Uzay Sanayii A.Ş., Havacılık Mühendisliği)<br>\n• <strong>Araştırmanın Yürütüleceği Kurum:</strong> Türk Havacılık ve Uzay Sanayii A.Ş. (TUSAŞ) / ESTÜ Havacılık Araştırma Laboratuvarı<br>\n• <strong>Destek Programı:</strong> TÜBİTAK 2209-B Üniversite Öğrencileri Sanayiye Yönelik Araştırma Projeleri Destek Programı (2025/2. Dönem)<br><br>\n\n<strong>Özet:</strong><br>\nProje, Muharip hava araçlarının (örn: KAAN, F-18) aviyonik sistemlerinde uçuş performans verilerinin depolanması ve hesaplanması amacıyla kullanılan Arama Tablosu (Lookup Table - LUT) yönteminin yarattığı doğruluk kaybı ile aşırı donanım kaynağı tüketimi arasındaki teknik ikilemi; donanım verimliliği yüksek XGBoost ve Tabular Transformer modelleri ile aşmayı hedeflemektedir. Çalışmanın özgün değeri, bu modelleri standart eğitim süreçlerinin ötesine taşıyarak, Sürü Zekası (PSO) tabanlı meta-sezgisel algoritmalar aracılığıyla tahmin doğruluğu ve kaynak verimliliği hedefleri doğrultusunda eş zamanlı optimize eden yenilikçi bir metodoloji sunmasında yatmaktadır.<br><br>\nKAAN için bir vekil platform olarak seçilen F-18 uçağına ait nomogramlar, geliştirilen özelleştirilmiş MATLAB (`DigitizeGraph.m`) ve Python tabanlı çok değişkenli enterpolasyon yöntemleriyle işlenerek kapsamlı bir eğitim veri setine dönüştürülecektir. Elde edilen bu veri seti ile referans Nümerik modelin yanı sıra, PSO ile optimize edilmiş XGBoost ve Transformer modelleri geliştirilecektir. Son aşamada bu modeller; NVIDIA Jetson Orin Nano gibi endüstriyel gömülü sistemler ile Docker simülasyonları üzerinde doğruluk, hız, bellek kullanımı ve model boyutu metriklerine göre kapsamlı kıyaslama testlerine tabi tutulacaktır.\n",
            "scientificMerit": "\n<strong>1. ARAŞTIRMA ÖNERİSİNİN BİLİMSEL NİTELİĞİ</strong><br><br>\n\n<strong>1.1. Amaç ve Hedefler:</strong><br>\nMuharip hava araçlarının uçuş performans verilerinin sayısal modellenmesi sürecinde karşılaşılan temel problem, aviyonik sistemlerin doğası gereği sahip olduğu sınırlı işlem gücü ve bellek kapasitesi gibi donanımsal kısıtlamalardır. Bu kısıtlı ortam, Hava Aracı Uçuş El Kitabı (AFM) dokümanlarındaki grafiksel verilerin entegrasyonunu zorlaştırmaktadır; zira geleneksel enterpolasyon yöntemleri kabul edilemez doğruluk kayıplarına yol açarken, daha karmaşık modellerin entegrasyonu sistemin donanım sınırlarını aşmaktadır.<br>\nBu teknik kısıtı gidermek amacıyla proje; nomogramlardan çok boyutlu veri setleri oluşturulmasını ve bu verilerle XGBoost, Tabular Transformer ve Nümerik yöntemlere dayalı üç farklı modelin geliştirilmesini hedeflemektedir. Kritik bir adım olarak; bu modeller Sürü Zekası (PSO) tabanlı algoritmalarla optimize edilecek, böylece maksimum tahmin doğruluğu ile minimum işlem yükü arasındaki ideal denge sağlanacaktır.<br><br>\n\n<strong>1.2. Yenilikçi Yönü ve Teknolojik Değeri:</strong><br>\nMevcut aviyonik sistemlerde uçuş performansı çoğunlukla arama tabloları veya düşük dereceli polinomsal enterpolasyon yöntemleri kullanılarak yönetilmektedir. Bu yöntemler karmaşık doğrusal olmayan ilişkileri modellemekte yetersiz kalmakta ve doğruluktan ödün vermektedir. Benzerlerinden farklı olarak bu çalışmada modern derin öğrenme mimarileri (Tabular Transformer) ile endüstri standardı XGBoost ve Nümerik yöntemler, tek bir veri seti üzerinde hem doğruluk hem de donanım kaynak tüketimi (çıkarım hızı ms, bellek ayak izi MB) açısından bütüncül bir şekilde kıyaslanmaktadır.<br>\nProje, Türkiye'nin 2030 Sanayi ve Teknoloji Stratejisi’nde “Milli Teknoloji Hamlesi” vizyonu altında tanımlanan Havacılık ve Savunma Sanayii'nin dijital dönüşümü konusunda yer almaktadır. Tasarlanacak modellerin gömülü sistemlerde çalıştırılabilmesi kabiliyetini araştırarak yerli muharip uçakların (TF-X / KAAN) operasyonel çevikliğini artırmayı ve aviyonik yazılım alanında dışa bağımlılığı azaltacak milli bir teknik bilgi birikimi sağlamayı hedeflemektedir.\n",
            "architecture": "\n<strong>2. YÖNTEM VE METODOLOJİ</strong><br><br>\n\n<strong>2.1. Grafik Sayısallaştırma ve Tidy Data Hazırlığı:</strong><br>\n• <strong>MATLAB DigitizeGraph.m Algoritması:</strong> AFM grafik görselleri gri tonlamaya dönüştürülüp sütun sütun taranarak yoğunluk eşiğine göre eğrinin gerçek piksel yolu tespit edilmektedir. Düzgünleştirme (smoothing) filtresi ve piksel koordinatlarından eksen kalibrasyonu (sıfır noktası, ölçek) ile fiziki birimlere (Hız, İrtifa, Ağırlık) dönüştürülmektedir.<br>\n• <strong>Tidy Data Yapısı & Master Tablo:</strong> Dağınık 2-boyutlu eğri verileri meta-verilerle (örn: Irtifa=10000, Agirlik=40000, Motor_Durumu='MIL') etiketlenerek 5-6 boyutlu yapısal bir veri setine dönüştürülmüştür. `scipy.interpolate.griddata` ile ara değer boşlukları doldurularak `.csv` formatında Master Tablo oluşturulmuştur.<br>\n• <strong>Veri Bölünmesi:</strong> Ezberlemeyi (overfitting) önlemek amacıyla sabit random seed kullanılarak %70 Eğitim, %15 Doğrulama ve %15 Test kümelerine ayrılmıştır.<br><br>\n\n<strong>2.2. Referans Nümerik Model (Kübik Spline / Lineer Regresyon):</strong><br>\nGelişmiş modellerle kıyaslama yapmak için Çok Değişkenli Lineer Regresyon ve 3. derece Kübik Spline İnterpolasyon yöntemleri zemin (baseline) referans skoru olarak eğitilmiş; Doğrulama kümesi üzerindeki RMSE, MAE ve $R^2$ skorları belgelenmiştir.<br><br>\n\n<strong>2.3. Sürü Zekası (PSO) Destekli XGBoost Modellemesi:</strong><br>\nXGBoost modelinin hiperparametreleri (`n_estimators`, `max_depth`, `learning_rate`) Parçacık Sürü Optimizasyonu (PSO) meta-sezgisel algoritması ile çok-amaçlı (multi-objective) maliyet fonksiyonuna göre optimize edilmektedir:<br>\n$$\text{Minimize}\\left( W_1 \\cdot \text{RMSE} + W_2 \\cdot \text{Çıkarım Hızı (ms)} + W_3 \\cdot \text{Bellek Kullanımı (MB)} \right)$$<br>\nBu sayede Sürü Zekası algoritması, doğruluk ile donanım kısıtları arasındaki en ideal 'donanımsal olarak optimize edilmiş' XGBoost modelini elde etmektedir.<br><br>\n\n<strong>2.4. Tabular Transformer (FT-Transformer) Mimarisi:</strong><br>\nSayısal ve kategorik giriş özelliklerinin Feature Tokenizer ile öğrenilebilir vektör uzayına taşındığı, örnek düzeyindeki küresel temsili taşıması için bir `[CLS]` tokenının eklendiği derin öğrenme mimarisidir. Transformer Encoder katmanlarında Çok Başlıklı Öz-Dikkat (Multi-Head Self-Attention) mekanizması kullanılarak değişkenler arası karmaşık fiziksel etkileşimler öğrenilmektedir. Model hiperparametreleri (katman sayısı, dikkat başlığı sayısı, embedding boyutu) yine PSO algoritması ve aynı çok-amaçlı maliyet fonksiyonu ile optimize edilmiştir.\n",
            "riskManagement": "\n<strong>3. RİSK YÖNETİMİ VE B PLANLARI</strong><br><br>\n\n<table class='hud-benchmark-table' style='width:100%; border-collapse:collapse; margin:10px 0; border:1px solid rgba(0,240,255,0.2);'>\n  <thead style='background:rgba(0,240,255,0.1); color:var(--primary); font-family:var(--font-header); font-size:0.85rem;'>\n    <tr>\n      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2); width:40%;'>Öngörülen Risk</th>\n      <th style='padding:8px; border:1px solid rgba(0,240,255,0.2); width:60%;'>Alınacak Tedbirler (B Planı)</th>\n    </tr>\n  </thead>\n  <tbody style='font-size:0.9rem; color:var(--text-main);'>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>1. AFM Nomogram Gizlilik Kısıtı: Muharip uçak verilerine erişilememesi.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Metodoloji değişmeyecektir. Açık kaynaklı F-16 uçuş dinamikleri modeli veya NASA DASHlink doğrulanmış uçuş verisi setleri üzerinde uygulanacaktır.</td>\n    </tr>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>2. Model Yetersizliği: Hiperparametre optimizasyonuna rağmen düşük doğruluk.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Veri seti GAN (Generative Adversarial Networks) teknikleriyle sentetik olarak zenginleştirilecek ve modeller yeniden eğitilecektir.</td>\n    </tr>\n    <tr>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1); font-weight:bold;'>3. Gömülü Donanım Uyumsuzluğu / OOM: Cihazda çalışmama veya ani bellek taşması.</td>\n      <td style='padding:8px; border:1px solid rgba(0,240,255,0.1);'>Docker konteynerizasyon teknolojisi (<code>--memory='512m'</code>, <code>--cpus='0.5'</code>) kullanılarak gömülü sistem işlemci ve bellek kısıtları sanal olarak simüle edilecektir.</td>\n    </tr>\n  </tbody>\n</table>\n",
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
    gallery: [
      {
            "id": "gal-01",
            "image": "galeri/photo-01.jpg",
            "title": "Photo 01"
      },
      {
            "id": "gal-02",
            "image": "galeri/photo-02.jpg",
            "title": "Photo 02"
      },
      {
            "id": "gal-03",
            "image": "galeri/photo-03.jpg",
            "title": "Photo 03"
      },
      {
            "id": "gal-04",
            "image": "galeri/photo-04.jpg",
            "title": "Photo 04"
      },
      {
            "id": "gal-06",
            "image": "galeri/photo-06.jpg",
            "title": "Photo 06"
      },
      {
            "id": "gal-07",
            "image": "galeri/photo-07.jpg",
            "title": "Photo 07"
      },
      {
            "id": "gal-08",
            "image": "galeri/photo-08.jpg",
            "title": "Photo 08"
      },
      {
            "id": "gal-09",
            "image": "galeri/photo-09.jpg",
            "title": "Photo 09"
      },
      {
            "id": "gal-10",
            "image": "galeri/photo-11.jpg",
            "title": "Photo 10"
      },
      {
            "id": "gal-11",
            "image": "galeri/photo-12.jpg",
            "title": "Photo 11"
      },
      {
            "id": "gal-12",
            "image": "galeri/photo-13.jpg",
            "title": "Photo 12"
      },
      {
            "id": "gal-13",
            "image": "galeri/photo-14.jpg",
            "title": "Photo 13"
      },
      {
            "id": "gal-14",
            "image": "galeri/photo-15.jpg",
            "title": "Photo 14"
      },
      {
            "id": "gal-15",
            "image": "galeri/photo-16.jpg",
            "title": "Photo 15"
      },
      {
            "id": "gal-16",
            "image": "galeri/photo-17.jpg",
            "title": "Photo 16"
      },
      {
            "id": "gal-17",
            "image": "galeri/photo-18.jpg",
            "title": "Photo 17"
      },
      {
            "id": "gal-18",
            "image": "galeri/photo-19.jpg",
            "title": "Photo 18"
      },
      {
            "id": "gal-19",
            "image": "galeri/photo-20.jpg",
            "title": "Photo 19"
      },
      {
            "id": "gal-20",
            "image": "galeri/photo-21.jpg",
            "title": "Photo 20"
      },
      {
            "id": "gal-21",
            "image": "galeri/photo-22.jpg",
            "title": "Photo 21"
      },
      {
            "id": "gal-22",
            "image": "galeri/photo-23.jpg",
            "title": "Photo 22"
      },
      {
            "id": "gal-23",
            "image": "galeri/photo-24.jpg",
            "title": "Photo 23"
      },
      {
            "id": "gal-24",
            "image": "galeri/photo-25.jpg",
            "title": "Photo 24"
      },
      {
            "id": "gal-25",
            "image": "galeri/photo-26.jpg",
            "title": "Photo 25"
      },
      {
            "id": "gal-26",
            "image": "galeri/photo-27.jpg",
            "title": "Photo 26"
      },
      {
            "id": "gal-27",
            "image": "galeri/photo-28.jpg",
            "title": "Photo 27"
      },
      {
            "id": "gal-29",
            "image": "galeri/photo-30.jpg",
            "title": "Photo 29"
      },
      {
            "id": "gal-30",
            "image": "galeri/photo-31.jpg",
            "title": "Photo 30"
      },
      {
            "id": "gal-31",
            "image": "galeri/photo-32.jpg",
            "title": "Photo 31"
      }
]
  },
  en: {
    "profile": {
        "name": "Ahmet Soner Güleç",
        "title": "Aircraft Maintenance Engineer",
        "subTitle": "Avionics Systems | Aircraft Maintenance | Electronic System & Hardware Design",
        "about": "I graduated from Eskişehir Technical University, Department of Aviation Electrical and Electronics with the title of Aircraft Maintenance Engineer / Avionics. In line with my interest in engineering and technology, I actively participate in projects that combine theoretical knowledge with practical applications. During my internship and training processes abroad, I focused on avionics system maintenance and assembly procedures of aircraft, as well as mechanical design, PCB hardware design, and simulation/analysis studies.\n\nWhile developing AI-supported aviation inspection robot projects within Tulpar Tharros, of which I am a co-founder; I took active roles in electrical-electronic subsystem design, integration, and power electronics in the Hidroana team, which produces alternative energy vehicles, obtaining ranks in national/international competitions such as TEKNOFEST and Shell Eco-marathon.\n\nIn addition, under the Aviation AI Research Society, which I founded, I managed TUSAŞ LIFT-UP, TÜBİTAK 2209-A, and 2209-B projects focusing on autonomous systems, flight control software, and AI integration. With this theoretical background, field experience, and interdisciplinary engineering competencies, I am a determined Aircraft Maintenance Engineer walking towards the future with the goal of producing innovative and high-value-added solutions in aviation and space technologies.",
        "avatar": "Foto.jpg",
        "socials": {
            "github": "https://github.com/AhmetSoner",
            "linkedin": "https://www.linkedin.com/in/ahmet-soner-gulec",
            "email": "mailto:ahmetsonergulec@hotmail.com",
            "phone": "+90 553 715 41 69"
        }
    },
    "skills": [
        {
            "name": "MATLAB / Simulink",
            "category": "Software & Simulation",
            "level": 80
        },
        {
            "name": "Python / Embedded C",
            "category": "Software & Simulation",
            "level": 50
        },
        {
            "name": "PSIM",
            "category": "Software & Simulation",
            "level": 80
        },
        {
            "name": "Altium Designer",
            "category": "Hardware & Design",
            "level": 90
        },
        {
            "name": "LTspice / PSpice",
            "category": "Hardware & Design",
            "level": 90
        },
        {
            "name": "Ansys",
            "category": "Hardware & Design",
            "level": 60
        },
        {
            "name": "SolidWorks",
            "category": "Aviation & Analysis",
            "level": 60
        },
        {
            "name": "COMSOL Multiphysics",
            "category": "Aviation & Analysis",
            "level": 60
        },
        {
            "name": "XFLR5",
            "category": "Aviation & Analysis",
            "level": 50
        }
    ],
    "projectTeams": [
        {
            "id": "team-aviation-ai",
            "name": "Aviation AI Research Society",
            "role": "Founder & Lead Researcher",
            "period": "2024 - Present",
            "summary": "A research society founded to execute R&D projects combining artificial intelligence, autonomous systems, and flight control software in aviation.",
            "details": "Under the Aviation AI Research Society (HAYA), we manage industry-oriented research projects supported by TUSAŞ LIFT UP, TÜBİTAK 2209-A, and TÜBİTAK 2209-B. Our work focuses on flight data processing, AI-assisted flight performance modeling, airport bird strike detection, and autonomous drone inspection.",
            "logo": "team-haya-logo.jpg",
            "cover": "team-haya-cover.jpg",
            "members": [
                "Ahmet Soner GÜLEÇ",
                "Umut ÇÖRDÜK",
                "Ufuk ÖZKAN",
                "Onur Can DURUKAN",
                "Hakan HAMİTOĞLU",
                "Elif Dila GÖNEN"
            ],
            "achievements": [
                "TUSAŞ LIFT UP 2025-2026 Industry-Oriented Project Support",
                "TÜBİTAK 2209-B Industry-Oriented Research Grant",
                "TÜBİTAK 2209-A University Student Research Grant"
            ]
        },
        {
            "id": "team-hidroana",
            "name": "Hidroana Hydrogen Vehicle Team",
            "role": "Electrical-Electronics Subsystem & Power Electronics Engineer",
            "period": "2021 - 2024",
            "summary": "An alternative energy vehicle team developing hydrogen-fueled, high-efficiency vehicles for international engineering competitions such as Shell Eco-marathon and TEKNOFEST.",
            "details": "Responsible for 3-phase BLDC motor driver board development (Vol.1 & Vol.2), insulation monitoring device (IMD) hardware, telemetry system integration, and vehicle electrical safety inspection according to international Shell Eco-marathon Technical Inspection rules.",
            "logo": "team-hidroana-logo.jpg",
            "cover": "team-hidroana-cover.jpg",
            "members": [
                "Ahmet Soner GÜLEÇ",
                "Hidroana Project Team Members"
            ],
            "achievements": [
                "Shell Eco-marathon Global Finalist",
                "TEKNOFEST Efficiency Challenge Hydrogen Category Ranks",
                "Custom 48 V / 50 A BLDC Motor Driver Hardware Implementation"
            ]
        },
        {
            "id": "team-tulpar-tharros",
            "name": "Tulpar Tharros MRO Robotics Team",
            "role": "Co-founder & Electronics Hardware Lead",
            "period": "2023 - Present",
            "summary": "A technology team developing soft robotics and AI-supported autonomous inspection systems for aviation Maintenance, Repair, and Overhaul (MRO) processes.",
            "details": "Co-founded to solve confined-space aircraft maintenance challenges (such as fuel tank NDT inspection). Developed the INFLOBOT inflatable soft robot prototype, earning awards at the THY & Turkish Technic Design Hackathon and TEKNOFEST Entrepreneurship Competition.",
            "logo": "team-tulpar-logo.jpg",
            "cover": "team-tulpar-cover.jpg",
            "members": [
                "Ahmet Soner GÜLEÇ",
                "Özgür KURT",
                "İltemir Taha BİNALİ",
                "Sühan Göktuğ AYDEMİR",
                "Bahadır SARIKARAMAN"
            ],
            "achievements": [
                "Turkish Airlines & Turkish Technic Design Hackathon 2023 Finalist",
                "TEKNOFEST Entrepreneurship Competition Finalist",
                "Confined-space Soft Robotics MRO Prototype"
            ]
        }
    ],
    "education": [
        {
            "institution": "Eskişehir Technical University",
            "degree": "Aircraft Maintenance Engineer / Avionics",
            "duration": "September 2020 - Graduated",
            "gpa": "3.1",
            "details": "Main courses shaping my theoretical background and practical competencies during my undergraduate education include:<br><br>• Gas Turbine Engines<br>• Modern Avionics Systems<br>• Microprocessors<br>• Electricity and Electronics<br>• Electrical Machines<br>• Automatic Flight Control Systems<br>• Navigation Systems<br>• Digital Data Transmission<br>• Electronic Display Systems<br>• Electromagnetic Environment<br>• Aircraft Aerodynamics<br>• Aircraft Structures and Systems<br>• Aircraft Materials<br>• Human Factors<br>• Non-Destructive Testing (NDT)<br>• Communication Systems<br><br>Additionally, through practical training at the SHY-145 approved aircraft maintenance facilities within the faculty, I gained direct field experience in maintenance, repair, and inspection procedures in accordance with aviation standards."
        }
    ],
    "experience": [
        {
            "title": "Research Assistant",
            "company": "Eskişehir Technical University (Eskişehir, Turkey)",
            "duration": "October 2025 - June 2026",
            "details": "Worked as a research assistant at the Aviation AI Research Laboratory established within Eskişehir Technical University under the İŞKUR Youth Program. Conducted research on flight control algorithms, sensor data processing, flight state interpretation, and autonomous decision-making mechanisms for UAVs and avionics systems.<br><br>Contributed to aircraft flight performance modeling using MATLAB/Simulink and Python; participated in virtual flight simulation testing, verification analysis, and technical data interpretation. Additionally, engaged in PCB design, verification, and hardware integration of electronic boards to support AI-integrated avionics flight control systems."
        },
        {
            "title": "Avionics Engineering Intern",
            "company": "Vilnius Gediminas Technical University (Vilnius, Lithuania)",
            "duration": "October 2023 - April 2024",
            "details": "In the first period, received hands-on technical training on non-airworthy Cessna 310, Cessna 152, and Airbus A320 aircraft, actively participating in disassembly, assembly, and installation procedures of wings, fuselage, landing gear, and flight control systems. Gained practical experience in avionics maintenance and repair.<br><br>In the second period, worked on airworthy Cessna 172S and Piper PA-34 aircraft at Kyviškės Airport (EASA Part-145 certified facility) under the supervision of EASA Part-66 licensed engineers.<br><br>In the final period, focused on UAV electronics and flight hardware design. Designed a quadrotor airframe using SolidWorks, calculating weight distribution using XFLR5. Designed custom BLDC motor driver PCBs using Altium Designer, performing PSpice and MATLAB circuit simulations. Conducted thermal dissipation analysis using COMSOL Multiphysics to evaluate semiconductor thermal behavior under flight load conditions.<div class='internship-files'><span class='internship-files-title'>Internship Documents</span><a href='Staj/Internship%20Program.pdf' target='_blank'>Internship Program</a><a href='Staj/Study%20Pages-%20October%201.pdf' target='_blank'>Study Pages - October</a><a href='Staj/Study%20Pages-%20November%202.pdf' target='_blank'>Study Pages - November</a><a href='Staj/Study%20Pages-%20December%203.pdf' target='_blank'>Study Pages - December</a><a href='Staj/Study%20Pages-%20January%204.pdf' target='_blank'>Study Pages - January</a><a href='Staj/Study%20Pages-%20Laboratory%205.pdf' target='_blank'>Study Pages - Laboratory</a></div>"
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
    filter_power_electronics: "GÜÇ ELEKTRONİĞİ",
    filter_aviation_ai: "HAVACILIK & YAPAY ZEKA",
    filter_robotics: "ROBOTİK & OTOMASYON",
    stat_status: "DURUM:",
    stat_status_val: "KARİYER FIRSATLARINA AÇIK",
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
    filter_power_electronics: "POWER ELECTRONICS",
    filter_aviation_ai: "AVIATION & AI",
    filter_robotics: "ROBOTICS & AUTOMATION",
    stat_status: "STATUS:",
    stat_status_val: "OPEN TO CAREER OPPORTUNITIES",
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
        "KAAN",
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
<strong class='overview-subtitle">A. Projenin Problemi</strong><br><br>
Muharip hava araçlarında uçuş performans büyüklükleri, görev bilgisayarı ve aviyonik yazılım içinde çoğunlukla arama tabloları ve interpolasyon yöntemleri ile temsil edilir. Bu yaklaşım deterministik ve açıklanabilir olsa da tablo çözünürlüğü, bellek maliyeti ve ara noktalardaki doğrusal olmayan davranışlar nedeniyle sınırlıdır. Projenin çıkış noktası tam olarak bu ikilemdi: <strong>yüksek doğruluk</strong>, <strong>düşük gecikme</strong> ve <strong>kısıtlı donanımda çalışabilirlik</strong> aynı anda sağlanabilir mi?<br><br>
Bu soru özellikle Specific Range gibi operasyonel kararları etkileyen performans değerlerinde önemlidir. Çünkü model yalnızca masaüstü ortamında iyi sonuç vermemeli; aynı zamanda aviyonik sistemlerde beklenen hızlı yanıt, düşük bellek kullanımı ve açıklanabilir karar gerekçesi beklentilerine de yaklaşmalıdır. Bu nedenle çalışma, klasik LUT/interpolasyon mantığını tamamen yok saymak yerine onu referans aile olarak koruyup, XGBoost ve FT-Transformer gibi öğrenen modellerle birlikte değerlendiren karşılaştırmalı bir sistem olarak tasarlandı.<br><br>

<strong class='overview-subtitle">B. Araştırma Kapsamı</strong><br><br>
Çalışma TUSAŞ LIFT UP Sanayi Odaklı Lisans Bitirme Projeleri Programı ve TÜBİTAK 2209-B Sanayi Odaklı Araştırma Projeleri desteğiyle yürütüldü. KAAN hedef platformu için doğrudan gizli/veri erişimi yerine, yöntem geliştirme ve doğrulama amacıyla F-18 uçuş el kitabı/performans nomogramları vekil veri kaynağı olarak ele alındı. Amaç, üreticiye ait ham veri tabanına erişmek değil; yayınlanmış performans grafiklerinde temsil edilen düzeltilmiş uçuş bilgisini sayısal ve modellenebilir bir veri setine dönüştürmekti.<br><br>
Bu kapsamda çalışma veri eldesinden model karşılaştırmasına kadar genişledi: nomogram mantığı incelendi, eğri dijitasyonu ve eksen kalibrasyonu yapıldı, One Engine / Two Engine senaryoları master veri setinde birleştirildi, referans nümerik model kuruldu ve aynı veri üzerinde XGBoost ile FT-Transformer modelleri kıyaslandı. Son aşamada sonuçlar yalnızca hata metrikleriyle değil; gecikme, bellek ayak izi, model boyutu ve gömülü sisteme aktarılabilirlik açısından yorumlandı.<br><br>

<strong class='overview-subtitle">C. Benim Rolüm</strong><br><br>
Proje lideri olarak veri dijitasyonu, modelleme protokolünün kurulması, XGBoost ve FT-Transformer kıyas akışının tasarlanması, NVIDIA Jetson Orin Nano hedef ortam profilinin yorumlanması, teknik raporların hazırlanması ve sanayi/akademik danışman sunumlarının bütünleştirilmesinde aktif rol aldım. Çalışmanın odağı yalnızca model eğitmek değil; aviyonik sistemlerde gerçekçi sayılabilecek kısıtlar altında hangi yaklaşımın neden tercih edileceğini mühendislik gerekçeleriyle ortaya koymaktı.<br><br>

<strong class='overview-subtitle">D. Ortaya Çıkan Ürün</strong><br><br>
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

<div class='project-output-access">
  <div>
    <span class='visual-kicker">Arayüz Çıktısı</span>
    <strong>Specific Range Studio</strong>
    <p>Projenin çalıştırılabilir yazılım çıktısı; One Engine / Two Engine veri setlerinden temizlenmiş Specific Range verisi üretmek, interpolasyon referansını, XGBoost ve FT-Transformer modellerini eğitmek, model karşılaştırma raporları almak, benchmark sonuçlarını incelemek ve Flask tabanlı tahmin arayüzünü çalıştırmak için hazırlanmış modüler araştırma kod tabanıdır.</p>
  </div>
  <a class='project-output-link" href="https://github.com/ufukzkn/specific-range-studio" target="_blank" rel="noopener noreferrer">
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
        "KAAN",
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

<div class='visual-callout-grid">
  <div class='visual-callout-card">
    <span class='visual-kicker">Girdi</span>
    <strong>AFM / POH nomogramları</strong>
    <p>Performans grafikleri; CFD, rüzgar tüneli, uçuş testi ve sertifikasyon sürecinden geçirilmiş düzeltilmiş uçuş bilgisini temsil eder.</p>
  </div>
  <div class='visual-callout-card">
    <span class='visual-kicker">Dönüşüm</span>
    <strong>Segmentasyon + OCR + kalibrasyon</strong>
    <p>Nomogram eğrileri grid ve metin gürültüsünden ayrıştırıldı; piksel koordinatları fiziksel uçuş değişkenlerine dönüştürüldü.</p>
  </div>
  <div class='visual-callout-card">
    <span class='visual-kicker">Çıktı</span>
    <strong>Model-ready master tablo</strong>
    <p>Altitude, gross weight, drag index, Mach, fuel flow, engine type ve specific range değişkenleri tek veri hattında birleştirildi.</p>
  </div>
</div>

<strong>2.1. Ham Veri ve Nomogram Mantığı</strong><br>
Ham Veri Eldesi raporunda açıklandığı gibi uçuş performans nomogramları, yalnızca teorik çizimler değil; tasarım, CFD, rüzgar tüneli, uçuş testi, standardizasyon ve emniyet marjı adımlarından geçen mühendislik ürünleridir. Bu nedenle grafikten okunan her eğri, arkasında fiziksel bir performans yüzeyi taşır. Projede bu mantık tersine işletildi: nomogramdaki düzeltilmiş/standartlaştırılmış bilgi önce sayısallaştırıldı, ardından sıcaklık, irtifa, ağırlık, drag index ve Mach etkileri veri setinde temsil edilebilir hale getirildi.<br><br>

<div class='project-figure-grid">
  <figure class='project-figure-card">
    <img src="lift-up-ham-veri-nomogram.png" alt="Ham Veri Eldesi raporu - nomogram oluşum süreci">
    <figcaption>Şekil 23. Ham Veri Eldesi PDF'inde anlatılan nomogram oluşum zinciri: CFD ve rüzgar tüneli, uçuş testleri, veri standardizasyonu ve grafik üretimi.</figcaption>
  </figure>
  <figure class='project-figure-card">
    <img src="lift-up-ham-veri-method.png" alt="Ham Veri Eldesi raporu - düzeltme katsayıları">
    <figcaption>Şekil 24. Ham veriye dönüş mantığı: sıcaklık/irtifa, ağırlık, drag index ve Mach etkilerinin ayrı katsayılarla ele alınması.</figcaption>
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

<div class='visual-callout-grid result-grid">
  <div class='visual-callout-card result-card">
    <span class='visual-kicker">Pratik Kazanan</span>
    <strong>XGBoost</strong>
    <p>2. aşama sonuç raporunda XGBoost; doğruluk, hız ve canlı demo uygulanabilirliği açısından en dengeli ML modeli olarak değerlendirildi.</p>
  </div>
  <div class='visual-callout-card result-card">
    <span class='visual-kicker">Araştırma Odağı</span>
    <strong>FT-Transformer</strong>
    <p>Mevcut ölçümde XGBoost'u geçmese de tabular transformer yaklaşımını temsil ettiği ve ileri çalışma potansiyeli taşıdığı için korundu.</p>
  </div>
  <div class='visual-callout-card result-card">
    <span class='visual-kicker">Referans Ailesi</span>
    <strong>Interpolasyon</strong>
    <p>Kaynak tablo mantığına en yakın, deterministik ve yorumlanabilir referans üretim yöntemi olarak konumlandırıldı.</p>
  </div>
</div>

<div class='project-figure-grid">
  <figure class='project-figure-card">
    <img src="lift-up-sonuc-dogruluk-kaynak.png" alt="Lift-UP 2. aşama sonuç - doğruluk ve kaynak analizi">
    <figcaption>Şekil 25. 2. aşama sonuç raporu: doğruluk metrikleri ve runtime maliyet bileşenleri XGBoost'un pratik denge avantajını gösteriyor.</figcaption>
  </figure>
  <figure class='project-figure-card">
    <img src="lift-up-sonuc-karar-matrisi.png" alt="Lift-UP 2. aşama sonuç - karar matrisi ve radar grafiği">
    <figcaption>Şekil 26. Karar matrisi ve radar grafiği: tek kazanan yerine kullanım rolüne göre model seçimi yapılması gerektiğini gösteren özet analiz.</figcaption>
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

<div class='visual-callout-grid">
  <div class='visual-callout-card"><span class='visual-kicker">Kaynak</span><strong>AFM / handbook nomogramları</strong><p>Specific Range grafikleri, uçuş testi ve standardizasyon süreçlerinden geçmiş mühendislik bilgisini taşır.</p></div>
  <div class='visual-callout-card"><span class='visual-kicker">Dönüşüm</span><strong>Dijitasyon ve veri temizleme</strong><p>Eğri pikselleri, eksen değerleri ve motor/konfigürasyon bilgileri tek ölçülebilir veri hattında birleştirildi.</p></div>
  <div class='visual-callout-card"><span class='visual-kicker">Modelleme</span><strong>Referans model + öğrenen modeller</strong><p>Kübik spline, XGBoost ve FT-Transformer aynı veri üzerinde doğruluk ve gömülü sistem maliyeti açısından kıyaslandı.</p></div>
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

<div class='project-figure-grid">
  <figure class='project-figure-card"><img src="lift-up-fig-xgboost-flow.png" alt="XGBoost karar ağacı akışı"><figcaption>Şekil 27. XGBoost raporundan: ardışık ağaçların residual hatayı azaltarak nihai tahmini oluşturması.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-fig-xgboost-split.png" alt="XGBoost split gain analizi"><figcaption>Şekil 28. XGBoost raporundan: aday bölünmelerin gain, gradient ve Hessian toplamlarıyla değerlendirilmesi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-fig-ft-tokenization.png" alt="FT-Transformer tokenization akışı"><figcaption>Şekil 29. Tabular Transform raporundan: kategorik ve sayısal girdilerin Transformer mimarisine taşınması.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-fig-transformer-block.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 30. Tabular Transform raporundan: MHSA, FFN, residual akış ve LayerNorm bileşenleri.</figcaption></figure>
</div>
`;

  liftUpContent.tr.analysis = `
<strong>4. Test, Simülasyon ve Doğrulama Sonuçları</strong><br><br>

<div class='visual-callout-grid result-grid">
  <div class='visual-callout-card result-card"><span class='visual-kicker">Pratik Kazanan</span><strong>XGBoost</strong><p>2. aşama sonuç raporunda XGBoost; doğruluk, hız ve canlı demo uygulanabilirliği açısından en dengeli ML modeli olarak değerlendirildi.</p></div>
  <div class='visual-callout-card result-card"><span class='visual-kicker">Araştırma Odağı</span><strong>FT-Transformer</strong><p>Mevcut ölçümde XGBoost’u geçmese de tabular transformer yaklaşımını temsil ettiği ve ileri çalışma potansiyeli taşıdığı için korundu.</p></div>
  <div class='visual-callout-card result-card"><span class='visual-kicker">Referans Ailesi</span><strong>Interpolasyon</strong><p>Kaynak tablo mantığına en yakın, deterministik ve yorumlanabilir referans üretim yöntemi olarak konumlandırıldı.</p></div>
</div>

<div class='project-figure-grid">
  <figure class='project-figure-card"><img src="lift-up-fig-accuracy-comparison.png" alt="XGBoost ve FT-Transformer doğruluk karşılaştırması"><figcaption>Şekil 31. Lift-UP 2. Aşama Sonuç PDF’inden: XGBoost RMSE, MAE ve MAPE metriklerinde FT-Transformer’a göre daha düşük hata verdi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-fig-runtime-cost.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 32. Lift-UP 2. Aşama Sonuç PDF’inden: latency, memory ve CPU bileşenlerinin normalize edilmiş karşılaştırması.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-fig-decision-matrix.png" alt="Genel karar matrisi"><figcaption>Şekil 33. Karar matrisi: doğruluk, hız, RAM, model boyutu, yorumlanabilirlik ve Pi/edge uygunluğu birlikte skorlandı.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-fig-radar-profile.png" alt="Genel profil radar grafiği"><figcaption>Şekil 34. Radar profil: XGBoost’un dengeli pratik model, FT-Transformer’ın araştırma adayı, interpolasyonun referans ailesi olduğunu görselleştirir.</figcaption></figure>
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
<div class='project-figure-grid paper-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-01-stage2_plan-p2-i2-381x36.png" alt="Çok amaçlı uygunluk fonksiyonu"><figcaption>Şekil 1. Model seçiminde yalnızca hata değil; hız ve bellek maliyeti de birlikte ele alınarak çok amaçlı uygunluk fonksiyonu tanımlanmıştır.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-02-stage2_result-p1-i2-687x97.png" alt="Yöntemlerin rol tablosu"><figcaption>Şekil 2. İnterpolasyon, XGBoost ve FT-Transformer yöntemlerinin projedeki rol ayrımı: referans aile, pratik ML modeli ve akademik mimari adayı.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-03-stage2_result-p1-i3-834x88.png" alt="Ölçüm metrikleri tablosu"><figcaption>Şekil 3. Uçtan uca benchmark tablosu; gecikme, bellek, CPU, model boyutu ve doğruluk metriklerinin birlikte okunmasını sağlar.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-04-stage2_result-p2-i2-542x206.png" alt="Doğruluk karşılaştırması"><figcaption>Şekil 4. XGBoost ve FT-Transformer modellerinin RMSE, MAE, MAPE ve R² metrikleriyle doğruluk karşılaştırması.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-05-stage2_result-p2-i3-562x326.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 5. Normalize runtime maliyeti; latency, memory ve CPU bileşenlerinin gömülü sistem açısından birlikte değerlendirilmesi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-06-stage2_result-p3-i2-538x464.png" alt="Genel profil radar grafiği"><figcaption>Şekil 6. Radar profil grafiği; XGBoost’un dengeli pratik model, FT-Transformer’ın araştırma adayı, interpolasyonun ise referans aile olduğunu gösterir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-07-stage2_result-p3-i3-687x367.png" alt="Genel karar matrisi"><figcaption>Şekil 7. Karar matrisi; doğruluk, hız, RAM, model boyutu, yorumlanabilirlik, kurulum kolaylığı ve edge uygunluğu için mühendislik skorlamasını özetler.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-08-stage2_result-p4-i2-782x167.png" alt="Alan bazlı kazananlar"><figcaption>Şekil 8. Alan bazlı kazananlar tablosu; her yöntemin güçlü olduğu kullanım bağlamını ayrıştırır.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-09-xgb-p1-i6-251x78.png" alt="XGBoost optimizasyon hedefi"><figcaption>Şekil 9. XGBoost modelinde amaç fonksiyonu; tahmin hatasının örnekler üzerinden minimize edilmesi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-10-xgb-p2-i1-400x310.png" alt="XGBoost toplamsal ağaç yapısı"><figcaption>Şekil 10. XGBoost’un additive model yapısı; ardışık karar ağaçları residual hatayı azaltarak nihai çıktıyı üretir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-11-xgb-p2-i4-244x71.png" alt="XGBoost düzenlileştirilmiş amaç fonksiyonu"><figcaption>Şekil 11. Eğitim kaybı ve ağaç karmaşıklığı aynı amaç fonksiyonunda birleştirilerek aşırı öğrenme riski kontrol edilir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-12-xgb-p3-i2-362x66.png" alt="Split gain denklemi"><figcaption>Şekil 12. Split gain hesabı; gradyan ve Hessian toplamlarıyla hangi bölünmenin en fazla hata azalımı sağlayacağını belirler.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-13-xgb-p3-i3-314x80.png" alt="İkinci dereceden XGBoost yaklaşımı"><figcaption>Şekil 13. XGBoost optimizasyonunda Taylor açılımı benzeri ikinci dereceden yaklaşım, hızlı ve kararlı ağaç büyütmeye olanak verir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-14-xgb-p3-i5-1046x688.png" alt="XGBoost split gain grafiği"><figcaption>Şekil 14. Aday splitlerin gain, gradient ve Hessian bileşenleriyle karşılaştırılması; en faydalı bölünmenin nasıl seçildiğini görselleştirir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-15-xgb-p5-i3-340x64.png" alt="PSO hız ve konum güncellemesi"><figcaption>Şekil 15. Parçacık Sürü Optimizasyonu güncelleme denklemi; hiperparametre aramasında parçacıkların en iyi çözüme yönelmesini sağlar.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-16-xgb-p6-i2-287x58.png" alt="Çok amaçlı XGBoost maliyet fonksiyonu"><figcaption>Şekil 16. XGBoost için RMSE, çıkarım süresi ve model boyutunun aynı maliyet fonksiyonunda dengelenmesi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-17-xgb-p7-i2-287x58.png" alt="XGBoost optimizasyon maliyeti"><figcaption>Şekil 17. Sistem kısıtlarını içeren alternatif maliyet formu; edge hedef için doğruluk ve kaynak tüketimini birlikte optimize eder.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-18-ft-p1-i2-458x88.png" alt="FT-Transformer attention denklemi"><figcaption>Şekil 18. Self-attention mekanizması; değişken tokenlarının birbirinden ne ölçüde bilgi alacağını hesaplar.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-19-ft-p4-i2-510x140.png" alt="FT-Transformer genel akışı"><figcaption>Şekil 19. Feature tokenizer, transformer encoder ve prediction head akışı; tabular verinin derin modele taşınmasını gösterir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-20-ft-p5-i2-373x49.png" alt="Feature token genel tanımı"><figcaption>Şekil 20. Her özelliğin ortak boyutlu token temsiline dönüştürülmesi; FT-Transformer’ın giriş katmanının temelidir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-21-ft-p5-i7-477x51.png" alt="Sayısal token üretimi"><figcaption>Şekil 21. Sayısal değişkenlerin öğrenilebilir ağırlık ve bias ile token uzayına projeksiyonu.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-22-ft-p5-i8-433x53.png" alt="Kategorik token üretimi"><figcaption>Şekil 22. Kategorik değişkenlerin embedding tabanlı tokenlara dönüştürülmesi; motor tipi gibi ayrık değişkenlerin modele taşınmasını sağlar.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-23-ft-p5-i11-336x46.png" alt="Token dizisi yığınlama"><figcaption>Şekil 23. Tüm özellik tokenlarının tek bir token dizisi halinde yığınlanması; attention katmanı bu dizi üzerinde çalışır.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-24-ft-p6-i2-332x65.png" alt="Attention denklemi"><figcaption>Şekil 24. Query, key ve value temsilleri üzerinden self-attention çıktısının hesaplanması.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-25-ft-p6-i8-414x49.png" alt="Q K V projeksiyonları"><figcaption>Şekil 25. Token temsillerinin Q, K ve V projeksiyonlarına ayrılması; çok başlıklı dikkat mekanizmasının hazırlık adımıdır.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-26-ft-p6-i9-313x47.png" alt="FFN denklemi"><figcaption>Şekil 26. Feed Forward Network katmanı; attention sonrası her token üzerinde doğrusal olmayan dönüşüm uygular.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-27-ft-p6-i10-367x51.png" alt="FFN ağırlık boyutları"><figcaption>Şekil 27. FFN katmanındaki ağırlık matrislerinin boyutları; model kapasitesi ile hesaplama maliyeti arasındaki ilişkiyi gösterir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-28-ft-p6-i12-368x91.png" alt="Residual ve dropout akışı"><figcaption>Şekil 28. Residual bağlantılar, dropout ve LayerNorm akışı; derin transformer katmanlarında bilgi kaybını ve kararsız eğitimi azaltır.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-29-ft-p8-i2-512x280.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 29. Encoder bloğu; MHSA, FFN, residual bağlantılar ve LayerNorm bileşenlerinin blok düzeyindeki organizasyonu.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-30-ft-p8-i3-359x391.png" alt="FT-Transformer mimari şeması"><figcaption>Şekil 30. FT-Transformer mimari şeması; kategorik embedding, sayısal projeksiyon, transformer katmanları ve çıktı başlığını birlikte gösterir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-31-ft-p9-i2-606x91.png" alt="FT-Transformer çok amaçlı maliyet fonksiyonu"><figcaption>Şekil 31. FT-Transformer için hata, çıkarım süresi, model boyutu ve ağırlık katsayılarını birleştiren optimizasyon hedefi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-32-ft-p11-i2-840x464.png" alt="FT-Transformer tokenizasyon görseli"><figcaption>Şekil 32. Kategorik ve sayısal girdilerin transformer tabanlı sınıflandırma/regresyon akışında nasıl temsil edildiğini gösteren genel tokenizasyon görseli.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-33-spline-p2-i2-543x53.png" alt="Kübik spline katsayı denklemi"><figcaption>Şekil 33. Kübik spline interpolasyonda parça fonksiyonları için katsayıların komşu düğüm noktalarından hesaplanması.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-34-spline-p3-i2-480x122.png" alt="Spline tridiagonal sistem"><figcaption>Şekil 34. Spline katsayılarının çözümü için kurulan tridiagonal lineer sistemin kompakt gösterimi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-35-spline-p4-i2-480x141.png" alt="Spline matris sistemi"><figcaption>Şekil 35. Çok düğümlü spline probleminde matris sisteminin genişletilmiş formu.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-36-spline-p4-i3-480x136.png" alt="Spline sınır koşulları"><figcaption>Şekil 36. Spline çözümünde sınır koşulları ve katsayı sürekliliğinin matris formunda gösterimi.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-37-spline-p7-i2-647x70.png" alt="Spline interpolasyon parça fonksiyonu"><figcaption>Şekil 37. Kübik spline parça fonksiyonu; referans nümerik modelin ara değer üretme mantığını matematiksel olarak özetler.</figcaption></figure>
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

<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-02-stage2_result-p1-i2-687x97.png" alt="Yöntemlerin rol karşılaştırması"><figcaption>Şekil 4.1. Yöntem rol tablosu: interpolasyon referans üretimi, XGBoost güçlü tabular ML tahmini, FT-Transformer ise ileri mimari araştırma adayıdır.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-03-stage2_result-p1-i3-834x88.png" alt="Uçtan uca benchmark ölçüm tablosu"><figcaption>Şekil 4.2. Ana benchmark tablosu; p95 gecikme, Peak RSS, CPU ortalaması, model boyutu ve hata metrikleri aynı değerlendirme çerçevesinde okunmuştur.</figcaption></figure>
</div>

Raporun problem tanımı, Specific Range tahminini <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code> ve <code>engine_type</code> girdilerinden üretilen doğrusal olmayan bir regresyon problemi olarak ele alır. Bu problemde davranış irtifa, motor konfigürasyonu ve Mach rejimlerine göre değiştiği için yalnızca tek bir hata metriğiyle karar vermek yeterli değildir. Bu nedenle üç yöntemin rolü ayrıştırılmıştır: interpolasyon tahmini gerçek/referans üretimi için, XGBoost pratik ve hızlı tahmin için, FT-Transformer ise değişkenler arası etkileşimleri attention tabanlı öğrenen araştırma modeli olarak kullanılmıştır.<br><br>

<strong>4.1. Doğruluk Analizi</strong><br>
Doğruluk analizinde XGBoost, FT-Transformer’a göre daha düşük RMSE, MAE ve MAPE üretmiştir. Her iki modelde de R² değerinin oldukça yüksek olması, modellerin genel varyansı başarıyla yakaladığını gösterir. Ancak tekil tahmin döndüren bir arayüzde ortalama mutlak hata ve yüzde hata, kullanıcının model güvenilirliğini doğrudan algıladığı metriklerdir. Bu yüzden XGBoost’un MAE ve MAPE avantajı pratik kullanım açısından önemlidir. FT-Transformer’ın doğruluk seviyesi yine güçlüdür; fakat mevcut veri büyüklüğü ve eğitim koşullarında XGBoost’un tabular veri üzerindeki güçlü inductive bias’ı daha dengeli sonuç üretmiştir.<br><br>

<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-04-stage2_result-p2-i2-542x206.png" alt="XGBoost ve FT-Transformer doğruluk karşılaştırması"><figcaption>Şekil 4.3. Doğruluk karşılaştırması: XGBoost, RMSE, MAE ve MAPE metriklerinde daha düşük hata üretirken iki modelin R² değeri birbirine yakın ve yüksektir.</figcaption></figure>
</div>

<strong>4.2. Hız ve Kaynak Analizi</strong><br>
Hız tarafında XGBoost en düşük p95 gecikmeye sahip yöntemdir. FT-Transformer ikinci sırada gelir; interpolasyon ise cache optimizasyonundan sonra makul seviyeye inse de XGBoost’un gerisinde kalır. RAM tarafında interpolasyon en düşük Peak RSS değerini verir; çünkü çalışması için büyük bir runtime bağımlılığına ihtiyaç duymaz. FT-Transformer’ın model dosyası küçük olsa da PyTorch tabanlı inference yolu bellek ayak izini artırır. Bu gözlem raporun önemli çıkarımlarından biridir: edge deployment için yalnızca model dosya boyutu değil, modelin gerçek çalıştırma yolunun RAM ve CPU davranışı da değerlendirilmelidir.<br><br>

<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-05-stage2_result-p2-i3-562x326.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 4.4. Runtime maliyet bileşenleri: latency, memory ve CPU normalize edilerek üç yöntemin gömülü sistem davranışı birlikte karşılaştırılmıştır.</figcaption></figure>
</div>

<strong>4.3. Karar Matrisi</strong><br>
Karar matrisi yalnızca ham metrikleri değil, mühendislik kullanım değerini de dikkate alır. İnterpolasyon yorumlanabilirlikte çok güçlüdür; ancak referans ailesi olduğu için ML modelleriyle aynı doğruluk yarışına sokulması doğru değildir. XGBoost doğruluk, hız, kurulum kolaylığı ve pratik demo dengesiyle öne çıkar. FT-Transformer ise akademik değer ve modelleme potansiyeli açısından güçlüdür; özellikle daha büyük veri, daha uzun eğitim, PSO destekli hiperparametre araması, kuantizasyon ve ONNX/TensorRT dönüşümü gibi iyileştirmelerle ileri çalışmalara açık bir mimari sunar.<br><br>

<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-07-stage2_result-p3-i3-687x367.png" alt="Genel karar matrisi"><figcaption>Şekil 4.5. Genel karar matrisi: doğruluk, hız, RAM, model boyutu, yorumlanabilirlik, kurulum kolaylığı ve edge uygunluğu 1-5 mühendislik skoru ile değerlendirilmiştir.</figcaption></figure>
  <figure class='project-figure-card"><img src="lift-up-paper-fig-06-stage2_result-p3-i2-538x464.png" alt="Genel profil radar grafiği"><figcaption>Şekil 4.6. Genel profil radar grafiği: XGBoost dengeli profil verirken, FT-Transformer araştırma değeri ve küçük model boyutu; interpolasyon ise düşük RAM ve yorumlanabilirlik avantajı taşır.</figcaption></figure>
</div>

<strong>4.4. Alan Bazlı Kazananlar ve Yöntem Yorumu</strong><br>
Raporun alan bazlı değerlendirmesinde doğruluk ve hız kategorilerinde XGBoost öne çıkar. RAM kullanımında interpolasyon, model dosyası boyutunda FT-Transformer, yorumlanabilirlikte interpolasyon, pratik demoda XGBoost, araştırma değerinde ise FT-Transformer güçlü yöntem olarak belirlenmiştir. Bu sonuç, projede tek bir yöntemi mutlak kazanan ilan etmek yerine her yöntemi doğru bağlamda konumlandırmanın daha doğru olduğunu gösterir. İnterpolasyon kaynak verinin üretim mantığına en yakın yöntemdir ve custom input ekranında “tahmini gerçek” değer olarak kullanılabilir. XGBoost canlı demo, hızlı yanıt ve edge senaryosunda güvenli varsayılan modeldir. FT-Transformer ise mevcut ölçümde XGBoost’u geçmese bile tabular transformer yaklaşımının uçuş verisi için nasıl kurulabileceğini gösteren akademik çekirdektir.<br><br>

<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-08-stage2_result-p4-i2-782x167.png" alt="Alan bazlı kazananlar tablosu"><figcaption>Şekil 4.7. Alan bazlı kazananlar: her yöntemin güçlü olduğu alan ayrı ele alınarak sistem önerisinin rol bazlı kurulması sağlanmıştır.</figcaption></figure>
</div>

<strong>4.5. Nihai Değerlendirme ve Sonraki İyileştirmeler</strong><br>
Nihai değerlendirmede XGBoost, pratik sistem açısından en güçlü model olarak konumlanır; FT-Transformer akademik mimari odağı olarak korunur; interpolasyon ise referans üretim ailesi olarak sistemde kalır. Final arayüzünde interpolasyonun kaynak tabloya sadık referans değer üretmesi, XGBoost’un hızlı ve güvenilir ML tahmini sağlaması, FT-Transformer’ın ise ileri modelleme adayını temsil etmesi önerilmiştir. Sonraki iyileştirmeler için cold start ve model yükleme süresi ölçümleri, batch-size senaryoları, hata dağılım histogramları, irtifa ve <code>engine_type</code> kırılımlı metrikler, FT-Transformer için daha uzun eğitim ve PSO araması, daha küçük mimari varyantlar, quantization, ONNX export ve XGBoost için model sıkıştırma ile CPU-thread optimizasyonları önerilmiştir. Böylece proje yalnızca mevcut sonuçları raporlamakla kalmamış, gömülü aviyonik kullanım için sürdürülebilir bir geliştirme yol haritası da üretmiştir.
`;

  liftUpContent.tr.architecture = `
<strong>2. Sistem Mimarisi ve Çalışma Prensibi</strong><br><br>
Bu bölüm, projede ham uçuş performans dokümanından çalışan tahmin arayüzüne kadar kurulan hattı açıklar. Amaç yalnızca bir makine öğrenmesi modeli eğitmek değil; nomogramdaki analog mühendislik bilgisini temiz veri setine, referans nümerik modele, öğrenen modellere ve gömülü sistemde yorumlanabilir benchmark sonuçlarına dönüştüren uçtan uca bir sistem kurmaktır. Bu yüzden mimari veri kaynağı, dijitasyon, veri standardizasyonu, referans hesaplama ve öğrenen model katmanları olarak ayrılmıştır.<br><br>

<strong class='method-subtitle">2.1. Ham Veri ve Nomogram Mantığı</strong><br>
AFM/POH/EFM nomogramları, uçağın performans davranışını pilotun veya mühendisin hızlı okuyabileceği grafiklere sıkıştırır. Bu grafikler doğrudan ham sensör verisi değildir; tasarım hesapları, CFD/rüzgar tüneli çalışmaları, uçuş testleri, atmosfer düzeltmeleri ve emniyet marjlarından geçerek oluşturulur. Bu nedenle Specific Range eğrileri, aslında irtifa, Mach, gross weight, drag index, fuel flow ve motor konfigürasyonu arasındaki çok değişkenli fiziksel ilişkinin iki boyutlu gösterimidir.<br><br>
Bu projede nomogram, makine öğrenmesi için veri kaynağına dönüştürüldü. Bunun için önce grafikteki eğrinin temsil ettiği fiziksel büyüklük anlaşıldı; ardından standartlaştırılmış grafik değerini etkileyen faktörler ayrıştırıldı. Sıcaklık/irtifa motor verimini, ağırlık indüklenmiş sürüklemeyi, drag index parazitik sürüklemeyi, Mach ise özellikle transonik bölgede dalga sürüklemesini etkiler. Bu nedenle ham veri mantığı aşağıdaki ilişkiyle ifade edildi:<br>
<div class='formula-block"><span>SR<sub>Ham</sub> = SR<sub>Grafik</sub> / (f<sub>alt</sub> × f<sub>mach</sub> × f<sub>weight</sub> × f<sub>drag</sub>)</span></div>
Bu formül, grafikten okunan Specific Range değerinin tek başına model girdisi olmadığını; arkasındaki uçuş koşullarıyla birlikte anlam kazandığını gösterir. Böylece nomogram yalnızca görsel kaynak değil, modelleme hattının fiziksel dayanağı olarak kullanıldı.<br><br>

<strong class='method-subtitle">2.2. Dijitasyon Hattı</strong><br>
Dijitasyon hattının görevi, görsel nomogramı güvenilir sayısal noktalara dönüştürmektir. İlk aşamada MATLAB <code>DigitizeGraph.m</code> ve Python/OpenCV tabanlı klasik görüntü işleme yöntemleri değerlendirildi. Bu yöntemler eğri takibi için hızlı prototip sağladı; ancak havacılık grafiklerinde yoğun grid çizgileri, eksen metinleri, eğri etiketleri ve birbirine yakın geçen çizgiler bulunduğu için salt eşikleme yöntemi kararlı olmadı. Bu yüzden süreç, tek bir “görüntüyü oku” adımı yerine kontrollü alt adımlara ayrıldı.<br><br>
Ön işleme aşamasında grafik okunabilir çözünürlüğe getirildi, kontrast ve gürültü davranışı incelendi. Eğri ayırma aşamasında hedef eğri piksellerinin grid/metin arka planından ayrılması amaçlandı. Eksen kalibrasyonunda piksel koordinatlarının hangi Mach, altitude, gross weight veya drag index değerine karşılık geldiği belirlendi. Son olarak çıkarılan her nokta motor senaryosu ve uçuş koşuluyla etiketlendi. Bu yapı sayesinde model eğitimi, belirsiz bir görsel okuma işlemi yerine izlenebilir bir veri dönüşüm hattına dayandırıldı.<br><br>

<strong class='method-subtitle">2.3. Master Veri Seti</strong><br>
Dijitasyon çıktıları tek başına yeterli değildir; farklı grafiklerden gelen noktaların aynı şemada birleşmesi gerekir. Bu nedenle master veri seti <em>tidy data</em> düzeninde kuruldu: her satır bir uçuş koşulunu, her sütun bir değişkeni temsil eder. Kullanılan standart kolonlar <code>altitude</code>, <code>gross_weight</code>, <code>drag_index</code>, <code>mach</code>, <code>fuel_flow</code>, <code>engine_type</code> ve <code>specific_range</code> oldu. One Engine ve Two Engine senaryoları ayrı kategorik bilgi olarak tutuldu; çünkü motor konfigürasyonu hem yakıt akışı hem de menzil davranışı üzerinde doğrudan etkilidir.<br><br>
Bu katmanda veri temizleme, eksik nokta tamamlama ve tutarlılık kontrolleri yapıldı. Eksik/boş değerlerin bırakılmaması, eksen kaynaklı okuma hatalarının kontrol edilmesi ve AFM üzerinden rastgele seçilen kontrol noktalarıyla sayısal karşılıkların doğrulanması hedeflendi. Master veri seti bu nedenle yalnızca “çok satırlı CSV” değil; model kıyasının adil yapılmasını sağlayan ortak deney zemini oldu.<br><br>

<strong class='method-subtitle">2.4. Referans Nümerik Model</strong><br>
Referans nümerik model, klasik arama tablosu yaklaşımının projedeki deterministik karşılığıdır. Bu modelin amacı XGBoost veya FT-Transformer gibi öğrenen modellerle yarışmak değil; handbook mantığına sadık, açıklanabilir ve ara değer üretebilen bir kıyas zemini sağlamaktır. Çok boyutlu ilişki <code>Altitude × Gross Weight × Drag Index × Mach -> Specific Range</code> biçiminde ele alındı ve kübik spline interpolasyonla temsil edildi.<br><br>
Kübik spline kullanılmasının nedeni, lineer interpolasyonun iki nokta arasında kırıklı ve keskin geçişler üretmesidir. Uçuş performansı yüzeyleri ise genellikle daha yumuşak değişir; bu nedenle spline ara değerlerde daha fiziksel bir geçiş sağlar. Temel parça fonksiyon şu şekilde gösterilebilir:<br>
<div class='formula-block"><span>S<sub>i</sub>(x) = a<sub>i</sub> + b<sub>i</sub>(x - x<sub>i</sub>) + c<sub>i</sub>(x - x<sub>i</sub>)<sup>2</sup> + d<sub>i</sub>(x - x<sub>i</sub>)<sup>3</sup></span></div>
Burada amaç, komşu veri noktaları arasında hem değer sürekliliğini hem de eğim davranışını korumaktır. Bu model arayüzde “referans/tahmini gerçek” değer üretimi için kullanıldı; öğrenen modellerin tahminleri bu zemine göre yorumlandı.<br><br>

<strong class='method-subtitle">2.5. Öğrenen Modeller</strong><br>
XGBoost, tabular uçuş performansı verisinde güçlü bir pratik model olduğu için seçildi. Specific Range davranışı her bölgede aynı değildir; örneğin yüksek irtifa, farklı Mach aralığı veya motor konfigürasyonu modelin göreceği ilişkiyi değiştirir. XGBoost bu uzayı karar ağaçlarıyla parçalara ayırır ve her yeni ağaç önceki ağaçların bıraktığı residual hatayı azaltmaya çalışır. Bu nedenle az sayıda fiziksel değişken içeren fakat doğrusal olmayan tabular problemlerde yüksek doğruluk ve düşük gecikme dengesi sağlar.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-10-xgb-p2-i1-400x310.png" alt="XGBoost toplamsal ağaç yapısı"><figcaption>Şekil 2.1. XGBoost toplamsal ağaç yapısı.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu görsel XGBoost’un toplamsal öğrenme mantığını gösterir. İlk ağaç genel eğilimi öğrenir, sonraki ağaçlar kalan residual hatalara odaklanır ve sonuçlar toplanarak nihai Specific Range tahmini elde edilir. Bu yapı, farklı uçuş rejimlerinde değişen doğrusal olmayan davranışı tek bir kapalı form denklem yazmadan öğrenmek için kullanıldı.</p>
XGBoost’un eğitim hedefi yalnızca hatayı azaltmak değildir; model karmaşıklığını da kontrol etmek gerekir. Bu yüzden kayıp fonksiyonu ve düzenlileştirme terimi birlikte düşünülür:<br>
<div class='formula-block"><span>L(φ) = Σ l(y<sub>i</sub>, ŷ<sub>i</sub>) + Σ Ω(f<sub>k</sub>)</span></div>
İlk terim tahmin hatasını, ikinci terim ağaçların karmaşıklığını temsil eder. Böylece model eğitim verisini ezberlemek yerine daha genellenebilir ve deploy edilebilir bir yapı üretir.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-14-xgb-p3-i5-1046x688.png" alt="XGBoost split gain analizi"><figcaption>Şekil 2.2. XGBoost split gain analizi.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu görsel, XGBoost’ta bir karar ağacının nereden bölüneceğine nasıl karar verildiğini açıklar. Her aday split için sol ve sağ alt grupların gradient/Hessian toplamları hesaplanır; hata azalımı ve düzenlileştirme etkisi birlikte değerlendirilir. En yüksek gain veren split, veri uzayını en anlamlı iki parçaya ayırdığı için seçilir.</p>

FT-Transformer, tabular verilerde transformer mimarisinin değişkenler arası etkileşimleri öğrenme gücünü test etmek için kullanıldı. Sayısal değişkenler ve kategorik değişkenler önce ortak bir token uzayına taşınır. Böylece altitude, Mach, drag index, gross weight, fuel flow ve engine_type aynı mimari içinde karşılaştırılabilir temsillere dönüşür. Bu özellikle uçuş performansı gibi etkileşimli problemlerde değerlidir; çünkü model yalnızca tek tek kolonların etkisini değil, kolonların birlikte oluşturduğu bağlamı da öğrenir.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-19-ft-p4-i2-510x140.png" alt="FT-Transformer genel akışı"><figcaption>Şekil 2.3. FT-Transformer genel veri akışı.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu görsel FT-Transformer’ın genel veri akışını gösterir. Feature tokenizer ham sayısal ve kategorik girdileri token temsillerine dönüştürür; transformer encoder bu tokenlar arasındaki ilişkileri öğrenir; prediction head ise son temsilden Specific Range tahminini üretir. Bu yapı, uçuş değişkenlerinin birbirine bağlı etkilerini tek mimari içinde modellemek için kullanıldı.</p>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="lift-up-paper-fig-29-ft-p8-i2-512x280.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 2.4. Transformer encoder blok yapısı.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu görsel encoder bloğunun içini gösterir. Multi-Head Self-Attention tokenlar arasındaki ilişki ağırlıklarını hesaplar, FFN katmanı bu temsilleri doğrusal olmayan biçimde işler, residual bağlantılar bilgi akışını korur, LayerNorm ise eğitimi kararlı hale getirir. Bu bileşenler FT-Transformer’ın kolonlar arası bağlamı öğrenmesini sağlar.</p>
Self-attention mekanizmasının özeti aşağıdaki denklemdir:<br>
<div class='formula-block"><span>Attention(Q, K, V) = softmax((QK<sup>T</sup>) / √d<sub>k</sub>) V</span></div>
Bu denklemde <code>Q</code>, <code>K</code> ve <code>V</code> tokenlardan türetilen sorgu, anahtar ve değer temsilleridir. Pratik anlamı şudur: model her uçuş koşulu için hangi değişkenin hangi değişkenle daha ilişkili olduğunu öğrenir. Mevcut sonuçlarda XGBoost daha güçlü pratik denge vermiş olsa da FT-Transformer, projenin akademik tarafında “tabular uçuş verisi transformer ile nasıl modellenir?” sorusuna cevap veren ana mimari olarak korundu.
`;

  liftUpContent.tr.overview = `
<strong class='overview-subtitle">B. Giriş ve Problem Alanı</strong><br><br>
Havacılık endüstrisi yüksek teknoloji yoğunluğu, stratejik etkisi ve ekonomik büyüklüğü nedeniyle modern dünyanın en kritik sektörlerinden biridir. Savunma havacılığı ise uzun geliştirme döngüleri, yüksek Ar-Ge maliyetleri ve görev kritik sistem isterleriyle öne çıkar. Muharip hava araçlarında görev başarısı yalnızca aerodinamik kabiliyetlere değil; farklı irtifa, hız, ağırlık, sürükleme ve motor konfigürasyonu koşullarındaki uçuş performans parametrelerini doğru hesaplayabilen aviyonik yazılımlara da bağlıdır.<br><br>
Bu hesaplamalar geleneksel olarak arama tabloları ve çok değişkenli interpolasyon yöntemleriyle yapılır. Arama tabloları deterministik, izlenebilir ve mühendislik açısından açıklanabilir olmaları nedeniyle avantajlıdır; ancak değişken sayısı arttıkça tablo çözünürlüğü ve bellek maliyeti büyür. Tablo seyrekleştiğinde ise özellikle doğrusal olmayan uçuş bölgelerinde interpolasyon hatası artabilir. Bu nedenle çalışmada, klasik referans yaklaşım korunarak XGBoost ve Tabular Transformer modellerinin aynı veri seti üzerinde doğruluk ve donanım maliyeti bakımından nasıl davrandığı araştırılmıştır.<br><br>

<strong class='overview-subtitle">C. Araştırma Yaklaşımı</strong><br><br>
Çalışmanın veri kaynağı olarak F-18 uçağına ait performans nomogramları kullanılmıştır. Bu grafikler doğrudan ham uçuş verisi değil; CFD, rüzgar tüneli, uçuş testi ve standart atmosfer düzeltmeleriyle oluşturulmuş performans bilgisinin kullanıcıya sunulan grafik karşılığıdır. Projenin amacı üreticiye ait gizli ham veri tabanına erişmek değil, açık performans grafiklerinde temsil edilen düzeltilmiş uçuş bilgisini sayısal ve modellenebilir bir veri setine dönüştürmektir.<br><br>
Bu kapsamda nomogramlar dijitize edilmiş, U-Net tabanlı eğri segmentasyonu ve OCR destekli eksen okuma yaklaşımıyla yapısal veri elde edilmiş, master veri seti oluşturulmuş, kübik interpolasyon referansı kurulmuş ve aynı veri üzerinde XGBoost ile Tabular Transformer modelleri eğitilmiştir. Modeller yalnızca RMSE, MAE, MAPE ve R² ile değil; çıkarım gecikmesi, bellek kullanımı, CPU yükü, model boyutu ve hedef ortam uygunluğu ile birlikte değerlendirilmiştir.
`;

  liftUpContent.tr.architecture = `
<strong>2. Materyal ve Metot</strong><br><br>
Uçuş performans parametrelerinin makine öğrenmesiyle modellenebilmesi için önce güvenilir ve karşılaştırılabilir bir veri zemini oluşturuldu. Açık kaynaklı muharip uçak ham performans veri tabanlarına erişim sınırlı olduğundan, çalışma F-18 performans nomogramlarının sayısallaştırılmasıyla başlatıldı. Bu grafik tabanlı bilgi, dijitasyon ve denormalizasyon adımlarıyla çok boyutlu veri setlerine dönüştürüldü. Ardından kübik interpolasyon, XGBoost ve Tabular Transformer aynı giriş değişkenleri ve aynı hedef çıktı üzerinden karşılaştırılabilir hale getirildi.<br><br>

<strong class='method-subtitle">2.1. Nomogram Dijitasyonu ve Veri Seti Oluşturma</strong><br><br>
Veri kaynağı olarak F-18 Hava Aracı Uçuş El Kitabı performans grafikleri kullanıldı. F-18 platformu, yöntem geliştirme sürecinde açık erişilebilir grafik tabanlı performans verisi sağladığı için seçildi. Uygulama parametresi olarak özgül menzil ele alındı; ancak kurulan yöntem farklı uçuş performans parametrelerine de uygulanabilecek genel bir dijitasyon yaklaşımı sunar.<br><br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="word-article-fig-10.png" alt="F-18 özgül menzil nomogramı"><figcaption>Şekil 2.1. F-18 özgül menzil nomogramı.</figcaption></figure>
</div>
<p class='figure-detail-text">Nomogram, farklı uçuş koşullarında özgül menzil davranışını grafik olarak temsil eden ana veri kaynağıdır. Bu grafik doğrudan ham uçuş testi tablosu değil; uçuş testi, mühendislik düzeltmeleri ve standartlaştırılmış performans bilgisiyle oluşturulan bir mühendislik gösterimidir. Projede bu görselin amacı, KAAN benzeri platformlarda gizli performans verilerine erişmeden açık kaynaklı bir vekil platform üzerinden veri üretim ve modelleme hattını kanıtlamaktır.</p>
Klasik piksel yoğunluğu, eşikleme ve temel görüntü işleme yöntemleri ilk aşamada incelendi. Ancak yoğun ızgara çizgileri, eksen yazıları, eğri etiketleri ve arka plan gürültüsü nedeniyle hedef performans eğrilerini güvenilir biçimde ayırmakta yetersiz kaldıkları görüldü. Bu nedenle Python ortamında U-Net tabanlı bir segmentasyon mimarisi kullanıldı.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="word-article-fig-11.png" alt="U-Net tabanlı eğri segmentasyon mimarisi"><figcaption>Şekil 2.2. U-Net tabanlı eğri segmentasyon mimarisi.</figcaption></figure>
</div>
<p class='figure-detail-text">U-Net mimarisi grafik görüntüsündeki hedef eğriyi arka plan bileşenlerinden piksel düzeyinde ayırmak için kullanıldı. Kodlayıcı bölüm görüntüden kenar, çizgi ve yoğunluk bilgilerini çıkarırken; çözücü bölüm bu temsilleri tekrar görüntü boyutuna taşıyarak her pikseli eğri veya arka plan olarak sınıflandırır. Atlama bağlantıları, grafiklerdeki ince eğri yapılarını koruduğu için bu problemde özellikle faydalıdır.</p>
Segmentasyon sonrası elde edilen grafik parçalarında eksen değerleri ve sayısal etiketler OCR ile okunmuştur. U-Net hedef eğrileri ayırırken OCR, bu eğrilerin fiziksel koordinat sistemine taşınmasını sağlar. Böylece yoğun ızgara çizgileri ve metin bindirmeleri arasında kalan performans eğrileri sayısal veri üretimine uygun hale getirilmiştir.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="word-article-fig-12.png" alt="Segmentasyon sonrası hedef performans eğrileri"><figcaption>Şekil 2.3. Segmentasyon sonrası ayrıştırılan hedef eğriler.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu çıktı, arka plandan ayrıştırılan eğri bilgisinin model veri hattına girmeden önceki ara aşamasını temsil eder. Ayrıştırılan eğriler üzerinde örnekleme yapılır, piksel koordinatları eksen kalibrasyonu ile Mach, irtifa, brüt ağırlık ve drag index gibi fiziksel değişkenlere dönüştürülür.</p>
Elde edilen veri seti <em>tidy data</em> prensibine göre düzenlenmiştir. Her değişken bir sütun, her gözlem bir satır olarak temsil edilmiştir. Dijitalleştirme kalitesi için temel doğrulama ölçütü, AFM grafiklerinden seçilen kontrol noktaları ile dijital karşılıkları arasındaki sapmanın %2 sınırını aşmamasıdır.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="word-article-fig-13.png" alt="Master veri seti örneği"><figcaption>Şekil 2.4. Master veri seti örnek satırları.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu tablo, grafik tabanlı performans bilgisinin makine öğrenmesi modellerine verilebilecek yapısal forma dönüştüğünü gösterir. Altitude, gross weight, drag index, Mach number, specific range ve fuel flow gibi kolonlar modelleme hattının ortak veri şemasını oluşturur.</p>

<strong class='method-subtitle">2.2. Modelleme Yöntemleri</strong><br><br>
Veri seti oluşturulduktan sonra çalışma üç hesaplama yaklaşımıyla yürütülmüştür. İlk yaklaşım, mevcut tablo tabanlı aviyonik hesaplama mantığını temsil eden kübik interpolasyondur. Diğer iki yaklaşım ise aynı veri seti üzerinde eğitilen XGBoost ve Tabular Transformer modelleridir. Böylece geleneksel nümerik yöntem ve makine öğrenmesi modelleri aynı giriş değişkenleri üzerinden adil biçimde karşılaştırılmıştır.<br><br>
Kübik interpolasyon referans yöntem olarak kullanılmıştır. Bunun nedeni deterministik, açıklanabilir, düşük hesaplama maliyetine sahip ve mühendislik doğrulamasına uygun olmasıdır. Kübik interpolasyon, doğrusal interpolasyona kıyasla uçuş performans eğrilerindeki yumuşak değişimi daha iyi temsil eder.<br>
<div class='formula-block"><span>S<sub>i</sub>(x) = a<sub>i</sub> + b<sub>i</sub>(x-x<sub>i</sub>) + c<sub>i</sub>(x-x<sub>i</sub>)<sup>2</sup> + d<sub>i</sub>(x-x<sub>i</sub>)<sup>3</sup></span></div>
XGBoost, gradyan artırmalı karar ağaçlarına dayanan güçlü bir tabular model olarak seçilmiştir. Model giriş uzayını karar bölgelerine ayırır ve her yeni ağaç önceki hataları azaltacak şekilde eğitilir. Bu yapı; Mach, irtifa, ağırlık, sürükleme ve motor konfigürasyonu gibi değişkenlerin doğrusal olmayan etkilerini yakalamak için kullanılmıştır.<br><br>
Tabular Transformer ise değişkenler arasındaki bağlamsal ilişkileri attention mekanizmasıyla öğrenebilmesi nedeniyle ikinci öğrenen model olarak değerlendirilmiştir. Bu mimaride kategorik değişkenler embedding, sürekli değişkenler ise normalizasyon/projeksiyon adımlarıyla ortak temsil uzayına taşınır.<br>
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="word-article-fig-15.png" alt="FT-Transformer genel akışı"><figcaption>Şekil 2.5. FT-Transformer genel akışı.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-16.png" alt="Transformer encoder blok yapısı"><figcaption>Şekil 2.6. Transformer encoder blok yapısı.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-17.png" alt="Kategorik ve sürekli değişkenlerin birlikte işlendiği mimari"><figcaption>Şekil 2.7. Kategorik ve sürekli değişkenlerin birlikte işlendiği Transformer mimarisi.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu görseller Tabular Transformer hattının neden kullanıldığını açıklar. Feature tokenizer, sayısal ve kategorik girdileri ortak token temsillerine dönüştürür; transformer encoder bu tokenlar arasındaki ilişkileri self-attention ile öğrenir; çıktı başlığı ise özgül menzil tahminini üretir. Motor konfigürasyonu kategorik değişken olarak, Mach sayısı, irtifa, brüt ağırlık ve sürükleme indeksi ise sürekli değişkenler olarak ele alınmıştır.</p>

<strong class='method-subtitle">2.3. Model Değerlendirme ve Hedef Ortam Karşılaştırması</strong><br><br>
Modeller yalnızca tahmin doğruluğuyla değil, düşük kaynaklı hedef ortamda çalışabilirlikleriyle de değerlendirilmiştir. Karşılaştırmada hata metrikleri ile birlikte çıkarım gecikmesi, tepe bellek kullanımı, CPU yükü, model artefakt boyutu ve bütünleşik uygunluk skoru dikkate alınmıştır. Böylece çalışma, en düşük hata değerini veren modeli seçmek yerine doğruluk-donanım verimliliği dengesini değerlendiren bir mühendislik çerçevesi sunmuştur.
<div class='project-figure-grid inline-figure-flow">
  <figure class='project-figure-card"><img src="word-article-fig-18.png" alt="Benchmark metrik açıklamaları"><figcaption>Şekil 2.8. Benchmark metriklerinin anlamı.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-19.png" alt="Yöntemlerin benchmark tablosu"><figcaption>Şekil 2.9. Yöntemlerin hedef ortam benchmark tablosu.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-21.png" alt="Benchmark ölçüm sonuçları"><figcaption>Şekil 2.10. Ölçüm sonuçlarının özet tablosu.</figcaption></figure>
</div>
<p class='figure-detail-text">Bu tablolar, doğruluk metrikleri ile donanım metriklerinin birlikte okunması gerektiğini gösterir. RMSE, MAE, MAPE ve R² tahmin başarısını ölçerken; p95 gecikme, CPU kullanımı, Peak RSS ve model boyutu gerçek sistemde çalıştırılabilirliği temsil eder. Bu yüzden model seçimi yalnızca en küçük hata değerine değil, NVIDIA Jetson Orin Nano gibi hedef gömülü ortamda sürdürülebilir kaynak kullanımına göre yorumlanmıştır.</p>
`;

  liftUpContent.tr.analysis = `
<strong>3. Bulgular ve Tartışma</strong><br><br>
Kübik interpolasyon, XGBoost ve FT-Transformer modelleri; tahmin doğruluğu, çıkarım gecikmesi, bellek kullanımı, işlemci yükü, model boyutu ve bütünleşik hedef ortam uygunluğu açısından karşılaştırıldı. Sonuçlar, tek bir yöntemin tüm ölçütlerde aynı anda üstün olmadığını; yöntem seçiminin kullanım amacı, donanım kısıtı ve açıklanabilirlik ihtiyacına göre yapılması gerektiğini gösterdi.<br><br>
Doğruluk sonuçlarında XGBoost, FT-Transformer’a göre daha düşük RMSE, MAE ve MAPE değerleri üretmiştir. XGBoost için RMSE 0,003468, MAE 0,001372 ve MAPE %1,560 olarak elde edilirken; FT-Transformer için bu değerler sırasıyla 0,003671, 0,002044 ve %2,888 olarak raporlanmıştır. R² değerlerinin her iki modelde yüksek olması genel eğilimin başarıyla öğrenildiğini; hata büyüklükleri açısından ise XGBoost’un daha güvenilir pratik tahmin modeli olduğunu göstermektedir.<br>
<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="word-article-fig-20.png" alt="XGBoost ve FT-Transformer doğruluk karşılaştırması"><figcaption>Şekil 3.1. XGBoost ve FT-Transformer doğruluk karşılaştırması.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-22.png" alt="Hedef runtime ve kaynak özeti"><figcaption>Şekil 3.2. Hedef runtime ve kaynak özeti.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-23.png" alt="Runtime maliyet bileşenleri"><figcaption>Şekil 3.3. Runtime maliyet bileşenleri.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-01.png" alt="Fit Score karşılaştırması"><figcaption>Şekil 3.4. Maliyet tabanlı Fit Score karşılaştırması.</figcaption></figure>
</div>
<p class='figure-detail-text">Benchmark sonuçları XGBoost’un yalnızca doğruluk açısından değil, çıkarım hızı açısından da dengeli bir çözüm sunduğunu göstermektedir. XGBoost en düşük p95 gecikme değerini üretirken, FT-Transformer kabul edilebilir hız sunmasına rağmen daha yüksek bellek ayak izine sahiptir. İnterpolasyon ise RAM tarafında avantajlıdır; fakat CPU maliyeti ve gecikme profili nedeniyle pratik sistem değerlendirmesinde tek başına en iyi seçenek değildir.</p>
Fit Score sonuçları bütünleşik değerlendirmede XGBoost’un en dengeli aday olduğunu göstermiştir. XGBoost 81,5 ile en yüksek skoru alırken, FT-Transformer 77,6 ve interpolasyon 74,0 seviyesinde kalmıştır. Bu sonuç, hata metrikleri ve hedef ortam maliyetleri birlikte değerlendirildiğinde XGBoost’un pratik uygulama için en uygun model olduğunu destekler.<br>
<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="word-article-fig-02.png" alt="Yöntemlerin proje içindeki rol dağılımı"><figcaption>Şekil 3.5. Yöntemlerin proje içindeki rol dağılımı.</figcaption></figure>
</div>
<p class='figure-detail-text">Rol dağılımı, üç yöntemin birbirinin yerine doğrudan konmadığını; her birinin proje içinde farklı bir mühendislik görevini temsil ettiğini açıklar. İnterpolasyon tahmini gerçek ve deterministik referans ailesi olarak, XGBoost pratik tahmin ve demo modeli olarak, FT-Transformer ise akademik araştırma mimarisi olarak konumlandırılmıştır.</p>
<div class='project-figure-grid result-paper-flow">
  <figure class='project-figure-card"><img src="word-article-fig-03.png" alt="Genel karar matrisi"><figcaption>Şekil 3.6. Genel karar matrisi.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-04.png" alt="Genel profil radar grafiği"><figcaption>Şekil 3.7. Genel profil radar grafiği.</figcaption></figure>
  <figure class='project-figure-card"><img src="word-article-fig-05.png" alt="Kriterlere göre öne çıkan yöntemler"><figcaption>Şekil 3.8. Kriterlere göre öne çıkan yöntemler.</figcaption></figure>
</div>
<p class='figure-detail-text">Karar matrisi ve radar grafiği, XGBoost’un doğruluk, hız, kurulum kolaylığı ve hedef ortam uygunluğu açısından dengeli profil sunduğunu gösterir. İnterpolasyon açıklanabilirlik ve düşük RAM kullanımı açısından güçlüdür; ancak referans yöntem olduğu için doğrudan doğruluk yarışına sokulmamalıdır. FT-Transformer model boyutu ve araştırma değeri açısından öne çıkar; fakat bellek kullanımı ve runtime bağımlılıkları nedeniyle mevcut haliyle doğrudan pratik deploy modeli değil, ileri optimizasyon adayıdır.</p>
Bu bulgulara göre model seçimi tek bir metriğe indirgenmemelidir. Mevcut performans tablolarına sadık, açıklanabilir ve doğrulanabilir referans değer üretmek için interpolasyon ailesi uygundur. Düşük hata, hızlı çıkarım ve uygulanabilir demo sistemi için XGBoost en güçlü adaydır. Tabular Transformer ise uçuş performans verilerinde attention tabanlı ilişkilerin incelenmesi için değerli bir araştırma hattı sunmaktadır.
`;

  liftUpContent.tr.achievements = `
<strong>4. Sonuçlar ve Proje Çıktıları</strong><br><br>
Bu çalışma, muharip hava araçlarında uçuş performans parametrelerinin hesaplanmasında kullanılan geleneksel tablo/interpolasyon yaklaşımının modern makine öğrenmesi modelleriyle doğruluk ve donanım verimliliği açısından karşılaştırılabileceğini göstermiştir. F-18 performans grafiklerinden elde edilen özgül menzil verileri sayısallaştırılmış, çok boyutlu veri setlerine dönüştürülmüş ve aynı veri seti üzerinde kübik interpolasyon, XGBoost ve Tabular Transformer modelleri değerlendirilmiştir.<br><br>
Elde edilen bulgular, kübik interpolasyonun deterministik ve açıklanabilir yapısıyla referans üretimi için değerli olduğunu; XGBoost’un düşük hata değerleri, kısa çıkarım süresi ve düşük kaynaklı hedef ortamda dengeli kaynak kullanımıyla en uygulanabilir pratik çözümü sunduğunu ortaya koymuştur. Tabular Transformer mevcut koşullarda XGBoost’u geçememiş olsa da, değişkenler arası ilişkileri dikkat mekanizmasıyla temsil edebilmesi nedeniyle ileri çalışmalar için önemli bir mimari aday olarak değerlendirilmiştir.<br><br>
Çalışmanın temel katkısı, aviyonik performans hesaplamalarında yalnızca doğruluk odaklı değil; çıkarım hızı, bellek kullanımı, işlemci yükü ve model boyutu gibi donanım-farkındalıklı ölçütleri de içeren bütünleşik bir model seçimi çerçevesi sunmasıdır. Bu yönüyle çalışma, yerli muharip hava aracı projelerinde aviyonik yazılım, gömülü yapay zekâ ve performans modelleme alanlarında milli teknik bilgi birikimini güçlendirecek bir ön değerlendirme sağlamaktadır.<br><br>
<div class='project-output-access">
  <div>
    <span class='visual-kicker">Arayüz Çıktısı</span>
    <strong>Specific Range Studio</strong>
    <p>Makale içeriğinde anlatılan veri işleme, model eğitimi, karşılaştırma, benchmark ve tekil tahmin akışlarının çalıştırılabilir yazılım çıktısıdır. Repo; veri yükleme, ön işleme, XGBoost/FT-Transformer eğitimi, interpolasyon referansı, rapor üretimi ve Flask tabanlı tahmin arayüzü modüllerini içerir.</p>
  </div>
  <a class='project-output-link" href="https://github.com/ufukzkn/specific-range-studio" target="_blank" rel="noopener noreferrer">
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