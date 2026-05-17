# 📚 Materi UTS Software Security — BINUS University

> **Mata Kuliah:** Software Security  
> **Jenis:** Kisi-Kisi UTS  
> **Bahasa:** Indonesia

---

## BAB 1: THREAT MODELING (Study Case)

### 1.1 Definisi Threat Modeling

**Threat Modeling** adalah proses sistematis untuk mengidentifikasi, mengevaluasi, dan memprioritaskan potensi ancaman keamanan terhadap suatu sistem perangkat lunak. Tujuannya adalah menemukan kerentanan (vulnerability) sebelum penyerang (attacker) mengeksploitasinya.

### 1.2 Tujuan Threat Modeling

1. **Mengidentifikasi aset** yang perlu dilindungi
2. **Menemukan ancaman** yang mungkin menyerang sistem
3. **Menentukan kerentanan** yang dapat dieksploitasi
4. **Memprioritaskan risiko** berdasarkan dampak dan kemungkinan
5. **Merancang mitigasi** yang tepat dan efektif

### 1.3 Metodologi Threat Modeling

#### a) STRIDE (Microsoft)

| Kategori | Deskripsi | Contoh |
|---|---|---|
| **S**poofing | Menyamar sebagai entitas lain | Pemalsuan identitas login |
| **T**ampering | Mengubah data tanpa izin | Modifikasi data transaksi |
| **R**epudiation | Menyangkal tindakan yang dilakukan | User menyangkal telah melakukan transaksi |
| **I**nformation Disclosure | Kebocoran informasi sensitif | Data pelanggan bocor |
| **D**enial of Service | Membuat layanan tidak tersedia | Serangan DDoS |
| **E**levation of Privilege | Mendapatkan hak akses lebih tinggi | User biasa jadi admin |

#### b) DREAD (Risk Rating)

| Faktor | Pertanyaan |
|---|---|
| **D**amage | Seberapa besar kerusakan jika serangan berhasil? |
| **R**eproducibility | Seberapa mudah serangan diulang? |
| **E**xploitability | Seberapa mudah melakukan serangan? |
| **A**ffected Users | Berapa banyak pengguna terdampak? |
| **D**iscoverability | Seberapa mudah kerentanan ditemukan? |

> Setiap faktor dinilai skala 1-10. Total skor menentukan prioritas penanganan.

#### c) PASTA (Process for Attack Simulation and Threat Analysis)

7 tahapan:
1. Definisi Objektif Bisnis
2. Definisi Lingkup Teknis
3. Dekomposisi Aplikasi
4. Analisis Ancaman
5. Analisis Kerentanan
6. Enumerasi Serangan
7. Analisis Risiko & Dampak

### 1.4 Langkah-Langkah Threat Modeling

```
1. Identifikasi Aset → Apa yang dilindungi?
2. Buat Diagram Arsitektur → DFD (Data Flow Diagram)
3. Identifikasi Ancaman → Gunakan STRIDE
4. Identifikasi Kerentanan → Titik lemah sistem
5. Evaluasi Risiko → Gunakan DREAD
6. Tentukan Mitigasi → Solusi keamanan
7. Validasi → Uji ulang
```

### 1.5 Studi Kasus: Sistem E-Commerce

**Skenario:** Sebuah platform e-commerce "TokoOnline" memiliki fitur: login, katalog produk, keranjang belanja, pembayaran, dan riwayat pesanan.

**Analisis STRIDE:**

| Ancaman | Contoh pada TokoOnline | Mitigasi |
|---|---|---|
| Spoofing | Attacker login dengan kredensial curian | MFA, CAPTCHA, rate limiting |
| Tampering | Mengubah harga produk di request | Server-side validation, digital signature |
| Repudiation | Pembeli menyangkal transaksi | Logging lengkap, audit trail |
| Info Disclosure | SQL Injection membocorkan data kartu kredit | Parameterized queries, enkripsi data |
| DoS | Flooding server dengan request | WAF, CDN, rate limiting |
| EoP | Mengubah role dari buyer → admin | RBAC, session validation |

### 1.6 Data Flow Diagram (DFD) dalam Threat Modeling

DFD digunakan untuk memetakan aliran data dalam sistem dan mengidentifikasi **trust boundary** (batas kepercayaan).

Elemen DFD:
- **External Entity** (kotak) — pengguna/sistem eksternal
- **Process** (lingkaran) — proses yang mengolah data
- **Data Store** (garis paralel) — penyimpanan data
- **Data Flow** (panah) — arah aliran data
- **Trust Boundary** (garis putus-putus) — batas kepercayaan

---

## BAB 2: BRAINSTORMING

### 2.1 Definisi Brainstorming dalam Software Security

Brainstorming dalam konteks software security adalah teknik kolaboratif untuk mengidentifikasi potensi ancaman, kerentanan, dan skenario serangan dengan melibatkan berbagai perspektif dari tim pengembang, security analyst, dan stakeholder.

### 2.2 Scenario Analysis (Analisis Skenario)

#### Definisi
Teknik untuk mengeksplorasi kemungkinan kejadian di masa depan dengan membuat skenario "bagaimana jika" (what-if) terkait keamanan sistem.

#### Langkah-langkah:
1. **Tentukan ruang lingkup** — sistem/fitur yang dianalisis
2. **Identifikasi aktor** — siapa saja yang berinteraksi (user, admin, attacker)
3. **Buat skenario** — rangkaian kejadian yang mungkin terjadi
4. **Analisis dampak** — apa konsekuensi dari setiap skenario
5. **Tentukan respons** — bagaimana sistem harus merespons

#### Contoh Scenario Analysis:

**Sistem:** Aplikasi Mobile Banking

| Skenario | Deskripsi | Dampak | Mitigasi |
|---|---|---|---|
| Skenario 1 | User kehilangan HP yang sudah login | Akses tidak sah ke rekening | Auto-logout, biometric lock, remote wipe |
| Skenario 2 | Attacker melakukan MITM pada WiFi publik | Pencurian data transaksi | Certificate pinning, E2E encryption |
| Skenario 3 | Insider threat dari developer | Backdoor dalam kode | Code review, least privilege, audit |
| Skenario 4 | API key bocor di GitHub | Akses tidak sah ke backend | Secret management, key rotation |

### 2.3 Premortem Analysis

#### Definisi
Teknik di mana tim **membayangkan bahwa proyek/sistem telah GAGAL** dan kemudian bekerja mundur untuk mengidentifikasi penyebab kegagalan. Berbeda dengan postmortem yang dilakukan setelah kejadian, premortem dilakukan **sebelum** sistem di-deploy.

#### Prinsip Utama:
- Asumsikan sistem **sudah** diretas/gagal
- Tim diminta menjelaskan **mengapa** kegagalan terjadi
- Fokus pada **penyebab**, bukan solusi (di tahap awal)

#### Langkah-langkah Premortem:
1. **Pernyataan:** "Sistem kita telah diretas dan data bocor. Ini adalah berita utama di media."
2. **Individual brainstorm:** Setiap anggota tim menulis kemungkinan penyebab
3. **Sharing:** Semua penyebab dikumpulkan dan dibahas
4. **Prioritasi:** Penyebab diurutkan berdasarkan kemungkinan dan dampak
5. **Action plan:** Buat rencana pencegahan untuk setiap penyebab

#### Contoh Premortem:

**Konteks:** Tim mengembangkan sistem rekam medis online (Electronic Health Record).

**Headline fiktif:** *"Data 10 Juta Pasien Bocor dari Sistem EHR — Termasuk Riwayat Penyakit dan NIK"*

**Hasil brainstorm penyebab:**

| # | Penyebab Potensial | Kemungkinan | Dampak | Prioritas |
|---|---|---|---|---|
| 1 | SQL Injection pada form pencarian pasien | Tinggi | Kritis | P1 |
| 2 | Tidak ada enkripsi pada database backup | Tinggi | Kritis | P1 |
| 3 | Password admin default tidak diganti | Sedang | Kritis | P2 |
| 4 | API endpoint tidak terotentikasi | Tinggi | Tinggi | P1 |
| 5 | Log file berisi data sensitif tanpa proteksi | Sedang | Tinggi | P2 |
| 6 | Third-party library memiliki CVE yang belum dipatch | Tinggi | Tinggi | P1 |

### 2.4 Movie Plotting (Plot Film)

#### Definisi
Teknik brainstorming kreatif di mana tim membuat **skenario serangan seperti plot film thriller/action**. Tim berperan sebagai "penjahat" dan merancang serangan paling dramatis dan merusak terhadap sistem.

#### Tujuan:
- Berpikir seperti attacker (**adversarial thinking**)
- Menemukan skenario serangan yang tidak terpikirkan dengan metode konvensional
- Mendorong kreativitas dan out-of-the-box thinking

#### Langkah-langkah Movie Plotting:
1. **Tentukan "film"** — berikan judul dramatis untuk skenario
2. **Tentukan "tokoh"** — siapa attacker, apa motivasinya
3. **Buat "plot"** — rangkaian langkah serangan detail
4. **Tentukan "klimaks"** — dampak terburuk yang terjadi
5. **Buat "twist"** — bagaimana serangan bisa dicegah

#### Contoh Movie Plot:

**Judul Film:** *"The Silent Breach — Peretasan Tanpa Jejak"*

**Tokoh:**
- **Villain:** Mantan karyawan IT yang dipecat (insider threat)
- **Target:** Sistem perbankan digital "BankKu"
- **Motivasi:** Dendam dan keuntungan finansial

**Plot:**
```
ACT 1 - PERSIAPAN
- Villain masih memiliki VPN credential yang belum di-revoke
- Villain mempelajari arsitektur sistem yang ia bantu kembangkan
- Villain membuat malware custom yang tidak terdeteksi antivirus

ACT 2 - INFILTRASI
- Villain connect via VPN pada jam 2 pagi (low monitoring)
- Menggunakan credential lama untuk akses sistem internal
- Memasang backdoor di server development
- Lateral movement ke server production

ACT 3 - EKSEKUSI
- Mengubah logic transfer untuk menyisipkan transaksi mikro
- Setiap transaksi dibulatkan ke bawah, selisih masuk ke rekening villain
- Total kerugian: Rp 50 Miliar dalam 6 bulan

ACT 4 - RESOLUSI (Pencegahan)
- Implementasi offboarding procedure yang ketat
- Revoke semua credential saat karyawan keluar
- Monitoring anomali transaksi dengan AI/ML
- Zero Trust Architecture
- Regular access review
```

---

## BAB 3: ATTACK TREE

### 3.1 Definisi Attack Tree

**Attack Tree** adalah model hierarkis berbentuk pohon yang merepresentasikan berbagai cara (jalur serangan) untuk mencapai tujuan serangan tertentu. Dikembangkan oleh **Bruce Schneier** pada tahun 1999.

### 3.2 Struktur Attack Tree

```
            [ROOT: Tujuan Serangan]
                  /        \
          [Sub-goal 1]  [Sub-goal 2]
           /      \          |
     [Leaf 1] [Leaf 2]  [Leaf 3]
```

- **Root Node (Akar):** Tujuan utama attacker
- **Intermediate Node:** Sub-tujuan yang perlu dicapai
- **Leaf Node (Daun):** Aksi konkret/spesifik yang dilakukan attacker
- **AND Node:** Semua child harus tercapai
- **OR Node:** Salah satu child cukup tercapai

### 3.3 Notasi Attack Tree

| Simbol | Arti |
|---|---|
| **OR** | Cukup salah satu jalur berhasil |
| **AND** | Semua jalur harus berhasil secara bersamaan |
| **[P]** | Possible — serangan mungkin dilakukan |
| **[I]** | Impossible — serangan tidak mungkin/sangat sulit |
| **Cost** | Biaya yang dibutuhkan attacker |
| **Probability** | Kemungkinan keberhasilan |

### 3.4 Contoh Attack Tree: Mencuri Data Pengguna

```
ROOT: Mencuri Data Pengguna dari Aplikasi Web
│
├── [OR] 1. Melalui Jaringan
│   ├── [OR] 1.1 Man-in-the-Middle Attack
│   │   ├── 1.1.1 ARP Spoofing di jaringan lokal [P, Cost: Rendah]
│   │   └── 1.1.2 DNS Hijacking [P, Cost: Sedang]
│   └── [OR] 1.2 Sniffing Traffic
│       ├── 1.2.1 HTTP tanpa SSL [P, Cost: Rendah]
│       └── 1.2.2 Downgrade Attack pada TLS [P, Cost: Tinggi]
│
├── [OR] 2. Melalui Aplikasi
│   ├── [OR] 2.1 Injection Attack
│   │   ├── 2.1.1 SQL Injection [P, Cost: Rendah]
│   │   ├── 2.1.2 XSS untuk mencuri session [P, Cost: Rendah]
│   │   └── 2.1.3 LDAP Injection [P, Cost: Sedang]
│   └── [AND] 2.2 Authentication Bypass
│       ├── 2.2.1 Brute force password [P, Cost: Rendah]
│       └── 2.2.2 Bypass MFA [P, Cost: Tinggi]
│
├── [OR] 3. Melalui Infrastruktur
│   ├── 3.1 Eksploitasi server yang unpatched [P, Cost: Sedang]
│   └── 3.2 Akses backup database yang tidak terenkripsi [P, Cost: Rendah]
│
└── [OR] 4. Social Engineering
    ├── 4.1 Phishing ke admin [P, Cost: Rendah]
    └── 4.2 Pretexting ke helpdesk [P, Cost: Rendah]
```

### 3.5 Kegunaan Attack Tree

1. **Visualisasi** jalur serangan secara komprehensif
2. **Prioritasi** mitigasi berdasarkan cost/probability
3. **Komunikasi** risiko ke stakeholder non-teknis
4. **Dokumentasi** analisis keamanan
5. **Compliance** — memenuhi standar keamanan (ISO 27001, NIST)

### 3.6 Cara Membuat Attack Tree

1. **Tentukan root goal** — apa tujuan attacker?
2. **Dekomposisi** — pecah menjadi sub-goal
3. **Identifikasi leaf** — tentukan aksi spesifik
4. **Tentukan relasi** — AND atau OR
5. **Beri atribut** — cost, probability, possible/impossible
6. **Analisis** — temukan jalur termurah/termudah
7. **Mitigasi** — prioritaskan pencegahan pada jalur berisiko tinggi

---

## BAB 4: CHESS STRATEGY (Strategi Catur dalam Software Security)

### 4.1 Konsep Chess Strategy

Dalam software security, **Chess Strategy** adalah pendekatan yang menganalogikan keamanan perangkat lunak dengan permainan catur. Defenders (tim keamanan) dan Attackers (penyerang) saling berusaha mengalahkan satu sama lain.

### 4.2 Analogi Catur-Security

| Konsep Catur | Konsep Security |
|---|---|
| Raja (King) | Aset paling berharga (data sensitif, core system) |
| Benteng (Rook) | Firewall, WAF — pertahanan utama |
| Kuda (Knight) | Penetration tester — bergerak tidak terduga |
| Gajah (Bishop) | IDS/IPS — monitoring diagonal/jauh |
| Menteri (Queen) | SIEM — paling powerful, multi-fungsi |
| Pion (Pawn) | Defense in depth — lapisan pertahanan pertama |
| Skak Mat | Full system compromise |
| Gambit | Honeypot — mengorbankan aset palsu untuk menjebak attacker |

### 4.3 Prinsip-Prinsip Chess Strategy

#### a) Think Ahead (Berpikir ke Depan)
- Dalam catur: Pemain harus berpikir beberapa langkah ke depan
- Dalam security: **Proactive security** — antisipasi serangan sebelum terjadi
- Implementasi: Threat modeling, security by design

#### b) Control the Center (Kontrol Pusat)
- Dalam catur: Menguasai pusat papan memberikan keuntungan strategis
- Dalam security: **Kontrol aset kritis** — lindungi core system terlebih dahulu
- Implementasi: Zero Trust Architecture, identity management

#### c) Protect the King (Lindungi Raja)
- Dalam catur: Raja harus dilindungi di semua biaya
- Dalam security: **Lindungi crown jewels** — data dan sistem paling kritis
- Implementasi: Enkripsi, access control, segmentasi jaringan

#### d) Defense in Depth (Pertahanan Berlapis)
- Dalam catur: Tidak mengandalkan satu bidak untuk pertahanan
- Dalam security: **Multiple layers of security**
- Implementasi: Firewall + IDS + WAF + Enkripsi + MFA

#### e) Sacrifice (Pengorbanan Strategis)
- Dalam catur: Mengorbankan bidak untuk keuntungan posisi
- Dalam security: **Honeypot/Honeynet** — menjebak attacker dengan aset palsu
- Implementasi: Decoy systems, canary tokens

#### f) Tempo & Initiative
- Dalam catur: Mengambil inisiatif dan tidak reaktif
- Dalam security: **Incident response yang cepat**, patching proaktif
- Implementasi: SOAR (Security Orchestration, Automation and Response)

### 4.4 Penerapan Chess Strategy

#### Skenario: Perusahaan FinTech

```
OPENING (Fase Awal — Design & Development)
├── Threat Modeling sejak awal (STRIDE/DREAD)
├── Secure coding standards
├── Security requirements dalam backlog
└── SAST (Static Analysis) di CI/CD pipeline

MIDDLE GAME (Fase Operasional)
├── Monitoring real-time (SIEM)
├── Vulnerability scanning berkala
├── Penetration testing
├── Security awareness training
└── Incident response drill

END GAME (Fase Respons Insiden)
├── Incident detection & triage
├── Containment & eradication
├── Recovery & restoration
├── Post-incident review (lessons learned)
└── Update defense strategy
```

---

## BAB 5: SOAL DAN JAWABAN

### Soal 1 — Threat Modeling (Pilihan Ganda)

**1.1** Dalam metodologi STRIDE, ancaman "Tampering" mengacu pada:
- A. Menyamar sebagai pengguna lain
- B. Mengubah data tanpa izin ✅
- C. Membuat layanan tidak tersedia
- D. Mendapatkan hak akses lebih tinggi

**1.2** Faktor mana dalam DREAD yang mengevaluasi "seberapa mudah serangan diulangi"?
- A. Damage
- B. Reproducibility ✅
- C. Exploitability
- D. Discoverability

**1.3** Trust boundary dalam DFD ditandai dengan:
- A. Garis lurus
- B. Lingkaran
- C. Garis putus-putus ✅
- D. Kotak

**1.4** Metodologi PASTA memiliki berapa tahapan?
- A. 5
- B. 6
- C. 7 ✅
- D. 8

**1.5** Dalam STRIDE, "Repudiation" berarti:
- A. Mencuri informasi
- B. Menyangkal tindakan yang telah dilakukan ✅
- C. Menyerang ketersediaan layanan
- D. Memodifikasi data

---

### Soal 2 — Brainstorming (Essay)

**2.1** Jelaskan perbedaan antara Premortem dan Postmortem dalam konteks software security!

> **Jawaban:**
> - **Premortem** dilakukan **SEBELUM** sistem di-deploy atau insiden terjadi. Tim membayangkan bahwa sistem telah gagal/diretas dan bekerja mundur untuk mengidentifikasi penyebab potensial. Tujuannya preventif.
> - **Postmortem** dilakukan **SETELAH** insiden terjadi. Tim menganalisis apa yang terjadi, mengapa terjadi, dan bagaimana mencegah kejadian serupa. Tujuannya korektif.
> - **Keuntungan premortem:** Lebih murah dan efektif karena masalah dicegah sebelum terjadi. Menghilangkan bias "ini tidak akan terjadi" karena tim diminta mengasumsikan kegagalan sudah terjadi.

**2.2** Buatlah contoh Movie Plot untuk serangan terhadap sistem Smart Home!

> **Jawaban:**
> **Judul:** *"Home Invasion 2.0"*
>
> **Villain:** Hacker yang menarget keluarga kaya melalui perangkat IoT
>
> **Plot:**
> 1. Attacker menemukan smart lock merk X memiliki vulnerability Bluetooth (CVE publik)
> 2. Attacker melakukan wardriving di area perumahan mewah
> 3. Menemukan target dengan smart lock vulnerable
> 4. Melakukan exploit Bluetooth untuk membuka kunci pintu
> 5. Mematikan CCTV melalui smart home hub yang sudah terkompromi
> 6. Mencuri barang berharga tanpa jejak digital
>
> **Pencegahan:** Firmware update otomatis, network segmentation IoT, anomaly detection, physical backup lock.

**2.3** Lakukan Scenario Analysis untuk sistem e-learning universitas! Berikan minimal 3 skenario.

> **Jawaban:**
>
> | Skenario | Deskripsi | Dampak | Mitigasi |
> |---|---|---|---|
> | Mahasiswa mengubah nilai | SQL Injection pada form input nilai | Integritas data akademik rusak | Parameterized query, RBAC ketat untuk akses nilai |
> | DDoS saat UTS online | Attacker membanjiri server saat ujian berlangsung | Ribuan mahasiswa tidak bisa ujian | CDN, auto-scaling, backup server, ujian offline sebagai contingency |
> | Kebocoran soal ujian | Akses tidak sah ke bank soal melalui API yang terbuka | Kecurangan massal | API authentication, enkripsi soal, akses time-limited |

---

### Soal 3 — Attack Tree (Studi Kasus)

**3.1** Gambarkan attack tree untuk tujuan serangan: **"Mengambil alih akun admin pada CMS WordPress"**

> **Jawaban:**
> ```
> ROOT: Mengambil Alih Akun Admin WordPress
> │
> ├── [OR] 1. Credential Attack
> │   ├── 1.1 Brute Force wp-login.php [P, Cost: Rendah]
> │   ├── 1.2 Credential Stuffing dari data breach [P, Cost: Rendah]
> │   └── 1.3 Phishing ke admin [P, Cost: Rendah]
> │
> ├── [OR] 2. Exploit Vulnerability
> │   ├── 2.1 Plugin vulnerability (RCE) [P, Cost: Sedang]
> │   ├── 2.2 Theme vulnerability (LFI/RFI) [P, Cost: Sedang]
> │   └── 2.3 WordPress core exploit (0-day) [P, Cost: Tinggi]
> │
> ├── [OR] 3. Session Hijacking
> │   ├── [AND] 3.1 XSS + Cookie Stealing
> │   │   ├── 3.1.1 Temukan XSS vulnerability [P]
> │   │   └── 3.1.2 Inject script pencuri cookie [P]
> │   └── 3.2 Session Fixation [P, Cost: Sedang]
> │
> └── [OR] 4. Server-Level Attack
>     ├── 4.1 Akses database langsung (MySQL) [P, Cost: Tinggi]
>     └── 4.2 File upload vulnerability → webshell [P, Cost: Sedang]
> ```
>
> **Analisis:** Jalur termurah dan termudah adalah **1.1 Brute Force** dan **1.2 Credential Stuffing**. Mitigasi prioritas: implementasi rate limiting, MFA, dan strong password policy.

**3.2** Apa perbedaan antara node AND dan OR dalam attack tree?

> **Jawaban:**
> - **OR Node:** Attacker hanya perlu berhasil pada **salah satu** child node untuk mencapai parent goal. Contoh: Untuk mencuri data, attacker bisa melalui SQL Injection ATAU melalui phishing — cukup satu yang berhasil.
> - **AND Node:** Attacker harus berhasil pada **SEMUA** child node untuk mencapai parent goal. Contoh: Untuk melakukan session hijacking via XSS, attacker harus menemukan XSS vulnerability DAN berhasil menginjeksi script pencuri cookie — keduanya harus berhasil.

---

### Soal 4 — Chess Strategy (Essay)

**4.1** Jelaskan konsep "Defense in Depth" menggunakan analogi catur!

> **Jawaban:**
> Dalam catur, pemain yang baik tidak mengandalkan satu bidak untuk melindungi raja. Ia menggunakan pion sebagai barrier pertama, diikuti knight/bishop sebagai lapisan kedua, dan rook/queen sebagai lapisan terakhir.
>
> Dalam software security, hal ini diterjemahkan menjadi:
> - **Pion (Layer 1):** Firewall, input validation — pertahanan terluar
> - **Knight/Bishop (Layer 2):** IDS/IPS, WAF — deteksi dan pencegahan
> - **Rook (Layer 3):** Enkripsi data, access control — proteksi data
> - **Queen/SIEM (Layer 4):** Monitoring, logging — deteksi anomali
> - **King Castle (Layer 5):** Backup, disaster recovery — last resort
>
> Jika satu lapisan ditembus, lapisan berikutnya masih melindungi raja (aset kritis).

**4.2** Bagaimana konsep "Gambit" dalam catur diterapkan dalam keamanan software?

> **Jawaban:**
> Dalam catur, gambit adalah mengorbankan bidak (biasanya pion) untuk mendapatkan keuntungan posisi. Dalam security, ini diterapkan melalui **Honeypot/Honeynet**:
>
> - **Honeypot** adalah sistem palsu yang sengaja dibuat rentan untuk menarik attacker
> - Tim security "mengorbankan" sistem palsu ini untuk:
>   1. Mempelajari teknik dan tools yang digunakan attacker
>   2. Mengalihkan perhatian attacker dari sistem asli
>   3. Mengumpulkan intelligence untuk memperkuat pertahanan
>   4. Mendeteksi serangan lebih awal
>
> Contoh: Memasang database palsu berisi data dummy yang terlihat seperti data kartu kredit. Ketika attacker mengaksesnya, alert langsung terpicu dan tim security bisa merespons.

**4.3** Sebutkan dan jelaskan 3 prinsip chess strategy yang paling relevan dengan software security!

> **Jawaban:**
>
> 1. **Think Ahead (Berpikir ke Depan):** Seperti grandmaster yang memikirkan 5-10 langkah ke depan, security engineer harus proaktif melakukan threat modeling dan antisipasi serangan sebelum terjadi. Ini termasuk secure SDLC, threat modeling di fase design, dan security testing sebelum deployment.
>
> 2. **Control the Center (Kontrol Pusat):** Dalam catur, menguasai pusat papan memberi kontrol strategis. Dalam security, ini berarti mengontrol identity dan access management sebagai "pusat" keamanan. Zero Trust Architecture menerapkan prinsip ini: verifikasi setiap akses, jangan pernah percaya secara default.
>
> 3. **Defense in Depth (Pertahanan Berlapis):** Tidak mengandalkan satu mekanisme keamanan. Seperti formasi catur yang menggunakan multiple piece untuk pertahanan, sistem harus memiliki firewall + IDS + WAF + enkripsi + MFA + monitoring sebagai lapisan pertahanan berlapis.

---

### Soal 5 — Soal Campuran (Integratif)

**5.1** Sebuah startup fintech akan meluncurkan aplikasi pembayaran digital. Lakukan analisis keamanan komprehensif menggunakan semua 4 konsep yang telah dipelajari!

> **Jawaban:**
>
> **A. Threat Modeling (STRIDE):**
> - Spoofing: Pemalsuan identitas pembayar → Mitigasi: eKYC, biometric
> - Tampering: Pengubahan jumlah transaksi → Mitigasi: digital signature
> - Repudiation: Penyangkalan transaksi → Mitigasi: blockchain audit trail
> - Info Disclosure: Kebocoran data keuangan → Mitigasi: encryption at rest & transit
> - DoS: Serangan ke payment gateway → Mitigasi: rate limiting, redundancy
> - EoP: Eskalasi ke admin dashboard → Mitigasi: strict RBAC, MFA admin
>
> **B. Brainstorming - Premortem:**
> Headline: *"Jutaan Rupiah Raib — Aplikasi FinTech ABC Diretas Hacker"*
> - Penyebab: API payment tidak tervalidasi properly
> - Penyebab: Hardcoded API key di mobile app
> - Penyebab: Tidak ada fraud detection system
>
> **C. Attack Tree:**
> ```
> ROOT: Mencuri Uang dari Aplikasi Pembayaran
> ├── [OR] API Exploitation → Man-in-the-middle
> ├── [OR] Reverse Engineering APK → Extract API keys
> ├── [OR] Social Engineering → Phishing ke customer  
> └── [AND] Account Takeover → Credential + Bypass OTP
> ```
>
> **D. Chess Strategy:**
> - Opening: Security by design, threat modeling
> - Middle: Fraud detection AI, real-time monitoring
> - Endgame: Incident response plan, cyber insurance
> - Gambit: Honeypot account untuk deteksi fraud

---

## RANGKUMAN KUNCI

| Topik | Kata Kunci | Poin Penting |
|---|---|---|
| Threat Modeling | STRIDE, DREAD, DFD, Trust Boundary | Proses sistematis identifikasi ancaman |
| Scenario Analysis | What-if, Aktor, Dampak, Respons | Eksplorasi kemungkinan serangan |
| Premortem | "Sudah gagal", Kerja mundur, Preventif | Imajinasi kegagalan sebelum terjadi |
| Movie Plotting | Adversarial thinking, Plot, Kreatif | Berpikir seperti attacker |
| Attack Tree | Root, AND/OR, Leaf, Cost, Probability | Visualisasi hierarkis jalur serangan |
| Chess Strategy | Defense in Depth, Think Ahead, Gambit | Analogi strategis keamanan |

---

> **Tips UTS:**
> - Pahami **STRIDE** dan bisa mengaplikasikan ke studi kasus apapun
> - Bisa membuat **Attack Tree** lengkap dengan notasi AND/OR
> - Pahami perbedaan **Premortem vs Postmortem**
> - Hafal analogi **Chess Strategy** dan penerapannya
> - Latih membuat **skenario brainstorming** untuk berbagai sistem
