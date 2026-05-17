# 📝 LATIHAN SOAL STUDY CASE — SOFTWARE ENGINEERING UTS
## BINUS University Semester 4 — 20 Soal (5 per Kisi-Kisi)

> **Petunjuk**: Setiap kisi-kisi memiliki 5 soal study case lengkap dengan diagram UML dan jawaban pembahasan. Gunakan latihan ini untuk memahami pola soal dan cara menjawab dengan tepat.

---

---

# 🔷 KISI-KISI 1: The Nature of Software, Software Processes, Agile, Lean & Scrum
### (Bobot UTS: 25%)

---

## Soal 1.1 — Startup FinTech "PayEase"

### Case Study:
> Startup **PayEase** ingin membangun aplikasi **mobile payment** yang memungkinkan transfer uang, pembayaran tagihan, dan top-up e-wallet. Tim terdiri dari 6 developer berpengalaman, 1 UI/UX designer, dan 1 QA engineer. Investor menginginkan MVP (Minimum Viable Product) dalam **3 bulan** pertama, dengan iterasi fitur berikutnya setiap bulan. Requirement berubah secara berkala berdasarkan feedback user.

### Pertanyaan:
1. **[10 poin]** Tentukan process model yang paling tepat untuk PayEase! Bandingkan dengan Waterfall dan Spiral Model, jelaskan mengapa model yang Anda pilih lebih sesuai!
2. **[10 poin]** Rancang implementasi Scrum lengkap: tentukan roles, sprint duration, dan bagaimana Product Backlog disusun untuk MVP 3 bulan!
3. **[5 poin]** Identifikasi 4 prinsip Agile Manifesto yang paling relevan untuk kasus PayEase dan jelaskan penerapannya!

### Jawaban:

**1. Process Model: Agile (Scrum) adalah yang paling tepat.**

| Aspek | Agile/Scrum ✅ | Waterfall ❌ | Spiral ⚠️ |
|-------|---------------|------------|-----------|
| Requirement berubah | Welcome changes (Prinsip #2) | Butuh requirement lengkap di awal | Bisa handle, tapi terlalu formal |
| MVP 3 bulan | Sprint 2 minggu → 6 sprint untuk MVP | Working software baru di akhir | Terlalu banyak overhead risk analysis |
| Tim 8 orang | Ideal untuk Scrum (5-9) | Bisa, tapi rigid | Cocok untuk tim besar |
| Feedback investor | Sprint Review setiap 2 minggu | Investor tunggu sampai akhir | Review per iterasi, tapi lambat |

**Alasan utama**: PayEase memiliki karakteristik **uncertainty tinggi** (fintech market cepat berubah), **tim kecil berpengalaman** (ideal self-organizing), dan **kebutuhan speed-to-market** (MVP 3 bulan). Waterfall gagal karena requirement tidak stabil, Spiral terlalu berat untuk startup.

**2. Scrum Implementation:**

**Roles:**
- **Product Owner**: Co-founder/CEO yang memahami visi produk dan kebutuhan pasar fintech
- **Scrum Master**: Senior developer yang berpengalaman dengan Agile/Scrum  
- **Development Team**: 5 developer + 1 UI/UX + 1 QA (total 7 orang)

**Sprint Duration: 2 minggu** (6 sprint = 3 bulan untuk MVP)

**Product Backlog & Sprint Planning:**
- Sprint 1-2: Authentication + KYC verification + Dashboard utama (core)
- Sprint 3-4: Transfer antar user + History transaksi
- Sprint 5: Pembayaran tagihan (PLN, PDAM, Telkom)
- Sprint 6: Top-up e-wallet + Polish + UAT

**Artifacts:**
- **Product Backlog**: User stories diprioritaskan MoSCoW, dikelola PO
- **Sprint Backlog**: Tasks breakdown dari user stories per sprint
- **Increment**: Potentially shippable product setiap akhir sprint

**3. 4 Prinsip Agile yang Relevan:**
1. **"Individuals and interactions over processes and tools"** → Tim kecil 8 orang harus kolaborasi erat, daily standup lebih efektif dari dokumentasi formal
2. **"Working software over comprehensive documentation"** → Investor butuh MVP yang bisa digunakan, bukan dokumen tebal
3. **"Customer collaboration over contract negotiation"** → Feedback investor dan early users terus diserap melalui Sprint Review
4. **"Responding to change over following a plan"** → Pasar fintech berubah cepat, PayEase harus bisa pivot fitur berdasarkan data pengguna

---

## Soal 1.2 — Sistem Absensi Pemerintah "ePresence"

### Case Study:
> Kementerian PAN-RB ingin membangun sistem **ePresence** untuk absensi pegawai negeri secara nasional. Requirement sudah sangat jelas dan terdokumentasi dalam Peraturan Menteri. Tidak boleh ada perubahan requirement selama development. Tim terdiri dari 30 developer dari 3 vendor berbeda. Deadline ditetapkan pemerintah: **18 bulan** dengan milestone review setiap 3 bulan. Data absensi harus terverifikasi dan tidak boleh dimanipulasi.

### Pertanyaan:
1. **[10 poin]** Mengapa Waterfall/V-Model lebih tepat dibanding Agile untuk proyek ini? Jelaskan berdasarkan 5 karakteristik proyek!
2. **[10 poin]** Gambarkan bagaimana V-Model diterapkan, termasuk pasangan fase development-testing!
3. **[5 poin]** Jika pemerintah tetap ingin menggunakan elemen Agile, framework apa yang paling mungkin digunakan dan bagaimana adaptasinya?

### Jawaban:

**1. Waterfall/V-Model lebih tepat karena:**

| # | Karakteristik Proyek | Mengapa Waterfall/V-Model ✅ | Mengapa Agile ❌ |
|---|---------------------|------------------------------|-----------------|
| 1 | Requirement stabil (Peraturan Menteri) | Waterfall butuh req. jelas di awal — sesuai! | Agile "welcome changes" — tidak relevan |
| 2 | Tim 30 developer, 3 vendor | Waterfall terstruktur untuk tim besar terdistribusi | Agile ideal untuk tim kecil co-located |
| 3 | Deadline 18 bulan + milestone review | Waterfall mudah di-track secara linear | Sprint review terlalu sering untuk birokrasi |
| 4 | Data harus verified (compliance) | V-Model menekankan V&V di setiap level | Agile kurang formal dalam verification |
| 5 | Kontrak pemerintah (fixed-scope) | Waterfall = fixed scope, budget, timeline | Agile = scope bisa berubah (kontradiksi kontrak) |

**2. Penerapan V-Model:**
```
Requirements Specification ─────────────────── Acceptance Testing (UAT)
   | Apa yang diminta Peraturan Menteri?              User absensi di seluruh Indonesia
   |
   System Analysis ──────────────────────── System Testing
   | Arsitektur nasional, integrasi biometrik         Test performa 5 juta pegawai
   |
      Architectural Design ────────────── Integration Testing
      | Modul absensi, modul laporan, API              Test antar modul + antar vendor
      |
         Detailed Design ──────────── Unit Testing
         | Algoritma fingerprint matching              Test setiap function
         |
            Implementation (Coding)
```

**3. Adaptasi Agile untuk Pemerintah:**
- Framework: **Kanban** (bukan Scrum) — paling cocok karena:
  - Tidak mengubah struktur organisasi existing (Kanban bersifat evolutionary)
  - Visualisasi workflow setiap vendor di Kanban board
  - WIP limit untuk mencegah bottleneck antar vendor
  - Tetap bisa mengikuti milestone 3 bulanan pemerintah
  - **Bukan Scrum** karena sprint dan self-organizing team sulit diterapkan di birokrasi

---

## Soal 1.3 — Game Studio "PixelForge"

### Case Study:
> Studio game indie **PixelForge** ingin mengembangkan game RPG mobile. Tim kecil: 3 programmer, 2 artist, 1 game designer. Mereka belum punya pengalaman formal dengan metodologi apapun. Game design bisa berubah drastis berdasarkan playtesting. Budget berasal dari Kickstarter (terbatas). Deadline rilis: 10 bulan.

### Pertanyaan:
1. **[8 poin]** Rekomendasikan metodologi Agile spesifik (XP/Kanban/Scrum) yang paling cocok untuk PixelForge! Jelaskan alasannya!
2. **[8 poin]** Bagaimana prinsip Lean "Eliminate Waste" dan "Amplify Learning" diterapkan dalam pengembangan game?
3. **[9 poin]** Tulis 5 User Stories untuk game RPG ini menggunakan format standar!

### Jawaban:

**1. Rekomendasi: eXtreme Programming (XP)**

Alasan:
- **Pair Programming**: 3 programmer bisa rotasi pair → knowledge sharing, mengurangi bus factor
- **Test-Driven Development**: Mencegah bug game yang mahal (game bug = bad review = gagal)
- **Refactoring**: Game design berubah drastis? XP mendukung continuous refactoring tanpa mengubah behavior
- **Short releases**: Prototype → Alpha → Beta → Release sesuai XP cycle
- **Planning Game**: Estimasi berbasis user stories, sesuai tim kecil tanpa pengalaman formal
- **Kenapa bukan Scrum?** Tim 6 orang terlalu kecil untuk full Scrum ceremony, dan role PO/SM terlalu formal

**2. Penerapan Lean:**
- **Eliminate Waste**: 
  - Jangan bikin 100 level kalau baru 10 yang di-playtest — fokus pada level yang sudah terbukti fun
  - Hindari asset art yang belum pasti dipakai → buat placeholder dulu
  - Hapus fitur yang "nice to have" tapi tidak menambah core gameplay
- **Amplify Learning**:
  - Playtest setiap minggu → pelajari apa yang fun dan apa yang boring
  - A/B testing mekanik combat → data-driven decisions
  - Retrospective setiap 2 minggu → perbaiki proses kerja tim

**3. User Stories:**
1. "As a **player**, I want to **create and customize my character**, so that **I feel connected to my hero**." (8 SP)
2. "As a **player**, I want to **explore an open world map**, so that **I can discover hidden quests and treasures**." (13 SP)
3. "As a **player**, I want to **engage in turn-based combat**, so that **I can strategize and defeat enemies**." (8 SP)
4. "As a **game designer**, I want to **adjust enemy difficulty via config file**, so that **I can balance the game without recompiling**." (5 SP)
5. "As a **player**, I want to **save and load my progress**, so that **I can continue playing anytime**." (3 SP)

---

## Soal 1.4 — Platform Telemedicine "SehatKu"

### Case Study:
> Rumah sakit swasta ingin membangun platform **telemedicine "SehatKu"** untuk konsultasi dokter online. Fitur: video call, chat, resep digital, dan pembayaran. Tim 10 developer, namun 4 di antaranya masih junior. Requirement inti sudah jelas dari manajemen RS, tapi detail UX masih perlu dieksplorasi. Proyek harus rilis Beta dalam 4 bulan.

### Pertanyaan:
1. **[10 poin]** Jelaskan mengapa Incremental Model cocok untuk SehatKu! Bagaimana increment direncanakan?
2. **[8 poin]** Bandingkan penerapan Daily Scrum dan Sprint Retrospective dalam konteks tim yang memiliki 4 junior developer!
3. **[7 poin]** Terapkan 3 dari 7 prinsip Lean Software Development untuk proyek SehatKu!

### Jawaban:

**1. Incremental Model untuk SehatKu:**

Incremental cocok karena:
- **Core product** (video call + chat) bisa dirilis dulu → Increment 1
- Requirement inti jelas tapi UX perlu eksplorasi → setiap increment menambah fitur setelah UX divalidasi
- Junior developer bisa fokus pada increment yang lebih sederhana

**Perencanaan Increment:**
| Increment | Timeline | Fitur | Tim |
|-----------|----------|-------|-----|
| Increment 1 (Core) | Bulan 1-2 | Video call + Chat dokter-pasien | 6 senior + 2 junior |
| Increment 2 | Bulan 2-3 | Resep digital + Riwayat konsultasi | 4 senior + 4 junior |
| Increment 3 | Bulan 3-4 | Pembayaran + Notifikasi + Dashboard admin | Full team |
| Beta Release | Bulan 4 | Integration + Bug fix + UAT | Full team |

**2. Daily Scrum & Retrospective untuk Tim dengan Junior:**

**Daily Scrum (15 menit):**
- Junior developer sering **malu menyampaikan hambatan** → Scrum Master harus proaktif bertanya
- Format 3 pertanyaan: Kemarin? Hari ini? Hambatan? → membantu junior **belajar dari senior** yang menjawab sebelumnya
- Mencegah junior **stuck berhari-hari** tanpa bertanya

**Sprint Retrospective:**
- **Sangat krusial** untuk tim dengan junior karena:
  - Junior bisa belajar dari refleksi: "Apa yang bisa diperbaiki?"
  - Senior bisa identifikasi area di mana junior butuh mentoring
  - Membangun psychological safety → junior berani mengakui kesalahan
  - Contoh action item: "Sprint depan, setiap junior dipasangkan dengan senior (pair programming)"

**3. Lean Principles untuk SehatKu:**
1. **Decide as Late as Possible**: Jangan tentukan payment gateway di awal. Increment 1-2 fokus pada core (video call). Keputusan payment gateway dibuat saat increment 3, ketika sudah lebih banyak informasi tentang volume transaksi.
2. **Build Integrity In**: Automated testing dari sprint pertama, code review wajib (terutama kode junior), CI/CD pipeline setup sejak awal.
3. **Empower the Team**: Berikan junior developer ownership atas fitur sederhana (misal: halaman riwayat), biarkan mereka membuat keputusan teknis dengan guidance senior.

---

## Soal 1.5 — Sistem IoT Smart Farming "TaniCerdas"

### Case Study:
> Perusahaan agritech ingin membangun platform **IoT Smart Farming** yang menghubungkan sensor tanah, cuaca, dan irigasi otomatis. Tim: 5 embedded developer, 3 backend developer, 2 mobile developer (total 10). Proyek sangat berisiko tinggi karena integrasi hardware-software belum pernah dilakukan tim. Deadline: 12 bulan. Client (petani korporat) hanya tersedia untuk review setiap 4 minggu.

### Pertanyaan:
1. **[10 poin]** Mengapa Spiral Model adalah pilihan terbaik untuk TaniCerdas? Jelaskan setiap kuadran Spiral dalam konteks proyek ini!
2. **[10 poin]** Jika tim memilih Scrum, bagaimana sprint 4 minggu bisa diadaptasi? Apa risiko sprint yang terlalu panjang?
3. **[5 poin]** Jelaskan perbedaan Evolutionary Process Flow dan Iterative Process Flow menggunakan contoh dari proyek TaniCerdas!

### Jawaban:

**1. Spiral Model untuk TaniCerdas:**

Spiral cocok karena proyek ini **risk-driven** — integrasi hardware-software adalah risiko utama.

**Setiap kuadran dalam konteks TaniCerdas:**
1. **Planning**: Identifikasi objectives sprint ini → misal: "Validasi komunikasi sensor → backend"
2. **Risk Analysis**: Analisis risiko → "Sensor protokol tidak kompatibel? Latency terlalu tinggi?" → Buat prototype kecil untuk test
3. **Engineering**: Develop dan test → Build driver sensor, API endpoint, mobile dashboard
4. **Customer Evaluation**: Demo ke petani korporat (setiap 4 minggu) → "Apakah data sensor akurat? Apakah irigasi otomatis responsif?"

Setiap loop spiral menghasilkan versi yang lebih lengkap dan risiko yang lebih rendah.

**2. Scrum dengan Sprint 4 Minggu:**
- **Adaptasi**: Sprint 4 minggu karena client hanya tersedia setiap 4 minggu untuk Sprint Review
- **Risiko sprint terlalu panjang**:
  - Feedback terlalu lambat → jika arah salah, 4 minggu terbuang
  - Sprint Planning sulit akurat untuk 4 minggu → velocity kurang reliable
  - Daily Scrum bisa terasa monoton
  - **Mitigasi**: Internal demo setiap 2 minggu (mid-sprint review) meskipun tanpa client

**3. Evolutionary vs Iterative Process Flow:**
- **Evolutionary**: Setiap putaran menghasilkan **versi yang lebih lengkap**
  - TaniCerdas Putaran 1: Prototype sensor → data mentah
  - TaniCerdas Putaran 2: Sensor + backend → data di dashboard
  - TaniCerdas Putaran 3: Sensor + backend + mobile + irigasi otomatis → sistem lengkap
- **Iterative**: Mengulang **satu aktivitas** sebelum lanjut
  - Misal: Modeling → Construction → kembali ke Modeling (karena design sensor berubah) → Construction lagi → baru Deployment

---

---

# 🔷 KISI-KISI 2: Design Concepts & Requirements Engineering
### (Bobot UTS: 15%)

---

## Soal 2.1 — Sistem Reservasi Hotel "StayBook"

### Case Study:
> Hotel chain "GrandStay" (50 hotel di Indonesia) ingin membangun sistem reservasi online **"StayBook"**. Sistem harus digunakan oleh tamu (booking online), resepsionis (check-in/out), housekeeping (status kamar), dan manajer (laporan). Saat ini masih menggunakan spreadsheet Excel.

### Pertanyaan:
1. **[7 poin]** Lakukan requirements elicitation: identifikasi minimal 5 functional requirements dan 4 non-functional requirements!
2. **[8 poin]** Jelaskan penerapan design concept **Coupling** dan **Cohesion** dalam perancangan modul StayBook! Berikan contoh Good vs Bad design!

### Jawaban:

**1. Requirements Elicitation:**

**Functional Requirements:**
1. Sistem harus memungkinkan tamu **mencari ketersediaan kamar** berdasarkan tanggal, tipe kamar, dan lokasi hotel
2. Sistem harus memungkinkan tamu **melakukan booking dan pembayaran online** dengan konfirmasi otomatis via email
3. Sistem harus memungkinkan resepsionis **melakukan check-in/check-out** dan meng-update status kamar secara real-time
4. Sistem harus memungkinkan housekeeping **mengubah status kebersihan kamar** (dirty/cleaning/clean/inspected)
5. Sistem harus menghasilkan **laporan okupansi dan revenue** per hotel untuk manajer (daily/weekly/monthly)
6. Sistem harus mendukung **pembatalan booking** dengan kebijakan refund otomatis sesuai ketentuan

**Non-Functional Requirements:**
1. **Performance**: Pencarian ketersediaan kamar di 50 hotel harus menghasilkan hasil dalam < 2 detik
2. **Availability**: Sistem harus tersedia 99.9% (downtime max ~8.7 jam/tahun) karena booking bisa datang 24/7
3. **Security**: Data kartu kredit tamu harus dienkripsi sesuai standar PCI-DSS
4. **Scalability**: Sistem harus mampu menangani 10.000 concurrent bookings saat peak season (libur Lebaran/Natal)

**2. Coupling & Cohesion dalam StayBook:**

**Good Design (High Cohesion + Low Coupling) ✅:**
```
BookingModule          → hanya menangani logika booking (search, reserve, cancel)
PaymentModule          → hanya menangani pembayaran (charge, refund, invoice)
RoomManagementModule   → hanya menangani status kamar (availability, housekeeping)
ReportModule           → hanya menghasilkan laporan
```
- **High Cohesion**: Setiap modul punya satu tanggung jawab jelas (Functional Cohesion)
- **Low Coupling (Data Coupling)**: BookingModule berkomunikasi dengan PaymentModule hanya melalui parameter sederhana: `processPayment(bookingId, amount, paymentMethod)`

**Bad Design (Low Cohesion + High Coupling) ❌:**
```
class GodModule {
    searchRooms()          // booking concern
    processPayment()       // payment concern
    updateRoomStatus()     // housekeeping concern
    generateReport()       // reporting concern
    sendEmail()            // notification concern
}
```
- **Low Cohesion (Coincidental)**: Semua concern dicampur dalam satu class tanpa hubungan
- **High Coupling (Content Coupling)**: Jika ubah logika payment, bisa merusak logika booking karena ada di class yang sama

---

## Soal 2.2 — Aplikasi Manajemen Gym "FitTrack"

### Case Study:
> Gym franchise "PowerFit" ingin membangun aplikasi **FitTrack** untuk manajemen member, jadwal kelas, dan tracking workout. Stakeholder: pemilik gym, trainer, dan member. Member ingin melihat jadwal kelas, booking kelas, dan tracking progress latihan. Trainer ingin mengelola jadwal dan lihat data member di kelasnya.

### Pertanyaan:
1. **[7 poin]** Jelaskan langkah Requirements Engineering dari Inception hingga Validation untuk FitTrack!
2. **[8 poin]** Terapkan design concept **Abstraction** (procedural & data) dan **Information Hiding** pada sistem FitTrack!

### Jawaban:

**1. Requirements Engineering untuk FitTrack:**

| Langkah | Aktivitas | Contoh pada FitTrack |
|---------|-----------|---------------------|
| **Inception** | Identifikasi stakeholder & masalah | Stakeholder: owner, trainer, member. Masalah: jadwal kelas masih manual, progress member tidak tertrack |
| **Elicitation** | Wawancara stakeholder, observasi gym | Interview member: "Saya mau booking kelas dari HP". Observasi: trainer catat absensi di kertas |
| **Elaboration** | Perluas & perinci requirement | Dari "booking kelas" → elaborasi: pilih jadwal, cek kuota, konfirmasi booking, reminder H-1, cancel policy |
| **Negotiation** | Resolve konflik stakeholder | Owner mau fitur langganan premium, member mau gratis. **Resolusi**: Freemium model (basic gratis, premium berbayar) |
| **Specification** | Dokumentasikan di SRS | SRS dokumen berisi: use cases, data model, wireframe, NFR (performance, security) |
| **Validation** | Review kelengkapan & kebenaran | Review: "Apakah trainer bisa lihat data SEMUA member atau hanya member di kelasnya?" → Clarify: hanya member di kelasnya |

**2. Abstraction & Information Hiding:**

**Procedural Abstraction:**
- `bookClass(memberId, classId)` → member tinggal panggil fungsi ini tanpa perlu tahu:
  - Cek kuota kelas masih ada?
  - Cek member sudah booking kelas lain di jam yang sama?
  - Kurangi kuota kelas
  - Kirim konfirmasi email
  - Schedule reminder H-1

**Data Abstraction:**
```
class Member {
    - memberId: string       (private)
    - name: string           (private)
    - membershipType: enum   (private)
    - workoutHistory: array  (private)
    
    + getProfile(): MemberInfo        (public)
    + getWorkoutSummary(): Summary    (public)
    + isActiveMembership(): boolean   (public)
}
```
Detail internal (tipe membership, riwayat workout) disembunyikan. Modul lain hanya bisa mengakses melalui public methods.

**Information Hiding:**
- **Modul Membership**: Menyembunyikan logika renewal, grace period, dan pricing. Modul lain hanya panggil `checkMembershipStatus(memberId)` → return "active" / "expired"
- **Modul Payment**: Menyembunyikan integrasi dengan payment gateway (Midtrans/Xendit). Modul lain hanya panggil `chargePayment(memberId, amount)` → return success/failed
- **Manfaat**: Jika gym ganti dari Midtrans ke Xendit, hanya modul Payment yang diubah, tidak ada dampak ke modul Booking atau Membership

---

## Soal 2.3 — Platform E-Learning Kampus "BinusPlus"

### Referensi Diagram — Use Case E-Learning:
![Use Case Diagram - Sistem E-Learning Universitas](SOFENG/diagrams/usecase_elearning.png)

### Case Study:
> BINUS ingin mengembangkan platform e-learning **BinusPlus** yang menggantikan sistem lama. Fitur: video streaming materi, kuis interaktif, forum diskusi, dan grading otomatis. Pengguna: mahasiswa (25.000+), dosen (500+), dan admin akademik.

### Pertanyaan:
1. **[7 poin]** Berdasarkan diagram Use Case di atas, identifikasi mana yang merupakan relasi `<<include>>` dan `<<extend>>`! Jelaskan perbedaannya!
2. **[8 poin]** Identifikasi 3 tantangan yang mungkin terjadi saat tahap Elicitation untuk BinusPlus dan berikan teknik elicitation yang tepat untuk mengatasinya!

### Jawaban:

**1. Analisis Relasi Use Case:**

**Relasi `<<include>>` (SELALU dijalankan):**
- Kerjakan Quiz **<<include>>** Login → Mahasiswa HARUS login sebelum bisa kerjakan quiz
- Upload Materi **<<include>>** Login → Dosen HARUS login sebelum upload
- Kerjakan Quiz **<<include>>** Kirim Notifikasi Deadline → Setelah quiz dibuat, SELALU ada notifikasi deadline otomatis

**Relasi `<<extend>>` (OPSIONAL, tidak selalu terjadi):**
- Lihat Nilai **<<extend>>** Lihat Statistik → Setelah lihat nilai, mahasiswa BISA (opsional) melihat statistik perbandingan dengan mahasiswa lain, tapi tidak wajib

**Perbedaan kunci:**
- `<<include>>`: Use case B **selalu** dieksekusi ketika use case A dijalankan (mandatory)
- `<<extend>>`: Use case B **kadang** memperluas use case A dalam kondisi tertentu (optional)

**2. Tantangan Elicitation & Teknik Mengatasinya:**

| # | Tantangan | Teknik Elicitation |
|---|-----------|-------------------|
| 1 | **Scope Problem**: 25.000 mahasiswa dari berbagai jurusan punya kebutuhan berbeda (Teknik mau simulasi lab, Manajemen mau case study) → boundary tidak jelas | **Workshop/JAD Session**: Kumpulkan perwakilan setiap fakultas dalam focused group discussion untuk menentukan fitur prioritas bersama |
| 2 | **Understanding Problem**: Admin akademik sulit mengartikulasikan proses grading otomatis yang diinginkan ("Pokoknya bisa grading sendiri") | **Prototyping**: Buat mockup grading interface, admin coba gunakan, lalu berikan feedback — lebih mudah bereaksi pada sesuatu yang terlihat |
| 3 | **Volatility Problem**: Kebijakan kampus berubah (online vs hybrid) → requirement berubah mengikuti | **Iterative Elicitation + User Stories**: Kumpulkan requirement dalam bentuk user stories yang bisa diprioritaskan ulang (backlog), bukan dokumen statis |

---

## Soal 2.4 — Sistem Informasi Rekam Medis "SIRME"

### Referensi Diagram — Use Case Rumah Sakit:
![Use Case Diagram - Sistem Informasi Rekam Medis SIRME](SOFENG/diagrams/usecase_hospital.png)

### Case Study:
> Rumah Sakit "Sehat Selalu" ingin membangun **SIRME** (Sistem Informasi Rekam Medis Elektronik). Pengguna: dokter, perawat, apoteker, dan admin. Data pasien sangat sensitif (dilindungi UU Kesehatan). Sistem harus terintegrasi dengan BPJS Kesehatan.

### Pertanyaan:
1. **[7 poin]** Berdasarkan diagram Use Case, buatlah 4 User Stories untuk SIRME menggunakan format standar Agile!
2. **[8 poin]** Jelaskan penerapan **Separation of Concerns** dan **Refactoring** pada sistem SIRME! Berikan contoh konkret!

### Jawaban:

**1. User Stories:**
1. "As a **dokter**, I want to **mengakses riwayat medis pasien secara lengkap**, so that **saya bisa membuat diagnosis yang akurat berdasarkan history sebelumnya**."
2. "As a **perawat**, I want to **mencatat vital signs pasien secara digital**, so that **dokter bisa melihat data terbaru pasien secara real-time**."
3. "As an **apoteker**, I want to **menerima resep digital dari dokter**, so that **saya bisa menyiapkan obat tanpa resep kertas yang sulit dibaca**."
4. "As an **admin**, I want to **memverifikasi klaim BPJS otomatis**, so that **proses klaim tidak menghambat pelayanan pasien**."

**2. Separation of Concerns & Refactoring:**

**Separation of Concerns:**
```
Concern 1 → PatientManagement Module    : Pendaftaran, data demografis, asuransi
Concern 2 → ClinicalRecords Module      : Diagnosis, resep, vital signs, riwayat medis
Concern 3 → Pharmacy Module             : Manajemen obat, dispensing, stok
Concern 4 → Billing Module              : Tagihan, klaim BPJS, pembayaran
Concern 5 → Security Module             : Auth, audit log, enkripsi, role-based access
```
Setiap module bisa dikembangkan dan di-test secara independen. Tim A bisa mengerjakan ClinicalRecords sementara Tim B mengerjakan Billing tanpa konflik.

**Refactoring:**
Contoh sebelum refactoring (❌ Bad):
```javascript
function handlePatient(patient, action, data) {
    if (action === 'register') { /* registrasi logic */ }
    else if (action === 'diagnose') { /* diagnosis logic */ }
    else if (action === 'prescribe') { /* resep logic */ }
    else if (action === 'bill') { /* billing logic */ }
    // ... 500 baris dalam satu function
}
```

Setelah refactoring (✅ Good):
```javascript
// Extract Method — setiap concern punya function sendiri
function registerPatient(patient, data) { /* registrasi logic */ }
function createDiagnosis(patient, data) { /* diagnosis logic */ }  
function createPrescription(patient, data) { /* resep logic */ }
function generateBill(patient, data) { /* billing logic */ }
```
- Behavior **tidak berubah** (test tetap pass)
- Complexity **berkurang** drastis
- Maintainability **meningkat** — modifikasi billing tidak menyentuh diagnosis

---

## Soal 2.5 — Aplikasi Food Delivery "MakanYuk"

### Case Study:
> Startup lokal ingin membangun aplikasi food delivery **"MakanYuk"** yang menghubungkan restoran, driver ojol, dan pelanggan. Fitur utama: pesan makanan, tracking driver real-time, rating & review, dan voucher promo.

### Pertanyaan:
1. **[8 poin]** Klasifikasikan 5 requirement berikut sebagai Functional atau Non-Functional, dan tentukan kategori NFR (jika non-functional) menggunakan FURPS+!
   - a) Sistem harus menampilkan estimasi waktu pengiriman
   - b) Halaman pencarian restoran harus load dalam < 1 detik
   - c) Sistem harus mendukung 50.000 order concurrent saat promo 11.11
   - d) Driver harus bisa mengupdate status pesanan (picked up, on the way, delivered)
   - e) Lokasi GPS driver harus dienkripsi selama transmisi
2. **[7 poin]** Terapkan 3 design concepts (dari: Abstraction, Modularity, Information Hiding, Separation of Concerns, Coupling/Cohesion) pada MakanYuk!

### Jawaban:

**1. Klasifikasi Requirements:**

| # | Requirement | Tipe | Kategori NFR |
|---|-----------|------|--------------|
| a | Menampilkan estimasi waktu pengiriman | **Functional** | - (ini fitur sistem) |
| b | Load pencarian < 1 detik | **Non-Functional** | **Performance** (response time) |
| c | 50.000 order concurrent saat promo | **Non-Functional** | **Scalability** (+ in FURPS+) |
| d | Driver update status pesanan | **Functional** | - (ini fitur sistem) |
| e | Enkripsi GPS driver | **Non-Functional** | **Security** (+ in FURPS+) |

**2. Design Concepts pada MakanYuk:**

**Modularity:**
- Pisahkan menjadi modul independen: `RestaurantModule`, `OrderModule`, `DeliveryModule`, `PaymentModule`, `PromoModule`
- Setiap modul independently addressable → bisa deploy, test, dan maintain secara terpisah

**Information Hiding:**
- `DeliveryModule` menyembunyikan algoritma matching driver-order (proximity, rating, workload). Modul lain hanya panggil `assignDriver(orderId)` → return driverInfo
- Manfaat: Jika algoritma matching diubah dari nearest-first ke highest-rated-first, tidak ada impact ke modul lain

**Separation of Concerns:**
- **Concern Tracking**: Hanya menangani GPS, route, ETA → `TrackingService`
- **Concern Payment**: Hanya menangani charge, split payment (customer-driver-resto), refund → `PaymentService`
- **Concern Promo**: Hanya menangani voucher validation, discount calculation, promo rules → `PromoService`
- Independen: Tim bisa mengubah logika promo tanpa menyentuh kode tracking

---

---

# 🔷 KISI-KISI 3: Requirements Modeling (UML) & Software Design Principles (SOLID)
### (Bobot UTS: 15%)

---

## Soal 3.1 — Perpustakaan Digital "DigiLib"

### Referensi Diagram — Class Diagram Perpustakaan:
![Class Diagram - Sistem Perpustakaan Digital](SOFENG/diagrams/class_library.png)

### Case Study:
> Kampus BINUS ingin membangun **Perpustakaan Digital "DigiLib"** yang memungkinkan mahasiswa meminjam e-book, dosen mengupload materi, dan admin mengelola katalog. Buku digital dipinjam maksimal 14 hari, bisa diperpanjang 1x. Sistem harus mencatat riwayat peminjaman dan mengirim notifikasi saat mendekati jatuh tempo.

### Pertanyaan:
1. **[7 poin]** Berdasarkan class diagram di atas, jelaskan setiap relasi (association, inheritance, dependency, composition, aggregation) yang ada! Sertakan multiplicity!
2. **[8 poin]** Tunjukkan penerapan 3 prinsip SOLID (SRP, OCP, DIP) pada class diagram DigiLib!

### Jawaban:

**1. Analisis Relasi Class Diagram:**

| Relasi | Class A | Class B | Tipe | Multiplicity | Penjelasan |
|--------|---------|---------|------|-------------|------------|
| Inheritance | Mahasiswa | User | is-a | - | Mahasiswa IS A User — mewarisi atribut userId, name, email |
| Inheritance | Dosen | User | is-a | - | Dosen IS A User — mewarisi atribut dan method login() |
| Association | Mahasiswa | Book | has/borrows | 1..* — 0..* | Satu mahasiswa bisa meminjam banyak buku, satu buku bisa dipinjam banyak mahasiswa (berbeda waktu) |
| Dependency | LoanService | NotificationService | uses | - | LoanService MENGGUNAKAN NotificationService untuk kirim reminder, tapi tidak menyimpan referensi permanen |
| Association | LoanService | Book | manages | 1 — 0..* | LoanService mengelola peminjaman buku-buku |

**2. Penerapan SOLID:**

**SRP (Single Responsibility Principle):**
- ✅ `Book` → hanya tanggung jawab menyimpan data buku (title, author, isbn) dan cek ketersediaan
- ✅ `LoanService` → hanya tanggung jawab logika peminjaman (createLoan, extendLoan)
- ✅ `NotificationService` → hanya tanggung jawab kirim notifikasi
- ❌ Jika `Book` juga handle sending email dan generating report → melanggar SRP

**OCP (Open/Closed Principle):**
```java
interface NotificationChannel {
    void send(String message, String recipient);
}
class EmailNotification implements NotificationChannel { ... }
class PushNotification implements NotificationChannel { ... }
class WhatsAppNotification implements NotificationChannel { ... }
// Penambahan channel baru TANPA mengubah NotificationService
```

**DIP (Dependency Inversion Principle):**
```java
// High-level module (LoanService) depend pada abstraction
class LoanService {
    private BookRepository repo;         // interface, bukan concrete
    private NotificationChannel notifier; // interface, bukan concrete
    
    LoanService(BookRepository repo, NotificationChannel notifier) {
        this.repo = repo;
        this.notifier = notifier;
    }
}
// Bisa inject SQLBookRepository, MongoBookRepository, dll.
```

---

## Soal 3.2 — Sistem E-Commerce "GoMart"

### Referensi Diagram — Class Diagram E-Commerce:
![Class Diagram - GoMart E-Commerce](SOFENG/diagrams/class_ecommerce.png)

### Referensi Diagram — Activity Diagram Checkout:
![Activity Diagram - Proses Checkout E-Commerce](SOFENG/diagrams/activity_ecommerce.png)

### Case Study:
> Platform e-commerce **GoMart** ingin menambah fitur multi-payment (GoPay, OVO, Bank Transfer, COD). Selain itu, proses checkout harus terstruktur dengan validasi stok, perhitungan total, dan pengiriman paralel dengan notifikasi email.

### Pertanyaan:
1. **[7 poin]** Berdasarkan class diagram GoMart, jelaskan penerapan **Strategy Pattern** pada PaymentStrategy! Mengapa ini lebih baik dari if-else?
2. **[8 poin]** Berdasarkan activity diagram, identifikasi mana yang merupakan: Decision Node, Fork/Join, dan bagaimana parallel activities terjadi!

### Jawaban:

**1. Strategy Pattern pada PaymentStrategy:**

```java
// Interface (Strategy)
interface PaymentStrategy {
    PaymentResult processPayment(double amount);
}

// Concrete Strategies
class GopayPayment implements PaymentStrategy {
    PaymentResult processPayment(double amount) {
        // Panggil GoPay API
    }
}
class BankTransferPayment implements PaymentStrategy {
    PaymentResult processPayment(double amount) {
        // Generate virtual account
    }
}

// Context
class Order {
    private PaymentStrategy paymentStrategy;
    
    void setPaymentMethod(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    PaymentResult checkout(double amount) {
        return paymentStrategy.processPayment(amount);
    }
}
```

**Mengapa lebih baik dari if-else?**

| Aspek | Strategy Pattern ✅ | If-Else ❌ |
|-------|-------------------|-----------|
| OCP | Tambah OVO tanpa ubah Order class | Harus tambah `else if` di Order |
| SRP | Setiap payment logic di class sendiri | Semua logic di satu method |
| Testing | Test setiap strategy secara independen | Test satu method besar yang kompleks |
| Maintainability | Perubahan GoPay API hanya di GopayPayment | Perubahan di method besar, risiko side-effect |

**2. Analisis Activity Diagram:**

- **Decision Node (Diamond):**
  - "Cart Empty?" → Yes: kembali ke Browse Products, No: lanjut ke Checkout
  - "Payment Success?" → Yes: lanjut ke pengiriman, No: goto Payment Failed notification

- **Fork (thick bar):**
  - Setelah Checkout: Fork ke **Validate Stock** dan **Calculate Total** (parallel)
  - Setelah Payment Success: Fork ke **Arrange Shipping** dan **Send Confirmation Email** (parallel)

- **Join (thick bar):**
  - Validate Stock + Calculate Total harus selesai DULU sebelum Process Payment
  - Arrange Shipping + Send Email selesai → Join → Order Complete

- **Parallel Activities**: Validasi stok dan hitung total bisa dilakukan BERSAMAAN karena independen (stok tidak bergantung pada total, dan sebaliknya). Ini meningkatkan performance.

---

## Soal 3.3 — Sistem Banking Online "MyBank"

### Referensi Diagram — Sequence Diagram Transfer:
![Sequence Diagram - Proses Transfer Banking](SOFENG/diagrams/sequence_banking.png)

### Case Study:
> Bank "SecureBank" ingin membangun sistem **online banking** dengan fitur transfer, cek saldo, dan mutasi. Keamanan adalah prioritas utama karena menyangkut uang nasabah.

### Pertanyaan:
1. **[7 poin]** Berdasarkan sequence diagram, identifikasi setiap message (synchronous vs asynchronous) dan jelaskan urutan interaksi dari login hingga notifikasi transfer!
2. **[8 poin]** Terapkan ISP (Interface Segregation Principle) dan LSP (Liskov Substitution Principle) pada desain MyBank!

### Jawaban:

**1. Analisis Sequence Diagram:**

**Urutan interaksi:**
1. `User -> :LoginPage`: **enterCredentials()** [synchronous] — User memasukkan username dan password
2. `:LoginPage -> :AuthService`: **authenticate(user, pass)** [synchronous] — LoginPage mengirim credential ke AuthService untuk verifikasi
3. `:AuthService -> :LoginPage`: **return authToken** [return message, dashed] — Jika valid, kembalikan token autentikasi
4. `:LoginPage -> User`: **showDashboard()** [synchronous] — Tampilkan halaman utama
5. `User -> :TransferPage`: **initiateTransfer(amount, dest)** [synchronous] — User memulai transfer
6. `:TransferPage -> :AccountService`: **validateBalance()** [synchronous] — Cek saldo cukup
7. `:AccountService -> :TransferPage`: **return balanceOK** [return] — Konfirmasi saldo cukup
8. `:TransferPage -> :AccountService`: **executeTransfer()** [synchronous] — Eksekusi transfer dana
9. `:AccountService -> :NotificationService`: **sendConfirmation()** [asynchronous] — Kirim notifikasi (tidak perlu menunggu respons)
10. `:NotificationService -> User`: **transferNotification** [asynchronous] — User terima notifikasi berhasil

**2. ISP & LSP pada MyBank:**

**ISP (Interface Segregation Principle):**
```java
// BAD: Satu interface besar
interface BankAccount {
    void transfer(amount, dest);
    void checkBalance();
    void applyForLoan();
    void manageInvestment();
}
// Nasabah tabungan biasa TIDAK butuh manageInvestment()!

// GOOD: Interface terpisah sesuai kebutuhan
interface Transferable { void transfer(amount, dest); }
interface Balanceable { void checkBalance(); }
interface Loanable { void applyForLoan(); }
interface Investable { void manageInvestment(); }

class SavingsAccount implements Transferable, Balanceable { ... }
class InvestmentAccount implements Transferable, Balanceable, Investable { ... }
```

**LSP (Liskov Substitution Principle):**
```java
// BAD: DepositOnlyAccount extends SavingsAccount
class SavingsAccount {
    void withdraw(double amount) { /* kurangi saldo */ }
}
class DepositOnlyAccount extends SavingsAccount {
    void withdraw(double amount) { 
        throw new UnsupportedOperationException(); // MELANGGAR LSP!
    }
}

// GOOD: Gunakan interface terpisah
interface Depositable { void deposit(double amount); }
interface Withdrawable { void withdraw(double amount); }

class SavingsAccount implements Depositable, Withdrawable { ... }
class DepositOnlyAccount implements Depositable { ... } // Tidak implement Withdrawable
```
LSP: Subclass harus bisa menggantikan parent class tanpa breaking behavior.

---

## Soal 3.4 — Marketplace Jasa "SkillHub"

### Case Study:
> Platform marketplace jasa **SkillHub** menghubungkan freelancer (desainer, programmer, penulis) dengan client yang butuh jasa. Fitur: posting project, bidding, milestone payment, chat, review & rating.

### Pertanyaan:
1. **[7 poin]** Buatlah State Diagram untuk lifecycle sebuah "Project" di SkillHub (dari posting hingga completed/cancelled)!
2. **[8 poin]** Terapkan DRY, KISS, dan YAGNI pada pengembangan SkillHub! Berikan contoh konkret untuk masing-masing!

### Jawaban:

**1. State Diagram — Project Lifecycle:**

### Referensi Diagram — State Diagram Order:
![State Diagram - Lifecycle Order](SOFENG/diagrams/state_order.png)

*(Adaptasi untuk Project SkillHub)*

```
[*] -> [Draft] --post--> [Published] --bid_accepted--> [In Progress]
                              |                           |
                          no_bids_30days              milestone_completed
                              |                           |
                              v                           v
                        [Expired]                  [Under Review]
                                                        |
                                                  +-----+-----+
                                            approved      revision_needed
                                                |              |
                                                v              v
                                          [Completed]    [In Progress]
                                                              (loop)
                              
[Published] --client_cancel--> [Cancelled]
[In Progress] --dispute--> [Disputed] --resolved--> [Completed] or [Cancelled]
```

**States:**
- **Draft**: Project baru dibuat, belum dipublish
- **Published**: Project visible untuk freelancer bidding
- **In Progress**: Freelancer dipilih, sedang mengerjakan
- **Under Review**: Milestone selesai, client melakukan review
- **Completed**: Project selesai, payment released
- **Cancelled**: Project dibatalkan
- **Expired**: Tidak ada bid dalam 30 hari
- **Disputed**: Ada perselisihan antara client dan freelancer

**2. DRY, KISS, YAGNI:**

**DRY (Don't Repeat Yourself):**
```javascript
// BAD: Duplikasi validasi email di 3 tempat
class FreelancerRegistration { validateEmail(email) { /* regex logic */ } }
class ClientRegistration { validateEmail(email) { /* SAMA persis */ } }
class ProfileUpdate { validateEmail(email) { /* SAMA persis */ } }

// GOOD: Satu utility function
class ValidationUtils {
    static validateEmail(email) { /* regex logic - SATU tempat */ }
}
```

**KISS (Keep It Simple, Stupid):**
```javascript
// BAD: Over-engineered bidding algorithm
class BiddingEngine {
    calculateBidScore(bid) {
        // Machine learning model, neural network, 
        // sentiment analysis, blockchain verification...
        // 500 baris kode untuk masalah sederhana
    }
}

// GOOD: Simple sorting
class BiddingEngine {
    rankBids(bids) {
        return bids.sort((a, b) => b.rating - a.rating || a.price - b.price);
        // Sort by rating desc, then price asc - cukup efektif!
    }
}
```

**YAGNI (You Aren't Gonna Need It):**
- BAD: "Nanti kita mungkin butuh AI matching, jadi bangun ML pipeline sekarang" — belum ada data, belum terbukti dibutuhkan user
- GOOD: Bangun fitur berdasarkan kebutuhan saat ini. Jika user feedback menunjukkan manual search kurang efektif, BARU pertimbangkan recommendation engine

---

## Soal 3.5 — Sistem Manajemen Klinik "MediCare"

### Case Study:
> Klinik "Sehat Sejahtera" (10 cabang) ingin membangun **sistem manajemen klinik** yang mencakup: pendaftaran pasien, antrian, konsultasi dokter, resep obat, dan laporan keuangan.

### Pertanyaan:
1. **[7 poin]** Buatlah Use Case Diagram untuk sistem MediCare! Identifikasi minimal 3 aktor dan 8 use cases, termasuk relasi `<<include>>` dan `<<extend>>`!
2. **[8 poin]** Bagaimana SRP dan OCP diterapkan saat merancang modul Antrian yang harus mendukung antrian Walk-in, Appointment, dan Prioritas (emergency)?

### Jawaban:

**1. Use Case Diagram:**

**Actors:**
- **Pasien** (primary user)
- **Dokter** (medical staff)
- **Admin/Kasir** (administrative)
- **Sistem Antrian** (secondary/system actor)

**Use Cases & Relasi:**
1. **Daftar Pasien Baru** (Admin) — <<include>> Validasi Data KTP
2. **Ambil Nomor Antrian** (Pasien) — <<extend>> Pilih Jadwal Appointment (opsional, bisa walk-in)
3. **Panggil Pasien** (Sistem Antrian)
4. **Konsultasi** (Dokter, Pasien)
5. **Tulis Resep** (Dokter) — <<include>> Cek Stok Obat
6. **Ambil Obat** (Pasien, Admin)
7. **Proses Pembayaran** (Admin) — <<include>> Generate Invoice
8. **Lihat Laporan Keuangan** (Admin)
9. **Lihat Riwayat Medis** (Dokter) — <<extend>> Cetak Surat Rujukan (opsional)
10. **Reschedule Appointment** (Pasien)

**2. SRP & OCP pada Modul Antrian:**

**SRP:**
```java
class QueueManager        // hanya mengelola antrian (tambah, hapus, reorder)
class QueueDisplay        // hanya menampilkan nomor antrian di layar monitor
class QueueNotification   // hanya kirim SMS/push notification saat nomor dipanggil
class QueueAnalytics      // hanya menghitung rata-rata waktu tunggu
```
Setiap class punya **satu alasan untuk berubah**: jika tampilan monitor diubah, hanya QueueDisplay yang dimodifikasi.

**OCP (Open for Extension, Closed for Modification):**
```java
// Base interface
interface QueueStrategy {
    int calculatePriority(Patient patient);
}

// Concrete implementations
class WalkInQueue implements QueueStrategy {
    int calculatePriority(Patient p) { return arrivalOrder; } // FIFO
}

class AppointmentQueue implements QueueStrategy {
    int calculatePriority(Patient p) { return scheduledTime; } // Berdasarkan jadwal
}

class EmergencyQueue implements QueueStrategy {
    int calculatePriority(Patient p) { return HIGHEST_PRIORITY; } // Selalu pertama
}

// Tambah tipe antrian baru (misal VIP Queue) TANPA ubah QueueManager!
class VIPQueue implements QueueStrategy {
    int calculatePriority(Patient p) { return HIGH_PRIORITY; }
}
```

---

---

# 🔷 KISI-KISI 4: Software Architecture Design (Concepts, Styles, Documentation, Patterns)
### (Bobot UTS: 25%)

---

## Soal 4.1 — Platform Streaming "IndoFlix"

### Referensi Diagram — Microservices Architecture:
![Microservices Architecture - E-Commerce Platform](SOFENG/diagrams/architecture_microservice.png)

### Case Study:
> Startup **IndoFlix** ingin membangun platform **video streaming** lokal untuk konten Indonesia. Fitur: browse katalog film, streaming video, rekomendasi personalisasi, subscription management, dan review/rating. Target: 500.000 user di tahun pertama, 5 juta di tahun ketiga.

### Pertanyaan:
1. **[10 poin]** Rekomendasikan architectural style yang tepat! Jelaskan pembagian services, bandingkan dengan Monolithic!
2. **[10 poin]** Terapkan 3 design patterns (Singleton, Facade, Observer) pada IndoFlix!
3. **[5 poin]** Buatlah ADR untuk keputusan arsitektur utama IndoFlix!

### Jawaban:

**1. Microservices Architecture untuk IndoFlix:**

**Pembagian Services:**
| Service | Tanggung Jawab | Database | Teknologi |
|---------|---------------|----------|-----------|
| User Service | Registrasi, login, profil | PostgreSQL | Java/Spring |
| Catalog Service | Film, series, metadata | MongoDB | Node.js |
| Streaming Service | Video delivery, transcoding | Object Storage (S3) | Go |
| Recommendation Service | ML-based personalisasi | Redis + PostgreSQL | Python |
| Subscription Service | Plan management, billing | PostgreSQL | Java |
| Review Service | Rating, review, komentar | MongoDB | Node.js |
| Notification Service | Email, push notification | Redis Queue | Node.js |

**Perbandingan dengan Monolithic:**
| Aspek | Microservices | Monolithic |
|-------|-----------------|-------------|
| Scaling | Scale Streaming Service saat peak (malam hari) tanpa scale Review | Harus scale seluruh app |
| Technology | Python untuk ML Recommendation, Go untuk high-performance Streaming | Satu stack untuk semua |
| Fault Isolation | Streaming down =/= Login down | Satu error -> seluruh platform down |
| Deployment | Deploy update Catalog tanpa restart Streaming | Harus redeploy seluruh app |
| Tim | Tim Streaming fokus Go, Tim Recommendation fokus Python | Semua developer di satu codebase |

**2. Design Patterns:**

**Singleton — Connection Pool Manager:**
```java
class DatabaseConnectionPool {
    private static DatabaseConnectionPool instance;
    private List<Connection> pool;
    
    private DatabaseConnectionPool() {
        pool = createConnections(20); // 20 connections
    }
    
    public static DatabaseConnectionPool getInstance() {
        if (instance == null) {
            instance = new DatabaseConnectionPool();
        }
        return instance;
    }
    
    public Connection getConnection() { /* return available connection */ }
}
```
**Konteks**: Hanya boleh ada SATU connection pool per service untuk menghindari resource exhaustion.

**Facade — Streaming Facade:**
```java
class StreamingFacade {
    public StreamInfo playMovie(String userId, String movieId) {
        authService.validateSubscription(userId);      // Cek langganan aktif
        catalogService.getMovieDetails(movieId);       // Ambil metadata film
        String streamUrl = cdnService.getStreamUrl(movieId); // Dapatkan URL CDN
        analyticsService.logPlayback(userId, movieId); // Catat untuk rekomendasi
        return new StreamInfo(streamUrl, metadata);
    }
}
```
**Konteks**: Frontend hanya perlu panggil `playMovie()` tanpa tahu subsistem kompleks di belakangnya.

**Observer — Subscription Notification:**
```java
class SubscriptionSubject {
    private List<Observer> observers; // EmailService, PushService, AnalyticsService
    
    public void changeSubscriptionStatus(String userId, String newStatus) {
        this.status = newStatus;
        notifyAll(userId, newStatus);
    }
    
    private void notifyAll(String userId, String status) {
        observers.forEach(obs -> obs.update(userId, status));
    }
}
```
**Konteks**: Saat user upgrade/downgrade langganan, EmailService kirim konfirmasi, PushService kirim notifikasi, AnalyticsService update data — semua otomatis.

**3. Architecture Decision Record:**
```
# ADR-001: Menggunakan Microservices dengan Event-Driven Communication

## Status: Accepted
## Tanggal: 14 April 2026

## Konteks
IndoFlix menargetkan pertumbuhan dari 500K ke 5M user dalam 3 tahun.
Fitur streaming video membutuhkan bandwidth dan processing yang sangat
berbeda dari fitur katalog dan subscription. Peak usage terjadi 
di malam hari (19:00-23:00) dengan traffic 10x dari rata-rata.

## Keputusan
Menggunakan Microservices Architecture dengan:
- API Gateway (Kong) sebagai entry point
- Event-driven async communication via Apache Kafka
- Synchronous REST API untuk real-time operations (login, streaming)

## Alasan
1. Streaming Service perlu di-scale independen saat peak hour
2. Recommendation Engine (ML) memerlukan stack berbeda (Python)
3. Fault isolation: jika Review Service down, streaming tetap jalan
4. Tim bisa independen per service

## Konsekuensi
- Butuh DevOps matang (Kubernetes, CI/CD)
- Eventual consistency untuk cross-service data
- Monitoring terdistribusi (Grafana + Prometheus)
- Overhead network latency antar service
```

---

## Soal 4.2 — Sistem ERP Universitas "UniCore"

### Case Study:
> Universitas "TechNusa" ingin membangun **ERP (Enterprise Resource Planning)** bernama "UniCore" yang mengintegrasikan: akademik (KRS, KHS), keuangan (SPP, beasiswa), kepegawaian (data dosen/staff), dan perpustakaan. Total pengguna: 30.000 mahasiswa, 1.500 dosen, 500 staff.

### Pertanyaan:
1. **[10 poin]** Rekomendasikan arsitektur **Layered Architecture** untuk UniCore! Gambarkan 4 layer dan jelaskan tanggung jawab setiap layer!
2. **[8 poin]** Dokumentasikan arsitektur UniCore menggunakan **4+1 View Model** (Kruchten)! Jelaskan isi setiap view!
3. **[7 poin]** Terapkan **Adapter Pattern** dan **Decorator Pattern** pada UniCore!

### Jawaban:

**1. Layered Architecture UniCore:**

```
+---------------------------------------------+
|         PRESENTATION LAYER                   |
|  Web Portal Mahasiswa, Portal Dosen,         |
|  Admin Dashboard, Mobile App                 |
+---------------------------------------------+
|         BUSINESS LOGIC LAYER                 |
|  AkademikService, KeuanganService,           |
|  KepegawaianService, PerpustakaanService     |
+---------------------------------------------+
|         DATA ACCESS LAYER                    |
|  AkademikRepository, KeuanganRepository,     |
|  KepegawaianRepository, PerpustakaanRepo     |
+---------------------------------------------+
|         DATABASE LAYER                       |
|  PostgreSQL (utama), Redis (cache),          |
|  MinIO (file storage untuk dokumen)          |
+---------------------------------------------+
```

| Layer | Tanggung Jawab | Contoh |
|-------|---------------|--------|
| **Presentation** | Tampilan UI, routing, form validation | Halaman KRS mahasiswa, dashboard keuangan admin |
| **Business Logic** | Aturan bisnis, workflow, validasi domain | "Mahasiswa hanya boleh ambil max 24 SKS", "SPP harus dibayar sebelum KRS" |
| **Data Access** | CRUD operations, query optimization, caching | `getStudentGrades(nimId)`, cache data KHS di Redis |
| **Database** | Penyimpanan data persisten | Tabel mahasiswa, transaksi SPP, data buku perpustakaan |

**2. 4+1 View Model:**

| View | Stakeholder | Diagram | Konteks UniCore |
|------|------------|---------|----------------|
| **Logical View** | End-user, analyst | Class Diagram, Package Diagram | Package: Akademik, Keuangan, Kepegawaian, Perpustakaan. Class: Mahasiswa, Dosen, MataKuliah, SPP |
| **Process View** | Integrator, engineer | Activity, Sequence Diagram | Proses KRS: Login -> Pilih MK -> Validasi Prasyarat -> Konfirmasi -> Update SKS. Concurrent access 30K mahasiswa |
| **Development View** | Programmer, manager | Component, Package Diagram | Module Akademik (Java/Spring), Module Keuangan (Java/Spring), Shared Library (common utils) |
| **Physical View** | System engineer | Deployment Diagram | Web Server (Nginx), App Server (Tomcat cluster), DB Server (PostgreSQL HA), Redis Cluster |
| **Scenarios** | Semua | Use Case Diagram | UC: Isi KRS, Bayar SPP, Input Nilai, Pinjam Buku — menghubungkan semua view |

**3. Adapter & Decorator Pattern:**

**Adapter Pattern — Integrasi Payment Gateway:**
```java
// UniCore punya interface internal
interface PaymentProcessor {
    PaymentResult charge(String studentId, double amount);
}

// Bank BNI punya API yang berbeda format
class BNIApiClient {
    BNIResponse processBilling(String accountNo, long amountInCents, String ref) { ... }
}

// Adapter mengkonversi interface
class BNIPaymentAdapter implements PaymentProcessor {
    private BNIApiClient bniClient;
    
    PaymentResult charge(String studentId, double amount) {
        String accountNo = lookupBNIAccount(studentId);
        long amountCents = (long)(amount * 100);
        BNIResponse resp = bniClient.processBilling(accountNo, amountCents, generateRef());
        return convertToPaymentResult(resp);
    }
}
```

**Decorator Pattern — Logging & Caching pada Repository:**
```java
// Base
interface StudentRepository {
    Student findById(String nim);
}

class PostgresStudentRepository implements StudentRepository {
    Student findById(String nim) { /* query database */ }
}

// Decorator: Cache
class CachedStudentRepository implements StudentRepository {
    private StudentRepository wrapped;
    private Cache cache;
    
    Student findById(String nim) {
        Student cached = cache.get(nim);
        if (cached != null) return cached;
        Student student = wrapped.findById(nim); // delegate to original
        cache.put(nim, student);
        return student;
    }
}

// Decorator: Logging
class LoggingStudentRepository implements StudentRepository {
    private StudentRepository wrapped;
    
    Student findById(String nim) {
        logger.info("Finding student: " + nim);
        Student result = wrapped.findById(nim);
        logger.info("Found: " + result.getName());
        return result;
    }
}

// Penggunaan: Chain decorators
StudentRepository repo = new LoggingStudentRepository(
    new CachedStudentRepository(
        new PostgresStudentRepository()
    )
);
```

---

## Soal 4.3 — Compiler "LangX"

### Case Study:
> Tim riset ingin membangun **compiler sederhana** untuk bahasa pemrograman baru "LangX". Compiler harus mengubah source code menjadi bytecode melalui tahap: lexical analysis, parsing, semantic analysis, optimization, dan code generation.

### Pertanyaan:
1. **[10 poin]** Mengapa **Pipe and Filter Architecture** adalah pilihan terbaik untuk compiler LangX? Identifikasi setiap filter dan pipe!
2. **[8 poin]** Bandingkan Pipe and Filter dengan Repository Architecture — mana yang lebih tepat dan mengapa?
3. **[7 poin]** Terapkan **Factory Method Pattern** untuk membuat berbagai jenis AST (Abstract Syntax Tree) nodes!

### Jawaban:

**1. Pipe and Filter untuk Compiler LangX:**

```
Source Code -> [Lexer] -> tokens -> [Parser] -> AST -> [Semantic Analyzer] -> annotated AST -> [Optimizer] -> optimized AST -> [Code Generator] -> Bytecode
```

| Filter | Input | Output | Fungsi |
|--------|-------|--------|--------|
| **Lexer** | Source code (text) | Token stream | Pecah teks menjadi tokens (keyword, identifier, operator) |
| **Parser** | Token stream | AST (Abstract Syntax Tree) | Bangun tree structure dari grammar rules |
| **Semantic Analyzer** | AST | Annotated AST | Cek tipe data, scope, dan semantic rules |
| **Optimizer** | Annotated AST | Optimized AST | Hapus dead code, constant folding, loop optimization |
| **Code Generator** | Optimized AST | Bytecode | Translate AST menjadi bytecode executable |

**Mengapa Pipe and Filter?**
- Setiap filter **independen** dan bisa dikembangkan/ditest terpisah
- Bisa **menambah filter** baru (misal: security analysis filter) tanpa mengubah yang lain
- Data mengalir **satu arah** secara berurutan — sesuai dengan proses kompilasi
- Filter bisa **dipakai ulang** di compiler lain

**2. Pipe and Filter vs Repository:**

| Aspek | Pipe and Filter | Repository |
|-------|-------------------|-------------|
| Data flow | Sequential, satu arah — sesuai kompilasi | Shared data store — tidak natural untuk kompilasi |
| Independensi | Setiap filter independen | Semua komponen bergantung pada repository |
| Simplicity | Sederhana dan intuitive | Lebih kompleks (concurrency, locking) |
| Reusability | Filter bisa dipakai di compiler lain | Komponen terikat pada format repository |

Repository **bisa** digunakan jika compiler butuh shared symbol table yang diakses oleh banyak fase secara random, tapi untuk kompilasi linear, Pipe and Filter lebih natural.

**3. Factory Method untuk AST Nodes:**
```java
abstract class ASTNodeFactory {
    abstract ASTNode createNode(String type, Object value);
}

class ExpressionNodeFactory extends ASTNodeFactory {
    ASTNode createNode(String type, Object value) {
        switch(type) {
            case "binary": return new BinaryExpression(value);
            case "unary": return new UnaryExpression(value);
            case "literal": return new LiteralExpression(value);
            default: throw new InvalidNodeTypeException();
        }
    }
}

class StatementNodeFactory extends ASTNodeFactory {
    ASTNode createNode(String type, Object value) {
        switch(type) {
            case "if": return new IfStatement(value);
            case "while": return new WhileStatement(value);
            case "return": return new ReturnStatement(value);
            default: throw new InvalidNodeTypeException();
        }
    }
}
```

---

## Soal 4.4 — Sistem IoT Smart Home "HomeSense"

### Case Study:
> Perusahaan **HomeSense** ingin membangun platform **smart home** yang menghubungkan sensor suhu, lampu pintar, kamera, dan kunci pintar. Sensor mengirim data setiap 5 detik. Notifikasi real-time harus dikirim ke pengguna saat terjadi anomali (suhu > 40C, gerakan terdeteksi saat mode Away).

### Pertanyaan:
1. **[10 poin]** Mengapa **Event-Driven Architecture** adalah pilihan terbaik? Jelaskan komponen Event Producer, Consumer, dan Event Bus!
2. **[10 poin]** Bandingkan Event-Driven dengan Client-Server Architecture! Mana yang lebih efisien untuk IoT?
3. **[5 poin]** Terapkan **Observer Pattern** untuk sistem notifikasi anomali HomeSense!

### Jawaban:

**1. Event-Driven Architecture untuk HomeSense:**

```
[Sensor Suhu]--event-->+
[Lampu Pintar]--event--+       +-->[ Notification Consumer ] -> Push to Mobile
[Kamera]--event--------+-->[ Event Bus ]-->[ Analytics Consumer ] -> Dashboard
[Kunci Pintar]--event--+  (Kafka/    +-->[ Automation Consumer ] -> Trigger Rules
                          RabbitMQ)
```

| Komponen | Peran | Contoh di HomeSense |
|----------|-------|---------------------|
| **Event Producer** | Menghasilkan event | Sensor suhu: `{type:"temperature", value:42, room:"kitchen"}` |
| **Event Bus** | Routing event ke consumer yang tepat | Kafka topic: `sensor-data`, `alarm-events`, `device-control` |
| **Event Consumer** | Memproses event | NotificationConsumer: kirim alert jika suhu > 40C |

**Mengapa Event-Driven?**
- **Asynchronous**: Sensor kirim data tanpa menunggu respons — tidak blocking
- **Loose coupling**: Sensor tidak perlu tahu siapa yang memproses datanya
- **Scalable**: Tambah consumer baru tanpa mengubah producer
- **Real-time**: Event diproses begitu masuk — cocok untuk notifikasi anomali

**2. Event-Driven vs Client-Server:**

| Aspek | Event-Driven | Client-Server |
|-------|----------------|-----------------|
| Communication | Asynchronous, push-based | Request-response, pull-based |
| Latency | Near real-time (milliseconds) | Tergantung polling interval |
| Scalability | Horizontal scaling via partitioning | Server bottleneck jika banyak sensor |
| IoT Suitability | Sensor kirim event kapanpun — natural | Sensor harus poll server — waste bandwidth |
| Coupling | Loose (producer != consumer) | Tight (client harus tahu server address) |

Client-Server mengharuskan sensor **polling** server setiap detik untuk cek perintah — **wasteful** untuk device IoT dengan battery terbatas.

**3. Observer Pattern untuk Notifikasi Anomali:**
```java
interface AnomalyObserver {
    void onAnomaly(AnomalyEvent event);
}

class SensorMonitor {
    private List<AnomalyObserver> observers = new ArrayList<>();
    
    void addObserver(AnomalyObserver obs) { observers.add(obs); }
    
    void processReading(SensorData data) {
        if (data.temperature > 40) {
            AnomalyEvent event = new AnomalyEvent("HIGH_TEMP", data);
            observers.forEach(obs -> obs.onAnomaly(event)); // Notify semua
        }
        if (data.motionDetected && homeMode == "AWAY") {
            AnomalyEvent event = new AnomalyEvent("INTRUDER", data);
            observers.forEach(obs -> obs.onAnomaly(event));
        }
    }
}

class PushNotificationService implements AnomalyObserver {
    void onAnomaly(AnomalyEvent event) {
        sendPushToOwner("Warning: " + event.type + " di " + event.room);
    }
}

class SirenService implements AnomalyObserver {
    void onAnomaly(AnomalyEvent event) {
        if (event.type.equals("INTRUDER")) activateSiren();
    }
}

class LoggingService implements AnomalyObserver {
    void onAnomaly(AnomalyEvent event) {
        database.log(event); // Untuk audit trail
    }
}
```

---

## Soal 4.5 — Aplikasi Ride-Hailing "JalanYuk"

### Case Study:
> Startup transportasi **JalanYuk** ingin membangun aplikasi ride-hailing (seperti Grab/Gojek). Fitur: booking ride, matching driver-passenger, real-time tracking, dynamic pricing, multiple payment, dan rating.

### Pertanyaan:
1. **[10 poin]** Desain arsitektur **Microservices + MVC** hybrid untuk JalanYuk! Bagaimana MVC diterapkan di dalam setiap microservice?
2. **[10 poin]** Terapkan 3 design patterns berbeda (Strategy, Command, Facade) pada fitur-fitur JalanYuk!
3. **[5 poin]** Jelaskan mengapa **4+1 View Model** penting untuk mendokumentasikan arsitektur JalanYuk yang kompleks!

### Jawaban:

**1. Microservices + MVC Hybrid:**

**Macro-level: Microservices**
```
[Mobile App] -> [API Gateway] -> +-- User Service
                                 +-- Ride Service
                                 +-- Matching Service
                                 +-- Pricing Service
                                 +-- Payment Service
                                 +-- Tracking Service
                                 +-- Rating Service
```

**Micro-level: MVC di dalam setiap service**
```
Ride Service:
+-- Controller (RideController)  -> Menerima HTTP request, routing
|   +-- POST /rides, GET /rides/{id}, PUT /rides/{id}/cancel
+-- Model (Ride, Driver, Route)  -> Business logic dan data
|   +-- calculateETA(), matchDriver(), updateStatus()
+-- View (JSON Response)         -> Format response API
    +-- { rideId, status, driverInfo, eta, price }
```

Setiap microservice **internal** mengikuti pola MVC sehingga kode terstruktur dan maintainable, sementara **eksternal** berinteraksi via REST API.

**2. Design Patterns:**

**Strategy Pattern — Dynamic Pricing:**
```java
interface PricingStrategy {
    double calculatePrice(Route route, TimeContext context);
}
class NormalPricing implements PricingStrategy { /* base rate x distance */ }
class SurgePricing implements PricingStrategy { /* base x distance x surge_multiplier */ }
class PromoPricing implements PricingStrategy { /* (base x distance) - discount */ }

// Runtime selection
PricingStrategy strategy = context.isPeakHour() ? new SurgePricing() : new NormalPricing();
double price = strategy.calculatePrice(route, context);
```

**Command Pattern — Ride Actions (Undo-able):**
```java
interface RideCommand {
    void execute();
    void undo();
}
class BookRideCommand implements RideCommand {
    void execute() { rideService.createRide(passenger, destination); }
    void undo() { rideService.cancelRide(rideId); refundPayment(); }
}
class CancelRideCommand implements RideCommand {
    void execute() { rideService.cancelRide(rideId); }
    void undo() { rideService.reactivateRide(rideId); } // Jika belum expired
}
```

**Facade Pattern — Booking Facade:**
```java
class BookingFacade {
    BookingResult bookRide(String passengerId, Location pickup, Location dest) {
        User user = userService.validate(passengerId);
        Route route = routingService.calculateRoute(pickup, dest);
        double price = pricingService.calculate(route);
        Driver driver = matchingService.findNearestDriver(pickup);
        Payment payment = paymentService.holdPayment(user, price);
        trackingService.startTracking(driver, route);
        return new BookingResult(driver, price, route.getETA());
    }
}
```

**3. Pentingnya 4+1 View Model untuk JalanYuk:**

| View | Mengapa Penting untuk JalanYuk |
|------|-------------------------------|
| **Logical** | Dokumentasikan class structure per service — krusial karena 7+ services dengan logic berbeda |
| **Process** | Visualisasikan real-time matching dan tracking — concurrent activities kritis untuk performance |
| **Development** | Koordinasi 7+ tim development, pastikan shared library konsisten |
| **Physical** | Deployment di cloud (AWS/GCP) dengan auto-scaling per service saat peak hour |
| **Scenarios** | Use cases menghubungkan semua view: "Book Ride" melibatkan semua 7 services — tanpa scenarios, sulit melihat big picture |

---

---

# 🔷 KISI-KISI 5: Project Management, Estimation, Scheduling & Risk
### (Bobot UTS: 15%)

> **Catatan**: Kisi-kisi ini sering meminta perhitungan COCOMO dan Critical Path Method (CPM). Pastikan kamu menghafal rumus dan cara hitung!

---

## Soal 5.1 — Proyek E-Procurement "PintuBelanja"

### Case Study:
> PT GovTech mendapatkan kontrak membangun **sistem e-procurement** untuk pemerintah daerah. Tim: 12 developer (campuran senior dan junior). Estimasi awal: 60 KLOC. Deadline kontrak: **12 bulan**. Proyek melibatkan integrasi dengan 3 sistem pemerintah yang sudah ada (SIMDA, SIPD, e-Budgeting).

### Pertanyaan:
1. **[5 poin]** Hitung estimasi effort dan durasi menggunakan Basic COCOMO (mode **Embedded** karena constraint pemerintah ketat)! Apakah deadline feasible?
2. **[5 poin]** Tentukan Critical Path dari task network berikut:
3. **[5 poin]** Identifikasi 4 risiko utama dan buatlah tabel RMMM lengkap!

**Task Network:**
| Task | Durasi (minggu) | Predecessor |
|------|-----------------|-------------|
| A: Analisis & Perencanaan | 4 | - |
| B: Design Database | 3 | A |
| C: Design UI/UX | 4 | A |
| D: Backend Development | 8 | B |
| E: Frontend Development | 6 | C |
| F: Integrasi SIMDA | 3 | D |
| G: Integrasi SIPD | 3 | D |
| H: Integrasi e-Budgeting | 2 | D |
| I: System Testing | 4 | E, F, G, H |
| J: UAT & Deployment | 3 | I |

### Jawaban:

**1. COCOMO Estimation (Embedded Mode):**

```
Effort = a x (KLOC)^b = 3.6 x (60)^1.20
       = 3.6 x 120.56
       = 434 person-months

Duration = c x (Effort)^d = 2.5 x (434)^0.32
         = 2.5 x 6.67
         = 16.7 months = sekitar 17 bulan
```

**Analisis Feasibility:**
- Effort = 434 person-months, Tim = 12 developer
- Effort per orang = 434 / 12 = **36.2 bulan per orang**
- Durasi COCOMO = **17 bulan**, deadline = **12 bulan**
- **TIDAK FEASIBLE** — gap 5 bulan
- **Rekomendasi**: 
  - Tambah developer menjadi 18-20 (hati-hati Brooks's Law!)
  - Kurangi scope (incremental delivery)
  - Negosiasi perpanjangan deadline ke 18 bulan

**2. Critical Path:**

**Forward Pass:**
```
A: ES=0,  EF=4
B: ES=4,  EF=7    (pred: A)
C: ES=4,  EF=8    (pred: A)
D: ES=7,  EF=15   (pred: B)
E: ES=8,  EF=14   (pred: C)
F: ES=15, EF=18   (pred: D)
G: ES=15, EF=18   (pred: D)
H: ES=15, EF=17   (pred: D)
I: ES=18, EF=22   (ES = max(EF_E, EF_F, EF_G, EF_H) = max(14,18,18,17) = 18)
J: ES=22, EF=25   (pred: I)
```

**Backward Pass (LF_J = 25):**
```
J: LF=25, LS=22   (Slack=0) *
I: LF=22, LS=18   (Slack=0) *
F: LF=18, LS=15   (Slack=0) *
G: LF=18, LS=15   (Slack=0) *
H: LF=18, LS=16   (Slack=1)
E: LF=18, LS=12   (Slack=4)
D: LF=15, LS=7    (Slack=0) *
C: LF=12, LS=8    (Slack=4)
B: LF=7,  LS=4    (Slack=0) *
A: LF=4,  LS=0    (Slack=0) *
```

**Critical Path: A -> B -> D -> F -> I -> J** (atau A -> B -> D -> G -> I -> J)
**Durasi minimum: 25 minggu = sekitar 6.25 bulan**

**3. Tabel RMMM:**

| # | Risiko | Prob. | Impact | RE | Strategi | Tindakan |
|---|--------|-------|--------|-----|----------|----------|
| 1 | API sistem pemerintah (SIMDA/SIPD) tidak stabil/berubah | 0.7 | 8 | 5.6 | **Mitigation** | Riset API di Sprint 1; buat abstraction layer; siapkan mock API untuk development |
| 2 | Deadline 12 bulan tidak realistis (COCOMO: 17 bulan) | 0.8 | 9 | 7.2 | **Avoidance** | Negosiasi scope reduction; gunakan incremental delivery |
| 3 | Security vulnerability pada data procurement sensitif | 0.5 | 10 | 5.0 | **Mitigation** | Security audit setiap sprint; penetration testing; enkripsi end-to-end |
| 4 | Junior developer lambat belajar domain procurement | 0.6 | 5 | 3.0 | **Mitigation** | Pair programming senior-junior; domain training di minggu pertama |

---

## Soal 5.2 — Platform LMS "EduSync"

### Case Study:
> Universitas ingin membangun **LMS (Learning Management System)** baru. Tim 6 developer. Estimasi: 25 KLOC menggunakan modern framework. Setelah 3 bulan development (Sprint 6), data EVA menunjukkan:
> - BCWS (Planned Value) = 200 juta
> - BCWP (Earned Value) = 150 juta  
> - ACWP (Actual Cost) = 220 juta

### Pertanyaan:
1. **[5 poin]** Hitung COCOMO (mode Organic), tentukan effort dan durasi!
2. **[5 poin]** Analisis EVA: Hitung SPI dan CPI. Jelaskan status proyek saat ini!
3. **[5 poin]** Jika Earned Value Analysis menunjukkan masalah, identifikasi 3 risiko dan berikan rekomendasi recovery!

### Jawaban:

**1. COCOMO (Organic Mode):**
```
Effort = 2.4 x (25)^1.05 = 2.4 x 27.6 = 66.3 person-months
Duration = 2.5 x (66.3)^0.38 = 2.5 x 5.14 = 12.8 months = sekitar 13 bulan
```
- Tim 6 developer -> Effort per orang: 66.3/6 = **11 bulan per orang**
- Durasi COCOMO: **13 bulan** — feasible jika deadline > 13 bulan

**2. Earned Value Analysis:**
```
SPI = BCWP / BCWS = 150 / 200 = 0.75
CPI = BCWP / ACWP = 150 / 220 = 0.68
```

**Interpretasi:**
- **SPI = 0.75 < 1** -> Proyek **behind schedule** (hanya 75% pekerjaan selesai dari yang direncanakan)
- **CPI = 0.68 < 1** -> Proyek **over budget** (efisiensi biaya hanya 68%, setiap Rp 1 yang dikeluarkan hanya menghasilkan Rp 0.68 pekerjaan)
- **Status: KRITIS** — Proyek tertinggal jadwal DAN melebihi anggaran

**3. Risiko & Recovery:**

| # | Risiko (Berdasarkan EVA) | Rekomendasi Recovery |
|---|------------------------|---------------------|
| 1 | **Schedule overrun** (SPI 0.75) -> fitur delivery terlambat | Prioritaskan fitur core (MoSCoW), **defer** fitur "Could/Won't" ke Phase 2. Tambah 1-2 developer jika budget tersedia |
| 2 | **Cost overrun** (CPI 0.68) -> boros di development | Audit: kenapa ACWP tinggi? Kemungkinan: overtime berlebihan, rework karena requirement ambigu. **Clarify requirement** segera untuk reduce rework |
| 3 | **Quality compromise** -> karena terburu-buru, testing dikorbankan | Jangan kurangi testing! Implementasi automated testing untuk hemat waktu manual QA. Technical debt sekarang = mahal di masa depan |

---

## Soal 5.3 — Proyek Migrasi Database "DataShift"

### Case Study:
> Perusahaan asuransi ingin **migrasi database** dari legacy mainframe ke cloud PostgreSQL. Data: 50 juta records, 200 tabel, 500 stored procedures. Tim: 5 DBA + 3 developer. Deadline CTO: 6 bulan.

### Pertanyaan:
1. **[5 poin]** Buatlah WBS (Work Breakdown Structure) untuk proyek DataShift!
2. **[5 poin]** Identifikasi 5 risiko spesifik migrasi database dan buat risk table!
3. **[5 poin]** Terapkan W5HH Principle (Boehm) untuk merencanakan proyek DataShift!

### Jawaban:

**1. Work Breakdown Structure (WBS):**
```
DataShift Project
+-- Phase 1: Assessment (Minggu 1-3)
|   +-- Audit database legacy (schema, data, dependencies)
|   +-- Mapping tabel -> PostgreSQL equivalents
|   +-- Identify stored procedure conversion needs
+-- Phase 2: Design (Minggu 4-6)
|   +-- Design target schema PostgreSQL
|   +-- Design ETL (Extract-Transform-Load) pipeline
|   +-- Design rollback strategy
+-- Phase 3: Development (Minggu 7-14)
|   +-- Build ETL scripts
|   +-- Convert 500 stored procedures ke PostgreSQL functions
|   +-- Build data validation tools
|   +-- Build monitoring dashboard
+-- Phase 4: Testing (Minggu 15-20)
|   +-- Unit testing setiap stored procedure conversion
|   +-- Data integrity testing (compare source vs target)
|   +-- Performance testing (query benchmark)
|   +-- Stress testing (50 juta records)
+-- Phase 5: Migration Execution (Minggu 21-23)
|   +-- Dry run migration (staging)
|   +-- Go-Live migration (production, weekend window)
|   +-- Post-migration verification
+-- Phase 6: Stabilization (Minggu 24-26)
    +-- Monitor production performance
    +-- Fix post-migration bugs
    +-- Decommission legacy mainframe
```

**2. Risk Table:**

| # | Risiko | Prob. | Impact | RE | Strategi |
|---|--------|-------|--------|-----|----------|
| 1 | Data loss/corruption saat migrasi | 0.3 | 10 | 3.0 | **Mitigation**: Checksums, row count validation, rollback plan |
| 2 | Stored procedure conversion incompatible | 0.7 | 7 | 4.9 | **Mitigation**: Early PoC, convert yang kompleks dulu |
| 3 | Performance degradation setelah migrasi | 0.5 | 8 | 4.0 | **Mitigation**: Query optimization, indexing, benchmarking pre-migration |
| 4 | Downtime melebihi maintenance window | 0.4 | 9 | 3.6 | **Contingency**: Dry run rehearsal, parallel run selama 1 minggu |
| 5 | Legacy system documentation tidak lengkap | 0.8 | 6 | 4.8 | **Mitigation**: Interview DBA legacy, reverse-engineer schema |

**3. W5HH Principle:**

| Pertanyaan | Jawaban untuk DataShift |
|-----------|------------------------|
| **Why** | Mainframe maintenance cost $500K/tahun, vendor end-of-support 2027 |
| **What** | Migrasi 200 tabel, 50M records, 500 stored procedures ke PostgreSQL cloud |
| **When** | 6 bulan, Go-Live di weekend H-1 bulan ke-6 |
| **Who** | 5 DBA (migration execution), 3 developer (ETL + SP conversion), 1 PM |
| **Where** | Tim on-site di kantor pusat (akses mainframe), cloud di AWS |
| **How** | ETL pipeline (Apache NiFi), SP conversion manual + automated tools |
| **How much** | 8 orang x 6 bulan = 48 person-months, AWS infrastructure ~$5K/bulan |

---

## Soal 5.4 — Aplikasi Point of Sale "KasirPro"

### Case Study:
> Perusahaan retail ingin membangun **sistem POS "KasirPro"** untuk 100 toko. Tim 10 developer. Setelah di-estimasi menggunakan Function Point Analysis:
> - External Inputs (EI): 15 (Average complexity)
> - External Outputs (EO): 10 (Complex)
> - External Inquiries (EQ): 8 (Simple)
> - Internal Logical Files (ILF): 6 (Average)
> - External Interface Files (EIF): 4 (Complex)
> - Sum of 14 General System Characteristics (SFi) = 52

### Pertanyaan:
1. **[5 poin]** Hitung Function Points (FP) untuk KasirPro!
2. **[5 poin]** Jika productivity rate = 15 FP/person-month, hitung effort dan durasi! Apakah feasible dengan 10 developer dalam 8 bulan?
3. **[5 poin]** Jelaskan perbedaan FP-based estimation vs LOC-based estimation! Kapan masing-masing lebih tepat digunakan?

### Jawaban:

**1. Perhitungan Function Points:**

**Langkah 1: Hitung Unadjusted FP (UFP)**

| Tipe | Count | Complexity | Weight | Total |
|------|-------|------------|--------|-------|
| EI | 15 | Average | 4 | 15 x 4 = 60 |
| EO | 10 | Complex | 7 | 10 x 7 = 70 |
| EQ | 8 | Simple | 3 | 8 x 3 = 24 |
| ILF | 6 | Average | 10 | 6 x 10 = 60 |
| EIF | 4 | Complex | 10 | 4 x 10 = 40 |
| **UFP** | | | | **254** |

**Langkah 2: Hitung Value Adjustment Factor (VAF)**
```
FP = UFP x (0.65 + 0.01 x SFi)
   = 254 x (0.65 + 0.01 x 52)
   = 254 x (0.65 + 0.52)
   = 254 x 1.17
   = 297.18 = sekitar 297 FP
```

**2. Effort & Duration:**
```
Effort = FP / Productivity Rate = 297 / 15 = 19.8 person-months

Duration = Effort / Team Size = 19.8 / 10 = 1.98 bulan = sekitar 2 bulan
```

**Analisis Feasibility:**
- Dengan 10 developer dan effort 19.8 person-months -> **durasi ~2 bulan**
- Deadline 8 bulan -> **SANGAT FEASIBLE**
- Sisa waktu bisa digunakan untuk testing tambahan, training user di 100 toko, dan phased deployment

**3. FP vs LOC:**

| Aspek | Function Point (FP) | Lines of Code (LOC) |
|-------|-------------------|---------------------|
| Perspektif | **User functionality** (apa yang dilakukan) | **Developer effort** (berapa baris kode) |
| Independence | **Language-independent** — sama untuk Java atau Python | **Language-dependent** — Python biasanya 3-5x lebih sedikit dari Java |
| Timing | Bisa dihitung **di awal** (saat requirement) | Sulit dihitung **sebelum coding** |
| Cocok untuk | Proyek baru, perbandingan antar bahasa | Proyek maintenance, benchmarking internal |
| Kelemahan | Subjektif (complexity assessment) | Deceptive (baris komentar? baris kosong?) |

---

## Soal 5.5 — Proyek Integrasi Sistem "BridgeConnect"

### Case Study:
> Perusahaan logistics ingin **mengintegrasikan** 4 sistem terpisah: WMS (Warehouse), TMS (Transport), CRM, dan ERP. Tim: 15 developer. Deadline: 10 bulan. Integrasi menggunakan API gateway dan message queue.

**Task Network Integrasi:**
| Task | Durasi (minggu) | Predecessor |
|------|-----------------|-------------|
| T1: Requirement & API mapping | 3 | - |
| T2: API Gateway setup | 2 | T1 |
| T3: Message Queue setup | 2 | T1 |
| T4: WMS integration | 5 | T2 |
| T5: TMS integration | 4 | T2 |
| T6: CRM integration | 3 | T2, T3 |
| T7: ERP integration | 6 | T3 |
| T8: End-to-end testing | 4 | T4, T5, T6, T7 |
| T9: Performance tuning | 2 | T8 |
| T10: Go-Live | 1 | T9 |

### Pertanyaan:
1. **[5 poin]** Tentukan Critical Path dan durasi minimum proyek!
2. **[5 poin]** Identifikasi task mana yang memiliki slack terbesar! Apa implikasinya bagi resource allocation?
3. **[5 poin]** Hitung Earned Value jika setelah minggu ke-10: BCWS = 300 juta, BCWP = 250 juta, ACWP = 280 juta. Berikan analisis dan rekomendasi!

### Jawaban:

**1. Critical Path:**

**Forward Pass:**
```
T1:  ES=0,  EF=3
T2:  ES=3,  EF=5   (pred: T1)
T3:  ES=3,  EF=5   (pred: T1)
T4:  ES=5,  EF=10  (pred: T2)
T5:  ES=5,  EF=9   (pred: T2)
T6:  ES=5,  EF=8   (pred: T2,T3 -> max(5,5)=5)
T7:  ES=5,  EF=11  (pred: T3)
T8:  ES=11, EF=15  (ES = max(EF_T4, EF_T5, EF_T6, EF_T7) = max(10,9,8,11) = 11)
T9:  ES=15, EF=17  (pred: T8)
T10: ES=17, EF=18  (pred: T9)
```

**Backward Pass (LF_T10 = 18):**
```
T10: LF=18, LS=17  (Slack=0) *
T9:  LF=17, LS=15  (Slack=0) *
T8:  LF=15, LS=11  (Slack=0) *
T7:  LF=11, LS=5   (Slack=0) *
T6:  LF=11, LS=8   (Slack=3)
T5:  LF=11, LS=7   (Slack=2)
T4:  LF=11, LS=6   (Slack=1)
T3:  LF=5,  LS=3   (Slack=0) *
T2:  LF=6,  LS=4   (Slack=1)
T1:  LF=3,  LS=0   (Slack=0) *
```

**Critical Path: T1 -> T3 -> T7 -> T8 -> T9 -> T10**
**Durasi minimum: 18 minggu = sekitar 4.5 bulan**

**2. Task dengan Slack Terbesar:**
- **T6 (CRM Integration)**: Slack = 3 minggu -> bisa terlambat 3 minggu tanpa mempengaruhi proyek
- **T5 (TMS Integration)**: Slack = 2 minggu
- **T4 (WMS Integration)**: Slack = 1 minggu

**Implikasi Resource Allocation:**
- Developer yang dialokasikan ke T6 (CRM) bisa **dipinjam sementara** ke T7 (ERP, critical path) untuk mempercepat critical path
- T6 bisa dimulai lebih lambat tanpa risiko -> fleksibilitas staffing
- Fokuskan resource terbaik ke critical path (T1 -> T3 -> T7)

**3. Earned Value Analysis:**
```
SPI = BCWP / BCWS = 250 / 300 = 0.83
CPI = BCWP / ACWP = 250 / 280 = 0.89
```

**Analisis:**
- **SPI = 0.83** -> Behind schedule 17% — proyek tertinggal
- **CPI = 0.89** -> Over budget 11% — efisiensi biaya 89%
- **Status**: Schedule delay lebih mengkhawatirkan daripada cost overrun

**Rekomendasi:**
1. **Re-prioritize**: Fokuskan semua resource ke ERP integration (critical path T7) — jika T7 selesai lebih cepat, seluruh proyek terbantu
2. **Parallelize**: Mulai end-to-end testing (T8) untuk sistem yang sudah selesai integ (partial testing), tidak perlu tunggu semua selesai
3. **Budget**: CPI 0.89 masih manageable — jangan potong biaya (bisa memperburuk schedule). Investasi di automation testing untuk hemat di T8

---

> **Tips Menjawab Soal UTS:**
> 1. Selalu **kaitkan teori dengan case study** — jangan hanya menghafal definisi
> 2. Gunakan **tabel perbandingan** saat membandingkan 2+ konsep
> 3. Untuk diagram UML: gambar komponen utama, relasi, dan multiplicity
> 4. Untuk COCOMO: **tunjukkan rumus dan perhitungan step by step**
> 5. Untuk Critical Path: **selalu lakukan Forward + Backward Pass** dan tunjukkan Slack setiap task
> 6. Untuk risk: gunakan format tabel **Probabilitas x Impact = Risk Exposure**
