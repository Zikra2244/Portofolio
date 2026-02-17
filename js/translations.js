const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_organization: "Organization",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_greeting: "Hello, I'm",
    hero_name: "Muhammad Zikra Fadly",
    hero_title: "Technology Enthusiast",
    hero_btn_contact: "Contact Me",
    hero_btn_projects: "View Projects",
    hero_btn_experience: "View Experience",

    about_title: "About",
    about_title_span: "Me",
    about_text:
      "Information Technology student with an interest and competency in web development, mobile development, and IT infrastructure. Experienced in designing several web and mobile projects, managing Linux-based servers, web hosting, control panels, and DevOps support, and experienced in direct involvement in system installation, configuration, and maintenance. Active in national-scale organizations and committees, with leadership roles that hone coordination, logistics management, cross-team communication, and problem-solving skills. Possesses a structured work pattern, adapts to dynamic environments, and effectively integrates technical skills with operational needs.",
    about_stats_1: "Organizations & Committees",
    about_stats_2: "Projects",

    skills_title: "Technical",
    skills_title_span: "Skills",
    skills_technical: "Technical",
    skills_nontech: "Non-Technical",
    skills_tech_1: "Microsoft Office (Word, Excel, PowerPoint).",
    skills_tech_2: "Google Workspace (Docs, Sheets, Slides).",
    skills_tech_3:
      "Programming languages HTML, CSS, JavaScript, Java, PHP, Python, Go, Dart, Solidity.",
    skills_tech_4: "Frontend frameworks React JS, Vue JS, Next JS.",
    skills_tech_5: "Backend frameworks Laravel, Express.js, Spring Boot Java.",
    skills_tech_6: "Mobile development framework Flutter (Dart).",
    skills_tech_7:
      "Relational databases MySQL, PostgreSQL, SQL Server, Oracle Database, cloud database Supabase.",
    skills_tech_8:
      "Linux Ubuntu, web hosting control panel, Git/GitHub, network & server monitoring tools, Docker container.",
    skills_nontech_1: "Organizational Skills",
    skills_nontech_2: "High Self-Confidence",
    skills_nontech_3: "Leadership",
    skills_nontech_4: "Responsibility",
    skills_nontech_5: "Adaptability",
    skills_nontech_6: "Public Relations",
    skills_nontech_7: "Fundraising",
    skills_nontech_8: "Logistics",

    projects_title: "Featured",
    projects_title_span: "Projects",
    project_badge_web3: "Web3 (DAPP)",
    project_1_title: "Digital Diploma Tokenization",
    project_1_desc:
      "Implementation of ERC-721 Smart Contract for tokenizing diplomas and achievement certificates into unique and secure NFT assets on a DApp/Web3 platform.",
    project_2_title: "Interactive Quiz",
    project_2_desc:
      "React.js based website with elegant and friendly display, interactive quiz questions taken directly from the openTDB API in real-time.",
    project_3_title: "Automated Web Server",
    project_3_desc:
      "NgopiYuk Website Deployment using Docker and GitHub Actions CI/CD in Cloud infrastructure.",
    project_4_title: "AI School Agent Scraper",
    project_4_desc:
      "Automation of school data processing from CSV to Qdrant database using AI Agent for semantic search.",
    project_5_title: "TukangKu",
    project_5_desc:
      "Mobile application for ordering handymen to help with home repairs such as leaking roofs, dead water, etc.",
    project_6_title: "Survey Application",
    project_6_desc:
      "Comprehensive survey management system built with Spring Boot and React that allows survey creation, management, and analysis.",
    project_7_title: "Smart Parent Portal Website",
    project_7_desc:
      "Portal website to make it easier for parents to find appropriate parenting techniques, and contains milestone suggestions.",
    project_btn_preview: "Preview",
    project_btn_backend: "Backend",
    project_btn_frontend: "Frontend",
    project_btn_repo: "Repository",

    experience_title: "Internship",
    experience_title_span: "Experience",
    exp_1_company: "PT Kimia Farma Tbk – Central Jakarta, DKI Jakarta",
    exp_1_date: "Jun 2025 – Sep 2025",
    exp_1_position: "OpCo & IT Infrastructure Intern",
    exp_1_desc_1:
      "Involved in 10+ installation, configuration, and maintenance activities of Ubuntu-based operating systems.",
    exp_1_desc_2:
      "Perform daily troubleshooting on hardware and software to ensure smooth operational IT systems.",
    exp_1_desc_3:
      "Support internal IT operations across divisions, including system monitoring.",
    exp_1_desc_4:
      "Develop professional skills such as team communication, time management, and problem solving.",
    exp_2_company: "Domosquare – Sleman, DI Yogyakarta",
    exp_2_date: "Jan 2025 – Feb 2025",
    exp_2_position: "DevOps & Hosting Support Intern",
    exp_2_desc_1:
      "Manage Ubuntu server administration, including basic system configuration and server service monitoring.",
    exp_2_desc_2:
      "Perform web hosting and control panel management to support client needs and internal systems.",
    exp_2_desc_3:
      "Handle 15+ customer technical troubleshooting cases related to hosting services.",
    exp_2_desc_4:
      "Support daily technical operations and gain practical understanding of production server environments and basic DevOps workflows.",

    org_title: "Organization",
    org_title_span: "Experience",
    org_1_title: "HackAttack – National Hackathon Event",
    org_1_date: "Jun 2025 – Dec 2025",
    org_1_position: "Head of Logistics Division",
    org_1_desc_1:
      "Responsible for planning, managing, and distributing logistics for a national-scale hackathon event.",
    org_1_desc_2:
      "Coordinate cross-divisional logistics teams to ensure availability of equipment, consumption, and technical needs of participants.",
    org_1_desc_3:
      "Manage time and operational communication, ensuring all logistics needs are available on time.",
    org_2_title: "Central Computer Improvement (CCI) – Telkom University",
    org_2_date: "Jan 2025 – Dec 2025",
    org_2_position: "Member of Network Department Study Group",
    org_2_desc_1:
      "Actively participate in computer network study programs and practices, covering Cisco basic networking, Ubuntu system administration, and introduction to DevOps concepts.",
    org_2_desc_2:
      "Involved in network and operating system configuration practices, including troubleshooting simulations.",
    org_2_desc_3:
      "Collaborate in technical discussions and group study sessions to improve members' technical competence.",
    org_2_desc_4:
      "Implement DevOps practices with docker containerization and CI/CD automation for JavaScript-based website projects.",
    org_3_title: "PANDA FIF – Telkom University",
    org_3_date: "Oct 2024 – May 2025",
    org_3_position: "Head of Consumption Division",
    org_3_desc_1:
      "Develop planning and distribution strategies for consumption to support various organizational activities.",
    org_3_desc_2:
      "Manage consumption budget and coordinate with vendors to ensure cost efficiency and service quality.",
    org_3_desc_3:
      "Ensure timely and equitable availability of consumption, thus supporting the smooth running of all event series.",
    org_4_title:
      "Information Technology Student Association – Telkom University",
    org_4_date: "Mar 2024 – May 2025",
    org_4_position: "Public Relations Staff",
    org_4_desc_1:
      "Manage external organizational communication, build relationships with internal and external institutions within Telkom University.",
    org_4_desc_2:
      "Serve as Head of Comparative Study Work Program, coordinating activity planning, inter-institutional communication, and event implementation.",
    org_4_desc_3:
      "Arrange team coordination and communication flow to expand collaborative networks and improve organizational image.",
    org_5_title: "NETWORK DIVISION MEMBER",
    org_5_date: "Jan 2025",
    org_5_position: "Student Activity Unit Central Computer Improvement",
    org_5_desc_1: "Conduct learning and training in the networking field",
    org_5_desc_2:
      "Active in activities held by the Central Computer Improvement Student Activity Unit",

    education_title: "Education",
    education_title_span: "& Training",
    education_formal: "Formal Education",
    education_training: "Training & Certification",
    edu_1_school: "Telkom University",
    edu_1_year: "2022 - Present",
    edu_1_major: "Bachelor of Information Technology",
    edu_2_school: "SMAN 1 Bukittinggi",
    edu_2_year: "2019 - 2022",
    edu_2_major: "Science Major",
    edu_3_school: "SMPN 1 Bukittinggi",
    edu_3_year: "2016 - 2019",
    edu_4_school: "SDN 08 Tarok Dipo Bukittinggi",
    edu_4_year: "2010 - 2016",
    training_1_name: "English Course",
    training_1_year: "Jul 2024 - Aug 2024",
    training_1_org: "Language Center",
    training_2_name: "Digital Marketing",
    training_2_year: "Feb 2025 - Mar 2025",
    training_2_org: "Meta Ads",
    training_3_name: "AI Training",
    training_3_year: "May 2025",
    training_3_org: "Elevate Indonesia",

    contact_title: "Contact",
    contact_title_span: "Me",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_address: "Address",
    address_text:
      "Sukapura, Dayeuhkolot, Bandung Regency, West Java, Indonesia, 40287",
    copyright: "All rights reserved.",

    typing_words: [
      "Technology Enthusiast.",
      "IT Infrastructure Enthusiast.",
      "Frontend Developer.",
      "DevOps Enthusiast.",
      "Blockchain Learner.",
    ],
  },
  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_projects: "Proyek",
    nav_experience: "Pengalaman",
    nav_organization: "Organisasi",
    nav_education: "Pendidikan",
    nav_contact: "Kontak",

    hero_greeting: "Halo, saya",
    hero_name: "Muhammad Zikra Fadly",
    hero_title: "Technology Enthusiast",
    hero_btn_contact: "Hubungi Saya",
    hero_btn_projects: "Lihat Proyek",
    hero_btn_experience: "Lihat Pengalaman",

    about_title: "Tentang",
    about_title_span: "Saya",
    about_text:
      "Seorang mahasiswa Teknologi Informasi dengan minat dan kompetensi dalam pengembangan web, pengembangan aplikasi mobile, dan infrastruktur TI. Berpengalaman dalam mendesain beberapa proyek web dan mobile, mengelola server berbasis Linux, web hosting, control panel, dan dukungan DevOps, serta berpengalaman dalam keterlibatan langsung dalam instalasi, konfigurasi, dan pemeliharaan sistem. Aktif dalam organisasi dan komite berskala nasional, dengan peran kepemimpinan yang mengasah koordinasi, manajemen logistik, komunikasi lintas tim, dan keterampilan pemecahan masalah. Memiliki pola kerja yang terstruktur, beradaptasi dengan lingkungan yang dinamis, dan secara efektif mengintegrasikan keterampilan teknis dengan kebutuhan operasional.",
    about_stats_1: "Organisasi & Kepanitiaan",
    about_stats_2: "Proyek",

    skills_title: "Keahlian",
    skills_title_span: "Teknis",
    skills_technical: "Teknis",
    skills_nontech: "Non-Teknis",
    skills_tech_1: "Microsoft Office (Word, Excel, PowerPoint).",
    skills_tech_2: "Google Workspace (Docs, Sheets, Slides).",
    skills_tech_3:
      "Bahasa pemrograman HTML, CSS, JavaScript, Java, PHP, Python, Go, Dart, Solidity.",
    skills_tech_4: "Frontend frameworks React JS, Vue JS, Next JS.",
    skills_tech_5: "Backend frameworks Laravel, Express.js, Spring Boot Java.",
    skills_tech_6: "Mobile development framework Flutter (Dart).",
    skills_tech_7:
      "Relational databases MySQL, PostgreSQL, SQL Server, Oracle Database, cloud database Supabase.",
    skills_tech_8:
      "Linux Ubuntu, web hosting control panel, Git/GitHub, network & server monitoring tools, Docker container.",
    skills_nontech_1: "Keterampilan Organisasi",
    skills_nontech_2: "Percaya Diri Tinggi",
    skills_nontech_3: "Kepemimpinan",
    skills_nontech_4: "Tanggung Jawab",
    skills_nontech_5: "Adaptabilitas",
    skills_nontech_6: "Hubungan Masyarakat",
    skills_nontech_7: "Penggalangan Dana",
    skills_nontech_8: "Logistik",

    projects_title: "Proyek",
    projects_title_span: "Unggulan",
    project_badge_web3: "Web3 (DAPP)",
    project_1_title: "Digital Diploma Tokenization",
    project_1_desc:
      "Implementasi ERC-721 Smart Contract untuk tokenisasi ijazah dan sertifikat prestasi menjadi aset NFT yang unik dan aman pada platform DApp/Web3.",
    project_2_title: "Interactive Quiz",
    project_2_desc:
      "Website berbasis React.js dengan tampilan elegan dan interaktif, soal kuis diambil langsung dari API openTDB secara real-time.",
    project_3_title: "Automated Web Server",
    project_3_desc:
      "Deployment Website NgopiYuk menggunakan Docker dan GitHub Actions CI/CD dalam infrastruktur Cloud.",
    project_4_title: "AI School Agent Scraper",
    project_4_desc:
      "Otomatisasi pemrosesan data sekolah dari CSV ke database Qdrant menggunakan AI Agent untuk pencarian semantik.",
    project_5_title: "TukangKu",
    project_5_desc:
      "Aplikasi mobile untuk pemesanan tukang membantu perbaikan rumah seperti atap bocor, air mati, dll.",
    project_6_title: "Survey Application",
    project_6_desc:
      "Sistem manajemen survey komprehensif dengan Spring Boot dan React untuk pembuatan dan analisis survey.",
    project_7_title: "Smart Parent Portal Website",
    project_7_desc:
      "Portal website untuk memudahkan orang tua mencari teknik pengasuhan yang tepat, dilengkapi saran milestone.",
    project_btn_preview: "Preview",
    project_btn_backend: "Backend",
    project_btn_frontend: "Frontend",
    project_btn_repo: "Repository",

    experience_title: "Pengalaman",
    experience_title_span: "Magang",
    exp_1_company: "PT Kimia Farma Tbk – Jakarta Pusat, DKI Jakarta",
    exp_1_date: "Jun 2025 – Sep 2025",
    exp_1_position: "OpCo & IT Infrastructure Intern",
    exp_1_desc_1:
      "Terlibat dalam 10+ kegiatan instalasi, konfigurasi, dan pemeliharaan sistem operasi berbasis Ubuntu.",
    exp_1_desc_2:
      "Melakukan troubleshooting harian pada hardware dan software untuk memastikan kelancaran operasional IT.",
    exp_1_desc_3:
      "Mendukung operasional IT internal antar divisi, termasuk monitoring sistem.",
    exp_1_desc_4:
      "Mengembangkan keterampilan profesional seperti komunikasi tim, manajemen waktu, dan problem solving.",
    exp_2_company: "Domosquare – Sleman, DI Yogyakarta",
    exp_2_date: "Jan 2025 – Feb 2025",
    exp_2_position: "DevOps & Hosting Support Intern",
    exp_2_desc_1:
      "Mengelola administrasi server Ubuntu, termasuk konfigurasi dasar sistem dan monitoring layanan server.",
    exp_2_desc_2:
      "Melakukan manajemen web hosting dan control panel untuk mendukung kebutuhan klien.",
    exp_2_desc_3:
      "Menangani 15+ kasus troubleshooting teknis pelanggan terkait layanan hosting.",
    exp_2_desc_4:
      "Mendukung operasional teknis harian dan memahami lingkungan server produksi serta alur kerja DevOps dasar.",

    org_title: "Pengalaman",
    org_title_span: "Organisasi",
    org_1_title: "HackAttack – Event Hackathon Nasional",
    org_1_date: "Jun 2025 – Dec 2025",
    org_1_position: "Kepala Divisi Logistik",
    org_1_desc_1:
      "Bertanggung jawab atas perencanaan, pengelolaan, dan pendistribusian logistik untuk event hackathon skala nasional.",
    org_1_desc_2:
      "Mengoordinasi tim logistik lintas divisi untuk memastikan ketersediaan peralatan, konsumsi, dan kebutuhan teknis peserta.",
    org_1_desc_3:
      "Mengelola waktu dan komunikasi operasional, memastikan semua kebutuhan logistik tersedia tepat waktu.",
    org_2_title: "Central Computer Improvement (CCI) – Telkom University",
    org_2_date: "Jan 2025 – Dec 2025",
    org_2_position: "Anggota Study Group Departemen Network",
    org_2_desc_1:
      "Berpartisipasi aktif dalam program studi jaringan komputer, mencakup Cisco dasar, administrasi sistem Ubuntu, dan pengenalan konsep DevOps.",
    org_2_desc_2:
      "Terlibat dalam praktik konfigurasi jaringan dan sistem operasi, termasuk simulasi troubleshooting.",
    org_2_desc_3:
      "Berkolaborasi dalam diskusi teknis dan sesi studi kelompok untuk meningkatkan kompetensi anggota.",
    org_2_desc_4:
      "Mengimplementasikan praktik DevOps dengan containerisasi Docker dan otomatisasi CI/CD untuk proyek website berbasis JavaScript.",
    org_3_title: "PANDA FIF – Telkom University",
    org_3_date: "Okt 2024 – Mei 2025",
    org_3_position: "Kepala Divisi Konsumsi",
    org_3_desc_1:
      "Menyusun strategi perencanaan dan pendistribusian konsumsi untuk mendukung berbagai kegiatan organisasi.",
    org_3_desc_2:
      "Mengelola anggaran konsumsi dan berkoordinasi dengan vendor untuk memastikan efisiensi biaya dan kualitas layanan.",
    org_3_desc_3:
      "Memastikan ketersediaan konsumsi tepat waktu dan merata, mendukung kelancaran seluruh rangkaian acara.",
    org_4_title: "Himpunan Mahasiswa Teknologi Informasi – Telkom University",
    org_4_date: "Mar 2024 – Mei 2025",
    org_4_position: "Staf Hubungan Masyarakat",
    org_4_desc_1:
      "Mengelola komunikasi eksternal organisasi, membangun hubungan dengan institusi internal dan eksternal di lingkungan Telkom University.",
    org_4_desc_2:
      "Menjabat sebagai Ketua Program Kerja Studi Banding, mengoordinasi perencanaan kegiatan, komunikasi antar institusi, dan pelaksanaan acara.",
    org_4_desc_3:
      "Mengatur koordinasi tim dan alur komunikasi untuk memperluas jejaring kolaboratif dan meningkatkan citra organisasi.",
    org_5_title: "ANGGOTA DIVISI NETWORK",
    org_5_date: "Jan 2025",
    org_5_position: "Unit Kegiatan Mahasiswa Central Computer Improvement",
    org_5_desc_1: "Melakukan pembelajaran dan pelatihan di bidang jaringan",
    org_5_desc_2: "Aktif dalam kegiatan yang diselenggarakan UKM CCI",

    education_title: "Pendidikan",
    education_title_span: "& Pelatihan",
    education_formal: "Pendidikan Formal",
    education_training: "Pelatihan & Sertifikasi",
    edu_1_school: "Universitas Telkom",
    edu_1_year: "2022 - Sekarang",
    edu_1_major: "Sarjana Teknologi Informasi",
    edu_2_school: "SMAN 1 Bukittinggi",
    edu_2_year: "2019 - 2022",
    edu_2_major: "Jurusan IPA",
    edu_3_school: "SMPN 1 Bukittinggi",
    edu_3_year: "2016 - 2019",
    edu_4_school: "SDN 08 Tarok Dipo Bukittinggi",
    edu_4_year: "2010 - 2016",
    training_1_name: "Kursus Bahasa Inggris",
    training_1_year: "Jul 2024 - Agu 2024",
    training_1_org: "Language Center",
    training_2_name: "Digital Marketing",
    training_2_year: "Feb 2025 - Mar 2025",
    training_2_org: "Meta Ads",
    training_3_name: "Pelatihan AI",
    training_3_year: "Mei 2025",
    training_3_org: "Elevate Indonesia",

    contact_title: "Kontak",
    contact_title_span: "Saya",
    contact_email: "Email",
    contact_phone: "Telepon",
    contact_address: "Alamat",
    address_text:
      "Sukapura, Dayeuhkolot, Kab. Bandung, Jawa Barat, Indonesia, 40287",
    copyright: "Hak Cipta Dilindungi.",

    typing_words: [
      "Technology Enthusiast.",
      "IT Infrastructure Enthusiast.",
      "Frontend Developer.",
      "DevOps Enthusiast.",
      "Blockchain Learner.",
    ],
  },
};

let currentLang = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  updateContent();

  const langBtn = document.getElementById("languageDropdown");
  if (langBtn) {
    langBtn.innerHTML =
      lang === "en"
        ? '<span class="language-flag">🇬🇧</span><span class="language-text">ENG</span>'
        : '<span class="language-flag">🇮🇩</span><span class="language-text">ID</span>';
  }

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    const itemLang = item.getAttribute("onclick")?.includes("en") ? "en" : "id";
    if (itemLang === lang) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  if (window.typed) {
    const typedWords = translations[lang]?.typing_words || [
      "Technology Enthusiast.",
      "IT Infrastructure Enthusiast.",
      "Frontend Developer.",
      "DevOps Enthusiast.",
      "Blockchain Learner.",
    ];
    window.typed.strings = typedWords;
    window.typed.reset();
  }
}

function updateContent() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en");
  }
  currentLang = localStorage.getItem("language");
  document.documentElement.lang = currentLang;
  updateContent();

  const navbar = document.querySelector(".navbar-nav");
  if (navbar && !document.getElementById("language-switcher-container")) {
    const langContainer = document.createElement("li");
    langContainer.className = "nav-item dropdown";
    langContainer.id = "language-switcher-container";
    langContainer.innerHTML = `
      <a class="nav-link dropdown-toggle language-dropdown" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="language-flag">${currentLang === "en" ? "🇬🇧" : "🇮🇩"}</span>
        <span class="language-text">${currentLang === "en" ? "ENG" : "ID"}</span>
      </a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
        <li><a class="dropdown-item ${currentLang === "en" ? "active" : ""}" href="#" onclick="setLanguage('en'); return false;">
          <span class="language-flag">🇬🇧</span> ENG
        </a></li>
        <li><a class="dropdown-item ${currentLang === "id" ? "active" : ""}" href="#" onclick="setLanguage('id'); return false;">
          <span class="language-flag">🇮🇩</span> ID
        </a></li>
      </ul>
    `;
    navbar.appendChild(langContainer);
  }
});
