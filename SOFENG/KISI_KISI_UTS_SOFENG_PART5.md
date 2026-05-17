# SOAL 5 (15%) — Project Management, Estimasi, Scheduling, Risk

---

## 5.1 Project Management and Planning

### Apa itu Software Project Management?
Aktivitas **merencanakan, mengorganisir, memimpin, dan mengendalikan** proyek software agar selesai tepat waktu, sesuai budget, dan memenuhi kualitas.

### 4P dalam Software Project Management
1. **People** — faktor terpenting! Rekrut, motivasi, organisir, dan kelola tim
2. **Product** — pahami scope, requirement, dan constraints produk
3. **Process** — pilih process model yang tepat (Agile, Waterfall, dll.)
4. **Project** — perencanaan, monitoring, dan pengendalian

### W5HH Principle (Boehm)
Pertanyaan yang harus dijawab saat planning:
- **Why** — mengapa proyek ini dikembangkan?
- **What** — apa yang akan dilakukan?
- **When** — kapan jadwalnya?
- **Who** — siapa yang bertanggung jawab?
- **Where** — di mana tim berada (organisasi)?
- **How** — bagaimana secara teknis dan manajerial?
- **How much** — berapa resource yang dibutuhkan?

### Work Breakdown Structure (WBS)
- Memecah proyek menjadi **task-task yang lebih kecil** dan manageable
- Struktur hierarkis: Project → Phase → Activity → Task
- Setiap task harus bisa di-estimasi dan di-assign

---

## 5.2 Project Estimation Techniques

### Mengapa Estimasi Penting?
- Menentukan **budget, jadwal, dan resource** yang dibutuhkan
- Estimasi yang buruk = proyek terlambat/over-budget

### Teknik-Teknik Estimasi

#### 1. Expert Judgment (Penilaian Ahli)
- Berdasarkan **pengalaman** orang yang pernah mengerjakan proyek serupa
- **Kelebihan**: Cepat, mempertimbangkan faktor intangible
- **Kekurangan**: Subjektif, tergantung ketersediaan ahli
- Lebih akurat jika menggunakan **Delphi Technique** (beberapa ahli memberikan estimasi independen lalu dikonsensuskan)

#### 2. Decomposition Techniques

**a. LOC (Lines of Code) Based:**
- Estimasi berdasarkan **jumlah baris kode** yang diperlukan
- Langkah: dekomposisi fungsi → estimasi LOC per fungsi → total LOC → estimasi effort
- **Rumus**: Effort = LOC / Productivity Rate
- **Kekurangan**: Tergantung bahasa pemrograman, sulit di-estimasi di awal

**b. FP (Function Point) Based:**
- Estimasi berdasarkan **fungsionalitas** yang dilihat dari perspektif user
- **5 Information Domain Values:**
  1. **External Inputs (EI)** — input data dari user (form, upload)
  2. **External Outputs (EO)** — output data ke user (report, grafik)
  3. **External Inquiries (EQ)** — query yang menghasilkan response (search)
  4. **Internal Logical Files (ILF)** — logical data yang dimaintain dalam sistem (database tabel)
  5. **External Interface Files (EIF)** — data dari sistem lain yang direferensikan

- **Langkah perhitungan FP:**
  1. Hitung jumlah setiap tipe (EI, EO, EQ, ILF, EIF)
  2. Tentukan kompleksitas (Simple, Average, Complex) → dapat weight
  3. Hitung **Unadjusted FP (UFP)** = Σ (count × weight)
  4. Hitung **Value Adjustment Factor (VAF)** berdasarkan 14 General System Characteristics (0-5)
  5. **FP = UFP × (0.65 + 0.01 × Σ Fi)**

| Tipe | Simple | Average | Complex |
|------|--------|---------|---------|
| EI | 3 | 4 | 6 |
| EO | 4 | 5 | 7 |
| EQ | 3 | 4 | 6 |
| ILF | 7 | 10 | 15 |
| EIF | 5 | 7 | 10 |

#### 3. Empirical Estimation Models — COCOMO II
**COCOMO (COnstructive COst MOdel)** oleh Barry Boehm:

**Basic COCOMO:**
```
Effort (person-months) = a × (KLOC)^b
Duration (months) = c × (Effort)^d
```

| Mode | a | b | c | d | Keterangan |
|------|---|---|---|---|------------|
| Organic | 2.4 | 1.05 | 2.5 | 0.38 | Proyek kecil, tim berpengalaman |
| Semi-detached | 3.0 | 1.12 | 2.5 | 0.35 | Campuran pengalaman |
| Embedded | 3.6 | 1.20 | 2.5 | 0.32 | Proyek kompleks, constraint ketat |

**Contoh Perhitungan:**
Proyek 30 KLOC, mode Organic:
- Effort = 2.4 × (30)^1.05 = 2.4 × 33.13 = **79.5 person-months**
- Duration = 2.5 × (79.5)^0.38 = 2.5 × 5.98 = **14.9 months**

---

## 5.3 Project Scheduling

### Pentingnya Scheduling
- Mendistribusikan **effort** dalam timeframe proyek
- Memastikan **dependencies** antar task terpenuhi
- Mengidentifikasi **critical path**

### Task Network (Activity Network)
- Representasi grafis dari **task dan dependencies**
- Setiap node = task, setiap edge = dependency

### Critical Path Method (CPM)
- **Critical Path** = jalur terpanjang dalam task network = **durasi minimum proyek**
- Task di critical path **tidak boleh terlambat** (zero slack/float)
- Task di luar critical path punya **slack** (bisa terlambat tanpa mempengaruhi total durasi)

**Cara Menghitung:**
1. **Forward Pass**: hitung Earliest Start (ES) dan Earliest Finish (EF)
   - ES = max(EF dari semua predecessor)
   - EF = ES + Duration
2. **Backward Pass**: hitung Latest Start (LS) dan Latest Finish (LF)
   - LF = min(LS dari semua successor)
   - LS = LF - Duration
3. **Slack/Float** = LS - ES = LF - EF
4. **Critical Path** = semua task dengan Slack = 0

**Contoh:**
```
Task  | Durasi | Predecessor
------|--------|------------
A     | 3      | -
B     | 4      | A
C     | 2      | A
D     | 5      | B
E     | 3      | B, C
F     | 2      | D, E

Forward Pass:
A: ES=0, EF=3
B: ES=3, EF=7
C: ES=3, EF=5
D: ES=7, EF=12
E: ES=7, EF=10  (ES=max(EF_B, EF_C)=max(7,5)=7)
F: ES=12, EF=14 (ES=max(EF_D, EF_E)=max(12,10)=12)

Backward Pass (dari F, LF=14):
F: LF=14, LS=12
D: LF=12, LS=7
E: LF=12, LS=9
B: LF=7, LS=3  (LF=min(LS_D, LS_E)=min(7,9)=7)
C: LF=9, LS=7
A: LF=3, LS=0  (LF=min(LS_B, LS_C)=min(3,7)=3)

Slack: A=0, B=0, C=4, D=0, E=2, F=0
Critical Path: A → B → D → F (total: 3+4+5+2 = 14 hari)
```

### Gantt Chart
- Diagram batang yang menunjukkan **jadwal task** terhadap timeline
- Sumbu X = waktu, Sumbu Y = task
- Menampilkan: durasi, start/end date, overlap, milestones

### Earned Value Analysis (EVA)
Mengukur **progress proyek** secara kuantitatif:
- **BCWS (Planned Value)**: nilai pekerjaan yang direncanakan
- **BCWP (Earned Value)**: nilai pekerjaan yang sudah selesai
- **ACWP (Actual Cost)**: biaya aktual yang sudah dikeluarkan
- **SPI (Schedule Performance Index)** = BCWP / BCWS
  - SPI > 1: ahead of schedule ✅
  - SPI < 1: behind schedule ❌
- **CPI (Cost Performance Index)** = BCWP / ACWP
  - CPI > 1: under budget ✅
  - CPI < 1: over budget ❌

---

## 5.4 Risk Analysis and Management

### Apa itu Risk?
**Risiko** adalah potensi kejadian yang berdampak **negatif** pada proyek software. Karakteristik:
- **Uncertainty**: risiko mungkin/mungkin tidak terjadi (probabilitas 0-100%)
- **Loss**: jika terjadi, ada dampak/kerugian

### Kategori Risiko
1. **Project Risk**: ancaman terhadap project plan (jadwal, budget, resource)
2. **Technical Risk**: ancaman terhadap kualitas dan ketepatan waktu software
3. **Business Risk**: ancaman terhadap viability produk/organisasi

### 5 Tipe Business Risk
1. **Market Risk**: produk tidak ada pasarnya
2. **Strategic Risk**: produk tidak sesuai strategi bisnis
3. **Sales Risk**: produk tidak bisa dijual dengan baik
4. **Management Risk**: kehilangan dukungan top management
5. **Budget Risk**: kehilangan budget/komitmen finansial

### Proses Risk Management

#### 1. Risk Identification (Identifikasi Risiko)
- Buat daftar **semua risiko potensial** menggunakan checklist, brainstorming, pengalaman
- **Contoh risiko umum:**
  - Developer kunci resign
  - Requirement berubah drastis
  - Teknologi baru belum proven
  - Integrasi pihak ketiga bermasalah
  - Deadline tidak realistis

#### 2. Risk Analysis (Analisis Risiko)
Menilai setiap risiko berdasarkan:
- **Probability (Probabilitas)**: kemungkinan terjadi (rendah/sedang/tinggi atau 0-1)
- **Impact (Dampak)**: konsekuensi jika terjadi (rendah/sedang/tinggi atau 1-10)
- **Risk Exposure (RE)** = Probability × Impact

**Risk Table:**
| Risiko | Probabilitas | Dampak | RE | Prioritas |
|--------|-------------|--------|----|----|
| Developer kunci resign | 0.3 | 8 | 2.4 | Tinggi |
| Requirement berubah | 0.7 | 5 | 3.5 | Sangat Tinggi |
| Server down | 0.2 | 9 | 1.8 | Sedang |

#### 3. Risk Planning (Perencanaan Mitigasi)
Strategi menangani risiko:
- **Avoidance (Menghindari)**: ubah rencana agar risiko tidak terjadi
- **Mitigation (Mengurangi)**: kurangi probabilitas atau dampak
- **Contingency/Acceptance (Rencana Cadangan)**: siapkan plan B jika terjadi
- **Transfer**: pindahkan risiko ke pihak lain (asuransi, outsurance)

**Contoh Mitigasi:**
| Risiko | Strategi | Tindakan |
|--------|----------|----------|
| Developer resign | Mitigation | Cross-training, documentation, knowledge sharing |
| Requirement berubah | Avoidance | Gunakan Agile, frequent validation dengan customer |
| Server down | Transfer | Gunakan cloud provider dengan SLA 99.99% |

#### 4. Risk Monitoring (Pemantauan)
- Pantau risiko secara **berkala** sepanjang proyek
- Update risk table saat kondisi berubah
- Identifikasi risiko baru yang muncul
- Track indikator peringatan dini

### RMMM Plan (Risk Mitigation, Monitoring, and Management)
Dokumen formal yang mencakup:
- Daftar risiko dan penilaiannya
- Strategi mitigasi untuk setiap risiko
- Trigger/indikator untuk monitoring
- Contingency plan jika risiko terjadi

---

## CONTOH SOAL & JAWABAN — SOAL 5

### Case Study:
> PT InnoTech mendapatkan proyek pembangunan **Sistem Manajemen Inventori** untuk 50 cabang toko retail. Tim terdiri dari 8 developer, deadline 8 bulan. Proyek melibatkan integrasi dengan sistem POS yang sudah ada dan barcode scanner. Estimasi awal: 45 KLOC. Dua developer senior berencana pindah ke perusahaan lain dalam 3 bulan.

**Pertanyaan:**
1. Hitung estimasi effort dan durasi menggunakan Basic COCOMO (mode semi-detached) dan tentukan apakah deadline 8 bulan feasible! (5 poin)
2. Identifikasi 5 risiko utama proyek ini dan buatlah tabel analisis risiko lengkap dengan strategi mitigasinya! (5 poin)
3. Dengan task berikut, tentukan Critical Path dan durasi minimum proyek! (5 poin)

| Task | Durasi (minggu) | Predecessor |
|------|-----------------|-------------|
| T1: Analisis kebutuhan | 3 | - |
| T2: Design database | 4 | T1 |
| T3: Design UI/UX | 3 | T1 |
| T4: Development backend | 6 | T2 |
| T5: Development frontend | 5 | T3 |
| T6: Integrasi POS | 4 | T4 |
| T7: Integrasi barcode | 3 | T4 |
| T8: Testing & QA | 4 | T5, T6, T7 |
| T9: Deployment & training | 2 | T8 |

**Jawaban:**

**1. Estimasi COCOMO (Semi-detached):**

```
Effort = a × (KLOC)^b = 3.0 × (45)^1.12
       = 3.0 × 65.15
       = 195.45 person-months

Duration = c × (Effort)^d = 2.5 × (195.45)^0.35
         = 2.5 × 7.08
         = 17.7 months ≈ 18 bulan
```

**Analisis Feasibility:**
- Effort = 195.45 person-months, Tim = 8 orang
- Effort per orang = 195.45 / 8 = **24.4 bulan per orang**
- Durasi COCOMO = **18 bulan**, sedangkan deadline = **8 bulan**
- **TIDAK FEASIBLE** ❌ — deadline 8 bulan sangat agresif untuk proyek 45 KLOC dengan 8 developer
- **Rekomendasi**: Kurangi scope (incremental delivery), tambah developer, atau perpanjang deadline

**2. Risk Analysis:**

| # | Risiko | Prob. | Dampak | RE | Strategi | Tindakan Mitigasi |
|---|--------|-------|--------|-----|----------|-------------------|
| 1 | 2 developer senior resign (3 bulan) | 0.9 | 9 | 8.1 | **Mitigation** | Segera lakukan knowledge transfer & cross-training; dokumentasikan semua arsitektur; rekrut pengganti ASAP |
| 2 | Integrasi POS gagal/bermasalah | 0.5 | 8 | 4.0 | **Mitigation** | Riset API POS dari awal; buat prototype integrasi di sprint pertama; siapkan middleware adapter |
| 3 | Deadline tidak realistis (8 bulan) | 0.8 | 7 | 5.6 | **Avoidance** | Negosiasi ulang scope; gunakan incremental delivery (core features dulu); prioritaskan fitur MoSCoW |
| 4 | Kompatibilitas barcode scanner beragam | 0.4 | 5 | 2.0 | **Contingency** | Standarisasi hardware scanner untuk semua cabang; siapkan driver abstraction layer |
| 5 | Sinkronisasi data 50 cabang bermasalah | 0.6 | 8 | 4.8 | **Mitigation** | Gunakan arsitektur yang mendukung offline-first; implementasi conflict resolution; test dengan data besar |

**3. Critical Path:**

**Forward Pass:**
```
T1: ES=0,  EF=3
T2: ES=3,  EF=7    (predecessor: T1)
T3: ES=3,  EF=6    (predecessor: T1)
T4: ES=7,  EF=13   (predecessor: T2)
T5: ES=6,  EF=11   (predecessor: T3)
T6: ES=13, EF=17   (predecessor: T4)
T7: ES=13, EF=16   (predecessor: T4)
T8: ES=17, EF=21   (ES = max(EF_T5, EF_T6, EF_T7) = max(11,17,16) = 17)
T9: ES=21, EF=23   (predecessor: T8)
```

**Backward Pass (LF T9 = 23):**
```
T9: LF=23, LS=21
T8: LF=21, LS=17
T6: LF=17, LS=13   (Slack = 13-13 = 0) ★
T7: LF=17, LS=14   (Slack = 14-13 = 1)
T5: LF=17, LS=12   (Slack = 12-6 = 6)
T4: LF=13, LS=7    (Slack = 7-7 = 0) ★
T3: LF=12, LS=9    (Slack = 9-3 = 6)
T2: LF=7,  LS=3    (Slack = 3-3 = 0) ★
T1: LF=3,  LS=0    (Slack = 0-0 = 0) ★
```

**Critical Path: T1 → T2 → T4 → T6 → T8 → T9**
**Durasi minimum proyek: 23 minggu ≈ 5.75 bulan**

Catatan: Critical path melewati jalur analisis → database design → backend → integrasi POS → testing → deployment. Task T3, T5 (frontend), dan T7 (barcode) memiliki slack, sehingga bisa terlambat tanpa memengaruhi total durasi.
