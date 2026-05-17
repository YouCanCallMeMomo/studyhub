const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, TableBorders } = require("docx");
const fs = require("fs");

// Helper functions
function title(text) {
  return new Paragraph({
    heading: HeadingLevel.TITLE,
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [new TextRun({ text, bold: true, size: 36, font: "Calibri" })],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [new TextRun({ text, bold: true, size: 28, font: "Calibri", color: "1F4E79" })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
    children: [new TextRun({ text, bold: true, size: 24, font: "Calibri", color: "2E75B6" })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, size: 22, font: "Calibri", color: "404040" })],
  });
}

function para(text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text, size: 22, font: "Calibri" })],
  });
}

function bold_para(label, text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [
      new TextRun({ text: label, bold: true, size: 22, font: "Calibri" }),
      new TextRun({ text, size: 22, font: "Calibri" }),
    ],
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 60 },
    children: [new TextRun({ text, size: 22, font: "Calibri" })],
  });
}

function bullet_bold(label, text, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 60 },
    children: [
      new TextRun({ text: label, bold: true, size: 22, font: "Calibri" }),
      new TextRun({ text, size: 22, font: "Calibri" }),
    ],
  });
}

function empty() {
  return new Paragraph({ spacing: { after: 100 }, children: [] });
}

function caseStudyHeader(text) {
  return new Paragraph({
    spacing: { before: 300, after: 150 },
    shading: { fill: "E8F0FE" },
    children: [new TextRun({ text: "📝 " + text, bold: true, size: 24, font: "Calibri", color: "1A73E8" })],
  });
}

function makeTable(headers, rows) {
  const borderStyle = { style: BorderStyle.SINGLE, size: 1, color: "AAAAAA" };
  const borders = { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle };
  
  const headerRow = new TableRow({
    children: headers.map(h => new TableCell({
      borders,
      shading: { fill: "2E75B6" },
      children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 20, font: "Calibri", color: "FFFFFF" })] })],
    })),
  });
  
  const dataRows = rows.map(row => new TableRow({
    children: row.map(cell => new TableCell({
      borders,
      children: [new Paragraph({ children: [new TextRun({ text: cell, size: 20, font: "Calibri" })] })],
    })),
  }));
  
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, ...dataRows],
  });
}

// ===== BUILD DOCUMENT =====
const children = [];

// COVER
children.push(title("KISI-KISI UTS SOFTWARE ENGINEERING"));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 100 },
  children: [new TextRun({ text: "BINUS UNIVERSITY — SEMESTER 4", size: 28, font: "Calibri", color: "555555" })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 400 },
  children: [new TextRun({ text: "Format: 5 Soal Case Study", size: 24, font: "Calibri", color: "777777" })],
}));

// ==============================================================
// SOAL 1 (25%)
// ==============================================================
children.push(h1("SOAL 1 (25%) — Nature of Software, Processes, Agile & Scrum"));

// 1.1 Nature of Software
children.push(h2("1.1 The Nature of Software and Software Engineering"));
children.push(h3("Definisi Software"));
children.push(para("Software terdiri dari 3 elemen:"));
children.push(bullet_bold("Instructions (program komputer): ", "memberikan fungsionalitas yang diinginkan"));
children.push(bullet_bold("Data structures: ", "memungkinkan program memanipulasi informasi"));
children.push(bullet_bold("Descriptive information: ", "dokumen yang mendeskripsikan operasi dan penggunaan"));

children.push(h3("Karakteristik Software vs Hardware"));
children.push(makeTable(
  ["Aspek", "Software", "Hardware"],
  [
    ["Manufaktur", "Dikembangkan/di-engineer", "Di-manufaktur"],
    ["Keausan", "Tidak aus, tapi deteriorate", "Aus seiring waktu (bathtub curve)"],
    ["Komponen", "Kebanyakan custom-built", "Bisa menggunakan komponen standar"],
  ]
));
children.push(empty());

children.push(h3("Software Failure Curve"));
children.push(bullet_bold("Idealized curve: ", "failure rate tinggi di awal, lalu stabil rendah"));
children.push(bullet_bold("Actual curve: ", "setiap perubahan/update menyebabkan spike failure rate, baseline perlahan naik → 'software deterioration'"));

children.push(h3("7 Kategori Software"));
children.push(bullet_bold("System Software: ", "OS, compiler, driver, utility"));
children.push(bullet_bold("Application Software: ", "program standalone untuk kebutuhan bisnis"));
children.push(bullet_bold("Engineering/Scientific Software: ", "CAD, simulasi, analisis numerik"));
children.push(bullet_bold("Embedded Software: ", "software dalam produk (microwave, mobil)"));
children.push(bullet_bold("Product-line Software: ", "software produk komersial (MS Office)"));
children.push(bullet_bold("Web/Mobile Applications: ", "aplikasi web dan mobile"));
children.push(bullet_bold("AI Software: ", "expert systems, neural networks, ML"));

children.push(h3("Definisi Software Engineering"));
children.push(para("\"The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software.\" — IEEE"));

children.push(h3("Software Engineering Layers (4 Layers)"));
children.push(bullet_bold("Quality (fondasi): ", "fokus pada kualitas sebagai dasar"));
children.push(bullet_bold("Process: ", "framework kegiatan SE"));
children.push(bullet_bold("Methods: ", "teknik (analysis, design, testing)"));
children.push(bullet_bold("Tools: ", "alat bantu (IDE, testing tools)"));

children.push(h3("Essence of Practice"));
children.push(bullet("1. Understand the problem — siapa stakeholder? apa unknowns?"));
children.push(bullet("2. Plan a solution — ada pola? pernah lihat masalah serupa?"));
children.push(bullet("3. Carry out the plan — implementasi, review setiap komponen"));
children.push(bullet("4. Examine the result — testing, validasi terhadap requirement"));

// 1.2 Software Processes
children.push(h2("1.2 Software Processes and Development Life Cycle Models"));
children.push(h3("Generic Process Framework (5 Aktivitas)"));
children.push(bullet_bold("Communication: ", "kolaborasi dengan customer, requirement gathering"));
children.push(bullet_bold("Planning: ", "project plan, jadwal, risiko, resources"));
children.push(bullet_bold("Modeling: ", "analysis & design (membuat model/blueprint)"));
children.push(bullet_bold("Construction: ", "code generation & testing"));
children.push(bullet_bold("Deployment: ", "delivery, feedback dari customer"));

children.push(h3("Process Flow Types"));
children.push(bullet_bold("Linear: ", "urut dari Communication → Deployment"));
children.push(bullet_bold("Iterative: ", "mengulang satu/beberapa aktivitas sebelum lanjut"));
children.push(bullet_bold("Evolutionary: ", "circular, setiap putaran versi lebih lengkap"));
children.push(bullet_bold("Parallel: ", "beberapa aktivitas berjalan bersamaan"));

children.push(h3("Prescriptive Process Models"));
children.push(bold_para("A. Waterfall Model: ", "Linear sequential. Cocok untuk requirement stabil dan jelas. Kekurangan: tidak fleksibel, working software baru di akhir."));
children.push(bold_para("B. V-Model: ", "Setiap fase development punya pasangan fase testing. Menekankan verification & validation di setiap level."));
children.push(bold_para("C. Incremental Model: ", "Menghasilkan software dalam increments bertahap. Increment pertama = core product. Cocok untuk deadline ketat."));
children.push(bold_para("D. Prototyping: ", "Buat prototype cepat untuk klarifikasi requirement. Bahaya: prototype bisa jadi produk final tanpa kualitas."));
children.push(bold_para("E. Spiral Model (Boehm): ", "Risk-driven. Setiap loop: Planning → Risk Analysis → Engineering → Customer Evaluation. Cocok untuk proyek besar berisiko."));

// 1.3 Agile
children.push(h2("1.3 Agile Principle & Lean Foundations"));
children.push(h3("4 Values Agile Manifesto"));
children.push(bullet("Individuals and interactions OVER processes and tools"));
children.push(bullet("Working software OVER comprehensive documentation"));
children.push(bullet("Customer collaboration OVER contract negotiation"));
children.push(bullet("Responding to change OVER following a plan"));

children.push(h3("12 Prinsip Agile (Ringkasan)"));
children.push(bullet("Prioritas: memuaskan customer melalui early & continuous delivery"));
children.push(bullet("Welcome changing requirements, bahkan di tahap akhir"));
children.push(bullet("Deliver working software frequently (prefer lebih pendek)"));
children.push(bullet("Business & developers bekerja sama daily"));
children.push(bullet("Bangun proyek di sekitar motivated individuals"));
children.push(bullet("Face-to-face conversation = komunikasi paling efektif"));
children.push(bullet("Working software = ukuran utama kemajuan"));
children.push(bullet("Sustainable development — pace konstan"));
children.push(bullet("Technical excellence & good design"));
children.push(bullet("Simplicity — memaksimalkan pekerjaan yang TIDAK dilakukan"));
children.push(bullet("Self-organizing teams menghasilkan design terbaik"));
children.push(bullet("Tim merefleksikan cara menjadi lebih efektif secara berkala"));

children.push(h3("7 Prinsip Lean Software Development"));
children.push(bullet_bold("Eliminate Waste: ", "hapus semua yang tidak menambah value"));
children.push(bullet_bold("Amplify Learning: ", "belajar dari feedback cepat"));
children.push(bullet_bold("Decide as Late as Possible: ", "keputusan saat info paling lengkap"));
children.push(bullet_bold("Deliver as Fast as Possible: ", "semakin cepat deliver, semakin cepat feedback"));
children.push(bullet_bold("Empower the Team: ", "berikan otoritas ke tim"));
children.push(bullet_bold("Build Integrity In: ", "kualitas dari awal, bukan testing di akhir"));
children.push(bullet_bold("See the Whole: ", "lihat sistem secara keseluruhan"));

// 1.4 Scrum
children.push(h2("1.4 Scrum Framework"));
children.push(h3("Scrum Roles"));
children.push(bullet_bold("Product Owner: ", "menentukan fitur, prioritas backlog, accept/reject work"));
children.push(bullet_bold("Scrum Master: ", "servant-leader, menghapus impediments, memastikan Scrum dijalankan"));
children.push(bullet_bold("Development Team: ", "cross-functional, self-organizing, 5-9 orang ideal"));

children.push(h3("Scrum Artifacts"));
children.push(bullet_bold("Product Backlog: ", "daftar semua fitur/requirement, diurutkan prioritas oleh PO"));
children.push(bullet_bold("Sprint Backlog: ", "subset product backlog untuk sprint tertentu"));
children.push(bullet_bold("Product Increment: ", "hasil kerja sprint yang 'Done' dan potentially shippable"));

children.push(h3("Scrum Events"));
children.push(bullet_bold("Sprint: ", "time-box 1-4 minggu"));
children.push(bullet_bold("Sprint Planning: ", "tentukan apa yang akan dikerjakan & bagaimana"));
children.push(bullet_bold("Daily Scrum: ", "15 menit standup — kemarin, hari ini, hambatan"));
children.push(bullet_bold("Sprint Review: ", "demo increment ke stakeholder"));
children.push(bullet_bold("Sprint Retrospective: ", "refleksi: apa yang baik? apa yang perlu diperbaiki?"));

children.push(h3("User Stories"));
children.push(para("Format: \"As a [role], I want [feature], so that [benefit]\""));
children.push(para("Contoh: \"As a student, I want to view my grades online, so that I can track my academic progress.\""));

// CONTOH SOAL 1
children.push(caseStudyHeader("CONTOH SOAL & JAWABAN — SOAL 1"));
children.push(h3("Case Study:"));
children.push(para("PT TechnoVision ingin mengembangkan aplikasi e-learning untuk universitas. Requirement belum sepenuhnya jelas karena stakeholder dari berbagai fakultas memiliki kebutuhan berbeda. Tim development terdiri dari 7 orang developer berpengalaman. Budget terbatas dan deadline 6 bulan. Stakeholder ingin melihat progress secara berkala."));
children.push(h3("Pertanyaan:"));
children.push(bullet("1. Jelaskan mengapa Agile/Scrum lebih tepat dibanding Waterfall untuk proyek ini! (10 poin)"));
children.push(bullet("2. Rancang Scrum implementation untuk proyek ini termasuk roles, sprint planning, dan artifacts! (10 poin)"));
children.push(bullet("3. Bagaimana Lean principles dapat diterapkan untuk memaksimalkan value delivery? (5 poin)"));

children.push(h3("Jawaban 1 — Mengapa Agile/Scrum:"));
children.push(bullet("Requirement belum jelas → Waterfall butuh requirement lengkap di awal, Agile welcome changing requirements"));
children.push(bullet("Stakeholder beragam → Agile mendukung customer collaboration dan feedback berkala via Sprint Review"));
children.push(bullet("Tim 7 orang berpengalaman → sesuai ukuran ideal Scrum (5-9), cocok self-organizing"));
children.push(bullet("Deadline 6 bulan → sprint 2 minggu = ~12 sprint, early & continuous delivery"));
children.push(bullet("Stakeholder ingin lihat progress → Sprint Review setiap akhir sprint"));

children.push(h3("Jawaban 2 — Scrum Implementation:"));
children.push(bold_para("Roles: ", "PO = perwakilan universitas, Scrum Master = senior developer, Dev Team = 5 developer"));
children.push(bold_para("Sprint: ", "2 minggu, 12 sprint total. Sprint 1-2: core + login. Sprint 3-4: manajemen kursus. Sprint 5-6: quiz. Sprint 7-8: forum. Sprint 9-10: dashboard. Sprint 11-12: polish."));
children.push(bold_para("Artifacts: ", "Product Backlog (semua fitur, MoSCoW priority), Sprint Backlog (user stories per sprint), Increment (shippable product setiap sprint)"));

children.push(h3("Jawaban 3 — Lean Principles:"));
children.push(bullet("Eliminate Waste: hanya bangun fitur yang dibutuhkan berdasarkan prioritas PO"));
children.push(bullet("Amplify Learning: Sprint Review & Retrospective sebagai feedback"));
children.push(bullet("Deliver Fast: Sprint 2 minggu untuk rapid delivery"));
children.push(bullet("Build Integrity In: automated testing & code review setiap sprint"));

// ==============================================================
// SOAL 2 (15%)
// ==============================================================
children.push(h1("SOAL 2 (15%) — Design Concepts & Requirements Engineering"));

children.push(h2("2.1 Design Concepts"));
children.push(h3("Prinsip Design Fundamental"));

children.push(bold_para("1. Abstraction: ", "Menyembunyikan detail. Procedural (function openDoor()) dan Data (class Door dgn interface)"));
children.push(bold_para("2. Modularity: ", "Membagi software menjadi modul independen. Optimal: tidak terlalu sedikit/banyak."));
children.push(bold_para("3. Information Hiding: ", "Modul menyembunyikan internal details, diakses via well-defined interface. Mengurangi side effects."));
children.push(bold_para("4. Separation of Concerns: ", "Bagi masalah besar menjadi sub-masalah kecil yang ditangani independen."));
children.push(bold_para("5. Refactoring: ", "Ubah struktur internal tanpa ubah external behavior. Tujuan: simplify, reduce complexity."));

children.push(h3("Cohesion & Coupling"));
children.push(para("Prinsip: High Cohesion + Low Coupling = Good Design"));
children.push(makeTable(
  ["Cohesion (dalam modul)", "Keterangan", "Kualitas"],
  [
    ["Functional", "Semua elemen untuk satu fungsi", "Terbaik"],
    ["Sequential", "Output = input berikutnya", "Baik"],
    ["Communicational", "Operasi pada data sama", "Baik"],
    ["Coincidental", "Tidak berhubungan", "Terburuk"],
  ]
));
children.push(empty());
children.push(makeTable(
  ["Coupling (antar modul)", "Keterangan", "Kualitas"],
  [
    ["Data", "Parameter data sederhana", "Terbaik"],
    ["Stamp", "Data structure", "Baik"],
    ["Control", "Flag/control", "Cukup"],
    ["Content", "Modifikasi isi modul lain", "Terburuk"],
  ]
));
children.push(empty());

children.push(h2("2.2 Requirements Engineering"));
children.push(h3("7 Langkah Requirements Engineering"));
children.push(bullet_bold("1. Inception: ", "Identifikasi stakeholders, basic understanding of problem"));
children.push(bullet_bold("2. Elicitation: ", "Menggali requirements (interviews, questionnaires, observation, workshops)"));
children.push(bullet_bold("3. Elaboration: ", "Memperluas dan memperinci requirements, buat analysis model"));
children.push(bullet_bold("4. Negotiation: ", "Selesaikan konflik antar stakeholders, prioritaskan requirements"));
children.push(bullet_bold("5. Specification: ", "Dokumentasikan secara formal (SRS document)"));
children.push(bullet_bold("6. Validation: ", "Periksa benar & lengkap (review, prototyping, test-case generation)"));
children.push(bullet_bold("7. Management: ", "Kelola perubahan requirements, traceability"));

children.push(h3("Tipe Requirements"));
children.push(bold_para("Functional: ", "Apa yang sistem harus lakukan. Contoh: 'Sistem harus memungkinkan user login dengan email & password'"));
children.push(bold_para("Non-Functional: ", "Kualitas & constraint (Performance, Security, Usability, Reliability, Scalability)"));

// CONTOH SOAL 2
children.push(caseStudyHeader("CONTOH SOAL & JAWABAN — SOAL 2"));
children.push(h3("Case Study:"));
children.push(para("Sebuah rumah sakit ingin membangun Sistem Informasi Rekam Medis Elektronik (SIRME). Digunakan oleh dokter, perawat, dan admin. Data pasien sangat sensitif."));
children.push(h3("Pertanyaan & Jawaban:"));
children.push(bold_para("Functional Requirements: ", "(1) Dokter mencatat diagnosis & resep digital, (2) Perawat mencatat vital signs, (3) Admin mendaftarkan pasien baru, (4) Riwayat medis lengkap bisa diakses dokter berwenang, (5) Pencetakan resep otomatis"));
children.push(bold_para("Non-Functional: ", "(1) Security: data terenkripsi AES-256 + audit log, (2) Performance: response time <3 detik, (3) Usability: training 30 menit cukup"));
children.push(bold_para("Information Hiding: ", "Modul Autentikasi menyembunyikan algoritma enkripsi. Modul lain hanya panggil authenticate(). Jika ubah AES-128 ke AES-256, hanya modul autentikasi yang berubah."));
children.push(bold_para("Separation of Concerns: ", "Patient Management, Clinical Records, Authentication, Reporting → masing-masing modul terpisah, develop & test independen."));

// ==============================================================
// SOAL 3 (15%)
// ==============================================================
children.push(h1("SOAL 3 (15%) — Requirements Modeling & UML, Design Principles"));

children.push(h2("3.1 UML Diagrams"));
children.push(h3("Use Case Diagram"));
children.push(bullet_bold("Actor: ", "pengguna/sistem eksternal (stick figure)"));
children.push(bullet_bold("Use Case: ", "fungsi sistem (ellipse)"));
children.push(bullet_bold("Include: ", "use case A SELALU membutuhkan B (<<include>>)"));
children.push(bullet_bold("Extend: ", "use case B OPSIONAL memperluas A (<<extend>>)"));
children.push(bullet_bold("Generalization: ", "inheritance antar aktor/use case"));

children.push(h3("Class Diagram"));
children.push(para("Menggambarkan struktur statis: class, atribut, method, dan relasi."));
children.push(makeTable(
  ["Relasi", "Simbol", "Keterangan", "Contoh"],
  [
    ["Association", "———", "Hubungan umum", "Student — Course"],
    ["Aggregation", "◇——", "has-a (weak)", "Department ◇ Professor"],
    ["Composition", "◆——", "has-a (strong)", "House ◆ Room"],
    ["Inheritance", "△——", "is-a", "Dog △ Animal"],
    ["Dependency", "- - ->", "Bergantung sementara", "Controller --> Service"],
  ]
));
children.push(empty());
children.push(para("Multiplicity: 1 (tepat satu), 0..1 (nol atau satu), * (nol atau lebih), 1..* (satu atau lebih)"));

children.push(h3("Sequence Diagram"));
children.push(para("Menggambarkan interaksi objek dalam urutan waktu. Komponen: Object, Lifeline, Message, Activation bar, Return message, Alt/Loop fragments."));

children.push(h3("Activity Diagram"));
children.push(para("Menggambarkan workflow/alur proses. Komponen: Initial/Final Node, Activity, Decision Node, Fork/Join, Swimlanes."));

children.push(h3("State Diagram"));
children.push(para("Menggambarkan state transitions sebuah objek. Contoh Order: Created → Paid → Shipped → Delivered / Cancelled."));

children.push(h2("3.2 SOLID Principles"));
children.push(bullet_bold("S — Single Responsibility: ", "Class hanya punya SATU alasan untuk berubah. Pisahkan Employee (data), EmployeeReportGenerator (report), EmployeeRepository (DB)."));
children.push(bullet_bold("O — Open/Closed: ", "Open for extension, closed for modification. Gunakan interface Shape dgn method area(), tambah Triangle tanpa ubah kode lama."));
children.push(bullet_bold("L — Liskov Substitution: ", "Subclass harus bisa menggantikan parent tanpa error. Square extends Rectangle yang behavior setWidth() berbeda = SALAH."));
children.push(bullet_bold("I — Interface Segregation: ", "Jangan paksa client depend pada interface yang tak digunakan. Pisah Worker menjadi Workable, Eatable, Sleepable."));
children.push(bullet_bold("D — Dependency Inversion: ", "High-level modules depend pada abstraction, bukan concrete. NotificationService depend pada interface MessageSender."));

children.push(h3("Prinsip Tambahan"));
children.push(bullet_bold("DRY: ", "Don't Repeat Yourself — satu representasi per knowledge"));
children.push(bullet_bold("KISS: ", "Keep It Simple, Stupid — sesederhana mungkin"));
children.push(bullet_bold("YAGNI: ", "You Aren't Gonna Need It — jangan implementasi sampai dibutuhkan"));

// CONTOH SOAL 3
children.push(caseStudyHeader("CONTOH SOAL & JAWABAN — SOAL 3"));
children.push(para("Case Study: Sistem Perpustakaan Digital — mahasiswa pinjam buku digital, dosen upload materi, admin kelola katalog. Batas pinjam 14 hari, perpanjang 1x."));
children.push(bold_para("Use Case Diagram: ", "Actors: Mahasiswa, Dosen, Admin, Sistem Notifikasi. Use Cases: Login, Search Buku, Pinjam Buku, Perpanjang (<<extend>>), Kembalikan, Upload Materi, Kelola Katalog, Kelola User, Kirim Notifikasi (<<include>>), Lihat Riwayat."));
children.push(bold_para("SRP: ", "Book (data), LoanService (logika pinjam), NotificationService (notifikasi), BookRepository (DB) — masing-masing satu tanggung jawab."));
children.push(bold_para("OCP: ", "Interface NotificationChannel → EmailNotification, PushNotification. Tambah WhatsApp TANPA ubah NotificationService."));
children.push(bold_para("DIP: ", "LoanService depend pada interface BookRepository, bukan SQLBookRepository langsung."));

// ==============================================================
// SOAL 4 (25%)
// ==============================================================
children.push(h1("SOAL 4 (25%) — Software Architecture Design"));

children.push(h2("4.1 Architectural Styles"));
children.push(h3("1. Layered Architecture"));
children.push(para("Presentation → Business Logic → Data Access → Database. Setiap layer hanya komunikasi dengan layer di atas/bawahnya. Contoh: aplikasi enterprise."));

children.push(h3("2. Client-Server"));
children.push(para("Client kirim request, server proses & response. Kelebihan: sentralisasi data. Kekurangan: single point of failure."));

children.push(h3("3. Pipe and Filter"));
children.push(para("Data mengalir melalui filter (transformasi). Contoh: Compiler (lexer → parser → code generator), UNIX pipes."));

children.push(h3("4. Repository"));
children.push(para("Semua komponen akses satu pusat data bersama. Contoh: IDE (code, errors diakses oleh editor, compiler, debugger)."));

children.push(h3("5. Microservices"));
children.push(para("Sistem dipecah jadi service kecil independen, masing-masing punya DB sendiri. Komunikasi via API/message queue. Contoh: Netflix, Gojek."));

children.push(h3("6. MVC (Model-View-Controller)"));
children.push(para("Model (data), View (tampilan), Controller (input handler). Contoh: Laravel, Spring MVC."));

children.push(h3("7. Event-Driven"));
children.push(para("Komunikasi via events. Event Producer → Event Bus → Event Consumer. Loose coupling, asynchronous."));

children.push(h2("4.2 Architecture Documentation — 4+1 View Model"));
children.push(bullet_bold("Logical View: ", "Struktur fungsional (Class Diagram, Package Diagram)"));
children.push(bullet_bold("Process View: ", "Runtime behavior, concurrency (Activity, Sequence Diagram)"));
children.push(bullet_bold("Development View: ", "Organisasi kode (Component Diagram)"));
children.push(bullet_bold("Physical View: ", "Deployment ke hardware (Deployment Diagram)"));
children.push(bullet_bold("Scenarios: ", "Use cases yang menghubungkan semua view"));

children.push(h2("4.3 Design Patterns"));
children.push(h3("Creational Patterns"));
children.push(bullet_bold("Singleton: ", "Satu instance saja. Contoh: DB connection pool, Logger."));
children.push(bullet_bold("Factory Method: ", "Subclass tentukan class mana yang di-instantiate. Contoh: DocumentFactory."));
children.push(bullet_bold("Abstract Factory: ", "Keluarga objek terkait. Contoh: UIFactory (Dark/Light theme)."));

children.push(h3("Structural Patterns"));
children.push(bullet_bold("Facade: ", "Interface sederhana untuk subsistem kompleks. Contoh: OrderFacade."));
children.push(bullet_bold("Adapter: ", "Konversi interface. Contoh: PaymentAdapter untuk API pihak ketiga."));
children.push(bullet_bold("Decorator: ", "Tambah behavior dinamis. Contoh: EncryptedStream decorator ke FileStream."));

children.push(h3("Behavioral Patterns"));
children.push(bullet_bold("Observer: ", "One-to-many: saat state berubah, semua dependents dinotifikasi. Contoh: Sistem notifikasi order."));
children.push(bullet_bold("Strategy: ", "Keluarga algoritma yang saling menggantikan. Contoh: SortStrategy (BubbleSort, QuickSort)."));
children.push(bullet_bold("Command: ", "Enkapsulasi request sebagai objek; undo/redo. Contoh: Text editor."));

// CONTOH SOAL 4
children.push(caseStudyHeader("CONTOH SOAL & JAWABAN — SOAL 4"));
children.push(para("Case Study: GoMart — e-commerce marketplace UMKM. Fitur: katalog, keranjang, pembayaran (multiple gateway), pengiriman (JNE/J&T/SiCepat), chat, notifikasi real-time. Target: 10K → 1M user dalam 2 tahun."));
children.push(h3("Rekomendasi: Microservices Architecture"));
children.push(bullet("Skalabilitas independen per service (Payment scale up saat flash sale)"));
children.push(bullet("Technology agnostic (PostgreSQL untuk Katalog, MongoDB untuk Chat)"));
children.push(bullet("Fault isolation (Chat down ≠ Payment down)"));
children.push(bullet("Independent deployment per service"));
children.push(h3("Design Patterns yang Diterapkan:"));
children.push(bullet_bold("Facade: ", "OrderFacade menyederhanakan checkout (validateStock → calculateTotal → processPayment → createShipment → sendConfirmation)"));
children.push(bullet_bold("Observer: ", "OrderStatusSubject notifikasi otomatis ke EmailService, PushService, DashboardUI saat status order berubah"));
children.push(bullet_bold("Strategy: ", "PaymentStrategy — GopayPayment, OVOPayment, BankTransferPayment dipilih saat runtime"));

// ==============================================================
// SOAL 5 (15%)
// ==============================================================
children.push(h1("SOAL 5 (15%) — Project Management, Estimasi, Scheduling, Risk"));

children.push(h2("5.1 Project Management"));
children.push(h3("4P: People, Product, Process, Project"));
children.push(h3("W5HH: Why, What, When, Who, Where, How, How much"));

children.push(h2("5.2 Estimation Techniques"));
children.push(h3("Function Point (FP)"));
children.push(makeTable(
  ["Tipe", "Simple", "Average", "Complex"],
  [
    ["External Input (EI)", "3", "4", "6"],
    ["External Output (EO)", "4", "5", "7"],
    ["External Inquiry (EQ)", "3", "4", "6"],
    ["Internal Logical File (ILF)", "7", "10", "15"],
    ["External Interface File (EIF)", "5", "7", "10"],
  ]
));
children.push(empty());
children.push(para("FP = UFP × (0.65 + 0.01 × Σ Fi)"));

children.push(h3("COCOMO II (Basic)"));
children.push(para("Effort (PM) = a × (KLOC)^b  |  Duration (M) = c × (Effort)^d"));
children.push(makeTable(
  ["Mode", "a", "b", "c", "d", "Keterangan"],
  [
    ["Organic", "2.4", "1.05", "2.5", "0.38", "Proyek kecil, tim berpengalaman"],
    ["Semi-detached", "3.0", "1.12", "2.5", "0.35", "Campuran pengalaman"],
    ["Embedded", "3.6", "1.20", "2.5", "0.32", "Kompleks, constraint ketat"],
  ]
));
children.push(empty());

children.push(h2("5.3 Project Scheduling — Critical Path Method"));
children.push(para("Critical Path = jalur terpanjang = durasi minimum proyek. Task di CP punya Slack = 0."));
children.push(bullet("Forward Pass: ES, EF (ES = max(EF predecessors), EF = ES + Duration)"));
children.push(bullet("Backward Pass: LS, LF (LF = min(LS successors), LS = LF - Duration)"));
children.push(bullet("Slack = LS - ES. Critical Path = semua task Slack = 0"));

children.push(h3("Earned Value Analysis"));
children.push(bullet_bold("SPI: ", "BCWP/BCWS. >1 = ahead, <1 = behind schedule"));
children.push(bullet_bold("CPI: ", "BCWP/ACWP. >1 = under budget, <1 = over budget"));

children.push(h2("5.4 Risk Analysis and Management"));
children.push(h3("Kategori: Project Risk, Technical Risk, Business Risk"));
children.push(h3("Proses Risk Management"));
children.push(bullet_bold("1. Identification: ", "Daftar semua risiko potensial (checklist, brainstorming)"));
children.push(bullet_bold("2. Analysis: ", "Nilai Probability × Impact = Risk Exposure"));
children.push(bullet_bold("3. Planning: ", "Avoidance, Mitigation, Contingency, Transfer"));
children.push(bullet_bold("4. Monitoring: ", "Pantau berkala, update risk table, identifikasi risiko baru"));

// CONTOH SOAL 5
children.push(caseStudyHeader("CONTOH SOAL & JAWABAN — SOAL 5"));
children.push(para("Case Study: PT InnoTech — Sistem Inventori 50 cabang retail. 8 developer, deadline 8 bulan, 45 KLOC, 2 senior akan resign dalam 3 bulan."));

children.push(h3("COCOMO Semi-detached:"));
children.push(para("Effort = 3.0 × (45)^1.12 = 195.45 PM. Duration = 2.5 × (195.45)^0.35 = 17.7 bulan ≈ 18 bulan."));
children.push(para("Deadline 8 bulan TIDAK FEASIBLE. Rekomendasi: kurangi scope, tambah developer, atau perpanjang deadline."));

children.push(h3("Risk Analysis:"));
children.push(makeTable(
  ["Risiko", "Prob", "Impact", "RE", "Strategi"],
  [
    ["2 senior resign", "0.9", "9", "8.1", "Mitigation: knowledge transfer, rekrut pengganti"],
    ["Integrasi POS gagal", "0.5", "8", "4.0", "Mitigation: prototype integrasi awal"],
    ["Deadline tidak realistis", "0.8", "7", "5.6", "Avoidance: negosiasi scope, incremental delivery"],
    ["Kompatibilitas scanner", "0.4", "5", "2.0", "Contingency: standarisasi hardware"],
    ["Sinkronisasi 50 cabang", "0.6", "8", "4.8", "Mitigation: offline-first, conflict resolution"],
  ]
));
children.push(empty());

children.push(h3("Critical Path:"));
children.push(para("T1(3) → T2(4) → T4(6) → T6(4) → T8(4) → T9(2) = 23 minggu ≈ 5.75 bulan"));
children.push(para("Task T3, T5, T7 memiliki slack sehingga bisa terlambat tanpa memengaruhi total durasi."));

// Build document
const doc = new Document({
  sections: [{ children }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("c:\\SEMESTER4\\SOFENG\\KISI_KISI_UTS_SOFENG.docx", buffer);
  console.log("✅ Word document berhasil dibuat: KISI_KISI_UTS_SOFENG.docx");
});
