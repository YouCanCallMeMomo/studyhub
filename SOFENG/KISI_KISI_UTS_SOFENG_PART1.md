# 📘 KISI-KISI UTS SOFTWARE ENGINEERING - BINUS UNIVERSITY
## SEMESTER 4 — FORMAT: 5 SOAL CASE STUDY

---

# SOAL 1 (25%) — The Nature of Software & SE, Software Processes, Agile & Lean, Scrum

---

## 1.1 The Nature of Software and Software Engineering

### Definisi Software
Software adalah:
1. **Instructions (program komputer)** — memberikan fungsionalitas yang diinginkan
2. **Data structures** — memungkinkan program memanipulasi informasi
3. **Descriptive information** — dokumen hard copy dan virtual yang mendeskripsikan operasi dan penggunaan program

### Karakteristik Software (vs Hardware)
| Aspek | Software | Hardware |
|-------|----------|----------|
| Manufaktur | Dikembangkan/di-engineer | Di-manufaktur |
| Keausan | Tidak aus (wear out), tapi **deteriorate** | Aus seiring waktu |
| Komponen | Kebanyakan **custom-built** | Bisa menggunakan komponen standar |
| Kurva Failure | "Idealized" vs "Actual" curve | Bathtub curve |

### Software Failure Curve
- **Idealized curve**: failure rate tinggi di awal, lalu stabil rendah
- **Actual curve**: setiap kali ada perubahan/update, failure rate naik lagi (spike), dan baseline-nya perlahan naik → ini disebut **software deterioration**

### Kategori Software (7 Kategori)
1. **System Software** — OS, compiler, driver, utility
2. **Application Software** — standalone program untuk kebutuhan bisnis
3. **Engineering/Scientific Software** — CAD, simulasi, analisis numerik
4. **Embedded Software** — software dalam produk (microwave, mobil)
5. **Product-line Software** — software yang dijual sebagai produk (MS Office)
6. **Web/Mobile Applications** — aplikasi web dan mobile
7. **Artificial Intelligence Software** — expert systems, neural networks, ML

### Definisi Software Engineering
> "The application of a **systematic, disciplined, quantifiable** approach to the development, operation, and maintenance of software." — IEEE

### Software Engineering Layers (4 Layers)
```
        ┌─────────────┐
        │    Tools     │  ← alat bantu (IDE, testing tools)
        ├─────────────┤
        │   Methods    │  ← teknik (analysis, design, testing)
        ├─────────────┤
        │   Process    │  ← framework kegiatan SE
        ├─────────────┤
        │   Quality    │  ← fondasi, fokus pada kualitas
        └─────────────┘
```

### Software Engineering Practice (Essence of Practice)
1. **Understand the problem** — siapa stakeholder? apa unknowns? bisa di-decompose?
2. **Plan a solution** — pernah lihat masalah serupa? ada pola? 
3. **Carry out the plan** — apakah solusi sesuai rencana? review setiap komponen
4. **Examine the result** — testing, validasi terhadap requirement

---

## 1.2 Software Processes and Development Life Cycle Models

### Generic Process Framework
5 aktivitas framework:
1. **Communication** — kolaborasi dengan customer, requirement gathering
2. **Planning** — project plan, jadwal, risiko, resources
3. **Modeling** — analysis & design (membuat model/blueprint)
4. **Construction** — code generation & testing
5. **Deployment** — delivery, feedback dari customer

### Umbrella Activities
Aktivitas yang mendukung sepanjang proses:
- Software project tracking & control
- Risk management
- Software quality assurance
- Technical reviews
- Measurement
- Configuration management
- Reusability management
- Work product preparation & production

### Process Flow Types
1. **Linear Process Flow** → Communication → Planning → Modeling → Construction → Deployment (urut)
2. **Iterative Process Flow** → mengulang satu/beberapa aktivitas sebelum lanjut
3. **Evolutionary Process Flow** → circular, setiap putaran menghasilkan versi lebih lengkap
4. **Parallel Process Flow** → beberapa aktivitas berjalan bersamaan

### Prescriptive Process Models

#### A. Waterfall Model (Linear Sequential)
```
Communication → Planning → Modeling → Construction → Deployment
```
- **Kelebihan**: Simpel, mudah dipahami, cocok untuk requirement stabil
- **Kekurangan**: Tidak fleksibel, customer harus sabar, working software baru di akhir
- **Cocok untuk**: Proyek dengan requirement yang jelas dan tidak berubah

#### B. V-Model
```
Requirements ─────────────────────── Acceptance Testing
   Analysis ───────────────────── System Testing
      Design ─────────────── Integration Testing
         Coding ──────── Unit Testing
```
- Setiap fase development punya pasangan fase testing
- Menekankan **verification & validation** di setiap level

#### C. Incremental Model
- Menghasilkan software dalam **increments** (versi bertahap)
- Increment pertama = **core product** (fitur dasar)
- Setiap increment menambah fungsionalitas
- Cocok ketika staffing terbatas atau deadline ketat

#### D. Evolutionary Models

**Prototyping:**
- Membuat prototype cepat untuk klarifikasi requirement
- Customer evaluasi → refine → iterate
- **Bahaya**: prototype bisa jadi produk final tanpa kualitas

**Spiral Model (Boehm):**
- Menggabungkan iterative + systematic dari waterfall
- Setiap loop: **Planning → Risk Analysis → Engineering → Customer Evaluation**
- **Risk-driven** — sangat cocok untuk proyek besar berisiko tinggi
- Realistic untuk large-scale systems

#### E. Concurrent Development Model
- Semua aktivitas bisa terjadi bersamaan
- Menggunakan **state diagram** untuk setiap aktivitas
- Cocok untuk proyek client/server dan component-based

---

## 1.3 Agile Principle & Lean Foundations

### Manifesto for Agile Software Development (4 Values)
1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

### 12 Prinsip Agile
1. Prioritas utama: memuaskan customer melalui **early & continuous delivery**
2. **Welcome changing requirements**, bahkan di tahap akhir
3. Deliver working software **frequently** (minggu-bulan, prefer lebih pendek)
4. Business people & developers harus **bekerja sama daily**
5. Bangun proyek di sekitar **motivated individuals**, berikan trust
6. **Face-to-face conversation** = metode komunikasi paling efektif
7. **Working software** = ukuran utama kemajuan
8. Agile mendukung **sustainable development** (pace konstan)
9. Perhatian pada **technical excellence & good design**
10. **Simplicity** — memaksimalkan pekerjaan yang TIDAK dilakukan
11. Tim yang **self-organizing** menghasilkan arsitektur/design terbaik
12. Tim **merefleksikan** cara menjadi lebih efektif secara berkala

### Agile vs Plan-Driven
| Aspek | Agile | Plan-Driven |
|-------|-------|-------------|
| Requirement | Berubah-ubah, unclear | Stabil, well-defined |
| Delivery | Incremental, frequent | Single delivery di akhir |
| Documentation | Minimal, essential | Komprehensif |
| Team | Small, co-located, skilled | Bisa besar, terdistribusi |
| Customer | Terlibat aktif terus | Terlibat di awal & akhir |

### Lean Software Development (7 Prinsip)
1. **Eliminate Waste** — hapus semua yang tidak menambah value
2. **Amplify Learning** — belajar dari feedback cepat
3. **Decide as Late as Possible** — keputusan saat info paling lengkap
4. **Deliver as Fast as Possible** — semakin cepat deliver, semakin cepat feedback
5. **Empower the Team** — berikan otoritas ke tim
6. **Build Integrity In** — kualitas dari awal, bukan testing di akhir
7. **See the Whole** — lihat sistem secara keseluruhan

---

## 1.4 Agile Frameworks (Selain Scrum)

Selain Scrum, ada metode Agile lain yang sering digunakan:

### 1. Kanban
Metodologi lean yang fokus pada *change management* dan *service delivery*. 6 Praktik Inti:
- **Visualizing workflow**: menggunakan Kanban board (To Do, Doing, Done)
- **Limiting WIP (Work in Progress)**: membatasi pekerjaan yang sedang berjalan agar fokus menyelesaikannya lebih cepat
- **Managing workflow**: menganalisis *bottleneck* (kendala) dan memperbaikinya
- **Making process policies explicit**: mendokumentasikan aturan kriteria "Done"
- **Focusing on continuous improvement**: loop *feedback* berbasis data
- **Make process changes collaboratively**: melibatkan semua anggota tim

### 2. eXtreme Programming (XP)
Fokus pada keunggulan teknis dari *development*. Fase-fasenya:
- **Planning**: berdasarkan *User Stories*, memperkirakan *cost*, mengatur rilis, dan menggunakan *Project Velocity*
- **Design**: mengikuti prinsip KIS (*Keep It Simple*), menggunakan purwarupa (*Spike solutions*), dan **Refactoring** (penyempurnaan desain berulang)
- **Coding**: menekankan *Unit Testing* sebelum coding, serta **Pair Programming** (pemrograman berpasangan)
- **Testing**: *Acceptance tests* didefinisikan oleh pengguna dan *unit tests* dieksekusi setiap hari

### 3. DevOps
Menggabungkan ranah *Development* dan *Operations* berlandaskan prinsip Agile dan Lean ke seluruh *supply chain* perangkat lunak. Tahap siklus DevOps:
- **Continuous Development**: memecah fungsi ke dalam banyak *sprint* untuk diserahkan ke tim QA / testing.
- **Continuous Testing**: pengujian *automated* dari iterasi fungsi untuk cegah *defect*.
- **Continuous Integration**: fungsionalitas baru digabungkan ke kode lama ke environment runtime dan dicek.
- **Continuous Deployment**: kode matang di-*(deploy)*/diinstal ke lingkungan *production*.
- **Continuous Monitoring**: memantau jalannya sistem secara proaktif sebelum ditemukan *error* oleh *user*.

---

## 1.5 Scrum Framework

### Scrum Roles
1. **Product Owner** — menentukan fitur, prioritas backlog, ROI, accept/reject work
2. **Scrum Master** — servant-leader, menghapus impediments, memastikan Scrum dijalankan
3. **Development Team** — cross-functional, self-organizing, 5-9 orang ideal

### Scrum Artifacts
1. **Product Backlog** — daftar semua fitur/requirement, diurutkan prioritas oleh PO
2. **Sprint Backlog** — subset product backlog yang dipilih untuk sprint tertentu
3. **Product Increment** — hasil kerja sprint yang "Done" dan potentially shippable

### Scrum Events/Ceremonies
1. **Sprint** — time-box 1-4 minggu, menghasilkan increment
2. **Sprint Planning** — tim menentukan apa yang akan dikerjakan & bagaimana
3. **Daily Scrum (Stand-up)** — 15 menit, 3 pertanyaan: apa yang dikerjakan kemarin? hari ini? ada hambatan?
4. **Sprint Review** — demo increment ke stakeholder, dapatkan feedback
5. **Sprint Retrospective** — tim refleksi: apa yang baik? apa yang perlu diperbaiki?

### User Stories (Format)
```
As a [role], I want [feature], so that [benefit]
```
**Contoh**: "As a student, I want to view my grades online, so that I can track my academic progress."

### Story Points & Velocity
- **Story Points**: estimasi relatif effort (Fibonacci: 1, 2, 3, 5, 8, 13, 21)
- **Velocity**: total story points yang diselesaikan per sprint
- Digunakan untuk planning sprint berikutnya

### Definition of Done (DoD)
Kriteria yang harus dipenuhi agar work item dianggap "Done":
- Code complete & reviewed
- Unit tests passed
- Integration tested
- Documentation updated
- Accepted by Product Owner

---

## CONTOH SOAL & JAWABAN — SOAL 1

### Case Study:
> PT TechnoVision ingin mengembangkan aplikasi **e-learning** untuk universitas. Requirement belum sepenuhnya jelas karena stakeholder dari berbagai fakultas memiliki kebutuhan berbeda. Tim development terdiri dari 7 orang developer berpengalaman. Budget terbatas dan deadline 6 bulan. Stakeholder ingin melihat progress secara berkala.

**Pertanyaan:**
1. Jelaskan mengapa Agile/Scrum lebih tepat dibanding Waterfall untuk proyek ini! (10 poin)
2. Rancang Scrum implementation untuk proyek ini termasuk roles, sprint planning, dan artifacts! (10 poin)
3. Bagaimana Lean principles dapat diterapkan untuk memaksimalkan value delivery? (5 poin)

**Jawaban:**

**1. Mengapa Agile/Scrum lebih tepat:**

Berdasarkan karakteristik proyek:
- **Requirement belum jelas** → Waterfall membutuhkan requirement lengkap di awal, sedangkan Agile **welcome changing requirements** (Prinsip Agile #2)
- **Stakeholder beragam** → Agile mendukung **customer collaboration** dan feedback berkala melalui Sprint Review
- **Tim 7 orang berpengalaman** → sesuai ukuran ideal Scrum team (5-9 orang), dan tim berpengalaman cocok untuk **self-organizing team** (Prinsip Agile #11)
- **Deadline 6 bulan** → dengan sprint 2 minggu, bisa ada ~12 sprint, memungkinkan **early & continuous delivery** (Prinsip Agile #1)
- **Stakeholder ingin lihat progress** → Sprint Review di setiap akhir sprint memenuhi kebutuhan ini
- Waterfall baru menghasilkan working software di akhir, berisiko tinggi jika requirement salah

**2. Scrum Implementation:**

**Roles:**
- **Product Owner**: Perwakilan universitas yang memahami kebutuhan semua fakultas, bertanggung jawab mengelola Product Backlog
- **Scrum Master**: Senior developer yang memahami Scrum, menghapus hambatan dan memfasilitasi proses
- **Development Team**: 5 developer (2 frontend, 2 backend, 1 QA/tester)

**Sprint Planning:**
- Sprint duration: **2 minggu** (12 sprint total dalam 6 bulan)
- Sprint 1-2: Setup infrastruktur + modul login/authentication (core product)
- Sprint 3-4: Modul manajemen kursus + upload materi
- Sprint 5-6: Modul quiz/assessment
- Sprint 7-8: Forum diskusi + notifikasi
- Sprint 9-10: Dashboard analytics + reporting
- Sprint 11-12: Polish, bug fixes, UAT

**Artifacts:**
- **Product Backlog**: Daftar semua fitur e-learning diprioritaskan menggunakan MoSCoW (Must/Should/Could/Won't)
- **Sprint Backlog**: User stories yang dipilih untuk sprint berjalan, di-break down menjadi tasks
- **Increment**: Setiap sprint menghasilkan potentially shippable product increment

**3. Penerapan Lean Principles:**
- **Eliminate Waste**: Hanya bangun fitur yang benar-benar dibutuhkan (berdasarkan prioritas PO), hindari over-documentation
- **Amplify Learning**: Sprint Review & Retrospective sebagai mekanisme feedback dan pembelajaran
- **Deliver as Fast as Possible**: Sprint 2 minggu memungkinkan rapid delivery dan feedback
- **Build Integrity In**: Automated testing dan code review di setiap sprint, bukan testing massal di akhir
- **Empower the Team**: Tim self-organizing menentukan cara terbaik menyelesaikan Sprint Backlog
